
Ext.namespace("ux.gfi");

ux.gfi['fr-be'] = {
		"AATL:Affectations" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name" : "Affectation" ,  "label" : "[NAME_FR]" , "type" : "string" },
				{ "name" : "Lien" 		 ,  "label" : "[URL_P_FR]", "type" : "link"   }
			]
		},
		"AATL:Espaces_structurants" : {
			"actiontype" : "GRID",
			"attributes" : [
				 { "name" : "Affectation"	, "label" : "[NAME_FR]"		, "type" : "string" },
				 { "name" : "Lien"			, "label" : "[URL_P_FR]"  	, "type" : "link" }
			]
		},
		"AATL:Liseres_de_noyau_commercial" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Affectation"		, "label" : "[AFFECTATION]" , "type" : "string" }
			]
		},
		"AATL:Maille" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Code"	, "label" : "[GMLINK]"			, "type" : "string" },
				{ "name": "Lien"	, "label" : "[PATH_INTER]"		, "type" : "string" }
			]
		},
		"AATL:Accessibilite" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Type de zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"AATL:Enseignes" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Type de zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"AATL_DMS_SITE_ARBR:Arbres_Remarquables": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Circonf�rence"		, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[tax_fr]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[results_fr]/[id]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[firstimage]", "type" : "picture"},
				{ "name": "Hauteur"				, "label" : "[hauteur] m"			, "type" : "string"},
				{ "name": "Diam�tre de la c�me"	, "label" : "[diametre_cime] m"		, "type" : "string"},
				{ "name": "type d'emplacement"	, "label" : "[emplacement]"			, "type" : "string"},
				{ "name": "statut"				, "label" : "[Legendefr]"			, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:arbres_remarquables_DEV": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Circonf�rence"		, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[tax_fr]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbresinvdev.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbresinvdev.irisnet.be/arbre/[results_fr]/[id]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbresinvdev.irisnet.be/medias/trees/[firstimage]", "type" : "picture"},
				{ "name": "Hauteur"				, "label" : "[hauteur] m"			, "type" : "string"},
				{ "name": "Diam�tre de la c�me"	, "label" : "[diametre_cime] m"		, "type" : "string"},
				{ "name": "type d'emplacement"	, "label" : "[emplacement]"			, "type" : "string"},
				{ "name": "statut"				, "label" : "[Legendefr]"			, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:Arbres_remarquables_rarete": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Identifiant"			, "label" : "[id]"					, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "raret�"				, "label" : "[rarete]"				, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:Arbres_remarquables_100_biggest": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Circonf�rence"			, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Classement des tailles"	, "label" : "[ClassementTailles]"	, "type" : "string"}
			]
		},
		"AATL:Patrimoine": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "D�nomination"	, "label" : "[DENOMINATION]"	, "type" : "string"},
				{ "name": "Commune"			, "label" : "[COMMUNE]"			, "type" : "string"},
				{ "name": "Adresse"			, "label" : "[ADRESSE]"			, "type" : "string"},
				{ "name": "N� de police"	, "label" : "[NRPOLICE]"		, "type" : "string"},
				{ "name": "Mon./Site/Ens."	, "label" : "[MS]"				, "type" : "string"},
				{ "name": "Class./Sauv."	, "label" : "[CLSV]"			, "type" : "string"},
				{ "name": "Date AD"			, "label" : "[AD]"				, "type" : "string"},
				{ "name": "N� de dossier"	, "label" : "[DMSFOLDERNR]"		, "type" : "string"},
				{ "name": "Commentaire"		, "label" : "[COMMENTAIRE]"		, "type" : "string"},
				{ "name": "EXTPROT"			, "label" : "[EXTPROT]"			, "type" : "string"},
				{ "name": "NB"				, "label" : "[NB]"				, "type" : "string"}
			]
		},
		"AATL_DMS_SITE_ARBR:Visites_arbres": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Date de la derni�re visite"	, "label" : "[date]"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[tax_fr]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[results_fr]/[id]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[firstimage]", "type" : "link"}
			]
		},
		"AATL_DMS_SITE_ARBR_PRIVATE:Arbres_remarquables_valeur_patrimoniale": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Valeur patrimoniale"	, "label" : "[VP]"	, "type" : "string"},
				{ "name": "Nom"					, "label" : "[tax_fr]"				, "type" : "string"},
				{ "name": "Taxon latin"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Lien CMS"			, "label" : "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Fiche de l'arbre"	, "label" : "http://arbres-inventaire.irisnet.be/arbre/[results_fr]/[id]/", "type" : "link"},
				{ "name": "Photo"				, "label" : "http://arbres-inventaire.irisnet.be/medias/trees/[firstimage]", "type" : "link"}
			]
		},
		"AED:Zones_de_preemption": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Nom de zone"			, "label" : "[NOM_FR]"	, "type" : "string"},
				{ "name": "Lien"				, "label" : "[URL_FR]"				, "type" : "link"},
				{ "name": "actif/inactif"		, "label" : "[ACTIF]"				, "type" : "string"}
			]
		},
		"TAX:Observations": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "C_OBSERV"			, "label" : "[C_OBSERV]"	, "type" : "string"},
				{ "name": "DATE_REAL"			, "label" : "[DATE_REAL]"	, "type" : "string"},
				{ "name": "LIEN_HTTP"			, "label" : "[LIEN_HTTP]"	, "type" : "file"},
				{ "name": "ORIG_OBS"			, "label" : "[ORIG_OBS]"	, "type" : "string"},
				{ "name": "PARCELLE"			, "label" : "[PARCELLE]"	, "type" : "string"}
			]
		}
	};

