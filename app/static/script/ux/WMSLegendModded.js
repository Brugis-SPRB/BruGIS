
Ext.ns("Brugis");

Brugis.WMSLegendMixin = {
    /** private: method[update]
     *  Update the legend, adding, removing or updating
     *  the per-sublayer box component.
     */
    update: function() {
        var layer = this.layerRecord.getLayer();
        // In some cases, this update function is called on a layer
        // that has just been removed, see ticket #238.
        // The following check bypass the update if map is not set.
        if(!(layer && layer.map && this.layerRecord.group != "background")) {
            return;
        }
        GeoExt.WMSLegend.superclass.update.apply(this, arguments);

        // Always remove all the element to keep the right order
        this.removeAll();

        var layerNames = [layer.params.LAYERS].join(",").split(",").reverse();
        var textCmp = this.items.find(function(item){
            return item.isXType('label');
        });

        var layerName, i, len;
        for(i = 0, len = layerNames.length; i<len; i++) {
            layerName = layerNames[i];
            if(!this.items || !this.getComponent(layerName)) {
                this.add({
                    xtype: this.itemXType,
                    url: this.getLegendUrl(layerName, layerNames),
                    itemId: layerName
                });
            }
        }
        this.doLayout();
    }
};


if(GeoExt.WMSLegend) {
    Ext.override(GeoExt.WMSLegend, Brugis.WMSLegendMixin);
}
