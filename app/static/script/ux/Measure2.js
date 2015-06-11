/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * Copyright (c) 2012 MRBC-AATL-DAF-BRUGIS
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @requires plugins/Tool.js
 * @requires OpenLayers/StyleMap.js
 * @requires OpenLayers/Rule.js
 * @requires OpenLayers/Control/Measure.js
 */

/** api: (define)
 *  module = gxp.plugins
 *  class = Measure
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("GeoExt.ux");

/** api: constructor
 *  .. class:: Measure(config)
 *
 *    Provides two actions for measuring length and area.
 */
GeoExt.ux.Measure = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = gxux_measure */
    ptype: "gxux_measure",

    // Begin i18n.
    lengthMenuText: "Length",
    areaMenuText: "Area",
    lengthTooltip: "Measure length",
    areaTooltip: "Measure area",
    measureTooltip: "Measure",
	// End i18n.
	
    /** api: config[outputTarget]
     *  ``String`` Popups created by this tool are added to the map by default.
     */
    outputTarget: "map",

    /** private: method[constructor]
     */
    constructor: function(config) {
        gxp.plugins.Measure.superclass.constructor.apply(this, arguments);
		
    },

    /** private: method[destroy]
     */
    destroy: function() {
        this.button = null;
        gxp.plugins.Measure.superclass.destroy.apply(this, arguments);
    },

    /** private: method[createMeasureControl]
     * :param: handlerType: the :class:`OpenLayers.Handler` for the measurement
     *     operation
     * :param: title: the string label to display alongside results
     *
     * Convenience method for creating a :class:`OpenLayers.Control.Measure`
     * control
     */
    createMeasureControl: function(handlerType, title) {

        var styleMap = new OpenLayers.StyleMap({
            "default": new OpenLayers.Style(null, {
                rules: [new OpenLayers.Rule({
                    symbolizer: {
                        "Point": {
                            pointRadius: 5,
                            graphicName: "cross",
                            //fillColor: "white",
                            //fillOpacity: 1,
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
        var cleanup = function() {
			if (controlOptions.outputTarget == "map") {
				if (measureToolTip) {
					measureToolTip.destroy();
				}
			}
			else {
				var textOutput = Ext.getCmp(controlOptions.outputTarget);
				if (textOutput) {
					textOutput.setText("");
				}
			}
        };

        var makeString = function(metricData) {
			var metric = metricData.measure;
            var metricUnit = metricData.units;

            measureControl.displaySystem = "english";

            var englishData = metricData.geometry.CLASS_NAME.indexOf("LineString") > -1 ?
            measureControl.getBestLength(metricData.geometry) :
            measureControl.getBestArea(metricData.geometry);

            var english = englishData[0];
            var englishUnit = englishData[1];

            measureControl.displaySystem = "metric";
            var dim = metricData.order == 2 ?
            '<sup>2</sup>' :
            '';
            return metric.toFixed(2) + " " + metricUnit + dim;
        };

        var measureToolTip;
		var textOutput;
        var controlOptions = Ext.apply({}, this.initialConfig.controlOptions);
		if (controlOptions.outputTarget == "map") {
			Ext.applyIf(controlOptions, {
				geodesic: true,
				persist: true,
				handlerOptions: {layerOptions: {styleMap: styleMap}},
				eventListeners: {
					measurepartial: function(event) {
						cleanup();
						measureToolTip = this.addOutput({
							xtype: 'tooltip',
							html: makeString(event),
							title: title,
							autoHide: false,
							closable: true,
							draggable: true,
							mouseOffset: [0, 0],
							showDelay: 0.5,
							listeners: {hide: cleanup}
						});
						if(event.measure > 0) {
							var px = measureControl.handler.lastUp;
							var p0 = this.target.mapPanel.getPosition();
							//console.log(px);
							//console.log(p0);
							measureToolTip.targetXY = [p0[0] + px.x, p0[1] + px.y];
							measureToolTip.show();
						}
					},
					deactivate: cleanup,
					scope: this
				}
			});
		} else {
			textOutput = Ext.getCmp(controlOptions.outputTarget);
			Ext.applyIf(controlOptions, {
				geodesic: true,
				persist: true,
				handlerOptions: {layerOptions: {styleMap: styleMap}},
				eventListeners: {
					measurepartial: function(event) {
						cleanup();
						if(event.measure > 0) {
							var px = measureControl.handler.lastUp;
							var p0 = this.target.mapPanel.getPosition();
 							textOutput.setText(makeString(event));
						}
					},
					deactivate: cleanup,
					scope: this
				}
			});
		};
        var measureControl = new OpenLayers.Control.Measure(handlerType, 
            controlOptions);
        return measureControl;
    },

    /** api: method[addActions]
     */
    addActions: function() {
        this.activeIndex = 0;
        this.button = new Ext.SplitButton({
            iconCls: "gxp-icon-measure-length",
            tooltip: this.measureTooltip,
            enableToggle: true,
            toggleGroup: this.toggleGroup,
            allowDepress: true,
            handler: function(button, event) {
                if(button.pressed) {
                    button.menu.items.itemAt(this.activeIndex).setChecked(true);
                }
            },
            scope: this,
            listeners: {
                toggle: function(button, pressed) {
                    // toggleGroup should handle this
                    if(!pressed) {
                        button.menu.items.each(function(i) {
                            i.setChecked(false);
                        });
                    }
                },
                render: function(button) {
                    // toggleGroup should handle this
                    Ext.ButtonToggleMgr.register(button);
                }
            },
            menu: new Ext.menu.Menu({
                items: [
                    new Ext.menu.CheckItem(
                        new GeoExt.Action({
                            text: this.lengthMenuText,
                            iconCls: "gxp-icon-measure-length",
                            toggleGroup: this.toggleGroup,
                            group: this.toggleGroup,
                            listeners: {
                                checkchange: function(item, checked) {
                                    this.activeIndex = 0;
                                    this.button.toggle(checked);
                                    if (checked) {
                                        this.button.setIconClass(item.iconCls);
                                    }
                                },
                                scope: this
                            },
                            map: this.target.mapPanel.map,
                            control: this.createMeasureControl(
                                OpenLayers.Handler.Path, this.lengthTooltip
                            )
                        })
                    ),
                    new Ext.menu.CheckItem(
                        new GeoExt.Action({
                            text: this.areaMenuText,
                            iconCls: "gxp-icon-measure-area",
                            toggleGroup: this.toggleGroup,
                            group: this.toggleGroup,
                            allowDepress: false,
                            listeners: {
                                checkchange: function(item, checked) {
                                    this.activeIndex = 1;
                                    this.button.toggle(checked);
                                    if (checked) {
                                        this.button.setIconClass(item.iconCls);
                                    }
                                },
                                scope: this
                            },
                            map: this.target.mapPanel.map,
                            control: this.createMeasureControl(
                                OpenLayers.Handler.Polygon, this.areaTooltip
                            )
                        })
                    )
                ]
            })
        });

        return GeoExt.ux.Measure.superclass.addActions.apply(this, [this.button]);
    }
        
});

Ext.preg("gxux_measure", GeoExt.ux.Measure);
