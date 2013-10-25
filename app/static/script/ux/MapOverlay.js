/**
 * Copyright (c) 2012 Prodevelop S.L.
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

 /**
 * @requires plugins/Tool.js
 * @requires OpenLayers/Control/OverviewMap.js
 * @requires OpenLayers/Layer/WMS.js
 */


/** api: (define)
 *  module = gxp.plugins
 *  class = OverviewMap
 *  base_link = `gxp.plugins.Tool <http://opengeo.github.com/gxp/lib/plugins/Tool.html>`_
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

ux.plugins.OverviewMap = Ext.extend(gxp.plugins.Tool, {

        /** api: ptype = ux_overviewmap */
        ptype: "ux_overviewmap",

    /** api: config[mapOptions]
     *  ``Object`` The options object of the ``OpenLayers.Control.OverviewMap``
     */
        mapOptions: null,

    /** api: config[layerName]
     *  ``String`` The name of a ``OpenLayers.Layer.OSM`` or ``OpenLayers.Layer.WMS`` layer already added to the map
     */
        layerName: null,

        added: false,

    /** api: config[layer]
     *  ``Object`` A layer configuration object
     */
        layer: null,

    /** private: method[constructor]
     */
        constructor: function(config) {
                ux.plugins.OverviewMap.superclass.constructor.apply(this, arguments);
        },

    /** private: method[constructor]
     */
        init: function(target) {
                ux.plugins.OverviewMap.superclass.init.apply(this, arguments);
                target.on("ready", this.addOverviewMap, this);
        },

     /** api: method[addOverviewMap]
     *
     *  Adds the ``OpenLayers.Control.OverviewMap`` to the map. If a ``layerName`` property is provided, it will try to load it into the ``OpenLayers.Control.OverviewMap`` otherwise it will try to instantiate a ``layer``
     */
        addOverviewMap : function() {
				//console.log("we are here");
                var map = this.target.mapPanel.map;
                //console.log("we are here 2");
                if (map.layers.length <= 0 && this.layerName) {
                        return;
                }
                if (this.added) {
                        return;
                }
                //console.log("we are here 3");

                //first instantiate the layer defined in the OverviewMap
                var lyr;
                if (this.layerName) {
					//console.log("we are here 3.1");
						//console.log(map);
                        var lyrs = map.getLayersByName(this.layerName);
                        if (lyrs && lyrs.length > 0) {
                                var lyr_ = lyrs[0].clone();
                                delete lyr_.params["ISBASELAYER"];
                                if (lyr_ instanceof OpenLayers.Layer.OSM) {
                                        lyr = new OpenLayers.Layer.OSM();
                                } else {
                                        lyr = new OpenLayers.Layer.WMS("OverviewMap", 
                                               lyr_.url,
                                               {layers: lyr_.params.LAYERS}, lyr_.options);
                                }
                        } else {
                                throw new Error("The layer of the OverviewMap cannot be found in the Map");
                        }
                } else {
					//console.log("we are here 3.2");
                        if (this.layer) {
                                var source = this.target.layerSources[this.layer.source];
                                if (source) {
                                    record = source.createLayerRecord(this.layer);
                                    lyr = record.getLayer();
                                }
                        }
                }
                //console.log("we are here 4");

                var size = this.initialConfig.size || [200, 220];
				//console.log(size);

                if (this.mapOptions && this.mapOptions.maxExtent) {
                        this.mapOptions.maxExtent = OpenLayers.Bounds.fromArray(this.mapOptions.maxExtent);
                }
                //console.log("we are here 5");

                //create the OverviewMap object
                var mconopt = {
                        size : new OpenLayers.Size(size[0],size[1]),
                        layers : [ lyr ]
                };
                mconopt.mapOptions = this.mapOptions;
                //console.log("we are here 6");

                //we attach the OverviewMap to a div if the outputTarget was specified
                if (this.initialConfig.outputTarget) {
                        var divComp = Ext.get(this.initialConfig.outputTarget);
                        mconopt.div = divComp.dom;
                } 
                //console.log("we are here 7");

				mconopt.autoPan = true;
				
                //finally add the control to the map

                map.addControl(new OpenLayers.Control.OverviewMap(mconopt));
                this.added = true;
				console.log(map);
                //console.log("we are here 8");
        }

});

Ext.preg("ux_overviewmap", ux.plugins.OverviewMap);