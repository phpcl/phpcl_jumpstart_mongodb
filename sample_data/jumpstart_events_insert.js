conn = new Mongo();
db = conn.getDB("jumpstart");
db.events.drop();
db.events.insertOne(
{
    "eventKey": "CON-PRO-TO-886",
    "propertyKey": "ROMA9993",
    "eventName": "Conservation Promotion Event",
    "eventDate": "2020-08-03",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-BEN-DM-404",
    "propertyKey": "COZY5722",
    "eventName": "Solar Energy Benefit Symposium",
    "eventDate": "2021-03-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-PRO-DM-473",
    "propertyKey": "DEST2514",
    "eventName": "Dog Promotion Show",
    "eventDate": "2020-05-03",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-BEN-NQ-864",
    "propertyKey": "AMAZ5130",
    "eventName": "Solar Energy Benefit Summit",
    "eventDate": "2021-12-02",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-RES-GL-188",
    "propertyKey": "LAKE4808",
    "eventName": "Wind Power Research Seminar",
    "eventDate": "2020-09-24",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-LOV-BK-497",
    "propertyKey": "VOYA2385",
    "eventName": "Flower Lovers Summit",
    "eventDate": "2020-08-29",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-IND-BS-872",
    "propertyKey": "TRAN8964",
    "eventName": "Green Energy Industry Symposium",
    "eventDate": "2020-03-12",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-IND-XI-775",
    "propertyKey": "MYST2051",
    "eventName": "Green Energy Industry Symposium",
    "eventDate": "2021-05-30",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CON-BEN-VZ-932",
    "propertyKey": "QUIE6668",
    "eventName": "Conservation Benefit Conference",
    "eventDate": "2020-04-25",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-BEN-OY-604",
    "propertyKey": "ROSE2964",
    "eventName": "Dog Benefit Event",
    "eventDate": "2021-03-24",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-PRO-MS-747",
    "propertyKey": "DEST2514",
    "eventName": "Dog Promotion Event",
    "eventDate": "2021-01-31",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-LOV-IY-823",
    "propertyKey": "MYST8477",
    "eventName": "Wind Power Lovers Symposium",
    "eventDate": "2020-03-25",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-BE-531",
    "propertyKey": "MAJE3220",
    "eventName": "Solar Energy Research Event",
    "eventDate": "2020-04-10",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-RES-BQ-738",
    "propertyKey": "TRAN8964",
    "eventName": "Tree Research Showcase",
    "eventDate": "2021-08-22",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-LOV-ZJ-497",
    "propertyKey": "MYST8477",
    "eventName": "Green Energy Lovers Showcase",
    "eventDate": "2021-03-17",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-PRO-WM-454",
    "propertyKey": "VOYA4943",
    "eventName": "Flower Promotion Meeting",
    "eventDate": "2021-10-31",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-IND-AG-116",
    "propertyKey": "STER1960",
    "eventName": "Wind Power Industry Meeting",
    "eventDate": "2020-05-23",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-PRO-BK-293",
    "propertyKey": "AMAZ6975",
    "eventName": "Cat Promotion Showcase",
    "eventDate": "2020-10-23",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-IND-ZF-676",
    "propertyKey": "REST1409",
    "eventName": "Dog Industry Meeting",
    "eventDate": "2021-03-01",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CON-BEN-CK-497",
    "propertyKey": "REST3260",
    "eventName": "Conservation Benefit Symposium",
    "eventDate": "2021-01-06",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-BEN-RK-750",
    "propertyKey": "MAJE8433",
    "eventName": "Horticulture Benefit Symposium",
    "eventDate": "2021-09-27",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-PRO-BF-363",
    "propertyKey": "GARD6741",
    "eventName": "Green Energy Promotion Seminar",
    "eventDate": "2020-07-01",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-IND-KO-405",
    "propertyKey": "LAKE6035",
    "eventName": "Wind Power Industry Show",
    "eventDate": "2020-05-22",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-PRO-AW-703",
    "propertyKey": "TRAV3627",
    "eventName": "Solar Energy Promotion Event",
    "eventDate": "2020-02-28",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-BEN-AW-427",
    "propertyKey": "VOYA9329",
    "eventName": "Dog Benefit Event",
    "eventDate": "2021-11-06",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-LOV-EI-485",
    "propertyKey": "STER4065",
    "eventName": "Horticulture Lovers Seminar",
    "eventDate": "2020-08-30",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-IND-NF-779",
    "propertyKey": "REST6720",
    "eventName": "Cat Industry Meeting",
    "eventDate": "2020-01-03",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-PRO-AS-569",
    "propertyKey": "SECL8451",
    "eventName": "Cat Promotion Seminar",
    "eventDate": "2021-05-05",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-PRO-KJ-956",
    "propertyKey": "AWES7389",
    "eventName": "Green Energy Promotion Meeting",
    "eventDate": "2021-10-09",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-BEN-WM-100",
    "propertyKey": "LAKE4808",
    "eventName": "Dog Benefit Seminar",
    "eventDate": "2021-08-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-LOV-JG-732",
    "propertyKey": "AWES6510",
    "eventName": "Cat Lovers Show",
    "eventDate": "2020-04-27",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-LOV-XC-447",
    "propertyKey": "STER1960",
    "eventName": "Green Energy Lovers Showcase",
    "eventDate": "2020-03-02",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-IND-WI-582",
    "propertyKey": "QUIE4165",
    "eventName": "Horticulture Industry Conference",
    "eventDate": "2020-02-08",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-IND-JB-726",
    "propertyKey": "AMAZ5082",
    "eventName": "Solar Energy Industry Show",
    "eventDate": "2021-05-13",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-IND-JC-161",
    "propertyKey": "STER4065",
    "eventName": "Flower Industry Showcase",
    "eventDate": "2020-11-04",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-IND-BB-798",
    "propertyKey": "SLEE4560",
    "eventName": "Wind Power Industry Event",
    "eventDate": "2021-03-12",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-BEN-HH-993",
    "propertyKey": "REST1409",
    "eventName": "Cat Benefit Summit",
    "eventDate": "2020-02-15",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-EY-238",
    "propertyKey": "TRAV3982",
    "eventName": "Solar Energy Research Seminar",
    "eventDate": "2021-12-22",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-FJ-765",
    "propertyKey": "VOYA6563",
    "eventName": "Solar Energy Research Symposium",
    "eventDate": "2021-02-19",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-PRO-AU-225",
    "propertyKey": "REST3260",
    "eventName": "Solar Energy Promotion Event",
    "eventDate": "2020-02-10",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-BEN-IL-983",
    "propertyKey": "VOYA9329",
    "eventName": "Horticulture Benefit Showcase",
    "eventDate": "2020-12-30",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-WY-446",
    "propertyKey": "MYST3639",
    "eventName": "Solar Energy Research Showcase",
    "eventDate": "2021-10-30",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CON-PRO-II-933",
    "propertyKey": "AWES9039",
    "eventName": "Conservation Promotion Show",
    "eventDate": "2020-08-01",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-LOV-DV-828",
    "propertyKey": "MYST8477",
    "eventName": "Solar Energy Lovers Conference",
    "eventDate": "2020-01-25",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-LOV-AO-718",
    "propertyKey": "DEST2549",
    "eventName": "Green Energy Lovers Symposium",
    "eventDate": "2021-11-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-RES-MD-422",
    "propertyKey": "MYST8477",
    "eventName": "Horticulture Research Show",
    "eventDate": "2020-04-25",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-IND-TQ-279",
    "propertyKey": "RIVE7144",
    "eventName": "Solar Energy Industry Showcase",
    "eventDate": "2021-10-20",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-BEN-FH-289",
    "propertyKey": "CAST1560",
    "eventName": "Green Energy Benefit Meeting",
    "eventDate": "2020-05-31",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CON-IND-XU-550",
    "propertyKey": "REST1409",
    "eventName": "Conservation Industry Seminar",
    "eventDate": "2021-03-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-RES-QB-560",
    "propertyKey": "FAMO2005",
    "eventName": "Dog Research Show",
    "eventDate": "2020-12-05",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-RES-JP-644",
    "propertyKey": "DEST7420",
    "eventName": "Cat Research Seminar",
    "eventDate": "2020-06-10",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-PRO-CI-224",
    "propertyKey": "QUIE4165",
    "eventName": "Cat Promotion Meeting",
    "eventDate": "2020-08-06",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-BEN-HN-784",
    "propertyKey": "MAJE7299",
    "eventName": "Flower Benefit Showcase",
    "eventDate": "2020-03-20",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-RES-OP-438",
    "propertyKey": "SLEE6043",
    "eventName": "Horticulture Research Event",
    "eventDate": "2020-04-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-PRO-WK-814",
    "propertyKey": "COZY5722",
    "eventName": "Tree Promotion Summit",
    "eventDate": "2021-09-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-BEN-WX-270",
    "propertyKey": "ROMA9395",
    "eventName": "Solar Energy Benefit Meeting",
    "eventDate": "2020-01-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-RES-EB-416",
    "propertyKey": "STER4065",
    "eventName": "Flower Research Conference",
    "eventDate": "2020-11-16",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-SI-673",
    "propertyKey": "DEST2514",
    "eventName": "Solar Energy Research Event",
    "eventDate": "2020-07-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-DM-573",
    "propertyKey": "REST4096",
    "eventName": "Solar Energy Research Show",
    "eventDate": "2021-11-18",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-RES-HV-544",
    "propertyKey": "MAJE3220",
    "eventName": "Tree Research Showcase",
    "eventDate": "2020-03-09",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CON-LOV-BD-306",
    "propertyKey": "LAKE6035",
    "eventName": "Conservation Lovers Symposium",
    "eventDate": "2020-09-12",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-LOV-OR-822",
    "propertyKey": "MOUN6703",
    "eventName": "Dog Lovers Symposium",
    "eventDate": "2020-09-06",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-BEN-GK-353",
    "propertyKey": "VOYA9329",
    "eventName": "Wind Power Benefit Show",
    "eventDate": "2020-02-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-BEN-FP-301",
    "propertyKey": "CAST1560",
    "eventName": "Dog Benefit Showcase",
    "eventDate": "2021-06-04",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-IND-YO-722",
    "propertyKey": "REST2521",
    "eventName": "Solar Energy Industry Show",
    "eventDate": "2020-09-04",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-IND-IB-728",
    "propertyKey": "GETA6348",
    "eventName": "Green Energy Industry Event",
    "eventDate": "2021-11-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-LOV-IQ-133",
    "propertyKey": "TRAN5097",
    "eventName": "Wind Power Lovers Symposium",
    "eventDate": "2021-07-24",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-PRO-BO-294",
    "propertyKey": "QUIE4459",
    "eventName": "Wind Power Promotion Meeting",
    "eventDate": "2020-04-02",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-RES-CI-364",
    "propertyKey": "FAMO2005",
    "eventName": "Tree Research Summit",
    "eventDate": "2021-08-29",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-LOV-LV-441",
    "propertyKey": "VOYA2385",
    "eventName": "Tree Lovers Summit",
    "eventDate": "2021-03-19",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-IND-LA-395",
    "propertyKey": "MAJE9724",
    "eventName": "Horticulture Industry Meeting",
    "eventDate": "2021-03-04",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-LOV-SR-594",
    "propertyKey": "REST2521",
    "eventName": "Cat Lovers Conference",
    "eventDate": "2021-12-11",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-RES-TH-460",
    "propertyKey": "MYST8477",
    "eventName": "Horticulture Research Seminar",
    "eventDate": "2020-11-30",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-RES-QW-147",
    "propertyKey": "LAKE6035",
    "eventName": "Solar Energy Research Conference",
    "eventDate": "2020-03-20",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-LOV-NC-213",
    "propertyKey": "MAJE8433",
    "eventName": "Tree Lovers Seminar",
    "eventDate": "2021-10-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-PRO-EY-876",
    "propertyKey": "STER4065",
    "eventName": "Solar Energy Promotion Show",
    "eventDate": "2020-04-29",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-IND-UW-833",
    "propertyKey": "RIVE7144",
    "eventName": "Tree Industry Summit",
    "eventDate": "2021-05-14",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-PRO-ZM-509",
    "propertyKey": "SECL5404",
    "eventName": "Flower Promotion Meeting",
    "eventDate": "2021-12-16",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CAT-LOV-MP-982",
    "propertyKey": "GARD4832",
    "eventName": "Cat Lovers Showcase",
    "eventDate": "2021-10-01",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-PRO-BV-630",
    "propertyKey": "AWES7389",
    "eventName": "Horticulture Promotion Event",
    "eventDate": "2020-01-23",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-BEN-AE-604",
    "propertyKey": "TAKE6623",
    "eventName": "Horticulture Benefit Symposium",
    "eventDate": "2021-02-11",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-BEN-OW-161",
    "propertyKey": "GETA6348",
    "eventName": "Solar Energy Benefit Symposium",
    "eventDate": "2021-12-28",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-RES-EC-183",
    "propertyKey": "STER1960",
    "eventName": "Flower Research Seminar",
    "eventDate": "2020-08-11",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-LOV-JN-455",
    "propertyKey": "AWES7389",
    "eventName": "Dog Lovers Showcase",
    "eventDate": "2021-09-15",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-IND-PB-899",
    "propertyKey": "RIVE7144",
    "eventName": "Tree Industry Symposium",
    "eventDate": "2021-04-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-IND-EP-401",
    "propertyKey": "MAJE7299",
    "eventName": "Dog Industry Show",
    "eventDate": "2021-10-07",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-RES-JY-491",
    "propertyKey": "MYST3639",
    "eventName": "Horticulture Research Meeting",
    "eventDate": "2020-05-02",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-PRO-OS-804",
    "propertyKey": "TRAN9312",
    "eventName": "Horticulture Promotion Meeting",
    "eventDate": "2021-05-17",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "WIN-BEN-PI-203",
    "propertyKey": "MOUN6703",
    "eventName": "Wind Power Benefit Seminar",
    "eventDate": "2021-06-05",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-BEN-AF-242",
    "propertyKey": "REST2034",
    "eventName": "Flower Benefit Summit",
    "eventDate": "2020-11-17",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-BEN-SQ-418",
    "propertyKey": "GETA3762",
    "eventName": "Solar Energy Benefit Show",
    "eventDate": "2021-09-08",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-PRO-WT-667",
    "propertyKey": "LAKE9902",
    "eventName": "Tree Promotion Showcase",
    "eventDate": "2021-08-18",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-LOV-PL-297",
    "propertyKey": "SLEE6043",
    "eventName": "Solar Energy Lovers Conference",
    "eventDate": "2020-09-19",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "FLO-BEN-XW-673",
    "propertyKey": "DEST2549",
    "eventName": "Flower Benefit Conference",
    "eventDate": "2020-05-14",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "SOL-PRO-PB-570",
    "propertyKey": "TRAV7092",
    "eventName": "Solar Energy Promotion Conference",
    "eventDate": "2020-08-18",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "DOG-PRO-ZE-122",
    "propertyKey": "AMAZ5130",
    "eventName": "Dog Promotion Event",
    "eventDate": "2021-06-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "HOR-LOV-ED-853",
    "propertyKey": "QUIE4459",
    "eventName": "Horticulture Lovers Showcase",
    "eventDate": "2021-05-26",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "GRE-PRO-SD-865",
    "propertyKey": "COZY5722",
    "eventName": "Green Energy Promotion Showcase",
    "eventDate": "2020-05-20",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "TRE-IND-VE-680",
    "propertyKey": "VOYA4117",
    "eventName": "Tree Industry Event",
    "eventDate": "2021-01-20",
    "hotelInfo": {
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
    }
});
db.events.insertOne(
{
    "eventKey": "CON-RES-WR-247",
    "propertyKey": "LAKE6035",
    "eventName": "Conservation Research Conference",
    "eventDate": "2020-04-17",
    "hotelInfo": {
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
    }
});
