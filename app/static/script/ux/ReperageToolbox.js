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
 *    Plugin for add reperage toolbox to the viewer.  The underlying
 *    tools (if any) can be configured inside this plugin
 *    ``outputConfig`` property. 
 */
ux.plugins.ReperageToolbox = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = ux_ReperageToolbox */
    ptype: "ux_ReperageToolbox",
	
    // Begin i18n.
	showReperageGrid: "ShowReperageGrid",
    clearReperageLayerBtnToolTip: "Cleanup",
    drawReperageAreaToolTip: "DrawArea",
    showReperageFormBtnToolTip: "showReperageForm",
    modifyReperageAreaToolTip: "ModifyArea",
    copyParcelFeatBtnToolTip : "CopyParcel",
//    copyBuildingFeatBtnToolTip: "CopyBuilding",
    deleteOneFeatureBtnToolTip: "DeleteOneFeature",
	reperageButtonTip: "ReperageToolBox",
    // End i18n.
	
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
	
	/** api: config[reperageUserName]
     *  ``String``
     *  Saving value of user UUID
     */
    reperageUserName: "",
	
	/** private: method[constructor]
	 */
	constructor: function(config) {
console.log("ReperageToolbox.constructor");
		this.checkLocalStorage();
		ux.plugins.MyReperage.superclass.constructor.apply(this, arguments);
	},
	
	/** private: method[destroy]
     */
    destroy: function() {
console.log("ReperageToolbox.destroy");
        this.button = null;
        gxp.plugins.MyReperage.superclass.destroy.apply(this, arguments);
    },
	
	init: function(target) {
console.log("ReperageToolbox.init");
		this.id = "toolbarReperage"; //TODO : rename value => toolboxReperage
		
		
		//création du vecteur qui contiendra les polygone dessiner
    	this.reperageLayer = new OpenLayers.Layer.Vector(this.reperageLayerName,{
    		rendererOptions: { zIndexing: true }
    	});
		//this.reperageLayer.displayInLayerSwitcher = false;
		//TODO: Show reperage (prendre le MyReperage.js ???)
console.log("ReperageToolbox.showReperageButton");
		var showReperageButton = new ux.plugins.MyReperage();
console.log("ReperageToolbox.showReperageButton end");
		
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
		            this.drawReperageFeatureControl.activate();
		        } else {
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
		            this.modifyReperageFeatureControl.activate();
		        } else {
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
		            this.deleteOneFeatureControl.activate();
		        } else {
		            this.deleteOneFeatureControl.deactivate();
		        }
		    }
		});			
		//TODO

    	//Copy 1 parcel
    	//Warning : the getfeatureInfo need a proxy defined in order to work
    	var parcelLayer = new OpenLayers.Layer.WMS("parcels",
            "http://www.mybrugis.irisnet.be/geoserver/wms", 
            {'layers': 'AATL:Parcelle_2013', transparent: true, format: 'image/png'},
            {isBaseLayer: false}
        );
		

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
		            this.copyParcelControl.activate();
		        } else {
		            this.copyParcelControl.deactivate();
		        }
		    }
    	});

//On ne fais plus de reperage sur batiment mais que sur parcelle
//    	//Copy 1 Building
//    	var buildingsLayer = new OpenLayers.Layer.WMS("buildings",
//            "http://www.mybrugis.irisnet.be/geoserver/wms", 
//            {'layers': 'AATL:Batiment_2013', transparent: true, format: 'image/png'},
//            {isBaseLayer: false}
//        );
//
//        var copyBuildingControl = new OpenLayers.Control.WMSGetFeatureInfo({
//            url: 'http://www.mybrugis.irisnet.be/geoserver/wms', 
//            title: 'Identify features by clicking',
//            layers: [buildingsLayer],
//            queryVisible: true,
//            infoFormat: "application/vnd.ogc.gml"
//        });
//
//        copyBuildingControl.events.register("getfeatureinfo", this, this.addFeatureToReperageLayer);
//
//    	var copyBuildingFeatBtn = new Ext.Button({
//            enableToggle: true,
//            allowDepress: true,
//            tooltip: this.copyBuildingFeatBtnToolTip,
//            iconCls: "ux-icon-copybuilding",
//            toggleGroup: toggleGroup,
//            scope: this,
//		    toggleHandler: function(btn,state){
//		        if (state) {
//		            this.copyBuildingControl.activate();
//		        } else {
//		            this.copyBuildingControl.deactivate();
//		        }
//		    }
//    	});
		
		
//		/////////////////Raph old reperage//////////DEB//////////
//		var oldrepLayer = new OpenLayers.Layer.WMS("reperagelite",
//            "/geoserver/wms", 
//            {'layers': 'AATL:reperagelite', transparent: true, format: 'image/png'},
//            {isBaseLayer: false}
//        );
//		/////////////////Raph old reperage//////////FIN//////////

    	
    	//Clear Layer
    	var clearReperageLayerBtn = new Ext.Button({
            tooltip: this.clearReperageLayerBtnToolTip,
            iconCls: "ux-icon-deletereperage",
            disabled: false,
            handler: function() {
            	this.clearReperageLayer();
            },
            scope: this
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
            fieldLabel: 'Type de reperage',
            hiddenName:'reptype',
            store: dataRepType,
            valueField:'id',
            displayField:'title',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            emptyText:'Choisissez un reperage',
            selectOnFocus:true,
            allowBlank: false,
            width:200,
            editable: false,
            forceSelection: true
        });
		
		var reperageRefDossText = new Ext.form.TextField({
			id: 'valuereperageRefDossText',
        	fieldLabel: 'Référence du dossier',
        	name: 'refdossier',
        	allowBlank: false,
        	width: 200
        });

        var reperageAdrText = new Ext.form.TextField({
			id: 'valuereperageAdrText',
        	fieldLabel: 'Adresse',
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
           title: 'Reperage',
           layout: 'fit',
           items: [reperageFormPanel]
        });

		this.drawReperageFeatureControl = drawReperageFeatureControl;
		this.drawReperageAreaButton = drawReperageAreaButton;
		this.modifyReperageFeatureControl = modifyReperageFeatureControl;
		this.modifyReperageAreaButton = modifyReperageAreaButton;
		this.deleteOneFeatureControl = deleteOneFeatureControl;
		this.deleteOneFeatureBtn = deleteOneFeatureBtn;
        this.clearReperageLayerBtn = clearReperageLayerBtn;
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
//		this.oldrepLayer = oldrepLayer;
//        this.copyBuildingFeatBtn = copyBuildingFeatBtn;
//        this.buildingsLayer = buildingsLayer;
//        this.copyBuildingControl = copyBuildingControl;
		
		this.showReperageButton = showReperageButton;
