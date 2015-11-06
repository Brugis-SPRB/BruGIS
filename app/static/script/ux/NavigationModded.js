/**
 * Copyright (c) Brugis (S.P.R.B)
 *
 * Published under the GPL V3 license.
 * See www.gnu.org/licences/gpl-3.0 for the full text
 * of the license.
 */

/**
 * @requires plugins/Tool.js
 * @requires OpenLayers/Kinetic.js
 */

/** api: (define)
 *  module = ux.plugins
 *  class = Navigation
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: Navigation(config)
 *
 *    Provides one action for panning the map and zooming in with
 *    a box. Optionally provide mousewheel zoom support.
 */
ux.plugins.Navigation = Ext.extend(gxp.plugins.Tool, {

    /** api: ptype = ux_navigation */
    ptype: "ux_navigation",

    /** api: config[menuText]
     *  ``String``
     *  Text for navigation menu item (i18n).
     */
    menuText: "Pan Map",

    /** api: config[tooltip]
     *  ``String``
     *  Text for navigation action tooltip (i18n).
     */
    tooltip: "Pan Map",

    /** private: method[constructor]
     */
    constructor: function(config) {
        ux.plugins.Navigation.superclass.constructor.apply(this, arguments);
    },

    /** api: method[addActions]
     */
    addActions: function() {
        this.controlOptions = this.controlOptions || {};
        Ext.applyIf(this.controlOptions, {dragPanOptions: {enableKinetic: true}});
        var actions = [new GeoExt.Action({
            tooltip: this.tooltip,
            menuText: this.menuText,
            iconCls: "gxp-icon-pan",
            enableToggle: true,
            pressed: false,
            allowDepress: true,
            control: new OpenLayers.Control.Navigation(this.controlOptions),
            map: this.target.mapPanel.map,
            toggleGroup: this.toggleGroup})];
        return ux.plugins.Navigation.superclass.addActions.apply(this, [actions]);
    }

});

Ext.preg("ux_navigation", ux.plugins.Navigation);
