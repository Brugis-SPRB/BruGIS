
Ext.namespace("ux.gfi");

ux.gfi.en = {
		"BDU:Affectations" : {
			"actiontype" : "GRID",
			"title"		 : "Affectation: [%NAME_FR%]",
			"attributes" : [
				{ "name" : "Affectation" ,  "label" : "[%NAME_FR%]" , "type" : "string" },
				{ "name" : "Lien" 		 ,  "label" : "[%URL_P_FR%]", "type" : "link"   }
			]
		},
		"BDU:Espaces_structurants" : {
			"actiontype" : "GRID",
			"title"		 : "[%NAME_FR%]",
			"attributes" : [
				 { "name" : "Affectation"	, "label" : "[%NAME_FR%]"		, "type" : "string" },
				 { "name" : "Lien"			, "label" : "[%URL_P_FR%]"  	, "type" : "link" }
			]
		},
		"BDU:Maille" : {
			"actiontype" : "GRID",
			"title"		 : "Maille: [%GMLINK%]",
			"attributes" : [
				{ "name": "Code"	, "label" : "[%GMLINK%]"			, "type" : "string" },
				{ "name": "Lien"	, "label" : "[%PATH_INTER%]"		, "type" : "string" }
			]
		},
		"BDU:Accessibilite" : {
			"actiontype" : "GRID",
			"title"		 : "Accessibilité: [%ZONE%]",
			"attributes" : [
				{ "name": "Type de zone"	, "label" : "[%ZONE%]"		, "type" : "string" }
			]
		},
		"BDU:Enseignes" : {
			"actiontype" : "GRID",
			"title"		 : "Enseignes: [%ZONE%]",
			"attributes" : [
				{ "name": "Type de zone"	, "label" : "[%ZONE%]"		, "type" : "string" }
			]
		},
		"AATL_DMS_SITE_ARBR:Arbres_Remarquables": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_fr%]",
			"attributes" : [
				{ "name": "Circonférence"		, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[%tax_fr%]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id%]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]", "type" : "picture"},
				{ "name": "Hauteur"				, "label" : "[%hauteur%] m"			, "type" : "string"},
				{ "name": "Diamètre de la cîme"	, "label" : "[%diametre_cime%] m"		, "type" : "string"},
				{ "name": "type d'emplacement"	, "label" : "[%emplacement%]"			, "type" : "string"},
				{ "name": "statut"				, "label" : "[%Legendefr%]"			, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:arbres_remarquables_DEV": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Circonférence"		, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[%tax_fr%]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbresinvdev.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbresinvdev.irisnet.be/arbre/[%results_fr%]/[%id%]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbresinvdev.irisnet.be/medias/trees/[%firstimage%]", "type" : "picture"},
				{ "name": "Hauteur"				, "label" : "[%hauteur%] m"			, "type" : "string"},
				{ "name": "Diamètre de la cîme"	, "label" : "[%diametre_cime%] m"		, "type" : "string"},
				{ "name": "type d'emplacement"	, "label" : "[%emplacement%]"			, "type" : "string"},
				{ "name": "statut"				, "label" : "[%Legendefr%]"			, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:Arbres_remarquables_rarete": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_la%]: [%rarete%]",
			"attributes" : [
				{ "name": "Identifiant"			, "label" : "[%id%]"					, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "rareté"				, "label" : "[%rarete%]"				, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:Arbres_remarquables_100_biggest": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_fr%]",
			"attributes" : [
				{ "name": "Circonférence"			, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Classement des tailles"	, "label" : "[%ClassementTailles%]"	, "type" : "string"}
			]
		},
		"BDU:Contrats_de_quartier": {
			"actiontype" : "GRID",
			"title"		 : "Contrat de quartier: [%NOMCQ%]",
			"attributes" : [
				{ "name": "Nom"									, "label" : "[%NOMCQ%]"					, "type": "string"},
				{ "name": "Commune"								, "label" : "[%COMMUNE%]"					, "type": "string"},
				{ "name": "Date d'arrêté du gouvernement"		, "label" : "[%ARRET_GVT%]"				, "type": "string"},
				{ "name": "Date de notification à la commune"	, "label" : "[%NOTIF_COMM%]"				, "type": "string"},
				{ "name": "Date de fin"							, "label" : "[%DATE_FIN%]"				, "type": "string"},
				{ "name": "Actif"								, "label" : "['Non','Oui'][[%STATUT%]]"	, "type": "eval"},
				{ "name": "Bureau d'étude"						, "label" : "[%NOM_BE%]"					, "type": "string"},
				{ "name": "Bureau d'étude (responsable)"		, "label" : "[%RESP_BE%]"					, "type": "string"},
				{ "name": "Série"								, "label" : "[%SERIE%]"					, "type": "string"},
				{ "name": "Gestionnaire"						, "label" : "[%GESTION%]"					, "type": "string"},
				{ "name": "Contact"								, "label" : "[%TEL_BE%]"					, "type": "string"},
				{ "name": "Subside régional"					, "label" : "[%SUBS_REG%]"				, "type": "string"},
				{ "name": "Référence comptable"					, "label" : "[%REFERENCE%]"				, "type": "string"},
				{ "name": "ID"									, "label" : "[%ID%]"						, "type": "string"}
			]
		},
		"BDU:Lotissements": {
			"actiontype" : "GRID",
			"title"		 : "[%REFSITEX%]",
			"attributes" : [
				{ "name": "Nom"						, "label" : "[%OBJET%]"			, "type": "string"},
				{ "name": "Adresse"					, "label" : "[%ADRESSE%]"			, "type": "string"},
				{ "name": "Demandeur"				, "label" : "[%DEMANDEUR%]"		, "type": "string"},
				{ "name": "Date de notification"	, "label" : "[%DATENOTIF%]"		, "type": "string"},
				{ "name": "Permis"					, "label" : "[%PERMISOCTROYE%]"	, "type": "string"},
				{ "name": "Référence NOVA"			, "label" : "[%REFNOVA%]"			, "type": "string"},
				{ "name": "Référence SITEX"			, "label" : "[%REFSITEX%]"		, "type": "string"},
				{ "name": "Référence cadastrale"	, "label" : "[%NUMCADAST%]"		, "type": "string"},
				{ "name": "ID"						, "label" : "[%ID%]"				, "type": "string"}
			]
		},
		"BDU:Patrimoine": {
			"actiontype" : "GRID",
			"title"      : "[%MS]: [%DENOMINATION%]",
			"attributes" : [
				{ "name": "Dénomination"	, "label" : "[%DENOMINATION%]"	, "type" : "string"},
				{ "name": "Commune"			, "label" : "[%COMMUNE%]"			, "type" : "string"},
				{ "name": "Adresse"			, "label" : "[%ADRESSE%]"			, "type" : "string"},
				{ "name": "N° de police"	, "label" : "[%NRPOLICE%]"		, "type" : "string"},
				{ "name": "Mon./Site/Ens."	, "label" : "[%MS%]"				, "type" : "string"},
				{ "name": "Class./Sauv."	, "label" : "[%CLSV%]"			, "type" : "string"},
				{ "name": "Date AD"			, "label" : "[%AD%]"				, "type" : "string"},
				{ "name": "N° de dossier"	, "label" : "[%DMSFOLDERNR%]"		, "type" : "string"},
				{ "name": "Commentaire"		, "label" : "[%COMMENTAIRE%]"		, "type" : "string"},
				{ "name": "EXTPROT"			, "label" : "[%EXTPROT%]"			, "type" : "string"},
				{ "name": "NB"				, "label" : "[%NB%]"				, "type" : "string"}
			]
		},
		"BDU:Zones_de_protection": {
			"actiontype" : "GRID",
			"title"      : "[%MS%] en [%CLSV%]: [%DENOMINATION%]",
			"attributes" : [
				{ "name": "Dénomination"	, "label" : "[%DENOMINATION%]"	, "type" : "string"},
				{ "name": "Commune"			, "label" : "[%COMMUNE%]"			, "type" : "string"},
				{ "name": "Adresse"			, "label" : "[%ADRESSE%]"			, "type" : "string"},
				{ "name": "N° de police"	, "label" : "[%NRPOLICE%]"		, "type" : "string"},
				{ "name": "Mon./Site/Ens."	, "label" : "[%MS%]"				, "type" : "string"},
				{ "name": "Class./Sauv."	, "label" : "[%CLSV%]"			, "type" : "string"},
				{ "name": "Date AD"			, "label" : "[%AD%]"				, "type" : "string"},
				{ "name": "N° de dossier"	, "label" : "[%DMSFOLDERNR%]"		, "type" : "string"},
				{ "name": "Commentaire"		, "label" : "[%COMMENTAIRE%]"		, "type" : "string"},
				{ "name": "EXTPROT"			, "label" : "[%EXTPROT%]"			, "type" : "string"},
				{ "name": "NB"				, "label" : "[%NB%]"				, "type" : "string"}
			]
		},
		"BDU:Zones_de_protection_UNESCO": {
			"actiontype" : "GRID",
			"title"      : "Zone de protection UNESCO: [%NOM_FR%]",
			"attributes" : [
				{ "name": "Dénomination"	, "label" : "[%NOM_FR%]"			, "type" : "string"}
			]
		},
		"BDU:Patrimoine_New": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "string"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "string"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Oui','Non'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:Visites_arbres": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Date de la dernière visite"	, "label" : "[%date%]"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[%tax_fr%]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]", "type" : "link"}
			]
		},
		"AATL_DMS_SITE_ARBR_PRIVATE:Arbres_remarquables_valeur_patrimoniale": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Valeur patrimoniale"	, "label" : "[%VP%]"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[%tax_fr%]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id%]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]", "type" : "link"}
			]
		},
		"AED:Zones_de_preemption": {
			"actiontype" : "GRID",
			"title"		 : "Zone de préemption: [%NOM_FR%]",
			"attributes" : [
				{ "name": "Nom de zone"			, "label" : "[%NOM_FR%]"	, "type" : "string"},
				{ "name": "Lien"				, "label" : "[%URL_FR%]"				, "type" : "link"},
				{ "name": "actif/inactif"		, "label" : "[%ACTIF%]"				, "type" : "string"}
			]
		},
		"BDU:PPAS":{
			"actiontype" : "GRID",
			"title"		 : "Plan particulier d'affection du sol: [%OBJET%]",
			"attributes" : [
				{ "name": "Nom"							, "label" : "[%OBJET%]"			, "type" : "string"},
				{ "name": "Référence NOVA"				, "label" : "[%REFNOVA%]"			, "type" : "string"},
				{ "name": "Référence SPEC"				, "label" : "[%REFSPEC%]"			, "type" : "string"},
				{ "name": "RIE"							, "label" : "[%RIE%]"				, "type" : "string"},
				{ "name": "Type d'arrêté"				, "label" : "[%TYPEARRETE%]"		, "type" : "string"},
				{ "name": "Date d'arrêté"				, "label" : "[%DATEARRETE%]"		, "type" : "string"},
				{ "name": "Date d'arrêté EXP"			, "label" : "[%DATARREXP%]"		, "type" : "string"},
				{ "name": "Date d'arrêté PROJPLAN"		, "label" : "[%DATARRPROJPLAN%]"	, "type" : "string"},
				{ "name": "En zone d'intérêt régionale"	, "label" : "[%ZIR%]"				, "type" : "string"},
				{ "name": "Décision"					, "label" : "[%DECISION%]"		, "type" : "string"},
				{ "name": "DECPROJPLAN"					, "label" : "[%DECPROJPLAN%]"		, "type" : "string"},
				{ "name": "ID"							, "label" : "[%ID%]"				, "type" : "string"}
			]
		},
		"TAX:Observations": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "C_OBSERV"			, "label" : "[%C_OBSERV%]"	, "type" : "string"},
				{ "name": "DATE_REAL"			, "label" : "[%DATE_REAL%]"	, "type" : "string"},
				{ "name": "LIEN_HTTP"			, "label" : "[%LIEN_HTTP%]"	, "type" : "file"},
				{ "name": "ORIG_OBS"			, "label" : "[%ORIG_OBS%]"	, "type" : "string"},
				{ "name": "PARCELLE"			, "label" : "[%PARCELLE%]"	, "type" : "string"}
			]
		},
		"BDU:Parcelle_2013": {
			"actiontype" : "GRID",
			"title"      : "Parcelle 2013: [%CAPAKEY%]",
			"attributes" : [
				{ "name": "APNC_MAPC"			, "label" : "[%APNC_MAPC%]"	, "type" : "string"},
				{ "name": "APNC_CADC"			, "label" : "[%APNC_CADC%]"	, "type" : "string"},
				{ "name": "CAPAKEY"				, "label" : "[%CAPAKEY%]"		, "type" : "string"},
				{ "name": "SHNC_FILE"			, "label" : "[%SHNC_FILE%]"	, "type" : "string"},
				{ "name": "SHEET"				, "label" : "[%SHEET%]"		, "type" : "string"},
				{ "name": "CDNC"				, "label" : "[%CDNC%]"		, "type" : "string"},
				{ "name": "CD5C"				, "label" : "[%CD5C%]"		, "type" : "string"},
				{ "name": "CSNC"				, "label" : "[%CSNC%]"		, "type" : "string"},
				{ "name": "MUNC"				, "label" : "[%MUNC%]"		, "type" : "string"},
				{ "name": "SHNC"				, "label" : "[%SHNC%]"		, "type" : "string"},
				{ "name": "APNC_CAD"			, "label" : "[%APNC_CAD%]"	, "type" : "string"},
				{ "name": "APNC_MAP"			, "label" : "[%APNC_MAP%]"	, "type" : "string"},
				{ "name": "RAD_NUM"				, "label" : "[%RAD_NUM%]"		, "type" : "string"},
				{ "name": "EXP_ALPHA"			, "label" : "[%EXP_ALPHA%]"	, "type" : "string"},
				{ "name": "EXP_NUM"				, "label" : "[%EXP_NUM%]"		, "type" : "string"},
				{ "name": "CAPATY"				, "label" : "[%CAPATY%]"		, "type" : "string"},
				{ "name": "ID"					, "label" : "[%ID%]"			, "type" : "string"},
				{ "name": "SHAPE_AREA_IN_DB"	, "label" : "[%SHAPE_AREA%]"	, "type" : "string"}
			]
		},
		"AATL:Parcelle_2012": {
			"actiontype" : "GRID",
			"title"      : "Parcelle 2012: [%CAPAKEY%]",
			"attributes" : [
				{ "name": "APNC_MAPC"			, "label" : "[%APNC_MAPC%]"	, "type" : "string"},
				{ "name": "APNC_CADC"			, "label" : "[%APNC_CADC%]"	, "type" : "string"},
				{ "name": "CAPAKEY"				, "label" : "[%CAPAKEY%]"		, "type" : "string"},
				{ "name": "SHNC_FILE"			, "label" : "[%SHNC_FILE%]"	, "type" : "string"},
				{ "name": "SHEET"				, "label" : "[%SHEET%]"		, "type" : "string"},
				{ "name": "CDNC"				, "label" : "[%CDNC%]"		, "type" : "string"},
				{ "name": "CD5C"				, "label" : "[%CD5C%]"		, "type" : "string"},
				{ "name": "CSNC"				, "label" : "[%CSNC%]"		, "type" : "string"},
				{ "name": "MUNC"				, "label" : "[%MUNC%]"		, "type" : "string"},
				{ "name": "SHNC"				, "label" : "[%SHNC%]"		, "type" : "string"},
				{ "name": "APNC_CAD"			, "label" : "[%APNC_CAD%]"	, "type" : "string"},
				{ "name": "APNC_MAP"			, "label" : "[%APNC_MAP%]"	, "type" : "string"},
				{ "name": "RAD_NUM"				, "label" : "[%RAD_NUM%]"		, "type" : "string"},
				{ "name": "EXP_ALPHA"			, "label" : "[%EXP_ALPHA%]"	, "type" : "string"},
				{ "name": "EXP_NUM"				, "label" : "[%EXP_NUM%]"		, "type" : "string"},
				{ "name": "CAPATY"				, "label" : "[%CAPATY%]"		, "type" : "string"},
				{ "name": "ID"					, "label" : "[%ID%]"			, "type" : "string"},
				{ "name": "SHAPE_AREA_IN_DB"	, "label" : "[%SHAPE_AREA%]"	, "type" : "string"}
			]
		},
		"AATL:Parcelle_2011": {
			"actiontype" : "GRID",
			"title"      : "Parcelle 2011: [%CAPAKEY%]",
			"attributes" : [
				{ "name": "APNC_MAPC"			, "label" : "[%APNC_MAPC%]"	, "type" : "string"},
				{ "name": "APNC_CADC"			, "label" : "[%APNC_CADC%]"	, "type" : "string"},
				{ "name": "CAPAKEY"				, "label" : "[%CAPAKEY%]"		, "type" : "string"},
				{ "name": "SHNC_FILE"			, "label" : "[%SHNC_FILE%]"	, "type" : "string"},
				{ "name": "SHEET"				, "label" : "[%SHEET%]"		, "type" : "string"},
				{ "name": "CDNC"				, "label" : "[%CDNC%]"		, "type" : "string"},
				{ "name": "CD5C"				, "label" : "[%CD5C%]"		, "type" : "string"},
				{ "name": "CSNC"				, "label" : "[%CSNC%]"		, "type" : "string"},
				{ "name": "MUNC"				, "label" : "[%MUNC%]"		, "type" : "string"},
				{ "name": "SHNC"				, "label" : "[%SHNC%]"		, "type" : "string"},
				{ "name": "APNC_CAD"			, "label" : "[%APNC_CAD%]"	, "type" : "string"},
				{ "name": "APNC_MAP"			, "label" : "[%APNC_MAP%]"	, "type" : "string"},
				{ "name": "RAD_NUM"				, "label" : "[%RAD_NUM%]"		, "type" : "string"},
				{ "name": "EXP_ALPHA"			, "label" : "[%EXP_ALPHA%]"	, "type" : "string"},
				{ "name": "EXP_NUM"				, "label" : "[%EXP_NUM%]"		, "type" : "string"},
				{ "name": "CAPATY"				, "label" : "[%CAPATY%]"		, "type" : "string"},
				{ "name": "ID"					, "label" : "[%ID%]"			, "type" : "string"},
				{ "name": "SHAPE_AREA_IN_DB"	, "label" : "[%SHAPE_AREA%]"	, "type" : "string"}
			]
		},
		"BDU:Limites_communales": {
			"actiontype" : "GRID",
			"title"      : "Commune: [MUFN%]",
			"attributes" : []
		},
		"BDU:Galeries_commercantes": {
			"actiontype" : "GRID",
			"title"      : "Galeries commerçantes",
			"attributes" : []
		},
		"BDU:Parking_de_transit": {
			"actiontype" : "GRID",
			"title"      : "Parking de transit",
			"attributes" : []
		},
		"BDU:Points_de_variation_de_mixite": {
			"actiontype" : "GRID",
			"title"      : "Points de variation de mixité",
			"attributes" : []
		},
		"BDU:Liseres_de_noyau_commercial": {
			"actiontype" : "GRID",
			"title"      : "Liserés de noyau commercial",
			"attributes" : []
		},
		"BDU:Zichee": {
			"actiontype" : "GRID",
			"title"      : "Zone d'intérêt culturel, historique et d'embellisement",
			"attributes" : []
		},
		"BDU:Biens_classes_ou_en_sauvegarde": {
			"actiontype" : "GRID",
			"title"      : "Biens: [%DENOMINATION%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%DENOMINATION%]"									, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NRPOLICE%], [%ADRESSE%], [%COMMUNE%]"					, "type" : "string"},
				{ "name": "Type de biens"			, "label" : "[%MS%]"												, "type" : "string"},
				{ "name": "Type de classement"      , "label" : "[%CLSV%]"											, "type" : "string"},
				{ "name": "Date d'arrêté"			, "label" : "[%AD%]"												, "type" : "string"},
				{ "name": "Date OP"					, "label" : "[%OP%]"												, "type" : "string"},
				{ "name": "Extension de protection"	, "label" : "[%EXTPROT%]"											, "type" : "link"},
				{ "name": "Protection"				, "label" : "[%PROTECTION%]"										, "type" : "string"},
				{ "name": "Référence DMS"			, "label" : "[%DMSFOLDERNR%]"										, "type" : "string"},
				{ "name": "Commentaire"				, "label" : "[%COMMENTAIRE%]"										, "type" : "string"}
			]
		},
        "DEP_BP:BXLPROJECTS_PMNR_ORDERED": {
            "actiontype" : "GRID",
            "title"      : "Projet [%PROJECT_ID%]",
            "attributes" : [
                {"name": "Category",         "label": "[%PROJECTCATEGORY%]", "type": "string"},
                {"name": "Project Type",     "label": "[%PROJECTTYPE%]",     "type": "string"},
                {"name": "Street Name F",    "label": "[%STREETNAME_F%]",    "type": "string"},
                {"name": "Street Name N",    "label": "[%STREETNAME_N%]",    "type": "string"},
                {"name": "Street Number",    "label": "[%STREETNUMBER%]",    "type": "string"},
                {"name": "Street Box",       "label": "[%STREETBOX%]",       "type": "string"},
                {"name": "Postal Code",      "label": "[%POSTALCODE%]",      "type": "string"},
                {"name": "Project Title F",  "label": "[%PROJECTTITLE_F%]",  "type": "string"},
                {"name": "Description F",    "label": "[%DESCRIPTION_F%]",   "type": "string"},
                {"name": "Project Title N",  "label": "[%PROJECTTITLE_N%]",  "type": "string"},
                {"name": "Description N",    "label": "[%DESCRIPTION_N%]",   "type": "string"},
                {"name": "Project Title E",  "label": "[%PROJECTTITLE_E%]",  "type": "string"},
                {"name": "Weblink",          "label": "[%WEBLINK%]",         "type": "string"},
                {"name": "Project Status F", "label": "[%REMARKS_F%]",       "type": "string"},
                {"name": "Project Status N", "label": "[%REMARKS_N%]",       "type": "string"},
                {"name": "Project Owner F",  "label": "[%PROJECTOWNER_F%]",  "type": "string"},
                {"name": "Project Owner N",  "label": "[%PROJECTOWNER_N%]",  "type": "string"},
                {"name": "Project Contact",  "label": "[%PROJECTCONTACT%]",  "type": "string"},
                {"name": "Contact Phone",    "label": "[%CONTACTPHONE%]",    "type": "string"},
                {"name": "Contact Mail",     "label": "[%CONTACTMAIL%]",     "type": "string"},
                {"name": "Public/Private/Mix",  "label": "[%PUBLICPRIVATEMIX%]",  "type": "string"},
                {"name": "Source",           "label": "[%SOURCE%]",          "type": "string"},
                {"name": "File Manager",     "label": "[%FILEMANAGER%]",     "type": "string"},
                {"name": "Permit Number",    "label": "[%PERMITNUMBER%]",    "type": "string"}
            ]
        }
	};

