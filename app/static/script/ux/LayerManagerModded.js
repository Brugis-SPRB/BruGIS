/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @require plugins/LayerTree.js
 * @require GeoExt/plugins/TreeNodeComponent.js
 * @require GeoExt/widgets/WMSLegend.js
 * @require GeoExt/widgets/VectorLegend.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = LayerManager
 */

/** api: (extends)
 *  plugins/LayerTree.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: LayerManager(config)
 *
 *    Plugin for adding a tree of layers with their legend to a
 *    :class:`gxp.Viewer`. Also provides a context menu on layer nodes.
 */   
/** api: example
 *  If you want to change the vendor-specific legend_options parameter that 
 *  is sent to the WMS for GetLegendGraphic you can use ``baseAttrs`` on the
 *  ``loader`` config:
 *
 *  .. code-block:: javascript
 *
 *    var layerManager = new gxp.plugins.LayerManager({
 *        loader: {
 *            baseAttrs: {
 *                baseParams: {
 *                    legend_options: "fontAntiAliasing:true;fontSize:11;fontName:Arial;fontColor:#FFFFFF"
 *                }
 *            }
 *        }
 *    });
 *
 */
ux.plugins.LayerManager = Ext.extend(gxp.plugins.LayerTree, {
    
    /** api: ptype = ux_layermanager */
    ptype: "ux_layermanager",

    /** api: config[baseNodeText]
     *  ``String``
     *  Text for baselayer node of layer tree (i18n).
     */
    baseNodeText: "Base Maps",
    
    /** api: config[groups]
     *  ``Object`` The groups to show in the layer tree. Keys are group names,
     *  and values are either group titles or an object with ``title`` and
     *  ``exclusive`` properties. ``exclusive`` means that nodes will have
     *  radio buttons instead of checkboxes, so only one layer of the group can
     *  be active at a time. Optional, the default is
     *
     *  .. code-block:: javascript
     *
     *      groups: {
     *          "default": "Overlays", // title can be overridden with overlayNodeText
     *          "background": {
     *              title: "Base Maps", // can be overridden with baseNodeText
     *              exclusive: true
     *          }
     *      }
     */
    
    /** private: method[createOutputConfig] */
    createOutputConfig: function() {
        var tree = ux.plugins.LayerManager.superclass.createOutputConfig.apply(this, arguments);
        Ext.applyIf(tree, Ext.apply({
            cls: "gxp-layermanager-tree",
            lines: false,
            useArrows: true,
            plugins: [{
                ptype: "gx_treenodecomponent"
            }]
        }, this.treeConfig));
        
        return tree;        
    },
    
    /** private: method[configureLayerNode] */
    configureLayerNode: function(loader, attr) {
        ux.plugins.LayerManager.superclass.configureLayerNode.apply(this, arguments);
        var legendXType;
        // add a WMS legend to each node created
        if (OpenLayers.Layer.WMS && attr.layer instanceof OpenLayers.Layer.WMS) {
            legendXType = "gx_wmslegend";
        } else if (OpenLayers.Layer.Vector && attr.layer instanceof OpenLayers.Layer.Vector) {
            legendXType = "gx_vectorlegend";
        }
        if (legendXType) {
            var baseParams;
			if (loader && loader.baseAttrs && loader.baseAttrs.baseParams) {
                baseParams = loader.baseAttrs.baseParams;
            }
			
			//console.log(attr.layer);
            
            Ext.apply(attr, {
                component: {
                    xtype: legendXType,
                    // TODO these baseParams were only tested with GeoServer,
                    // so maybe they should be configurable - and they are
                    // only relevant for gx_wmslegend.
                    hidden: !attr.layer.getVisibility(),
                    baseParams: Ext.apply({
                        transparent: true,
                        format: "image/png",
						legend_options: "fontAntiAliasing:true;fontSize:11;fontName:Arial"
                    }, baseParams),
                    layerRecord: this.target.mapPanel.layers.getByLayer(attr.layer),
					legendTitle: attr.layer.legendTitle,
                    showTitle: false,
                    // custom class for css positioning
                    // see tree-legend.html
                    cls: "legend"
                }
            });
			this;
        }
    }
    
});

Ext.preg(ux.plugins.LayerManager.prototype.ptype, ux.plugins.LayerManager);
