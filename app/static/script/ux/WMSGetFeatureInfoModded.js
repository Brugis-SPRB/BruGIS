/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @requires plugins/Tool.js
 * @requires GeoExt/widgets/Popup.js
 * @requires OpenLayers/Control/WMSGetFeatureInfo.js
 * @requires OpenLayers/Format/WMSGetFeatureInfo.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = WMSGetFeatureInfo
 */

OpenLayers.Control.RightClick = OpenLayers.Class(OpenLayers.Control, {
       defaultHandlerOptions: {
           'single': true,
           'double': true,
           'pixelTolerance': 10,
           'stopSingle': false,
           'stopDouble': false
       },
       handleRightClicks: true,
       initialize: function (options) {
           this.handlerOptions = OpenLayers.Util.extend(
             {}, this.defaultHandlerOptions
           );
           OpenLayers.Control.prototype.initialize.apply(
             this, arguments
            );
           this.handler = new OpenLayers.Handler.Click(
             this, this.eventMethods, this.handlerOptions
           );
       },
       CLASS_NAME: "OpenLayers.Control.RightClick" 
});

 
/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: WMSGetFeatureInfo(config)
 *
 *    This plugins provides an action which, when active, will issue a
 *    GetFeatureInfo request to the WMS of all layers on the map. The output
 *    will be displayed in a popup.
 */   
