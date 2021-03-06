﻿/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */


GeoExt.Lang.add("nl", {
    "Brugis.Config.prototype": {
        localeHelp : "<a href='http://stedelijke-ontwikkeling.irisnet.be/nl/cartografie/brugis-r/gebruiksaanwijzing-brugis?set_language=nl'target= '_blank'>Click here</a>",
        abstractText : "BruGIS, Geografische Informatie Portaal voor Brussel Stedelijke Ontwikkeling (GOB).",
        contactText : "e-mail: <a href='mailto:brugis@sprb.brussels'>brugis@sprb.brussels</a>.",
        baseLayerName     : "URBIS:urbisNL",
        baseLayerTitle    : "Urbis gekleurd",
        baseGrayLayerName : "URBIS:urbisNLGray",
        baseGrayLayerTitle: "Urbis grijs",
        baseAquaLayerName : "BCR:Aquarelle",
        baseAquaLayerTitle: "Aqua basiskaart",
        BMBWMSUrl : "http://data-mobility.brussels/geoserver/bm_inspire_nl/ows"
    },
    "GeoExplorer.prototype": {
        zoomSliderText: "<div> Niveau van zoom: {zoom}</div><div Schaal: 1:{scale}</div>",
        loadConfigErrorText: "Moeilijkheid om geregistreerde configuratie te lezen: <br>",
        loadConfigErrorDefaultText: "Serveur Fout.",
        xhrTroubleText: "Onrust van mededeling: staat",
        layersText: "Lagen",
        titleText: "Titel",
        bookmarkText: "In favoriet URL zetten",
        permakinkText: "Permaband",
        appInfoText: "GeoExplorer",
        aboutText: "Over GeoExplorer",
        mapInfoText: "Kaart info",
        descriptionText: "Beschrijving",
        contactText: "Contact",
        aboutThisMapText: "Over deze kaart"
    },
    "GeoExplorer.Composer.prototype": {
        exportMapText: "Kaart Export",
        saveMapText: "Kaart opslaan",
        saveErrorText: "Beschermingsfout:",
        toolsTitle: "Werktuigens kiezen:",
        previewText: "Voorvisualisering",
        backText: "Terugkeer",
        nextText: "Volgens",
        loginText: "Identificatie",
        loginErrorText: "Fout van identificatie of wachtwoord",
        userFieldText: "Gebruikersnaam",
        passwordFieldText: "Wachtwoord"
    },
	"GeoExplorer.Brugis.prototype" : {
        exportMapText: "Kaart Export",
        saveMapText: "Kaart opslaan",
        saveErrorText: "Beschermingsfout:",
        toolsTitle: "Werktuigens kiezen:",
        previewText: "Voorvisualisering",
        backText: "Terugkeer",
        nextText: "Volgens",
        loginText: "Identificatie",
        loginErrorText: "Fout van identificatie of wachtwoord",
        userFieldText: "Gebruikersnaam",
        passwordFieldText: "Wachtwoord",
		dataTabTitleText: "Legende",
		treeTabTitleText: "Gegevens",
		legendTabTitleText: "Legende",
		disclaimerText: "Indicatieve kaart - Gerealiseerd door BruGIS gebaseerd op UrbIS2",
		newBrugisTitle: "Nieuwe versie van BruGIS",
		newBrugisMessagePart1: "De nieuwe versie van BruGIS is ",
		newBrugisMessagePart2: ".\n Uw versie is ",
		newBrugisMessagePart3: ".\n De kaart word opnieuw geïnitializeerd. Ctrl + F5 om de site te herladen",
		wpsserver :"http://svappmavw019:8080/geoserver/wps",
        wmsTreeLegendSourceUrl: "/geoserver/www/wmsaatl/wmsaatl_nl.xml"
	},
	"ux.form.CirbGeocoderComboBox.prototype" : {
		loadingText: "Lopend onderzoek...",
        emptyText: "Zoeken",
		language: ''
	},

	"ux.plugins.BrugisSearcher.prototype" : {
		searchLayerName: "resultaten van de opzoeking",
		cadSearchTipText: "vul hier de CAPAKEY"
	},

	"ux.plugins.Preferences.prototype" : {
		preferencesTip: 				"Opties",
		preferencesText: 				"Opties tekst",
		preferencesMenuText: 			"Opties menu text",
		availablePreferencesText: 		"Opties",
		ParametersText: 				"Opties BruGIS",
		sessionText: 					"Kaart bij het starten",
		keepSessionText: 				"Standaard kaart",
		forgetSessionText: 				"Geen enkele kaart",
		dataLegendText: 				"Tabblad",
		dataPanelText: 					"Gegevens",
		legendPanelText: 				"Legende",
		searchResultText: 				"Opzoeking resultaat",
		multipleSearchText: 			"Meervoudig",
		uniqueSearchText: 				"Enkelvoudig",
		toolsVisibilityOptionLabelText:			"Tools: scherm opties",
		showQueryToolLabelText: 				"Opzoek tools",
		showGeolocatorToolLabelText: 			"Geolocatie tools",
		showUrbanalysisToolLabelText: 			"Urbanalysis tools",
		showDataEditorToolslabelText: 			"Modificatie tools",
		showDedicatedMapAdvancedToolsLabelText:	"Kaart bescherming tools",
		showPopupInfoOnRightClickLabelText:		"Attribuut informatie op recht klik"
	},

	"ux.plugins.ReperageToolbox.prototype" : {
		showReperageGrid: "ShowReperageGrid",
		drawReperageAreaToolTip: "oppervlak teken",
		showReperageFormBtnToolTip: "Urbanalyse vorm",
		modifyReperageAreaToolTip: "oppervlak veranderen",
		copyParcelFeatBtnToolTip : "kopie van een perceel oppervlak",
		deleteOneFeatureBtnToolTip: "oppervlak verwijderen",
		reperageButtonTip: "Urbanalyse",
		showReperageFormDlgTitle: "Urbanalyse",
		reperageTypeCombofieldLabel: "type Urbanalyse",
		reperageTypeComboemptyText: "Keuze van Urbanalyse type",
		reperageRefDossTextfieldLabel: "Verslag referencie",
		reperageAdrTextfieldLabel: "Adres",
		myReperageTip: "Mijn Urbanalyse(s)",
		myReperageText: "Urbanalyse",
		myReperageMenuText: "Mijn Urbanalyse",
		availableMyReperageText: "Mijn Urbanalyse",
		myReperageGridPanel_docref_header: "Verslag",
		myReperageGridPanel_adress_header: "Adres",
		myReperageGridPanel_state_header: "Status",
		myReperageGridPanel_startdate_header: "opgemaakt op :",
		myReperageGridPanel_enddate_header: "Beschickbaar tot :",
		myReperageGridPanel_docx_tooltip: "Download een Docx",
		myReperageGridPanel_pdf_tooltip: "Download een PDF",
		myReperageGridPanel_bbar_displayMsg: "Urbanalyse {0} - {1} of {2}",
		myReperageGridPanel_bbar_emptyMsg: "Geen urbanalyse",
		myReperageGridPanel_recycle_tooltip: "Refresh urbanalyse"
	},

	"ux.plugins.MyMaps.prototype": {
		myMapsTip: "Mijn kaarten",
		myMapsText: "Mijn kaarten tekst",
		myMapsMenuText: "Mijn kaarten menu tekst",
		availableMyMapsText: "Mijn kaarten",
		mapsTitleText: "Kaarten",
		dateTitleText: "Daten",
		expanderTemplateText: "<p><b>Beschrijving:</b> {abstract}</p>",
		resetText: "Opnieuw instellen",
		importText: "Importeren",
		exportText: "Link",
		saveMapText: "Opslaan",
		loadMapText: "Opladen",
		deleteMapText: "Verwijderen",
		doneText: "Voltooid",
		resetButtonTooltipText: "BruGIS kaart opnieuw instellen",
		exportButtonTooltipText: "Tijdelijke link van de kaart",
		saveButtonTooltipText: "huidige kaart opslaan",
		deleteButtonTooltipText: "Kaart wissen",
		loadButtonTooltipText: "Kaart laden",
		loadConfirmTitle: "Opladen kaart",
		loadConfirmMessage: "Ben je zeker die kaart te willen opladen?",
		deleteConfirmTitle: "Kaart(en) wissen",
		deleteConfirmMessage: "Wens je de gekozen kaart(en) te wissen?",
		resetConfirmTitle: "BruGIS kaart opnieuw instellen",
		resetConfirmMessage: "Wens je de standaardwaarden van BruGIS opnieuw in te stellen?",
		namingText: "Nieuw kaart",
		mapNameFieldText: "Naam",
		mapAbstractFieldText: "Beschrijving",
		okText: "Ok",
		mapNameErrorText: "Deze kaart is niet geldig.",
		mapAbstractErrorText: "De beschrijving van deze kaart is ongeldig.",
		sameMapNameTitle: "Opgelet",
		sameMapNameMessage: "Deze naam is al gebruikt voor een andere kaart. Wens je deze te vervangen?"
	},

	"ux.plugins.Geolocator.prototype" : {
	menuText: "U bent hier",
	tooltip: "U bent hier"
	},
	"GeoExt.ux.Measure.prototype" : {
		lengthMenuText: "Afstand",
		areaMenuText: "Oppervlakte",
		lengthTooltip: "Meet afstand",
		areaTooltip: "Meet oppervlakte",
		measureTooltip: "Meten"
	},
	"ux.plugins.Print.prototype" : {
		menuText: "Print kaart",
		tooltip: "Print kaart",
		notAllNotPrintableText: "Bepaalde lagen zijn niet afdrukbaar",
		nonePrintableText: "Geen enkele laag van kaart is afdrukbaar",
		previewText: "Voorvisualisering van de indruk"
	},
	"ux.plugins.WMSGetFeatureInfo.prototype" : {
		infoActionTip: "Attribuut informatie",
		popupTitle: "Attribuut informatie",
		areaLabel: "Oppervlakte",
		lengthLabel: "Lengte",
		positionLabel: "Coordinaten",
		centroidLabel: "Centroid"
	},
	   "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Voeg kaartlagen toe",
        addActionTip: "Voeg kaartlagen toe",
        addServerText: "Voeg service toe",
        untitledText: "Onbekend",
        addLayerSourceErrorText: "Probleem bij het ophalen van de Error WMS GetCapabilities ({msg}).\nControleer de URL en probeer opnieuw.",
        availableLayersText: "Beschikbare kaartlagen",
        doneText: "Klaar",
		addButtonText: "Toevoegen",
		layerSelectionText: "Visualiseren kaartlagen van:"
    },

	   "ux.plugins.AddLayers.prototype": {
        addActionMenuText: "Voeg kaartlagen toe",
        addActionTip: "Voeg kaartlagen toe",
        addServerText: "Voeg service toe",
        untitledText: "Onbekend",
        addLayerSourceErrorText: "Probleem bij het ophalen van de Error WMS GetCapabilities ({msg}).\nControleer de URL en probeer opnieuw.",
        availableLayersText: "Beschikbare kaartlagen",
        doneText: "Klaar",
		addButtonText: "Toevoegen",
		layerSelectionText: "Visualiseren kaartlagen van:"
    },

    "gxp.plugins.BingSource.prototype": {
        title: "Bing kaartlagen",
        roadTitle: "Bing wegen",
        aerialTitle: "Bing luchtfoto's",
        labeledAerialTitle: "Bing luchtfoto's met labels"
    },

    "gxp.plugins.FeatureEditor.prototype": {
        createFeatureActionTip: "Maak een nieuw object",
        editFeatureActionTip: "Wijzig een bestand object"
    },

    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Toon op kaart",
        firstPageTip: "Eerste pagina",
        previousPageTip: "Vorige pagina",
        zoomPageExtentTip: "Zoom naar de uitsnede van de pagina",
        nextPageTip: "Volgende pagina",
        lastPageTip: "Laatste pagina",
        totalMsg: "Totaal: {0} rijen"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "3D weergave",
        tooltip: "Bekijk kaart in 3D"
    },

    "gxp.plugins.GoogleSource.prototype": {
        title: "Google Maps kaartlagen",
        roadmapAbstract: "Toon stratenkaart",
        satelliteAbstract: "Toon satellietbeeld",
        hybridAbstract: "Toon rasterbeelden met labels",
        terrainAbstract: "Toon stratenkaart met terrein"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Kaartlaag eigenschappen",
        toolTip: "Kaartlaag eigenschappen"
    },

    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "Gekozen lagen",
        rootNodeText: "Gekozen lagen",
        overlayNodeText: "Gekozen lagen",
        baseNodeText: "Basiskaart"
    },

    "gxp.plugins.LayerManager.prototype": {
        baseNodeText: "Basiskaart"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Toon legenda",
        tooltip: "Toon legenda"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "Laden van de kaart..."
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

    "gxp.plugins.Measure.prototype": {
        lengthMenuText: "Lengte",
        areaMenuText: "Oppervlakte",
        lengthTooltip: "Meet lengte",
        areaTooltip: "Meet oppervlakte",
        measureTooltip: "Meten"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Verschuif kaart",
        tooltip: "Verschuif kaart"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Zoom naar de vorige uitsnede",
        nextMenuText: "Zoom naar de volgende uitsnede",
        previousTooltip: "Zoom naar de vorige uitsnede",
        nextTooltip: "Zoom naar de volgende uitsnede"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap kaartlagen",
        mapnikAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        menuText: "Afdrukken kaart",
        tooltip: "Afdrukken kaart",
        previewText: "Voorvertoning",
        notAllNotPrintableText: "Niet alle lagen kunnen worden afgedrukt",
        nonePrintableText: "Geen van de huidige lagen kunnen worden afgedrukt"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest kaartlagen",
        osmAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Rasterbeelden"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Bevraag",
        queryMenuText: "Bevraag kaartlaag",
        queryActionTip: "Bevraag de geselecteerde kaartlaag",
        queryByLocationText: "Bevraag middels locatie",
        currentTextText: "Huidige uitsnede",
        queryByAttributesText: "Bevraag middels attributen",
        queryMsg: "Bevragen...",
        cancelButtonText: "Annuleren",
        noFeaturesTitle: "Niks gevonden",
        noFeaturesMessage: "De bevraging heeft geen resultaten opgeleverd."
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Verwijder kaartlaag",
        removeActionTip: "Verwijder kaartlaag"
    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        infoActionTip: "Attribuut-informatie",
        popupTitle: "Attribuut-informatie"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomInMenuText: "Inzoomen",
        zoomOutMenuText: "Uitzoomen",
        zoomInTooltip: "Inzoomen",
        zoomOutTooltip: "Uitzoomen"
    },

    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoom naar de maximale uitsnede",
        tooltip: "Zoom naar de maximale uitsnede"
    },

    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoom naar de uitsnede van de kaartlaag",
        tooltip: "Zoom naar de uitsnede van de kaartlaag"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoom naar de uitsnede van de kaartlaag",
        tooltip: "Zoom naar de uitsnede van de kaartlaag"
    },

    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "Zoom naar de geselecteerde objecten",
        tooltip: "Zoom naar de geselecteerde objecten"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "Wijzigingen opslaan?",
        closeMsg: "Het object is gewijzigd. Wilt u de wijzigingen opslaan?",
        deleteMsgTitle: "Verwijder object?",
        deleteMsg: "Weet u zeker dat u dit object wilt verwijderen?",
        editButtonText: "Wijzigen",
        editButtonTooltip: "Wijzig dit object",
        deleteButtonText: "Verwijderen",
        deleteButtonTooltip: "Verwijder dit object",
        cancelButtonText: "Annuleren",
        cancelButtonTooltip: "Stop met wijzigen, wijzigingen worden ongedaan gemaakt",
        saveButtonText: "Opslaan",
        saveButtonTooltip: "Wijzigingen opslaan"
    },

    "gxp.FillSymbolizer.prototype": {
        fillText: "Opvulling",
        colorText: "Kleur",
        opacityText: "Opaciteit"
    },

    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["om het even welk", "alle", "geen", "niet alle"],
        preComboText: "Overeenkomst",
        postComboText: "van de volgende:",
        addConditionText: "voeg voorwaarde toe",
        addGroupText: "voeg groep toe",
        removeConditionText: "verwijder voorwaarde"
    },

    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "Naam",
        titleHeaderText : "Titel",
        queryableHeaderText : "Bevraagbaar",
        layerSelectionLabel: "Bekijk beschikbare data van:",
        layerAdditionLabel: "of voeg een nieuwe server toe.",
        expanderTemplateText: "<p><b>Samenvatting:</b> {abstract}</p>"
    },

    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "cirkel",
        graphicSquareText: "vierkant",
        graphicTriangleText: "driehoek",
        graphicStarText: "ster",
        graphicCrossText: "kruis",
        graphicXText: "x",
        graphicExternalText: "extern",
        urlText: "URL",
        opacityText: "opaciteit",
        symbolText: "Symbool",
        sizeText: "Grootte",
        rotationText: "Rotatie"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "Bevraag middels locatie",
        currentTextText: "Huidige uitsnede",
        queryByAttributesText: "Bevraag middels attributen",
        layerText: "Kaartlaag"
    },

    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} Schaal 1:{scale}",
        labelFeaturesText: "Label objecten",
        advancedText: "Geavanceerd",
        limitByScaleText: "Beperk middels schaal",
        limitByConditionText: "Beperk middels voorwaarde",
        symbolText: "Symbool",
        nameText: "Naam"
    },

    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} Schaal 1:{scale}",
        maxScaleLimitText: "Maximale schaal"
    },

    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "Label waardes",
        haloText: "Halo",
        sizeText: "Grootte"
    },

    "gxp.WMSLayerPanel.prototype": {
        aboutText: "Informatie",
        titleText: "Titel",
        nameText: "Naam",
        descriptionText: "Omschrijving",
        displayText: "Toon",
        opacityText: "Opaciteit",
        formatText: "Formaat",
        transparentText: "Transparant",
        cacheText: "Cache",
        cacheFieldText: "Gebruik de versie vanuit de cache",
        stylesText: "Stijlen",
        infoFormatText: "Info formaat",
        infoFormatEmptyText: "Selecteer een formaat"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "Uw map is klaar voor publicatie! Kopieer de volgende HTML in uw website om de kaart in te voegen:",
        heightLabel: 'Hoogte',
        widthLabel: 'Breedte',
        mapSizeLabel: 'Kaartgrootte',
        miniSizeLabel: 'Mini',
        smallSizeLabel: 'Klein',
        premiumSizeLabel: 'Extra groot',
        largeSizeLabel: 'Groot'
    },

    "gxp.WMSStylesDialog.prototype": {
         addStyleText: "Voeg toe",
         addStyleTip: "Voeg een nieuwe stijl toe",
         deleteStyleText: "Verwijder",
         deleteStyleTip: "Verwijder de geselecteerde stijl",
         editStyleText: "Wijzig",
         editStyleTip: "Wijzig de geselecteerde stijl",
         duplicateStyleText: "Dupliceer",
         duplicateStyleTip: "Dupliceer de geselecteerde stijl",
         addRuleText: "Voeg toe",
         addRuleTip: "Voeg een nieuwe klasse toe",
         deleteRuleText: "Verwijder",
         deleteRuleTip: "Verwijder de geselecteerde klasse",
         editRuleText: "Wijzig",
         editRuleTip: "Wijzig de geselecteerde klasse",
         duplicateRuleText: "Dupliceer",
         duplicateRuleTip: "Dupliceer de geselecteerde klasse",
         cancelText: "Annuleer",
         styleWindowTitle: "Kaartstijl: {0}",
         ruleWindowTitle: "Klasse: {0}",
         stylesFieldsetTitle: "Kaartstijlen",
         rulesFieldsetTitle: "Klassen"
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "Titel",
        titleEmptyText: "Kaartlaag titel",
        abstractLabel: "Omschrijving",
        abstractEmptyText: "Kaartlaag omschrijving",
        fileLabel: "Data",
        fieldEmptyText: "Kies data archief...",
        uploadText: "Upload",
        waitMsgText: "Bezig met uploaden van de data...",
        invalidFileExtensionText: "Bestandsextensie is een van: ",
        optionsText: "Opties",
        workspaceLabel: "Werkruimte",
        workspaceEmptyText: "Standaard werkruimte",
        dataStoreLabel: "Archief",
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
        zoomLevelText: "Zoom niveau"
    }
});
