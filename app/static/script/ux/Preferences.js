/**
 * Copyright (c) Brugis (S.P.R.B)
 *
 * Published under the GPL V3 license.
 * See www.gnu.org/licences/gpl-3.0 for the full text
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
    preferencesTip: 			"Preferences",
    preferencesText: 			"Preferences text",
    preferencesMenuText: 		"Preferences menu text",
	availablePreferencesText: 	"Preferences",
	ParametersText: 			"BruGIS interface parameters",

	sessionText: 				"Starting map",
	keepSessionText: 			"By default",
	forgetSessionText: 			"Empty",

	dataLegendText: 			"Default panel",
	dataPanelText: 				"Data",
	legendPanelText: 			"Legend",

	searchResultText: 			"Search result",
	multipleSearchText: 		"Multiple",
	uniqueSearchText: 			"Unique",

	toolsVisibilityOptionLabelText:			"Tools visibility options",
	showQueryToolLabelText: 				"Show Query tool",
	showGeolocatorToolLabelText: 			"Show geolocator tool",
	showUrbanalysisToolLabelText: 			"Show Urbanalysis toolbox",
	showDataEditorToolslabelText: 			"Show Edition tools",
	showDedicatedMapAdvancedToolsLabelText:	"Show advanced creation map tools",
	showPopupInfoOnRightClickLabelText:		"Show information popup on right clic",

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
							"searchN":0,
							"shwQrTl":0,
							"shwGlTl":1,
							"shwUaTb":1,
							"shwDeTl":0,
							"shwDmTl":0,
							"shwPiRc":0},

    /** api: config[sessionChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	sessionChoices: false,

    /** api: config[panelChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	panelChoices: [],

    /** api: config[searchChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	searchChoices: [],

    /** api: config[showQueryToolChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	showQueryToolChoices: [],

    /** api: config[showGeolocatorToolChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	showGeolocatorToolChoices: [],

    /** api: config[showUrbanalysisToolboxChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	showUrbanalysisToolboxChoices: [],

    /** api: config[showDataEditoToolsChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	showDataEditoToolsChoices: [],

    /** api: config[showDedicatedMapToolsChoices]
     *  ``Ext.data.ArrayStore``
     *
     */
	showDedicatedMapToolsChoices: [],

    /** api: config[preferencesKeys]
     *  ``Array``
     *  ! ne pas changer l'ordre !
     */
	preferencesKeys: ["session", "defPanl", "searchN", "shwQrTl", "shwGlTl", "shwUaTb", "shwDeTl", "shwDmTl", "shwPiRc"],

    /** api: config[choicesPrefsKeysDic]
     *  ``Dictionnary``
     *
     */
	choicesPrefsKeysDic: {},

    /** private: method[constructor]
     */
    constructor: function(config) {
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
            this.initPreferences();
			actions[0].enable();
			} else {
			actions[0].disable();
			}
        }, this);

		this.target.on("mymapschange", function() {
			//console.log('myMapsChange received');
			this.initPreferences();
		}, this);

        return actions;
    },

	/** api: method[]
	 */
	getMyMaps: function() {
		if (localStorage.getItem("myMaps")) {
			//console.log("check MyMaps");
			return localMyMapsKeys = eval(localStorage.getItem("myMaps"));
		} else {
			return [];
		}
	},

	/** api: mathod[]
	 */
	completeSessionChoices: function(sessionChoices) {
		myMapsNames = this.getMyMaps();
		for (var i = 0; i < myMapsNames.length; i++) {
			if (myMapsNames[i] !== '') {
				sessionChoices.push(myMapsNames[i]);
			}
		}
		return sessionChoices;
	},

    /** api: method[initPreferences]
     */
	initPreferences: function() {
		this.checkLocalStorage();
		if (this.validLocalStorage) {
		
			console.log("in initPreferences- 01");
			
			var data = [];
			// ! ne pas changer l'ordre dans les array !
			// sessionChoicesData = la liste des champs de la combobox de session
			var sessionChoicesData = this.completeSessionChoices([this.keepSessionText, this.forgetSessionText]);
			// sessionChoicesDataForArrayStore = la liste des doublets pour construire un arraystore
			var sessionChoicesDataForArrayStore = [];
			for (i=0;i<sessionChoicesData.length;i++){
				sessionChoicesDataForArrayStore.push([sessionChoicesData[i],sessionChoicesData[i]]);
			}
			// sessionChoices est un arrayStore, afin que le combobox soit mis à jour lors de l'update
			// de sessionChoices via le mymapschange event.
			if(!this.sessionChoices) {
				this.sessionChoices = new Ext.data.ArrayStore({
										fields: ["valueField", "displayField"],
										data: sessionChoicesDataForArrayStore});
			} else {
				this.sessionChoices.loadData(sessionChoicesDataForArrayStore,false);
				//this.sessionChoices.reload();
			}

			// ! ne pas changer l'ordre dans les array !
			this.panelChoices   				= [this.legendPanelText, this.dataPanelText];
			this.searchChoices  				= [this.multipleSearchText, this.uniqueSearchText];
			this.showQueryToolChoices 			= [false, true];
			this.showGeolocatorToolChoices 		= [false, true];
			this.showUrbanalysisToolboxChoices 	= [false, true];
			this.showDataEditoToolsChoices 		= [false, true];
			this.showDedicatedMapToolsChoices 	= [false, true];
			this.showPopupInfoOnRightClick		= [false, true];

			this.choicesPrefsKeysDic = {
				"session" : this.sessionChoices,
				"defPanl" : this.panelChoices,
				"searchN" : this.searchChoices,
				"shwQrTl" : this.showQueryToolChoices,
				"shwGlTl" : this.showGeolocatorToolChoices,
				"shwUaTb" : this.showUrbanalysisToolboxChoices,
				"shwDeTl" : this.showDataEditoToolsChoices,
				"shwDmTl" : this.showDedicatedMapToolsChoices,
				"shwPiRc" : this.showPopupInfoOnRightClick};
				
			// les prefs sont déjà en localstorage
			if (localStorage.getItem("preferences") !== null) {
				var preferencesKeysTemp = this.preferencesKeys;
				for (key in this.preferencesKeys) {
					if (key !== "remove") {
						console.log("in initpreferences- key: " + key);
						var preferenceKey = this.preferencesKeys[key],
							preferenceContent = '';
						console.log("in initpreferences- localStorage.getItem(preferenceKey): " + localStorage.getItem(preferenceKey));
						console.log("in initpreferences- localStorage.getItem(preferenceKey) !== null: " + localStorage.getItem(preferenceKey) !== null);
						if (localStorage.getItem(preferenceKey) !== null) {
							
							//La prefs existe en localstorage
							preferenceContent = localStorage.getItem(preferenceKey);
						} else {
							// ou pas, on l'initialise, on l'ajoute
							preferenceContent = this.defaultPreferences[this.preferencesKeys[key]];
							localStorage.setItem(this.preferencesKeys[key], this.defaultPreferences[this.preferencesKeys[key]]);
							localStorage.setItem("preferences", "['" + this.preferencesKeys.toString().replace(/\,/g,"','") + "']");
						}
						// en cas de contenu non numérique
						if (isNaN(preferenceContent)) {
							//console.log("Not a number for a preference content");
							preferenceContent = this.defaultPreferences[this.preferencesKeys[key]];
							localStorage.setItem(this.preferencesKeys[key], this.defaultPreferences[this.preferencesKeys[key]]);
						} else {
							// en cas de contenu numérique ne désignant rien de connu
							// test pour voir si la valeur est acceptable selon le dictionnaire interne de choix.
							// ! Il faut d'abord évaluer le type de dictionnaire interne (array ou arrayStore)
							if (this.choicesPrefsKeysDic[this.preferencesKeys[key]] instanceof Ext.data.ArrayStore) {
								if (preferenceContent >= this.choicesPrefsKeysDic[this.preferencesKeys[key]].reader.arrayData.length) {
									//console.log("number but too high");
									preferenceContent = this.defaultPreferences[this.preferencesKeys[key]];
									localStorage.setItem(this.preferencesKeys[key], this.defaultPreferences[this.preferencesKeys[key]]);
								}
							} else {
								if (preferenceContent >= this.choicesPrefsKeysDic[this.preferencesKeys[key]].length) {
									preferenceContent = this.defaultPreferences[this.preferencesKeys[key]];
									localStorage.setItem(this.preferencesKeys[key], this.defaultPreferences[this.preferencesKeys[key]]);
								}
							}
						}
						data.push([preferenceKey, preferenceContent]);
					}
				}
			// Aucune prefs ne se trouve encore en localstorage
			} else {
				localStorage.setItem("preferences", "['" + this.preferencesKeys.toString().replace(/\,/g,"','") + "']");
				// ici créer les var de prefs en localstorage
				// ici compléter le data
				for (key in this.preferencesKeys) {
					if (key !== "remove") {
						localStorage.setItem(this.preferencesKeys[key], this.defaultPreferences[this.preferencesKeys[key]]);
						data.push([this.preferencesKeys[key], this.defaultPreferences[this.preferencesKeys[key]]]);
					}
				}
			}
			// génération du store une fois data complété avec
			//		soit les defaults
			//		soit le localstorage
			if(!this.preferencesStore)
			{
				this.preferencesStore = new Ext.data.ArrayStore({
					fields: ["preferenceName", "preferencesContent"],
					data: data
				});
			} else {
				this.preferencesStore.loadData(data,false);
			}
			//console.log("in initPreferences, this.preferencesStore:");
			//console.log(this.preferencesStore);
		}
	},

    /** api: method[checkLocalStorage]
     */
	checkLocalStorage: function() {
		this.validLocalStorage = (localStorage)?true:false;
		if (this.validLocalStorage) {
			console.log("checkLocalStorage " + this.validLocalStorage);
		} 
		else {
			console.log("checkLocalStorage " + this.validLocalStorage);
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
		//console.log("in ShowPreferencesGrid, element session:");
		//console.log(Ext.getCmp("session"));
    },

    /**
     * private: method[initPreferencesWindow]
     * Constructs a window with preferences
     */
    initPreferencesWindow: function() {
		//console.log("in initPreferencesWindow");
		//console.log(this.preferencesStore.reader.arrayData[0][1]);
        var preferencesPanel = new Ext.Panel({
			id: "preferencesPanel",
            //store: this.preferencesStore,
			bodyStyle: {"padding": "10px"},
            defaults: {
                labelWidth: 250
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
                        value: this.sessionChoices.reader.arrayData[this.preferencesStore.reader.arrayData[0][1]][1],			// mettre la valeur trouvée en localstorage!!! à initialiser au début dans initPreferences
                        valueField: "valueField",
						displayField: "displayField",
						autocreate: true,
						mode: "local",
                        triggerAction: "all",
                        editable: false,
						listeners: {
							select: this.updateChoice2,
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
				}, {
				xtype: "fieldset",
                title: this.toolsVisibilityOptionLabelText,
                items: [{
                    xtype: "compositefield",
                    fieldLabel: this.showQueryToolLabelText,
                    anchor: "99%",
                    items: [{
						id: "shwQrTl",
                        xtype: "checkbox",
                        checked: this.showQueryToolChoices[this.preferencesStore.reader.arrayData[3][1]],
                        listeners: {
							check: this.updateChoice,
                            scope: this
						}}]
					}, {
                    xtype: "compositefield",
                    fieldLabel: this.showGeolocatorToolLabelText,
					anchor: "99%",
                    items: [{
						id: "shwGlTl",
                        xtype: "checkbox",
                        checked: this.showGeolocatorToolChoices[this.preferencesStore.reader.arrayData[4][1]],
                        listeners: {
                            check: this.updateChoice,
                            scope: this
						}}]
					}, {
                    xtype: "compositefield",
                    fieldLabel: this.showUrbanalysisToolLabelText,
					anchor: "99%",
                    items: [{
						id: "shwUaTb",
                        xtype: "checkbox",
                        checked: this.showUrbanalysisToolboxChoices[this.preferencesStore.reader.arrayData[5][1]],
                        listeners: {
                            check: this.updateChoice,
                            scope: this
						}}]
					}, {
                    xtype: "compositefield",
                    fieldLabel: this.showDataEditorToolslabelText,
					anchor: "99%",
                    items: [{
						id: "shwDeTl",
                        xtype: "checkbox",
                        checked: this.showDataEditoToolsChoices[this.preferencesStore.reader.arrayData[6][1]],
                        listeners: {
                            check: this.updateChoice,
                            scope: this
						}}]
					}, {
                    xtype: "compositefield",
                    fieldLabel: this.showDedicatedMapAdvancedToolsLabelText,
					anchor: "99%",
                    items: [{
                        id: "shwDmTl",
                        xtype: "checkbox",
                        checked: this.showDedicatedMapToolsChoices[this.preferencesStore.reader.arrayData[7][1]],
                        listeners: {
                            check: this.updateChoice,
                            scope: this
						}}]
					}, {
                    xtype: "compositefield",
                    fieldLabel: this.showPopupInfoOnRightClickLabelText,
					anchor: "99%",
                    items: [{
                        id: "shwPiRc",
                        xtype: "checkbox",
                        checked: this.showPopupInfoOnRightClick[this.preferencesStore.reader.arrayData[8][1]],
                        listeners: {
                            check: this.updateChoice,
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
            height: 350,
            width: 500,
			modal: true,
            //listeners: {},
            scope: this
        }, this.initialConfig.outputConfig));
        if (Cls === Ext.Panel) {
            this.addOutput(this.preferencesWindow);
        }
	},

    /** api: method[updateChoice]
     * a very intelligent and advanced function.
     */
    updateChoice: function(args) {
		//console.log(args);
		if (args.xtype == "combo"){
			//console.log("combo");
			this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent = this.choicesPrefsKeysDic[args.id].indexOf(args.value);
			localStorage.setItem(args.id, this.choicesPrefsKeysDic[args.id].indexOf(args.value));
		} else if (args.xtype == "checkbox") {
			//console.log("checkbox");
			this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent = this.choicesPrefsKeysDic[args.id].indexOf(args.checked);
			localStorage.setItem(args.id, this.choicesPrefsKeysDic[args.id].indexOf(args.checked));
		}
		this.target.fireEvent("preferencesChange");
    },

    /** api: method[updateChoice]
     * a very intelligent and advanced function.
     */
    updateChoice2: function(args) {
		//console.log("in updateChoice2, args:");
		//console.log(args);
		if (args.xtype == "combo"){
			//console.log("combo");
			//console.log(this.choicesPrefsKeysDic);
			//console.log(this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent);
			this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent = this.choicesPrefsKeysDic[args.id].findExact(args.valueField, args.value);
			//console.log(this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent);
			localStorage.setItem(args.id, this.choicesPrefsKeysDic[args.id].findExact(args.valueField, args.value));

		} else if (args.xtype == "checkbox") {
			//console.log("checkbox");
			this.preferencesStore.data.items[this.preferencesStore.find("preferenceName",args.id)].data.preferencesContent = this.choicesPrefsKeysDic[args.id].indexOf(args.checked);
			localStorage.setItem(args.id, this.choicesPrefsKeysDic[args.id].indexOf(args.checked));
		}
		this.target.fireEvent("preferencesChange");
    }
});

Ext.preg(ux.plugins.Preferences.prototype.ptype, ux.plugins.Preferences);
