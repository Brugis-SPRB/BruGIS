/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * //@requires gxp/plugins/Tool.js
 * //@requires CirbGeocoderComboBox.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = CirbGeocoder
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: CirbGeocoder(config)
 *
 *    Plugin for adding a CirbGeocoderComboBox to a viewer.  The underlying
 *    CirbGeocoderComboBox can be configured by setting this tool's 
 *    ``outputConfig`` property. 
 */
ux.plugins.CirbGeocoder = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = ux_CirbGeocoder */
    ptype: "ux_CirbGeocoder",

    // Begin i18n.
    // End i18n.

    /** api: config[updateField]
     *  ``String``
     *  If value is specified, when an item is selected in the combo, the map
     *  will be zoomed to the corresponding field value in the selected record.
     *  If ``null``, no map navigation will occur.  Valid values are the field
     *  names described for the :class:`gxp.form.GoogleGeocoderComboBox`.
     *  Default is "viewport".
     */
    updateField: "viewport",
    
    init: function(target) {

        var combo = new ux.form.CirbGeocoderComboBox(Ext.apply({
            listeners: {
                select: this.onComboSelect,
                scope: this
            }
        }, this.outputConfig));
        
        var bounds = target.mapPanel.map.restrictedExtent;
        if (bounds && !combo.bounds) {
            target.on({
                ready: function() {
                    combo.bounds = bounds.clone().transform(
                        target.mapPanel.map.getProjectionObject(),
                        new OpenLayers.Projection("EPSG:4326")
                    );
                }
            });
        }
        this.combo = combo;
        
        return ux.plugins.CirbGeocoder.superclass.init.apply(this, arguments);

    },

    /** api: method[addOutput]
     */
    addOutput: function(config) {
        return ux.plugins.CirbGeocoder.superclass.addOutput.call(this, this.combo);
    },
    
    /** private: method[onComboSelect]
     *  Listener for combo's select event.
     */
    onComboSelect: function(combo, record) {
        if (this.updateField) {
            var map = this.target.mapPanel.map;
			
			console.log(record);
			
			var dest = new Proj4js.Proj('EPSG:31370');			
			var myPoint = record.data.point;
			var adnc    = record.data.adNc;
			
			//var p = new Proj4js.Point(myPoint.x, myPoint.y);
			//Proj4js.transform(source, dest, p);

			if(map.getLayersByName('Search').length > 0){
				var vectorLayer = map.getLayersByName('Search')[0];
				vectorLayer.addFeatures(
					new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
					)
				);
				console.log("searchpoint added");
			}
			else{
				var vectorLayer = new OpenLayers.Layer.Vector("Search");
				vectorLayer.addFeatures(
					new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
					)
				);
				map.addLayer(vectorLayer);
			}
			if (record.data.addressNumber === ""){
				 var position = new OpenLayers.LonLat(
						myPoint.x, myPoint.y
				 );
				map.setCenter(position, this.zoom);
			}
			else{
				 var position = new OpenLayers.LonLat(
						myPoint.x, myPoint.y
				 );
				map.setCenter(position, this.zoomToPolNum);
				
			}
        }
    }
});

Ext.preg('ux_CirbGeocoder', ux.plugins.CirbGeocoder);
