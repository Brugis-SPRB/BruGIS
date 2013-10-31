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

        var info = {controls: []};
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

            info.controls = [];
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
				
				vendorParams["buffer"] = 6;
				
                var control = new OpenLayers.Control.WMSGetFeatureInfo(Ext.applyIf({
                    url: layer.url,
                    queryVisible: true,
                    layers: [layer],
					//hover: true,
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
				//control.activate();
            }, this);

        };
        
        this.target.mapPanel.layers.on("update", updateInfo, this);
        this.target.mapPanel.layers.on("add", updateInfo, this);
        this.target.mapPanel.layers.on("remove", updateInfo, this);
        
        return actions;
    },
	
    /** private: method[displayPopup]
     * :arg evt: the event object from a 
     *     :class:`OpenLayers.Control.GetFeatureInfo` control
     * :arg title: a String to use for the title of the results section 
     *     reporting the info to the user
     * :arg text: ``String`` Body text.
     */
    displayPopup: function(evt, title, text) {
	
        var popup;
        var popupKey = evt.xy.x + "." + evt.xy.y;

        if (!(popupKey in this.popupCache)) {
            popup = this.addOutput({
                xtype: "gx_popup",
                title: this.popupTitle,
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
                    collapsible: true
                },
                listeners: {
                    close: (function(key) {
                        return function(panel){
                            delete this.popupCache[key];
                        };
                    })(popupKey),
                    scope: this
                }
            });
            this.popupCache[popupKey] = popup;
        } else {
            popup = this.popupCache[popupKey];
        }

        var features = evt.features, config = [];
        if (!text && features) {
            var feature;
            for (var i=0,ii=features.length; i<ii; ++i) {
                feature = features[i];
				//console.log(feature.geometry.getCentroid());
				// Calcul incompatible avec IE... le .getArea n'est pas accepté
				if (OpenLayers.Util.getBrowserName() != 'msie'){
					if (feature.geometry.getArea() > 0.0) {
						feature.attributes[this.areaLabel] = String(feature.geometry.getArea().toFixed(2)) + " m2";
						feature.attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
					}
					else {
						if (feature.geometry.getLength() > 0.0) {
							feature.attributes[this.lengthLabel] = String(feature.geometry.getLength().toFixed(2)) + " m" ;
							feature.attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
						}
						else
						{
							feature.attributes[this.positionLabel] = "X/Y: " + String(feature.geometry.x) + " m / " + String(feature.geometry.y) + " m";
						}
					}
				}
				customRenderers = {};				
				for (var attribute in feature.attributes) {
					//Pour les images on pourrait imaginer le brol ci-après mais attention à la taille de l'image ....:
					if (feature.attributes[attribute]){
						if (feature.attributes[attribute].indexOf(".png") >=0 || 
							feature.attributes[attribute].indexOf(".jpeg") >=0 || 
							feature.attributes[attribute].indexOf(".gif") >=0){
							var attrib = feature.attributes[attribute];
							customRenderers[attribute] = function(attrib){
								return '<A href="' + attrib + '" target="_blank"><img height=100 width=100 src="' + attrib + '"/></A>';
							};
						}
						else  
						if (feature.attributes[attribute].indexOf("http://") >=0 || feature.attributes[attribute].indexOf("https://") >=0){
							var attrib = feature.attributes[attribute];
							customRenderers[attribute] = function(attrib){
								return '<a href="' + attrib + '" target= "_blank">' + attrib + '</a>';
							};
						}
					}
				}
                config.push(Ext.apply({
                    xtype: "propertygrid",
                    listeners: {
                        'beforeedit': function (e) { 
                            return false; 
                        } 
                    },
                    title: feature.fid ? feature.fid : title,
                    source: feature.attributes,
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
        var popup;
        var popupKey = evt.xy.x + "." + evt.xy.y;

        if (!(popupKey in this.popupCache)) {
            popup = this.addOutput({
                xtype: "gx_popup",
                title: this.popupTitle,
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
                    collapsible: true
                },
                listeners: {
                    close: (function(key) {
                        return function(panel){
                            delete this.popupCache[key];
                        };
                    })(popupKey),
                    scope: this
                }
            });
            this.popupCache[popupKey] = popup;
        } else {
            popup = this.popupCache[popupKey];
        }
		
        var features = evt.features, config = [];
		
        if (!text && features.length > 0) {
			var new_attributes = {};
			customRenderers = {};	
		
			for (var i=0; i<features.length; ++i) {
				var feature = features[i];
				
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
									return '<A href="' + attrib + '" target="_blank"><img height=100 width=100 src="' + attrib + '"/></A>';
								};
								break;
					}
					new_attributes[n_attribute.name] = labelTemplate;		
				}
				//console.log(feature.geometry.getCentroid());
				// Calcul incompatible avec IE... le .getArea n'est pas accepté
				if (OpenLayers.Util.getBrowserName() != 'msie'){
					if (feature.geometry.getArea() > 0.0) {
						new_attributes[this.areaLabel]     = String(feature.geometry.getArea().toFixed(2)) + " m2";
						new_attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
					}
					else {
						if (feature.geometry.getLength() > 0.0) {
							new_attributes[this.lengthLabel] = String(feature.geometry.getLength().toFixed(2)) + " m";
							new_attributes[this.centroidLabel] = "X/Y: " + String(feature.geometry.getCentroid().x.toFixed(2)) + " m / " + String(feature.geometry.getCentroid().y.toFixed(2)) + " m";
						}
						else
						{
							new_attributes[this.positionLabel] = "X/Y: " + String(feature.geometry.x) + " m " + String(feature.geometry.y) + " m";
						}
					}
				}
				feature.attributes = new_attributes;

				
				var p = new Ext.grid.PropertyGrid({
					listeners: {
						'beforeedit': function (e) { 
							return false; 
						} 
					},
					title: feature.fid ? feature.fid.replace('.',' ') : title,
					customRenderers : customRenderers
				});

				delete p.getStore().sortInfo; // Remove default sorting
				p.getColumnModel().getColumnById('name').sortable = false; // set sorting of first column to false
				p.setSource(feature.attributes); // Now load data
				
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
				break; // on effectue que la première redirection
			}
		}
	}
});

Ext.preg("ux_wmsgetfeatureinfo", ux.plugins.WMSGetFeatureInfo);
