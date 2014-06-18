/**
 * Copyright (c) 2013-2014 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @requires plugins/Tool.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = Preferences
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: Preferences(config)
 *
 *    Plugin for managing preferences
 */
ux.plugins.Preferences = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = ux_preferences */
    ptype: "ux_preferences",
    
    /** api: config[...]
     *  ``String``
     *  Text for (i18n).
     */
    preferencesTip: "Preferences",
    preferencesText: "Preferences text",
    preferencesMenuText: "Preferences menu text",
	availablePreferencesText: "Preferences",
	ParametersText: "BruGIS interface parameters",
	sessionText: "session BruGIS",
	keepSessionText: "Keep",
	forgetSessionText: "Forget",
	dataLegendText: "Default panel",
	dataPanelText: "Data",
	legendPanelText: "Legend",
	searchResultText: "Search result",
	multipleSearchText: "Multiple",
	uniqueSearchText: "Unique",
	
    /** api: config[validLocalStorage]
     *  ``Boolean``
     *  Text for the grid expander (i18n).
     */
	validLocalStorage: false,

    /** api: config[preferencesStore]
     *  ``Ext.data.ArrayStore``
     *  Text for the grid expander (i18n).
     */
	preferencesStore: false,
	
    /** api: config[preferencesStore]
     *  ``Ext.data.ArrayStore``
	 *	! ne pas changer ces valeurs !
     */
	defaultPreferences: {	"session":0,
							"defPanl":0,
							"searchN":0},
							
    /** api: config[preferencesStore]
     *  ``Ext.data.ArrayStore``
     *  
     */
	sessionChoices: [],

    /** api: config[preferencesStore]
     *  ``Ext.data.ArrayStore``
     *  
     */
	panelChoices: [],

    /** api: config[preferencesStore]
     *  ``Ext.data.ArrayStore``
     *  
     */
	searchChoices: [],
	
    /** api: config[preferencesKeys]
     *  ``Array``
     *  ! ne pas changer l'ordre !
     */
	preferencesKeys: ["session", "defPanl", "searchN"],
	
    /** api: config[choicesPrefsKeysDic]
     *  ``Dictionnary``
     *  
     */
	choicesPrefsKeysDic: {},
	
    /** private: method[constructor]
     */
    constructor: function(config) {
		this.checkLocalStorage();
		ux.plugins.Preferences.superclass.constructor.apply(this, arguments);
    },
    
    /** api: method[addActions]
     */
    addActions: function() {
        var commonOptions = {
            tooltip : this.preferencesTip,
            menuText: this.preferencesMenuText,
            disabled: true,
            iconCls: "icon-preferences"
        };
        var options = Ext.apply(commonOptions, {
			handler : this.showPreferencesGrid,
			scope: this
		});
        var actions = ux.plugins.Preferences.superclass.addActions.apply(this, [options]);
        this.target.on("ready", function() {
			if (this.checkLocalStorage()) {
            actions[0].enable();
			} else {
			actions[0].disable();
			}
        }, this);
        return actions;
    },

    /** api: method[initPreferences]
     */
	initPreferences: function() {
		if (this.validLocalStorage) {
			var data = [];
			// ! ne pas changer l'ordre dans les array !
			this.sessionChoices = [this.keepSessionText, this.forgetSessionText];
			this.panelChoices   = [this.legendPanelText, this.dataPanelText];
			this.searchChoices  = [this.multipleSearchText, this.uniqueSearchText];
			this.choicesPrefsKeysDic = {
				"session" : this.sessionChoices, 
				"defPanl" : this.panelChoices, 
				"searchN" : this.searchChoices};
			// les prefs sont déjà en localstorage
			if (localStorage.getItem("preferences") !== null) {
				for (key in this.preferencesKeys) {
					var preferenceKey = this.preferencesKeys[key], 
						preferenceContent = ''
					if (localStorage.getItem(preferenceKey) !== null) {
						preferenceContent = localStorage.getItem(preferenceKey);
						data.push([preferenceKey, preferenceContent]);
					} else {
						this.preferencesKeys = this.preferencesKeys.remove(preferenceKey);
						localStorage.setItem("preferences", "['" + this.preferencesKeys.toString().replace(/\,/g,"','") + "']");
					}
				}
			// les prefs ne sont pas encore en localstorage
			} else {
				//localStorage.setItem("preferences","[]");
				localStorage.setItem("preferences", "['" + this.preferencesKeys.toString().replace(/\,/g,"','") + "']");
				// ici créer les var de prefs en localstorage
				// ici compléter le data
				data = [[this.preferencesKeys[0], this.defaultPreferences[this.preferencesKeys[0]]],
						[this.preferencesKeys[1], this.defaultPreferences[this.preferencesKeys[1]]],
						[this.preferencesKeys[2], this.defaultPreferences[this.preferencesKeys[2]]]];
				localStorage.setItem(this.preferencesKeys[0], this.defaultPreferences[this.preferencesKeys[0]]);
				localStorage.setItem(this.preferencesKeys[1], this.defaultPreferences[this.preferencesKeys[1]]);
				localStorage.setItem(this.preferencesKeys[2], this.defaultPreferences[this.preferencesKeys[2]]);
			}
			// génération du store une fois data complété avec 
			//		soit les defaults
			//		soit le localstorage
			this.preferencesStore = new Ext.data.ArrayStore({
				fields: ["preferenceName", "preferencesContent"],
				data: data
			});
		}
	},

    /** api: method[checkLocalStorage]
     */
	checkLocalStorage: function() {
		this.validLocalStorage = (localStorage)?true:false;
		if (this.validLocalStorage) {} else {
			this.deactivate();
		}
		return this.validLocalStorage;
	},
	
    /** api: method[showPreferencesGrid]
     * Shows the window with a Preferences grid.
     */
    showPreferencesGrid: function() {
		this.initPreferences();
        if(!this.preferencesWindow) {
            this.initPreferencesWindow();
        } else if (!(this.preferencesWindow instanceof Ext.Window)) {
            this.addOutput(this.preferencesWindow);
        }
		this.preferencesWindow.show();
    },
	
    /**
     * private: method[initPreferencesWindow]
     * Constructs a window with preferences
     */
    initPreferencesWindow: function() {
        var preferencesPanel = new Ext.Panel({
			id: "preferencesPanel",
            //store: this.preferencesStore,
			bodyStyle: {"padding": "10px"},
            defaults: {
                labelWidth: 90
            },
			items:[{
				xtype: "fieldset",
                title: this.ParametersText,
                items: [{
					xtype: "compositefield",
                    fieldLabel: this.sessionText,
                    anchor: "99%",
                    items: [{
						id: "session",
                        xtype: "combo",
                        width: 90,
                        listWidth: 150,
                        store: this.sessionChoices,
                        value: this.sessionChoices[this.preferencesStore.reader.arrayData[0][1]],			// mettre la valeur trouvée en localstorage!!! à initialiser au début dans initPreferences
                        mode: "local",
                        triggerAction: "all",
                        editable: false,
                        listeners: {
                            select: this.updateChoice,
                            scope: this
                        }}]
					}, {
					xtype: "compositefield",
                    fieldLabel: this.dataLegendText,
                    anchor: "99%",
                    items: [{
						id: "defPanl",
                        xtype: "combo",
                        width: 90,
                        listWidth: 150,
                        store: this.panelChoices,
                        value: this.panelChoices[this.preferencesStore.reader.arrayData[1][1]],			// mettre la valeur trouvée en localstorage!!! à initialiser au début dans initPreferences
                        mode: "local",
                        triggerAction: "all",
                        editable: false,
                        listeners: {
                            select: this.updateChoice,
                            scope: this
                        }}]
					}, {
					xtype: "compositefield",
                    fieldLabel: this.searchResultText,
                    anchor: "99%",
                    items: [{
						id: "searchN",
                        xtype: "combo",
                        width: 90,
                        listWidth: 150,
                        store: this.searchChoices,
                        value: this.searchChoices[this.preferencesStore.reader.arrayData[2][1]],			// mettre la valeur trouvée en localstorage!!! à initialiser au début dans initPreferences
                        mode: "local",
                        triggerAction: "all",
                        editable: false,
                        listeners: {
                            select: this.updateChoice,
                            scope: this
                        }}]
					}]
				}]
		});
		
        var items = {
            xtype: "container",
            region: "center",
            layout: "fit",
			items: [preferencesPanel]
        };
		
        var Cls = this.outputTarget ? Ext.Panel : Ext.Window;
		
        this.preferencesWindow = new Cls(Ext.apply({
			id: "preferencesWindow",
            title: this.availablePreferencesText,
            closeAction: "hide",
            items: items,
            layout: "border",
            height: 250,
            width: 450,
			modal: true,
            //listeners: {},
            scope: this
        }, this.initialConfig.outputConfig));
        if (Cls === Ext.Panel) {
            this.addOutput(this.preferencesWindow);
        }
	},
		
    /** api: method[updateChoice]
     * a dummy function.
     */
    updateChoice: function(args) {
		this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent = this.choicesPrefsKeysDic[args.id].indexOf(args.value);
		localStorage.setItem(args.id, this.choicesPrefsKeysDic[args.id].indexOf(args.value));
    }
});

Ext.preg(ux.plugins.Preferences.prototype.ptype, ux.plugins.Preferences);