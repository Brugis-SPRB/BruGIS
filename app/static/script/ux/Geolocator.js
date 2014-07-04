/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 * developped by DocG
 */

/**
 * @requires plugins/Tool.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = Geolocator
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: Geolocator(config)
 *
 *    Provides one action for panning the map and zooming by touch
 */
ux.plugins.Geolocator = Ext.extend(gxp.plugins.Tool, {

	// Begin i18n.
	menuText: "Geolocate me",
	tooltip: "Geolocate me",
	// End i18n.
    
    /** api: ptype = ux_geolocator */
    ptype: "ux_geolocator",
    

    /** private: property[iconCls]
     */
    iconCls: "ux-icon-geolocator",
	
	/** private: property[layerName]
	 */
	layerName: "geolocation",
	
	/** private: property[geolocateControl]
	 */
	geolocateControl : null,
    
    /** private: method[constructor]
     */
    constructor: function(config) {
		ux.plugins.Geolocator.superclass.constructor.apply(this, arguments);
    },
	
	onLocationFailed : function(message) {
		//console.log("locationFailed");
		//console.log(message);
	},
	
	onLocationUpdated : function(infos) {
		//console.log("locationUpdated");
		//console.log(infos.position);
		//console.log(infos.point);
		var map = this.target.mapPanel.map;
		var circleStyle = {
			fillColor: '#000',
			fillOpacity: 0.05,
			strokeWidth: 0
		};
		var crossStyle = {
			graphicName: 'cross',
			strokeColor: '#FF0000',
			strokeWidth: 1,
			fillOpacity: 0,
			pointRadius: 7
		};
		var vector = map.getLayersByName(this.layerName)[0];
		var i = 0;
		vector.removeAllFeatures();
		var circle = new OpenLayers.Feature.Vector(
			OpenLayers.Geometry.Polygon.createRegularPolygon(
				new OpenLayers.Geometry.Point(infos.point.x, infos.point.y),
				infos.position.coords.accuracy/2,
				40,
				0
			),
			{},
			circleStyle
		);
		vector.addFeatures([
			new OpenLayers.Feature.Vector(
				infos.point,
				{},
				crossStyle
			),
			circle
		]);
		map.zoomToExtent(vector.getDataExtent());
		this.geolocateControl.bind = true;
	},
	
	onGeolocateCtrlActivate : function() {
		//Add Layer to the map
		var map = this.target.mapPanel.map;
		var vector = new OpenLayers.Layer.Vector(this.layerName);
		map.addLayer(vector);
		this.geolocateControl.watch = true;
	},
	
	onGeolocateCtrlDeactivate : function() {
		//Remove Layer to the map
		var map = this.target.mapPanel.map;
		map.removeLayer(map.getLayersByName(this.layerName)[0]);
		this.geolocateControl.bind = false;
	}, 
	
    /** api: method[addActions]
     */
    addActions: function() {
        this.controlOptions = this.controlOptions || {};
		this.geolocateControl = new OpenLayers.Control.Geolocate(this.controlOptions);
        var actions = [new GeoExt.Action({
            tooltip: this.tooltip,
            menuText: this.menuText,
            iconCls: this.iconCls,
            enableToggle: true,
            pressed: false,
            allowDepress: true,
			hidden: this.hidden,
            control: this.geolocateControl,
            map: this.target.mapPanel.map
		})];
		
		actions[0].control.events.register("locationupdated", this, this.onLocationUpdated);
		actions[0].control.events.register("locationfailed", this, this.onLocationFailed);
		
		actions[0].control.events.register("activate", this, this.onGeolocateCtrlActivate);
		actions[0].control.events.register("deactivate", this, this.onGeolocateCtrlDeactivate);
		
		this.actions = actions;
		
		this.target.on("preferencesChange", function() {
			for (var i=this.actions.length-1; i>=0; --i) {
				var showButton = 
					(localStorage.getItem("shwGlTl") && localStorage.getItem("shwGlTl") == '0')?
					false:
					(localStorage.getItem("shwGlTl") && localStorage.getItem("shwGlTl") == '1')?
					true:
					true;
					
				if (showButton == true) {
					this.actions[i].show();
				} else {
					this.actions[i].hide();
				}
			}
		}, this);

	
        return ux.plugins.Geolocator.superclass.addActions.apply(this, [actions]);
    }
});

Ext.preg('ux_geolocator', ux.plugins.Geolocator);
