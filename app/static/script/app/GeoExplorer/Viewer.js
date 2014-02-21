/**
 * Copyright (c) 2009-2010 The Open Planning Project
 *
 * @requires GeoExplorer.js
 */

/** api: (define)
 *  module = GeoExplorer
 *  class = Embed
 *  base_link = GeoExplorer
 */
Ext.namespace("GeoExplorer");

/** api: constructor
 *  ..class:: GeoExplorer.Viewer(config)
 *
 *  Create a GeoExplorer application suitable for embedding in larger pages.
 */
GeoExplorer.Viewer = Ext.extend(GeoExplorer, {
    
    applyConfig: function(config) {
        var allTools = config.viewerTools || this.viewerTools;
        var tools = [
			// DocG - 02/10/2013 - Addition for the ux.qry
			{
                ptype: "gxp_featuremanager",
                id: "featuremanager",
                maxFeatures: 20,
                paging: false
            }
			// end of addition
			];
        var toolConfig;
        // we need to start counting at 2 since there is the Layer Switcher and a 
        // split button already
        var counter = 2;
        for (var i=0, len=allTools.length; i<len; i++) {
            var tool = allTools[i];
            if (tool.checked === true) {
                var properties = ['checked', 'iconCls', 'id', 'leaf', 'loader', 'text'];
                for (var key in properties) {
                    delete tool[properties[key]];
                }
                toolConfig = Ext.applyIf({
                    actionTarget: {target: "paneltbar", index: counter}
                }, tool);
                if (tool.numberOfButtons !== undefined) {
                    counter += tool.numberOfButtons;
                } else {
                    counter++;
                }
                tools.push(toolConfig);
            }
        }
        config.tools = tools;
        GeoExplorer.Viewer.superclass.applyConfig.call(this, config);
    },

    /** private: method[initPortal]
     * Create the various parts that compose the layout.
     */
    initPortal: function() {

        this.toolbar = new Ext.Toolbar({
            disabled: true,
            id: "paneltbar",
            items: this.createTools()
        });
        this.on("ready", function() {
		
			this.toolbar.enable();
		
			/*** DocG - 2013/10/03
			 * Addition for embeding + ux.qry behaviour
			 */
			OpenLayers.Projection.defaults["EPSG:31370"] = {
				units:"m", maxExtent:[0,0,300000,300000]
			};

			if(this.tools.featuremanager)
			{
				var params = Ext.urlDecode(location.search.substring(1));
				
				var currentLangage = GeoExt.Lang.locale;
				
				/*** DocG - 2013/12/03
				 *	url interface to zoom on a lambert coordinates
				 *  url accepted is brugis/?lambx=XXXXXX.x&lamby=YYYYYY.y[&scale=0.ssssss]
				 */
				if(params.lambx && params.lamby) {
					var lambert72CoordinatesX = parseFloat(params.lambx);
					var lambert72CoordinatesY = parseFloat(params.lamby);
					var bounds = {
						bottom: 	lambert72CoordinatesY - 35,
						top: 		lambert72CoordinatesY + 35,
						left: 		lambert72CoordinatesX - 65,
						right: 		lambert72CoordinatesX + 65};
					var extend = [	bounds.left,
									bounds.bottom,
									bounds.right,
									bounds.top];
					this.mapPanel.map.zoomToExtent(extend);
					if (params.scale) {
						this.mapPanel.map.zoomToScale(params.scale, true);
					}
				} else if(params.qry && params.val && ux.qry && ux.qry[currentLangage] && ux.qry[currentLangage][params.qry]) {
				
				var sourceName = ux.qry[currentLangage][params.qry]["source_name"];
				var layerName = ux.qry[currentLangage][params.qry]["layer_name"];
				var propertyName = ux.qry[currentLangage][params.qry]["property_name"];
				var propertyValue = params.val;
				
				var theFeatureManager = this.tools.featuremanager;
				var source = this.layerSources[sourceName];
				
				var store = source.store;
				source.store.load({callback: (function() {
					var myLayer = null;
					
					store.each(function(rec,b,c) {
						if(rec.data.name == layerName) {
							myLayer = rec;
						}
					},this);

					var record = source.createLayerRecord({
							name : myLayer.data.name,
							title: myLayer.data.title,
							url: myLayer.data.url,
							source: source.id,
							queryable: true
					});
					propertyValue = propertyValue.replace("/", "");
					console.log(propertyValue);
					
					if(record != null) {	
						theFeatureManager.on("layerchange",  function(rec,schema){
								//Creation du spatial Filter
								var ogcFilter = new OpenLayers.Filter.Comparison({
									type: OpenLayers.Filter.Comparison.EQUAL_TO,
									property: propertyName,
									value: propertyValue
								});
								
								theFeatureManager.loadFeatures(ogcFilter, function(features){
									//Features sélectionnée et chargée, on zoom sur le résultat
									var bounds, geom;
									//console.log(bounds);
									for (var i=features.length-1; i>=0; --i) {
										geom = features[i].geometry;
										if (geom) {
											extent = geom.getBounds();
											if (bounds) {
												bounds.extend(extent);
												//console.log("bounds");
											} else {
												bounds = extent.clone();
												//console.log("else");
												//console.log(bounds);
											}
										}
									}
									if(bounds) {
										// DOCG 2013/08/05 Afin de zoomer au 1/1.000 et pas au 1/50 si l'extent est nul
										if (bounds.getHeight() == 0){
											bounds.bottom 	= bounds.bottom - 60;
											bounds.top 		= bounds.top + 60;
											bounds.left 	= bounds.left - 70;
											bounds.right	= bounds.right +70;
										}
										//console.log("bounds found and modified.");
										console.log(this);
										this.mapPanel.map.zoomToExtent(bounds);
										console.log("zoomtoExtend done on bounds.");
									} else {
										//console.log("No bounds?!");
										//console.log(bounds);
									}
								},this);				
							},this,{single: true});
						if(theFeatureManager.setLayer(record)){
							//console.log("LayerChanged");
						} else {
							//console.log("LayerNotChanged");
						}
					} else {
						//console.log("LayerNotFound");
					}
				}).createDelegate(this)});
				}
			}
			// end of addition
		
		}, this);

        this.mapPanelContainer = new Ext.Panel({
            layout: "card",
            region: "center",
            defaults: {
                border: false
            },
            items: [
                this.mapPanel,
                new gxp.GoogleEarthPanel({
                    mapPanel: this.mapPanel,
                    listeners: {
                        beforeadd: function(record) {
                            return record.get("group") !== "background";
                        }
                    }
                })
            ],
            activeItem: 0
        });

        this.portalItems = [{
            region: "center",
            layout: "border",
            tbar: this.toolbar,
            items: [
                this.mapPanelContainer
            ]
        }];
        
        GeoExplorer.superclass.initPortal.apply(this, arguments);        

    },

    /**
     * api: method[createTools]
     * Create the various parts that compose the layout.
     */
    createTools: function() {
        var tools = GeoExplorer.Viewer.superclass.createTools.apply(this, arguments);

        var layerChooser = new Ext.Button({
            tooltip: 'Layer Switcher',
            iconCls: 'icon-layer-switcher',
            menu: new gxp.menu.LayerMenu({
                layers: this.mapPanel.layers
            })
        });

        tools.unshift("-");
        tools.unshift(layerChooser);

        var aboutButton = new Ext.Button({
            tooltip: this.aboutText,
            iconCls: "icon-about",
            handler: this.displayAppInfo,
            scope: this
        });

        tools.push("->");
        tools.push(aboutButton);

        return tools;
    }
});
