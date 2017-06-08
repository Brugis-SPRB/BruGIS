
Ext.namespace("ux.gfi");

ux.gfi.nl =  {
		"BSO:Bestemmingen" : {
			"actiontype" : "GRID",
			"title"      : "[%NAME_NL%]",
			"attributes" : [
				{ "name" : "Bestemmingen" ,  "label" : "[%NAME_NL%]" , "type" : "string" },
				{ "name" : "Link" 		 ,  "label" : "[%URL_P_NL%]", "type" : "link"   }
			]
		},
		"BSO:Structurerende_ruimten" : {
			"actiontype" : "GRID",
			"attributes" : [
				 { "name" : "Bestemmingen"	, "label" : "[%NAME_NL%]"		, "type" : "string" },
				 { "name" : "Link"			, "label" : "[%URL_P_NL%]"  	, "type" : "link" }
			]
		},
		"BSO:Linten_voor_handelskern" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Bestemmingen"		, "label" : "[%AFFECTATION%]" , "type" : "string" }
			]
		},
		/*"BSO:Maas" : {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "Code"	, "label" : "[%GMLINK%]"			, "type" : "string" },
				{ "name": "Link"	, "label" : "[%PATH_INTER%]"		, "type" : "link" }
			]
		},*/
		"BSO:Maas": {
			"actiontype" : "REDIRECT",
			"url"		 : "[%PATH_INTER%]"
		},
		"BSO:Toegankelijkheid" : {
			"actiontype" : "GRID",
			"title"		 : "Toegankelijkheid: [%ZONE%]",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[%ZONE%]"		, "type" : "string" }
			]
		},
		"BSO:Uithangborden" : {
			"actiontype" : "GRID",
			"title"		 : "Uithangborden: [%ZONE%]",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[%ZONE%]"		, "type" : "string" }
			]
		},
		"BSO:Reclame" : {
			"actiontype" : "GRID",
			"title"		 : "Reclame: [%ZONE%]",
			"attributes" : [
				{ "name": "Soort zone"	, "label" : "[%ZONE%]"		, "type" : "string" }
			]
		},
		"BUV:Voorkooprecht": {
			"actiontype" : "GRID",
			"title"		 : "Voorkooprecht: [%NOM_NL%]",
			"attributes" : [
				{ "name": "Naam "				, "label" : "[%NOM_NL%]"	, "type" : "string"},
				{ "name": "Lien"				, "label" : "[%URL_NL%]"				, "type" : "link"},
				{ "name": "Status"		, "label" : "['Niet actief','Actief'][[%ACTIF%]]"				, "type" : "eval"}
			]
		},
		"BSO_DML_BESC:Opmerkelijke_bomen": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_nl%]",
			"attributes" : [
				{ "name": "Omtrek"				, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Naam"				, "label" : "[%tax_nl%]"				, "type" : "string"},
				{ "name": "Latijnse benaming"	, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "CMS link"			, "label" : "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Boomfiche"			, "label" : "http://bomen-inventaris.irisnet.be/arbre/[%results_nl%]/[%id%]/", "type" : "link"},
				{ "name": "Foto"				, "label" : "http://bomen-inventaris.irisnet.be/medias/trees/[%firstimage%]", "type" : "picture"},
				{ "name": "Hoogte"				, "label" : "[%hauteur%] m"			, "type" : "string"},
				{ "name": "Diameter kroon"		, "label" : "[%diametre_cime%] m"		, "type" : "string"},
				{ "name": "Localisatie"			, "label" : "[%emplacement%]"			, "type" : "string"},
				{ "name": "Toestand"			, "label" : "[%Legendenl%]"			, "type" : "string"}
			]
		},
		"BSO_DML_BESC:Gevelde_ofverdwenen_bomen": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_nl%]",
			"attributes" : [
				{ "name": "Omtrek"				, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Naam"				, "label" : "[%tax_nl%]"				, "type" : "string"},
				{ "name": "Latijnse benaming"	, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "CMS link"			, "label" : "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[%id%]", "type" : "link"},
				{ "name": "Boomfiche"			, "label" : "http://bomen-inventaris.irisnet.be/arbre/[%results_nl%]/[%id%]/", "type" : "link"},
				{ "name": "Foto"				, "label" : "http://bomen-inventaris.irisnet.be/medias/trees/[%firstimage%]", "type" : "picture"},
				{ "name": "Hoogte"				, "label" : "[%hauteur%] m"			, "type" : "string"},
				{ "name": "Diameter kroon"		, "label" : "[%diametre_cime%] m"		, "type" : "string"},
				{ "name": "Localisatie"			, "label" : "[%emplacement%]"			, "type" : "string"},
				{ "name": "Toestand"			, "label" : "[%Legendenl%]"			, "type" : "string"}
			]
		},
		"BSO_DML_BESC:Opmerkelijke_bomen_zeldzaamheid": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_la%]: [%rarete%]",
			"attributes" : [
				{ "name": "Id"					, "label" : "[%id%]"					, "type" : "string"},
				{ "name": "Latijnse benaming"	, "label" : "[%tax_la%]"				, "type" : "string"},
				{ "name": "Zeldzaamheid"		, "label" : "[%rarete%]"				, "type" : "string"}
			]
		},
		"BSO_DML_BESC:Opmerkelijke_bomen_100_biggest": {
			"actiontype" : "GRID",
			"title"		 : "[%tax_nl%]",
			"attributes" : [
				{ "name": "Omtrek"			, "label" : "[%circonference%] cm"	, "type" : "string"},
				{ "name": "Afmetingenindex"	, "label" : "[%ClassementTailles%]"	, "type" : "string"}
			]
		},
		"BSO_DML_BESC:Inventaris_gebouwen": {
			"actiontype" : "GRID",
			"title"		 : "Inventaris gebouwen: [%address_results_nl%]",
			"attributes" : [
				{ "name": "Adress"			, "label" : "[%address_results_nl%]"	, "type" : "string"},
				{ "name": "PWNC"			, "label" : "[%pwnc%]"				, "type" : "string"},
				{ "name": "Link"			, "label" : "[%url_nl%]"				, "type" : "link"},
				{ "name": "Beeld"			, "label" : "[%firstimage%]"			, "type" : "picture"}
			]
		},
		"BSO_DSV:Wijkcontract": {
			"actiontype" : "GRID",
			"title"		 : "Wijkcontract: [%WIJKNAAM%]",
			"attributes" : [
				{ "name": "Naam"								, "label" : "[%WIJKNAAM%]"					, "type": "string"},
				{ "name": "Gemeente"							, "label" : "[%GEMEENTE%]"					, "type": "string"},
				{ "name": "Date d'arrêté du gouvernement"		, "label" : "[%ARRET_GVT%]"				, "type": "date"},
				{ "name": "Date de notification à la commune"	, "label" : "[%NOTIF_COMM%]"				, "type": "date"},
				{ "name": "End datum"							, "label" : "[%END_DATUM%]"				, "type": "date"},
				{ "name": "Actief"								, "label" : "['Nee','Ja'][[%ACTIF%]]"	, "type": "eval"},
				{ "name": "Bureau d'étude"						, "label" : "[%NOM_BE%]"					, "type": "string"},
				{ "name": "Bureau d'étude (responsable)"		, "label" : "[%RESP_BE%]"					, "type": "string"},
				{ "name": "Reeks"								, "label" : "[%REEKS%]"					, "type": "string"},
				{ "name": "Gestionnaire"						, "label" : "[%GESTION%]"					, "type": "string"},
				{ "name": "Contact"								, "label" : "[%TEL_BE%]"					, "type": "string"},
				{ "name": "Subside régional"					, "label" : "[%SUBS_REG%]"				, "type": "string"},
				{ "name": "Référence comptable"					, "label" : "[%REFERENCE%]"				, "type": "string"},
				{ "name": "ID"									, "label" : "[%ID%]"						, "type": "string"}
			]
		},
		"BSO:Verkavelingen": {
			"actiontype" : "GRID",
			"title"		 : "[%REFSITEX%]",
			"attributes" : [
				{ "name": "Naam"								, "label" : "[%OBJET%]"			, "type": "string"},
				{ "name": "Adres"								, "label" : "[%ADRES%]"			, "type": "string"},
				{ "name": "Aanvrager"							, "label" : "[%AANVRAGER%]"		, "type": "string"},
				{ "name": "Datum van betekening"				, "label" : "[%DATUMBETEK%]"		, "type": "date"},
				{ "name": "Datum laaste betekening"				, "label" : "[%DATVERGGEM%]"		, "type": "date"},
				{ "name": "Vergunning"							, "label" : "[%VERGAFGELEVERD%]"	, "type": "string"},
				{ "name": "Datum vergunning door gemeente"		, "label" : "[%DATGEM%]"			, "type": "date"},
				{ "name": "Gemeente referentie"					, "label" : "[%REFCOM%]"			, "type": "string"},
				{ "name": "NOVA referentie"						, "label" : "[%REFNOVA%]"			, "type": "string"},
				{ "name": "SITEX referentie"					, "label" : "[%REFSITEX%]"		, "type": "string"},
				{ "name": "Kadastraal referentie"				, "label" : "[%KADNUMMER%]"		, "type": "string"},
				{ "name": "ID"									, "label" : "[%ID%]"				, "type": "string"},
				{ "name": "Uiteindelijke toestand"				, "label" : "[%EINDTOESTAND%]"	, "type": "string"}
			]
		},
		"BSO:BBP":{
			"actiontype" : "GRID",
			"title"		 : "BBP: [%OBJET%]",
			"attributes" : [
				{ "name": "Naam"						, "label" : "[%OBJET%]"			, "type" : "string"},
				{ "name": "NOVA referentie"				, "label" : "[%REFNOVA%]"			, "type" : "string"},
				{ "name": "SPEC referentie"				, "label" : "[%REFSPEC%]"			, "type" : "string"},
				{ "name": "MER"							, "label" : "[%MER%]"				, "type" : "string"},
				{ "name": "Besluit type"				, "label" : "[%BESLUITTYPE%]"		, "type" : "string"},
				{ "name": "Datum van besluit"			, "label" : "[%DATBESLUIT%]"		, "type" : "date"},
				{ "name": "DATBESONTWEIG"				, "label" : "[%DATBESONTWEIG%]"	, "type" : "date"},
				{ "name": "DATBESONTWPLAN"				, "label" : "[%DATBESONTWPLAN%]"	, "type" : "date"},
				{ "name": "In ZGB"						, "label" : "[%ZGB%]"				, "type" : "string"},
				{ "name": "Beslissing"					, "label" : "[%BESLISSING%]"		, "type" : "string"},
				{ "name": "BESLONTWPLAN"				, "label" : "[%BESLONTWPLAN%]"	, "type" : "string"},
				{ "name": "ID"							, "label" : "[%ID%]"				, "type" : "string"}
			]
		},
		"BSO:Vrijwaringzone": {
			"actiontype" : "GRID",
			"title"      : "Vrijwaringzone van [%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:Patrimonium": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:ARCHEOLOGISCHE_LANDSCHAP_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:ARCHEOLOGISCHE_LANDSCHAP_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:ARCHEOLOGISCHE_LANDSCHAP_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:ARCHEOLOGISCHE_LANDSCHAP_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:GEHEEL_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:GEHEEL_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:GEHEEL_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:GEHEEL_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:LANDSCHAP_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:LANDSCHAP_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:LANDSCHAP_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:LANDSCHAP_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:MONUMENT_BESCHERMING_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:MONUMENT_BESCHERMING_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:MONUMENT_BEWAARLIJST_AANVRAAG_PROCEDURE": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"BSO:MONUMENT_BEWAARLIJST_DEFINITIEF_BESLUIT": {
			"actiontype" : "GRID",
			"title"      : "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
			]
		},
		"TAX:Observaties": {
			"actiontype" : "GRID",
			"attributes" : [
				{ "name": "C_OBSERV"			, "label" : "[%C_OBSERV%]"	, "type" : "string"},
				{ "name": "DATE_REAL"			, "label" : "[%DATE_REAL%]"	, "type" : "date"},
				{ "name": "LIEN_HTTP"			, "label" : "[%LIEN_HTTP%]"	, "type" : "file"},
				{ "name": "ORIG_OBS"			, "label" : "[%ORIG_OBS%]"	, "type" : "string"},
				{ "name": "PARCELLE"			, "label" : "[%PARCELLE%]"	, "type" : "string"}
			]
		},
		"BSO:Perceel_2013": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2013: [%CAPAKEY%]",
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
		"BSO:Perceel_2012": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2012: [%CAPAKEY%]",
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
		"BSO:Perceel_2014": {
			"actiontype" : "GRID",
			"title"      : "Perceel 2014: [%CAPAKEY%]",
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
		"BSO:Gemeentegrenzen": {
			"actiontype" : "GRID",
			"title"      : "Commune: [%MUDN%]",
			"attributes" : []
		},
		"BSO:Goed_dat_beschermd_is_of_ingeschreven_op_de_bewaarlijst": {
			"actiontype" : "GRID",
			"title"      : "Goed: [%BENAMING_PAT_VW_NL%]",
			"attributes" : [
				{ "name": "Benaming"				, "label" : "[%BENAMING_PAT_VW_NL%]"								, "type" : "string"},
				{ "name": "Adres van het goed"		, "label" : "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]", "type" : "string"},
				{ "name": "Type van vrijwaring"		, "label" : "[%TYPE_VRIJWARING_NL%]"								, "type" : "string"},
				{ "name": "Gevrijwaard als"			, "label" : "[%BESCHERMD_ALS_NL%]"								, "type" : "string"},
				{ "name": "Datum van het eerste	besluit"		, "label" : "[%DATUM_AG1%]"							, "type" : "date"},
				{ "name": "Datatum van het laatste besluit"		, "label" : "[%DATUM_AG2%]"							, "type" : "date"},
				{ "name": "Het eerste besluit"					, "label" : "[%DOCUM_AG1%]"							, "type" : "link"},
				{ "name": "Het laatste besluit"					, "label" : "[%DOCUM_AG2%]"							, "type" : "link"},
				{ "name": "Foto"					, "label" : "[%FOTO%]"											, "type" : "picture"},
				{ "name": "Vrijwaringszone"			, "label" : "['Nee','Ja'][[%VRIJWARINGSZONE%]]"					, "type" : "eval"},
				{ "name": "Referentie DML"			, "label" : "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]"					, "type" : "string"}
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
        "BSO_GHI:Dossiers_infos": {
            "actiontype" : "GRID",
            "title"      : "Infos dossier: [%DOSSIER_NR%] [%PROCEDURE%]",
            "attributes" : [
            {"name":"Actueel verbod",                       "label":"[%ACTUEEL_VERBOD%]"                  ,"type":"string"},
            {"name":"Straat",                               "label":"[%STRAAT%]"                          ,"type":"string"},
            {"name":"Huisnummer - begin",                   "label":"if ('[%HUISNUMMER_BEGIN%]'.length > 0 && '[%BUS%]'.length > 0){'[%HUISNUMMER_BEGIN%] bus [%BUS%]'} else if ('[%HUISNUMMER_BEGIN%]'.length > 0 && '[%BUS%]'.length == 0){'[%HUISNUMMER_BEGIN%]'} else {''}"                    ,"type":"eval"},
            {"name":"Huisnummer - einde",                   "label":"[%HUISNUMMER_EINDE%]"                ,"type":"string"},
            {"name":"Verdieping",                           "label":"[%VERDIEPING%]"                      ,"type":"string"},
			{"name":"Exacte ligging",						"label":"[%EXACTE_LIGGING%]"					,"type":"string"},
            {"name":"Gemeente",                             "label":"[%POSTCODE%] [%GEMEENTE%]"             ,"type":"string"},
            {"name":"---------------------------------",    "label":""                                  ,"type":"string"},
            {"name":"Dossiernummer",                        "label":"[%DOSSIER_NR%]"                      ,"type":"string"},
            {"name":"Procedure",                            "label":"[%PROCEDURE%]"                       ,"type":"string"},
            {"name":"Beheerder",                            "label":"[%BEHEERDER%]"                       ,"type":"string"},
            {"name":"Eerste beslissing",                    "label":"[%EERSTE_BESLISSING%]"               ,"type":"string"},
            {"name":"Datum van eerste beslissing",          "label":"[%DATUM_EERSTE_BESLISSING%]"         ,"type":"string"},
            {"name":"Laatste beslissing",                   "label":"[%LAATSTE_BESLISSING%]"              ,"type":"string"},
            {"name":"Datum van laatste beslissing",         "label":"[%DATUM_LAATSTE_BESLISSING%]"        ,"type":"string"}
            ]
        },
        "BSO_DSV:Wijkcontracten_Programmas": {
            "actiontype" : "GRID",
            "title"      : "Wijkcontract (Programma): [%NOM_NL%]",
            "attributes" : [
                {"name": "Wijkcontract",            "label": "[%NOM_NL%]",                "type":"string"},
                {"name": "Actief",                  "label": "[%ACTIF%]",                 "type":"string"},
                {"name": "Webfiche",                "label": "http://wijken.brussels/1/q/[%ID%]",   "type":"link"},
                {"name": "Begindatum",              "label": "[%DT_DEBUT%]",              "type":"date"},
                {"name": "Einddatum",               "label": "[%DT_FIN%]",                "type":"date"},
                {"name": "Jaar",                    "label": "[%ANNEE%]",                 "type":"string"},
                {"name": "Postcode",                "label": "[%CP%]",                    "type":"string"},
                {"name": "studiebureau",            "label": "[%BUREAU%]",                "type":"string"},
                {"name": "Comptabiliteit",          "label": "[%REF_COMPTA%]",            "type":"string"}
            ]
        },
        "BSO_DSV:Wijkcontracten_Projecten": {
            "actiontype" : "GRID",
            "title"      : "Wijkcontract (Project): [%PROJ_NL%]",
            "attributes" : [
                {"name": "Project",                 "label": "[%PROJ_NL%]",               "type":"string"},
                {"name": "Wijkcontract",            "label": "[%CQD_NL%]",                "type":"string"},
                {"name": "Serie",                   "label": "[%SERIE%]",                 "type":"string"},
                {"name": "Adres",                   "label": "[%NUM%] [%RUE_NL%] - [%CP%]",   "type":"string"},
                {"name": "Webfiche",                "label": "http://wijken.brussels/1/qp/[%ID%]",   "type":"link"},
                {"name": "Beeld",                   "label": "[%IMG%]",                   "type":"picture"},
                {"name": "Fotocredit",              "label": "[%IMG_COPY%]",              "type":"string"},
                {"name": "studiebureau",            "label": "[%BUREAU%]",                "type":"string"},
                {"name": "Toewijzing van SB",       "label": "[%DT_BUREAU%]",             "type":"date"},
                {"name": "Entrepreneur",            "label": "[%ENTREP%]",                "type":"string"},
                {"name": "Verguningnummer",         "label": "[%PU_NUM%]",                "type":"string"},
                {"name": "Aflevering",              "label": "[%DT_RECEP%]",              "type":"date"}
            ]
        },
        "BSO_DSV:Stadsvernieuwingscontracten_Programmas": {
            "actiontype" : "GRID",
            "title"      : "Stadsvernieuwingscontracten (Programmas): [%NOM_NL%]",
            "attributes" : [
                {"name": "SV Contrat",              "label": "[%NOM_NL%]",                "type":"string"},
                {"name": "Serie",                   "label": "[%SERIE%]",                 "type":"string"},
								{"name": "Documenten",							"label": "[%DOC%]",										"type":"link"}
            ]
        },
        "BSO:Zones_met_verhoogde_huurprijs": {
            "actiontype" : "GRID",
            "title"      : "Zone nr [%MDRC%] - [%NAME_NL%]",
            "attributes" : [
                {"name": "Naam van zone",             "label": "[%NAME_NL%]",                "type":"string"},
                {"name": "Naam van zone (tweetaalig)","label": "[%NAME_BIL%]",               "type":"string"},
                {"name": "Nummer van zone",           "label": "[%MDRC%]",                   "type":"string"},
								{"name": "Staat",                     "label": "if ('[%SCENARIO%]'.length > 0 && '[%SCENARIO%]'=='2' ){'In een verhoogde zone'} else {'Buiten een verhoogde zone'}"                    ,"type":"eval"}
            ]
        }
    };
