conn = new Mongo();
db = conn.getDB("jumpstart");
db.hotels.drop();
db.hotels.insertOne(
{
    "propertyKey": "PEAC4656",
    "hotelName": "Peaceful Lodge",
    "location": {
        "streetAddress": "4299 Blue Canyon Street",
        "buildingName": null,
        "city": "Jonqui\u00e8re Northeast",
        "locality1": "QC",
        "locality2": "Jonqui\u00e8re",
        "country": "CA",
        "postalCode": "G7S",
        "geoSpatial": [
            "-71.1774",
            "48.4294"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "RIVE7144",
    "hotelName": "Riverside Hotel",
    "location": {
        "streetAddress": "9330 Blue Ditch Ride",
        "buildingName": null,
        "city": "Colibasi",
        "locality1": "Cahul",
        "locality2": "Cahul",
        "country": "MD",
        "postalCode": "MD-5316",
        "geoSpatial": [
            "28.1803",
            "45.7186"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AMAZ5082",
    "hotelName": "Amazing Hall",
    "location": {
        "streetAddress": "6095 Blue Creek Boulevard",
        "buildingName": null,
        "city": "North Sydney South Central",
        "locality1": "NS",
        "locality2": "Nova Scotia",
        "country": "CA",
        "postalCode": "B2A",
        "geoSpatial": [
            "-60.3769",
            "46.1169"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES8374",
    "hotelName": "Awesome Stay",
    "location": {
        "streetAddress": "1162 Little River Avenue",
        "buildingName": null,
        "city": "Helgeroa",
        "locality1": "Larvik",
        "locality2": "Larvik",
        "country": "NO",
        "postalCode": "3295",
        "geoSpatial": [
            "9.8628",
            "58.9939"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "STER2486",
    "hotelName": "Sterling Inn",
    "location": {
        "streetAddress": "6558 Little Bend Drive",
        "buildingName": "Building D5",
        "city": "Llangadwaladr",
        "locality1": "Wales",
        "locality2": "Isle of Anglesey",
        "country": "GB",
        "postalCode": "LL62",
        "geoSpatial": [
            "-4.4219",
            "53.1956"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROYA1567",
    "hotelName": "Royal Inn",
    "location": {
        "streetAddress": "8557 Short Hill Avenue",
        "buildingName": null,
        "city": "Gordon",
        "locality1": "ACT",
        "locality2": "CANBERRA",
        "country": "AU",
        "postalCode": "2906",
        "geoSpatial": [
            "149.085",
            "-35.4568"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAN9312",
    "hotelName": "Tranquil Lodge",
    "location": {
        "streetAddress": "7141 Long Bridge Road",
        "buildingName": null,
        "city": "Santa Mustiola",
        "locality1": null,
        "locality2": null,
        "country": "SM",
        "postalCode": "47890",
        "geoSpatial": [
            "12.4507",
            "43.9267"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "FAMO2005",
    "hotelName": "Famous Lodge",
    "location": {
        "streetAddress": "2859 Blue Stream Street",
        "buildingName": null,
        "city": "Jamaica Plain",
        "locality1": "MA",
        "locality2": "Suffolk",
        "country": "US",
        "postalCode": "02130",
        "geoSpatial": [
            "-71.1115",
            "42.3126"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "DEST2514",
    "hotelName": "Destination Inn",
    "location": {
        "streetAddress": "8587 Winding Gulch Street",
        "buildingName": null,
        "city": "Pu\u010dkorni\u0173 k.",
        "locality1": "Var\u0117nos r. sav.",
        "locality2": "Var\u0117nos r. sav.",
        "country": "LT",
        "postalCode": "65063",
        "geoSpatial": [
            "24.7167",
            "54.35"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "LAKE6035",
    "hotelName": "Lakeside House",
    "location": {
        "streetAddress": "9701 Short Tree Boulevard",
        "buildingName": null,
        "city": "Easton on the Hill",
        "locality1": "England",
        "locality2": "Northamptonshire",
        "country": "GB",
        "postalCode": "PE9",
        "geoSpatial": [
            "-0.5057",
            "52.6273"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AMAZ5130",
    "hotelName": "Amazing Stay",
    "location": {
        "streetAddress": "7067 Long Tree Circle",
        "buildingName": null,
        "city": "Hopen",
        "locality1": "Hopen",
        "locality2": "Hopen",
        "country": "SJ",
        "postalCode": "9174",
        "geoSpatial": [
            "25.1971",
            "76.5756"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROYA3221",
    "hotelName": "Royal Keep",
    "location": {
        "streetAddress": "4711 Blue Bend Way",
        "buildingName": null,
        "city": "Mypolonga",
        "locality1": "SA",
        "locality2": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5254",
        "geoSpatial": [
            "139.35",
            "-35.05"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES9178",
    "hotelName": "Awesome Hall",
    "location": {
        "streetAddress": "5506 Green Bend Drive",
        "buildingName": null,
        "city": "Mariapfarr",
        "locality1": "Mariapfarr",
        "locality2": "Politischer Bezirk Tamsweg",
        "country": "AT",
        "postalCode": "5571",
        "geoSpatial": [
            "13.75",
            "47.15"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "RIVE9111",
    "hotelName": "Riverside Lodge",
    "location": {
        "streetAddress": "6209 Long Bridge Street",
        "buildingName": null,
        "city": "Kildare",
        "locality1": "TX",
        "locality2": "Cass",
        "country": "US",
        "postalCode": "75562",
        "geoSpatial": [
            "-94.2539",
            "32.9468"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROSE5163",
    "hotelName": "Rose Resort",
    "location": {
        "streetAddress": "9024 Big Bend Ride",
        "buildingName": null,
        "city": "Negombo",
        "locality1": "Gampaha",
        "locality2": "Gampaha",
        "country": "LK",
        "postalCode": "11500",
        "geoSpatial": [
            "79.8358",
            "7.2083"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROMA9993",
    "hotelName": "Romantic Lodge",
    "location": {
        "streetAddress": "8405 Blue River Drive",
        "buildingName": null,
        "city": "Emmonak",
        "locality1": "AK",
        "locality2": "Kusilvak",
        "country": "US",
        "postalCode": "99581",
        "geoSpatial": [
            "-164.5335",
            "62.7818"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "STER5323",
    "hotelName": "Sterling Keep",
    "location": {
        "streetAddress": "4653 Short Stream Circle",
        "buildingName": "Building 46",
        "city": "Kingshill",
        "locality1": "St. Croix",
        "locality2": "St. Croix",
        "country": "VI",
        "postalCode": "00851",
        "geoSpatial": [
            "-64.7009",
            "17.7099"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAN8964",
    "hotelName": "Tranquil Hotel",
    "location": {
        "streetAddress": "9914 Big Mound Boulevard",
        "buildingName": null,
        "city": "Khatkar",
        "locality1": "Narwana",
        "locality2": "Jind",
        "country": "IN",
        "postalCode": "126115",
        "geoSpatial": [
            "76.1858",
            "29.4422"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROMA9395",
    "hotelName": "Romantic Keep",
    "location": {
        "streetAddress": "5235 Blue Stream Avenue",
        "buildingName": null,
        "city": "Ciumai",
        "locality1": "Taraclia",
        "locality2": "Taraclia",
        "country": "MD",
        "postalCode": "MD-7420",
        "geoSpatial": [
            "28.5697",
            "45.7822"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROMA5844",
    "hotelName": "Romantic Destination",
    "location": {
        "streetAddress": "9191 Red Tree Avenue",
        "buildingName": null,
        "city": "Mundela",
        "locality1": "Nedumangad",
        "locality2": "Thiruvananthapuram",
        "country": "IN",
        "postalCode": "695543",
        "geoSpatial": [
            "77.0503",
            "8.5598"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES7389",
    "hotelName": "Awesome Inn",
    "location": {
        "streetAddress": "2056 Red Gulch Road",
        "buildingName": null,
        "city": "Mariestad",
        "locality1": "O",
        "locality2": "Mariestad",
        "country": "SE",
        "postalCode": "542 01",
        "geoSpatial": [
            "13.8237",
            "58.7097"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "LAKE4808",
    "hotelName": "Lakeside Inn",
    "location": {
        "streetAddress": "6501 Red Tree Street",
        "buildingName": null,
        "city": "Evenley",
        "locality1": "England",
        "locality2": "Northamptonshire",
        "country": "GB",
        "postalCode": "NN13",
        "geoSpatial": [
            "-1.1527",
            "52.0088"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "PEAC6066",
    "hotelName": "Peaceful House",
    "location": {
        "streetAddress": "5929 Red Bend Way",
        "buildingName": null,
        "city": "Schwendi im Weisstannental",
        "locality1": "SG",
        "locality2": "Wahlkreis Sarganserland",
        "country": "CH",
        "postalCode": "7325",
        "geoSpatial": [
            "9.3652",
            "47.0078"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAV3982",
    "hotelName": "Travel Stay",
    "location": {
        "streetAddress": "4628 Big Tree Boulevard",
        "buildingName": null,
        "city": "APO AE",
        "locality1": null,
        "locality2": null,
        "country": "US",
        "postalCode": "09749",
        "geoSpatial": [
            "50.114",
            "26.2886"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "RIVE6337",
    "hotelName": "Riverside Stay",
    "location": {
        "streetAddress": "9765 Green Ridge Road",
        "buildingName": null,
        "city": "San Luis",
        "locality1": "San Luis",
        "locality2": "Turrubares",
        "country": "CR",
        "postalCode": "11604",
        "geoSpatial": [
            "-84.4664",
            "9.8354"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MAJE7299",
    "hotelName": "Majestic Inn",
    "location": {
        "streetAddress": "326 Red Gully Way",
        "buildingName": null,
        "city": "Riverina Mc",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2678",
        "geoSpatial": [
            "146.6698",
            "-33.5843"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MAJE8433",
    "hotelName": "Majestic Lodge",
    "location": {
        "streetAddress": "7696 Blue Hill Avenue",
        "buildingName": null,
        "city": "Piti",
        "locality1": "Guam",
        "locality2": "Guam",
        "country": "GU",
        "postalCode": "96925",
        "geoSpatial": [
            "144.7863",
            "13.4443"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SECL8451",
    "hotelName": "Secluded Hall",
    "location": {
        "streetAddress": "5014 Green Bridge Road",
        "buildingName": null,
        "city": "Doyalson North",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2262",
        "geoSpatial": [
            "151.5488",
            "-33.1873"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "STER1960",
    "hotelName": "Sterling House",
    "location": {
        "streetAddress": "29 Little Stream Street",
        "buildingName": null,
        "city": "Kuala Perlis",
        "locality1": "PLS",
        "locality2": "Perlis",
        "country": "MY",
        "postalCode": "02000",
        "geoSpatial": [
            "100.2088",
            "6.2683"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "QUIE4165",
    "hotelName": "Quiet Lodge",
    "location": {
        "streetAddress": "4950 Winding Woods Boulevard",
        "buildingName": "Building 29",
        "city": "Molyullah",
        "locality1": "VIC",
        "locality2": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3673",
        "geoSpatial": [
            "146.15",
            "-36.65"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SLEE1861",
    "hotelName": "Sleepy Inn",
    "location": {
        "streetAddress": "1815 Blue Gulch Drive",
        "buildingName": null,
        "city": "PANZOS",
        "locality1": "DEPTO DE ALTA VERAPAZ",
        "locality2": "DEPTO DE ALTA VERAPAZ",
        "country": "GT",
        "postalCode": "16007",
        "geoSpatial": [
            "-89.6667",
            "15.4"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "VOYA2385",
    "hotelName": "Voyage Inn",
    "location": {
        "streetAddress": "4668 Winding Gulch Avenue",
        "buildingName": null,
        "city": "Catton",
        "locality1": "England",
        "locality2": "Northumberland",
        "country": "GB",
        "postalCode": "NE47",
        "geoSpatial": [
            "-2.2667",
            "54.9"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAV7092",
    "hotelName": "Travel Lodge",
    "location": {
        "streetAddress": "9828 Little Gully Drive",
        "buildingName": null,
        "city": "Basse-Terre",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97100",
        "geoSpatial": [
            "-61.7255",
            "15.9985"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SECL4779",
    "hotelName": "Secluded House",
    "location": {
        "streetAddress": "1324 Little Ditch Avenue",
        "buildingName": null,
        "city": "Columbus",
        "locality1": "OH",
        "locality2": "Franklin",
        "country": "US",
        "postalCode": "43204",
        "geoSpatial": [
            "-83.078",
            "39.9523"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "COZY3104",
    "hotelName": "Cozy Lodge",
    "location": {
        "streetAddress": "3244 Green Gully Street",
        "buildingName": null,
        "city": "D\u00f6nerta\u015f",
        "locality1": "Tatvan",
        "locality2": "Tatvan",
        "country": "TR",
        "postalCode": "13200",
        "geoSpatial": [
            "42.5497",
            "38.319"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAN8436",
    "hotelName": "Tranquil House",
    "location": {
        "streetAddress": "6108 Winding Ridge Way",
        "buildingName": null,
        "city": "Carleton",
        "locality1": "England",
        "locality2": "North Yorkshire",
        "country": "GB",
        "postalCode": "BD23",
        "geoSpatial": [
            "-2.05",
            "53.9333"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "QUIE4459",
    "hotelName": "Quiet Hotel",
    "location": {
        "streetAddress": "4424 Short Ridge Drive",
        "buildingName": null,
        "city": "Murghai",
        "locality1": "Souhern Punajb Mulan",
        "locality2": "Souhern Punajb Mulan",
        "country": "PK",
        "postalCode": "33601",
        "geoSpatial": [
            "70.2667",
            "28.9167"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "CAST4642",
    "hotelName": "Castle Stay",
    "location": {
        "streetAddress": "5587 Blue Stream Drive",
        "buildingName": null,
        "city": "Silverley's Green",
        "locality1": "England",
        "locality2": "Suffolk",
        "country": "GB",
        "postalCode": "IP19",
        "geoSpatial": [
            "1.4867",
            "52.3345"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAV3627",
    "hotelName": "Travel Hotel",
    "location": {
        "streetAddress": "6531 Red Ridge Way",
        "buildingName": null,
        "city": "Sambalri Gala",
        "locality1": "Federal Capial &AJK",
        "locality2": "Federal Capial &AJK",
        "country": "PK",
        "postalCode": "12441",
        "geoSpatial": [
            "72.3681",
            "32.4333"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "QUIE9167",
    "hotelName": "Quiet Resort",
    "location": {
        "streetAddress": "5162 Winding Creek Circle",
        "buildingName": null,
        "city": "Farnham",
        "locality1": "QC",
        "locality2": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J2N",
        "geoSpatial": [
            "-72.9824",
            "45.2834"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MOUN6703",
    "hotelName": "Mountain Hotel",
    "location": {
        "streetAddress": "2534 Little Bend Circle",
        "buildingName": null,
        "city": "Miedwie\u017cyki",
        "locality1": "Gmina Milejczyce",
        "locality2": "Powiat siemiatycki",
        "country": "PL",
        "postalCode": "17-332",
        "geoSpatial": [
            "23.2622",
            "52.5061"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "FAMO6762",
    "hotelName": "Famous Keep",
    "location": {
        "streetAddress": "6065 Blue Woods Street",
        "buildingName": null,
        "city": "Braemore",
        "locality1": "Scotland",
        "locality2": "Highland",
        "country": "GB",
        "postalCode": "IV27",
        "geoSpatial": [
            "-4.797",
            "58.2763"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AMAZ3814",
    "hotelName": "Amazing Keep",
    "location": {
        "streetAddress": "8965 Big Stream Circle",
        "buildingName": "Building 16",
        "city": "Deva",
        "locality1": "Hunedoara",
        "locality2": "Hunedoara",
        "country": "RO",
        "postalCode": "330145",
        "geoSpatial": [
            "22.9",
            "45.8833"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "GETA6348",
    "hotelName": "Getaway Hotel",
    "location": {
        "streetAddress": "4217 Little Tree Boulevard",
        "buildingName": null,
        "city": "Alexandria Bay",
        "locality1": "NY",
        "locality2": "Jefferson",
        "country": "US",
        "postalCode": "13607",
        "geoSpatial": [
            "-75.9177",
            "44.3359"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "LAKE4372",
    "hotelName": "Lakeside Destination",
    "location": {
        "streetAddress": "1920 Green Bridge Ride",
        "buildingName": null,
        "city": "Mayorga",
        "locality1": "Mayorga",
        "locality2": "Liberia",
        "country": "CR",
        "postalCode": "50103",
        "geoSpatial": [
            "-85.4924",
            "10.8632"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "CAST1560",
    "hotelName": "Castle House",
    "location": {
        "streetAddress": "3575 Red Ridge Street",
        "buildingName": null,
        "city": "Kuwad",
        "locality1": "Manawar",
        "locality2": "Dhar",
        "country": "IN",
        "postalCode": "454446",
        "geoSpatial": [
            "75.278",
            "22.2318"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "FAMO7298",
    "hotelName": "Famous Resort",
    "location": {
        "streetAddress": "7031 Long River Road",
        "buildingName": null,
        "city": "Los Mina Norte",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "11903",
        "geoSpatial": [
            "-69.3944",
            "18.7278"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MOUN9203",
    "hotelName": "Mountain Hall",
    "location": {
        "streetAddress": "9555 Big Creek Drive",
        "buildingName": null,
        "city": "Surrey Lower West",
        "locality1": "BC",
        "locality2": "Surrey",
        "country": "CA",
        "postalCode": "V3X",
        "geoSpatial": [
            "-122.8576",
            "49.1067"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "VOYA6563",
    "hotelName": "Voyage Lodge",
    "location": {
        "streetAddress": "6425 Big Mound Street",
        "buildingName": null,
        "city": "Umatac",
        "locality1": "Guam",
        "locality2": "Guam",
        "country": "GU",
        "postalCode": "96918",
        "geoSpatial": [
            "144.7863",
            "13.4443"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "REST1409",
    "hotelName": "Restful House",
    "location": {
        "streetAddress": "8208 Winding Gully Avenue",
        "buildingName": null,
        "city": "Trumaisge Arraidh",
        "locality1": "Scotland",
        "locality2": "Western Isles",
        "country": "GB",
        "postalCode": "HS6",
        "geoSpatial": [
            "-7.3013",
            "57.6019"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAV3179",
    "hotelName": "Travel Keep",
    "location": {
        "streetAddress": "3816 Long Stream Road",
        "buildingName": null,
        "city": "Giron",
        "locality1": "Gir\u00f3n",
        "locality2": "Gir\u00f3n",
        "country": "CO",
        "postalCode": "687541",
        "geoSpatial": [
            "-73.1698",
            "7.0682"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "REST3260",
    "hotelName": "Restful Hall",
    "location": {
        "streetAddress": "3914 Winding Bend Boulevard",
        "buildingName": null,
        "city": "Lexington",
        "locality1": "KY",
        "locality2": "Fayette",
        "country": "US",
        "postalCode": "40581",
        "geoSpatial": [
            "-84.4715",
            "38.0283"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "GARD6741",
    "hotelName": "Garden Hotel",
    "location": {
        "streetAddress": "5055 Big Stream Avenue",
        "buildingName": null,
        "city": "Christiansted",
        "locality1": "St. Croix",
        "locality2": "St. Croix",
        "country": "VI",
        "postalCode": "00823",
        "geoSpatial": [
            "-64.7445",
            "17.7237"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MYST2051",
    "hotelName": "Mystic Hotel",
    "location": {
        "streetAddress": "3897 Long Stream Avenue",
        "buildingName": null,
        "city": "Kolsur",
        "locality1": "Deganga",
        "locality2": "North 24 Parganas",
        "country": "IN",
        "postalCode": "743438",
        "geoSpatial": [
            "88.4296",
            "22.8151"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SLEE6043",
    "hotelName": "Sleepy Hotel",
    "location": {
        "streetAddress": "5007 Big Mountain Avenue",
        "buildingName": null,
        "city": "Pliumb\u0117n\u0173 k.",
        "locality1": "Kalvarijos sav.",
        "locality2": "Kalvarijos sav.",
        "country": "LT",
        "postalCode": "69047",
        "geoSpatial": [
            "23.419",
            "54.6024"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES2923",
    "hotelName": "Awesome Keep",
    "location": {
        "streetAddress": "4180 Short Woods Road",
        "buildingName": "Building DB",
        "city": "Kinaparthi",
        "locality1": "Narsipatnam",
        "locality2": "Visakhapatnam",
        "country": "IN",
        "postalCode": "531084",
        "geoSpatial": [
            "82.4739",
            "17.787"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "COZY4614",
    "hotelName": "Cozy Inn",
    "location": {
        "streetAddress": "2453 Green Hill Boulevard",
        "buildingName": null,
        "city": "Cranstal",
        "locality1": "Isle of Man",
        "locality2": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7",
        "geoSpatial": [
            "-4.4273",
            "54.3815"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROSE2964",
    "hotelName": "Rose Hall",
    "location": {
        "streetAddress": "3447 Little Bend Boulevard",
        "buildingName": null,
        "city": "Ahuntsic Southwest",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "H3L",
        "geoSpatial": [
            "-73.6718",
            "45.5467"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MYST3639",
    "hotelName": "Mystic Inn",
    "location": {
        "streetAddress": "3345 Short Bough Circle",
        "buildingName": null,
        "city": "Ramalingampally",
        "locality1": "Nalgonda",
        "locality2": "Nalgonda",
        "country": "IN",
        "postalCode": "508126",
        "geoSpatial": [
            "78.7712",
            "17.1362"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES9039",
    "hotelName": "Awesome Lodge",
    "location": {
        "streetAddress": "9312 Blue Ditch Avenue",
        "buildingName": null,
        "city": "Cailungo",
        "locality1": null,
        "locality2": null,
        "country": "SM",
        "postalCode": "47893",
        "geoSpatial": [
            "12.4474",
            "43.9419"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAN2442",
    "hotelName": "Tranquil Keep",
    "location": {
        "streetAddress": "9011 Red Mountain Way",
        "buildingName": null,
        "city": "Quebec City South",
        "locality1": "QC",
        "locality2": "Capitale-Nationale",
        "country": "CA",
        "postalCode": "G1S",
        "geoSpatial": [
            "-71.2453",
            "46.7933"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "COZY5722",
    "hotelName": "Cozy Hall",
    "location": {
        "streetAddress": "7159 Long Hill Road",
        "buildingName": null,
        "city": "\u041e\u0441\u043e\u043b\u0438\u043d\u043a\u0430",
        "locality1": "Litynskyi",
        "locality2": "Litynskyi",
        "country": "UA",
        "postalCode": "22330",
        "geoSpatial": [
            "28.1096",
            "49.4191"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MAJE9724",
    "hotelName": "Majestic House",
    "location": {
        "streetAddress": "5842 Red Mountain Way",
        "buildingName": null,
        "city": "West Northumberland County (Millbrook)",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "L0A",
        "geoSpatial": [
            "-78.5193",
            "44.1263"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "DEST7420",
    "hotelName": "Destination Lodge",
    "location": {
        "streetAddress": "7570 Long Mountain Drive",
        "buildingName": null,
        "city": "Spijkenisse",
        "locality1": "Nissewaard",
        "locality2": "Nissewaard",
        "country": "NL",
        "postalCode": "3206",
        "geoSpatial": [
            "4.3254",
            "51.8298"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "LAKE9902",
    "hotelName": "Lakeside Lodge",
    "location": {
        "streetAddress": "1001 Red Hill Way",
        "buildingName": null,
        "city": "Les \u00celes-De-La-Madeleine",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "G4T",
        "geoSpatial": [
            "-61.7996",
            "47.3999"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "STER4065",
    "hotelName": "Sterling Stay",
    "location": {
        "streetAddress": "1510 Winding Stream Road",
        "buildingName": null,
        "city": "Casteltermini",
        "locality1": "SC",
        "locality2": "Agrigento",
        "country": "IT",
        "postalCode": "92025",
        "geoSpatial": [
            "13.646",
            "37.5387"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "REST4096",
    "hotelName": "Restful Hotel",
    "location": {
        "streetAddress": "3178 Green Bough Street",
        "buildingName": null,
        "city": "Richmond Hill Southeast",
        "locality1": "ON",
        "locality2": "Richmond Hill ",
        "country": "CA",
        "postalCode": "L4B",
        "geoSpatial": [
            "-79.3985",
            "43.8582"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AMAZ6975",
    "hotelName": "Amazing Lodge",
    "location": {
        "streetAddress": "2328 Long Gulch Drive",
        "buildingName": "Building 3C",
        "city": "San Sebastian",
        "locality1": "San Sebastian",
        "locality2": "San Sebastian",
        "country": "PR",
        "postalCode": "00685",
        "geoSpatial": [
            "-66.9902",
            "18.3366"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "QUIE6668",
    "hotelName": "Quiet Stay",
    "location": {
        "streetAddress": "8826 Winding Bend Street",
        "buildingName": null,
        "city": "Marston Moretaine",
        "locality1": "England",
        "locality2": "Bedfordshire",
        "country": "GB",
        "postalCode": "MK43",
        "geoSpatial": [
            "-0.5493",
            "52.0641"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "REST6720",
    "hotelName": "Restful Destination",
    "location": {
        "streetAddress": "7309 Blue Bridge Road",
        "buildingName": null,
        "city": "Villa Aura",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "10901",
        "geoSpatial": [
            "-69.9833",
            "18.4833"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "FAMO6247",
    "hotelName": "Famous Hall",
    "location": {
        "streetAddress": "4769 Big Mountain Ride",
        "buildingName": null,
        "city": "Hilderstone",
        "locality1": "England",
        "locality2": "Staffordshire",
        "country": "GB",
        "postalCode": "ST15",
        "geoSpatial": [
            "-2.0795",
            "52.9104"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "GARD4832",
    "hotelName": "Garden Lodge",
    "location": {
        "streetAddress": "8028 Big Creek Road",
        "buildingName": null,
        "city": "Satkut",
        "locality1": "Kasrawad",
        "locality2": "West Nimar",
        "country": "IN",
        "postalCode": "451228",
        "geoSpatial": [
            "76.845",
            "22.0051"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "REST2521",
    "hotelName": "Restful Resort",
    "location": {
        "streetAddress": "5474 Long Woods Avenue",
        "buildingName": null,
        "city": "Dorli Bhandwalkar",
        "locality1": "Narkher",
        "locality2": "Nagpur",
        "country": "IN",
        "postalCode": "441306",
        "geoSpatial": [
            "78.5779",
            "21.3812"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TAKE7522",
    "hotelName": "Take a Break Hotel",
    "location": {
        "streetAddress": "7216 Short Ditch Circle",
        "buildingName": null,
        "city": "Hammadouche",
        "locality1": "Ain-Temouchent",
        "locality2": "Ain-Temouchent",
        "country": "DZ",
        "postalCode": "46014",
        "geoSpatial": [
            "-1.55",
            "35.25"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "COZY9814",
    "hotelName": "Cozy House",
    "location": {
        "streetAddress": "6515 Green Ridge Way",
        "buildingName": null,
        "city": "Allestree",
        "locality1": "VIC",
        "locality2": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3305",
        "geoSpatial": [
            "141.65",
            "-38.2833"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SECL5404",
    "hotelName": "Secluded Inn",
    "location": {
        "streetAddress": "2498 Little Mound Ride",
        "buildingName": null,
        "city": "Chaudfontaine",
        "locality1": "WAL",
        "locality2": "Li\u00e8ge",
        "country": "BE",
        "postalCode": "4050",
        "geoSpatial": [
            "5.6333",
            "50.5833"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "VOYA4943",
    "hotelName": "Voyage Destination",
    "location": {
        "streetAddress": "5416 Little Tree Boulevard",
        "buildingName": null,
        "city": "Trunkey Creek",
        "locality1": "NSW",
        "locality2": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2795",
        "geoSpatial": [
            "149.3333",
            "-33.8167"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "GETA8112",
    "hotelName": "Getaway Keep",
    "location": {
        "streetAddress": "5533 Green River Way",
        "buildingName": null,
        "city": "Parada de Gonta",
        "locality1": "Parada De Gonta",
        "locality2": "Tondela",
        "country": "PT",
        "postalCode": "3460-417",
        "geoSpatial": [
            "-7.9941",
            "40.5838"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "CAST2930",
    "hotelName": "Castle Destination",
    "location": {
        "streetAddress": "4036 Red Mound Way",
        "buildingName": null,
        "city": "Budbrooke",
        "locality1": "England",
        "locality2": "Warwickshire",
        "country": "GB",
        "postalCode": "CV35",
        "geoSpatial": [
            "-1.6244",
            "52.2828"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES4948",
    "hotelName": "Awesome Resort",
    "location": {
        "streetAddress": "2499 Long Bend Drive",
        "buildingName": null,
        "city": "Dzaoudzi",
        "locality1": "Dzaoudzi",
        "locality2": "Dzaoudzi",
        "country": "YT",
        "postalCode": "97615",
        "geoSpatial": [
            "45.2837",
            "-12.7783"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SECL9180",
    "hotelName": "Secluded Destination",
    "location": {
        "streetAddress": "638 Short Ridge Way",
        "buildingName": "Building 75",
        "city": "Nunney",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "BA11",
        "geoSpatial": [
            "-2.3789",
            "51.2094"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "REST2034",
    "hotelName": "Restful Keep",
    "location": {
        "streetAddress": "2471 Long Bridge Ride",
        "buildingName": null,
        "city": "Sorkifalud",
        "locality1": "VA",
        "locality2": "Vas",
        "country": "HU",
        "postalCode": "9774",
        "geoSpatial": [
            "16.7333",
            "47.1333"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "VOYA9329",
    "hotelName": "Voyage Hall",
    "location": {
        "streetAddress": "3449 Big Bough Road",
        "buildingName": null,
        "city": "Hillsborough",
        "locality1": "NB",
        "locality2": "New Brunswick",
        "country": "CA",
        "postalCode": "E4H",
        "geoSpatial": [
            "-64.6552",
            "45.9199"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TRAN5097",
    "hotelName": "Tranquil Inn",
    "location": {
        "streetAddress": "2714 Winding Hill Drive",
        "buildingName": null,
        "city": "Centola",
        "locality1": "CM",
        "locality2": "Salerno",
        "country": "IT",
        "postalCode": "84051",
        "geoSpatial": [
            "15.3119",
            "40.0698"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "DEST2549",
    "hotelName": "Destination Destination",
    "location": {
        "streetAddress": "7575 Winding Gulch Ride",
        "buildingName": null,
        "city": "Hanska",
        "locality1": "MN",
        "locality2": "Brown",
        "country": "US",
        "postalCode": "56041",
        "geoSpatial": [
            "-94.4933",
            "44.1527"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROSE5594",
    "hotelName": "Rose Destination",
    "location": {
        "streetAddress": "9954 Little Stream Circle",
        "buildingName": null,
        "city": "Little London",
        "locality1": "Isle of Man",
        "locality2": "Isle of Man",
        "country": "IM",
        "postalCode": "IM6",
        "geoSpatial": [
            "-4.5858",
            "54.2801"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "VOYA4117",
    "hotelName": "Voyage Keep",
    "location": {
        "streetAddress": "843 Little Mound Avenue",
        "buildingName": null,
        "city": "Yawong Hills",
        "locality1": "VIC",
        "locality2": "Victoria",
        "country": "AU",
        "postalCode": "3478",
        "geoSpatial": [
            "143.2969",
            "-36.827"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "TAKE6623",
    "hotelName": "Take a Break Inn",
    "location": {
        "streetAddress": "518 Little Bend Road",
        "buildingName": null,
        "city": "Spijkenisse",
        "locality1": "Nissewaard",
        "locality2": "Nissewaard",
        "country": "NL",
        "postalCode": "3203",
        "geoSpatial": [
            "4.3387",
            "51.8416"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "GETA3762",
    "hotelName": "Getaway Hall",
    "location": {
        "streetAddress": "7434 Long Woods Road",
        "buildingName": null,
        "city": "Windsor East (East Walkerville)",
        "locality1": "ON",
        "locality2": "Windsor",
        "country": "CA",
        "postalCode": "N8Y",
        "geoSpatial": [
            "-82.9929",
            "42.3176"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SECL1439",
    "hotelName": "Secluded Stay",
    "location": {
        "streetAddress": "706 Little Mountain Road",
        "buildingName": null,
        "city": "Killi Bathozai",
        "locality1": "Balochisan",
        "locality2": "Balochisan",
        "country": "PK",
        "postalCode": "86701",
        "geoSpatial": [
            "66.1667",
            "28.2"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MYST8477",
    "hotelName": "Mystic Lodge",
    "location": {
        "streetAddress": "1905 Big Bend Circle",
        "buildingName": null,
        "city": "Grande Prairie Central",
        "locality1": "AB",
        "locality2": "Grande Prairie ",
        "country": "CA",
        "postalCode": "T8V",
        "geoSpatial": [
            "-118.9103",
            "55.1808"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "AWES6510",
    "hotelName": "Awesome House",
    "location": {
        "streetAddress": "9587 Little Woods Drive",
        "buildingName": null,
        "city": "F\u00e1skr\u00fa\u00f0sfir\u00f0i",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "750",
        "geoSpatial": [
            "-14.0189",
            "64.9313"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROMA3500",
    "hotelName": "Romantic House",
    "location": {
        "streetAddress": "9015 Blue Bridge Drive",
        "buildingName": null,
        "city": "Cloford",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "BA11",
        "geoSpatial": [
            "-2.3454",
            "51.1888"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "ROYA4626",
    "hotelName": "Royal Destination",
    "location": {
        "streetAddress": "7570 Big Ditch Drive",
        "buildingName": "Building 80",
        "city": "Colinas del Este",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "11517",
        "geoSpatial": [
            "-69.85",
            "18.5333"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MAJE3220",
    "hotelName": "Majestic Hotel",
    "location": {
        "streetAddress": "3249 Big Mountain Avenue",
        "buildingName": null,
        "city": "Tour de la Bourse",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "H4Z",
        "geoSpatial": [
            "-73.5573",
            "45.5061"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "MYST6720",
    "hotelName": "Mystic Keep",
    "location": {
        "streetAddress": "9710 Winding Hill Road",
        "buildingName": null,
        "city": "Vichuqu\u00e9n",
        "locality1": "Vichuqu\u00e9n",
        "locality2": "Provincia de Curic\u00f3",
        "country": "CL",
        "postalCode": "3420000",
        "geoSpatial": [
            "-72.0228",
            "-34.841"
        ]
    }
});
db.hotels.insertOne(
{
    "propertyKey": "SLEE4560",
    "hotelName": "Sleepy Keep",
    "location": {
        "streetAddress": "3136 Big Mountain Drive",
        "buildingName": null,
        "city": "Port Rickaby",
        "locality1": "SA",
        "locality2": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5575",
        "geoSpatial": [
            "137.5",
            "-34.6833"
        ]
    }
});
