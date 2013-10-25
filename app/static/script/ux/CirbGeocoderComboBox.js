/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/** api: (define)
 *  module = ux.form
 *  class = CirbGeocoderComboBox
 */
Ext.namespace("ux.form");

/** api: constructor
 *  .. class:: CirbGeocoderComboBox(config)
 *
 *  Creates a combo box that issues queries to the CIRB geocoding service.
 *  If the user enters a valid address in the search box, the combo's store
 *  will be populated with records that match the address.  Records have the 
 *  following fields:
 *  
 *  * address - ``String`` The formatted address.
 *  * location - ``OpenLayers.LonLat`` Location matching address.
 *  * viewport - ``OpenLayers.Bounds`` Recommended viewing bounds.
 *
 */   
ux.form.CirbGeocoderComboBox = Ext.extend(Ext.form.ComboBox, {
    
    /** api: xtype = ux_cirbgeocodercombo */
    xtype: "ux_cirbgeocodercombo",

    // Begin i18n.
	loadingText: 'Searching...',
    emptyText: 'Search location',
    language: 'en',
    // End i18n.

    /** api: config[map]
     *  ``OpenLayers.Map or Object``  A configured map or a configuration object
     *  for the map constructor, required only if :attr:`zoom` is set to
     *  value greater than or equal to 0.
     */
    /** private: property[map]
     *  ``OpenLayers.Map``  The map object.
     */
    map: null,

    /** api: config[width]
     *  See http://www.dev.sencha.com/deploy/dev/docs/source/BoxComponent.html#cfg-Ext.BoxComponent-width,
     *  default value is 350.
     */
    width: 350,

    /** api: config[listWidth]
     *  See http://www.dev.sencha.com/deploy/dev/docs/source/Combo.html#cfg-Ext.form.ComboBox-listWidth,
     *  default value is 350.
     */
    listWidth: 350,

    /** api: config[zoom]
     *  ``Number`` Zoom level for recentering the map after search, if set to
     *  a negative number the map isn't recentered, defaults to 8.
     */
    /** private: property[zoom]
     *  ``Number``
     */
    zoom: 9,

    /** api: config[zoomToPolNum]
     *  ``Number`` Zoom level for recentering the map after search, if set to
     *  a negative number the map isn't recentered, defaults to 10.
     */
    /** private: property[zoom]
     *  ``Number``
     */
    zoomToPolNum: 12,

    /** api: config[minChars]
     *  ``Number`` Minimum number of characters to be typed before
     *  search occurs, defaults to 1.
     */
    minChars: 1,

    /** api: config[queryDelay]
     *  ``Number`` Delay before the search occurs, defaults to 50 ms.
     */
    queryDelay: 50,

    /** api: config[maxRows]
     *  `String` The maximum number of rows in the responses, defaults to 20,
     *  maximum allowed value is 1000.
     *  See: http://www.geonames.org/export/geonames-search.html
     */
    /** private: property[maxRows]
     *  ``String``
     */
    maxRows: '20',
	
	/**
	 *
	 *
	 */
	//controlOptions: {}, //gvds 2012/10/24

    /** api: config[tpl]
     *  ``Ext.XTemplate or String`` Template for presenting the result in the
     *  list (see http://www.dev.sencha.com/deploy/dev/docs/output/Ext.XTemplate.html),
     *  if not set a default value is provided.
     */
    tpl: '<tpl for="."><div class="x-combo-list-item">{streetName} {addressNumber} {streetPostCode} {streetmunicipality}</div></tpl>',

    /** private: property[hideTrigger]
     *  Hide trigger of the combo.
     */
    hideTrigger: true,

    /** private: property[displayField]
     *  Display field name
     */
    displayField: 'address.street.name',

    /** private: property[forceSelection]
     *  Force selection.
     */
    forceSelection: true,

    /** private: property[queryParam]
     *  Query parameter.
     */
    queryParam: 'address',

    /** private: property[url]
     *  Url of the Google Geocoding service
     */
	url: 'http://service.gis.irisnet.be/urbis/Rest/Localize/getaddresses?',

    /** private: method[initComponent]
     *  Override
     */
    initComponent: function() {
		this.map = this.map || Ext.getCmp("mymap").map;
        ux.form.CirbGeocoderComboBox.superclass.initComponent.apply(this, arguments);
		var urlAppendString = '';
		
		var source = new Proj4js.Proj('EPSG:4326');
		var dest = new Proj4js.Proj('EPSG:31370');
		
        this.store = new Ext.data.Store({
            proxy: new Ext.data.ScriptTagProxy({
                url: this.url + urlAppendString,
				callbackParam :  'callback'
            }),
            baseParams: {
				language: this.language,
				//callback: 'callback',
				address: this.queryParam
            },
            reader: new Ext.data.JsonReader({
                root: "result",
                fields: [
                    {
                        name: 'address'
                    }, {
                        name: 'streetName',
						mapping: 'address.street.name'
                    }, {
                        name: 'addressNumber',
						mapping: 'address.number'
                    }, {
                        name: 'streetPostCode',
						mapping: 'address.street.postCode'
                    }, {
                        name: 'streetmunicipality',
						mapping: 'address.street.municipality'
                    }, {
                        name: 'adNc'
                    }, {
                        name: 'point'
                    }
                ]
            })
        });
        if(this.zoom > 0) {
            this.on("select", function(combo, record, index) {
				var myPoint = record.data.point;
				var adnc    = record.data.adNc;
				var p = new Proj4js.Point(myPoint.x, myPoint.y);
				var streetName = record.data.streetName;
				Proj4js.transform(source, dest, p);
				var layerName = 'Search';
				//var layerName = streetName;
				if(this.map.getLayersByName(layerName).length > 0){
					var vectorLayer = this.map.getLayersByName(layerName)[0];
					//console.log("1");
					//console.log(this.map.getLayersByName(layerName));
					vectorLayer.addFeatures(
						new OpenLayers.Feature.Vector(
						new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
						)
					);
				}
				else{
					//console.log("2");
					var vectorLayer = new OpenLayers.Layer.Vector(layerName);
					vectorLayer.addFeatures(
						new OpenLayers.Feature.Vector(
						new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
						)
					);
					this.map.addLayer(vectorLayer);
				}
				
				if (record.data.addressNumber === ""){
					 var position = new OpenLayers.LonLat(
							myPoint.x, myPoint.y
					 );
					this.map.setCenter(position, this.zoom);
				}
				else {
					 var position = new OpenLayers.LonLat(
							myPoint.x, myPoint.y
					 );
					this.map.setCenter(position, this.zoomToPolNum);
				}				
            }, this);
        }
    }
});
    


Ext.reg("ux_cirbgeocodercombo", ux.form.CirbGeocoderComboBox);
