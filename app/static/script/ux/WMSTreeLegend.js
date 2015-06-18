/**
 * Copyright (c) 2012 George & Doc
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
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
						"BROH_DML_LAND_BOOM:Gevelde_of_verdwenen_bomen"],
						
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
					if (!(!(record[i].json))) {
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
		} , Ext.getCmp("wmsTree").root, true);
							
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
	
    /** private: method[addOutput]
     *  :arg config: ``Object``
     */
    addOutput: function(config) {
        var root = new GeoExt.tree.LayerNode({
            text: 'WMS',
            loader: new GeoExt.tree.WMSCapabilitiesLoader({
                url: this.outputConfig.url,
                layerOptions: { buffer: 0,
								singleTile: true,
								ratio: 1,
								featureInfoFormat: "text/xml"},
                layerParams: { 'TRANSPARENT': 'TRUE', 'INFO_FORMAT': "text/xml" },
                // customize the createNode method to add a checkbox to nodes
                createNode: function(attr) {
					//console.log(attr);
                    attr.checked = attr.leaf ? false : undefined;
					// Ceci déplie le premier Node appelé "AATL" ou "BROH"
					attr.expanded = ((attr.text == "Bruxelles Développement urbain") ||
									 (attr.text == "Brussel Stedelijke Ontwikkeling") ||
									 (attr.text == "Fonds de plan") ||
									 (attr.text == "Basiskaart"));
					//attr.source = "machin";
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
							//console.log(node.attributes);
							var source = this.findSource.call(this,node.attributes.layer.metadata.keywords);
							var layer = node.attributes.layer; //type : Openlayer.WmsLayer
							if(source.lazy) {
								source.store.load({callback: (function() {
									var record = source.createLayerRecord({ // createLayerRecord GVDS 18/12/2012
										name : layer.params.LAYERS,
										url: layer.url,
										source: source.id,
										queryable: true,
										buffer: 0
									});
			
									// DOCG 17/06/2013 On applique le resize au couches de fond, Alleluyah 3!!!!!!!!!!!!!!!
									//record.data.layer.transitionEffect = "resize";
									//record.data.layer.removeBackBufferDelay = 200;
									
									//NDU 24/01/2014 Fix Geowecache HIT Alignement de grid 
									record.data.layer.addOptions({
										tileOrigin: new OpenLayers.LonLat(140000, 160000) 
									});
									
									// NDU 19/07/2013 Hack forcant l'utilisation de l'url proposée dans le getcapabilities. voir bug #176
									// NDU 18/06/2015 Hack enlevé pour le multi-source. En attente de regression
									//record.data.layer.url = layer.url;
									
									// DOCG 19/07/2013 Hack pour afficher les symboles des arbres sans les tronquer en bord de tuile. voir bug #179
									for (var i=this.noTileslayersList.length-1; i>=0; --i) {
										if (record.data.name === this.noTileslayersList[i]){
											record.data.layer.url = record.data.layer.url.replace("gwc/service/","");
											record.data.layer.singleTile = true;
											record.data.layer.ratio = 3;
										}
									}
									//remember the node id for unchecking the node
									record["NodeId"] = node.id;	
									// remember the record in the node for removing
									node.attributes["record"] = record; 
									
									//console.log(record);
									
									this.target.mapPanel.layers.add(record);
								}).createDelegate(this)});
							} else {
								//console.log(layer);
								var record = source.createLayerRecord({ // createLayerRecord GVDS 18/12/2012
									name : layer.params.LAYERS,
									source: source.id,
									queryable: true,
									buffer: 0,
									url: layer.url
								});
								// DOCG 17/06/2013 On applique le resize au couches de fond, Alleluyah 3!!!!!!!!!!!!!!!
								//record.data.layer.transitionEffect = "resize";
								//record.data.layer.removeBackBufferDelay = 200;
								
								// NDU 19/07/2013 Hack forcant l'utilisation de l'url du proposée dans le getcapabilities. voir bug #176
								// NDU 18/06/2015 Hack enlevé pour le multi-source. En attente de regression
								//record.data.layer.url = layer.url;

								// DOCG 19/07/2013 Hack pour afficher les symboles des arbres sans les tronquer en bord de tuile. voir bug #179
								for (var i=this.noTileslayersList.length-1; i>=0; --i) {
									if (record.data.name === this.noTileslayersList[i]){
										record.data.layer.url = record.data.layer.url.replace("gwc/service/","");
										record.data.layer.singleTile = true;
										record.data.layer.ratio = 3;
									}
								}
								// remember the node id for unchecking the node
								record["NodeId"] = node.id;	
								// remember the record in the node for removing
								node.attributes["record"] = record; 
								
								this.target.mapPanel.layers.add(record);
							}						
						} else {
							this.target.mapPanel.layers.remove(node.attributes.record);
						}
					}
					this.cheking = false;
                },scope: this
            }
        }, config));
    }
});

Ext.preg(ux.plugins.WMSTreeLegend.prototype.ptype, ux.plugins.WMSTreeLegend);
