Ext.ns("Brugis");

Brugis.WMSStylesDialogMixin = {
    addStylesCombo: function() {
        var store = this.stylesStore;
        store.sort( "title", "ASC" );
        var combo = new Ext.form.ComboBox(Ext.apply({
            fieldLabel: this.chooseStyleText,
            store: store,
            editable: false,
            displayField: "title",
            valueField: "name",
            value: this.selectedStyle ?
                this.selectedStyle.get("title") :
                this.layerRecord.getLayer().params.STYLES || "default",
            disabled: !store.getCount(),
            mode: "local",
            typeAhead: true,
            triggerAction: "all",
            forceSelection: true,
            anchor: "100%",
            listeners: {
                "select": function(combo, record) {
                    this.changeStyle(record);
                    if (!record.phantom && !this._removing) {
                        this.fireEvent("styleselected", this, record.get("name"));
                        this.layerRecord.set("title", record.get("title"));
                        this.layerRecord.commit();
                        this.fireEvent("change");
                    }
                },
                scope: this
            }
        }, this.initialConfig.stylesComboOptions));
        // add combo to the styles fieldset
        this.items.get(0).add(combo);
        this.doLayout();
    }
}

if(gxp.WMSStylesDialog) {
    Ext.override(gxp.WMSStylesDialog, Brugis.WMSStylesDialogMixin);
}
