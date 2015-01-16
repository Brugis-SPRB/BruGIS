        // optionally set locale based on query string parameter
		if (localStorage && localStorage.getItem('BruGISLanguage')) {
			GeoExt.Lang.locale = localStorage.getItem('BruGISLanguage');
		}
		
		if (GeoExt.Lang) {
            GeoExt.Lang.set(OpenLayers.Util.getParameters()["locale"] || GeoExt.Lang.locale);
		}
				
        Ext.BLANK_IMAGE_URL = "../theme/app/img/blank.gif";
        OpenLayers.ImgPath = "../theme/app/img/";
		OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;
        // optionally set locale based on query string parameter
		
        if (GeoExt.Lang) {
            GeoExt.Lang.set(OpenLayers.Util.getParameters()["locale"] || GeoExt.Lang.locale);
        }
		var geoextLangFr = ((GeoExt.Lang.locale == "fr")||(GeoExt.Lang.locale == "fr-be")||(GeoExt.Lang.locale == "fr-BE")||(GeoExt.Lang.locale == "fr-fr"))?true:false;
		var geoextLangNl = ((GeoExt.Lang.locale == "nl")||(GeoExt.Lang.locale == "nl-be")||(GeoExt.Lang.locale == "nl-BE")||(GeoExt.Lang.locale == "nl-nl"))?true:false;
		var geoextLangEn = ((GeoExt.Lang.locale == "en")||(GeoExt.Lang.locale == "en-gb")||(GeoExt.Lang.locale == "en-us")||(GeoExt.Lang.locale == "en-US")||(GeoExt.Lang.locale == "en-en"))?true:false;
		if (!(geoextLangFr) == true && !(geoextLangNl) == true && !(geoextLangEn) == true){
			geoextLangFr = true;
		}

		var localeHelp = 
			(geoextLangFr)?
				"<a href='http://www.developpement-urbain.irisnet.be/cartographie/brugis/mode-demploi'target= '_blank'>Click here</a>"
				:
			(geoextLangNl)?
				"<a href='http://stedelijke-ontwikkeling.irisnet.be/nl/cartografie/brugis-r/gebruiksaanwijzing-brugis?set_language=nl'target= '_blank'>Click here</a>"
				:
			(geoextLangEn)?
				"<a href='http://www.developpement-urbain.irisnet.be/cartographie/brugis/mode-demploi'target= '_blank'>Click here</a>"
				:
				"";

		var abstractText = 
			(geoextLangFr)?
				"BruGIS, Portail d'Information Géographique pour Bruxelles Développement urbain (SPRB)."
				:
			(geoextLangNl)?
				"BruGIS, Geografische Informatie Portaal voor Brussel Stedelijke Ontwikkeling (GOB)."
				:
			(geoextLangEn)?
				"BruGIS, Geographic Information Portal for Brussels Urban Development (BRPS)."
				:
				"";
			
		var contactText = 
			(geoextLangFr)?
				"e-mail: <a href='mailto:brugis@sprb.irisnet.be'>brugis@sprb.irisnet.be</a>."
				:
			(geoextLangNl)?
				"e-mail: <a href='mailto:brugis@sprb.irisnet.be'>brugis@sprb.irisnet.be</a>."
				:
			(geoextLangEn)?
				"e-mail: <a href='mailto:brugis@sprb.irisnet.be'>brugis@sprb.irisnet.be</a>."
				:
				"";
				
		var baseMap =
			(geoextLangFr)?
				[{
					source: "BruGIS WMS - Geoserver",
					name:   "URBIS:urbisFR",
					title:  "Urbis",
					id: "frBackground",
					group:  "background",
					fixed: true,
					visibility: geoextLangFr,
					buffer: 0
				}]
				:
			(geoextLangNl)?
				[{
					source: "BruGIS WMS - Geoserver",
					name:   "URBIS:urbisNL",
					title:  "Urbis",
					id: "nlBackground",
					group:  "background",
					fixed: true,
					visibility: geoextLangNl,
					buffer: 0
				}]
				:
			(geoextLangEn)?
				[{
					source: "BruGIS WMS - Geoserver",
					name:   "URBIS:urbisFR",
					title:  "Urbis",
					id: "frBackground",
					group:  "background",
					fixed: true,
					visibility: geoextLangEn,
					buffer: 0
				}]
				:[];
				
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

		var brugisWMSGeoserver_DEV = (globalAuthStatus != 404 && globalAuthStatus != 401) ? "http://svappmavw019:8080/geoserver/www/wmsaatl/wmsc_brugis.xml" :"http://svappmavw019:8080/geoserver/www/wmsaatl/wmsc_brugis.xml";	
		var brugisWMSGeoserver_PRD = (globalAuthStatus != 404 && globalAuthStatus != 401) ? "/geoserver/www/wmsaatl/wmsc_brugis.xml" : "/geoserver/www/wmsaatl/wmsc_brugis.xml";					
		//console.log(brugisWMSGeoserver_DEV);
		var sourcesDev = 
			(geoextLangFr)?
			{
				'BruGIS WMS - Geoserver': {
					url: brugisWMSGeoserver_DEV,
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IBGE WMS - Mapserver': {
					url: "http://wms.ibgebim.be/ibgewms?",
					ptype: "gxp_wmscsource",
					version: "1.1.1"
				},
				'CIRB WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
				'STIB WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				},
				'Bruxelles Mobilité WMS - Geoserver': {
					url: "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",
					version: "1.1.1",
					ptype: "gxp_wmssource"
				},
				'IBSA WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				}
			}:
			(geoextLangNl)?
			{
				'BruGIS WMS - Geoserver': {
					url: brugisWMSGeoserver_DEV,
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IGN': {
					url: "http://www.ngi.be/cartoweb/1.0.0/WMTSCapabilities.xml",
					version: "1.0.0",
					ptype: "gxp_wmscsource"
				},
				'CIBG WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
				'MIVB WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				},
				'Brussels Mobiliteit WMS - Geoserver': {
					url: "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",
					version: "1.1.1",
					ptype: "gxp_wmssource"
				},
				'BISA WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				}
			}:
			(geoextLangEn)?
			{
				'BruGIS WMS - Geoserver': {
					url: brugisWMSGeoserver_DEV ,
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IBGE/BIM WMS - Mapserver': {
					url: "http://wms.ibgebim.be/ibgewms?",
					ptype: "gxp_wmscsource",
					version: "1.1.1"
				},
				'CIRB/CIBG WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
				'STIB/MIVB WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				},
				'Bruxelles Mobilité WMS - Geoserver': {
					url: "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",
					version: "1.1.1",
					ptype: "gxp_wmssource"
				},
				'IBSA WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				}
			}:{};
			
		var sourcesPrd = 
			(geoextLangFr)?
			{
				'BruGIS WMS - Geoserver': {
					url: brugisWMSGeoserver_PRD,
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IBGE WMS - Mapserver': {
					url: "http://wms.ibgebim.be/ibgewms?",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'CIRB WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
				'STIB WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				},
				'Bruxelles Mobilité WMS - Geoserver': {
					url: "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",
					version: "1.1.1",
					ptype: "gxp_wmssource"
				},
				'IBSA WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				}
			}:
			(geoextLangNl)?
			{
				'BruGIS WMS - Geoserver': {
					url: brugisWMSGeoserver_PRD,
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'BIM WMS - Mapserver': {
					url: "http://wms.ibgebim.be/bimwms?",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'CIBG WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
				'MIVB WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				},
				'Brussel Mobiliteit WMS - Geoserver': {
					url: "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",
					version: "1.1.1",
					ptype: "gxp_wmssource"
				},
				'BISA WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				}
			}:
			(geoextLangEn)?
			{
				'BruGIS WMS - Geoserver': {
					url: brugisWMSGeoserver_PRD,
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IBGE/BIM WMS - Mapserver': {
					url: "http://wms.ibgebim.be/ibgewms?",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'CIRB/CIBG WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
				'STIB/MIVB WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				},
				'Bruxelles Mobilité WMS - Geoserver': {
					url: "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",
					version: "1.1.1",
					ptype: "gxp_wmssource"
				},
				'IBSA WMS - Geoserver': {
					url: "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
					version: "1.3.0",
					ptype: "gxp_wmssource"
				}
			}:{};
			
        var app = new GeoExplorer.Brugis({
            authStatus: globalAuthStatus,
            proxy: "../proxy/?url=",
            printService: "/geoserver/pdf/",
            about: {
                title: "MyBruGIS v 1.1 Girolamo Frescobaldi",
                "abstract": abstractText,
				"help": localeHelp,
		        contact: contactText
            },
        	// layer sources
        	defaultSourceType: "gxp_wmssource",
			sources: sourcesDev,
			//sources: sourcesPrd,
			
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