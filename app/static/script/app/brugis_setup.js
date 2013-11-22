        // optionally set locale based on query string parameter
		
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
		var geoextLangFr = ((GeoExt.Lang.locale == "fr")||(GeoExt.Lang.locale == "fr-be")||(GeoExt.Lang.locale == "fr-fr"))?true:false;
		var geoextLangNl = ((GeoExt.Lang.locale == "nl")||(GeoExt.Lang.locale == "nl-be")||(GeoExt.Lang.locale == "nl-nl"))?true:false;
		var geoextLangEn = ((GeoExt.Lang.locale == "en")||(GeoExt.Lang.locale == "en-gb")||(GeoExt.Lang.locale == "en-us")||(GeoExt.Lang.locale == "en-en"))?true:false;
		if (!(geoextLangFr) == true && !(geoextLangNl) == true && !(geoextLangEn) == true){
			geoextLangFr = true;
		}
		
/*
///////////////////////////////////////////////////////////////////////////////
		if (OpenLayers.Util) {
			//console.log(OpenLayers.Util.getBrowserName());
			if (OpenLayers.Util.getBrowserName() == 'msie') {
				// display a popup explaining the interest to install Firefox or Chrome :-)
			}
			else if (OpenLayers.Util.getBrowserName() == 'firefox') {
				//console.log("good good");
			}
			else if (OpenLayers.Util.getBrowserName() == 'safari') {
				//console.log("good good");
			}
			else if (OpenLayers.Util.getBrowserName() == 'chrome') {
				//console.log("good good");
			}
		}
///////////////////////////////////////////////////////////////////////////////
*/	
		var localeHelp = 
			(geoextLangFr)?
				"<a href='http://urbanisme.irisnet.be/cartographie/brugis/brugis-r-fait-peau-neuve/mode-demploi-brugis'target= '_blank'>Click here</a>"
				:
			(geoextLangNl)?
				"<a href='http://stedenbouw.irisnet.be/cartografie/brugis/gebruiksaanwijzing-brugis?set_language=nl'target= '_blank'>Click here</a>"
				:
			(geoextLangEn)?
				"<a href='http://urbanisme.irisnet.be/cartographie/brugis/brugis-r-fait-peau-neuve/mode-demploi-brugis'target= '_blank'>Click here</a>"
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
				"e-mail: <a href='mailto:brugis@mrbc.irisnet.be'>brugis@mrbc.irisnet.be</a>."
				:
			(geoextLangNl)?
				"e-mail: <a href='mailto:brugis@mrbc.irisnet.be'>brugis@mrbc.irisnet.be</a>."
				:
			(geoextLangEn)?
				"e-mail: <a href='mailto:brugis@mrbc.irisnet.be'>brugis@mrbc.irisnet.be</a>."
				:
				"";
				
        var app = new GeoExplorer.Brugis({
            authStatus: globalAuthStatus,
            proxy: "../proxy/?url=",
            printService: "/geoserver/pdf/",
            about: {
                title: "MyBruGIS v 1.10",
                "abstract": abstractText,
				"help": localeHelp,
		        contact: contactText
            },
        	// layer sources
        	defaultSourceType: "gxp_wmssource",
			
			
			sources: {
				'BruGIS WMS - Geoserver': {
					url: "http://svappmavw019:9090/geoserver/ows",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IBGE WMS - Mapserver': {
					url: "http://wms.ibgebim.be/cgi-bin/ibgewms.exe",
					ptype: "gxp_wmscsource",
					version: "1.1.1"
				},
				'CIRB WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
            	'GeoWebCacheLocal': {
					url: "http://svappmavw019:9090/geoserver/www/wmsaatl/geoweb_brugis.xml",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				}
			},
			
			
			/*
			sources: {
				'BruGIS WMS - Geoserver': {
					url: "/geoserver/ows",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'IBGE WMS - Mapserver': {
					url: "http://wms.ibgebim.be/cgi-bin/ibgewms.exe",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				},
				'CIRB WMS - Geoserver': {
					url: "http://geoserver.gis.irisnet.be/geoserver/ows",
					version: "1.3.0",
					ptype: "gxp_wmscsource"
				},
            	'GeoWebCacheLocal': {
					url: "/geoserver/www/wmsaatl/geoweb_brugis.xml",
					version: "1.1.1",
					ptype: "gxp_wmscsource"
				}
			},
			*/
			
		    map: {
				id: "mymap", // id needed to reference map in portalConfig above
				projection: 'EPSG:31370',
				units: 'm',
				resolutions: [	49.0,		// 1/175.000
								42.0, 	// 1/150.000
								28.0, 	// 1/100.000
								21.0, 	// 1/75.000
								14.0, 	// 1/50.000
								7, 		// 1/25.000
								5.6,	// 1/20.000
								3.5, 	// 1/12.500
								2.8, 	// 1/10.000
								2.1, 	// 1/7.500
								1.4, 	// 1/5.000
								0.7, 	// 1/2.500
								0.56,	// 1/2.000
								0.28, 	// 1/1.000
								0.14, 	// 1/500
								0.07, 	// 1/250
								0.056,	// 1/200
								0.035, 	// 1/125
								0.028, 	// 1/100
								0.014  	// 1/50
							  ],
				maxResolution: 49,
				//maxExtent: [129800, 158000, 167800, 181100],
				//maxExtent:   [120000, 140000, 180000, 200000],
				maxExtent:   [140000.0, 160000.0, 165088.0, 185088.0],
				center: [149360, 170450],
				zoom:2,
				layers: [
				/*{
					source: "Cadastre WMS",
					name:   "CP_Cadastral_Parcels",
					title:  "CP_Cadastral_Parcels"
				},*/
				{
					source: "GeoWebCacheLocal",
					name:   "urbisFR",
					title:  "Urbis Fr",
					id: "frBackground",
					group:  "background",
					fixed: true,
					visibility: geoextLangFr
				}, {
					source: "GeoWebCacheLocal",
					name:   "urbisNL",
					title:  "Urbis Nl",
					id: "nlBackground",
					group:  "background",
					fixed: true,
					visibility: geoextLangNl
				}, {
					source: "GeoWebCacheLocal",
					name:   "urbis:ortho2004",
					title:  "Orthophotoplans 2004",
					visibility: false,
					format: "image/jpeg",
					transparent : "false"
				}, {
					source: "GeoWebCacheLocal",
					name:   "urbisORTHO",
					title:  "Orthophotoplans 2009",
					visibility: false,
					format: "image/jpeg",
					transparent : "false"
				}, {
					source: "GeoWebCacheLocal",
					name:   "ortho2012",
					title:  "Orthophotoplans 2012",
					visibility: false,
					format: "image/png",
					transparent : "true"
				}]
			}
        });
