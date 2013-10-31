
///////////////////////////////////////////////////////////////////////////////
// DocG - Nouveau controleur pour intercepter le click même sur une tablette //

OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, { 
	defaultHandlerOptions: { 
		'single': true, 
		'double': false, 
		'pixelTolerance': 0, 
		'stopSingle': false, 
		'stopDouble': false
	},
	initialize: function(options) {
		this.handlerOptions = OpenLayers.Util.extend(
			{}, this.defaultHandlerOptions
		);
		OpenLayers.Control.prototype.initialize.apply(
			this, arguments
		);
		this.handler = new OpenLayers.Handler.Click(
			this, {
				'click': this.trigger
			}, this.handlerOptions
		);
	}
});

///////////////////////////////////////////////////////////////////////////////


GeoExplorer.Brugis = Ext.extend(GeoExplorer, {

    /** api: config[cookieParamName]
     *  ``String`` The name of the cookie parameter to use for storing the
     *  logged in user.
     */
    cookieParamName: 'geoexplorer-user',

    // Begin i18n.
    saveMapText: "Save Map",
    exportMapText: "Publish Map",
    toolsTitle: "Choose tools to include in the toolbar:",
    previewText: "Preview",
    backText: "Back",
    nextText: "Next",
    loginText: "Login",
    logoutText: "Logout, {user}",
    loginErrorText: "Invalid username or password.",
    userFieldText: "User",
    passwordFieldText: "Password", 
    saveErrorText: "Trouble saving: ",
    dataTabTitleText: "Composition",
	treeTabTitleText: "Data",
    legendTabTitleText: "Legend",
	frenchText: "en francais",
	deutchText: "in het nederlands",
	englishText: "in english",
	disclaimerText:  "Indicative map - Realized by BruGIS team with Brussels UrbIS",
	wmsTreeLegendSourceText: "localhost:8080/geoserver/www/wmsaatl/wmsaatl.xml",
	//wmsTreeLegendSourceText: "svappmavw019:8080/geoserver/www/wmsaatl/wmsaatl.xml",
	//wmsTreeLegendSourceText: "http://mybrugis.irisnetlab.be/geoserver/www/wmsaatl/wmsaatl.xml",
	//wmsTreeLegendSourceText: "http://www.mybrugis.irisnet.be/geoserver/www/wmsaatl/wmsaatl.xml",
    // End i18n.

    constructor: function(config) {
        // Starting with this.authorizedRoles being undefined, which means no
        // authentication service is available
        if (config.authStatus === 401) {
            // user has not authenticated or is not authorized
            this.authorizedRoles = [];
        } else if (config.authStatus !== 404) {
            // user has authenticated
            this.authorizedRoles = ["ROLE_ADMINISTRATOR"];
        }
        // should not be persisted or accessed again
        delete config.authStatus;

        config.tools = [
            {
                ptype: "gxp_layermanager",
				id: "layermanager",
                outputConfig: {
                    id: "layers",
                    tbar: []
                },
                outputTarget: "dataTab"
            }, {
                ptype: "ux_addlayers",
                actionTarget: "layers.tbar",
                upload: true,
				skipSourceIdList: ["GeoWebCacheLocal"]
            }, {
                ptype: "gxp_removelayer",
                actionTarget: ["layers.tbar", "layers.contextMenu"]
            }, {
                ptype: "gxp_layerproperties",
                actionTarget: ["layers.tbar", "layers.contextMenu"]
            }, {
                ptype: "gxp_zoomtolayerextent",
                actionTarget: {target: "layers.contextMenu", index: 0}
            }, {
                ptype: "gxp_navigation", 
				toggleGroup: this.toggleGroup,
                actionTarget: {target: "paneltbar", hidden: false, index: 6},
				autoActivate: false
            }, {
                ptype: "ux_wmsgetfeatureinfo", 
				toggleGroup: this.toggleGroup,
				format: "grid",
                actionTarget: {target: "paneltbar", index: 7}
            }, {
                ptype: "gxp_featuremanager",
                id: "featuremanager",
                maxFeatures: 20,
                paging: false
            }, {
                ptype: "gxp_featureeditor",
                featureManager: "featuremanager",
                autoLoadFeature: true,
                toggleGroup: this.toggleGroup,
                actionTarget: {target: "paneltbar", index: 8}
            }, {
				ptype: "ux_BrugisSearcher",
				outputTarget: "paneltbar",
				outputConfig: {
					map: null,
					width: 300
				}
			}, {
                ptype: "gxux_measure", toggleGroup: this.toggleGroup,
                controlOptions: {immediate: true,
								 outputTarget: "bbar_measure"},
                actionTarget: {target: "paneltbar", index: 10}
            }, {
                ptype: "gxp_zoom",
                actionTarget: {target: "paneltbar", index: 11}
            }, {
                ptype: "gxp_navigationhistory",
                actionTarget: {target: "paneltbar", index: 13}
            }, {
                ptype: "gxp_zoomtoextent",
                actionTarget: {target: "paneltbar", index: 15}
            }, {
                ptype: "ux_geolocator", 
				controlOptions: {id: "geolocatecontrol",
								 bind: false,
								 watch: true,
								 geolocationOptions: {enableHighAccuracy: true, maximumAge: 0, timeout: 7000}},
                actionTarget: {target: "paneltbar", index: 16}
            }, {
                ptype: "ux_print",
                //customParams: {},
                //customParams: {outputFilename: 'GeoExplorer-print'},
                printService: config.printService,
                actionTarget: {target: "paneltbar", index: 5}
            }, {
				ptype: "ux_wmstreelegend",
				outputTarget: "treeTab",
				sourceName : "BruGIS WMS - Geoserver",
				outputConfig: {
					id: "wmsTree",
					url : this.wmsTreeLegendSourceText
				}
			}, {
				ptype: "gxp_featuregrid",
				featureManager: "featuremanager",
				outputConfig: {
					id: "featuregrid",
					autoExpand: true,
					autoCollapse: true,
					showTotalResults: true,
					alwaysDisplayOnMap: true,
					selectOnMap: true
				},
				outputTarget: "south",
				autoExpand: true,
				autoCollapse: true,
				showTotalResults: true,
				alwaysDisplayOnMap: true,
				selectOnMap: true
			}, {
				ptype: "ux_queryform",
				featureManager: "featuremanager",
				id: "uxQueryForm",
				outputConfig: {
					title: "Query",
					spatialQuery: false,
					width: 320
				},
				needsAuthorization: true,
				actionTarget: ["layers.tbar", "layers.contextMenu"],
				appendActions: false
			}
        ];
        delete config.apiKeys;
        
        GeoExplorer.Composer.superclass.constructor.apply(this, arguments);
		
    },

    /** api: method[destroy]
     */
    destroy: function() {
        this.loginButton = null;
        GeoExplorer.Composer.superclass.destroy.apply(this, arguments);
    },

	 /** private: method[setCookieValue]
     *  Set the value for a cookie parameter
     */
    setCookieValue: function(param, value) {
        document.cookie = param + '=' + escape(value);
    },

    /** private: method[clearCookieValue]
     *  Clear a certain cookie parameter.
     */
    clearCookieValue: function(param) {
        document.cookie = param + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    },


    /** private: method[getCookieValue]
     *  Get the value of a certain cookie parameter. Returns null if not found.
     */
    getCookieValue: function(param) {
        var i, x, y, cookies = document.cookie.split(";");
        for (i=0; i < cookies.length; i++) {
            x = cookies[i].substr(0, cookies[i].indexOf("="));
            y = cookies[i].substr(cookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==param) {
                return unescape(y);
            }
        }
        return null;
    },

    /** private: method[logout]
     *  Log out the current user from the application.
     */
    logout: function() {
        this.clearCookieValue("JSESSIONID");
        this.clearCookieValue(this.cookieParamName);
        this.setAuthorizedRoles([]);
        Ext.getCmp('paneltbar').items.each(function(tool) {
            if (tool.needsAuthorization === true) {
                tool.disable();
            }
        });
        this.showLogin();
		window.location.reload();
    },

 
    /** private: method[authenticate]
     * Show the login dialog for the user to login.
     */
    authenticate: function() {
        var panel = new Ext.FormPanel({
            url: "../login/",
            frame: true,
            labelWidth: 80,
            defaultType: "textfield",
            errorReader: {
                read: function(response) {
                    var success = false;
                    var records = [];
                    if (response.status === 200) {
                        success = true;
                    } else {
                        records = [
                            {data: {id: "username", msg: this.loginErrorText}},
                            {data: {id: "password", msg: this.loginErrorText}}
                        ];
                    }
                    return {
                        success: success,
                        records: records
                    };
                }
            },
            items: [
			{
                fieldLabel: this.userFieldText,
                name: "username",
                allowBlank: false,
                listeners: {
                    render: function() {
                        this.focus(true, 100);
                    }
                }
            }, {
                fieldLabel: this.passwordFieldText,
                name: "password",
                inputType: "password",
                allowBlank: false
            }],
            buttons: [{
                text: this.loginText,
                formBind: true,
                handler: submitLogin,
                scope: this
            }],
            keys: [{ 
                key: [Ext.EventObject.ENTER], 
                handler: submitLogin,
                scope: this
            }]
        });

        function submitLogin() {

            panel.buttons[0].disable();
            panel.getForm().submit({
                success: function(form, action) {
                    Ext.getCmp('paneltbar').items.each(function(tool) {
                        if (tool.needsAuthorization === true) {
                            tool.enable();
                        }
                    });
                    var user = form.findField('username').getValue();
                    this.setCookieValue(this.cookieParamName, user);
                    this.setAuthorizedRoles(["ROLE_ADMINISTRATOR"]);
                    this.showLogout(user);
                    win.un("beforedestroy", this.cancelAuthentication, this);
                    win.close();
                },
                failure: function(form, action) {
                    this.authorizedRoles = [];
                    panel.buttons[0].enable();
                    form.markInvalid({
                        "username": this.loginErrorText,
                        "password": this.loginErrorText
                    });
                },
                scope: this
            });
        }
                
        var win = new Ext.Window({
            title: this.loginText,
            layout: "fit",
            width: 255,
            height: 130,
            plain: true,
            border: false,
            modal: true,
            items: [panel],
            listeners: {
                beforedestroy: this.cancelAuthentication,
                scope: this
            }
        });
        win.show();
    },

    /**
     * private: method[applyLoginState]
     * Attach a handler to the login button and set its text.
     */
    applyLoginState: function(iconCls, text, handler, scope) {
        this.loginButton.setIconClass(iconCls);
        this.loginButton.setText(text);
        this.loginButton.setHandler(handler, scope);

    },

    /** private: method[showLogin]
     *  Show the login button.
     */
    showLogin: function() {
        var text = this.loginText;
        var handler = this.authenticate;
        this.applyLoginState('login', text, handler, this);
    },

    /** private: method[showLogout]
     *  Show the logout button.
     */
    showLogout: function(user) {
        var text = new Ext.Template(this.logoutText).applyTemplate({user: user});
        var handler = this.logout;
        this.applyLoginState('logout', text, handler, this);
    },
    
    initPortal: function() {
        var westPanel = new Ext.Panel({
			id: "west",
			region: "west",
			animCollapse: true,
			collapsible: true,
			collapsed: false,
			maxWidth: 400,
			minWidth: 200,
			width: 288,
			layout: {
				type: 'vbox',
				align : 'stretch',
				pack  : 'start'
			},
			items : [
			{
				id: "htmlLogo",
				xtype: "container",
				html: '<img src=../theme/app/img/brugisBrussels_small.png />',
				height: 100
			}, 
			{
				id: "west2",
				xtype: "tabpanel",
				activeTab: 0,
				flex:1,
				deferredRender:false,
				items : [{
					id: "treeTab",
					title: this.treeTabTitleText,
					xtype: "container",
					autoScroll: true
				}, {
					id: "dataTab",
					title: this.dataTabTitleText,
					xtype: "container",
					autoScroll: true
				}]
			}]
        });

        this.toolbar = new Ext.Toolbar({
            disabled: true,
            id: 'paneltbar',
            items: this.createTools()
        });
		
		///////////////////////DOCG////////////////////////////////////////////
		// creation of the bottom toolbar
        this.bottomtoolbar = new Ext.Toolbar({
            disabled: true,
            id: 'panelbbar',
            items: this.createBottomTools()
        });
		///////////////////////DOCG////////////////////////////////////////////
		
        this.on("ready", function() {
            // enable only those items that were not specifically disabled
            var disabled = this.toolbar.items.filterBy(function(item) {
                return item.initialConfig && item.initialConfig.disabled;
            });
            this.toolbar.enable();
            disabled.each(function(item) {
                item.disable();
            });
			
			// DOCG // idem dessus, mais pour la bottomToolbar
            var bottomDisabled = this.bottomtoolbar.items.filterBy(function(item) {
                return item.initialConfig && item.initialConfig.disabled;
            });
            this.bottomtoolbar.enable();
            bottomDisabled.each(function(item) {
                item.disable();
            });
			
			OpenLayers.Projection.defaults["EPSG:31370"] = {
				units:"m", maxExtent:[0,0,300000,300000]
			};

			if(this.tools.featuremanager)
			{
				var params = Ext.urlDecode(location.search.substring(1));
				
				var currentLangage = GeoExt.Lang.locale;
				
				if(params.qry && params.val && ux.qry && ux.qry[currentLangage] && ux.qry[currentLangage][params.qry]) {
				
				var sourceName = ux.qry[currentLangage][params.qry]["source_name"];
				var layerName = ux.qry[currentLangage][params.qry]["layer_name"];
				var propertyName = ux.qry[currentLangage][params.qry]["property_name"];
				var propertyValue = params.val;
				
				var theFeatureManager = this.tools.featuremanager;
				var source = this.layerSources[sourceName];
				
				var store = source.store;
				source.store.load({callback: (function() {
					var myLayer = null;
					
					store.each(function(rec,b,c) {
						if(rec.data.name == layerName) {
							myLayer = rec;
						}
					},this);

					var record = source.createLayerRecord({
							name : myLayer.data.name,
							title: myLayer.data.title,
							url: myLayer.data.url,
							source: source.id,
							queryable: true
					});
					
					// DocG - 20131002 - If some dedicated map is given too, the propertyValue contains a / at its end... Maybe good to suppress it?
					propertyValue = propertyValue.replace("/", "");
					
					if(record != null) {	
						theFeatureManager.on("layerchange",  function(rec,schema){
								//Creation du spatial Filter
								var ogcFilter = new OpenLayers.Filter.Comparison({
									type: OpenLayers.Filter.Comparison.EQUAL_TO,
									property: propertyName,
									value: propertyValue
								});
								
								theFeatureManager.loadFeatures(ogcFilter, function(features){
									//Features sélectionnée et chargée, on zoom sur le résultat
									var bounds, geom;
									//console.log(bounds);
									for (var i=features.length-1; i>=0; --i) {
										geom = features[i].geometry;
										if (geom) {
											extent = geom.getBounds();
											if (bounds) {
												bounds.extend(extent);
												//console.log("bounds");
											} else {
												bounds = extent.clone();
												//console.log("else");
												//console.log(bounds);
											}
										}
									}
									if(bounds) {
										// DOCG 2013/08/05 Afin de zoomer au 1/1.000 et pas au 1/50 si l'extent est nul
										if (bounds.getHeight() == 0){
											bounds.bottom 	= bounds.bottom - 60;
											bounds.top 		= bounds.top + 60;
											bounds.left 	= bounds.left - 70;
											bounds.right	= bounds.right +70;
										}
										this.mapPanel.map.zoomToExtent(bounds);
									}
								},this);				
							},this,{single: true});
						if(theFeatureManager.setLayer(record)){
							//console.log("LayerChanged");
						} else {
							//console.log("LayerNotChanged");
						}
					} else {
						//console.log("LayerNotFound");
					}
				}).createDelegate(this)});
				}
			}
			
			///////////////////////DOCG////////////////////////////////////////////
			// On applique le resize au couches de fond, Alleluyah!!!!!!!!!!!!!!!!!
			for (var layerConfig in app.initialConfig.map.layers) {
				if (app.initialConfig.map.layers[layerConfig].source){
					try {
						app.getLayerRecordFromMap(app.initialConfig.map.layers[layerConfig]).getLayer().transitionEffect = 'resize';
						app.getLayerRecordFromMap(app.initialConfig.map.layers[layerConfig]).getLayer().removeBackBufferDelay = 200;
					} catch(ex) {
						console.log(ex);
					}
				} 
			}
		});
 		
		///////////////////////DOCG////////////////////////////////////////////
		// Show the x y coordinates of the event
		var showCoordinates = function(e) {
			var mapPanel = Ext.getCmp("mymap");
            var lonLat = mapPanel.map.getLonLatFromPixel(e.xy);
			if (lonLat) {
				if (mapPanel.displayProjection) {
					lonLat.transform(mapPanel.getProjectionObject(), mapPanel.displayProjection);
				};
				var scaleRes = 0;
				var mapResolution = mapPanel.map.resolution;
				if (mapResolution <= 0.28  && mapResolution > 0.056) {
					scaleRes = 1;
				}
				else if (mapResolution <= 0.056) {
					scaleRes = 2;
				};
				Ext.getCmp("x-coord").setText("X: " + lonLat.lon.toFixed(scaleRes) +" m");
				Ext.getCmp("y-coord").setText("Y: " + lonLat.lat.toFixed(scaleRes) +" m");
			};
        };
		// What we do when the mouse moves
        this.mapPanel.map.events.register("mousemove", this.mapPanel.map, showCoordinates);
		///////////////////////DOCG////////////////////////////////////////////
		
		///////////////////////DOCG////////////////////////////////////////////
		// touchend interception
		var showPosition = function(e) {
			// we want this only if we are under a tablet
			if (e.type == "touchend") {
				var mapPanel = Ext.getCmp("mymap");
				var vector = "";
				if (mapPanel.map.getLayersByName('location').length > 0) {
					vector = mapPanel.map.getLayersByName('location')[0];
				}
				else 
				{
					vector = new OpenLayers.Layer.Vector("location");
					mapPanel.map.addLayer(vector);
				};
				vector.removeAllFeatures();
				vector.addFeatures([
					new OpenLayers.Feature.Vector(
						new OpenLayers.Geometry.Point(mapPanel.map.getLonLatFromPixel(e.xy).lon, mapPanel.map.getLonLatFromPixel(e.xy).lat),
						{},
						{
							graphicName: 'cross',
							strokeColor: '#FF0000',
							strokeWidth: 0.8,
							fillOpacity: 0,
							pointRadius: 5
						}
					)
				]);
				// the x y of the point must be shown.
				showCoordinates(e);
			}
        };
	
		///////////////////////DOCG////////////////////////////////////////////
		// Qui l'eût cru! Il fallait encore un control.click...
		var click = new OpenLayers.Control.Click({trigger: showPosition});
		this.mapPanel.map.addControl(click);
		click.activate();
		///////////////////////DOCG////////////////////////////////////////////
		
        var googleEarthPanel = new gxp.GoogleEarthPanel({
            mapPanel: this.mapPanel,
            listeners: {
                beforeadd: function(record) {
                    return record.get("group") !== "background";
                }
            }
        });
        
        // TODO: continue making this Google Earth Panel more independent
        // Currently, it's too tightly tied into the viewer.
        // In the meantime, we keep track of all items that the were already
        // disabled when the panel is shown.
        var preGoogleDisabled = [];

        googleEarthPanel.on("show", function() {
            preGoogleDisabled.length = 0;
            this.toolbar.items.each(function(item) {
                if (item.disabled) {
                    preGoogleDisabled.push(item);
                }
            });
            this.toolbar.disable();
            // loop over all the tools and remove their output
            for (var key in this.tools) {
                var tool = this.tools[key];
                if (tool.outputTarget === "map") {
                    tool.removeOutput();
                }
            }
            var layersContainer = Ext.getCmp("tree");
            var layersToolbar = layersContainer && layersContainer.getTopToolbar();
            if (layersToolbar) {
                layersToolbar.items.each(function(item) {
                    if (item.disabled) {
                        preGoogleDisabled.push(item);
                    }
                });
                layersToolbar.disable();
            }
        }, this);

        googleEarthPanel.on("hide", function() {
            // re-enable all tools
            this.toolbar.enable();
            
            var layersContainer = Ext.getCmp("tree");
            var layersToolbar = layersContainer && layersContainer.getTopToolbar();
            if (layersToolbar) {
                layersToolbar.enable();
            }
            // now go back and disable all things that were disabled previously
            for (var i=0, ii=preGoogleDisabled.length; i<ii; ++i) {
                preGoogleDisabled[i].disable();
            }

        }, this);
	
        this.mapPanelContainer = new Ext.Panel({
            layout: "card",
            region: "center",
            defaults: {
                border: false
            },
			tbar: this.toolbar,
            items: [
                this.mapPanel,
                googleEarthPanel
            ],
			bbar: this.bottomtoolbar,
            activeItem: 0
        });
		
		var queryContainer = new Ext.Panel({
            region: "south",
            id: "south",
			layout: "fit",
			split: true,
			maxHeight: 500,
			minHeight: 100,
            height: 200,
			collapsible: true,
			collapsed: true,
            animCollapse: true,
			defaults: {
				height: 200
                //border: true
            }
        });
       
        this.portalItems = [{
            region: "center",
            layout: "border",
            items: [
                this.mapPanelContainer,
                westPanel,
				queryContainer
            ]
        }];
        GeoExplorer.superclass.initPortal.apply(this, arguments);  
    },

    /**
     * api: method[createTools]
     * Create the toolbar configuration for the main view.
     */
    createTools: function() {
        var tools = GeoExplorer.Composer.superclass.createTools.apply(this, arguments);
		
        this.loginButton = new Ext.Button();
        tools.push(['->', this.loginButton]);

        //Maybe we are in debug mode
		if(this.authorizedRoles)
		{
		    // unauthorized, show login button
			if (this.authorizedRoles.length === 0) {
				this.showLogin();
			} else {
				var user = this.getCookieValue(this.cookieParamName);
				if (user === null) {
					user = "unknown";
				}
				this.showLogout(user);
			}
		}
		else
		{
			this.showLogin();
		}

        var aboutButton = new Ext.Button({
            //text: this.appInfoText,
            iconCls: "icon-about",
            handler: this.displayAppInfo,
            scope: this
        });

        tools.unshift("-");
        tools.unshift(new Ext.Button({
            tooltip: this.exportMapText,
            needsAuthorization: true,
            disabled: !this.isAuthorized(),
            handler: function() {
                this.save(this.showEmbedWindow);
            },
            scope: this,
            iconCls: 'icon-export'
        }));
        tools.unshift(new Ext.Button({
            tooltip: this.saveMapText,
            needsAuthorization: true,
            disabled: !this.isAuthorized(),
            handler: function() {
                this.save(this.showUrl);
            },
            scope: this,
            iconCls: "icon-save"
        }));
        tools.unshift("-");
        tools.unshift(aboutButton);
        return tools;
    },

	///////////////////////////////////////////////////////////////////////////
    /**
     * api: method[createBottomTools]
     * Create the bottom toolbar configuration for the main view.
     */
    createBottomTools: function() {
        var tools = GeoExplorer.Composer.superclass.createTools.apply(this, arguments);
		
		tools.unshift({
					id: 'bbar_measure',
					text: "",
					width: 100,
					xtype: "tbtext"
				});
		tools.unshift("-");
		tools.unshift({
					id: 'y-coord',
					text: "Y:",
					width: 100,
					xtype: "tbtext"
				});
		tools.unshift({
					id: 'x-coord',
					text: "X:",
					width: 100,
					xtype: "tbtext"
				});
		tools.push(['->', {
						id: 'disclaimerText',
						text: this.disclaimerText,
					    width: 300,
					    xtype: "tbtext"
						}
				]);
        return tools;
    },
	///////////////////////////////////////////////////////////////////////////

    /** private: method[openPreview]
     */
    openPreview: function(embedMap) {
        var preview = new Ext.Window({
            title: this.previewText,
            layout: "fit",
            resizable: false,
            items: [{border: false, html: embedMap.getIframeHTML()}]
        });
        preview.show();
        var body = preview.items.get(0).body;
        var iframe = body.dom.firstChild;
        var loading = new Ext.LoadMask(body);
        loading.show();
        Ext.get(iframe).on('load', function() { loading.hide(); });
    },

    /** private: method[save]
     *
     * Saves the map config and displays the URL in a window.
     */ 
    save: function(callback, scope) {
        var configStr = Ext.util.JSON.encode(this.getState());
        var method, url;
        if (this.id) {
            method = "PUT";
            url = "../maps/" + this.id;
        } else {
            method = "POST";
            url = "../maps/";
        }
        OpenLayers.Request.issue({
            method: method,
            url: url,
            data: configStr,
            callback: function(request) {
                this.handleSave(request);
                if (callback) {
                    callback.call(scope || this);
                }
            },
            scope: this
        });
    },
        
    /** private: method[handleSave]
     *  :arg: ``XMLHttpRequest``
     */
    handleSave: function(request) {
        if (request.status == 200) {
            var config = Ext.util.JSON.decode(request.responseText);
            var mapId = config.id;
            if (mapId) {
                this.id = mapId;
                window.location.hash = "#maps/" + mapId;
            }
        } else {
            throw this.saveErrorText + request.responseText;
        }
    },

    /** private: method[showEmbedWindow]
     */
    showEmbedWindow: function() {
       var validAPIKey = false;
       for (var key in this.tools) {
           var tool = this.tools[key];
           if (tool instanceof gxp.plugins.GoogleEarth) {
               validAPIKey = (tool.hasValidAPIKey() !== undefined);
           }
       }
       for (var i=0, len=this.viewerTools.length; i<len; ++i) {
           if (this.viewerTools[i].ptype === gxp.plugins.GoogleEarth.prototype.ptype) {
               this.viewerTools[i].disabled = !validAPIKey;
               this.viewerTools[i].checked = validAPIKey;
           }
       } 
       var toolsArea = new Ext.tree.TreePanel({title: this.toolsTitle, 
           autoScroll: true,
           root: {
               nodeType: 'async', 
               expanded: true, 
               children: this.viewerTools
           }, 
           rootVisible: false,
           id: 'geobuilder-0'
       });

       var previousNext = function(incr){
           var l = Ext.getCmp('geobuilder-wizard-panel').getLayout();
           var i = l.activeItem.id.split('geobuilder-')[1];
           var next = parseInt(i, 10) + incr;
           l.setActiveItem(next);
           Ext.getCmp('wizard-prev').setDisabled(next==0);
           Ext.getCmp('wizard-next').setDisabled(next==1);
           if (incr == 1) {
               this.save();
           }
       };

       var embedMap = new gxp.EmbedMapDialog({
           id: 'geobuilder-1',
           url: "../viewer/#maps/" + this.id
       });

       var wizard = {
           id: 'geobuilder-wizard-panel',
           border: false,
           layout: 'card',
           activeItem: 0,
           defaults: {border: false, hideMode: 'offsets'},
           bbar: [{
               id: 'preview',
               text: this.previewText,
               handler: function() {
                   this.save(this.openPreview.createDelegate(this, [embedMap]));
               },
               scope: this
           }, '->', {
               id: 'wizard-prev',
               text: this.backText,
               handler: previousNext.createDelegate(this, [-1]),
               scope: this,
               disabled: true
           },{
               id: 'wizard-next',
               text: this.nextText,
               handler: previousNext.createDelegate(this, [1]),
               scope: this
           }],
           items: [toolsArea, embedMap]
       };

       new Ext.Window({
            layout: 'fit',
            width: 500, height: 300,
            title: this.exportMapText,
            items: [wizard]
       }).show();
    }

});
