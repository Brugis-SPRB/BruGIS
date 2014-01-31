/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */

 
GeoExt.Lang.add("fr", {
    "GeoExplorer.prototype": {
        zoomSliderText: "<div> Niveau de zoom: {zoom}</div><div Echelle: 1:{scale}</div>",
        loadConfigErrorText: "Difficulté à lire configuration enregistrée: <br>",
        loadConfigErrorDefaultText: "Erreur du serveur.",
        xhrTroubleText: "Trouble de la communication: état",
        layersText: "Couches",
        titleText: "Titre",
        bookmarkText: "Mettre en favori URL",
        permakinkText: "Permalien",
        appInfoText: "GeoExplorer",
        aboutText: "À propos de GeoExplorer",
        mapInfoText: "Info carte",
        descriptionText: "Description",
        contactText: "Contact",
        aboutThisMapText: "À propos de cette carte"
    },
	
    "GeoExplorer.Composer.prototype": {
        exportMapText: "Carte Export",
        saveMapText: "Enregistrer la carte",
        saveErrorText: "Erreur de sauvegarde:",
        toolsTitle: "Choisir les outils à inclure:",
        previewText: "Prévisualisation",
        backText: "Retour",
        nextText: "Suivant",
        loginText: "Authentification",
        loginErrorText: "Erreur d'identifiant ou de mot de passe",
        userFieldText: "Nom",
        passwordFieldText: "Mot de passe"
    },
	
	"GeoExplorer.Brugis.prototype" : {
        exportMapText: "Exporter la carte",
        saveMapText: "Enregistrer la carte",
        saveErrorText: "The force is very strong in this one:",
        toolsTitle: "Choisir les outils à inclure:",
        previewText: "Prévisualisation",
        backText: "Retour",
        nextText: "Suivant",
        loginText: "Authentification",
        loginErrorText: "Erreur d'identifiant ou de mot de passe",
        userFieldText: "Nom",
        passwordFieldText: "Mot de passe",
		dataTabTitleText: "Légende",
		treeTabTitleText: "Données",
		legendTabTitleText: "Légende",
		disclaimerText: "Carte indicative - Réalisée par BruGIS sur base de UrbIS2",
		//wmsTreeLegendSourceText: "http://localhost:8080/geoserver/www/wmsaatl/wmsaatl_fr.xml"
		wmsTreeLegendSourceText: "http://svappmavw019:8080/geoserver/www/wmsaatl/wmsaatl_fr.xml"
		//wmsTreeLegendSourceText: "http://mybrugis.irisnetlab.be/geoserver/www/wmsaatl/wmsaatl_fr.xml"
		//wmsTreeLegendSourceText: "http://www.mybrugis.irisnet.be/geoserver/www/wmsaatl/wmsaatl_fr.xml"
		
	},
	
	"ux.form.CirbGeocoderComboBox.prototype" : {
		loadingText: "Recherche en cours...",
        emptyText: "Rechercher",
		language: 'en'
	},
	
	"ux.plugins.MyMaps.prototype": {
		myMapsTip: "Mes cartes",
		myMapsText: "my maps text",
		myMapsMenuText: "my maps menu text",
		availableMyMapsText: "Mes cartes",
		mapsTitleText: "Cartes",
		dateTitleText: "Dates",
		expanderTemplateText: "<p><b>Description:</b> {abstract}</p>",
		resetText: "Réinitialiser",
		importText: "Importer",
		exportText: "Exporter",
		saveMapText: "Sauver",
		loadMapText: "Charger",
		deleteMapText: "Supprimer",
		doneText: "Terminé",
		resetButtonTooltipText: "Réinitialiser la carte de BruGIS",
		saveButtonTooltipText: "Sauver la carte courante",
		deleteButtonTooltipText: "Supprimer la carte",
		loadButtonTooltipText: "Charger la carte",
		loadConfirmTitle: "Chargement de la carte",
		loadConfirmMessage: "Charger cette carte?",
		deleteConfirmTitle: "Suppression de carte(s)",
		deleteConfirmMessage: "Supprimer la/les carte(s) sélectionnée(s)?",
		resetConfirmTitle: "Réinitialiser la carte de BruGIS",
		resetConfirmMessage: "Voulez-vous restaurer la carte de BruGIS à son état initial?",
		namingText: "Nouvelles carte",
		mapNameFieldText: "Nom",
		mapAbstractFieldText: "Description",
		okText: "Ok",
		mapNameErrorText: "Cette carte est non valide.",
		mapAbstractErrorText: "La description de cette carte est invalide.",
		sameMapNameTitle: "Attention",
		sameMapNameMessage: "Ce nom est déjà utilisé par une carte. Voulez-vous la remplacer?"
	},
	
	"ux.plugins.Geolocator.prototype" : {
	menuText: "Position courante",
	tooltip: "Position courante"
	},
	
	"GeoExt.ux.Measure.prototype" : {
		lengthMenuText: "Distance",
		areaMenuText: "Surface",
		lengthTooltip: "Mesurer une distance",
		areaTooltip: "Mesurer une surface",
		measureTooltip: "Mesurer"
	},
	
	"ux.plugins.Print.prototype" : {
		menuText: "Imprimer la carte",
		tooltip: "Imprimer la carte",
		notAllNotPrintableText: "Certaines couches ne sont pas imprimables",
		nonePrintableText: "Aucune couche de la carte n'est imprimable",
		previewText: "Prévisualisation de l'impression"
	},
	
	"ux.plugins.WMSGetFeatureInfo.prototype" : {
		infoActionTip: "Informations attributaires",
		popupTitle: "Informations attributaires",
		areaLabel: "Superficie",
		lengthLabel: "Longueur",
		positionLabel: "Coordonnées",
		centroidLabel: "Centroïde"
	},
	
    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Ajouter des calques",
        addActionTip: "Ajouter des calques",
        addServerText: "Ajouter un nouveau serveur",
        untitledText: "Sans titre",
        addLayerSourceErrorText: "Impossible d'obtenir les capacités WMS ({msg}).\nVeuillez vérifier l'URL et essayez à nouveau.",
        availableLayersText: "Couches disponibles",
        doneText: "Terminé",
        uploadText: "Télécharger des données",
		addButtonText: "Ajouter",
		layerSelectionText: "Visualiser les données de: "
    },
    
    "ux.plugins.AddLayers.prototype": {
        addActionMenuText: "Ajouter des calques",
        addActionTip: "Ajouter des calques",
        addServerText: "Ajouter un nouveau serveur",
        untitledText: "Sans titre",
        addLayerSourceErrorText: "Impossible d'obtenir les capacités WMS ({msg}).\nVeuillez vérifier l'URL et essayez à nouveau.",
        availableLayersText: "Couches disponibles",
        doneText: "Terminé",
        uploadText: "Télécharger des données",
		addButtonText: "Ajouter",
		layerSelectionText: "Visualiser les données de: "
    },
    
    "gxp.plugins.BingSource.prototype": {
        title: "Calques Bing",
        roadTitle: "Bing routes",
        aerialTitle: "Bing images aériennes",
        labeledAerialTitle: "Bing images aériennes avec étiquettes"
    },    

    "gxp.plugins.FeatureEditor.prototype": {
        createFeatureActionTip: "Créer un nouvel objet",
        editFeatureActionTip: "Modifier un objet existant"
    },
    
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Afficher sur la carte",
        firstPageTip: "Première page",
        previousPageTip: "Page précédente",
        zoomPageExtentTip: "Zoom sur la page",
        nextPageTip: "Page suivante",
        lastPageTip: "Dernière page",
        totalMsg: "Total : {0} entrées"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "Passer à la visionneuse 3D",
        tooltip: "Passer à la visionneuse 3D"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Calques Google",
        roadmapAbstract: "Carte routière",
        satelliteAbstract: "Images satellite",
        hybridAbstract: "Images avec routes",
        terrainAbstract: "Carte routière avec le terrain"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Propriétés de la couche",
        toolTip: "Propriétés de la couche"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "couches sélectionnées",
        rootNodeText: "couches sélectionnées",
        overlayNodeText: "couches sélectionnées",
        baseNodeText: "Fonds de plan"
    },

    "gxp.plugins.LayerManager.prototype": {
        baseNodeText: "Fond de plan"
    },

    "gxp.plugins.Legend.prototype": { 
        menuText: "Légende",
        tooltip: "Légende"
    },

    "gxp.plugins.Measure.prototype": {
        lengthMenuText: "Longueur",
        areaMenuText: "Surface",
        lengthTooltip: "Mesure de longueur",
        areaTooltip: "Mesure de surface",
        measureTooltip: "Mesure"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Panner la carte",
        tooltip: "Panner la carte"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Position précédente",
        nextMenuText: "Position suivante",
        previousTooltip: "Position précédente",
        nextTooltip: "Position suivante"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "Chargement de la carte..."
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
        title: "Calques OpenStreetMap",
        mapnikAttribution: "Données CC-By-SA par <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Données CC-By-SA par <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        menuText: "Imprimer la carte",
        tooltip: "Imprimer la carte",
        previewText: "Aperçu avant impression",
        notAllNotPrintableText: "Non, toutes les couches peuvent être imprimées",
        nonePrintableText: "Aucune de vos couches ne peut être imprimée"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Avec la permission de tuiles <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Avec la permission de tuiles <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagery"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Interrogation",
        queryMenuText: "Couche de requêtes",
        queryActionTip: "Interroger la couche sélectionnée",
        queryByLocationText: "Interroger par lieu",
        currentTextText: "Étendue actuelle",
        queryByAttributesText: "Requête par attributs"
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Enlever la couche",
        removeActionTip: "Enlever la couche"
    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        infoActionTip: "Get Feature Info",
        popupTitle: "Info sur l'objet"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomInMenuText: "Zoom avant",
        zoomOutMenuText: "Zoom arrière",
        zoomInTooltip: "Zoom avant",
        zoomOutTooltip: "Zoom arrière"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoomer sur la carte max",
        tooltip: "Zoomer sur la carte max"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoomer sur la couche",
        tooltip: "Zoomer sur la couche"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoomer sur la couche",
        tooltip: "Zoomer sur la couche"
    },
    
    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "Zoomer sur les objets sélectionnés",
        tooltip: "Zoomer sur les objets sélectionnés"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "Enregistrer les modifications ?",
        closeMsg: "Cet objet a des modifications non enregistrées. Voulez-vous enregistrer vos modifications ?",
        deleteMsgTitle: "Supprimer l'objet ?",
        deleteMsg: "Etes-vous sûr de vouloir supprimer cet objet ?",
        editButtonText: "Modifier",
        editButtonTooltip: "Modifier cet objet",
        deleteButtonText: "Supprimer",
        deleteButtonTooltip: "Supprimer cet objet",
        cancelButtonText: "Annuler",
        cancelButtonTooltip: "Arrêter de modifier, annuler les modifications",
        saveButtonText: "Enregistrer",
        saveButtonTooltip: "Enregistrer les modifications"
    },
    
    "gxp.FillSymbolizer.prototype": {
        fillText: "Remplir",
        colorText: "Couleur",
        opacityText: "Opacité"
    },
    
    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["Tout", "tous", "aucun", "pas tout"],
        preComboText: "Match",
        postComboText: "de ce qui suit:",
        addConditionText: "Ajouter la condition",
        addGroupText: "Ajouter un groupe",
        removeConditionText: "Supprimer la condition"
    },
    
    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "Nom",
        titleHeaderText : "Titre",
        queryableHeaderText : "Interrogeable",
        layerSelectionLabel: "Voir les données disponibles à partir de :",
        layerAdditionLabel: "ou ajouter un nouveau serveur.",
        expanderTemplateText: "<p><b>Résumé:</b> {abstract}</p>"
    },
    
    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "Cercle",
        graphicSquareText: "Carré",
        graphicTriangleText: "Triangle",
        graphicStarText: "Étoile",
        graphicCrossText: "Croix",
        graphicXText: "x",
        graphicExternalText: "Externe",
        urlText: "URL",
        opacityText: "Opacité",
        symbolText: "Symbole",
        sizeText: "Taille",
        rotationText: "Rotation"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "Interrogation selon le lieu",
        currentTextText: "Mesure actuelle",
        queryByAttributesText: "Requête par attributs",
        layerText: "Calque"
    },
    
    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} échelle 1:{scale}",
        labelFeaturesText: "Label Caractéristiques",
        advancedText: "Avancé",
        limitByScaleText: "Limiter par l'échelle",
        limitByConditionText: "Limiter par condition",
        symbolText: "Symbole",
        nameText: "Nom"
    },
    
    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} échelle 1:{scale}",
        maxScaleLimitText: "Échelle maximale"
    },
    
    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "Label valeurs",
        haloText: "Halo",
        sizeText: "Taille"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "A propos",
        titleText: "Titre",
        nameText: "Nom",
        descriptionText: "Description",
        displayText: "Affichage",
        opacityText: "Opacité",
        formatText: "Format",
        transparentText: "Transparent",
        cacheText: "Cache",
        cacheFieldText: "Utiliser la version mise en cache",
        infoFormatText: "Info format",
        infoFormatEmptyText: "Choisissez un format"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "Votre carte est prête à être publiée sur le web. Il suffit de copier le code HTML suivant pour intégrer la carte dans votre site Web :",
        heightLabel: 'Hauteur',
        widthLabel: 'Largeur',
        mapSizeLabel: 'Taille de la carte',
        miniSizeLabel: 'Mini',
        smallSizeLabel: 'Petit',
        premiumSizeLabel: 'Premium',
        largeSizeLabel: 'Large'
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "Titre",
        titleEmptyText: "Titre de la couche",
        abstractLabel: "Description",
        abstractEmptyText: "Description couche",
        fileLabel: "Données",
        fieldEmptyText: "Parcourir pour ...",
        uploadText: "Upload",
        waitMsgText: "Transfert de vos données ...",
        invalidFileExtensionText: "L'extension du fichier doit être : ",
        optionsText: "Options",
        workspaceLabel: "Espace de travail",
        workspaceEmptyText: "Espace de travail par défaut",
        dataStoreLabel: "Magasin de données",
        dataStoreEmptyText: "Create new store"
    },

    "gxp.NewSourceDialog.prototype": {
        title: "Ajouter un nouveau serveur...",
        cancelText: "Annuler",
        addServerText: "Ajouter un serveur",
        invalidURLText: "Indiquez l'URL valide d'un serveur WMS (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Interrogation du serveur..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Niveau de zoom"
    }
	
});
