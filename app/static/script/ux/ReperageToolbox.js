/**
 * //@requires gxp/plugins/Tool.js
 * @requires OpenLayers/Control/DrawFeature.js
 * @requires OpenLayers/Handler/Polygon.js
 * @requires OpenLayers/Control/SelectFeature.js
 * @requires OpenLayers/Control/WMSGetFeatureInfo.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = ReperageToolbox
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: ReperageToolbox(config)
 *
 *	Plugin for add reperage toolbox to the viewer.  The underlying
 *	tools (if any) can be configured inside this plugin
 *	``outputConfig`` property. 
 */
ux.plugins.ReperageToolbox = Ext.extend(gxp.plugins.Tool, {
	
	/** api: ptype = ux_ReperageToolbox */
	ptype: "ux_ReperageToolbox",
	
	// Begin i18n.
	showReperageGrid: "ShowReperageGrid",
	drawReperageAreaToolTip: "DrawArea",
	showReperageFormBtnToolTip: "showReperageForm",
	modifyReperageAreaToolTip: "ModifyArea",
	copyParcelFeatBtnToolTip : "CopyParcel",
	deleteOneFeatureBtnToolTip: "DeleteOneFeature",
	reperageButtonTip: "ReperageToolBox",
	
	showReperageFormDlgTitle: "Reperage",
	reperageTypeCombofieldLabel: 'Reperage type',
	reperageTypeComboemptyText: 'Choose a reperage type',
	reperageRefDossTextfieldLabel: 'File reference',
	reperageAdrTextfieldLabel: "Addresse",
	
	myReperageTip: "My reperage",
	myReperageText: "my reperage text",
	myReperageMenuText: "my reperage menu text",
	availableMyReperageText: "My reperage",
	
	myReperageGridPanel_docref_header: "Dossier",
	myReperageGridPanel_adress_header: "Addresse",
	myReperageGridPanel_state_header: "Status",
	myReperageGridPanel_startdate_header: "Reperage creates on :",
	myReperageGridPanel_enddate_header: "Reperage will delete on :",
	
	myReperageGridPanel_docx_tooltip: "Docx Download",
	myReperageGridPanel_pdf_tooltip: "PDF Download",

	myReperageGridPanel_bbar_displayMsg: "Reperages {0} - {1} of {2}",
	myReperageGridPanel_bbar_emptyMsg: "No reperage",
	// End i18n.
	
	//UUID
	username: 'noname',
	
	nbresultbypage: 15,
	
	/** api: config[reperageDrawingLayerName]
	 *  ``String``
	 *  If value is specified, specify the working layer for the ReperageToolbox
	 *  Default is "reperagework".
	 */
	reperageLayerName: "reperagework",
	
	
	/** api: config[LocalStorageState]
	 *  ``String``
	 *  Boolean LocalStorage State.
	 */
	validLocalStorage: false,
	
	/** api: config[myReperage]
	 *  ``Ext.data.Store``
	 */
	myReperage: false,
	
	
	/** api: config[myReperage]
	 *  ``Ext.grid.GridPanel``
	 */
	myReperageGridPanel: false,
	
	/** private: method[constructor]
	 */
	constructor: function(config) {
		this.checkLocalStorage();
		ux.plugins.MyReperage.superclass.constructor.apply(this, arguments);
	},
	
	/** private: method[destroy]
	 */
	destroy: function() {
		this.button = null;
		gxp.plugins.MyReperage.superclass.destroy.apply(this, arguments);
	},
	
	init: function(target) {
		this.id = "toolboxReperage";
		
		if (this.validLocalStorage)
			this.username = localStorage.getItem("repuser");
		
		//création du vecteur qui contiendra les polygone dessiner
		this.reperageLayer = new OpenLayers.Layer.Vector(this.reperageLayerName,{
			rendererOptions: { zIndexing: true }
		});
		this.reperageLayer.displayInLayerSwitcher = false;
		
		var showReperageButton = new Ext.Button({
			tooltip: this.myReperageTip,
			iconCls: "star",
			scope: this,
			handler: function() {
				this.showMyReperageGrid();
			}
		});
		
		var toggleGroup = this.toggleGroup || Ext.id();
		
		//DrawPolygon
		var drawReperageFeatureControl = new OpenLayers.Control.DrawFeature(this.reperageLayer, OpenLayers.Handler.Polygon);
		var drawReperageAreaButton = new Ext.Button({
			enableToggle: true,
			allowDepress: true,
			tooltip: this.drawReperageAreaToolTip,
			iconCls: "ux-icon-drawreperage",
			toggleGroup: toggleGroup,
			scope: this,
			toggleHandler: function(btn,state){
				if (state) {
					this.parcelLayer.setVisibility(true);
					this.drawReperageFeatureControl.activate();
				} else {
					this.parcelLayer.setVisibility(false);
					this.drawReperageFeatureControl.deactivate();
				}
			}
		});
		
		//Edit Feature
		var modifyReperageFeatureControl = new OpenLayers.Control.ModifyFeature(this.reperageLayer);
		var modifyReperageAreaButton = new Ext.Button({
			enableToggle: true,
			allowDepress: true,
			tooltip: this.modifyReperageAreaToolTip,
			iconCls: "ux-icon-editreperage",
			toggleGroup: toggleGroup,
			scope: this,
			toggleHandler: function(btn,state){
				if (state) {
					this.parcelLayer.setVisibility(true);
					this.modifyReperageFeatureControl.activate();
				} else {
					this.parcelLayer.setVisibility(false);
					this.modifyReperageFeatureControl.deactivate();
				}
			}
		});		
		
		//DeleteSelectedFeature
		var deleteOneFeatureControl = new OpenLayers.Control.SelectFeature(this.reperageLayer,{clickout: true});
		deleteOneFeatureControl.events.register("featurehighlighted", this, this.removeFeatureToReperageLayer);

		var deleteOneFeatureBtn = new Ext.Button({
			enableToggle: true,
			allowDepress: true,
			tooltip: this.deleteOneFeatureBtnToolTip,
			iconCls: "ux-icon-removeonefeature",
			toggleGroup: toggleGroup,
			scope: this,
			toggleHandler: function(btn,state){
				if (state) {
					
					this.parcelLayer.setVisibility(true);
					this.deleteOneFeatureControl.activate();
				} else {
					this.parcelLayer.setVisibility(false);
					this.deleteOneFeatureControl.deactivate();
				}
			}
		});			
		//TODO

		//Copy 1 parcel
		//Warning : the getfeatureInfo need a proxy defined in order to work
		var parcelLayer = new OpenLayers.Layer.WMS("ParcelleReperage",
			"http://www.mybrugis.irisnet.be/geoserver/wms", 
			{'layers': 'AATL:Parcelle_2013', transparent: true, format: 'image/png'},
			{isBaseLayer: false}
		);
		parcelLayer.displayInLayerSwitcher = false;
		parcelLayer.setVisibility(false);
		
		var copyParcelControl = new OpenLayers.Control.WMSGetFeatureInfo({
			url: 'http://www.mybrugis.irisnet.be/geoserver/wms', 
			title: 'Identify features by clicking',
			layers: [parcelLayer],
			queryVisible: true,
			infoFormat: "application/vnd.ogc.gml"
		});

		copyParcelControl.events.register("getfeatureinfo", this, this.addFeatureToReperageLayer);

		var copyParcelFeatBtn = new Ext.Button({
			enableToggle: true,
			allowDepress: true,
			tooltip: this.copyParcelFeatBtnToolTip,
			iconCls: "ux-icon-copyparcel",
			toggleGroup: toggleGroup,
			scope: this,
			toggleHandler: function(btn,state){
				if (state) {
					this.parcelLayer.setVisibility(true);
					this.copyParcelControl.activate();
				} else {
					this.parcelLayer.setVisibility(false);
					this.copyParcelControl.deactivate();
				}
			}
		});
		
		
		
		//Reperage Form
		var showReperageFormBtn = new Ext.Button({
			tooltip: this.showReperageFormBtnToolTip,
			iconCls: "ux-icon-sendreperage",
			disabled: false,
			handler: function() {
				this.showReperageForm();
			},
			scope: this
		});

		var dataRepType = new Ext.data.JsonStore({
			url: '/WebReperage/resources/ReperagesType',
			autoLoad: true,
			idProperty: 'id',
			fields: ['id',  'title']
		});
			
		var reperageTypeCombo = new Ext.form.ComboBox({
			fieldLabel: this.reperageTypeCombofieldLabel,
			hiddenName:'reptype',
			store: dataRepType,
			valueField:'id',
			displayField:'title',
			typeAhead: true,
			mode: 'local',
			triggerAction: 'all',
			emptyText: this.reperageTypeComboemptyText,
			selectOnFocus:true,
			allowBlank: false,
			width:200,
			editable: false,
			forceSelection: true
		});
		
		var reperageRefDossText = new Ext.form.TextField({
			id: 'valuereperageRefDossText',
			fieldLabel: this.reperageRefDossTextfieldLabel,
			name: 'refdossier',
			allowBlank: false,
			width: 200
		});

		var reperageAdrText = new Ext.form.TextField({
			id: 'valuereperageAdrText',
			fieldLabel: this.reperageAdrTextfieldLabel,
			name: 'adr',
			allowBlank: false,
			width: 200
		});

		var reperageGeomHidden = new Ext.form.Hidden({
			name: 'geom'
		});
		
		var reperageUserHidden = new Ext.form.Hidden({
			name: 'user'
		});

		var reperageFormPanel = new Ext.FormPanel({
			labelWidth: 100,
			frame:true,
			url: '/WebReperage/res/reperage',
			defaults: {width: 200},
			items: [reperageRefDossText,
				reperageGeomHidden,
				reperageAdrText,
				reperageTypeCombo,
				reperageUserHidden],
			buttons : [{ 
				text: 'OK',
				minWidth: '75',
				scope: this,
				handler: function() {
					this.reperageFormPanel.getForm().submit({
						success: function(form, action) {
							Ext.Msg.alert('Success', action.result.msg);
							if(action.result.usr !== undefined && action.result.usr != ''){
								localStorage.setItem("repuser",action.result.usr);
								this.username = action.result.usr;
							}
							Ext.getCmp('valuereperageRefDossText').reset();
							Ext.getCmp('valuereperageAdrText').reset();
							this.clearReperageLayer();
						},
						failure: function(form, action) {
							switch (action.failureType) {
								case Ext.form.Action.CLIENT_INVALID:
									Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
									break;
								case Ext.form.Action.CONNECT_FAILURE:
									Ext.Msg.alert('Failure', 'Ajax communication failed');
									break;
								case Ext.form.Action.SERVER_INVALID:
								   Ext.Msg.alert('Failure', action.result.msg);
						   }
						},
						scope: this
					});
					this.showReperageFormDlg.hide();
				}
			},{
				text: 'Cancel',
				minWidth: '75',
				scope: this,
				handler: function() {
					this.showReperageFormDlg.hide();
				}
			}]
		});

		var showReperageFormDlg = new Ext.Window({
		   height: 200,
		   width: 400,
		   closable: true,
		   closeAction : 'hide', 
		   modal: true,
		   title: this.showReperageFormDlgTitle,
		   layout: 'fit',
		   items: [reperageFormPanel]
		});

		this.drawReperageFeatureControl = drawReperageFeatureControl;
		this.drawReperageAreaButton = drawReperageAreaButton;
		this.modifyReperageFeatureControl = modifyReperageFeatureControl;
		this.modifyReperageAreaButton = modifyReperageAreaButton;
		this.deleteOneFeatureControl = deleteOneFeatureControl;
		this.deleteOneFeatureBtn = deleteOneFeatureBtn;
		this.showReperageFormBtn = showReperageFormBtn;
		this.showReperageFormDlg = showReperageFormDlg;
		this.reperageFormPanel = reperageFormPanel;
		this.reperageRefDossText = reperageRefDossText;
		this.reperageAdrText = reperageAdrText;
		this.reperageGeomHidden = reperageGeomHidden;
		this.reperageUserHidden = reperageUserHidden;
		this.copyParcelFeatBtn = copyParcelFeatBtn;
		this.copyParcelControl = copyParcelControl;
		this.parcelLayer = parcelLayer;
		
		this.showReperageButton = showReperageButton;
		return ux.plugins.ReperageToolbox.superclass.init.apply(this, arguments);
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
	
	//Crée le bouton pour la page principale
	/** api: method[addActions]
	 */
	addActions: function() {

		var menuReperageTool = new Ext.menu.Menu({
			id: 'reperageMenu',
			showSeparator: false,
			items: [
				this.showReperageButton,
				'-',
				this.drawReperageAreaButton,
				this.copyParcelFeatBtn,
				'-',
				this.modifyReperageAreaButton,
				this.deleteOneFeatureBtn,
				'-',
				this.showReperageFormBtn
			]
		});

		this.button = new Ext.Button({
			iconCls: "star",
			tooltip: this.reperageButtonTip,
			scope: this,
			menu: menuReperageTool
		});
		
		var map = this.target.mapPanel.map;
		
		//The reperage layers
		if(map.getLayersByName(this.reperageLayerName).length > 0){
			console.error("reperage working layer : " + this.reperageLayerName + " Found ! Plugin is initialized multiple times");
		} else {
			map.addLayer(this.reperageLayer);
			map.addLayer(this.parcelLayer);
		}
		
		//Adding OL Controls
		map.addControl(this.drawReperageFeatureControl);
		map.addControl(this.modifyReperageFeatureControl);
		map.addControl(this.copyParcelControl);
		map.addControl(this.deleteOneFeatureControl);
		
		var actions = ux.plugins.ReperageToolbox.superclass.addActions.apply(this, [this.button]);
		
		this.target.on("ready", function() {
			if (this.checkLocalStorage()) {
				actions[0].enable();
			} else {
				actions[0].disable();
			}
		}, this);
		return actions;
	},
	
	
	//////////////////////////////////////Raphael créeation reperagegrid + init /// Debut
	/** api: method[initMyReperage]
	 */
	initMyReperage: function() {
		if (this.validLocalStorage) {
			if (localStorage.getItem("repuser") !== null && localStorage.getItem("repuser") != 'noname' && localStorage.getItem("repuser") != '') {
				this.username = localStorage.getItem("repuser");
			} else {
				localStorage.setItem("repuser","noname");
				this.username = 'noname';
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
			this.myReperage.setBaseParam('users', this.username);
			this.myReperage.load({params:{start:0, limit:this.nbresultbypage}});
		}
	},
	
	/** api: method[showMyReperageGrid]
	 * Shows the window with a MyReperage grid.
	 */
	showMyReperageGrid: function() {
		this.initMyReperage(); //initialise le DataStore et recupere les data mais ne met pas a jour le grid
		if(!this.myReperageGrid) { //si la grid n'exite pas on la crée
			this.initMyReperageGrid(); // atention la BBAR de la grid garde le premier username !!!
		} else if (!(this.myReperageGrid instanceof Ext.Window)) {
			this.addOutput(this.myReperageGrid);
		}
		this.myReperageGrid.show();
		this.myReperageGridPanel.getStore().reload();
	},
	
	/**
	 * private: method[initMyReperageGrid]
	 * Constructs a window with a MyReperage grid.
	 */
	initMyReperageGrid: function() {

		var lang = ((GeoExt.Lang.locale == "fr")||(GeoExt.Lang.locale == "fr-be")||(GeoExt.Lang.locale == "fr-BE")||(GeoExt.Lang.locale == "fr-fr"))?"FR":"FR";
		lang = ((GeoExt.Lang.locale == "nl")||(GeoExt.Lang.locale == "nl-be")||(GeoExt.Lang.locale == "nl-BE")||(GeoExt.Lang.locale == "nl-nl"))?"NL":lang;
		//lang = ((GeoExt.Lang.locale == "en")||(GeoExt.Lang.locale == "en-gb")||(GeoExt.Lang.locale == "en-us")||(GeoExt.Lang.locale == "en-US")||(GeoExt.Lang.locale == "en-en"))?"EN":lang;

		
		this.myReperageGridPanel = new Ext.grid.GridPanel({
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
				header: this.myReperageGridPanel_docref_header,
				dataIndex: 'docref',
				width: 150,
				sortable: true
			},
			{
				header: this.myReperageGridPanel_adress_header,
				dataIndex: 'adress',
				width: 200
			},
			{
				header: this.myReperageGridPanel_state_header,
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
				header: this.myReperageGridPanel_startdate_header,
				width: 125,
				sortable: true,
				renderer: Ext.util.Format.dateRenderer('d-m-y H:i'),
				dataIndex: 'startdate'
			},
			{
				header: this.myReperageGridPanel_enddate_header,
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
						tooltip: this.myReperageGridPanel_docx_tooltip,
						handler: function(grid, rowIndex, colIndex) {
							var rec = grid.getStore().getAt(rowIndex);
							if(rec.get('state') == "DONE"){
								var u = localStorage.getItem("repuser");
								window.open("/WebReperage/res/reperage/"+rec.get('id')+".doc?lang="+lang+"&users="+u);
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
						tooltip: this.myReperageGridPanel_pdf_tooltip,
						handler: function(grid, rowIndex, colIndex) {
							var rec = grid.getStore().getAt(rowIndex);
							if(rec.get('state') == "DONE"){
								var u = localStorage.getItem("repuser");
								window.open("/WebReperage/res/reperage/"+rec.get('id')+".pdf?lang="+lang+"&users="+u);
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
			forceLayout: true,
			
			// paging bar on the bottom
			bbar: new Ext.PagingToolbar({
				pageSize: this.nbresultbypage,
				store: this.myReperage,
				displayInfo: true,
				displayMsg: this.myReperageGridPanel_bbar_displayMsg,
				emptyMsg: this.myReperageGridPanel_bbar_emptyMsg
			})
		});
		
		var items = {
			xtype: "container",
			region: "center",
			layout: "fit",
			//height: 'auto',
			items: [this.myReperageGridPanel]
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
					this.myReperageGridPanel.getSelectionModel().clearSelections();
				},
				scope: this
			}
		}
		));
		if (Cls === Ext.Panel) {
			this.addOutput(this.myReperageGrid);
		}
		
		var task = {
			run: function(){
				this.myReperageGridPanel.getStore().reload();
			},
			interval: 10000, //10 second
			scope: this
		}
		Ext.TaskMgr.start(task);
	},
	//////////////////////////////////////Raphael créeation reperagegrid + init /// Fin
	
	
	//Ajoute le(s) layer(s) au panel
	raiseLayers: function() {
		var map = this.target.mapPanel.map;

		map.setLayerIndex(this.parcelLayer, 98);
		map.setLayerIndex(this.reperageLayer, 99);
	},
	
	//suprime les polygones du reperage
	clearReperageLayer: function() {
		this.reperageLayer.removeAllFeatures();	
	},
	
	//affiche le formulaire d'envois de reperage
	showReperageForm: function() {
		this.showReperageFormDlg.show();
		
		//Get the adress if any
		for(var tool in this.target.tools) {
			if(this.target.tools[tool].ptype == 'ux_BrugisSearcher') {
				var adrValue = this.target.tools[tool].lastvalue;
				if(adrValue){
					this.reperageAdrText.setValue(adrValue);
				}
				this.target.tools[tool].lastvalue = null;
				break;
			}
		}
		
		//Get the geometry
		this.reperageGeomHidden.setValue(this.serializeReperageArea());
		//Get the user
		this.reperageUserHidden.setValue(this.username);
	},
	
	serializeReperageArea: function() {
		var resultGeom = null;
		var wtkResult = null;
		
		var olParser = new jsts.io.OpenLayersParser();
		var jstsWKTWriter = new jsts.io.WKTWriter();
		
		for(var cpt = 0; cpt < this.reperageLayer.features.length; cpt ++) 
		{
			var olGeom = this.reperageLayer.features[cpt].geometry;
			var jstsGeom = olParser.read(olGeom);
			if(resultGeom) {
				resultGeom = resultGeom.union(jstsGeom);
			} else {
				resultGeom = jstsGeom;
			}
		}
		
		this.clearReperageLayer();
		
		if(resultGeom) {
			var myRes = olParser.write(resultGeom);
			var unionOutput = new OpenLayers.Feature.Vector(myRes, null, { fillColor: 'green', fillOpacity: 1});
			this.reperageLayer.addFeatures([unionOutput]);
			
			wtkResult = jstsWKTWriter.write(resultGeom);
		}
		
		return wtkResult;
	},
	
	addFeatureToReperageLayer: function(evt) {
		if (evt.features && evt.features.length) {
			this.reperageLayer.addFeatures(evt.features);
		} else {
			//console.log("Not A feature !");
		}
	},
	
	removeFeatureToReperageLayer: function(evt){
		if (evt.feature) {
			this.reperageLayer.removeFeatures([evt.feature]);
		} else {
			//console.log("Not A feature !");
		}
	}
});

Ext.preg('ux_ReperageToolbox', ux.plugins.ReperageToolbox);