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
 *  class = MyReperage
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: MyReperage(config)
 *
 *	Plugin for creating and managing localstorage reperage
 */
ux.plugins.MyReperage = Ext.extend(gxp.plugins.Tool, {

	/** api: ptype = ux_myreperage */
	ptype: "ux_myreperage",
	
	/** api: config[...]
	 *  ``String``
	 *  Text for (i18n).
	 */
	myReperageTip: "My reperage",
	myReperageText: "my reperage text",
	myReperageMenuText: "my reperage menu text",
	availableMyReperageText: "My reperage",
	
	//UUID
	username: 'noname',
	
	nbresultbypage: 25,
	
	/** api: config[LocalStorageState]
	 *  ``String``
	 *  Boolean LocalStorage State.
	 */
	validLocalStorage: false,
	
	
	/** api: config[myReperage]
	 *  ``Ext.data.Store``
	 *  Text for the grid expander (i18n).
	 */
	myReperage: false,
	
	/** private: method[constructor]
	 */
	constructor: function(config) {
console.log("MyReperage.constructor");
		this.checkLocalStorage();
		this.initMyReperage();
		this.initMyReperageGrid();
		this.addActions();
		ux.plugins.MyReperage.superclass.constructor.apply(this, arguments);
	},
	
	//Crée le bouton pour la page principale
	/** api: method[addActions]
     */
    addActions: function() {
console.log("MyReperage.addAction");
        var commonOptions = {
            tooltip : this.myReperageTip,
            menuText: this.myReperageMenuText,
            disabled: true,
            iconCls: "star"
        };
        var options = Ext.apply(commonOptions, {
			handler : this.showMyReperageGrid,
			scope: this
		});
        var actions = ux.plugins.MyReperage.superclass.addActions.apply(this, [options]);
        
        this.target.on("ready", function() {
			if (this.checkLocalStorage()) {
				actions[0].enable();
			} else {
				actions[0].disable();
			}
        }, this);
        return actions;
    },
	
	/** api: method[initMyReperage]
	 */
	initMyReperage: function() {
console.log("MyReperage.initMyReperage");
		if (this.validLocalStorage) {
			var data = [];
			if (localStorage.getItem("repuser") !== null && localStorage.getItem("repuser") != 'noname') {
				//TODO: load reperage.
				username = localStorage.getItem("repuser");
			} else {
				localStorage.setItem("repuser","noname");
				username = 'admin';
			}
			this.myReperage = new Ext.data.Store({
				reader: new Ext.data.JsonReader({
					// metadata configuration options:
					//idProperty: 'threadid',
					root: 'records',
					totalProperty: 'totalProperties',
					successProperty: 'success',
					fields: [
						'id', 'docref', 'adress', 'state', 
						{name: 'startdate', mapping: 'startdate', type: 'date', dateFormat: 'timestamp'},
						{name: 'enddate', type: 'date', dateFormat: 'timestamp'}
					]
				}),
				// store configs
				autoDestroy: true,
				//TODO: changer pour un Ext.data.ScriptTagProxy
				proxy : new Ext.data.HttpProxy({
					method: 'GET',
					prettyUrls: false,
					url: '/WebReperage/res/reperage/userextjs'
				}),
				storeId: 'ReperageStoreId',
				// reader configs
				remoteSort: true

			});
			this.myReperage.setDefaultSort('startdate', 'desc');
			this.myReperage.setBaseParam('users', username);
			this.myReperage.load({params:{start:0, limit:this.nbresultbypage}});
		}
	},
	
	
	/** api: method[checkLocalStorage]
	 */
	checkLocalStorage: function() {
console.log("MyReperage.checkLocalStorage");
		this.validLocalStorage = (localStorage)?true:false;
		if (this.validLocalStorage) {} else {
			this.deactivate();
		}
		return this.validLocalStorage
	},
	
	
	/** api: method[showMyReperageGrid]
     * Shows the window with a MyReperage grid.
     */
    showMyReperageGrid: function() {
console.log("MyReperage.showMyReperageGrid");
		this.initMyReperage();
        if(!this.myReperageGrid) {
            this.initMyReperageGrid();
        } else if (!(this.myReperageGrid instanceof Ext.Window)) {
            this.addOutput(this.myReperageGrid);
        }
        this.myReperageGrid.show();
    },
	
	
	/**
	 * private: method[initMyReperageGrid]
	 * Constructs a window with a MyReperage grid.
	 */
	initMyReperageGrid: function() {
console.log("MyReperage.initMyReperageGrid");
		var myReperageGridPanel = new Ext.grid.GridPanel({
			id: "myReperageGridPanel",
			store: this.myReperage,
			autoScroll: true,
			flex: 1,
			autoHeight: true,
			height: 'auto',
			autoExpandColumn: "Dossier",
			//plugins: [expander],
			loadMask: true,
			// grid columns
			columns:[{
				id: 'Dossier',
				header: "Dossier",
				dataIndex: 'docref',
				width: 150,
				sortable: true
			},
			{
				header: "Adresse",
				dataIndex: 'adress',
				width: 200
			},
			{
				header: "Statut",
				dataIndex: 'state',
				width: 65,
				sortable: true,
				renderer : function(value, metaData, record, row, col, store, gridView){
					var newvalue;
					if (value === 'NEW') {
					  newvalue = "<span style='color:black;' >"+value+"</span>";
					}else if (value === 'PENDING'){
					  newvalue = "<span style='color:orange;' >"+value+"</span>";
					}else if (value === 'DONE'){
					  newvalue = "<span style='color:green;' >"+value+"</span>";
					}else if (value === 'FAILED'){
					  newvalue = "<span style='color:red;' >"+value+"</span>";
					}else {
					  newvalue = "<span style='color:grey;' >"+value+"</span>";
					}
					return newvalue;
				}
			},
			{
				header   : 'Repérage crée le :',
				width	: 125,
				sortable : true,
				renderer : Ext.util.Format.dateRenderer('d-m-y H:i'),
				dataIndex: 'startdate'
			},
			{
				header: 'Le repérage sera supprimer le :',
				dataIndex: 'enddate',
				width: 170,
				sortable: true,
				renderer : function(value, metaData, record, row, col, store, gridView){
					newvalue = value;
					if(value != null){
						var d = new Date(value).add(Date.DAY, 3).format('d-m-y H:i');
						newvalue = d;
					}
					return newvalue;
				}
			},
			{
				header: 'Docx',
				xtype: 'actioncolumn',
				align: 'center',
				sortable : false,
				width: 35,
				items: [
					{
						icon   : '/WebReperage/inc/down2.gif',	 // Use a URL in the icon config
						tooltip: 'Docx Download',
						handler: function(grid, rowIndex, colIndex) {
							var rec = grid.getStore().getAt(rowIndex);
							if(rec.get('state') == "DONE"){
								//TODO: Utilise des url corecte
								//window.open("/WebReperage/detail?id="+rec.get('id'),'Docx');
								window.open("http://www.google.be",'google');
							}
						},
						getClass: function(v, meta, rec) {  // Or return a class from a function
							if (rec.get('state') != "DONE") {
								return 'x-hide-display';
							}
						}
					}
				]
			},
			{
				header: 'PDF',
				xtype: 'actioncolumn',
				align: 'center',
				sortable : false,
				width: 35,
				items: [
					{
						icon   : '/WebReperage/inc/down2.gif',	 // Use a URL in the icon config
						tooltip: 'PDF Download',
						handler: function(grid, rowIndex, colIndex) {
							var rec = grid.getStore().getAt(rowIndex);
							if(rec.get('state') == "DONE"){
								//TODO: Utilise des url corecte
								//window.open("/WebReperage/detail?id="+rec.get('id'),'PDF');
								window.open("http://www.google.be",'google');
							}
						},
						getClass: function(v, meta, rec) {  // Or return a class from a function
							if (rec.get('state') != "DONE") {
								return 'x-hide-display';
							}
						}
					}
				]
			}
			],
			
//			listeners: {
//				rowdblclick: this.loadMapState,
//				rowclick: this.activateButtons,
//				scope: this
//			},
			forceLayout: true,
			
			// paging bar on the bottom
			bbar: new Ext.PagingToolbar({
				pageSize: this.nbresultbypage,
				store: this.myReperage,
				displayInfo: true,
				displayMsg: 'Repérages {0} - {1} of {2}',
				emptyMsg: "Pas de repérage"
			})
		});
		
		var items = {
			xtype: "container",
			region: "center",
			layout: "fit",
			//height: 'auto',
			items: [myReperageGridPanel]
		};
		
		var Cls = this.outputTarget ? Ext.Panel : Ext.Window;
		
		this.myReperageGrid = new Cls(Ext.apply(
		{
			id: "myReperageGrid",
			title: this.availableMyReperageText,
			closeAction: "hide",
			items: items,
			layout: "border",
			height: 450,
			width: 710,
			modal: true,
			listeners: { 
				hide: function(win) {
					myReperageGridPanel.getSelectionModel().clearSelections();
				},
				scope: this
			}
		}
		));
		if (Cls === Ext.Panel) {
			this.addOutput(this.myReperageGrid);
		}
	}
	
});

Ext.preg(ux.plugins.MyReperage.prototype.ptype, ux.plugins.MyReperage);