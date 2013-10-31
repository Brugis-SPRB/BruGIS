
/**
 * //@requires gxp/plugins/Tool.js
 * //@requires CirbGeocoderComboBox.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = BrugisSearcher
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
ux.plugins.BrugisSearcher = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = ux_BrugisSearcher */
    ptype: "ux_BrugisSearcher",

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
		  
		
		var searchTypeCombo= new Ext.form.ComboBox({
			store: ["ADR","CAD"],
			typeAhead: true,
			forceSelection: true,
			width: 75,
			triggerAction: 'all',
			selectOnFocus:true,
			listeners:{
				 scope: this,
				 'select': function(a) {
					if(this.typecombo.getValue() == "ADR") {
						this.cadtext.hide();
						this.combo.show();
					} else {
						this.combo.hide();
						this.cadtext.show();
					}
				 }
			}
		});
		
		var cadTextField = new Ext.form.TextField({
			hidden : true,
			width: 300,
			emptyText: 'CAPAKEY : 21562A0329/00X010',
			listeners: {
				scope:this,
				'keypress' : function(textfield,eventObject){
					if (eventObject.getCharCode() == Ext.EventObject.ENTER) {
						console.log("DOOOO");
					}
				}
			}
		});
		
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
		this.typecombo = searchTypeCombo;
        this.cadtext = cadTextField;
		
        return ux.plugins.BrugisSearcher.superclass.init.apply(this, arguments);
    },
	

	
    /** api: method[addOutput]
     */

    addOutput: function(config) {
		 this.btGroup = new Ext.ButtonGroup({
			items : [this.combo,this.cadtext,this.typecombo]
		 });

        return ux.plugins.BrugisSearcher.superclass.addOutput.call(this, this.btGroup);
    },

    /** private: method[onComboSelect]
     *  Listener for combo's select event.
     */
    onComboSelect: function(combo, record) {
        if (this.updateField) {
            var map = this.target.mapPanel.map;
			
			var dest = new Proj4js.Proj('EPSG:31370');			
			var myPoint = record.data.point;
			var adnc    = record.data.adNc;
			
			if(map.getLayersByName('Search').length > 0){
				var vectorLayer = map.getLayersByName('Search')[0];
				vectorLayer.addFeatures(
					new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
					)
				);
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

Ext.preg('ux_BrugisSearcher', ux.plugins.BrugisSearcher);
