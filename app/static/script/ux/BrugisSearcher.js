
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
	wpsserver : '/geoserver/wps',
	zoom : 9,
	zoomToPolNum: 12,

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
			},
			value : "ADR"
		});
		
		
		var cadTextField = new Ext.form.TextField({
			hidden : true,
			width: 300,
			emptyText: 'CAPAKEY : 21562A0329/00X010',
			listeners: {
				scope:this,
				'render': function(c) {
				  c.getEl().on('keypress', function(eventObject,textField) {
						if (eventObject.getCharCode() == Ext.EventObject.ENTER) {
							this.onCapaKeySelect(this.cadtext.getValue());
						}
				  }, this);
				}
			}
		});
		
		this.wpsclient = new OpenLayers.WPSClient({
			servers: {
				brugisgeo: this.wpsserver
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

	onCapaKeySelect: function(keyText){

		 this.wpsclient.execute({
			server: "brugisgeo",
			process: "py:cadsearch",
			// spatial input can be a feature or a geometry or an array of
			// features or geometries
			inputs: {
				key: keyText // '21562A0329/00X010'
			},
			success: function(outputs) {
				// outputs.result is a feature or an array of features for spatial
				// processes.
				this.onCapaKeyFound(outputs.result);
			},
			scope:this
		});
		
	},
	
	onCapaKeyFound : function(result) {
		if(result && result.length  > 0) {
			var map = this.target.mapPanel.map;
			myPoint =  result[0].geometry;

			if(map.getLayersByName('Search').length > 0){
				var vectorLayer = map.getLayersByName('Search')[0];
				vectorLayer.addFeatures(new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
				));
			}
			else{
				var vectorLayer = new OpenLayers.Layer.Vector("Search");
				vectorLayer.addFeatures(new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
				));
				map.addLayer(vectorLayer);
			}
			//the array should consist of four values (left, bottom, right, top)
			map.zoomToExtent(result[0].data.bounds);
		}
		else {
			Ext.Msg.alert('CAD Search', 'Your query did not return any result');
		}
	},
    /** private: method[onComboSelect]
     *  Listener for combo's select event.
	 *	DocG - 2014/02/20 update for zoom level based on extent returned by the CIRB webservice
     */
    onComboSelect: function(combo, record) {
        if (this.updateField) {
            var map = this.target.mapPanel.map;
			var dest    = new Proj4js.Proj('EPSG:31370');			
			var myPoint = record.data.point;
			var adnc 	= record.data.adNc;
			var extent 	= record.json.extent;
			
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
			if (typeof extent=="object"){
				map.zoomToExtent([extent.xmin, extent.ymin, extent.xmax, extent.ymax]);
			}
			else if (record.data.addressNumber === ""){
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