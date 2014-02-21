/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @requires plugins/ClickableFeatures.js
 * @requires widgets/grid/FeatureGrid.js
 * @requires GeoExt/widgets/grid/FeatureSelectionModel.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = FeatureGrid
 */

/** api: (extends)
 *  plugins/ClickableFeatures.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: FeatureGrid(config)
 *
 *    Plugin for displaying vector features in a grid. Requires a
 *    :class:`gxp.plugins.FeatureManager`. Also provides a context menu for
 *    the grid.
 */   
ux.plugins.FeatureGrid = Ext.extend(gxp.plugins.ClickableFeatures, {
    
    /** api: ptype = gxp_featuregrid */
    ptype: "ux_featuregrid",

    /** private: property[schema]
     *  ``GeoExt.data.AttributeStore``
     */
    schema: null,

    /** api: config[showTotalResults]
     *  ``Boolean`` If set to true, the total number of records will be shown
     *  in the bottom toolbar of the grid, if available.
     */
    showTotalResults: false,
    
    /** api: config[alwaysDisplayOnMap]
     *  ``Boolean`` If set to true, the features that are shown in the grid
     *  will always be displayed on the map, and there will be no "Display on
     *  map" button in the toolbar. Default is false. If set to true, no
     *  "Display on map" button will be shown.
     */
    alwaysDisplayOnMap: false,
    
    /** api: config[displayMode]
     *  ``String`` Should we display all features on the map, or only the ones
     *  that are currently selected on the grid. Valid values are "all" and
     *  "selected". Default is "all".
     */
    displayMode: "all",
    
    /** api: config[autoExpand]
     *  ``Boolean`` If set to true, and when this tool's output is added to a
     *  container that can be expanded, it will be expanded when features are
     *  loaded. Default is false.
     */
    autoExpand: false,
    
    /** api: config[autoCollapse]
     *  ``Boolean`` If set to true, and when this tool's output is added to a
     *  container that can be collapsed, it will be collapsed when no features
     *  are to be displayed. Default is false.
     */
    autoCollapse: false,
    
    /** api: config[selectOnMap]
     *  ``Boolean`` If set to true, features can not only be selected on the
     *  grid, but also on the map, and multi-selection will be enabled. Only
     *  set to true when no feature editor or feature info tool is used with
     *  the underlying feature manager. Default is false.
     */
    selectOnMap: false,
	
    /** api: config[zoomOnSelectInGrid]
     *  ``Boolean`` If set to true, features  selected on the grid
     *  or on the map will zoom on the corresponding object on the map
	 *  DocG - 07/11/2013
     */
	zoomOnSelect: true,
    
    /** api: config[displayFeatureText]
     * ``String``
     * Text for feature display button (i18n).
     */
    displayFeatureText: "Display on map",

    /** api: config[zoomFirstPageTip]
     *  ``String``
     *  Tooltip string for first page action (i18n).
     */
    firstPageTip: "First page",

    /** api: config[previousPageTip]
     *  ``String``
     *  Tooltip string for previous page action (i18n).
     */
    previousPageTip: "Previous page",

    /** api: config[zoomFirstPageTip]
     *  ``String``
     *  Tooltip string for zoom to page extent action (i18n).
     */
    zoomPageExtentTip: "Zoom to page extent",

    /** api: config[nextPageTip]
     *  ``String``
     *  Tooltip string for next page action (i18n).
     */
    nextPageTip: "Next page",

    /** api: config[lastPageTip]
     *  ``String``
     *  Tooltip string for last page action (i18n).
     */
    lastPageTip: "Last page",

    /** api: config[totalMsg]
     *  ``String``
     *  String template for showing total number of records (i18n).
     */
    totalMsg: "Total: {0} records",
	
    /** private: method[displayTotalResults]
     */
    displayTotalResults: function() {
        var featureManager = this.target.tools[this.featureManager];
        if (this.showTotalResults === true && featureManager.numberOfFeatures !== null) {
            this.displayItem.setText(
                String.format(
                    this.totalMsg,
                    featureManager.numberOfFeatures
                )
            );
        }
    },
    	
    /** api: method[addOutput]
     */
    addOutput: function(config) {
        var featureManager = this.target.tools[this.featureManager];
        var map = this.target.mapPanel.map, smCfg;
        // a minimal SelectFeature control - used just to provide select and
        // unselect, won't be added to the map unless selectOnMap is true
        this.selectControl = new OpenLayers.Control.SelectFeature(
            featureManager.featureLayer, this.initialConfig.controlOptions
        );
		
		/** DocG - 07/11/2013
		 *	Mod added to zoom on the selected feature
		 */
		if (this.zoomOnSelect) {
			this.selectControl.onSelect = function(feat) {
				if (feat.geometry.bounds.getWidth() == 0) {
					map.setCenter([feat.geometry.bounds.left, feat.geometry.bounds.bottom], 13, false, false);
				} else {
					map.zoomToExtent(feat.geometry.bounds, true);
				}
			};
		}
		
        if (this.selectOnMap) {
             if (featureManager.paging) {
                this.selectControl.events.on({
                    "activate": function() {
                        map.events.register(
                            "click", this, this.noFeatureClick
                        );
                    },
                    "deactivate": function() {
                        map.events.unregister(
                            "click", this, this.noFeatureClick
                        );
                    },
                    scope: this
                });
            }
            map.addControl(this.selectControl);
            smCfg = {
                selectControl: this.selectControl
            };
        } else {
            smCfg = {
                selectControl: this.selectControl,
                singleSelect: false,
                autoActivateControl: false,
                listeners: {
                    "beforerowselect": function() {
                        if(this.selectControl.active || featureManager.featureStore.getModifiedRecords().length) {
                            return false;
                        }
                    },
                    scope: this
                }
            };
        }
        this.displayItem = new Ext.Toolbar.TextItem({});
		
		
		/** DocG - 07/11/2013 gxp_featuregrid peut recevoir un
		 * customRenderers. Ne peut-on pas exploiter le même
		 * fonctionnement que dans wMSGetFeatureInfoModded.js?
		 * dateFormat pourrait aussi être exploité afin de formatter
		 * correctement les dates?
		 */
        config = Ext.apply({
            xtype: "gxp_featuregrid",
            sm: new GeoExt.grid.FeatureSelectionModel(smCfg),
            autoScroll: true,
			dateFormat: "d/m/Y",
            bbar: (featureManager.paging ? [{
                iconCls: "x-tbar-page-first",
                ref: "../firstPageButton",
                tooltip: this.firstPageTip,
                disabled: true,
                handler: function() {
                    featureManager.setPage({index: 0});
                }
            }, {
                iconCls: "x-tbar-page-prev",
                ref: "../prevPageButton",
                tooltip: this.previousPageTip,
                disabled: true,
                handler: function() {
                    featureManager.previousPage();
                }
            }, {
                iconCls: "gxp-icon-zoom-to",
                ref: "../zoomToPageButton",
                tooltip: this.zoomPageExtentTip,
                disabled: true,
                hidden: featureManager.autoZoomPage,
                handler: function() {
                    var extent = featureManager.getPageExtent();
                    if (extent !== null) {
                        map.zoomToExtent(extent);
                    }
                }
            }, {
                iconCls: "x-tbar-page-next",
                ref: "../nextPageButton",
                tooltip: this.nextPageTip,
                disabled: true,
                handler: function() {
                    featureManager.nextPage();
                }
            }, {
                iconCls: "x-tbar-page-last",
                ref: "../lastPageButton",
                tooltip: this.lastPageTip,
                disabled: true,
                handler: function() {
                    featureManager.setPage({index: "last"});
                }
            }, {xtype: 'tbspacer', width: 10}, this.displayItem] : []).concat(["->"].concat(!this.alwaysDisplayOnMap ? [{
                text: this.displayFeatureText,
                enableToggle: true,
                toggleHandler: function(btn, pressed) {
                    this.selectOnMap && this.selectControl[pressed ? "activate" : "deactivate"]();
                    featureManager[pressed ? "showLayer" : "hideLayer"](this.id, this.displayMode);
                },
                scope: this
            }] : [])),
            listeners: {
                "added": function(cmp, ownerCt) {
                    function onClear() {
                        this.displayTotalResults();
                        this.selectOnMap && this.selectControl.deactivate();
                        this.autoCollapse && typeof ownerCt.collapse == "function" &&
                            ownerCt.collapse();
                    }
                    function onPopulate() {
                        this.displayTotalResults();
                        this.selectOnMap && this.selectControl.activate();
                        this.autoExpand && typeof ownerCt.expand == "function" &&
                            ownerCt.expand();
                    }
                    featureManager.on({
                        "query": function(tool, store) {
                            if (store && store.getCount()) {
                                onPopulate.call(this);
								
                            } else {
                                onClear.call(this);
                            }
                        },
                        "layerchange": onClear,
                        "clearfeatures": onClear,
                        scope: this
                    });
                },
                contextmenu: function(event) {
                    if (featureGrid.contextMenu.items.getCount() > 0) {
                        var rowIndex = featureGrid.getView().findRowIndex(event.getTarget());
                        if (rowIndex !== false) {
                            featureGrid.getSelectionModel().selectRow(rowIndex);
                            featureGrid.contextMenu.showAt(event.getXY());
                            event.stopEvent();
                        }
                    }
                },
                scope: this
            },
            contextMenu: new Ext.menu.Menu({items: []})
        }, config || {});
        var featureGrid = ux.plugins.FeatureGrid.superclass.addOutput.call(this, config);
        
        if (this.alwaysDisplayOnMap || this.selectOnMap) {
            featureManager.showLayer(this.id, this.displayMode);
        }
		
        featureManager.paging && featureManager.on({
            "beforesetpage": function() {
                featureGrid.zoomToPageButton.disable();
            },
            "setpage": function(mgr, condition, callback, scope, pageIndex, numPages) {
                var paging = (numPages > 0);
                featureGrid.zoomToPageButton.setDisabled(!paging);
                var prev = (paging && (pageIndex !== 0));
                featureGrid.firstPageButton.setDisabled(!prev);
                featureGrid.prevPageButton.setDisabled(!prev);
                var next = (paging && (pageIndex !== numPages-1));
                featureGrid.lastPageButton.setDisabled(!next);
                featureGrid.nextPageButton.setDisabled(!next);
            },
            scope: this
        });
                
        function onLayerChange() {
            var schema = featureManager.schema,
                ignoreFields = ["feature", "state", "fid"];
            //TODO use schema instead of store to configure the fields
            schema && schema.each(function(r) {
                r.get("type").indexOf("gml:") == 0 && ignoreFields.push(r.get("name"));
            });
            featureGrid.ignoreFields = ignoreFields;
            featureGrid.setStore(featureManager.featureStore, schema);
        }

        if (featureManager.featureStore) {
            onLayerChange.call(this);
        }
        featureManager.on("layerchange", onLayerChange, this);
        
        return featureGrid;
    }
                
});

Ext.preg("ux_featuregrid", ux.plugins.FeatureGrid);
