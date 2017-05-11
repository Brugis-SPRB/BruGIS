
Ext.namespace("ux.gfi");

ux.gfi.fr = {
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
		"BDU:Maille": {
			"actiontype" : "REDIRECT",
			"url"		 : "[%PATH_INTER%]"
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
		"BDU:Publicite" : {
			"actiontype" : "GRID",
			"title"		 : "Publicité: [%ZONE%]",
			"attributes" : [
				{ "name": "Type de zone"	, "label" : "[%ZONE%]"		, "type" : "string" }
			]
		},
		"BDU_DMS_PROT:Arbres_remarquables": {
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
		"BDU_DMS_PROT:Arbres_remarquables_abattus_ou_disparus": {
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
		"BDU_DMS_PROT:Arbres_remarquables_rarete": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_la%]: [%rarete%]",
			"attributes" : [
				{ "name": "Identifiant"			, "label" : "[%id%]"					, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "rareté"				, "label" : "[%rarete%]"				, "type" : "string"}
			]
		},
		"BDU_DMS_PROT:Arbres_remarquables_100_biggest": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_fr%]",
			"attributes" : [
				{ "name": "Circonférence"			, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Classement des tailles"	, "label" : "[%ClassementTailles%]"	, "type" : "string"}
			]
		},
		"BDU_DRU:Contrats_de_quartier": {
			"actiontype" : "GRID",
			"title"		 : "Contrat de quartier: [%NOMCQ%]",
			"attributes" : [
				{ "name": "Nom"									, "label" : "[%NOMCQ%]"					, "type": "string"},
				{ "name": "Commune"								, "label" : "[%COMMUNE%]"					, "type": "string"},
				{ "name": "Date d'arrêté du gouvernement"		, "label" : "[%ARRET_GVT%]"				, "type": "date"},
				{ "name": "Date de notification à la commune"	, "label" : "[%NOTIF_COMM%]"				, "type": "date"},
				{ "name": "Date de fin"							, "label" : "[%DATE_FIN%]"				, "type": "date"},
				{ "name": "Actif"								, "label" : "['Non','Oui'][[%ACTIF%]]"	, "type": "eval"},
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
				{ "name": "Nom"								, "label" : "[%OBJET%]"			, "type": "string"},
				{ "name": "Adresse"							, "label" : "[%ADRESSE%]"			, "type": "string"},
				{ "name": "Demandeur"						, "label" : "[%DEMANDEUR%]"		, "type": "string"},
				{ "name": "Date de notification"			, "label" : "[%DATENOTIF%]"		, "type": "date"},
				{ "name": "Date de dernière notification"	, "label" : "[%DATPERMCOM%]"		, "type": "date"},
				{ "name": "Permis"							, "label" : "[%PERMISOCTROYE%]"	, "type": "string"},
				{ "name": "Date permis commune"				, "label" : "[%DATECOM%]"			, "type": "date"},
				{ "name": "Référence communale"				, "label" : "[%REFCOM%]"			, "type": "string"},
				{ "name": "Référence NOVA"					, "label" : "[%REFNOVA%]"			, "type": "string"},
				{ "name": "Référence SITEX"					, "label" : "[%REFSITEX%]"		, "type": "string"},
				{ "name": "Référence cadastrale"			, "label" : "[%NUMCADAST%]"		, "type": "string"},
				{ "name": "ID"								, "label" : "[%ID%]"				, "type": "string"},
				{ "name": "Etat final"						, "label" : "[%ETATFINAL%]"		, "type": "string"}
			]
		},
		"BDU:Zones_de_protection_UNESCO": {
			"actiontype" : "GRID",
			"title"      : "Zone de protection UNESCO: [%NOM_FR%]",
			"attributes" : [
				{ "name": "Dénomination"	, "label" : "[%NOM_FR%]"			, "type" : "string"}
			]
		},
		"BDU:Patrimoine": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:MONUMENT_CLASSEMENT_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:MONUMENT_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:MONUMENT_SAUVEGARDE_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:MONUMENT_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:ENSEMBLE_CLASSEMENT_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:ENSEMBLE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:ENSEMBLE_SAUVEGARDE_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:ENSEMBLE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_CLASSEMENT_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_SAUVEGARDE_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_ARCHEOLOGIQUE_CLASSEMENT_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_ARCHEOLOGIQUE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_ARCHEOLOGIQUE_SAUVEGARDE_ARRETE_DEFINITIF": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:SITE_ARCHEOLOGIQUE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU:Zones_de_protection": {
			"actiontype" : "GRID",
			"title"      : "Zone de protection de [%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BDU_DMS_PROT:Visites_arbres": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Date de la dernière visite"	, "label" : "[%date%]"	, "type" : "date"},
				{ "name": "Nom"					, "label" : "[%tax_fr%]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id%]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]", "type" : "link"}
			]
		},
		"BDU_DMS_PROT_PRIVATE:Arbres_remarquables_valeur_patrimoniale": {
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
		"BDU_DMS_PROT:Inventaire_batiments": {
			"actiontype" : "GRID",
			"title"		 : "Inventaire bâtiments: [%address_results_fr%]",
			"attributes" : [
				{ "name": "Adresse"			, "label" : "[%address_results_fr%]"	, "type" : "string"},
				{ "name": "PWNC"			, "label" : "[%pwnc%]"				, "type" : "string"},
				{ "name": "Lien"			, "label" : "[%url_fr%]"				, "type" : "link"},
				{ "name": "Image"			, "label" : "[%firstimage%]"			, "type" : "picture"}
			]
		},
		"AED:Zones_de_preemption": {
			"actiontype" : "GRID",
			"title"		 : "Zone de préemption: [%NOM_FR%]",
			"attributes" : [
				{ "name": "Nom de zone"			, "label" : "[%NOM_FR%]"	                                , "type" : "string"},
				{ "name": "Lien"				, "label" : "[%URL_FR%]"				                    , "type" : "link"},
				{ "name": "Statut"		        , "label" : "['Inactif','Actif'][[%ACTIF%]]"				, "type" : "eval"}
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
				{ "name": "Date d'arrêté"				, "label" : "[%DATEARRETE%]"		, "type" : "date"},
				{ "name": "Date d'arrêté EXP"			, "label" : "[%DATARREXP%]"		, "type" : "date"},
				{ "name": "Date d'arrêté PROJPLAN"		, "label" : "[%DATARRPROJPLAN%]"	, "type" : "date"},
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
				{ "name": "DATE_REAL"			, "label" : "[%DATE_REAL%]"	, "type" : "date"},
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
		"BDU:Parcelle_2015": {
			"actiontype" : "GRID",
			"title"      : "Parcelle 2015: [%CAPAKEY%]",
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
		"BDU:Parcelle_2014": {
			"actiontype" : "GRID",
			"title"      : "Parcelle 2014: [%CAPAKEY%]",
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
			"title"      : "Commune: [%MUFN%]",
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
			"title"      : "Biens: [%BENAMING_PAT_VW_FR%]",
			"attributes" : [
				{ "name": "Dénomination"			, "label" : "[%BENAMING_PAT_VW_FR%]"								, "type" : "string"},
				{ "name": "Addresse du bien"		, "label" : "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]", "type" : "string"},
				{ "name": "Type de protection"		, "label" : "[%TYPE_VRIJWARING_FR%]"								, "type" : "string"},
				{ "name": "Protégé en temps que"	, "label" : "[%BESCHERMD_ALS_FR%]"								, "type" : "string"},
				{ "name": "Date du premier arrêté"	, "label" : "[%DATUM_AG1%]"										, "type" : "date"},
				{ "name": "Date du dernier arrêté"	, "label" : "[%DATUM_AG2%]"										, "type" : "date"},
				{ "name": "Premier arrêté"			, "label" : "[%DOCUM_AG1%]"										, "type" : "link"},
				{ "name": "Dernier arrêté"			, "label" : "[%DOCUM_AG2%]"										, "type" : "link"},
				{ "name": "Photo"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Zone de Protection"		, "label" : "['Non','Oui'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Référence DMS"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BPL:Infrastructures_sportives": {
			"actiontype" : "GRID",
			"title"			 : "Infrastructure: [%Nom%]",
			"attributes" : [
				{ "name": "Projet"	, "label" : "[%Projet%]"	,"type" : "string"},
				{ "name": "Lieu"	, "label" : "[%Lieu%]"	,"type" : "string"},
				{ "name": "Subsides"	, "label" : "[%Subsides%]"	,"type" : "string"},
				{ "name": "Type"	, "label" : "[%Type%]"	,"type" : "string"},
				{ "name": "Commune"	, "label" : "[%Commune%]"	,"type" : "string"},
				{ "name": "Année", "label" : "[%Annee%]"	,"type" : "string"},
				{ "name": "Photo, avant"	, "label" : "[%Photo_A%]"	,"type" : "picture"},
				{ "name": "Photo, après"	, "label" : "[%Photo_P%]"	,"type" : "picture"}
			]
		},
        "DEP_BP:BXLPROJECTS_PMNR": {
            "actiontype" : "GRID",
            "title"      : "Projet [%PROJECT_ID%]",
            "attributes" : [
                {"name": "Category",         "label": "[%PROJECTCATEGORYDESC%]", "type": "string"},
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
                {"name": "Weblink",          "label": "[%WEBLINK%]",         "type": "string"},
                {"name": "Project Status F", "label": "[%REMARKS_F%]",       "type": "string"},
                {"name": "Project Status N", "label": "[%REMARKS_N%]",       "type": "string"},
                {"name": "Project Owner F",  "label": "[%PROJECTOWNER_F%]",  "type": "string"},
                {"name": "Project Owner N",  "label": "[%PROJECTOWNER_N%]",  "type": "string"},
                {"name": "Project Contact",  "label": "[%PROJECTCONTACT%]",  "type": "string"},
                {"name": "Contact Phone",    "label": "[%CONTACTPHONE%]",    "type": "string"},
                {"name": "Contact Mail",     "label": "[%CONTACTMAIL%]",     "type": "string"},
                {"name": "Public/Private/Mix",  "label": "[%PUBLICPRIVATEMIXDESC%]",  "type": "string"},
                {"name": "Source",           "label": "[%SOURCE%]",          "type": "string"},
                {"name": "File Manager",     "label": "[%FILEMANAGER%]",     "type": "string"},
                {"name": "Permit Number",    "label": "[%PERMITNUMBER%]",    "type": "string"}
            ]
        },
        "DEP_BP:BXLPROJECTS_ALL": {
            "actiontype" : "GRID",
            "title"      : "Projet [%PROJECT_ID%]",
            "attributes" : [
                {"name": "Category",         "label": "[%PROJECTCATEGORYDESC%]", "type": "string"},
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
                {"name": "Weblink",          "label": "[%WEBLINK%]",         "type": "string"},
                {"name": "Project Status F", "label": "[%REMARKS_F%]",       "type": "string"},
                {"name": "Project Status N", "label": "[%REMARKS_N%]",       "type": "string"},
                {"name": "Project Owner F",  "label": "[%PROJECTOWNER_F%]",  "type": "string"},
                {"name": "Project Owner N",  "label": "[%PROJECTOWNER_N%]",  "type": "string"},
                {"name": "Project Contact",  "label": "[%PROJECTCONTACT%]",  "type": "string"},
                {"name": "Contact Phone",    "label": "[%CONTACTPHONE%]",    "type": "string"},
                {"name": "Contact Mail",     "label": "[%CONTACTMAIL%]",     "type": "string"},
                {"name": "Public/Private/Mix",  "label": "[%PUBLICPRIVATEMIXDESC%]",  "type": "string"},
                {"name": "Source",           "label": "[%SOURCE%]",          "type": "string"},
                {"name": "File Manager",     "label": "[%FILEMANAGER%]",     "type": "string"},
                {"name": "Permit Number",    "label": "[%PERMITNUMBER%]",    "type": "string"}
            ]
        },
        "BDU_DMS_PROT:Inventaire_des_rocailles": {
            "actiontype" : "GRID",
            "title"      : "Rocaille [%ID_XLS%]",
            "attributes" : [
                {"name": "Adresse",                 "label": "[%POLNUMBR%] [%STREET%], [%COMMUNE%]"   , "type": "string"},
                {"name": "Nom du site",             "label": "[%SITENAME%]"                       , "type": "string"},
                {"name": "Remarquable par",         "label": "[%REASON%]"                         , "type": "string"},
                {"name": "Elément(s) succints",     "label": "[%RESUELEM%]"                       , "type": "string"},
                {"name": "Eléments",                "label": "[%ELEMENTS%]"                       , "type": "string"},
                {"name": "Autres éléments",         "label": "[%OTHERELE%]"                       , "type": "string"},
                {"name": "Type de rocaille",        "label": "[%TYPE%]"                           , "type": "string"},
                {"name": "Description",             "label": "[%DESCRIPT%]"                       , "type": "string"},
                {"name": "Construction",            "label": "[%BUILTECH%]"                       , "type": "string"},
                {"name": "Finition",                "label": "[%FINITION%]"                       , "type": "string"},
                {"name": "Identifiant CMS DMS",     "label": "[%ID_CMS%]"                         , "type": "string"},
                {"name": "Présence de Fiche DMS",   "label": "[%FICHECMS%]"                       , "type": "string"},
                {"name": "Présence de photo DMS",   "label": "[%PHOTO%]"                          , "type": "string"},
                {"name": "Identifiant xls",         "label": "[%ID_XLS%]"                         , "type": "string"},
                {"name": "Fiche DEF",               "label": "[%FICHEDEF%]"                       , "type": "string"},
                {"name": "Référence du site",       "label": "[%SITENUMB%]"                       , "type": "string"},
                {"name": "Date de visite",          "label": "[%VIEWDATE%]"                       , "type": "string"},
                {"name": "Date de visite DMS",      "label": "[%VIDMSDAT%]"                       , "type": "string"},
                {"name": "Rocaille",                "label": "[%ROCAILLE%]"                       , "type": "string"},
                {"name": "Propriétaire",            "label": "[%OF_OWNER%]"                       , "type": "string"},
                {"name": "Gestionnaire",            "label": "[%OF_MANAG%]"                       , "type": "string"},
                {"name": "Accès",                   "label": "[%ACCESS%]"                         , "type": "string"}
            ]
        },
        "BDU_IRL:Dossiers_infos": {
            "actiontype" : "GRID",
            "title"      : "Infos dossier: [%N_DOSSIER%] [%PROCEDURE%]",
            "attributes" : [
            {"name":"Interdiction actuelle",                "label":"[%INTERDICTION_ACTUELLE%]"           ,"type":"string"},
            {"name":"Rue",                                  "label":"[%RUE%]"                             ,"type":"string"},
            {"name":"N° de rue - début",                    "label":"if ('[%N_DE_POLICE_DEBUT%]'.length > 0 && '[%BOITE%]'.length > 0){'[%N_DE_POLICE_DEBUT%] bte [%BOITE%]'} else if ('[%N_DE_POLICE_DEBUT%]'.length > 0 && '[%BOITE%]'.length == 0){'[%N_DE_POLICE_DEBUT%]'} else {''}"                    ,"type":"eval"},
            {"name":"N° de rue - Fin",                      "label":"[%N_DE_POLICE_FIN%]"                 ,"type":"string"},
            {"name":"Etage",                                "label":"[%ETAGE%]"                           ,"type":"string"},
			{"name":"Situation exacte",						"label":"[%SITUATION_EXACTE%]"				,"type":"string"},
            {"name":"Commune",                              "label":"[%CODE_POSTAL%] [%COMMUNE%]"           ,"type":"string"},
            {"name":"---------------------------------",    "label":""                                  ,"type":"string"},
            {"name":"N° de dossier",                        "label":"[%N_DOSSIER%]"                       ,"type":"string"},
            {"name":"Procedure",                            "label":"[%PROCEDURE%]"                       ,"type":"string"},
            {"name":"Gestionnaire",                         "label":"[%GESTIONNAIRE%]"                    ,"type":"string"},
            {"name":"Première décision",                    "label":"[%PREMIERE_DECISION%]"               ,"type":"string"},
            {"name":"Date de première décision",            "label":"[%DATE_PREMIERE_DECISION%]"          ,"type":"string"},
            {"name":"Dernière décision",                    "label":"[%DERNIERE_DECISION%]"               ,"type":"string"},
            {"name":"Date de dernière décision",            "label":"[%DATE_DERNIERE_DECISION%]"          ,"type":"string"}
            ]
        },
        "BDU_DRU:Contrats_de_quartiers_Programmes": {
            "actiontype" : "GRID",
            "title"      : "Contrat de Quartier (Programme): [%NOM_FR%]",
            "attributes" : [
                {"name": "Contrat de quartier",     "label": "[%NOM_FR%]",                "type":"string"},
                {"name": "Actif",                   "label": "[%ACTIF%]",                 "type":"string"},
                {"name": "Fiche web",               "label": "http://quartiers.brussels/1/q/[%ID%]",   "type":"link"},
                {"name": "Date de début",           "label": "[%DT_DEBUT%]",              "type":"date"},
                {"name": "Date de fin",             "label": "[%DT_FIN%]",                "type":"date"},
                {"name": "Année",                   "label": "[%ANNEE%]",                 "type":"string"},
                {"name": "Code postal",             "label": "[%CP%]",                    "type":"string"},
                {"name": "Bureau",                  "label": "[%BUREAU%]",                "type":"string"},
                {"name": "Référence compta.",       "label": "[%REF_COMPTA%]",            "type":"string"}
            ]
        },
        "BDU_DRU:Contrats_de_quartiers_Projets": {
            "actiontype" : "GRID",
            "title"      : "Contrat de Quartier (Projet): [%PROJ_FR%]",
            "attributes" : [
                {"name": "Projet",                  "label": "[%PROJ_FR%]",               "type":"string"},
                {"name": "Contrat de quartier",     "label": "[%CQD_FR%]",                "type":"string"},
                {"name": "Série",                   "label": "[%SERIE%]",                 "type":"string"},
                {"name": "Adresse",                 "label": "[%NUM%] [%RUE_FR%] - [%CP%]",   "type":"string"},
                {"name": "Fiche web",               "label": "http://quartiers.brussels/1/qp/[%ID%]",   "type":"link"},
                {"name": "Image",                   "label": "[%IMG%]",                   "type":"picture"},
                {"name": "Crédit photo",            "label": "[%IMG_COPY%]",              "type":"string"},
                {"name": "Bureau",                  "label": "[%BUREAU%]",                "type":"string"},
                {"name": "Désignation du BE",       "label": "[%DT_BUREAU%]",             "type":"date"},
                {"name": "Entrepreneur",            "label": "[%ENTREP%]",                "type":"string"},
                {"name": "N° de permis",            "label": "[%PU_NUM%]",                "type":"string"},
                {"name": "Date réception",          "label": "[%DT_RECEP%]",              "type":"date"}
            ]
        },
        "BDU_DRU:Contrats_de_renovation_urbaine_provisoires": {
            "actiontype" : "GRID",
            "title"      : "Contrat de rénovation urbaine provisoire: [%NOM_FR%]",
            "attributes" : [
                {"name": "Contrat de RU",           "label": "[%NOM_FR%]",                "type":"string"},
                {"name": "Série",                   "label": "[%SERIE%]",                 "type":"string"}
            ]
        },
        "BDU:Quartiers_a_loyers_majores": {
            "actiontype" : "GRID",
            "title"      : "Quartier n°[%MDRC%] - [%NAME_FR%]",
            "attributes" : [
                {"name": "Nom du quartier",           "label": "[%NAME_FR%]",                "type":"string"},
                {"name": "Nom du quartier (bilingue)","label": "[%NAME_BIL%]",               "type":"string"},
                {"name": "Numéro de quartier",        "label": "[%MDRC%]",                   "type":"string"},
								{"name": "Statut",                    "label": "if ('[%SCENARIO%]'.length > 0 && '[%SCENARIO%]'=='2' ){'Dans une zone majorée'} else {'Hors de zone majorée'}"                    ,"type":"eval"}
            ]
        },
				"BEE:Hebergements_touristiques": {
					  "actiontype" : "GRID",
					  "title"      : "[%ROOM_TYPE%]: [%NAME%] proposé par [%HOST_NAME%]",
						"attributes" : [
							{"name": "Nom AirBnB du bien", 									"label": "[%NAME%]", 																	"type":"string"},
							{"name": "Lien AirBnB", 												"label": "https://www.airbnb.com/rooms/[%RBNB_ID%]", 	"type":"link"},
							{"name": "Type de bien", 												"label": "[%ROOM_TYPE%]", 														"type":"string"},
							{"name": "Environs / situation", 								"label": "[%NEIGHBOURHOOD%]", 												"type":"string"},
							{"name": "Nombre de nuits minimum", 						"label": "[%MINIMUM_NIGHTS%]", 												"type":"string"},
							{"name": "Prix/nuit", 													"label": "[%PRICE%]€", 																"type":"string"},
							{"name": "Disponibilité", 											"label": "[%AVAILABILITY_365%]/365", 									"type":"string"},
							{"name": "Nom AirBnB de l'hôte", 								"label": "[%HOST_NAME%]", 														"type":"string"},
							{"name": "Nombre de biens listés par l'hôte", 	"label": "[%CALCULATED_HOST_LISTINGS_COUNT%]", 				"type":"string"},
							{"name": "Identifiant AirBnB de l'hôte",        "label": "[%HOST_ID%]", 															"type":"string"},
							{"name": "Nombre d'évaluations", 								"label": "[%NUMBER_OF_REVIEWS%]", 										"type":"string"},
							{"name": "Date de la dernière évaluation", 			"label": "[%LAST_REVIEW%]", 													"type":"string"},
							{"name": "Nombre d'évaluations par mois", 			"label": "[%REVIEWS_PER_MONTH%]", 										"type":"string"},
							{"name": "Catégorie BEE", 											"label": "[%CATEGORY%]", 															"type":"string"},
							{"name": "Vérifié BEE", 												"label": "[%CHECKED%]", 															"type":"string"},
							{"name": "CAPAKEY", 														"label": "[%CAPAKEY%]", 															"type":"string"}
						]
				}
	};
