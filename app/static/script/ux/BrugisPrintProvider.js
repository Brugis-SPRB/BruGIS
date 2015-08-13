Ext.namespace("GeoExt.data");

GeoExt.data.BrugisPrintProvider = Ext.extend(GeoExt.data.PrintProvider, {

   constructor: function(config) {
     this.initialConfig = config;
     Ext.apply(this, config);
     GeoExt.data.BrugisPrintProvider.superclass.constructor.apply(this, arguments);
   },
   loadCapabilities: function() {
       if (!this.url) {
           return;
       }
       var url = this.url + "info.json?url=" + this.url.replace(/\/$/, "");
       Ext.Ajax.request({
           url: url,
           method: "GET",
           disableCaching: false,
           success: function(response) {
               this.capabilities = Ext.decode(response.responseText);
               this.loadStores();
           },
           params: this.initialConfig.baseParams,
           scope: this
       });
   }
 });