ux.plugins.WMSGetFeatureInfo = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = ux_wmsgetfeatureinfo */
    ptype: "ux_wmsgetfeatureinfo",
    
    // Begin i18n.
    infoActionTip: "Get Feature Info",
    popupTitle: "Feature Info",
	areaLabel: "Area",
	lengthLabel: "Length",
	positionLabel: "Coordinates",
	centroidLabel: "Centroid",
	// End i18n.

    /** api: config[outputTarget]
     *  ``String`` Popups created by this tool are added to the map by default.
     */
    outputTarget: "map",

    /** private: property[popupCache]
     *  ``Object``
     */
    popupCache: null,
    
    /** api: config[format]
     *  ``String`` Either "html" or "grid". If set to "grid", GML will be
     *  requested from the server and displayed in an Ext.PropertyGrid.
     *  Otherwise, the html output from the server will be displayed as-is.
     *  Default is "html".
     */
    format: "html",
	
	/** api: config[unique]
	 * ``Boolean`` true or false. If set to True, only one popup window
	 * is allowed at a time.
	 * DocG - 05/11/2013
	 */
	unique: false,
	 
	onRightClick: false,
    
	blockContextMenu: function(e){
		e.preventDefault();
	},
	
    /** api: method[addActions]
     */
    addActions: function() {
        this.popupCache = {};
        
        var actions = ux.plugins.WMSGetFeatureInfo.superclass.addActions.call(this, [{
            tooltip: this.infoActionTip,
            iconCls: "gxp-icon-getfeatureinfo",
            toggleGroup: this.toggleGroup,
            enableToggle: true,
            allowDepress: true,
			toggleHandler: function(button, pressed) {
                for (var i = 0, len = info.controls.length; i < len; i++){
                    if (pressed) {
                        info.controls[i].activate();
                    } else {
                        info.controls[i].deactivate();
                    }
                }
             }
        }]);
        var infoButton = this.actions[0].items[0];

        var info = {controls: [], controls2: []};
		
        var updateInfo = function() {
            var queryableLayers = this.target.mapPanel.layers.queryBy(function(x){
                return x.get("queryable");
            });

            var map = this.target.mapPanel.map;
            var control;
            for (var i = 0, len = info.controls.length; i < len; i++){
                control = info.controls[i];
                control.deactivate();  // TODO: remove when http://trac.openlayers.org/ticket/2130 is closed
                control.destroy();
            }

            for (var i = 0, len = info.controls2.length; i < len; i++){
                control = info.controls2[i];
                control.deactivate();  // TODO: remove when http://trac.openlayers.org/ticket/2130 is closed
                control.destroy();
            }
			
            info.controls = [];
			info.controls2 = [];
            queryableLayers.each(function(x){
                var layer = x.getLayer();
                var vendorParams = Ext.apply({}, this.vendorParams), param;
                if (this.layerParams) {
                    for (var i=this.layerParams.length-1; i>=0; --i) {
                        param = this.layerParams[i].toUpperCase();
                        vendorParams[param] = layer.params[param];
                    }
                }
                var infoFormat = x.get("infoFormat");
                if (infoFormat === undefined) {
                    // TODO: check if chosen format exists in infoFormats array
                    // TODO: this will not work for WMS 1.3 (text/xml instead for GML)
                    infoFormat = this.format == "html" ? "text/html" : "application/vnd.ogc.gml";
                }
				
				vendorParams["buffer"] = 10;
				
                var control = new OpenLayers.Control.WMSGetFeatureInfo(Ext.applyIf({
					url: layer.url,
                    queryVisible: true,
                    layers: [layer],
					infoFormat: infoFormat,
                    vendorParams: vendorParams,
					drillDown: true,
                    eventListeners: {
                        getfeatureinfo: function(evt) {
							var title = x.get("title") || x.get("name");
							var layer_name = x.get("name");
							var currentLangage = GeoExt.Lang.locale;
							if(layer_name) {
								if (layer_name && ux.gfi[currentLangage] && ux.gfi[currentLangage][layer_name]) {
									var actiontype = ux.gfi[currentLangage][layer_name].actiontype;
									switch(actiontype) {
										case "GRID":
											this.displaySmartPopup(evt, title, ux.gfi[currentLangage][layer_name]);
											break;
										case "REDIRECT":
											this.redirect(evt,title,ux.gfi[currentLangage][layer_name]);
											break;
									}
								} else {								
									if (infoFormat == "text/html") {
										var match = evt.text.match(/<body[^>]*>([\s\S]*)<\/body>/);
										if (match && !match[1].match(/^\s*$/)) {
											this.displayPopup(evt, title, match[1]);
										}
									} else if (infoFormat == "text/plain") {
										this.displayPopup(evt, title, '<pre>' + evt.text + '</pre>');
									} else if (evt.features && evt.features.length > 0) {
										this.displayPopup(evt, title);
									}
								}
							}
                        },
                        scope: this
                    }
                }, this.controlOptions));
                map.addControl(control);
                info.controls.push(control);
                if(infoButton.pressed) {
                    control.activate();
                }
				
				// DOCG // Pour obtenir le GFI sur le clic droit //////////////
				var oClick = new OpenLayers.Control.RightClick({ eventMethods: {
					'rightclick': function (e) {
						control.request(e.xy);
					}
				}});
				map.addControl(oClick);
				info.controls2.push(oClick);
            }, this);
			
			var getFeatureInfoOnRightClick = 
				(localStorage.getItem("shwPiRc") && localStorage.getItem("shwPiRc") == '0')?
				false:
				(localStorage.getItem("shwPiRc") && localStorage.getItem("shwPiRc") == '1')?
				true:
				false;
				
			for (var i = 0, len = info.controls2.length; i < len; i++){
				var oClick = info.controls2[i];
				if (getFeatureInfoOnRightClick == true) {
					var controlActive = false;
					for (var i = 0, len = info.controls.length; i < len; i++){
						var control = info.controls[i];
						var controlActive = control.active;
						if (!controlActive) {
							control.activate();
						}
					}
					oClick.activate();
					Ext.getDoc().on("contextmenu", this.blockContextMenu);
					for (var i = 0, len = info.controls.length; i < len; i++){
						var control = info.controls[i];
						if (!controlActive) {
							control.deactivate();
						}
					}
				} else {
					oClick.deactivate();
					Ext.getDoc().un("contextmenu", this.blockContextMenu);
				}
			}
        };
		
		this.target.on("preferencesChange", updateInfo, this);
        this.target.mapPanel.layers.on("update", updateInfo, this);
        this.target.mapPanel.layers.on("add", updateInfo, this);
        this.target.mapPanel.layers.on("remove", updateInfo, this);
        
        return actions;
    },

	/*
	*	Display the feture geometry on map
	*    there will be only one (geometry)
	*   ALL YOUR BASE ARE BELONG O US
	*/
	highlightFeature : function(feature) {
		var styleMap = new OpenLayers.StyleMap({
            "default": new OpenLayers.Style(null, {
                rules: [new OpenLayers.Rule({
                    symbolizer: {
                        "Point": {
                            pointRadius: 5,
                            graphicName: "cross",
                            strokeWidth: 1,
                            strokeOpacity: 1,
                            strokeColor: "#FF0000"
                        },
                        "Line": {
                            strokeWidth: 1.5,
                            strokeOpacity: 1,
                            strokeColor: "#FF0000",
                            strokeDashstyle: "dash"
                        },
                        "Polygon": {
                            strokeWidth: 1,
                            strokeOpacity: 1,
                            strokeColor: "#FF0000",
                            fillColor: "white",
                            fillOpacity: 0.3
                        }
                    }
                })]
            })
        });
		var resLayers = this.target.mapPanel.map.getLayersByName("wmsgfihigh");
		var vectorLayer;
		if(resLayers.length == 0 ) {
			vectorLayer = new OpenLayers.Layer.Vector("wmsgfihigh");
			vectorLayer.styleMap = styleMap;
			vectorLayer.displayInLayerSwitcher = false;
			this.target.mapPanel.map.addLayer(vectorLayer);
		} else {
			vectorLayer = resLayers[0];
		}
		vectorLayer.removeAllFeatures();
		vectorLayer.addFeatures([feature]);
	},
	
	cleanHighlighting : function() {
		var resLayers = this.target.mapPanel.map.getLayersByName("wmsgfihigh");
		if(resLayers.length != 0 ) {
			resLayers[0].removeAllFeatures();
		} 
	},
	
	removeHighlightLayer : function() {
		var resLayers = this.target.mapPanel.map.getLayersByName("wmsgfihigh");
		if(resLayers.length != 0 ) {
			this.target.mapPanel.map.removeLayer(resLayers[0]);
		} 
	},
    /** private: method[displayPopup]
     * :arg evt: the event object from a 
     *     :class:`OpenLayers.Control.GetFeatureInfo` control
     * :arg title: a String to use for the title of the results striggered before a layer has been added.  The event object will include a layerection 
     *     reporting the info to the user
     * :arg text: ``String`` Body text.
     */
    displayPopup: function(evt, title, text) {
		/** DocG
		 *	Gestion des popup uniques ou non
		 */
		if (this.unique) {
			for (var each in this.popupCache) {
				this.popupCache[each].close();
			}
		}	
        var popup;
        var popupKey = evt.xy.x + "." + evt.xy.y;
		var NumberOfObjects = evt.features.length;
        if (!(popupKey in this.popupCache)) {
            popup = this.addOutput({
                xtype: "gx_popup",
                title: this.popupTitle.concat(" (".concat(NumberOfObjects.toString().concat(")"))),
                layout: "accordion",
                fill: false,
                autoScroll: true,
                location: evt.xy,
                map: this.target.mapPanel,
                width: 250,
                height: 300,
                defaults: {
                    layout: "fit",
                    autoScroll: true,
                    autoHeight: true,
                    autoWidth: true,
                    collapsible: true,
					collapsed: true
                },
                listeners: {
                    close: (function(key) {
                        return function(panel){
							this.removeHighlightLayer();
                            delete this.popupCache[key];
                        };
                    })(popupKey),
                    scope: this
                },
				numberOfEntries: NumberOfObjects
            });
            this.popupCache[popupKey] = popup;
        } else {
            popup = this.popupCache[popupKey];
			if (NumberOfObjects) {
				popup.numberOfEntries += NumberOfObjects;
				popup.setTitle(this.popupTitle.concat(" (".concat(popup.numberOfEntries.toString().concat(")"))));
			}
        }

        var features = evt.features, config = [];
        if (!text && features) {
            var feature;
            for (var i=0,ii=features.length; i<ii; ++i) {
                feature = features[i];
				var new_attributes = {};
				var customRenderers = {};					
				//Récupèrele nom de la feature
				var layer_name = feature.gml.featureNSPrefix + ":" + feature.gml.featureType;
				var currentLangage = GeoExt.Lang.locale;
				var layerConfiguration = {};
				if (layer_name && ux.gfi[currentLangage] && ux.gfi[currentLangage][layer_name]) {
					layerConfiguration = ux.gfi[currentLangage][layer_name];

					for(var cpt=0; cpt<layerConfiguration.attributes.length; cpt++)
					{
						var n_attribute = layerConfiguration.attributes[cpt];
						var labelTemplate = n_attribute.label;
						
						for(var attribute in feature.attributes)
						{
							var pattern = "\["+attribute+"\]";
							labelTemplate = labelTemplate.replace(pattern,feature.attributes[attribute]);
						}
						var type = n_attribute.type;
						switch(type) {
								case "eval":
									labelTemplate = eval(labelTemplate);
									break;
								case "string":
									//do nothing
									break;
								case "link":
									customRenderers[n_attribute.name] = function(attrib){
										return '<a href="' + attrib + '" target= "_blank">' + attrib + '</a>';
									}
									break;
								case "file":
									customRenderers[n_attribute.name] = function(attrib){
										attrib = attrib.replace("\\\\", "/");
										attrib = attrib.replace(/^\/\//g,'');
										attrib = attrib.replace(/^\/ /g,'');
										attrib = "file://///" + attrib;
										return '<a href="' + attrib + '" target= "_blank">' + attrib + '</a>';
									}
									break;
								case "picture":
									customRenderers[n_attribute.name] = function(attrib){
										return '<A href="' + attrib + '" target="_blank"><img height=100 src="' + attrib + '"/></A>';
									};
									break;
						}
						labelTemplate = labelTemplate.replace(/\[(.*?)\]/g, "");
						
						new_attributes[n_attribute.name] = labelTemplate;
						
					}				
				} else {
					new_attributes = feature.attributes;
				}
				//Store the geometry for highlighting
				new_attributes["geom"] = feature.geometry;
				
				// Calcul incompatible avec IE... le .getArea n'est pas accepté
				if (OpenLayers.Util.getBrowserName() != 'msie'){
				
					if (feature.geometry && feature.geometry.getArea() > 0.0) {
						feature.attributes[this.areaLabel] = String(feature.geometry.getArea().toFixed(2)) + " m2";
						feature.attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
					}
					else {
						if (feature.geometry && feature.geometry.getLength() > 0.0) {
							feature.attributes[this.lengthLabel] = String(feature.geometry.getLength().toFixed(2)) + " m" ;
							feature.attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
						}
						else if (feature.geometry)
						{
							feature.attributes[this.positionLabel] = "X/Y: " + String(feature.geometry.x) + " m / " + String(feature.geometry.y) + " m";
						}
					}
				}
				

				var customTitle = title;
				if (layerConfiguration && layerConfiguration.title) {
					customTitle = layerConfiguration.title;
					for(var attribute in feature.attributes)
					{
						var pattern = "\["+attribute+"\]";
						customTitle = customTitle.replace(pattern,feature.attributes[attribute]);
					}
					feature.customTitle = customTitle.replace(/\[(.*?)\]/g, "");
				}
				
                config.push(Ext.apply({
                    xtype: "propertygrid",
                    listeners: {
                        'beforeedit': function (e) { 
                            return false; 
                        },
						'celldblclick': function (e, rowIndex, columnIndex) {
							var name  = e.store.data.items[rowIndex].data.name;
							var value = e.store.data.items[rowIndex].data.value;
							window.prompt (name + ': ', value);
						},
						'expand' : {
							fn: function(p) {
								var myFeature = new OpenLayers.Feature.Vector(p.source.geom);
								this.highlightFeature(myFeature);
							},
							scope : this
						},
						'collapse' : {
							fn : function(p) {
								this.cleanHighlighting();
							},
							scope : this
						}
                    },
                    title: feature.customTitle ? feature.customTitle : feature.fid? feature.fid.replace('.',' ') : title,
                    source: new_attributes,
					dateFormat: "d/m/Y",
					customRenderers : customRenderers
                }, this.itemConfig));
				
            }
        } else if (text) {
            config.push(Ext.apply({
                title: title,
                html: text
            }, this.itemConfig));
        }		
        popup.add(config);
        popup.doLayout();
    },

	/** private: method[displayPopup]
     * :arg evt: the event object from a 
     *     :class:`OpenLayers.Control.GetFeatureInfo` control
     * :arg title: a String to use for the title of the results section 
     *     reporting the info to the user
     * :arg text: ``String`` Body text.
     */
    displaySmartPopup: function(evt, title, layerConfiguration, text) {
		/** DocG
		 *	Gestion des popup uniques ou non
		 */
		if (this.unique) {
			for (var each in this.popupCache) {
				this.popupCache[each].close();
			}
		}
        var popup;
        var popupKey = evt.xy.x + "." + evt.xy.y;
		var NumberOfObjects = evt.features.length;		
        if (!(popupKey in this.popupCache)) {
            popup = this.addOutput({
                xtype: "gx_popup",
                title: this.popupTitle.concat(" (".concat(NumberOfObjects.toString().concat(")"))),
                layout: "accordion",
                fill: false,
                autoScroll: true,
                location: evt.xy,
                map: this.target.mapPanel,
                width: 350,
                height: 300,
                defaults: {
                    layout: "fit",
                    autoScroll: true,
                    autoHeight: true,
                    autoWidth: true,
                    collapsible: true,
					collapsed: true
                },
                listeners: {
                    close: (function(key) {
                        return function(panel){
							this.removeHighlightLayer();
                            delete this.popupCache[key];
                        };
                    })(popupKey),
                    scope: this
                },
				numberOfEntries: NumberOfObjects
            });
            this.popupCache[popupKey] = popup;
        } else {
            popup = this.popupCache[popupKey];
			if (NumberOfObjects) {
				popup.numberOfEntries += NumberOfObjects;
				popup.setTitle(this.popupTitle.concat(" (".concat(popup.numberOfEntries.toString().concat(")"))));
			}
        }

        var features = evt.features, config = [];
        if (!text && features.length > 0) {
			for (var i=0; i<features.length; ++i) {
				var feature = features[i];
				var new_attributes = {};
				customRenderers = {};
				for(var cpt=0; cpt<layerConfiguration.attributes.length; cpt++)
				{
					var n_attribute = layerConfiguration.attributes[cpt];
					var labelTemplate = n_attribute.label;
					for(var attribute in feature.attributes)
					{
						var pattern = "\["+attribute+"\]";
						labelTemplate = labelTemplate.replace(pattern,feature.attributes[attribute]);
					}
					var type = n_attribute.type;
					switch(type) {
							case "eval":
								labelTemplate = eval(labelTemplate);
								break;
							case "string":
								//do nothing
								break;
							case "link":
								customRenderers[n_attribute.name] = function(attrib){
									return '<a href="' + attrib + '" target= "_blank">' + attrib + '</a>';
								}
								break;
							case "file":
								customRenderers[n_attribute.name] = function(attrib){
								    attrib = attrib.replace("\\\\", "/");
									attrib = attrib.replace(/^\/\//g,'');
									attrib = attrib.replace(/^\/ /g,'');
									attrib = "file://///" + attrib;
									return '<a href="' + attrib + '" target= "_blank">' + attrib + '</a>';
								}
								break;
							case "picture":
								customRenderers[n_attribute.name] = function(attrib){
									return '<A href="' + attrib + '" target="_blank"><img height=100 src="' + attrib + '"/></A>';
								};
								break;
					}
					labelTemplate = labelTemplate.replace(/\[(.*?)\]/g, "");
					
					new_attributes[n_attribute.name] = labelTemplate;
					
				}
				// Calcul incompatible avec IE... le .getArea n'est pas accepté
				if (OpenLayers.Util.getBrowserName() != 'msie'){
				
					if (feature.geometry && feature.geometry.getArea() > 0.0) {
						new_attributes[this.areaLabel]     = String(feature.geometry.getArea().toFixed(2)) + " m2";
						new_attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
					}
					else {
						if (feature.geometry && feature.geometry.getLength() > 0.0) {
							new_attributes[this.lengthLabel] = String(feature.geometry.getLength().toFixed(2)) + " m";
							new_attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
						}
						else if (feature.geometry)
						{
							new_attributes[this.positionLabel] = "X/Y: " + String(feature.geometry.x) + " m " + String(feature.geometry.y) + " m";
						}
					}
				}

				/* DOCG - 2014/01/22
				 *Décoration du titre de l'accordion
				 */
				var customTitle = title;
				if (layerConfiguration.title) {
					customTitle = layerConfiguration.title;
					for(var attribute in feature.attributes)
					{
						var pattern = "\["+attribute+"\]";
						customTitle = customTitle.replace(pattern,feature.attributes[attribute]);
					}
					feature.customTitle = customTitle.replace(/\[(.*?)\]/g, "");
				}

				new_attributes["geom"] = feature.geometry;
				
				var p = new Ext.grid.PropertyGrid({
					listeners: {
						'beforeedit': function (e) { 
							return false; 
						},
						'celldblclick': function (e, rowIndex, columnIndex) {
							var name  = e.store.data.items[rowIndex].data.name;
							var value = e.store.data.items[rowIndex].data.value;
							window.prompt(name + ': ', value);
						},
						'expand' : {
							fn: function(p) {
								var myFeature = new OpenLayers.Feature.Vector(p.source.geom);
								this.highlightFeature(myFeature);
							},
							scope : this
						},
						'collapse' : {
							fn : function(p) {
								this.cleanHighlighting();
							},
							scope : this
						},
						'hide' : function() {
							console.log("HIIIDE");
						},
						'show' : function() {
							console.log("SHOW");
						}
					},
					title: feature.customTitle ? feature.customTitle : feature.fid? feature.fid.replace('.',' ') : title,
					dateFormat: "d/m/Y",
					customRenderers : customRenderers,
					source : new_attributes
				});
				delete p.getStore().sortInfo;
				config.push(Ext.apply(p, this.itemConfig));
			}
        } else if (text) {
            config.push(Ext.apply({
                title: title,
                html: text
            }, this.itemConfig));
        }
		popup.add(config);
        popup.doLayout();
    },
	
	redirect : function(evt, title, layerConfiguration) {	
        var popup;
		var features = evt.features, config = [];
        if (features) {
		    var feature;
            for (var i=0,ii=features.length; i<ii; ++i) {
                feature = features[i];
				var templateUrl = layerConfiguration.url;
				for(var attribute in feature.attributes)
				{
					var pattern = "\["+attribute+"\]";;
					templateUrl = templateUrl.replace(pattern,feature.attributes[attribute]);	
				}
				window.open(templateUrl,  '_blank');
				break; // on n'effectue que la première redirection
			}
		}
	}
});

Ext.preg("ux_wmsgetfeatureinfo", ux.plugins.WMSGetFeatureInfo);
