
/**
 * @requires plugins/Tool.js
 */

/** api: (define)
 *  module = gxp.plugins
 *  class = RemoveLayer
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("gxp.plugins");

/** api: constructor
 *  .. class:: RemoveLayer(config)
 *
 *    Plugin for removing a selected layer from the map.
 *    TODO Make this plural - selected layers
 */
gxp.plugins.DownloadLayer = Ext.extend(gxp.plugins.Tool, {

    /** api: ptype = gxp_removelayer */
    ptype: "gxp_downloadlayer",

    /** api: config[removeMenuText]
     *  ``String``
     *  Text for remove menu item (i18n).
     */
    downloadMenuText: "Download Layer",

    /** api: config[removeActionTip]
     *  ``String``
     *  Text for remove action tooltip (i18n).
     */
    downloadActionTip: "Download Layer",

    /** api: method[addActions]
     */
    addActions: function() {
        var selectedLayer;
        var actions = gxp.plugins.DownloadLayer.superclass.addActions.apply(this, [{
            menuText: this.downloadMenuText,
            iconCls: "gxp-icon-filebrowse",
            disabled: true,
            tooltip: this.downloadActionTip,
            handler: function() {
                var record = selectedLayer;
                if(record) {
                    var downloadUrl = this.buildDownloadUrl(record);
                    window.open(downloadUrl,'_blank');
                }
            },
            scope: this
        }]);
        var downloadLayerAction = actions[0];

        this.target.on("layerselectionchange", function(record) {
            selectedLayer = record;
            downloadLayerAction.setDisabled(
                this.target.mapPanel.layers.getCount() <= 1 || !record
            );
            this.isLayerDownloadable(record, downloadLayerAction);
        }, this);

        var enforceOne = function(store) {
            downloadLayerAction.setDisabled(
                !selectedLayer || store.getCount() <= 1
            );
        };
        this.target.mapPanel.layers.on({
            "add": enforceOne,
            "remove": enforceOne
        });

        return actions;
    },
    /**
    * Template url http://mbr225.irisnet.be/geoserver/BDU/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BDU:EDRLR&outputFormat=SHAPE-ZIP
    */
    buildDownloadUrl : function(record) {
        var featureName = record.data.name;
        var gsUrl = Brugis.Configuration.getInstance().getWFSDownloadGeoServerUrl();
        var baseUrl = gsUrl + "/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=SHAPE-ZIP&typeName=";
        var url = baseUrl + featureName;
        return url;
    },

    isLayerDownloadable : function(record,downloadLayerAction) {
        var featureName = record.data.name;
        var gsUrl = Brugis.Configuration.getInstance().getWFSDownloadGeoServerUrl();
        var baseUrl = gsUrl + "/ows?service=WFS&version=1.0.0&request=DescribeFeatureType&typeName=";
        var url = baseUrl + featureName;
        Ext.Ajax.request({
           url: url,
           success: function(res) {
               var text = res.responseText;
               if(text.match(/ServiceException/g)) {
                   downloadLayerAction.setDisabled(true);
               } else {
                   downloadLayerAction.setDisabled(false);
               }
           },
           failure: function() {
               downloadLayerAction.setDisabled(true);
           }
        });
    }


});

Ext.preg(gxp.plugins.DownloadLayer.prototype.ptype, gxp.plugins.DownloadLayer);