console.log("ReperageToolbox.init end");
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
console.log("ReperageToolbox.addActions");

		var menuReperageTool = new Ext.menu.Menu({
			id: 'reperageMenu',
			items: [
				this.showReperageButton,
				'-',
				this.drawReperageAreaButton,
				this.copyParcelFeatBtn,
				//this.copyBuildingFeatBtn,
				'-',
				this.modifyReperageAreaButton,
				this.deleteOneFeatureBtn,
				this.clearReperageLayerBtn,
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
		
        /* var commonOptions = {
            tooltip : this.reperageButtonTip,
            disabled: true,
            iconCls: "star"
        };
        var options = Ext.apply(commonOptions, {
			handler : this.addOutput,
			scope: this
		}); */
		
		var map = this.target.mapPanel.map;
		
		//Adding OL Controls
    	map.addControl(this.drawReperageFeatureControl);
    	map.addControl(this.modifyReperageFeatureControl);
    	map.addControl(this.copyParcelControl);
//    	map.addControl(this.copyBuildingControl);
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
	
	//permet de placer les differentséléments sur le site web
	/** api: method[addOutput]
     */
	/* addOutput: function(config) {
console.log("ReperageToolbox.addOutput");
		
		var menuReperageTool = new Ext.menu.Menu({
			id: 'reperageMenu',
			items: [
				//this.showReperageButton,
				//'-',
				this.drawReperageAreaButton,
				this.copyParcelFeatBtn,
				//this.copyBuildingFeatBtn,
				'-',
				this.modifyReperageAreaButton,
				this.deleteOneFeatureBtn,
				this.clearReperageLayerBtn,
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
		
		//Adding OL Controls
    	map.addControl(this.drawReperageFeatureControl);
    	map.addControl(this.modifyReperageFeatureControl);
    	map.addControl(this.copyParcelControl);
//    	map.addControl(this.copyBuildingControl);
    	map.addControl(this.deleteOneFeatureControl);
		
		
		
		return ux.plugins.ReperageToolbox.superclass.addOutput.call(this, [this.button]);
	}, */
	
	//suprime les polygones du reperage
	clearReperageLayer: function() {
console.log("ReperageToolbox.clearReperageLayer");
		this.reperageLayer.removeAllFeatures();	
    },
	
	//affiche le formulaire d'envois de reperage
	showReperageForm: function() {
console.log("ReperageToolbox.showReperageForm");
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
		this.reperageUserHidden.setValue(this.reperageUserName);
    },
	
	serializeReperageArea: function() {
console.log("ReperageToolbox.serializeReperageArea");
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
console.log("ReperageToolbox.addFeatureToReperageLayer");
    	if (evt.features && evt.features.length) {
    		this.reperageLayer.addFeatures(evt.features);
    	} else {
    		//console.log("Not A feature !");
    	}
    },
	
    removeFeatureToReperageLayer: function(evt){
console.log("ReperageToolbox.removeFeatureToReperageLayer");
    	if (evt.feature) {
    		this.reperageLayer.removeFeatures([evt.feature]);
    	} else {
    		//console.log("Not A feature !");
    	}
    }
});

Ext.preg('ux_ReperageToolbox', ux.plugins.ReperageToolbox);