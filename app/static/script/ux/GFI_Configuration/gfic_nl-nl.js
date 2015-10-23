
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
		/*"BROH:Maas" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Code"	, "label" : "[GMLINK]"			, "type" : "string" },
				{ "name": "Link"	, "label" : "[PATH_INTER]"		, "type" : "link" }
			]
		},*/
		"BROH:Maas": {
			"actiontype" : "REDIRECT",
			"url"		 : "[PATH_INTER]"
		},
		"BROH:Toegankelijkheid" : {
			"actiontype" : "GRID",
			"title"		 : "Toegankelijkheid: [ZONE]",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"BROH:Uithangborden" : {
			"actiontype" : "GRID",
			"title"		 : "Uithangborden: [ZONE]",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"BROH:Reclame" : {
			"actiontype" : "GRID",
			"title"		 : "Reclame: [ZONE]",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[ZONE]"		, "type" : "string" }
			]
		},
		"BUV:Voorkooprecht": {
			"actiontype" : "GRID",
			"title"		 : "Voorkooprecht: [NOM_NL]",
			"attributes" : [
				{ "name": "Naam "				, "label" : "[NOM_NL]"	, "type" : "string"},
				{ "name": "Lien"				, "label" : "[URL_NL]"				, "type" : "link"},
				{ "name": "Status"		, "label" : "['Niet actief','Actief'][[ACTIF]]"				, "type" : "eval"}
			]
		},
		"BROH_DML_LAND_BOOM:Opmerkelijke_bomen": {
			"actiontype" : "GRID",
			"title"		 : "[tax_nl]",
			"attributes" : [
				{ "name": "Omtrek"				, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Naam"				, "label" : "[tax_nl]"				, "type" : "string"},
				{ "name": "Latijnse benaming"	, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "CMS link"			, "label" : "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Boomfiche"			, "label" : "http://bomen-inventaris.irisnet.be/arbre/[results_nl]/[id]/", "type" : "link"},
				{ "name": "Foto"				, "label" : "http://bomen-inventaris.irisnet.be/medias/trees/[firstimage]", "type" : "picture"},
				{ "name": "Hoogte"				, "label" : "[hauteur] m"			, "type" : "string"},
				{ "name": "Diameter kroon"		, "label" : "[diametre_cime] m"		, "type" : "string"},
				{ "name": "Localisatie"			, "label" : "[emplacement]"			, "type" : "string"},
				{ "name": "Toestand"			, "label" : "[Legendenl]"			, "type" : "string"}
			]
		},
		"BROH_DML_LAND_BOOM:Gevelde_ofverdwenen_bomen": {
			"actiontype" : "GRID",
			"title"		 : "[tax_nl]",
			"attributes" : [
				{ "name": "Omtrek"				, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Naam"				, "label" : "[tax_nl]"				, "type" : "string"},
				{ "name": "Latijnse benaming"	, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "CMS link"			, "label" : "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[id]", "type" : "link"},
				{ "name": "Boomfiche"			, "label" : "http://bomen-inventaris.irisnet.be/arbre/[results_nl]/[id]/", "type" : "link"},
				{ "name": "Foto"				, "label" : "http://bomen-inventaris.irisnet.be/medias/trees/[firstimage]", "type" : "picture"},
				{ "name": "Hoogte"				, "label" : "[hauteur] m"			, "type" : "string"},
				{ "name": "Diameter kroon"		, "label" : "[diametre_cime] m"		, "type" : "string"},
				{ "name": "Localisatie"			, "label" : "[emplacement]"			, "type" : "string"},
				{ "name": "Toestand"			, "label" : "[Legendenl]"			, "type" : "string"}
			]
		},
		"BROH_DML_LAND_BOOM:Opmerkelijke_bomen_zeldzaamheid": {
			"actiontype" : "GRID",
			"title"		 : "[tax_la]: [rarete]",
			"attributes" : [
				{ "name": "Id"					, "label" : "[id]"					, "type" : "string"},
				{ "name": "Latijnse benaming"	, "label" : "[tax_la]"				, "type" : "string"},
				{ "name": "Zeldzaamheid"		, "label" : "[rarete]"				, "type" : "string"}
			]
		},
		"BROH_DML_LAND_BOOM:Opmerkelijke_bomen_100_biggest": {
			"actiontype" : "GRID",
			"title"		 : "[tax_nl]",
			"attributes" : [
				{ "name": "Omtrek"			, "label" : "[circonference] cm"	, "type" : "string"},
				{ "name": "Afmetingenindex"	, "label" : "[ClassementTailles]"	, "type" : "string"}
			]
		},
		"BROH:Wijkcontract": {
			"actiontype" : "GRID",
			"title"		 : "Wijkcontract: [WIJKNAAM]",
			"attributes" : [
				{ "name": "Naam"								, "label" : "[WIJKNAAM]"					, "type": "string"},
				{ "name": "Gemeente"							, "label" : "[GEMEENTE]"					, "type": "string"},
				{ "name": "Date d'arrêté du gouvernement"		, "label" : "[ARRET_GVT]"				, "type": "date"},
				{ "name": "Date de notification à la commune"	, "label" : "[NOTIF_COMM]"				, "type": "date"},
				{ "name": "End datum"							, "label" : "[END_DATUM]"				, "type": "date"},
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
				{ "name": "Naam"								, "label" : "[OBJET]"			, "type": "string"},
				{ "name": "Adres"								, "label" : "[ADRES]"			, "type": "string"},
				{ "name": "Aanvrager"							, "label" : "[AANVRAGER]"		, "type": "string"},
				{ "name": "Datum van betekening"				, "label" : "[DATUMBETEK]"		, "type": "date"},
				{ "name": "Datum laaste betekening"				, "label" : "[DATVERGGEM]"		, "type": "date"},
				{ "name": "Vergunning"							, "label" : "[VERGAFGELEVERD]"	, "type": "string"},
				{ "name": "Datum vergunning door gemeente"		, "label" : "[DATGEM]"			, "type": "date"},
				{ "name": "Gemeente referentie"					, "label" : "[REFCOM]"			, "type": "string"},
				{ "name": "NOVA referentie"						, "label" : "[REFNOVA]"			, "type": "string"},
				{ "name": "SITEX referentie"					, "label" : "[REFSITEX]"		, "type": "string"},
				{ "name": "Kadastraal referentie"				, "label" : "[KADNUMMER]"		, "type": "string"},
				{ "name": "ID"									, "label" : "[ID]"				, "type": "string"},
				{ "name": "Uiteindelijke toestand"				, "label" : "[EINDTOESTAND]"	, "type": "string"}
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
				{ "name": "Datum van besluit"			, "label" : "[DATBESLUIT]"		, "type" : "date"},
				{ "name": "DATBESONTWEIG"				, "label" : "[DATBESONTWEIG]"	, "type" : "date"},
				{ "name": "DATBESONTWPLAN"				, "label" : "[DATBESONTWPLAN]"	, "type" : "date"},
				{ "name": "In ZGB"						, "label" : "[ZGB]"				, "type" : "string"},
				{ "name": "Beslissing"					, "label" : "[BESLISSING]"		, "type" : "string"},
				{ "name": "BESLONTWPLAN"				, "label" : "[BESLONTWPLAN]"	, "type" : "string"},
				{ "name": "ID"							, "label" : "[ID]"				, "type" : "string"}
			]
		},
		"BROH:Vrijwaringzone": {
			"actiontype" : "GRID",
			"title"      : "Vrijwaringzone van [BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:Patrimonium": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:ARCHEOLOGISCHE_LANDSCHAP_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:ARCHEOLOGISCHE_LANDSCHAP_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:ARCHEOLOGISCHE_LANDSCHAP_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:ARCHEOLOGISCHE_LANDSCHAP_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:GEHEEL_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:GEHEEL_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:GEHEEL_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:GEHEEL_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:LANDSCHAP_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:LANDSCHAP_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:LANDSCHAP_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:LANDSCHAP_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:MONUMENT_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:MONUMENT_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:MONUMENT_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"BROH:MONUMENT_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[BESCHERMD_ALS_NL]: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		},
		"TAX:Observations": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "C_OBSERV"			, "label" : "[C_OBSERV]"	, "type" : "string"},
				{ "name": "DATE_REAL"			, "label" : "[DATE_REAL]"	, "type" : "date"},
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
		"BROH:Perceel_2014": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2014: [CAPAKEY]",
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
		},
		"BROH:Goed_dat_beschermd_is_of_ingeschreven_op_de_bewaarlijst": {
			"actiontype" : "GRID",
			"title"      : "Goed: [BENAMING_PAT_VW_NL]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[BENAMING_PAT_VW_NL]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[STRAAT_NL] [NUMMER_VAN], [POSTCODE] [GEMEENTE_NL]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[TYPE_VRIJWARING_NL]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[BESCHERMD_ALS_NL]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[DATUM_AG1]"							, "type" : "date"},
				{ "name": "Datatum van het laatste besluit"		, "label" : "[DATUM_AG2]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[DOCUM_AG1]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[DOCUM_AG2]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[FOTO]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[VRIJWARINGSZONE]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[NUMMER_DOSSIER]/[CODE_DOSSIER]"					, "type" : "string"}
			]
		}
};
