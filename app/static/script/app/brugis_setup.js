if (typeof console == "undefined") {
    this.console = {log: function() {}};
}

Ext.onReady(function () {

        // optionally set locale based on query string parameter
		if (localStorage && localStorage.getItem('BruGISLanguage')) {
			GeoExt.Lang.locale = localStorage.getItem('BruGISLanguage');
		}

        var geoextLangFr = (!(GeoExt.Lang.locale.toLowerCase().match(/fr/g) == null))?true:false;
        var geoextLangNl = (!(GeoExt.Lang.locale.toLowerCase().match(/nl/g) == null))?true:false;
        var geoextLangEn = (!(GeoExt.Lang.locale.toLowerCase().match(/en/g) == null))?true:false;
        
		if (!(geoextLangFr) == true && !(geoextLangNl) == true && !(geoextLangEn) == true){
			geoextLangFr = true;
		}
        
		if (GeoExt.Lang) {
            GeoExt.Lang.set(OpenLayers.Util.getParameters()["locale"] || GeoExt.Lang.locale);
		}
        
		var brugisConfig = new Brugis.Config();

        Ext.BLANK_IMAGE_URL = "../theme/app/img/blank.gif";
        OpenLayers.ImgPath = "../theme/app/img/";
				OpenLayers.IMAGE_RELOAD_ATTEMPTS = 2;

        if ((geoextLangFr) == true) {
            GeoExt.Lang.locale = "fr";
        } else
        if ((geoextLangNl) == true) {
            GeoExt.Lang.locale = "nl";
        } else
        if ((geoextLangEn) == true) {
            GeoExt.Lang.locale = "en";
        }
        
		if (GeoExt.Lang) {
            GeoExt.Lang.set(OpenLayers.Util.getParameters()["locale"] || GeoExt.Lang.locale);
		}

		var baseMap = [{
			source: "BruGIS WMS - Geoserver",
			name:   brugisConfig.baseLayerName,
			title:  brugisConfig.baseLayerTitle,
			id: "frBackground",
			group:  "background",
			visibility: false,
			buffer: 0
		},{
			source: "BruGIS WMS - Geoserver",
			name:   brugisConfig.baseGrayLayerName,
			title:  brugisConfig.baseGrayLayerTitle,
			id: "frBackground",
			group:  "background",
			visibility: true,
			buffer: 0
		}];

		// screen pixels per screen inch
		var dpi = 90;

		// quite clear factor to have round scales
		var buggerThemAllInHellFactor = 90.71410375/90.00;

		// 1/ screen inch per screen meter * screen pixels per screen inch = 1/ screen pixels per screen meter = screen meter / screen pixels
		var scaleToResFactor = 2.54/(100 * dpi * buggerThemAllInHellFactor);

		var resolutions = [	scaleToResFactor * 175000,
							scaleToResFactor * 150000,
							scaleToResFactor * 100000,
							scaleToResFactor * 75000,
							scaleToResFactor * 50000,
							scaleToResFactor * 25000,
							scaleToResFactor * 20000,
							scaleToResFactor * 12500,
							scaleToResFactor * 10000,
							scaleToResFactor * 7500,
							scaleToResFactor * 5000,
							scaleToResFactor * 2500,
							scaleToResFactor * 2000,
							scaleToResFactor * 1000,
							scaleToResFactor * 500,
							scaleToResFactor * 250,
							scaleToResFactor * 200,
							scaleToResFactor * 125,
							scaleToResFactor * 100,
							scaleToResFactor * 50
							];

		var sources = {
			'BruGIS WMS - Geoserver': {
				url: brugisConfig.getBrugisGeoserverUrl(),
				version: "1.1.1",
				ptype: "ux_brugiswmssource"
			},
			'IBGE WMS - Mapserver': {
				url: "/geoserver/www/wmsaatl/ibgewms.xml",
				ptype: "gxp_wmscsource",
				version: "1.1.1"
			},
			'CIRB WMS - Geoserver': {
				url: "http://geoservices-urbis.irisnet.be/geoserver/ows?",
				version: "1.3.0",
				ptype: "gxp_wmscsource"
			},
			'STIB WMS - Geoserver': {
				url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
				version: "1.3.0",
				ptype: "gxp_wmssource"
			},
			'Bruxelles Mobilité WMS - Geoserver': {
				url: brugisConfig.BMBWMSUrl,
				version: "1.3.0",
				ptype: "gxp_wmssource"
			},
			/*'Bruxelles Mobilité WMS - Geoserver': {
				url: brugisConfig.BMBWMSUrl2,
				version: "1.1.1",
				ptype: "gxp_wmssource"
			},*/
			'IBSA WMS - Geoserver': {
				url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
				version: "1.3.0",
				ptype: "gxp_wmssource"
			},
			'AGIV WMS - Basiskaart': {
				url: "http://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms?",
				version: "1.3.0",
				ptype: "gxp_wmssource"
			},
			'AGIV WMS - Historische kaarten': {
				url: "http://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms?",
				version: "1.3.0",
				ptype: "gxp_wmssource"
			}
		};

			OpenLayers.Projection.defaults["EPSG:31370"] = {
				units:"m", maxExtent:[0,0,300000,300000]
			};

     if(typeof printCapabilities === 'undefined') {
			 printCapabilities = null;
		 }


        var app = new GeoExplorer.Brugis({
            //authStatus: globalAuthStatus,
            proxy: "../proxy/?url=",
            //printCapabilities : printCapabilities,
						printService : brugisConfig.getPrintCapabilitiesUrl(),
            downloadBaseUrl : brugisConfig.getPrintDownloadBaseUrl(),
            reperageHost    : brugisConfig.getReperageHost(),
            about: {
                title: "MyBruGIS v 1.2 Louis Couperin",
                "abstract": brugisConfig.abstractText,
				"help": brugisConfig.localeHelp,
		        contact: brugisConfig.contactText
            },

        	// layer sources
        	defaultSourceType: "gxp_wmssource",
			sources: sources,
			
			brugisGlobalConfig : brugisConfig,

		    map: {
				id: "mymap", // id needed to reference map in portalConfig above
				projection: 'EPSG:31370',
				units: 'm',
				resolutions: resolutions,
				maxResolution: resolutions[0],
				maxExtent: [17646.52218435664, 21958.60926379636, 297198.78807110013, 245254.64733992796],
				center: [149600, 170300],
				zoom:2,
				layers: baseMap,
				controls:[
                    new OpenLayers.Control.Navigation({
                        zoomWheelOptions: {interval: 250, cumulative: true},
                        dragPanOptions: {enableKinetic: false}
                    }),
                    new OpenLayers.Control.PanPanel(),
                    new OpenLayers.Control.ZoomPanel(),
                    new OpenLayers.Control.Attribution()
                ]
			}
        });
});
