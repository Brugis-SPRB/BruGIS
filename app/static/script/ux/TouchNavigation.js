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
 *  class = TouchNavigation
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("ux.plugins");

/** api: constructor
 *  .. class:: TouchNavigation(config)
 *
 *    Provides one action for panning the map and zooming by touch
 */
ux.plugins.TouchNavigation = Ext.extend(gxp.plugins.Tool, {

    /** api: ptype = ux_touchnavigation */
    ptype: "ux_touchnavigation",

    /** private: method[constructor]
     */
    constructor: function(config) {
		ux.plugins.TouchNavigation.superclass.constructor.apply(this, arguments);
    },

    /** api: method[addActions]
     */
    addActions: function() {
        this.controlOptions = this.controlOptions || {};
        Ext.applyIf(this.controlOptions, {dragPanOptions: {enableKinetic: true}});
		if (/(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase())) {
			this.target.mapPanel.map.addControl(new OpenLayers.Control.TouchNavigation(this.controlOptions));
		}
    }
});

Ext.preg('ux_touchnavigation', ux.plugins.TouchNavigation);
