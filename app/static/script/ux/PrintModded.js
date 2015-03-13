/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @requires plugins/Tool.js
 * @requires GeoExt/data/PrintProvider.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = Print
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: Print(config)
 *
 *    Provides an action to print the map. Requires GeoExt.ux.PrintPreview,
 *    which is currently mirrored at git://github.com/GeoNode/PrintPreview.git.
 */
ux.plugins.Print = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = ux_print */
    ptype: "ux_print",

    // Begin i18n.
    menuText: "Print Map",
    tooltip: "Print Map",
    notAllNotPrintableText: "Not All Layers Can Be Printed",
    nonePrintableText: "None of your current map layers can be printed",
    previewText: "Print Preview",
	// End i18n.

    /** api: config[printService]
     *  ``String``
     *  URL of the print service. Specify either printService
     *  or printCapabilities.
     */
    printService: null,

    /** api: config[printCapabilities]
     *  ``Object``
     *  Capabilities object of the print service. Specify either printService
     *  or printCapabilities.
     */
    printCapabilities: null,

    /** api: config[customParams]
     *  ``Object`` Key-value pairs of custom data to be sent to the print
     *  service. Optional. This is e.g. useful for complex layout definitions
     *  on the server side that require additional parameters.
     */
    customParams: null,

    /** api: config[includeLegend]
     *  ``Boolean`` Should we include the legend in the print? Defaults to false.
     */
    includeLegend: true,

    /** api: config[openInNewWindow]
     *  ``Boolean``
     *  If true, always open in new window regardless of the browser type.
     */
    openInNewWindow: false,

    /** private: method[constructor]
     */
    constructor: function(config) {
        ux.plugins.Print.superclass.constructor.apply(this, arguments);
    },

    /** api: method[addActions]
     */
    addActions: function() {
        // don't add any action if there is no print service configured
        if (this.printService !== null || this.printCapabilities != null) {

            var printProvider = new GeoExt.data.PrintProvider({
                capabilities: this.printCapabilities,
                url: this.printService,
                customParams: this.customParams,
                autoLoad: false,
                listeners: {
                    beforedownload: function(provider, url) {
                        if (this.openInNewWindow === true) {
                            window.open(url);
                            return false;
                        }
                    },
                    beforeencodelegend: function(provider, jsonData, legend) {
                        if (legend && legend.ptype === "gxp_layermanager") {
                            var encodedLegends = [];
                            var output = legend.output;
                            if (output && output[0]) {
								Ext.getCmp('west2').setActiveTab(1);
								Ext.getCmp('west2').doLayout();
                                output[0].getRootNode().cascade(function(node) {
                                    if (node.component && !node.component.hidden) {
                                        var cmp = node.component;
                                        var encFn = this.encoders.legends[cmp.getXType()];
										//modif ndu
										if(encFn) {
											var tempRes = encFn.call(this, cmp, jsonData.pages[0].scale);
											tempRes[0].name = node.layer.name;
											encodedLegends = encodedLegends.concat(tempRes);
										}
                                    }
                                }, provider);
								Ext.getCmp('west2').setActiveTab(0);
                            }
                            jsonData.legends = encodedLegends;
                            // cancel normal encoding of legend
                            return false;
                        }
                    },
                    beforeprint: function() {
                        // The print module does not like array params.
                        // TODO Remove when http://trac.geoext.org/ticket/216 is fixed.
                        printWindow.items.get(0).printMapPanel.layers.each(function(l) {
                            var params = l.get("layer").params;
                            for(var p in params) {
                                if (params[p] instanceof Array) {
                                    params[p] = params[p].join(",");
                                }
                            }
                        });
						// The print module dont like tiled wms. Replace the url for the simple wms one
						// Work only for geoserver with integrated geowebcache
						printWindow.items.get(0).printMapPanel.layers.each(function(l) {
						    var layer = l.get("layer");
							if (layer instanceof OpenLayers.Layer.WMS) {
								//console.log(layer);
								layer.url = layer.url.replace("geoserver/gwc/service/wms","geoserver/ows");
								// DocG - 2014/02/19 - obsolète depuis la publication casdacdée des FDPs UrbIS
								/*if (layer.name.search("Urbis") === 0) {
									layer.url = layer.url.replace(layer.url,"http://geoserver.gis.irisnet.be/geoserver/wms?SERVICE=WMS&");
								};
								*/
								// Hardcode pour corriger la non impression des orthophotoplans 
								if (layer.name.search("Orthophotoplans 2004") === 0) {
									layer.url = layer.url.replace(layer.url,"http://geoserver.gis.irisnet.be/geoserver/wms?SERVICE=WMS&");
								};
								if (layer.name.search("Orthophotoplans 2009") === 0) {
									layer.url = layer.url.replace(layer.url,"http://geoserver.gis.irisnet.be/geoserver/wms?SERVICE=WMS&");
								};
								if (layer.name.search("Orthophotoplans 2012") === 0) {
									layer.url = layer.url.replace(layer.url,"http://geoserver.gis.irisnet.be/geoserver/wms?SERVICE=WMS&");
								};
							}
                        });
                    },
                    loadcapabilities: function() {
                        if (printButton) {
                            printButton.initialConfig.disabled = false;
                            printButton.enable();
                        }
                    },
                    print: function() {
                        try {
                            printWindow.close();
                        } catch (err) {
                            // TODO: improve destroy
                        }
                    },
                    printException: function(cmp, response) {
                        this.target.displayXHRTrouble && this.target.displayXHRTrouble(response);
                    },
                    scope: this
                }
            });

            var actions = gxp.plugins.Print.superclass.addActions.call(this, [{
                menuText: this.menuText,
                tooltip: this.tooltip,
                iconCls: "gxp-icon-print",
                disabled: this.printCapabilities !== null ? false : true,
                handler: function() {
                    var supported = getSupportedLayers();
                    if (supported.length > 0) {
                        var printWindow = createPrintWindow.call(this);
                        showPrintWindow.call(this);
                        return printWindow;
                    } else {
                        // no layers supported
                        Ext.Msg.alert(
                            this.notAllNotPrintableText,
                            this.nonePrintableText
                        );
                    }
                },
                scope: this,
                listeners: {
                    render: function() {
                        // wait to load until render so we can enable on success
                        printProvider.loadCapabilities();
                    }
                }
            }]);

            var printButton = actions[0].items[0];

            var printWindow;

            function destroyPrintComponents() {
                if (printWindow) {
                    // TODO: fix this in GeoExt
                    try {
                        var panel = printWindow.items.first();
                        panel.printMapPanel.printPage.destroy();
                        //panel.printMapPanel.destroy();
                    } catch (err) {
                        // TODO: improve destroy
                    }
                    printWindow = null;
                }
            }

            var mapPanel = this.target.mapPanel;
            function getSupportedLayers() {
                var supported = [];
                mapPanel.layers.each(function(record) {
                    var layer = record.getLayer();
					
                    if (isSupported(layer)) {
                        supported.push(layer);
                    }
                });
                return supported;
            }

            function isSupported(layer) {
                return (
                    layer instanceof OpenLayers.Layer.WMS ||
                    layer instanceof OpenLayers.Layer.OSM ||
					layer instanceof OpenLayers.Layer.Vector
                );
            }

            function createPrintWindow() {
                var legend = null;
                if (this.includeLegend === true) {
                    var key, tool;
                    for (key in this.target.tools) {
                        tool = this.target.tools[key];
                        if (tool.ptype === "gxp_legend") {
                            legend = tool.getLegendPanel();
                            break;
                        }
                    }
                    // if not found, look for a layer manager instead
                    if (legend === null) {
                        for (key in this.target.tools) {
                            tool = this.target.tools[key];
                            if (tool.ptype === "gxp_layermanager") {
                                legend = tool;
                                break;
                            }
                        }
                    }
                }
                printWindow = new Ext.Window({
                    title: this.previewText,
                    modal: true,
                    border: false,
                    autoHeight: true,
                    resizable: false,
                    width: 360,
                    items: [
                        new GeoExt.ux.PrintPreview({
                            minWidth: 336,
                            //mapTitle: this.target.about && this.target.about["title"],
                            //comment: this.target.about && this.target.about["abstract"],
							mapTitle: "",
                            comment: "",
                            printMapPanel: {
                                autoWidth: true,
                                height: Math.min(420, Ext.get(document.body).getHeight()-150),
                                limitScales: true,
                                map: Ext.applyIf({
                                    controls: [
                                        new OpenLayers.Control.Navigation({
                                            zoomWheelEnabled: false,
                                            zoomBoxEnabled: false
                                        }),
                                        new OpenLayers.Control.PanPanel(),
                                        new OpenLayers.Control.ZoomPanel(),
                                        new OpenLayers.Control.Attribution()
                                    ],
                                    eventListeners: {
                                        preaddlayer: function(evt) {
                                            return isSupported(evt.layer);
                                        }
                                    }
                                }, mapPanel.initialConfig.map),
                                items: [{
                                    xtype: "gx_zoomslider",
                                    vertical: true,
                                    height: 100,
                                    aggressive: true
                                }],
                                listeners: {
                                    afterlayout: function(evt) {
                                        printWindow.setWidth(Math.max(360, this.getWidth() + 24));
                                        printWindow.center();
                                    }
                                }
                            },
                            printProvider: printProvider,
                            includeLegend: this.includeLegend,
                            legend: legend,
                            sourceMap: mapPanel
                        })
                    ],
                    listeners: {
                        beforedestroy: destroyPrintComponents
                    }
                });
                return printWindow;
            }

            function showPrintWindow() {
                printWindow.show();

                // measure the window content width by it's toolbar
                printWindow.setWidth(0);
                var tb = printWindow.items.get(0).items.get(0);
                var w = 0;
                tb.items.each(function(item) {
                    if(item.getEl()) {
                        w += item.getWidth();
                    }
                });
                printWindow.setWidth(
                    Math.max(printWindow.items.get(0).printMapPanel.getWidth(),
                    w + 20)
                );
                printWindow.center();
            }

            return actions;
        }
    }

});

Ext.preg("ux_print", ux.plugins.Print);
