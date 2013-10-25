
Ext.namespace("ux.gfi");

ux.gfi['be-nl'] =  {
		"BROH:Bestemmingen" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name" : "Bestemmingen" ,  "label" : "[NAME_NL]" , "type" : "string" },
				{ "name" : "Link" 		 ,  "label" : "[URL_P_NL]", "type" : "link"   }
			]
		},
		"BROH:Structurerende_ruimten" : {
			"actiontype" : "GRID",
			"attributes" : [
				 { "name" : "Bestemmingen"	, "label" : "[NAME_NL]"		, "type" : "string" },
				 { "name" : "Link"			, "label" : "[URL_P_NL]"  	, "type" : "link" }
			]
		},
		"BROH:Linten_voor_handelskern" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Bestemmingen"		, "label" : "[AFFECTATION]" , "type" : "string" }
			]
		},
		"BROH:Maas" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Code"	, "label" : "[GMLINK]"			, "type" : "string" },
				{ "name": "Link"	, "label" : "[PATH_INTER]"		, "type" : "string" }
			]
		},
		"BROH:Toegankelijkheid" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"BROH:Uithangborden" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"DMS_INV_ARBR:Arbres_Remarquables": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Omtrek"				, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Naam"				, "label" : "[tax_nl]"				, "type" : "string"},
				{ "name": "Latijn taxon"		, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Link CMS"			, "label" : "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Fiche van de boom"	, "label" : "http://bomen-inventaris.irisnet.be/arbre/[results_nl]/[id]/", "type" : "link"},
				{ "name": "Foto"				, "label" : "http://bomen-inventaris.irisnet.be/medias/trees/[firstimage]", "type" : "link"},
				{ "name": "Hoogte"				, "label" : "[hauteur] m"			, "type" : "string"},
				{ "name": "Diameter van de top"	, "label" : "[diametre_cime] m"		, "type" : "string"},
				{ "name": "Soort plaats"		, "label" : "[emplacement]"			, "type" : "string"},
				//{ "name": "statusId"			, "label" : "[status]"				, "type" : "string"},
				{ "name": "Statuut"				, "label" : "[Legendenl]"			, "type" : "string"}
			]
		},
		"DMS_INV_ARBR:Arbres_remarquables_rarete": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Identificatie"			, "label" : "[id]"					, "type" : "string"},
				{ "name": "Latijn taxon"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Zeldzamheid"				, "label" : "[rarete]"				, "type" : "string"}
			]
		},
		"DMS_INV_ARBR:Arbres_remarquables_100_biggest": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Omtrek"					, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Indeling van maten"		, "label" : "[ClassementTailles]"	, "type" : "string"}
			]
		},
		"BROH:Patrimonium": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Beschrijving"	, "label" : "[BESCHRIJVING]"	, "type" : "string"},
				{ "name": "Gemeente"		, "label" : "[GEMEENTE]"		, "type" : "string"},
				{ "name": "Adres"			, "label" : "[ADRES]"			, "type" : "string"},
				{ "name": "Police nummer"	, "label" : "[NRPOLICE]"		, "type" : "string"},
				{ "name": "Mon./Land./Geh."	, "label" : "[ML]"				, "type" : "string"},
				{ "name": "Besch./Bewaar."	, "label" : "[CLBL]"			, "type" : "string"},
				{ "name": "Datum DB"		, "label" : "[AD]"				, "type" : "string"},
				{ "name": "Dossier N°"		, "label" : "[DMSFOLDERNR]"		, "type" : "string"},
				{ "name": "Commentaar"		, "label" : "[COMMENTAIRE]"		, "type" : "string"},
				{ "name": "EXTPROT"			, "label" : "[EXTPROT]"			, "type" : "string"},
				{ "name": "NB"				, "label" : "[NB]"				, "type" : "string"}
			]
		},
		"TAX:Observations": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "C_OBSERV"			, "label" : "[C_OBSERV]"	, "type" : "string"},
				{ "name": "DATE_REAL"			, "label" : "[DATE_REAL]"	, "type" : "string"},
				{ "name": "LIEN_HTTP"			, "label" : "[LIEN_HTTP]"	, "type" : "link"},
				{ "name": "ORIG_OBS"			, "label" : "[ORIG_OBS]"	, "type" : "string"},
				{ "name": "PARCELLE"			, "label" : "[PARCELLE]"	, "type" : "string"}
			]
		},
		"BUV:Voorkooprecht": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Zone naam"			, "label" : "[NOM_NL]"	, "type" : "string"},
				{ "name": "link"				, "label" : "[URL_NL]"				, "type" : "link"},
				{ "name": "aktief/inaktief"		, "label" : "[ACTIF]"				, "type" : "string"}
			]
		}
};
