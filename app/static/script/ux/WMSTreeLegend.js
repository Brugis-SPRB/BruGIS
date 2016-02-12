/**
 * Copyright (c) Brugis (S.P.R.B)
 *
 * Published under the GPL V3 license.
 * See www.gnu.org/licences/gpl-3.0 for the full text
 * of the license.
 */

/**
 * @requires plugins/Tool.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = WMSTreeLegend
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: AddLayers(config)
 *
 *    Plugin for getting preconfigured list with tree of wms layer
 */
ux.plugins.WMSTreeLegend = Ext.extend(gxp.plugins.Tool, {
    /** api: ptype = ux_wmstreelegend */
    ptype: "ux_wmstreelegend",

    /** api: config[menuText]
     *  ``String``
     *  Text for legend menu item (i18n).
     */
    menuText: "",

    /** api: config[tooltip]
     *  ``String``
     *  Text for legend action tooltip (i18n).
     */
    tooltip: "Show Brussels Urban Development Data",

    /** api: config[actionTarget]
     *  ``Object`` or ``String`` or ``Array`` Where to place the tool's actions
     *  (e.g. buttons or menus)? Use null as the default since our tool has both
     *  output and action(s).
     */
    actionTarget: null,

	  sourceName : "",

	  noTileslayersList: ["AATL_DMS_SITE_ARBR:Arbres_remarquables",
						            "AATL_DMS_SITE_ARBR:Arbres_remarquables_abattus_ou_disparus",
						            "BROH_DML_LAND_BOOM:Opmerkelijke_bomen",
						            "BROH_DML_LAND_BOOM:Gevelde_of_verdwenen_bomen",
                        "bm_public_space:trees",
                        "BDU_DLO_CLI:Sibelga_BC",
                        "BDU_DLO_CLI:HydroBru_BC",
                        "BDU_DLO_CLI:BCx2"],

    /** private: method[constructor]
     */
    constructor: function(config) {
		  ux.plugins.WMSTreeLegend.superclass.constructor.apply(this, arguments);
      if (!this.outputConfig) {
        this.outputConfig = {
		      autoWidth: true,
		      autoHeight: true
        };
      }
      Ext.applyIf(this.outputConfig, {title: this.menuText});
    },

    /** api: method[addActions]
     */
    addActions: function() {
      var actions = [{
          menuText: this.menuText,
          iconCls: "gxp-icon-legend",
          tooltip: this.tooltip,
          handler: function() {
              this.removeOutput();
			        this.addOutput();
          },
          scope: this
      }];

  		var unselectLayer = function(obj,record,index) {
  			if(record.NodeId) {
  				var theGoodNode = Ext.getCmp("wmsTree").getNodeById(record.NodeId);
  				theGoodNode.getUI().toggleCheck(false);
  			}
  		};

  		var addLayer = function(obj,record,index) {
  			if(this.cheking == false){
  				this.reloading = true;
  				for(i=0, l=record.length; i<l; i++) {
            if (record[i].json) {
  						var myLayerName = record[i].json.name;
  						this.checkAndExpandNodeFromLayerName(myLayerName,record[i]);
  					}
  				}
  				this.reloading = false;
  			}
  		};

  		this.target.mapPanel.layers.on({
  			"add": { fn : addLayer , scope: this},
  			"remove" : {fn : unselectLayer, scope: this}
  		});

      return ux.plugins.WMSTreeLegend.superclass.addActions.apply(this, [actions]);
    },

    /** api: method[getLegendPanel]
     *  :returns: ``GeoExt.LegendPanel``
     *
     *  Get the legend panel associated with this legend plugin.
     */
    getLegendPanel: function() {
      return this.output[0];
    },

  	checkAndExpandNodeFromLayerName: function(myLayerName,layerRecord) {
  		var node = Ext.getCmp("wmsTree").root.findChildBy(function(curnode) {
  			if(curnode.attributes.layer && curnode.leaf) {
  				var nodeLayerName = curnode.attributes.layer.metadata.name;
  				if(nodeLayerName == myLayerName) {
  					return true;
  				}
  			}
  			return false;
  		}, Ext.getCmp("wmsTree").root, true);

  		if (node && layerRecord) {
  			var treepanel = Ext.getCmp("wmsTree");
  			treepanel.expandPath(node.getPath());
  			node.getUI().toggleCheck(true);
  			//remember the node id for unchecking the node
  			layerRecord["NodeId"] = node.id;
  			// remember the record in the node for removing
  			node.attributes["record"] = layerRecord;
  		}
  	},

  	findSource: function(keywords) {
  		var source = this.target.layerSources[this.sourceName];
  		keywords.forEach(function(element, index, array) {
  			if(element in this.target.layerSources) {
  				source = this.target.layerSources[element];
  			}
  		},this);
  		return source;
  	},

    findSldUrl: function(keywords) {
      var sldUrl = null;
      var sldUrlStringKeyRegExp = /sldUrl /;
      keywords.forEach(function(element, index, array) {
        if(element.search(sldUrlStringKeyRegExp) != -1){
          sldUrl = element.split(" ")[1];
          // Not sure if needed...
          //sldUrl = encodeURIComponent(sldUrl);
        }
      },this);
      return sldUrl;
    },

  createAndAddLayerToMap: function(node,source,sldUrl) {
    this.cheking = true;
    var layer = node.attributes.layer; //type : Openlayer.WmsLayer

    var record = source.createLayerRecord({
      name : layer.params.LAYERS,
      url: layer.url,
      source: source.id,
      queryable: true,
      buffer: 0
    });

    if(record) {
      //NDU 24/01/2014 Fix Geowecache HIT Alignement de grid
      //12/02/2016 required if remote layer does not have bbox info
      record.data.layer.addOptions({
        tileOrigin: new OpenLayers.LonLat(140000, 160000)
      });

      // DOCG 15/09/2015 Hack to apply localized SLD to WMS layer out of our publication
      if (sldUrl) {
        record.data.layer.params.SLD = sldUrl;
        //console.log("sldUrl present and applied to the layer");
      };

      // DOCG 19/07/2013 Hack pour afficher les symboles des arbres sans les tronquer en bord de tuile. voir bug #179
      for (var i=this.noTileslayersList.length-1; i>=0; --i) {
        if (record.data.name === this.noTileslayersList[i]){
          record.data.layer.url = record.data.layer.url.replace("gwc/service/","");
          record.data.layer.singleTile = true;
          if (i < 5) {
            record.data.layer.ratio = 3;
          }
        }
      }
      //remember the node id for unchecking the node
      record["NodeId"] = node.id;
      // remember the record in the node for removing
      node.attributes["record"] = record;

      this.target.mapPanel.layers.add(record);
      this.cheking = false;
    } else {
      if(console) {
        console.log("(Lazy) Record creation failed for " + layer.params.LAYERS)
      }
    }
  },


  /** private: method[addOutput]
   *  :arg config: ``Object``
   */
  addOutput: function(config) {
    var root = new GeoExt.tree.LayerNode({
      text: 'WMS',
      loader: new GeoExt.tree.WMSCapabilitiesLoader({
          url: this.outputConfig.url,
          layerOptions: {
            buffer: 0,
					  singleTile: true,
  					ratio: 1,
  					featureInfoFormat: "text/xml"
          },
          layerParams: { 'TRANSPARENT': 'TRUE', 'INFO_FORMAT': "text/xml" },
          // customize the createNode method to add a checkbox to nodes
          createNode: function(attr) {
               attr.checked = attr.leaf ? false : undefined;
          	   // Ceci déplie le premier Node appelé "AATL" ou "BROH"
			         attr.expanded = ((attr.text == "Bruxelles Développement urbain") ||
							 (attr.text == "Brussel Stedelijke Ontwikkeling") ||
               (attr.text == "Brussels urban Development") ||
							 (attr.text == "Fonds de plan") ||
               (attr.text == "Map backgrounds") ||
							 (attr.text == "Basiskaart"));
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
          }
        })
    });

    return ux.plugins.WMSTreeLegend.superclass.addOutput.call(this, Ext.apply({
      xtype: 'treepanel',
      rootVisible: false,
      root: root,
      border : false,
      listeners: {
        // Add layers to the map when checked, remove when unchecked.
        // Note that this does not take care of maintaining the layer
        // order on the map.
    		'load' : {
    			fn : function() {
    				this.reloading = true;
    				this.target.mapPanel.layers.data.items.forEach(function(l){
    					if(l.json) {
    						var myLayerName = l.json.name;
    						var layerid = l.id;
    						var layerRecord = this.target.mapPanel.layers.getById(layerid);
    						this.checkAndExpandNodeFromLayerName(myLayerName,layerRecord);
    					}
    				},this);
    				this.reloading = false;
    			}
    			,scope : this
    		},
        'checkchange': function(node, checked) {
    			this.cheking = true;
    			if(this.reloading == false) {
    				if (checked === true) {
    					var source = this.findSource.call(this,node.attributes.layer.metadata.keywords);
              var sldUrl = this.findSldUrl.call(this,node.attributes.layer.metadata.keywords);
    					if(source.lazy) {
    						source.store.load({callback: (function() {
                  this.createAndAddLayerToMap(node,source,sldUrl);
    						}).createDelegate(this)});
    					} else {
                this.createAndAddLayerToMap(node,source,sldUrl);
    					}
    				} else {
    					this.target.mapPanel.layers.remove(node.attributes.record);
    				}
    			}
    			this.cheking = false;
        },
        scope: this
        }
      }, config));
  }
});

Ext.preg(ux.plugins.WMSTreeLegend.prototype.ptype, ux.plugins.WMSTreeLegend);
