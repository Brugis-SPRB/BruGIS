
Ext.namespace("Brugis");

Brugis.Config = Ext.extend(Object,  {
	localeHelp : "<a href='http://www.developpement-urbain.irisnet.be/cartographie/brugis/mode-demploi'target= '_blank'>Click here</a>",
	abstractText : "BruGIS, Geographic Information Portal for Brussels Urban Development (BRPS).",
	contactText : "e-mail: <a href='mailto:brugis@sprb.brussels'>brugis@sprb.brussels</a>.",

	baseLayerName     : "URBIS:urbisFR",
	baseLayerTitle    : "Urbis coloré",
	baseGrayLayerName : "URBIS:urbisFRGray",
	baseGrayLayerTitle: "Urbis grisé",

	BMBWMSUrl 	: "http://data-mobility.irisnet.be/geoserver/ows",

	DEV : 'DEV',
	STA : 'STA',
	PRD : 'PRD',

	noTileslayersList: ["BDU_DMS_PROT:Arbres_remarquables",
						"BDU_DMS_PROT:Arbres_remarquables_abattus_ou_disparus",
						"BSO_DML_BESC:Opmerkelijke_bomen",
						"BSO_DML_BESC:Gevelde_of_verdwenen_bomen",
						"bm_public_space:trees",
						"BDU_DLO_CLI:Sibelga_BC",
						"BDU_DLO_CLI:HydroBru_BC",
						"BDU_DLO_CLI:BCx2",
						"BDU_DMS_PROT:Inventaire_batiments"],

	getCookieValue : function(param) {
		var i, x, y, cookies = document.cookie.split(";");
		for (i=0; i < cookies.length; i++) {
			x = cookies[i].substr(0, cookies[i].indexOf("="));
			y = cookies[i].substr(cookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==param) {
				return unescape(y);
			}
		}
		return null;
	},

	getBrugisGeoserverUrl : function() {
		var isAuthenticatedAsTax = this.isAuthenticatedAs(this, "tax");
		var isAuthenticatedAsFieldCheckTax = this.isAuthenticatedAs(this, "fieldchecktax");
		var isAuthenticatedAsProtec = this.isAuthenticatedAs(this, "protec");
		var isAuthenticated = this.isAuthenticated.call(this);
		var url = isAuthenticatedAsTax ? "/geoserver/www/wmsaatl/wmsc_brugis_tax.xml"
				: isAuthenticatedAsFieldCheckTax ? "/geoserver/www/wmsaatl/wmsc_brugis_tax.xml"
				: isAuthenticatedAsProtec ? "/geoserver/www/wmsaatl/wmsc_brugis_anon.xml"
				: isAuthenticated ? "/geoserver/ows"
				: "/geoserver/www/wmsaatl/wmsc_brugis_anon.xml";
		return url;
	},
	isAuthenticated : function() {
		return this.getCookieValue("geoexplorer-user") ?  true :  false;
	},
	isAuthenticatedAs : function(param, login) {
		return (this.getCookieValue("geoexplorer-user") === login) ? true :  false;
	},
	getEnvironment : function() {
		var hostname = window.location.hostname;
		var ENV = this.DEV;
		if(hostname.indexOf('irisnet.be') >= 0) {
			ENV = this.PRD;
		}
		if(hostname.indexOf('irisnetlab.be') >=0) {
			ENV = this.STA;
		}
		return ENV;
	},
	getPrintCapabilitiesUrl : function() {
		 var baseUrl = this.getPrintDownloadBaseUrl.call(this);
		 var capUrl  = baseUrl + "/print/print/dep";
		 return capUrl;
	},
	getPrintDownloadBaseUrl : function() {
		var env = this.getEnvironment.call(this);
		var url = "/";
		switch(env) {
			case this.DEV:
				url = "http://svappmavw019:8080";
				break;
			case this.STA:
				url = "http://mbr66.irisnetlab.be";
				break;
			case this.PRD:
				url = "http://mbr102.irisnet.be";
				break;
		}
		return url;
	},
	getReperageHost : function() {
		var env = this.getEnvironment.call(this);
		var url = "/";
		switch(env) {
			case this.DEV:
				url = "http://SVAPPMAVL101:8080/WebReperage";
				break;
			case this.STA:
				url = "http://mbr127.irisnetlab.be/WebReperage";
				break;
			case this.PRD:
				url = "http://mbr227.irisnet.be/WebReperage";
				break;
		}
		return url;
	},
    fixOldMaps : function() {
    if(localStorage) {
      if (localStorage.getItem('myMaps')) {
        var MyMapsKeys = eval(localStorage.getItem("myMaps"));
        var newMyMapsKeys = [];

        for(var i=0; i < MyMapsKeys.length; i++) {
          var mapToTest = localStorage.getItem(MyMapsKeys[i]);
          if((mapToTest.match(/AATL:/) != null) or (mapToTest.match(/BROH:/) != null)){
            localStorage.removeItem(MyMapsKeys[i])
            localStorage.removeItem(MyMapsKeys[i] + "_abstract")
            localStorage.removeItem(MyMapsKeys[i] + "_date")
          } else {
            newMyMapsKeys.push(MyMapsKeys[i]);
          }
        }
        if(newMyMapsKeys.length > 0 ) {
          localStorage.setItem("myMaps", "['" + newMyMapsKeys.toString().replace(/\,/g,"','") + "']");
        } else {
          localStorage.removeItem("myMaps");
        }
      }
    }
  }
});
