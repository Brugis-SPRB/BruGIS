/**
 * Copyright (c) Brugis (S.P.R.B)
 *
 * Published under the GPL V3 license.
 * See www.gnu.org/licences/gpl-3.0 for the full text
 * of the license.
 */

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
	wpsserver : 'http://mbr225.irisnet.be/geoserver/wps',
	zoom : 9,
	zoomToPolNum: 12,
	searchLayerName: "search",
	cadSearchTipText: "enter here the CAPAKEY searched",

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
			id: "searchTypeCombo",
			store: ["ADR","CAD"],
			//store: ["ADR"],
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
						//console.log(this.combo);
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
			emptyText: this.cadSearchTipText,
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
			//items : [this.combo]
		 });

        return ux.plugins.BrugisSearcher.superclass.addOutput.call(this, this.btGroup);
    },

	onCapaKeySelect2: function(keyText){

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

    onCapaKeySelect: function(keyText){
        var wfsQueryTemplate = "<wfs:GetFeature service=\"WFS\" version=\"1.1.0\" \
          xmlns:BDU=\"www.brugis.be/bdu/\" \
          xmlns:wfs=\"http://www.opengis.net/wfs\" \
          xmlns:ogc=\"http://www.opengis.net/ogc\" \
          xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \
          xsi:schemaLocation=\"http://www.opengis.net/wfs \
                              http://schemas.opengis.net/wfs/1.1.0/wfs.xsd\"> \
          <wfs:Query typeName=\"BDU:Parcelle_2015\"> \
            <ogc:Filter> \
                <PropertyIsEqualTo> \
                 <PropertyName>CAPAKEY</PropertyName> \
                 <Literal>%place_holder%</Literal> \
                </PropertyIsEqualTo> \
            </ogc:Filter> \
        </wfs:Query> \
        </wfs:GetFeature>";

        var wfsQuery = wfsQueryTemplate.replace("%place_holder%", keyText);

        var gmlOptions= {
            "featureType": "Parcelle_2015",
            "featureNS": "www.brugis.be/bdu/",
            "geometryName": "GEOMETRY"
        }
        var gmlOptionsIn = OpenLayers.Util.extend(
            OpenLayers.Util.extend({}, gmlOptions)
        );
        var parser = new OpenLayers.Format.GML.v3(gmlOptionsIn);
        var stub = '<?xml version="1.0" encoding="UTF-8"?><wfs:FeatureCollection xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:BDU_DMS_ARCH_PRIVATE="http://www.brugis.be/BDU_DMS_ARCH_PRIVATE" xmlns:RF="www.brugis.be/rf/" xmlns:test="http://test.bdu.org" xmlns:BDU_DRU="www.mybrugis.irisnet.be/bdu_dru" xmlns:BDU_DEP="http://www.brugis.be/BDU_DEP" xmlns:BDU="www.brugis.be/bdu/" xmlns:BSO_DSV="www.mybrugis.irisnet.be/bso_dsv" xmlns:BSO_DSP="http://www.brugis.be/BSO_DSP" xmlns:BSO_DML_ARCH="http://www.brugis.be/BSO_DML_ARCH" xmlns:BUV="www.irisfoncier.irisnet.be/buv/" xmlns:ogc="http://www.opengis.net/ogc" xmlns:NOVA="www.mybrugis.irisnet.be/nova" xmlns:BDU_DMS_PROT="http://www.brugis.be/BDU_DMS_PROT" xmlns:BSO_DML_BESC="http://www.brugis.be/BSO_DML_BESC" xmlns:BSO_GHI="www.mybrugis.irisnet.be/bso_ghi" xmlns:DEP_BP="www.brugis.be/DEP_BP/" xmlns:AED="www.irisfoncier.irisnet.be" xmlns:AEE="www.brugis.be/aee/" xmlns:TAX="www.brugis.be" xmlns:BEW="www.brugis.be/bew/" xmlns:BDU_DMS_ARCH="http://www.brugis.be/BDU_DMS_ARCH" xmlns:SG_AGR="www.brugis.be/agr/" xmlns:BSO="http://www.brugis.be/BSO" xmlns:BDU_IRL="www.brugis.be/bdu_irl/" xmlns:URBANALYSIS="wps.brugis.irisnet.be" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ows="http://www.opengis.net/ows" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml" xmlns:REPERAGE="www.brugis.be/reperage" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" numberOfFeatures="1" timeStamp="2016-11-29T14:39:28.850Z" xsi:schemaLocation="http://www.opengis.net/wfs http://localhost:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd www.brugis.be/bdu/ http://localhost:8080/geoserver/wfs?service=WFS&amp;version=1.1.0&amp;request=DescribeFeatureType&amp;typeName=BDU%3AParcelle_2015"><gml:featureMembers><BDU:Parcelle_2015 gml:id="Parcelle_2015.fid-5e16dc86_158b083a137_-7ff1"><BDU:ID>43315</BDU:ID><BDU:CAPATY>PR</BDU:CAPATY><BDU:CAPAKEY>21811M1857/00M000</BDU:CAPAKEY><BDU:SHAPE_AREA>104.0</BDU:SHAPE_AREA><BDU:SHEET>21811M070002</BDU:SHEET><BDU:MUNC>21004</BDU:MUNC><BDU:CD5C>21811</BDU:CD5C><BDU:CDNC>2100411</BDU:CDNC><BDU:CSNC>M</BDU:CSNC><BDU:SHNC>070002</BDU:SHNC><BDU:SHNC_FILE>21811M070002</BDU:SHNC_FILE><BDU:RAD_NUM>1857</BDU:RAD_NUM><BDU:EXP_ALPHA>M</BDU:EXP_ALPHA><BDU:APNC_MAPC>21811_M_1857_M_000_00</BDU:APNC_MAPC><BDU:APNC_CADC>21811M1857/00M000</BDU:APNC_CADC><BDU:APNC_CAD>M1857M</BDU:APNC_CAD><BDU:APNC_MAP>1857M</BDU:APNC_MAP><BDU:GEOMETRY><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:31370" srsDimension="2"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>148367.192 170498.075 148371.39 170503.616 148383.48 170495.843 148379.414 170489.657 148367.192 170498.075</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></BDU:GEOMETRY></BDU:Parcelle_2015></gml:featureMembers></wfs:FeatureCollection>';
        var features = parser.read(stub);
        /*
        Ext.Ajax.request({
            url: 'http://localhost:8080/geoserver/wfs',
            xmlData: wfsQuery,
            method: 'POST',
            success: function(response, opts) {
                console.log("Success");
                console.log(response);
                var payload = response.responseXML;
                //var payload = response.responseText;
                //var start = payload.indexOf('<BDU:GEOMETRY>') + 14;
                //var end = payload.indexOf('</BDU:GEOMETRY>');
                ;
                console.log(data);
            },
            failure: function(response, otps) {
                console.log("Failure");
                console.log(response);
            },
            scope: this
        });
        */
    },

	onCapaKeyFound : function(result) {
		if(result && result.length  > 0) {
			var map = this.target.mapPanel.map;
			myPoint =  result[0].geometry;

			if(map.getLayersByName(this.searchLayerName).length > 0){
				var vectorLayer = map.getLayersByName(this.searchLayerName)[0];
				vectorLayer.addFeatures(new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
				));
			}
			else{
				var vectorLayer = new OpenLayers.Layer.Vector(this.searchLayerName);
				vectorLayer.addFeatures(new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
				));
				map.addLayer(vectorLayer);
			}

			if(map.getLayersByName(this.searchLayerName).length > 0){
				var vectorLayer = map.getLayersByName(this.searchLayerName)[0];
				console.log(vectorLayer);
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
            var map 	= this.target.mapPanel.map;
			var dest    = new Proj4js.Proj('EPSG:31370');
			var myPoint = record.data.point;
			var adnc 	= record.data.adNc;
			var extent 	= record.json.extent;
			var date	= new Date();

			//console.log(record);
			//console.log(extent);

			// support pour param�tre de nombre de recherche (une seule ou plusieurs)
			var uniqueSearch =
			(localStorage.getItem("searchN") && localStorage.getItem("searchN") == '1')?true:
			(localStorage.getItem("searchN") && localStorage.getItem("searchN") == '0')?false:false;
			if (uniqueSearch && map.getLayersByName(this.searchLayerName).length > 0){
				map.removeLayer(map.getLayersByName(this.searchLayerName)[0]);
			}

			if(map.getLayersByName(this.searchLayerName).length > 0){
				var vectorLayer = map.getLayersByName(this.searchLayerName)[0];
				vectorLayer.addFeatures(
					new OpenLayers.Feature.Vector(
						new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
					)
				);
			}
			else{
				var myStyle = new OpenLayers.Symbolizer.Point({
							graphicName: 'cross',
							strokeColor: '#000000',
							strokeWidth: 0.8,
							fillOpacity: 0,
							pointRadius: 7
						});
				var myStyleMap = new OpenLayers.StyleMap(myStyle, {extendDefault: true});
				var vectorLayer = new OpenLayers.Layer.Vector(this.searchLayerName, {style: myStyle, styleMap: myStyleMap});
				vectorLayer.addFeatures(
					new OpenLayers.Feature.Vector(
						new OpenLayers.Geometry.Point(myPoint.x, myPoint.y)
					)
				);
				map.addLayer(vectorLayer);
			}

			if (record.data.addressNumber === "") {
				if (typeof extent=="object") {
					map.zoomToExtent([extent.xmin, extent.ymin, extent.xmax, extent.ymax]);
				}
				else {
					var position = new OpenLayers.LonLat(
							myPoint.x, myPoint.y
					 );
					map.setCenter(position, this.zoom);
				}
			}
			else{
				 var position = new OpenLayers.LonLat(
						myPoint.x, myPoint.y
				 );
				map.setCenter(position, this.zoomToPolNum);
			}
			(function(){Ext.getCmp("searchTypeCombo").focus(true)}).defer(50, this);
		}
    }
});

Ext.preg('ux_BrugisSearcher', ux.plugins.BrugisSearcher);
