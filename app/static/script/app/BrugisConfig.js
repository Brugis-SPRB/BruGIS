
Ext.namespace("Brugis");

Brugis.Config = Ext.extend(Object,  {
	localeHelp : "<a href='http://www.developpement-urbain.irisnet.be/cartographie/brugis/mode-demploi'target= '_blank'>Click here</a>",
	abstractText : "BruGIS, Geographic Information Portal for Brussels Urban Development (BRPS).",
	contactText : "e-mail: <a href='mailto:brugis@sprb.irisnet.be'>brugis@sprb.irisnet.be</a>.",

	baseLayerName     : "URBIS:urbisFR",
	baseLayerTitle    : "Urbis coloré",
	baseGrayLayerName : "URBIS:urbisFRGray",
	baseGrayLayerTitle: "Urbis grisé",

	BMBWMSUrl : "http://data-mobility.irisnet.be/inspire/capabilities/fr/wms",

	DEV : 'DEV',
	STA : 'STA',
	PRD : 'PRD',

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
		var isAuthenticated = this.isAuthenticated.call(this);
		var url = isAuthenticated ? "/geoserver/ows" : "/geoserver/www/wmsaatl/wmsc_brugis_anon.xml";
		return url;				
	},
	isAuthenticated : function() {
		return this.getCookieValue("geoexplorer-user") ?  true :  false;
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
	}
});

