
Ext.namespace("ux.gfi");

ux.gfi.nl =  {
		"BROH:Bestemmingen" : {
			"actiontype" : "GRID",
			"title"      : "[NAME_NL]",
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
			"title"		 : "[tax_nl]",
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
				{ "name": "Statuut"				, "label" : "[Legendenl]"			, "type" : "string"}
			]
		},
		"DMS_INV_ARBR:Arbres_remarquables_rarete": {
			"actiontype" : "GRID",
			"title"		 : "[tax_nl]: [rarete]",
			"attributes" : [
				{ "name": "Identificatie"			, "label" : "[id]"					, "type" : "string"},
				{ "name": "Latijn taxon"			, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Zeldzamheid"				, "label" : "[rarete]"				, "type" : "string"}
			]
		},
		"DMS_INV_ARBR:Arbres_remarquables_100_biggest": {
			"actiontype" : "GRID",
			"title"		 : "[tax_nl]",
			"attributes" : [
				{ "name": "Omtrek"					, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Indeling van maten"		, "label" : "[ClassementTailles]"	, "type" : "string"}
			]
		},
		"BROH:Wijkcontract": {
			"actiontype" : "GRID",
			"title"		 : "Wijkcontract: [WIJKNAAM]",
			"attributes" : [
				{ "name": "Naam"								, "label" : "[WIJKNAAM]"					, "type": "string"},
				{ "name": "Gemeente"							, "label" : "[GEMEENTE]"					, "type": "string"},
				{ "name": "Date d'arrêté du gouvernement"		, "label" : "[ARRET_GVT]"				, "type": "string"},
				{ "name": "Date de notification à la commune"	, "label" : "[NOTIF_COMM]"				, "type": "string"},
				{ "name": "End datum"							, "label" : "[END_DATUM]"				, "type": "string"},
				{ "name": "Actief"								, "label" : "['Nee','Ja'][[STATUT]]"	, "type": "eval"},
				{ "name": "Bureau d'étude"						, "label" : "[NOM_BE]"					, "type": "string"},
				{ "name": "Bureau d'étude (responsable)"		, "label" : "[RESP_BE]"					, "type": "string"},
				{ "name": "Reeks"								, "label" : "[REEKS]"					, "type": "string"},
				{ "name": "Gestionnaire"						, "label" : "[GESTION]"					, "type": "string"},
				{ "name": "Contact"								, "label" : "[TEL_BE]"					, "type": "string"},
				{ "name": "Subside régional"					, "label" : "[SUBS_REG]"				, "type": "string"},
				{ "name": "Référence comptable"					, "label" : "[REFERENCE]"				, "type": "string"},
				{ "name": "ID"									, "label" : "[ID]"						, "type": "string"}
			]
		},
		"BROH:Verkavelingen": {
			"actiontype" : "GRID",
			"title"		 : "[REFSITEX]",
			"attributes" : [
				{ "name": "Naam"					, "label" : "[OBJET]"			, "type": "string"},
				{ "name": "Adres"					, "label" : "[ADRES]"			, "type": "string"},
				{ "name": "Aanvrager"				, "label" : "[AANVRAGER]"		, "type": "string"},
				{ "name": "Datum van betekening"	, "label" : "[DATUMBETEK]"		, "type": "string"},
				{ "name": "Vergunning"				, "label" : "[VERGAFGELEVERD]"	, "type": "string"},
				{ "name": "NOVA referentie"			, "label" : "[REFNOVA]"			, "type": "string"},
				{ "name": "SITEX referentie"		, "label" : "[REFSITEX]"		, "type": "string"},
				{ "name": "Kadastraal referentie"	, "label" : "[KADNUMMER]"		, "type": "string"},
				{ "name": "ID"						, "label" : "[ID]"				, "type": "string"},
				{ "name": "Uiteindelijke toestand"	, "label" : "[EINDTOESTAND]"	, "type": "string"}
			]
		},
		"BROH:BBP":{
			"actiontype" : "GRID",
			"title"		 : "BBP: [OBJET]",
			"attributes" : [
				{ "name": "Naam"						, "label" : "[OBJET]"			, "type" : "string"},
				{ "name": "NOVA referentie"				, "label" : "[REFNOVA]"			, "type" : "string"},
				{ "name": "SPEC referentie"				, "label" : "[REFSPEC]"			, "type" : "string"},
				{ "name": "MER"							, "label" : "[MER]"				, "type" : "string"},
				{ "name": "Besluit type"				, "label" : "[BESLUITTYPE]"		, "type" : "string"},
				{ "name": "Datum van besluit"			, "label" : "[DATBESLUIT]"		, "type" : "string"},
				{ "name": "DATBESONTWEIG"				, "label" : "[DATBESONTWEIG]"	, "type" : "string"},
				{ "name": "DATBESONTWPLAN"				, "label" : "[DATBESONTWPLAN]"	, "type" : "string"},
				{ "name": "In ZGB"						, "label" : "[ZGB]"				, "type" : "string"},
				{ "name": "Beslissing"					, "label" : "[BESLISSING]"		, "type" : "string"},
				{ "name": "BESLONTWPLAN"				, "label" : "[BESLONTWPLAN]"	, "type" : "string"},
				{ "name": "ID"							, "label" : "[ID]"				, "type" : "string"}
			]
		},

		"BROH:Patrimonium": {
			"actiontype" : "GRID",
			"title"      : "[ML]: [BESCHRIJVING]",
			"attributes" : [
				{ "name": "Beschrijving"	, "label" : "[BESCHRIJVING]"	, "type" : "string"},
				{ "name": "Gemeente"		, "label" : "[GEMEENTE]"		, "type" : "string"},
				{ "name": "Adres"			, "label" : "[ADRES]"			, "type" : "string"},
				{ "name": "Police nummer"	, "label" : "[NRPOLICE]"		, "type" : "string"},
				{ "name": "Mon./Land./Geh."	, "label" : "[ML]"				, "type" : "string"},
				{ "name": "Besch./Bewaar."	, "label" : "[CLBL]"			, "type" : "string"},
				{ "name": "Datum DB"		, "label" : "[AD]"				, "type" : "string"},
				{ "name": "Folder nummer"	, "label" : "[DMSFOLDERNR]"		, "type" : "string"},
				{ "name": "Commentaar"		, "label" : "[COMMENTAAR]"		, "type" : "string"},
				{ "name": "EXTPROT"			, "label" : "[EXTPROT]"			, "type" : "string"},
				{ "name": "NB"				, "label" : "[NB]"				, "type" : "string"}
			]
		},
		"BROH:Vrijwaringzone": {
			"actiontype" : "GRID",
			"title"      : "[ML] in [CLBL]: [Beschrijving]",
			"attributes" : [
				{ "name": "Beschrijving"	, "label" : "[Beschrijving]"	, "type" : "string"},
				{ "name": "Gemeente"		, "label" : "[GEMEENTE]"		, "type" : "string"},
				{ "name": "Adres"			, "label" : "[ADRES]"			, "type" : "string"},
				{ "name": "Policie nummer"	, "label" : "[NRPOLICE]"		, "type" : "string"},
				{ "name": "Mon./Site/Ens."	, "label" : "[ML]"				, "type" : "string"},
				{ "name": "Class./Sauv."	, "label" : "[CLBL]"			, "type" : "string"},
				{ "name": "AD datum"		, "label" : "[AD]"				, "type" : "string"},
				{ "name": "Folder nummer"	, "label" : "[DMSFOLDERNR]"		, "type" : "string"},
				{ "name": "Commentaar"		, "label" : "[COMMENTAAR]"		, "type" : "string"},
				{ "name": "EXTPROT"			, "label" : "[EXTPROT]"			, "type" : "string"},
				{ "name": "NB"				, "label" : "[NB]"				, "type" : "string"}
			]
		},
		"AATL:Patrimoine_New": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"			, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"										, "type" : "string"},
				{ "name": "Datatum van het laatste besluit"		, "label" : "[DATUM_AG2]"										, "type" : "string"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"										, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"										, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Ja','Nee'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
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
		"BROH:Perceel_2013": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2013: [CAPAKEY]",
			"attributes" : [
				{ "name": "APNC_MAPC"			, "label" : "[APNC_MAPC]"	, "type" : "string"},
				{ "name": "APNC_CADC"			, "label" : "[APNC_CADC]"	, "type" : "string"},
				{ "name": "CAPAKEY"				, "label" : "[CAPAKEY]"		, "type" : "string"},
				{ "name": "SHNC_FILE"			, "label" : "[SHNC_FILE]"	, "type" : "string"},
				{ "name": "SHEET"				, "label" : "[SHEET]"		, "type" : "string"},
				{ "name": "CDNC"				, "label" : "[CDNC]"		, "type" : "string"},
				{ "name": "CD5C"				, "label" : "[CD5C]"		, "type" : "string"},
				{ "name": "CSNC"				, "label" : "[CSNC]"		, "type" : "string"},
				{ "name": "MUNC"				, "label" : "[MUNC]"		, "type" : "string"},
				{ "name": "SHNC"				, "label" : "[SHNC]"		, "type" : "string"},
				{ "name": "APNC_CAD"			, "label" : "[APNC_CAD]"	, "type" : "string"},
				{ "name": "APNC_MAP"			, "label" : "[APNC_MAP]"	, "type" : "string"},
				{ "name": "RAD_NUM"				, "label" : "[RAD_NUM]"		, "type" : "string"},
				{ "name": "EXP_ALPHA"			, "label" : "[EXP_ALPHA]"	, "type" : "string"},
				{ "name": "EXP_NUM"				, "label" : "[EXP_NUM]"		, "type" : "string"},
				{ "name": "CAPATY"				, "label" : "[CAPATY]"		, "type" : "string"},
				{ "name": "ID"					, "label" : "[ID]"			, "type" : "string"},
				{ "name": "SHAPE_AREA_IN_DB"	, "label" : "[SHAPE_AREA]"	, "type" : "string"}
			]
		},
		"BROH:Perceel_2012": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2012: [CAPAKEY]",
			"attributes" : [
				{ "name": "APNC_MAPC"			, "label" : "[APNC_MAPC]"	, "type" : "string"},
				{ "name": "APNC_CADC"			, "label" : "[APNC_CADC]"	, "type" : "string"},
				{ "name": "CAPAKEY"				, "label" : "[CAPAKEY]"		, "type" : "string"},
				{ "name": "SHNC_FILE"			, "label" : "[SHNC_FILE]"	, "type" : "string"},
				{ "name": "SHEET"				, "label" : "[SHEET]"		, "type" : "string"},
				{ "name": "CDNC"				, "label" : "[CDNC]"		, "type" : "string"},
				{ "name": "CD5C"				, "label" : "[CD5C]"		, "type" : "string"},
				{ "name": "CSNC"				, "label" : "[CSNC]"		, "type" : "string"},
				{ "name": "MUNC"				, "label" : "[MUNC]"		, "type" : "string"},
				{ "name": "SHNC"				, "label" : "[SHNC]"		, "type" : "string"},
				{ "name": "APNC_CAD"			, "label" : "[APNC_CAD]"	, "type" : "string"},
				{ "name": "APNC_MAP"			, "label" : "[APNC_MAP]"	, "type" : "string"},
				{ "name": "RAD_NUM"				, "label" : "[RAD_NUM]"		, "type" : "string"},
				{ "name": "EXP_ALPHA"			, "label" : "[EXP_ALPHA]"	, "type" : "string"},
				{ "name": "EXP_NUM"				, "label" : "[EXP_NUM]"		, "type" : "string"},
				{ "name": "CAPATY"				, "label" : "[CAPATY]"		, "type" : "string"},
				{ "name": "ID"					, "label" : "[ID]"			, "type" : "string"},
				{ "name": "SHAPE_AREA_IN_DB"	, "label" : "[SHAPE_AREA]"	, "type" : "string"}
			]
		},
		"BROH:Perceel_2011": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2011: [CAPAKEY]",
			"attributes" : [
				{ "name": "APNC_MAPC"			, "label" : "[APNC_MAPC]"	, "type" : "string"},
				{ "name": "APNC_CADC"			, "label" : "[APNC_CADC]"	, "type" : "string"},
				{ "name": "CAPAKEY"				, "label" : "[CAPAKEY]"		, "type" : "string"},
				{ "name": "SHNC_FILE"			, "label" : "[SHNC_FILE]"	, "type" : "string"},
				{ "name": "SHEET"				, "label" : "[SHEET]"		, "type" : "string"},
				{ "name": "CDNC"				, "label" : "[CDNC]"		, "type" : "string"},
				{ "name": "CD5C"				, "label" : "[CD5C]"		, "type" : "string"},
				{ "name": "CSNC"				, "label" : "[CSNC]"		, "type" : "string"},
				{ "name": "MUNC"				, "label" : "[MUNC]"		, "type" : "string"},
				{ "name": "SHNC"				, "label" : "[SHNC]"		, "type" : "string"},
				{ "name": "APNC_CAD"			, "label" : "[APNC_CAD]"	, "type" : "string"},
				{ "name": "APNC_MAP"			, "label" : "[APNC_MAP]"	, "type" : "string"},
				{ "name": "RAD_NUM"				, "label" : "[RAD_NUM]"		, "type" : "string"},
				{ "name": "EXP_ALPHA"			, "label" : "[EXP_ALPHA]"	, "type" : "string"},
				{ "name": "EXP_NUM"				, "label" : "[EXP_NUM]"		, "type" : "string"},
				{ "name": "CAPATY"				, "label" : "[CAPATY]"		, "type" : "string"},
				{ "name": "ID"					, "label" : "[ID]"			, "type" : "string"},
				{ "name": "SHAPE_AREA_IN_DB"	, "label" : "[SHAPE_AREA]"	, "type" : "string"}
			]
		},
		"BROH:Gemeentegrenzen": {
			"actiontype" : "GRID",
			"title"      : "Commune: [MUDN]",
			"attributes" : []
		}
};
