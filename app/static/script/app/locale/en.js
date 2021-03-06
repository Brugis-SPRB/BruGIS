/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */


GeoExt.Lang.add("en", {
    "Brugis.Config.prototype": {
        localeHelp : "<a href='http://www.developpement-urbain.irisnet.be/cartographie/brugis/mode-demploi'target= '_blank'>Click here</a>",
        abstractText : "BruGIS, Geographic Information Portal for Brussels Urban Development (BRPS).",
        contactText : "e-mail: <a href='mailto:brugis@sprb.brussels'>brugis@sprb.brussels</a>.",
        baseLayerName     : "URBIS:urbisFR",
        baseLayerTitle    : "Urbis colored basemap",
        baseGrayLayerName : "URBIS:urbisFRGray",
        baseGrayLayerTitle: "Urbis greyscale basemap",
        baseAquaLayerName : "BCR:Aquarelle",
        baseAquaLayerTitle: "Watercolor basemap",
        BMBWMSUrl : "http://data-mobility.brussels/geoserver/bm_inspire_en/ows"
    },
    "GeoExplorer.prototype": {
        zoomSliderText: "<div>Zoom Level: {zoom}</div><div>Scale: 1:{scale}</div>",
        loadConfigErrorText: "Trouble reading saved configuration: <br />",
        loadConfigErrorDefaultText: "Server Error.",
        xhrTroubleText: "Communication Trouble: Status ",
        layersText: "Layers",
        titleText: "Title",
        zoomLevelText: "Zoom level",
        bookmarkText: "Bookmark URL",
        permakinkText: 'Permalink',
        appInfoText: "GeoExplorer",
        aboutText: "About GeoExplorer",
        mapInfoText: "Map Info",
        descriptionText: "Description",
        contactText: "Contact",
        aboutThisMapText: "About this Map"
    },

    "GeoExplorer.Composer.prototype": {
        exportMapText: "Publish Map",
        saveMapText: "Save Map",
        saveErrorText: "Trouble saving: ",
        toolsTitle: "Choose tools to include in the toolbar:",
        previewText: "Preview",
        backText: "Back",
        nextText: "Next",
        loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password"
    },

	"GeoExplorer.Brugis.prototype" : {
        exportMapText: "Export map",
        saveMapText: "Save map",
        saveErrorText: "The force is very strong in this one:",
        toolsTitle: "Choose the tools to include:",
        previewText: "Preview",
        backText: "Back",
        nextText: "Next",
        loginText: "Authentication",
        loginErrorText: "Login or password error",
        userFieldText: "Login",
        passwordFieldText: "Password",
		dataTabTitleText: "Legend",
		treeTabTitleText: "Data",
		legendTabTitleText: "Legend",
		disclaimerText: "Indicative map - Realized by BruGIS team with Brussels UrbIS",
		newBrugisTitle: "New version of BruGIS",
		newBrugisMessagePart1: "BruGIS version is now",
		newBrugisMessagePart2: ".\n your BruGIS version is ",
		newBrugisMessagePart3: ".\n You have nothing to do; you map is reinitialized",
		wmsTreeLegendSourceUrl: "/geoserver/www/wmsaatl/wmsaatl_en.xml"
	},

	"ux.form.CirbGeocoderComboBox.prototype" : {
		loadingText: "Searching...",
        emptyText: "Search",
		language: 'en'
	},

	"ux.plugins.BrugisSearcher.prototype" : {
		searchLayerName: "search results",
		cadSearchTipText: "enter here the CAPAKEY searched"
	},

	"ux.plugins.Preferences.prototype" : {
		preferencesTip: "Preferences",
		preferencesText: "Preferences text",
		preferencesMenuText: "Preferences menu text",
		availablePreferencesText: "Preferences",
		ParametersText: "BruGIS interface parameters",
		sessionText: "session BruGIS",
		keepSessionText: "Keep",
		forgetSessionText: "Forget",
		dataLegendText: "Default panel",
		dataPanelText: "Data",
		legendPanelText: "Legend",
		searchResultText: "Search result",
		multipleSearchText: "Multiple",
		uniqueSearchText: "Unique",
		toolsVisibilityOptionLabelText:			"Tools: Display options",
		showQueryToolLabelText: 				"Search tool",
		showGeolocatorToolLabelText: 			"Geolocalisation tool",
		showUrbanalysisToolLabelText: 			"Urbanalysis tools",
		showDataEditorToolslabelText: 			"Edition tools",
		showDedicatedMapAdvancedToolsLabelText:	"Creation maps tools",
		showPopupInfoOnRightClickLabelText:		"GetFeatureInfo on right-clic"

	},

  "ux.plugins.ReperageToolbox.prototype" : {
		showReperageGrid: "ShowReperageGrid",
		drawReperageAreaToolTip: "Draw polygon",
		showReperageFormBtnToolTip: "Urbanalysis form",
		modifyReperageAreaToolTip: "Modify polygon",
		copyParcelFeatBtnToolTip : "Copy polygon from a Cadastral parcel",
		deleteOneFeatureBtnToolTip: "Erase polygon",
		reperageButtonTip: "Urbanalysis tool",
		showReperageFormDlgTitle: "Urbanalysis",
		reperageTypeCombofieldLabel: "Urbanalysis type",
		reperageTypeComboemptyText: "Choose an Urbanalysis type",
		reperageRefDossTextfieldLabel: "File reference",
		reperageAdrTextfieldLabel: "Address",
		myReperageTip: "My Urbanalysis",
		myReperageText: "Urbanalysis",
		myReperageMenuText: "My Urbanalysis",
		availableMyReperageText: "My Urbanalysis",
		myReperageGridPanel_docref_header: "File",
		myReperageGridPanel_adress_header: "Address",
		myReperageGridPanel_state_header: "Status",
		myReperageGridPanel_startdate_header: "Created :",
		myReperageGridPanel_enddate_header: "Available until :",
		myReperageGridPanel_docx_tooltip: "Docx download",
		myReperageGridPanel_pdf_tooltip: "PDF download",
		myReperageGridPanel_bbar_displayMsg: "Urbanalysis {0} - {1} of {2}",
		myReperageGridPanel_bbar_emptyMsg: "No Urbanalysis",
		myReperageGridPanel_recycle_tooltip: "Repost Urbanalysis"
	},

	"ux.plugins.MyMaps.prototype": {
		myMapsTip: "My maps",
		myMapsText: "my maps text",
		myMapsMenuText: "my maps menu text",
		availableMyMapsText: "My maps",
		mapsTitleText: "Maps",
		dateTitleText: "Dates",
		expanderTemplateText: "<p><b>Description:</b> {abstract}</p>",
		resetText: "Reset",
		importText: "Import",
		exportText: "Export",
		saveMapText: "Save",
		loadMapText: "Load",
		deleteMapText: "Delete",
		doneText: "Done",
		resetButtonTooltipText: "Reset BruGIS map",
		saveButtonTooltipText: "Save current map",
		deleteButtonTooltipText: "Delete map",
		loadButtonTooltipText: "Load map",
		loadConfirmTitle: "Load map",
		loadConfirmMessage: "Load map?",
		deleteConfirmTitle: "Delete map(s)",
		deleteConfirmMessage: "Delete selected map(s)?",
		resetConfirmTitle: "Reset BruGIS map",
		resetConfirmMessage: "Do you want to reset the BruGIS map?",
		namingText: "New map",
		mapNameFieldText: "Name",
		mapAbstractFieldText: "Description",
		okText: "Ok",
		mapNameErrorText: "Thei map is not valid.",
		mapAbstractErrorText: "This map description is not valid.",
		sameMapNameTitle: "Warning",
		sameMapNameMessage: "This mapname is already used. Do you want to replace the existing map definition by the new one?"
	},

	"gxp.menu.LayerMenu.prototype": {
        layerText: "Layer"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Add layers",
        addActionTip: "Add layers",
        addServerText: "Add a New Server",
        addButtonText: "Add layers",
        untitledText: "Untitled",
        addLayerSourceErrorText: "Error getting WMS capabilities ({msg}).\nPlease check the url and try again.",
        availableLayersText: "Available Layers",
        expanderTemplateText: "<p><b>Abstract:</b> {abstract}</p>",
        panelTitleText: "Title",
        layerSelectionText: "View available data from:",
        doneText: "Done",
        uploadText: "Upload layers"
    },

    "gxp.plugins.BingSource.prototype": {
        title: "Bing Layers",
        roadTitle: "Bing Roads",
        aerialTitle: "Bing Aerial",
        labeledAerialTitle: "Bing Aerial With Labels"
    },

    "gxp.plugins.FeatureEditor.prototype": {
        createFeatureActionTip: "Create a new feature",
        editFeatureActionTip: "Edit existing feature"
    },

    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Display on map",
        firstPageTip: "First page",
        previousPageTip: "Previous page",
        zoomPageExtentTip: "Zoom to page extent",
        nextPageTip: "Next page",
        lastPageTip: "Last page",
        totalMsg: "Total: {0} records"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "3D Viewer",
        tooltip: "Switch to 3D Viewer"
    },

    "gxp.plugins.GoogleSource.prototype": {
        title: "Google Layers",
        roadmapAbstract: "Show street map",
        satelliteAbstract: "Show satellite imagery",
        hybridAbstract: "Show imagery with street names",
        terrainAbstract: "Show street map with terrain"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Layer Properties",
        toolTip: "Layer Properties"
    },

    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "Layers",
        rootNodeText: "Layers",
        overlayNodeText: "Overlays",
        baseNodeText: "Base Layers"
    },

    "gxp.plugins.LayerManager.prototype": {
        baseNodeText: "Basemap"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Show Legend",
        tooltip: "Show Legend"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "Loading Map..."
    },

    "gxp.plugins.MapBoxSource.prototype": {
        title: "MapBox Layers",
        blueMarbleTopoBathyJanTitle: "Blue Marble Topography & Bathymetry (January)",
        blueMarbleTopoBathyJulTitle: "Blue Marble Topography & Bathymetry (July)",
        blueMarbleTopoJanTitle: "Blue Marble Topography (January)",
        blueMarbleTopoJulTitle: "Blue Marble Topography (July)",
        controlRoomTitle: "Control Room",
        geographyClassTitle: "Geography Class",
        naturalEarthHypsoTitle: "Natural Earth Hypsometric",
        naturalEarthHypsoBathyTitle: "Natural Earth Hypsometric & Bathymetry",
        naturalEarth1Title: "Natural Earth I",
        naturalEarth2Title: "Natural Earth II",
        worldDarkTitle: "World Dark",
        worldLightTitle: "World Light",
        worldPrintTitle: "World Print"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap Layers",
        mapnikAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        menuText: "Print Map",
        tooltip: "Print Map",
        previewText: "Print Preview",
        notAllNotPrintableText: "Not All Layers Can Be Printed",
        nonePrintableText: "None of your current map layers can be printed"
    },

    "gxp.plugins.Measure.prototype": {
        lengthMenuText: "Length",
        areaMenuText: "Area",
        lengthTooltip: "Measure length",
        areaTooltip: "Measure area",
        measureTooltip: "Measure"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Pan Map",
        tooltip: "Pan Map"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Zoom To Previous Extent",
        nextMenuText: "Zoom To Next Extent",
        previousTooltip: "Zoom To Previous Extent",
        nextTooltip: "Zoom To Next Extent"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagery"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Query",
        queryMenuText: "Query layer",
        queryActionTip: "Query the selected layer",
        queryByLocationText: "Query by location",
        currentTextText: "Current extent",
        queryByAttributesText: "Query by attributes",
        queryMsg: "Querying...",
        cancelButtonText: "Cancel",
        noFeaturesTitle: "No Match",
        noFeaturesMessage: "Your query did not return any results."
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Remove layer",
        removeActionTip: "Remove layer"
    },

    "gxp.plugins.Styler.prototype": {
        menuText: "Edit Styles",
        tooltip: "Manage layer styles"

    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        infoActionTip: "Get Feature Info",
        popupTitle: "Feature Info"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomInMenuText: "Zoom In",
        zoomOutMenuText: "Zoom Out",
        zoomInTooltip: "Zoom In",
        zoomOutTooltip: "Zoom Out"
    },

    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoom To Max Extent",
        tooltip: "Zoom To Max Extent"
    },

    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },

    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "Zoom to selected features",
        tooltip: "Zoom to selected features"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "Save Changes?",
        closeMsg: "This feature has unsaved changes. Would you like to save your changes?",
        deleteMsgTitle: "Delete Feature?",
        deleteMsg: "Are you sure you want to delete this feature?",
        editButtonText: "Edit",
        editButtonTooltip: "Make this feature editable",
        deleteButtonText: "Delete",
        deleteButtonTooltip: "Delete this feature",
        cancelButtonText: "Cancel",
        cancelButtonTooltip: "Stop editing, discard changes",
        saveButtonText: "Save",
        saveButtonTooltip: "Save changes"
    },

    "gxp.FillSymbolizer.prototype": {
        fillText: "Fill",
        colorText: "Color",
        opacityText: "Opacity"
    },

    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["any", "all", "none", "not all"],
        preComboText: "Match",
        postComboText: "of the following:",
        addConditionText: "add condition",
        addGroupText: "add group",
        removeConditionText: "remove condition"
    },

    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "Name",
        titleHeaderText : "Title",
        queryableHeaderText : "Queryable",
        layerSelectionLabel: "View available data from:",
        layerAdditionLabel: "or add a new server.",
        expanderTemplateText: "<p><b>Abstract:</b> {abstract}</p>"
    },

    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "circle",
        graphicSquareText: "square",
        graphicTriangleText: "triangle",
        graphicStarText: "star",
        graphicCrossText: "cross",
        graphicXText: "x",
        graphicExternalText: "external",
        urlText: "URL",
        opacityText: "opacity",
        symbolText: "Symbol",
        sizeText: "Size",
        rotationText: "Rotation"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "Query by location",
        currentTextText: "Current extent",
        queryByAttributesText: "Query by attributes",
        layerText: "Layer"
    },

    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} Scale 1:{scale}",
        labelFeaturesText: "Label Features",
        labelsText: "Labels",
        basicText: "Basic",
        advancedText: "Advanced",
        limitByScaleText: "Limit by scale",
        limitByConditionText: "Limit by condition",
        symbolText: "Symbol",
        nameText: "Name"
    },

    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} Scale 1:{scale}",
        minScaleLimitText: "Min scale limit",
        maxScaleLimitText: "Max scale limit"
    },

    "gxp.StrokeSymbolizer.prototype": {
        solidStrokeName: "solid",
        dashStrokeName: "dash",
        dotStrokeName: "dot",
        titleText: "Stroke",
        styleText: "Style",
        colorText: "Color",
        widthText: "Width",
        opacityText: "Opacity"
    },

    "gxp.StylePropertiesDialog.prototype": {
        titleText: "General",
        nameFieldText: "Name",
        titleFieldText: "Title",
        abstractFieldText: "Abstract"
    },

    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "Label values",
        haloText: "Halo",
        sizeText: "Size"
    },

    "gxp.WMSLayerPanel.prototype": {
        aboutText: "About",
        titleText: "Title",
        nameText: "Name",
        descriptionText: "Description",
        displayText: "Display",
        opacityText: "Opacity",
        formatText: "Format",
        transparentText: "Transparent",
        cacheText: "Cache",
        cacheFieldText: "Use cached version",
        stylesText: "Styles",
        infoFormatText: "Info format",
        infoFormatEmptyText: "Select a format"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "Your map is ready to be published to the web! Simply copy the following HTML to embed the map in your website:",
        heightLabel: 'Height',
        widthLabel: 'Width',
        mapSizeLabel: 'Map Size',
        miniSizeLabel: 'Mini',
        smallSizeLabel: 'Small',
        premiumSizeLabel: 'Premium',
        largeSizeLabel: 'Large'
    },

    "gxp.WMSStylesDialog.prototype": {
         addStyleText: "Add",
         addStyleTip: "Add a new style",
         chooseStyleText: "Choose style",
         deleteStyleText: "Remove",
         deleteStyleTip: "Delete the selected style",
         editStyleText: "Edit",
         editStyleTip: "Edit the selected style",
         duplicateStyleText: "Duplicate",
         duplicateStyleTip: "Duplicate the selected style",
         addRuleText: "Add",
         addRuleTip: "Add a new rule",
         newRuleText: "New Rule",
         deleteRuleText: "Remove",
         deleteRuleTip: "Delete the selected rule",
         editRuleText: "Edit",
         editRuleTip: "Edit the selected rule",
         duplicateRuleText: "Duplicate",
         duplicateRuleTip: "Duplicate the selected rule",
         cancelText: "Cancel",
         saveText: "Save",
         styleWindowTitle: "User Style: {0}",
         ruleWindowTitle: "Style Rule: {0}",
         stylesFieldsetTitle: "Styles",
         rulesFieldsetTitle: "Rules"
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "Title",
        titleEmptyText: "Layer title",
        abstractLabel: "Description",
        abstractEmptyText: "Layer description",
        fileLabel: "Data",
        fieldEmptyText: "Browse for data archive...",
        uploadText: "Upload",
        waitMsgText: "Uploading your data...",
        invalidFileExtensionText: "File extension must be one of: ",
        optionsText: "Options",
        workspaceLabel: "Workspace",
        workspaceEmptyText: "Default workspace",
        dataStoreLabel: "Store",
        dataStoreEmptyText: "Create new store"
    },

    "gxp.NewSourceDialog.prototype": {
        title: "Add New Server...",
        cancelText: "Cancel",
        addServerText: "Add Server",
        invalidURLText: "Enter a valid URL to a WMS endpoint (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Contacting Server..."
    },

    "gxp.ScaleOverlay.prototype": {
        zoomLevelText: "Zoom level"
    }
});
