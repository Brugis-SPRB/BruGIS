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
 *  class = MyMaps
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: MyMaps(config)
 *
 *    Plugin for creating and managing localstorage maps
 */
ux.plugins.MyMaps = Ext.extend(gxp.plugins.Tool, {

    /** api: ptype = ux_mymaps */
    ptype: "ux_mymaps",

    /** api: config[...]
     *  ``String``
     *  Text for (i18n).
     */
    myMapsTip: "My maps",
    myMapsText: "my maps text",
    myMapsMenuText: "my maps menu text",
	availableMyMapsText: "My maps",

	mapsTitleText: "Maps",
	dateTitleText: "Dates",

    expanderTemplateText: "<p><b>Abstract:</b> {description}</p>",

	resetText: "reset",
	importText: "Import",
	exportText: "Link",
	saveMapText: "Save",
	loadMapText: "Load",
	deleteMapText: "Delete",
	doneText: "Done",

	resetButtonTooltipText: "Reset the BruGIS map to its default state",
	importButtonTooltipText: "Import maps from file",
	exportButtonTooltipText: "Temporary link towards the map",
	saveButtonTooltipText: "Save current map state",
	deleteButtonTooltipText: "Delete selected map state",
	loadButtonTooltipText: "Load selected map state",

	loadConfirmTitle: "Loading map",
	loadConfirmMessage: "Are you sure to load this map?",
	deleteConfirmTitle: "Deleting map",
	deleteConfirmMessage: "Are you sure you want to delete this/these map(s)?",
	resetConfirmTitle: "Resetting map",
	resetConfirmMessage: "Do you want to reset BruGIS to its default map state?",

	namingText: "New map",
	mapNameFieldText: "Name",
	mapAbstractFieldText: "Description",
	okText: "Ok",

	mapNameErrorText: "This map name is invalid.",
	mapAbstractErrorText: "This map description is invalid.",

	sameMapNameTitle: "Warning",
	sameMapNameMessage: "This name already exists. Do you want to overwrite this map?",

	exportMapPromptTitle: "Use this link to share your maps :",

    /** api: config[myMaps]
     *  ``String``
     *  Text for the grid expander (i18n).
     */
	validLocalStorage: false,

    /** api: config[mapName]
     *  ``Ext.data.string``
     *  name of the current map
     */
	mapName: '',

    /** api: config[myMaps]
     *  ``Ext.data.ArrayStore``
     *  Text for the grid expander (i18n).
     */
	myMaps: false,

    /** api: config[myMaps]
     *  ``String``
     *  Text for the grid expander (i18n).
     */
	myMapsKeys: [],

    /** private: method[constructor]
     */
    constructor: function(config) {
		this.checkLocalStorage();
		ux.plugins.MyMaps.superclass.constructor.apply(this, arguments);
    },

    /** api: method[addActions]
     */
    addActions: function() {
        var commonOptions = {
            tooltip : this.myMapsTip,
            //text: this.myMapsText,
            menuText: this.myMapsMenuText,
            disabled: true,
            iconCls: "icon-maps"
        };
        var options = Ext.apply(commonOptions, {
			handler : this.showMyMapsGrid,
			scope: this
		});
        var actions = ux.plugins.MyMaps.superclass.addActions.apply(this, [options]);

        this.target.on("ready", function() {
			if (this.checkLocalStorage()) {
            actions[0].enable();
			} else {
			actions[0].disable();
			}
        }, this);
        return actions;
    },

    /** api: method[initMyMaps]
     */
	initMyMaps: function() {
		if (this.validLocalStorage) {
			var data = [];
			if (localStorage.getItem("myMaps") !== null) {
				this.myMapsKeys = eval(localStorage.getItem("myMaps"));
				for (var key = 0; key < this.myMapsKeys.length; key++) {
					var mapKey = this.myMapsKeys[key],
						mapContent = '',
						mapAbstract = '',
						mapDate = '';
					if (localStorage.getItem(mapKey) !== null) {
						mapContent = localStorage.getItem(mapKey);
						if (localStorage.getItem(mapKey + "_abstract") !== null) {
							mapAbstract = localStorage.getItem(this.myMapsKeys[key] + "_abstract");
						}
						if (localStorage.getItem(mapKey + "_date") !== null) {
							mapDate = localStorage.getItem(this.myMapsKeys[key] + "_date");
						}
						data.push([mapKey, mapContent, mapAbstract, mapDate]);
					} else {
						this.myMapsKeys = this.myMapsKeys.remove(mapKey);
						localStorage.setItem("myMaps", "['" + this.myMapsKeys.toString().replace(/\,/g,"','") + "']");
					}
				}
			} else {
				localStorage.setItem("myMaps","[]");
			}
			this.myMaps = new Ext.data.ArrayStore({
				fields: ["Maps", "content", "description", "date"],
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
		return this.validLocalStorage
	},

    /** api: method[showMyMapsGrid]
     * Shows the window with a MyMaps grid.
     */
    showMyMapsGrid: function() {
		this.initMyMaps();
        if(!this.myMapsGrid) {
            this.initMyMapsGrid();
        } else if (!(this.myMapsGrid instanceof Ext.Window)) {
            this.addOutput(this.myMapsGrid);
        }
		this.deActivateButtons();
        this.myMapsGrid.show();
    },

    /**
     * private: method[initMyMapsGrid]
     * Constructs a window with a MyMaps grid.
     */
    initMyMapsGrid: function() {
        var expander = this.createExpander();

        var myMapsGridPanel = new Ext.grid.GridPanel({
			id: "myMapsGridPanel",
            store: this.myMaps,
            autoScroll: true,
            flex: 1,
			autoHeight: true,
			height: 'auto',
            autoExpandColumn: "Maps",
            plugins: [expander],
            loadMask: true,
            colModel: new Ext.grid.ColumnModel([
                {id: "Maps", header: this.mapsTitleText, dataIndex: "Maps", width: 50, sortable: true},
				{id: "date", header: this.dateTitleText, dataIndex: "date", width: 150, sortable: true},
				expander
            ]),
            listeners: {
                rowdblclick: this.loadMapState,
				rowclick: this.activateButtons,
                scope: this
            },
			forceLayout: true
        });

        var items = {
            xtype: "container",
            region: "center",
            layout: "fit",
			//height: 'auto',
            items: [myMapsGridPanel]
        };

        var bbarItems = [
/* 			new Ext.Button({
				id: "importButton",
                text: this.importText,
                handler: this.aFunction,
				tooltip: this.importButtonTooltipText,
                scope : this
            }),
*/
			new Ext.Button({
				id: "exportButton",
                text: this.exportText,
                handler: this.exportMapState,
				tooltip: this.exportButtonTooltipText,
                scope : this
            }),
            new Ext.Button({
				id: "resetButton",
                text: this.resetText,
                handler: this.resetMapState,
				tooltip: this.resetButtonTooltipText,
                scope : this
            }),
			"->",
			new Ext.Button({
				id: "saveButton",
                text: this.saveMapText,
                handler: this.saveMapState,
				tooltip: this.saveButtonTooltipText,
                scope : this
            }),
			new Ext.Button({
				id: "deleteButton",
                text: this.deleteMapText,
				disabled: true,
                handler: this.deleteMapState,
				tooltip: this.deleteButtonTooltipText,
                scope : this
            }),
			new Ext.Button({
				id: "loadButton",
                text: this.loadMapText,
				disabled: true,
                handler: this.loadMapState,
				tooltip: this.loadButtonTooltipText,
                scope : this
            }),
            new Ext.Button({
                text: this.doneText,
                handler: function() {
                    this.myMapsGrid.hide();
                },
                scope: this
            })
        ];

        var Cls = this.outputTarget ? Ext.Panel : Ext.Window;

        this.myMapsGrid = new Cls(Ext.apply({
			id: "myMapsGrid",
            title: this.availableMyMapsText,
            closeAction: "hide",
            items: items,
            layout: "border",
            height: 350,
            width: 450,
			modal: true,
            //tbar: capGridToolbar,
            bbar: bbarItems,
            listeners: {
                hide: function(win) {
                    myMapsGridPanel.getSelectionModel().clearSelections();
                },
                scope: this
            },
			scope: this
        }, this.initialConfig.outputConfig));
        if (Cls === Ext.Panel) {
            this.addOutput(this.myMapsGrid);
        }
	},

    /** api: method[aFunction]
     * a dummy function.
     */
    aFunction: function() {
		console.log("in aFunction");
		console.log(this);
    },

	/**
	 * activate the disabled buttons
	 */
	activateButtons: function() {
		var myMapsGridPanel = Ext.getCmp("myMapsGridPanel");
		var selectedMap 	= myMapsGridPanel.selModel.selections.items;
		if (selectedMap.length == 1) {
			Ext.getCmp("loadButton").enable();
		} else {
			Ext.getCmp("loadButton").disable();
		}
		Ext.getCmp("deleteButton").enable();
		Ext.getCmp("exportButton").enable();
	},

	/**
	 * deactivate the delete and load buttons
	 */
	deActivateButtons: function() {
		Ext.getCmp("deleteButton").disable();
		Ext.getCmp("loadButton").disable();
		Ext.getCmp("exportButton").disable();
	},

    /** private: method[saveMapState]
     * Show the naming dialog for the user.
     */
	saveMapState: function() {
        var panel = new Ext.FormPanel({
            frame: true,
            labelWidth: 70,
            defaultType: "textfield",
            errorReader: {
                read: function(response) {
                    var success = false;
                    var records = [];
                    if (response.status === 200) {
                        success = true;
                    } else {
                        records = [
                            {data: {id: "mapName", msg: this.mapNameErrorText}},
							{data: {id: "mapAbstract", msg: this.mapAbstractErrorText}}
                        ];
                    }
                    return {
                        success: success,
                        records: records
                    };
                }
            },
            items: [{
                fieldLabel: this.mapNameFieldText,
                name: "mapName",
                //width: 137,
                allowBlank: false,
                listeners: {
                    render: function() {
                        this.focus(true, 100);
                    }
                }
            }, {
                fieldLabel: this.mapAbstractFieldText,
                name: "mapAbstract",
                //width: 137,
                allowBlank: true//,
                /* listeners: {
                    render: function() {
                        this.focus(true, 200);
                    }
                } */
            }],
            buttons: [{
                text: this.okText,
                formBind: true,
                handler: submitName,
                scope: this
            }],
            keys: [{
                key: [Ext.EventObject.ENTER],
                handler: submitName,
                scope: this
            }]
        });

        function submitName() {
			this.mapName 		= panel.getForm().findField('mapName').getValue();
			this.mapAbstract 	= panel.getForm().findField('mapAbstract').getValue();
			this.mapDate		= new Date().toISOString();
			var overwriteChoice = false;

			var applyValidMapName = function() {
				var myMapsManager = this.target.tools.mymapsmanager;

				if (myMapsManager.mapName != "") {
					//var mapAbstract = myMapsManager;
					var mapAbsKey 	= myMapsManager.mapName + "_abstract";
					var mapDateKey 	= myMapsManager.mapName + "_date";

					// sauvegarde du mapState courant
					var myAppState = this.target.getState();
					delete myAppState.map.controls;

					var configStr = Ext.util.JSON.encode(myAppState);
					configStr = configStr.replace("/geoserver/www/wmsaatl/geoweb_brugis.xml", "/geoserver/gwc/service/wms");
					configStr = configStr.replace("/geoserver/www/wmsaatl/wmsc_brugis.xml", "/geoserver/ows");
					//bkp de this.myMaps
					var myMapsData = [];
					var myMapsNames = [];
					if (myMapsManager.myMaps.data) {

						for (var i=0; i < myMapsManager.myMaps.data.length; i++) {
							if (myMapsManager.myMaps.data.items[i] instanceof Ext.data.Record) {
								// On skip le record s'il a le même nom que le nouveau
								// pour éviter les doublons
								if (myMapsManager.myMaps.data.items[i].json[0] != myMapsManager.mapName) {
									myMapsData.push([myMapsManager.myMaps.data.items[i].json[0],
													 myMapsManager.myMaps.data.items[i].json[1],
													 myMapsManager.myMaps.data.items[i].json[2],
													 myMapsManager.myMaps.data.items[i].json[3]]);
									myMapsNames.push(myMapsManager.myMaps.data.items[i].json[0]);
								}
							}
						}
					}
					// On ajoute le nouveau
					// si le nom déjà existant, remplacé
					myMapsNames.push(myMapsManager.mapName);
					myMapsData.push([myMapsManager.mapName, configStr, myMapsManager.mapAbstract, myMapsManager.mapDate]);

					// màj de this.myMaps
					myMapsManager.myMaps = new Ext.data.ArrayStore({
						fields: ["Maps", "content", "description", "date"],
						data: myMapsData
					});

					// màj du localStorage
					localStorage.setItem(myMapsManager.mapName, configStr);
					localStorage.setItem('myMaps', "['" + myMapsNames.toString().replace(/\,/g,"','") + "']");
					localStorage.setItem(mapAbsKey, myMapsManager.mapAbstract);
					localStorage.setItem(mapDateKey, myMapsManager.mapDate);

					// màj de this.myMapsGrid
					myMapsManager.myMapsGrid.items.items[0].items.items[0].store.loadData(myMapsData);
				}
				// On save, le select disparaît, les boutons soumis à select sont disablé
				myMapsManager.deActivateButtons();
				this.target.fireEvent("mymapschange");
				win.close();
			}
			if (this.myMapsKeys.indexOf(this.mapName) != -1) {
				Ext.Msg.show({
					title: this.sameMapNameTitle,
					msg: this.sameMapNameMessage,
					buttons: Ext.Msg.YESNOCANCEL,
					icon: Ext.MessageBox.WARNING,
					fn: function(btn) {
						overwriteChoice = (btn === 'yes');
						if (btn === 'yes') {
							applyValidMapName.call(this);
						} else if (btn === 'cancel') {
							this.mapName = "";
							win.close();
						} else {
							this.mapName = "";
						}
					},
					scope: this
				});
			} else {
				applyValidMapName.call(this);
			}
        }

        var win = new Ext.Window({
            title: this.namingText,
            layout: "fit",
            width: 230,
            height: 140,
            plain: true,
            border: false,
            modal: true,
            items: [panel],
            listeners: {
                scope: this
            }
        });
        win.show();
	},

    /** api: method[deleteMapState]
     * delete the selected map state in the localStorage
     */
	deleteMapState: function() {
		var myMapsGridPanel = Ext.getCmp("myMapsGridPanel");

		var callback = function() {
			var SelectedMapsToRemove = [];
			for (each=0;each<myMapsGridPanel.selModel.selections.items.length;each++) {
				var selectedMap 	= myMapsGridPanel.selModel.selections.items[each];
				var mapName 		= selectedMap.data.Maps;
				var mapAbstract 	= selectedMap.data.description;
				var mapDate			= selectedMap.data.date;
				var mapContent 		= selectedMap.data.content;

				if (localStorage.getItem(mapName) !== null) {
					localStorage.removeItem(mapName);
				}
				if (localStorage.getItem(mapName + "_abstract") !== null) {
					localStorage.removeItem(mapName + "_abstract");
				}
				if (localStorage.getItem(mapName + "_date") !== null) {
					localStorage.removeItem(mapName + "_date");
				}
				if (localStorage.getItem("myMaps")) {
					var localMyMapsKeys = eval(localStorage.getItem("myMaps"));
					if (localMyMapsKeys.indexOf(mapName) != -1) {
						localMyMapsKeys = localMyMapsKeys.remove(mapName);
						localStorage.setItem("myMaps", "['" + localMyMapsKeys.toString().replace(/\,/g,"','") + "']");
						this.myMapsKeys = localMyMapsKeys;
					}
				}
				SelectedMapsToRemove.push(selectedMap);
			}
			//clean this.myMapsGrid
			for (each=0;each<SelectedMapsToRemove.length;each++) {
				myMapsGridPanel.store.remove(SelectedMapsToRemove[each]);
			}
			this.deActivateButtons();
			//console.log(this);
			this.target.fireEvent("mymapschange");
		}

		Ext.Msg.show({
            title: this.deleteConfirmTitle,
            msg: this.deleteConfirmMessage,
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.MessageBox.WARNING,
            fn: function(btn) {
                if (btn === 'yes') {
                    callback.call(this);
                } else if (btn === 'no') {
                }
            },
            scope: this
        });
	},

    /** api: method[loadMapState]
     * load the selected map state in the map
     */
	loadMapState: function() {
		var myMapsGridPanel = Ext.getCmp("myMapsGridPanel");
		var selectedMap 	= myMapsGridPanel.selModel.selections.items[0];
		var mapContent 		= selectedMap.data.content;

        var callback = function() {
			var configStr = mapContent;
			if (localStorage) {
				localStorage.setItem('mapStateToLoad', configStr);
				//console.log("mapStateToLoad set");
			}
			//console.log("just before reload");
            window.location.reload();
        };

        Ext.Msg.show({
            title: this.loadConfirmTitle,
            msg: this.loadConfirmMessage,
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.MessageBox.WARNING,
            fn: function(btn) {
                if (btn === 'yes') {
                    callback.call(this);
                } else if (btn === 'no') {
                }
            },
            scope: this
        });
	},

	/** api: method[resetMapState]
	 * reset the map at its defaults parameters
	 */
	resetMapState: function() {

        var callback = function() {
			if (localStorage) {
				localStorage.setItem('reset', 'True');
			}
            window.location.reload();
        };

        Ext.Msg.show({
            title: this.resetConfirmTitle,
            msg: this.resetConfirmMessage,
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.MessageBox.WARNING,
            fn: function(btn) {
                if (btn === 'yes') {
                    callback.call(this);
                } else if (btn === 'no') {
                }
            },
            scope: this
        });
	},

    /** api: config[createExpander]
     *  ``Function`` Returns an ``Ext.grid.RowExpander``. Can be overridden
     *  by applications/subclasses to provide a custom expander.
     */
    createExpander: function() {
        return new Ext.grid.RowExpander({
            tpl: new Ext.Template(this.expanderTemplateText)
        });
    },

	exportMapState: function() {
		var myMapsGridPanel = Ext.getCmp("myMapsGridPanel");
		var selectedMap = myMapsGridPanel.selModel.selections.items[0];
		var mapContent = selectedMap.data.content;

	    OpenLayers.Request.issue({
            method: 'POST',
            url: 'http://mbr102.irisnet.be/MyBruGIS/sharemaps/',
            data: mapContent,
            callback: function(request) {
				if (request.status == 200) {
					var config = Ext.util.JSON.decode(request.responseText);
					var mapId = config.id;
					if (mapId) {
						this.id = mapId;
						var mapLinkUrl = window.location +  "#sharemaps/" + mapId;
						prompt(this.exportMapPromptTitle, mapLinkUrl);
					}
				} else {
					console.error("Cannot export the map");
				}
            },
            scope: this
        });
	}

});

Ext.preg(ux.plugins.MyMaps.prototype.ptype, ux.plugins.MyMaps);
