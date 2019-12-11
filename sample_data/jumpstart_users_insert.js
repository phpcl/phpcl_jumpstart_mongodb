conn = new Mongo();
db = conn.getDB("jumpstart");
db.users.drop();
db.users.insertOne(
{
    "userKey": "ANDRCAYA0001",
    "name": {
        "title": "Mr",
        "first": "Andrew",
        "middle": "B",
        "last": "Caya",
        "suffix": null
    },
    "address": {
        "streetAddress": "5946 Short Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Quebec City",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "A1A 1A1",
        "geoSpatial": [
            "75.65",
            "18.3354"
        ]
    },
    "contact": {
        "email": "acaya@php-cl.com",
        "phone": "100-823-5691",
        "socMedia": {
            "twitter": "andyc@twitter.com"
        }
    },
    "login": {
        "username": "acaya",
        "oauth2": "andrew.caya@google.com",
        "password": "$2y$10$5cr\/vvqzv3.MEo1vpwz1gO4VtgahF.VMiJZ6Y.cw4DjcMlKxV5fYm"
    },
    "otherContact": {
        "emails": [
            "andrew.caya@etista.com",
        ],
        "phoneNumbers": [
            "100-402-0908",
        ],
        "socMedias": [
            {
                "skype": "acaya@skype.com"
            },
            {
                "facebook": "sir.andrew@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "N",
        "dateOfBirth": "1970-01-01"
    },
    "partner": "Y",
    "businessName": "FCF Continuous Learning"
});
db.users.insertOne(
{
    "userKey": "ROBECOBB9268",
    "name": {
        "title": "Mr",
        "first": "Robert",
        "middle": "U",
        "last": "Cobb",
        "suffix": null
    },
    "address": {
        "streetAddress": "9967 Long Stream Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Scumpia",
        "locality1": "Falesti",
        "locality2": "Falesti",
        "country": "MD",
        "postalCode": "MD-5949",
        "geoSpatial": [
            "27.7408",
            "47.4675"
        ]
    },
    "contact": {
        "email": "rcobb101@turkcell.com",
        "phone": "101-260-9268",
        "socMedia": {
            "skype": "rcobb@skype.com"
        }
    },
    "login": {
        "username": "rcobb",
        "oauth2": "rcobb@skype.com",
        "password": "$2y$10$2rLRr2OjkPjPmCg7vUyrHuS4DFz78Cd4LcK8scm92AMNDmhIcgCUm"
    },
    "otherContact": {
        "emails": [
            "rcobb101@ktc.com"
        ],
        "phoneNumbers": [
            "101-034-6682"
        ],
        "socMedias": [
            {
                "line": "rcobb@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-12-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MAJOCHAN9372",
    "name": {
        "title": null,
        "first": "Major",
        "middle": null,
        "last": "Chan",
        "suffix": null
    },
    "address": {
        "streetAddress": "4502 Red Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "47",
        "city": "Molino",
        "locality1": "FL",
        "locality2": "Escambia",
        "country": "US",
        "postalCode": "32577",
        "geoSpatial": [
            "-87.3852",
            "30.6902"
        ]
    },
    "contact": {
        "email": "mchan102@greennet.com",
        "phone": "102-395-9372",
        "socMedia": []
    },
    "login": {
        "username": "mchan",
        "oauth2": null,
        "password": "$2y$10$ZdmyoPaapKXxpy53qF8PTORaJG79ivUj2g6amm.dVBPlKma8z5GuO"
    },
    "otherContact": {
        "emails": [
            "mchan102@telecom.com",
            "mchan102@verizon.com",
            "mchan102@ccs.com"
        ],
        "phoneNumbers": [
            "102-788-5403",
            "102-874-4743",
            "102-370-3394"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-06-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DEANMCCO6391",
    "name": {
        "title": "Ms",
        "first": "Deann",
        "middle": "E",
        "last": "Mccoy",
        "suffix": null
    },
    "address": {
        "streetAddress": "7488 Short Woods Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paris 10",
        "locality1": "Paris",
        "locality2": "Paris",
        "country": "FR",
        "postalCode": "75498 CEDEX 10",
        "geoSpatial": [
            "2.3561",
            "48.8709"
        ]
    },
    "contact": {
        "email": "dmccoy103@lookdata.com",
        "phone": "103-656-6391",
        "socMedia": {
            "facebook": "dmccoy@facebook.com"
        }
    },
    "login": {
        "username": "dmccoy",
        "oauth2": "dmccoy@facebook.com",
        "password": "$2y$10$KrRPSoEc3CCxW9cp3DbjEe4RnTxHbxGbzk2JHOtvbKEGNYZQqtDUC"
    },
    "otherContact": {
        "emails": [
            "dmccoy103@nii.com"
        ],
        "phoneNumbers": [
            "103-397-1289"
        ],
        "socMedias": [
            {
                "twitter": "dmccoy@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-01-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRIAOCON8935",
    "name": {
        "title": "Mr",
        "first": "Brian",
        "middle": "Y",
        "last": "Oconnell",
        "suffix": null
    },
    "address": {
        "streetAddress": "996 Little Ridge Street",
        "buildingName": "Building 49",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Upper Lydbrook",
        "locality1": "England",
        "locality2": "Gloucestershire",
        "country": "GB",
        "postalCode": "GL17",
        "geoSpatial": [
            "-2.5099",
            "51.8577"
        ]
    },
    "contact": {
        "email": "boconnel104@tata.com",
        "phone": "104-789-8935",
        "socMedia": {
            "linkedin": "boconnel@linkedin.com"
        }
    },
    "login": {
        "username": "boconnel",
        "oauth2": "boconnel@linkedin.com",
        "password": "$2y$10$saH.75WI.RogSpcQyNRCJeG4SW7yoNnvWErShyEya8UrzWB8yBymm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-09-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "OTILMITC8134",
    "name": {
        "title": null,
        "first": "Otilia",
        "middle": null,
        "last": "Mitchell",
        "suffix": null
    },
    "address": {
        "streetAddress": "2529 Blue Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sekrine",
        "locality1": "Setif",
        "locality2": "Setif",
        "country": "DZ",
        "postalCode": "19013",
        "geoSpatial": [
            "5.2905",
            "35.8545"
        ]
    },
    "contact": {
        "email": "omitchel105@bce.com",
        "phone": "105-084-8134",
        "socMedia": []
    },
    "login": {
        "username": "omitchel",
        "oauth2": null,
        "password": "$2y$10$JRBRqLtotav\/2ZCb9rKWfO.iygShrDwbh\/dGd50.NrnwEufmq69N."
    },
    "otherContact": {
        "emails": [
            "omitchel105@orange.com",
            "omitchel105@rogers.com",
            "omitchel105@sktelecom.com"
        ],
        "phoneNumbers": [
            "105-504-7490",
            "105-581-5749",
            "105-504-2498"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-10-05"
    },
    "partner": "Y",
    "businessName": "Specialty Associates Company"
});
db.users.insertOne(
{
    "userKey": "ADOLWILL9961",
    "name": {
        "title": "Mr",
        "first": "Adolfo",
        "middle": "Y",
        "last": "Willis",
        "suffix": null
    },
    "address": {
        "streetAddress": "7360 Little Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Laanecoorie",
        "locality1": "VIC",
        "locality2": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3463",
        "geoSpatial": [
            "143.9",
            "-36.8167"
        ]
    },
    "contact": {
        "email": "awillis106@telecom.com",
        "phone": "106-781-9961",
        "socMedia": {
            "google": "awillis@google.com"
        }
    },
    "login": {
        "username": "awillis",
        "oauth2": "awillis@google.com",
        "password": "$2y$10$HXWgKOLRBpDjva7c43ggcuXNygJeJeOl0dxi6JZlIiD3oc9rl0b\/."
    },
    "otherContact": {
        "emails": [
            "awillis106@telecomitalia.com",
            "awillis106@verizon.com",
            "awillis106@glasnet.com"
        ],
        "phoneNumbers": [
            "106-414-7494",
            "106-623-6856",
            "106-258-7293"
        ],
        "socMedias": [
            {
                "line": "awillis@line.com"
            },
            {
                "twitter": "awillis@twitter.com"
            },
            {
                "linkedin": "awillis@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-02-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SUKMERR7464",
    "name": {
        "title": "Ms",
        "first": "Suk",
        "middle": "S",
        "last": "Merritt",
        "suffix": null
    },
    "address": {
        "streetAddress": "7912 Winding Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kumburegama",
        "locality1": "Kandy",
        "locality2": "Kandy",
        "country": "LK",
        "postalCode": "20086",
        "geoSpatial": [
            "80.5493",
            "7.358"
        ]
    },
    "contact": {
        "email": "smerritt107@telus.com",
        "phone": "107-879-7464",
        "socMedia": {
            "facebook": "smerritt@facebook.com"
        }
    },
    "login": {
        "username": "smerritt",
        "oauth2": "smerritt@facebook.com",
        "password": "$2y$10$mJtt8gknQAw386IDf6oyNeOmrNakpVZRZBNU6gCNwl6PST5HoAlu6"
    },
    "otherContact": {
        "emails": [
            "smerritt107@telefonica.com",
            "smerritt107@chunghwa.com",
            "smerritt107@sktelecom.com"
        ],
        "phoneNumbers": [
            "107-693-5725",
            "107-590-0564",
            "107-188-2654"
        ],
        "socMedias": [
            {
                "google": "smerritt@google.com"
            },
            {
                "facebook": "smerritt@facebook.com"
            },
            {
                "skype": "smerritt@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-09-04"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MELADEJE6357",
    "name": {
        "title": "Dr",
        "first": "Melania",
        "middle": null,
        "last": "Dejesus",
        "suffix": "III"
    },
    "address": {
        "streetAddress": "850 Winding Bend Boulevard",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": "97",
        "city": "Yaven Creek",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2729",
        "geoSpatial": [
            "147.9929",
            "-35.2452"
        ]
    },
    "contact": {
        "email": "mdejesus108@icom.com",
        "phone": "108-911-6357",
        "socMedia": []
    },
    "login": {
        "username": "mdejesus",
        "oauth2": null,
        "password": "$2y$10$T6HT08OwzOK79LrdpXzCc.7Dgw3.bzM3pQxw9A.bn8RiedMPqa07m"
    },
    "otherContact": {
        "emails": [
            "mdejesus108@oi.com",
            "mdejesus108@glasnet.com"
        ],
        "phoneNumbers": [
            "108-712-7759",
            "108-644-5242"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-08-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALTOBEAN9560",
    "name": {
        "title": "Mr",
        "first": "Alton",
        "middle": "U",
        "last": "Bean",
        "suffix": null
    },
    "address": {
        "streetAddress": "1235 Big Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sigave",
        "locality1": "Circonscription de Sigave",
        "locality2": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620",
        "geoSpatial": [
            "-178.1667",
            "-14.2667"
        ]
    },
    "contact": {
        "email": "abean109@telecomitalia.com",
        "phone": "109-346-9560",
        "socMedia": {
            "linkedin": "abean@linkedin.com"
        }
    },
    "login": {
        "username": "abean",
        "oauth2": "abean@linkedin.com",
        "password": "$2y$10$JI9cZi7JkNWfYqWGDIqTd.BPuxOFhzZuVqiBdoTKvEY13S32gLSWy"
    },
    "otherContact": {
        "emails": [
            "abean109@ktc.com"
        ],
        "phoneNumbers": [
            "109-606-0737"
        ],
        "socMedias": [
            {
                "linkedin": "abean@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-01-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARLPHIL2052",
    "name": {
        "title": "Mr",
        "first": "Marlin",
        "middle": "W",
        "last": "Phillips",
        "suffix": null
    },
    "address": {
        "streetAddress": "8224 Blue Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Porters Lake",
        "locality1": "NS",
        "locality2": "Nova Scotia",
        "country": "CA",
        "postalCode": "B3E",
        "geoSpatial": [
            "-63.3361",
            "44.7722"
        ]
    },
    "contact": {
        "email": "mphillip110@telkom.com",
        "phone": "110-309-2052",
        "socMedia": {
            "twitter": "mphillip@twitter.com"
        }
    },
    "login": {
        "username": "mphillip",
        "oauth2": "mphillip@twitter.com",
        "password": "$2y$10$j0bmSNZ0QKovN.5Ns6Q25er0QT7bq9K9WK.DQrAYHo.tZ7N\/hG6fG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-05-15"
    },
    "partner": "Y",
    "businessName": "Accomodation Partners LLC"
});
db.users.insertOne(
{
    "userKey": "EDUANICH6163",
    "name": {
        "title": null,
        "first": "Eduardo",
        "middle": null,
        "last": "Nichols",
        "suffix": null
    },
    "address": {
        "streetAddress": "3296 Red Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Casinina",
        "locality1": "MH",
        "locality2": "Pesaro E Urbino",
        "country": "IT",
        "postalCode": "61020",
        "geoSpatial": [
            "12.5833",
            "43.8167"
        ]
    },
    "contact": {
        "email": "enichols111@eunet.com",
        "phone": "111-776-6163",
        "socMedia": []
    },
    "login": {
        "username": "enichols",
        "oauth2": null,
        "password": "$2y$10$LMJQ8.kuoQ7pAT3bKgtz2OjT3ienPcZnHZBNL6wovoRW1KWGhh3BC"
    },
    "otherContact": {
        "emails": [
            "enichols111@kddi.com"
        ],
        "phoneNumbers": [
            "111-077-0002"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-05-13"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DEBOMERC8943",
    "name": {
        "title": "Ms",
        "first": "Debora",
        "middle": "I",
        "last": "Mercado",
        "suffix": null
    },
    "address": {
        "streetAddress": "6178 Big River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Idlicote",
        "locality1": "England",
        "locality2": "Warwickshire",
        "country": "GB",
        "postalCode": "CV36",
        "geoSpatial": [
            "-1.5841",
            "52.0941"
        ]
    },
    "contact": {
        "email": "dmercado112@safaricom.com",
        "phone": "112-515-8943",
        "socMedia": {
            "google": "dmercado@google.com"
        }
    },
    "login": {
        "username": "dmercado",
        "oauth2": "dmercado@google.com",
        "password": "$2y$10$HAXcPMA17ilw79j1E76IK.toHy7I0YggHqGlidr6qf8b6T7fDIPxy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-10-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALVIVILL5392",
    "name": {
        "title": null,
        "first": "Alvina",
        "middle": null,
        "last": "Villarreal",
        "suffix": null
    },
    "address": {
        "streetAddress": "197 Blue Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "DC",
        "city": "Hawthorn",
        "locality1": "England",
        "locality2": "Durham",
        "country": "GB",
        "postalCode": "SR7",
        "geoSpatial": [
            "-1.35",
            "54.8"
        ]
    },
    "contact": {
        "email": "avillarr114@turkcell.com",
        "phone": "114-588-5392",
        "socMedia": []
    },
    "login": {
        "username": "avillarr",
        "oauth2": null,
        "password": "$2y$10$rT1Hzdx2DGCGg1RqIhIeMesxoR86O.QnYJSAImlucSE\/czReTXHlu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-04-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHAYPORT3791",
    "name": {
        "title": "Mr",
        "first": "Shayne",
        "middle": "I",
        "last": "Porter",
        "suffix": null
    },
    "address": {
        "streetAddress": "4034 Red Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wasserbillig",
        "locality1": "GR",
        "locality2": "Mertert",
        "country": "LU",
        "postalCode": "L-6631",
        "geoSpatial": [
            "6.4977",
            "49.717"
        ]
    },
    "contact": {
        "email": "sporter115@telkom.com",
        "phone": "115-332-3791",
        "socMedia": {
            "skype": "sporter@skype.com"
        }
    },
    "login": {
        "username": "sporter",
        "oauth2": "sporter@skype.com",
        "password": "$2y$10$cwyKy0BHCzwiC1dkAITc0.SZf85Oq2dWw8SyCBDG1N0znR\/2NuPWG"
    },
    "otherContact": {
        "emails": [
            "sporter115@ccs.com",
            "sporter115@netcom.com"
        ],
        "phoneNumbers": [
            "115-919-7205",
            "115-370-4934"
        ],
        "socMedias": [
            {
                "google": "sporter@google.com"
            },
            {
                "linkedin": "sporter@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-06-15"
    },
    "partner": "Y",
    "businessName": "Leisure Partners"
});
db.users.insertOne(
{
    "userKey": "NOESELL0627",
    "name": {
        "title": "Mr",
        "first": "Noe",
        "middle": "P",
        "last": "Sellers",
        "suffix": null
    },
    "address": {
        "streetAddress": "6434 Red Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lamington",
        "locality1": "WA",
        "locality2": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6430",
        "geoSpatial": [
            "121.4616",
            "-30.7342"
        ]
    },
    "contact": {
        "email": "nsellers116@telus.com",
        "phone": "116-045-0627",
        "socMedia": {
            "twitter": "nsellers@twitter.com"
        }
    },
    "login": {
        "username": "nsellers",
        "oauth2": "nsellers@twitter.com",
        "password": "$2y$10$TO7fgx\/KUOJYP73zq6sG\/eMXJ5uZH\/X2Vf6xYlOa6b\/N4ziPqIc3m"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-07-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "EVERMATH6784",
    "name": {
        "title": null,
        "first": "Everette",
        "middle": null,
        "last": "Mathews",
        "suffix": null
    },
    "address": {
        "streetAddress": "2383 Short Bridge Street",
        "buildingName": "Building 57",
        "floor": 5,
        "roomAptCondoFlat": null,
        "city": "Alzingen",
        "locality1": "LU",
        "locality2": "Hesperange",
        "country": "LU",
        "postalCode": "L-5854",
        "geoSpatial": [
            "6.1695",
            "49.5687"
        ]
    },
    "contact": {
        "email": "emathews117@openworld.com",
        "phone": "117-576-6784",
        "socMedia": []
    },
    "login": {
        "username": "emathews",
        "oauth2": null,
        "password": "$2y$10$juP7iEA.oFVrzOWHtmqLgeiWJ4IpkGEHvQoPCyhJqWLB7N8YlIc0y"
    },
    "otherContact": {
        "emails": [
            "emathews117@orstom.com",
            "emathews117@tt.com",
            "emathews117@telecom.com"
        ],
        "phoneNumbers": [
            "117-875-9476",
            "117-434-5657",
            "117-395-2187"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-04-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "PRICDAVI8914",
    "name": {
        "title": "Ms",
        "first": "Pricilla",
        "middle": "R",
        "last": "Davila",
        "suffix": null
    },
    "address": {
        "streetAddress": "5174 Winding Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nightcott",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "TA22",
        "geoSpatial": [
            "-3.5473",
            "51.0626"
        ]
    },
    "contact": {
        "email": "pdavila118@openworld.com",
        "phone": "118-492-8914",
        "socMedia": {
            "skype": "pdavila@skype.com"
        }
    },
    "login": {
        "username": "pdavila",
        "oauth2": "pdavila@skype.com",
        "password": "$2y$10$oXqhDATAqeeVpD0x5jfjLeiw0P\/O46n.9zi.NUJawFXKABD7Hfw6K"
    },
    "otherContact": {
        "emails": [
            "pdavila118@eunet.com",
            "pdavila118@greennet.com"
        ],
        "phoneNumbers": [
            "118-921-4644",
            "118-279-9104"
        ],
        "socMedias": [
            {
                "twitter": "pdavila@twitter.com"
            },
            {
                "facebook": "pdavila@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-10-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SUSAMORA8310",
    "name": {
        "title": "Ms",
        "first": "Susana",
        "middle": "G",
        "last": "Morales",
        "suffix": null
    },
    "address": {
        "streetAddress": "786 Big Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vauclaix",
        "locality1": "Arrondissement de Clamecy",
        "locality2": "Ni\u00e8vre",
        "country": "FR",
        "postalCode": "58140",
        "geoSpatial": [
            "3.8236",
            "47.2321"
        ]
    },
    "contact": {
        "email": "smorales119@ptcl.com",
        "phone": "119-701-8310",
        "socMedia": {
            "twitter": "smorales@twitter.com"
        }
    },
    "login": {
        "username": "smorales",
        "oauth2": "smorales@twitter.com",
        "password": "$2y$10$PnhS7VFI7mSDY3hPixU1nONDGeo6e.xRKqhQS6LWgTQIfTu6jal4e"
    },
    "otherContact": {
        "emails": [
            "smorales119@ais.com"
        ],
        "phoneNumbers": [
            "119-829-9306"
        ],
        "socMedias": [
            {
                "linkedin": "smorales@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-08-15"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "IESHADAM2936",
    "name": {
        "title": null,
        "first": "Iesha",
        "middle": null,
        "last": "Adams",
        "suffix": null
    },
    "address": {
        "streetAddress": "2952 Long Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C8",
        "city": "Kankada",
        "locality1": "Patna",
        "locality2": "Kendujhar",
        "country": "IN",
        "postalCode": "758046",
        "geoSpatial": [
            "84.2409",
            "20.1899"
        ]
    },
    "contact": {
        "email": "iadams120@maxcomm.com",
        "phone": "120-050-2936",
        "socMedia": []
    },
    "login": {
        "username": "iadams",
        "oauth2": null,
        "password": "$2y$10$EboVZuTUXFmpFHxp5ltcGOXOTNHRk6cihJ\/DSdzUcBAoP9ROw4\/OO"
    },
    "otherContact": {
        "emails": [
            "iadams120@telia.com",
            "iadams120@vivendi.com",
            "iadams120@att.com"
        ],
        "phoneNumbers": [
            "120-455-3892",
            "120-276-4261",
            "120-667-8026"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-03-04"
    },
    "partner": "Y",
    "businessName": "Green Holdings Ltd"
});
db.users.insertOne(
{
    "userKey": "TRENFREN6349",
    "name": {
        "title": "Mr",
        "first": "Trent",
        "middle": "A",
        "last": "French",
        "suffix": null
    },
    "address": {
        "streetAddress": "8950 Red Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Micha\u013eany",
        "locality1": "KI",
        "locality2": "Trebi\u0161ov",
        "country": "SK",
        "postalCode": "076 14",
        "geoSpatial": [
            "21.6234",
            "48.5159"
        ]
    },
    "contact": {
        "email": "tfrench121@ooredoo.com",
        "phone": "121-277-6349",
        "socMedia": {
            "linkedin": "tfrench@linkedin.com"
        }
    },
    "login": {
        "username": "tfrench",
        "oauth2": "tfrench@linkedin.com",
        "password": "$2y$10$Zw3ONiiU8PkFxiJ\/qrVcKes3vsKs4pNeB5XpS3M0FWcn.nN57rEf."
    },
    "otherContact": {
        "emails": [
            "tfrench121@greennet.com",
            "tfrench121@jio.com",
            "tfrench121@apicnet.com"
        ],
        "phoneNumbers": [
            "121-110-4682",
            "121-742-1224",
            "121-631-7898"
        ],
        "socMedias": [
            {
                "linkedin": "tfrench@linkedin.com"
            },
            {
                "twitter": "tfrench@twitter.com"
            },
            {
                "facebook": "tfrench@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-12-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GIOVLEST4657",
    "name": {
        "title": "Mr",
        "first": "Giovanni",
        "middle": "U",
        "last": "Lester",
        "suffix": null
    },
    "address": {
        "streetAddress": "4240 Long Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Llanelltyd",
        "locality1": "Wales",
        "locality2": "Gwynedd",
        "country": "GB",
        "postalCode": "LL40",
        "geoSpatial": [
            "-3.9027",
            "52.7572"
        ]
    },
    "contact": {
        "email": "glester122@cerist.com",
        "phone": "122-938-4657",
        "socMedia": {
            "twitter": "glester@twitter.com"
        }
    },
    "login": {
        "username": "glester",
        "oauth2": "glester@twitter.com",
        "password": "$2y$10$2AxyRzp5vCz4XLKnTHTrVewZoclq6Qkn737qzIrxtdcs1tOwKzvZa"
    },
    "otherContact": {
        "emails": [
            "glester122@telenor.com"
        ],
        "phoneNumbers": [
            "122-820-8929"
        ],
        "socMedias": [
            {
                "google": "glester@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-09-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRENSCHA5762",
    "name": {
        "title": null,
        "first": "Brendon",
        "middle": null,
        "last": "Schaefer",
        "suffix": null
    },
    "address": {
        "streetAddress": "5058 Blue Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Moose Jaw Northeast",
        "locality1": "SK",
        "locality2": "Moose Jaw ",
        "country": "CA",
        "postalCode": "S6J",
        "geoSpatial": [
            "-105.5393",
            "50.4185"
        ]
    },
    "contact": {
        "email": "bschaefe123@safaricom.com",
        "phone": "123-031-5762",
        "socMedia": []
    },
    "login": {
        "username": "bschaefe",
        "oauth2": null,
        "password": "$2y$10$OEyLiiZAWHsawJf24ILE5.GfZ6sItJ8BrzBqm4k5DS6xytB1tpeKS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-07-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LUCRRHOD7299",
    "name": {
        "title": "Ms",
        "first": "Lucrecia",
        "middle": "O",
        "last": "Rhodes",
        "suffix": null
    },
    "address": {
        "streetAddress": "3752 Big Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Garden Grove",
        "locality1": "CA",
        "locality2": "Orange",
        "country": "US",
        "postalCode": "92840",
        "geoSpatial": [
            "-117.9273",
            "33.7869"
        ]
    },
    "contact": {
        "email": "lrhodes124@daxnet.com",
        "phone": "124-539-7299",
        "socMedia": {
            "linkedin": "lrhodes@linkedin.com"
        }
    },
    "login": {
        "username": "lrhodes",
        "oauth2": "lrhodes@linkedin.com",
        "password": "$2y$10$f0d1KyxeS78ZEev4niOsM.XLfOyUSUlFVBOW07e7SoYPDuNBZsRLm"
    },
    "otherContact": {
        "emails": [
            "lrhodes124@vivendi.com",
            "lrhodes124@apicnet.com"
        ],
        "phoneNumbers": [
            "124-923-9948",
            "124-105-0422"
        ],
        "socMedias": [
            {
                "google": "lrhodes@google.com"
            },
            {
                "line": "lrhodes@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-03-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LASHGARN7734",
    "name": {
        "title": "Ms",
        "first": "Lashaun",
        "middle": "Y",
        "last": "Garner",
        "suffix": null
    },
    "address": {
        "streetAddress": "3194 Blue Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "P\u00f3voa de Varzim",
        "locality1": "P\u00f3voa De Varzim",
        "locality2": "P\u00f3voa de Varzim",
        "country": "PT",
        "postalCode": "4490-052",
        "geoSpatial": [
            "-8.7636",
            "41.3834"
        ]
    },
    "contact": {
        "email": "lgarner125@bce.com",
        "phone": "125-924-7734",
        "socMedia": {
            "twitter": "lgarner@twitter.com"
        }
    },
    "login": {
        "username": "lgarner",
        "oauth2": "lgarner@twitter.com",
        "password": "$2y$10$mn9LKi5Tw\/kseZe4fNLdNOdr1821REWY3X6VqUA9nM195qHrQqcTK"
    },
    "otherContact": {
        "emails": [
            "lgarner125@access.com",
            "lgarner125@eunet.com"
        ],
        "phoneNumbers": [
            "125-284-2120",
            "125-625-2278"
        ],
        "socMedias": [
            {
                "linkedin": "lgarner@linkedin.com"
            },
            {
                "google": "lgarner@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-12-15"
    },
    "partner": "Y",
    "businessName": "Friendly Trust"
});
db.users.insertOne(
{
    "userKey": "EFFISCHM9296",
    "name": {
        "title": null,
        "first": "Effie",
        "middle": null,
        "last": "Schmitt",
        "suffix": null
    },
    "address": {
        "streetAddress": "7460 Short River Avenue",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": "28",
        "city": "Tulshi",
        "locality1": "Mandangad",
        "locality2": "Ratnagiri",
        "country": "IN",
        "postalCode": "415203",
        "geoSpatial": [
            "77.6699",
            "19.6184"
        ]
    },
    "contact": {
        "email": "eschmitt126@ui.com",
        "phone": "126-068-9296",
        "socMedia": []
    },
    "login": {
        "username": "eschmitt",
        "oauth2": null,
        "password": "$2y$10$aU9b4wsizr8otWFUnUggiePQ\/y1YfjkK8As4kl0VN9uI.R1xTUPBW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-04-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHIYANG7157",
    "name": {
        "title": "Mr",
        "first": "Chi",
        "middle": "B",
        "last": "Yang",
        "suffix": null
    },
    "address": {
        "streetAddress": "206 Short Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vieques",
        "locality1": "Vieques",
        "locality2": "Vieques",
        "country": "PR",
        "postalCode": "00765",
        "geoSpatial": [
            "-66.2431",
            "18.0859"
        ]
    },
    "contact": {
        "email": "cyang127@cci.com",
        "phone": "127-661-7157",
        "socMedia": {
            "linkedin": "cyang@linkedin.com"
        }
    },
    "login": {
        "username": "cyang",
        "oauth2": "cyang@linkedin.com",
        "password": "$2y$10$zEdLo6ymGTwuWcFJLWZXauv79Zw09IhEmi3xggbYD\/bPvFxp1p1su"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-01-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KERMIBAR4600",
    "name": {
        "title": "Mr",
        "first": "Kermit",
        "middle": "O",
        "last": "Ibarra",
        "suffix": null
    },
    "address": {
        "streetAddress": "9829 Green Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Legume",
        "locality1": "NSW",
        "locality2": "NSW NORTH COAST",
        "country": "AU",
        "postalCode": "2476",
        "geoSpatial": [
            "152.3095",
            "-28.4081"
        ]
    },
    "contact": {
        "email": "kibarra128@openworld.com",
        "phone": "128-754-4600",
        "socMedia": {
            "facebook": "kibarra@facebook.com"
        }
    },
    "login": {
        "username": "kibarra",
        "oauth2": "kibarra@facebook.com",
        "password": "$2y$10$tQpfhCA9N3GheyLZKFevhuLX1k5o80xtpGs\/H6XuBzA.wj42PUTGO"
    },
    "otherContact": {
        "emails": [
            "kibarra128@cubenet.com"
        ],
        "phoneNumbers": [
            "128-426-2448"
        ],
        "socMedias": [
            {
                "twitter": "kibarra@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-09-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ELDEFREE3874",
    "name": {
        "title": null,
        "first": "Elden",
        "middle": null,
        "last": "Freeman",
        "suffix": null
    },
    "address": {
        "streetAddress": "6861 Blue Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tjud\u00f6",
        "locality1": "Finstr\u00f6m",
        "locality2": "Finstr\u00f6m",
        "country": "AX",
        "postalCode": "22330",
        "geoSpatial": [
            "19.9382",
            "60.3398"
        ]
    },
    "contact": {
        "email": "efreeman129@glasnet.com",
        "phone": "129-558-3874",
        "socMedia": []
    },
    "login": {
        "username": "efreeman",
        "oauth2": null,
        "password": "$2y$10$w.UuI30U6CyeEJ1UnV8N6eDCvRaPwx4pcZUoRMKeHLDODK8zVoEw."
    },
    "otherContact": {
        "emails": [
            "efreeman129@rogers.com",
            "efreeman129@tm.com"
        ],
        "phoneNumbers": [
            "129-802-3498",
            "129-429-0234"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-05-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "STEPVALE9998",
    "name": {
        "title": "Ms",
        "first": "Stephany",
        "middle": "O",
        "last": "Valencia",
        "suffix": null
    },
    "address": {
        "streetAddress": "9589 Short Bend Ride",
        "buildingName": "Building AA",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Columbus",
        "locality1": "OH",
        "locality2": "Franklin",
        "country": "US",
        "postalCode": "43279",
        "geoSpatial": [
            "-83.0114",
            "39.969"
        ]
    },
    "contact": {
        "email": "svalenci130@cci.com",
        "phone": "130-981-9998",
        "socMedia": {
            "facebook": "svalenci@facebook.com"
        }
    },
    "login": {
        "username": "svalenci",
        "oauth2": "svalenci@facebook.com",
        "password": "$2y$10$LeORdSqva2boiKl\/y2RLeu1r\/NMK.8yWNwx99AewqDN6AT7H.ODvW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-01-18"
    },
    "partner": "Y",
    "businessName": "Industrious Holdings"
});
db.users.insertOne(
{
    "userKey": "PENEYANG6894",
    "name": {
        "title": "Ms",
        "first": "Penelope",
        "middle": "O",
        "last": "Yang",
        "suffix": null
    },
    "address": {
        "streetAddress": "9974 Green Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kulusuk",
        "locality1": null,
        "locality2": null,
        "country": "GL",
        "postalCode": "3915",
        "geoSpatial": [
            "-37.1833",
            "65.5667"
        ]
    },
    "contact": {
        "email": "pyang131@ui.com",
        "phone": "131-584-6894",
        "socMedia": {
            "facebook": "pyang@facebook.com"
        }
    },
    "login": {
        "username": "pyang",
        "oauth2": "pyang@facebook.com",
        "password": "$2y$10$KrAMd\/5L0Yvh\/JtEY12Fae0pUvknPcGirGkcpJ3mIYEJrXS9rhyfK"
    },
    "otherContact": {
        "emails": [
            "pyang131@telenor.com",
            "pyang131@telenor.com",
            "pyang131@telesystems.com"
        ],
        "phoneNumbers": [
            "131-134-8291",
            "131-827-9494",
            "131-554-0196"
        ],
        "socMedias": [
            {
                "line": "pyang@line.com"
            },
            {
                "facebook": "pyang@facebook.com"
            },
            {
                "skype": "pyang@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-09-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARLVAUG1121",
    "name": {
        "title": null,
        "first": "Marlon",
        "middle": null,
        "last": "Vaughan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2187 Short Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "FC",
        "city": "Downtown Toronto (Rosedale)",
        "locality1": "ON",
        "locality2": "Toronto",
        "country": "CA",
        "postalCode": "M4W",
        "geoSpatial": [
            "-79.373",
            "43.6827"
        ]
    },
    "contact": {
        "email": "mvaughan132@telecom.com",
        "phone": "132-297-1121",
        "socMedia": []
    },
    "login": {
        "username": "mvaughan",
        "oauth2": null,
        "password": "$2y$10$0UmcI3suVO\/SqNYppbb1UuYA9elRwuYTP23rOuu8CcF956oHe92NK"
    },
    "otherContact": {
        "emails": [
            "mvaughan132@greennet.com",
            "mvaughan132@millicom.com"
        ],
        "phoneNumbers": [
            "132-835-2084",
            "132-451-6756"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-07-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DOMEVALD7794",
    "name": {
        "title": "Mr",
        "first": "Domenic",
        "middle": "P",
        "last": "Valdez",
        "suffix": null
    },
    "address": {
        "streetAddress": "4780 Red Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fort-de-France",
        "locality1": "MQ",
        "locality2": "Martinique",
        "country": "MQ",
        "postalCode": "97219 CEDEX",
        "geoSpatial": [
            "-61.0733",
            "14.6089"
        ]
    },
    "contact": {
        "email": "dvaldez133@ais.com",
        "phone": "133-664-7794",
        "socMedia": {
            "skype": "dvaldez@skype.com"
        }
    },
    "login": {
        "username": "dvaldez",
        "oauth2": "dvaldez@skype.com",
        "password": "$2y$10$6vcQvKlOza9XieZtlk2Uyef0mvA8NMjYb6mA7B6zJgW7ggalFj\/Z."
    },
    "otherContact": {
        "emails": [
            "dvaldez133@uunet.com",
            "dvaldez133@worldnet.com"
        ],
        "phoneNumbers": [
            "133-098-5030",
            "133-819-0672"
        ],
        "socMedias": [
            {
                "twitter": "dvaldez@twitter.com"
            },
            {
                "line": "dvaldez@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-03-30"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KAYEARIA2186",
    "name": {
        "title": "Ms",
        "first": "Kaye",
        "middle": "S",
        "last": "Arias",
        "suffix": null
    },
    "address": {
        "streetAddress": "3495 Long Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kenmore",
        "locality1": "QLD",
        "locality2": "NORTHGATE CENT",
        "country": "AU",
        "postalCode": "4069",
        "geoSpatial": [
            "152.9388",
            "-27.5076"
        ]
    },
    "contact": {
        "email": "karias134@swisscom.com",
        "phone": "134-441-2186",
        "socMedia": {
            "linkedin": "karias@linkedin.com"
        }
    },
    "login": {
        "username": "karias",
        "oauth2": "karias@linkedin.com",
        "password": "$2y$10$mp43.WaSRgOBF1r.K8MKXOBFEZNK7qIDNG\/Z3XwjOh\/dSm2JHT0Vu"
    },
    "otherContact": {
        "emails": [
            "karias134@telkom.com",
            "karias134@safaricom.com"
        ],
        "phoneNumbers": [
            "134-315-0899",
            "134-677-4763"
        ],
        "socMedias": [
            {
                "facebook": "karias@facebook.com"
            },
            {
                "twitter": "karias@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-02-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VELDPORT7171",
    "name": {
        "title": null,
        "first": "Velda",
        "middle": null,
        "last": "Porter",
        "suffix": null
    },
    "address": {
        "streetAddress": "279 Red Mound Way",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": null,
        "city": "\u0412\u0435\u043b\u0438\u043a\u043e\u043f\u043e\u043b\u043e\u0432\u0435\u0446\u044c\u043a\u0435",
        "locality1": "Skvyrskyi",
        "locality2": "Skvyrskyi",
        "country": "UA",
        "postalCode": "09030",
        "geoSpatial": [
            "29.6614",
            "50.5306"
        ]
    },
    "contact": {
        "email": "vporter135@millicom.com",
        "phone": "135-304-7171",
        "socMedia": []
    },
    "login": {
        "username": "vporter",
        "oauth2": null,
        "password": "$2y$10$N7EJO90gRvJ\/D1UhrerQEO0em5oSiUrWbYKOgupaL7FFAkxxXdt.m"
    },
    "otherContact": {
        "emails": [
            "vporter135@sprint.com"
        ],
        "phoneNumbers": [
            "135-735-4072"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-10-14"
    },
    "partner": "Y",
    "businessName": "Serious Partners"
});
db.users.insertOne(
{
    "userKey": "RACHBALL3692",
    "name": {
        "title": "Ms",
        "first": "Rachel",
        "middle": "J",
        "last": "Ballard",
        "suffix": null
    },
    "address": {
        "streetAddress": "2016 Winding Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Khadana",
        "locality1": "Anupshahr",
        "locality2": "Bulandshahr",
        "country": "IN",
        "postalCode": "203394",
        "geoSpatial": [
            "78.1519",
            "28.4399"
        ]
    },
    "contact": {
        "email": "rballard136@vivendi.com",
        "phone": "136-677-3692",
        "socMedia": {
            "twitter": "rballard@twitter.com"
        }
    },
    "login": {
        "username": "rballard",
        "oauth2": "rballard@twitter.com",
        "password": "$2y$10$iCdKsU95ij08PNsqPEkoCei1WH2xjmba7cbXAprDRdqvZStkk0Kl6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-06-15"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "WAYLRIVE0892",
    "name": {
        "title": "Mr",
        "first": "Waylon",
        "middle": "P",
        "last": "Rivera",
        "suffix": null
    },
    "address": {
        "streetAddress": "2280 Big Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0418\u043c. \u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a\u043e\u0433\u043e",
        "locality1": "\u041a\u0410\u0428\u0418\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality2": "\u041a\u0410\u0428\u0418\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "396347",
        "geoSpatial": [
            "39.0485",
            "51.5558"
        ]
    },
    "contact": {
        "email": "wrivera137@bifty.com",
        "phone": "137-895-0892",
        "socMedia": {
            "facebook": "wrivera@facebook.com"
        }
    },
    "login": {
        "username": "wrivera",
        "oauth2": "wrivera@facebook.com",
        "password": "$2y$10$F0Tog1FthXuz5pO0hG1a8uKRR7nnbs6Q6Soi6eNs98L80VC9To2SG"
    },
    "otherContact": {
        "emails": [
            "wrivera137@unicom.com",
            "wrivera137@ntt.com"
        ],
        "phoneNumbers": [
            "137-345-5224",
            "137-332-3844"
        ],
        "socMedias": [
            {
                "line": "wrivera@line.com"
            },
            {
                "google": "wrivera@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-11-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ELVIINGR3849",
    "name": {
        "title": null,
        "first": "Elvis",
        "middle": null,
        "last": "Ingram",
        "suffix": null
    },
    "address": {
        "streetAddress": "5476 Red Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "AC",
        "city": "Gilroyd",
        "locality1": "WA",
        "locality2": "Western Australia",
        "country": "AU",
        "postalCode": "6701",
        "geoSpatial": [
            "119.1891",
            "-20.5828"
        ]
    },
    "contact": {
        "email": "eingram138@bt.com",
        "phone": "138-603-3849",
        "socMedia": []
    },
    "login": {
        "username": "eingram",
        "oauth2": null,
        "password": "$2y$10$vNbnlvSVE.nmb8f2qR9.D.zMi5D\/rM4zqDuLQZYEXRDLq9J4LlFZG"
    },
    "otherContact": {
        "emails": [
            "eingram138@unicom.com"
        ],
        "phoneNumbers": [
            "138-002-1226"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-05-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CORNDICK2243",
    "name": {
        "title": "Ms",
        "first": "Cornelia",
        "middle": "I",
        "last": "Dickson",
        "suffix": null
    },
    "address": {
        "streetAddress": "963 Green Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tren\u010d\u00edn",
        "locality1": "TC",
        "locality2": "Tren\u010diansky kraj",
        "country": "SK",
        "postalCode": "911 08",
        "geoSpatial": [
            "18.0444",
            "48.8945"
        ]
    },
    "contact": {
        "email": "cdickson139@openworld.com",
        "phone": "139-138-2243",
        "socMedia": {
            "google": "cdickson@google.com"
        }
    },
    "login": {
        "username": "cdickson",
        "oauth2": "cdickson@google.com",
        "password": "$2y$10$Vv7p56jvGhrS9e5gKG3zFeTpjF8iSfwrLSi3gwqHwpHdfR4c04P8i"
    },
    "otherContact": {
        "emails": [
            "cdickson139@seednet.com",
            "cdickson139@daxnet.com",
            "cdickson139@zain.com"
        ],
        "phoneNumbers": [
            "139-345-0946",
            "139-388-5672",
            "139-926-1487"
        ],
        "socMedias": [
            {
                "line": "cdickson@line.com"
            },
            {
                "twitter": "cdickson@twitter.com"
            },
            {
                "skype": "cdickson@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-05-08"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SANJTREV8185",
    "name": {
        "title": "Ms",
        "first": "Sanjuana",
        "middle": "K",
        "last": "Trevino",
        "suffix": null
    },
    "address": {
        "streetAddress": "7863 Winding Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rainy River Region (Emo)",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "P0W",
        "geoSpatial": [
            "-93.7522",
            "48.875"
        ]
    },
    "contact": {
        "email": "strevino140@telia.com",
        "phone": "140-570-8185",
        "socMedia": {
            "facebook": "strevino@facebook.com"
        }
    },
    "login": {
        "username": "strevino",
        "oauth2": "strevino@facebook.com",
        "password": "$2y$10$RILsorwCVSzXYAaeF88D4.CVNLHGw1PBOExhZ5PosDzDvxDV\/GYna"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-02-15"
    },
    "partner": "Y",
    "businessName": "Industrious Industries Ltd"
});
db.users.insertOne(
{
    "userKey": "SEANODOM5369",
    "name": {
        "title": null,
        "first": "Sean",
        "middle": null,
        "last": "Odom",
        "suffix": null
    },
    "address": {
        "streetAddress": "3681 Winding Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jan Mayen",
        "locality1": "Jan Mayen",
        "locality2": "Jan Mayen",
        "country": "SJ",
        "postalCode": "8099",
        "geoSpatial": [
            "-8.638",
            "70.9498"
        ]
    },
    "contact": {
        "email": "sodom141@verizon.com",
        "phone": "141-022-5369",
        "socMedia": []
    },
    "login": {
        "username": "sodom",
        "oauth2": null,
        "password": "$2y$10$IFugOZ3CD\/e2wzOOixXYue6NyT.YPbXG0\/gR1U7VRZEUwNTXwVUNy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-07-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "TENNCONT5692",
    "name": {
        "title": "Ms",
        "first": "Tennie",
        "middle": "D",
        "last": "Contreras",
        "suffix": null
    },
    "address": {
        "streetAddress": "8474 Short Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Londonderry",
        "locality1": "England",
        "locality2": "North Yorkshire",
        "country": "GB",
        "postalCode": "DL7",
        "geoSpatial": [
            "-1.4424",
            "54.2877"
        ]
    },
    "contact": {
        "email": "tcontrer142@telefonica.com",
        "phone": "142-343-5692",
        "socMedia": {
            "facebook": "tcontrer@facebook.com"
        }
    },
    "login": {
        "username": "tcontrer",
        "oauth2": "tcontrer@facebook.com",
        "password": "$2y$10$yAZaEq27rxFDyr7nadO1Peal.BM72zi9436hNZBqFmcnVyahuaZsS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-05-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SINDSCHA5184",
    "name": {
        "title": "Ms",
        "first": "Sindy",
        "middle": "N",
        "last": "Schaefer",
        "suffix": null
    },
    "address": {
        "streetAddress": "8039 Big Creek Boulevard",
        "buildingName": "Building 43",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "SAN LORENZO",
        "locality1": "DEPTO DE SAN MARCOS",
        "locality2": "DEPTO DE SAN MARCOS",
        "country": "GT",
        "postalCode": "12029",
        "geoSpatial": [
            "-91.7333",
            "15.0333"
        ]
    },
    "contact": {
        "email": "sschaefe143@telus.com",
        "phone": "143-937-5184",
        "socMedia": {
            "line": "sschaefe@line.com"
        }
    },
    "login": {
        "username": "sschaefe",
        "oauth2": "sschaefe@line.com",
        "password": "$2y$10$275K.k2ThSf.39hZ5StOcewm\/K\/cYWhv\/WXoaItFJcnaXPg\/PZedK"
    },
    "otherContact": {
        "emails": [
            "sschaefe143@nordnet.com",
            "sschaefe143@cerist.com",
            "sschaefe143@vimpelcom.com"
        ],
        "phoneNumbers": [
            "143-778-0075",
            "143-555-7011",
            "143-279-8901"
        ],
        "socMedias": [
            {
                "twitter": "sschaefe@twitter.com"
            },
            {
                "linkedin": "sschaefe@linkedin.com"
            },
            {
                "line": "sschaefe@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-04-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "AUREJUAR2813",
    "name": {
        "title": null,
        "first": "Aurelio",
        "middle": null,
        "last": "Juarez",
        "suffix": null
    },
    "address": {
        "streetAddress": "709 Little Bough Road",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": "18",
        "city": "Jamieson",
        "locality1": "SA",
        "locality2": "South Australia",
        "country": "AU",
        "postalCode": "5640",
        "geoSpatial": [
            "136.3583",
            "-33.5083"
        ]
    },
    "contact": {
        "email": "ajuarez144@orange.com",
        "phone": "144-528-2813",
        "socMedia": []
    },
    "login": {
        "username": "ajuarez",
        "oauth2": null,
        "password": "$2y$10$gVYIzeaOdrnAx\/.rKsDbbeqoiJJ8whtyh0uciCTi5yP9jWKpi8UHS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-04-04"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "HEATAVIL6959",
    "name": {
        "title": "Mr",
        "first": "Heath",
        "middle": "E",
        "last": "Avila",
        "suffix": null
    },
    "address": {
        "streetAddress": "9496 Short River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Pierre",
        "locality1": "Saint-Pierre",
        "locality2": "Saint-Pierre",
        "country": "PM",
        "postalCode": "97500",
        "geoSpatial": [
            "-56.172",
            "46.7809"
        ]
    },
    "contact": {
        "email": "havila145@access.com",
        "phone": "145-349-6959",
        "socMedia": {
            "skype": "havila@skype.com"
        }
    },
    "login": {
        "username": "havila",
        "oauth2": "havila@skype.com",
        "password": "$2y$10$70tCxqNezY8fVZPKIDlzqebcKlZgfT0BM8pHi.ernA2E9.5IJOrBW"
    },
    "otherContact": {
        "emails": [
            "havila145@telstra.com",
            "havila145@ntt.com",
            "havila145@glasnet.com"
        ],
        "phoneNumbers": [
            "145-795-6827",
            "145-105-4710",
            "145-158-7401"
        ],
        "socMedias": [
            {
                "linkedin": "havila@linkedin.com"
            },
            {
                "line": "havila@line.com"
            },
            {
                "linkedin": "havila@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-01-03"
    },
    "partner": "Y",
    "businessName": "Comfort Associates"
});
db.users.insertOne(
{
    "userKey": "MARTLOPE6801",
    "name": {
        "title": "Ms",
        "first": "Marti",
        "middle": "D",
        "last": "Lopez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6247 Green Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wigley Flat",
        "locality1": "SA",
        "locality2": "South Australia",
        "country": "AU",
        "postalCode": "5330",
        "geoSpatial": [
            "140.0839",
            "-34.1621"
        ]
    },
    "contact": {
        "email": "mlopez146@kddi.com",
        "phone": "146-465-6801",
        "socMedia": {
            "twitter": "mlopez@twitter.com"
        }
    },
    "login": {
        "username": "mlopez",
        "oauth2": "mlopez@twitter.com",
        "password": "$2y$10$xvVxrB6Fhtqx6iGHIVsKR.O6q8gHX.5WFChfcTLDDe4oX\/vadk0rC"
    },
    "otherContact": {
        "emails": [
            "mlopez146@att.com",
            "mlopez146@nii.com"
        ],
        "phoneNumbers": [
            "146-396-2118",
            "146-764-1769"
        ],
        "socMedias": [
            {
                "skype": "mlopez@skype.com"
            },
            {
                "google": "mlopez@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-04-23"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ERNIDANI6841",
    "name": {
        "title": null,
        "first": "Ernie",
        "middle": null,
        "last": "Daniel",
        "suffix": null
    },
    "address": {
        "streetAddress": "5543 Blue Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Coverty",
        "locality1": "QLD",
        "locality2": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4613",
        "geoSpatial": [
            "151.2929",
            "-26.2365"
        ]
    },
    "contact": {
        "email": "edaniel147@worldnet.com",
        "phone": "147-982-6841",
        "socMedia": []
    },
    "login": {
        "username": "edaniel",
        "oauth2": null,
        "password": "$2y$10$BMl8GMH0D82INoO4uIBFKOC7RWlNWd8MI2m42WJtQQ8D8Kg\/irzXK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-12-23"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ERLEKELL6953",
    "name": {
        "title": "Ms",
        "first": "Erlene",
        "middle": "H",
        "last": "Kelly",
        "suffix": null
    },
    "address": {
        "streetAddress": "1897 Short Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Suwasara Mandi",
        "locality1": "Sitamau",
        "locality2": "Mandsaur",
        "country": "IN",
        "postalCode": "458888",
        "geoSpatial": [
            "75.5507",
            "23.3647"
        ]
    },
    "contact": {
        "email": "ekelly148@apicnet.com",
        "phone": "148-271-6953",
        "socMedia": {
            "facebook": "ekelly@facebook.com"
        }
    },
    "login": {
        "username": "ekelly",
        "oauth2": "ekelly@facebook.com",
        "password": "$2y$10$z38cOR8sO94BIlKXnctnj.yAiEPZ3BDCvWrhVMamOz3ghc\/X6s5A2"
    },
    "otherContact": {
        "emails": [
            "ekelly148@rogers.com",
            "ekelly148@cci.com"
        ],
        "phoneNumbers": [
            "148-820-4554",
            "148-952-5324"
        ],
        "socMedias": [
            {
                "line": "ekelly@line.com"
            },
            {
                "line": "ekelly@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-05-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SCOTSHEL9251",
    "name": {
        "title": "Mr",
        "first": "Scott",
        "middle": "O",
        "last": "Shelton",
        "suffix": null
    },
    "address": {
        "streetAddress": "7477 Little Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Fran\u00e7ois",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97118",
        "geoSpatial": [
            "-61.2741",
            "16.2526"
        ]
    },
    "contact": {
        "email": "sshelton149@ooredoo.com",
        "phone": "149-086-9251",
        "socMedia": {
            "line": "sshelton@line.com"
        }
    },
    "login": {
        "username": "sshelton",
        "oauth2": "sshelton@line.com",
        "password": "$2y$10$p7FqDmv1ZUdILmE0euZ0sesU04Q1YtlYPjm5TF75lA9E5ZJm7eDTy"
    },
    "otherContact": {
        "emails": [
            "sshelton149@lguplus.com",
            "sshelton149@eunet.com",
            "sshelton149@econnect.com"
        ],
        "phoneNumbers": [
            "149-024-8474",
            "149-114-9820",
            "149-963-6730"
        ],
        "socMedias": [
            {
                "google": "sshelton@google.com"
            },
            {
                "line": "sshelton@line.com"
            },
            {
                "twitter": "sshelton@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-06-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JORGMUNO7821",
    "name": {
        "title": null,
        "first": "Jorge",
        "middle": null,
        "last": "Munoz",
        "suffix": null
    },
    "address": {
        "streetAddress": "3232 Red Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "B9",
        "city": "Ranayara",
        "locality1": "Malhargarh",
        "locality2": "Mandsaur",
        "country": "IN",
        "postalCode": "458556",
        "geoSpatial": [
            "75.583",
            "24.2955"
        ]
    },
    "contact": {
        "email": "jmunoz150@centurylink.com",
        "phone": "150-335-7821",
        "socMedia": []
    },
    "login": {
        "username": "jmunoz",
        "oauth2": null,
        "password": "$2y$10$40JTzQPed7eb80IZqtCx7uk8awXr\/UNzkKCS7HFC.ZB9oINM98qqO"
    },
    "otherContact": {
        "emails": [
            "jmunoz150@ptcl.com",
            "jmunoz150@relcom.com",
            "jmunoz150@kpn.com"
        ],
        "phoneNumbers": [
            "150-278-2122",
            "150-876-7378",
            "150-719-3483"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-07-22"
    },
    "partner": "Y",
    "businessName": "Illuminati Holdings Ltd"
});
db.users.insertOne(
{
    "userKey": "LOREBARR7994",
    "name": {
        "title": "Ms",
        "first": "Lore",
        "middle": "T",
        "last": "Barrett",
        "suffix": null
    },
    "address": {
        "streetAddress": "5891 Short Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rotterdam",
        "locality1": "Rotterdam",
        "locality2": "Rotterdam",
        "country": "NL",
        "postalCode": "3016",
        "geoSpatial": [
            "4.4781",
            "51.909"
        ]
    },
    "contact": {
        "email": "lbarrett151@ptcl.com",
        "phone": "151-169-7994",
        "socMedia": {
            "linkedin": "lbarrett@linkedin.com"
        }
    },
    "login": {
        "username": "lbarrett",
        "oauth2": "lbarrett@linkedin.com",
        "password": "$2y$10$hXMvsvYkbD4bC9lf5hUy0ey6IYICEgqWqXO\/bdYzjItT6kNNMj3\/y"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-02-25"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GARYPINE0672",
    "name": {
        "title": "Mr",
        "first": "Gary",
        "middle": "C",
        "last": "Pineda",
        "suffix": null
    },
    "address": {
        "streetAddress": "7533 Red Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Denver",
        "locality1": "CO",
        "locality2": "Denver",
        "country": "US",
        "postalCode": "80263",
        "geoSpatial": [
            "-104.9847",
            "39.7392"
        ]
    },
    "contact": {
        "email": "gpineda152@telus.com",
        "phone": "152-637-0672",
        "socMedia": {
            "skype": "gpineda@skype.com"
        }
    },
    "login": {
        "username": "gpineda",
        "oauth2": "gpineda@skype.com",
        "password": "$2y$10$jkPXJSDnYL2.vMXXq6J85.udtXiwmBBs29.8\/GqjKI3AfFBJwyo\/K"
    },
    "otherContact": {
        "emails": [
            "gpineda152@mtn.com",
            "gpineda152@etisalat.com",
            "gpineda152@seednet.com"
        ],
        "phoneNumbers": [
            "152-812-6360",
            "152-840-3975",
            "152-203-9028"
        ],
        "socMedias": [
            {
                "twitter": "gpineda@twitter.com"
            },
            {
                "line": "gpineda@line.com"
            },
            {
                "linkedin": "gpineda@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-03-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SAMUDELG5954",
    "name": {
        "title": null,
        "first": "Samuel",
        "middle": null,
        "last": "Delgado",
        "suffix": null
    },
    "address": {
        "streetAddress": "3204 Red Gully Way",
        "buildingName": null,
        "floor": 1,
        "roomAptCondoFlat": null,
        "city": "San Juan Del R\u00edo",
        "locality1": "OAX",
        "locality2": "San Mart\u00edn Peras",
        "country": "MX",
        "postalCode": "69780",
        "geoSpatial": [
            "-98.2631",
            "17.4039"
        ]
    },
    "contact": {
        "email": "sdelgado153@ntt.com",
        "phone": "153-477-5954",
        "socMedia": []
    },
    "login": {
        "username": "sdelgado",
        "oauth2": null,
        "password": "$2y$10$UipfxyTKdaDgOA4yV4imvOG4lKl\/\/zhw2YtQp\/l.I93DaVGnGmeEC"
    },
    "otherContact": {
        "emails": [
            "sdelgado153@telstra.com"
        ],
        "phoneNumbers": [
            "153-936-2202"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-06-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CURTCERV3033",
    "name": {
        "title": "Mr",
        "first": "Curtis",
        "middle": "J",
        "last": "Cervantes",
        "suffix": null
    },
    "address": {
        "streetAddress": "2282 Short Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Niamatpur",
        "locality1": "Englishbazar",
        "locality2": "Malda",
        "country": "IN",
        "postalCode": "732208",
        "geoSpatial": [
            "88.0045",
            "25.0362"
        ]
    },
    "contact": {
        "email": "ccervant154@kddi.com",
        "phone": "154-460-3033",
        "socMedia": {
            "line": "ccervant@line.com"
        }
    },
    "login": {
        "username": "ccervant",
        "oauth2": "ccervant@line.com",
        "password": "$2y$10$Ak5vO6E2AV5TqFQwyWWyROyNWRJetYN.fDlQpGEcyqd\/260pkihqO"
    },
    "otherContact": {
        "emails": [
            "ccervant154@bt.com",
            "ccervant154@eunet.com",
            "ccervant154@tm.com"
        ],
        "phoneNumbers": [
            "154-645-9704",
            "154-663-1200",
            "154-798-6752"
        ],
        "socMedias": [
            {
                "twitter": "ccervant@twitter.com"
            },
            {
                "linkedin": "ccervant@linkedin.com"
            },
            {
                "facebook": "ccervant@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-04-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GENOMYER4931",
    "name": {
        "title": "Ms",
        "first": "Genoveva",
        "middle": "E",
        "last": "Myers",
        "suffix": null
    },
    "address": {
        "streetAddress": "5035 Little Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ledce",
        "locality1": "Mlad\u00e1 Boleslav",
        "locality2": "Mlad\u00e1 Boleslav",
        "country": "CZ",
        "postalCode": "294 47",
        "geoSpatial": [
            "15.0833",
            "50.35"
        ]
    },
    "contact": {
        "email": "gmyers155@megafon.com",
        "phone": "155-587-4931",
        "socMedia": {
            "linkedin": "gmyers@linkedin.com"
        }
    },
    "login": {
        "username": "gmyers",
        "oauth2": "gmyers@linkedin.com",
        "password": "$2y$10$OWPkbE7NyrmDBYS\/uK95HOlHf3kujWfWv2XpD9r8jW5umN\/H3z.Ti"
    },
    "otherContact": {
        "emails": [
            "gmyers155@ptcl.com"
        ],
        "phoneNumbers": [
            "155-462-6767"
        ],
        "socMedias": [
            {
                "google": "gmyers@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-11-01"
    },
    "partner": "Y",
    "businessName": "Nonstop Partners Company"
});
db.users.insertOne(
{
    "userKey": "ODELROSA8380",
    "name": {
        "title": null,
        "first": "Odell",
        "middle": null,
        "last": "Rosario",
        "suffix": null
    },
    "address": {
        "streetAddress": "8721 Blue Creek Street",
        "buildingName": "Building 11",
        "floor": null,
        "roomAptCondoFlat": "B7",
        "city": "Sri Vakkaramari",
        "locality1": "Kattumannarkoil",
        "locality2": "Cuddalore",
        "country": "IN",
        "postalCode": "608703",
        "geoSpatial": [
            "79.7396",
            "12.1986"
        ]
    },
    "contact": {
        "email": "orosario156@telefonica.com",
        "phone": "156-718-8380",
        "socMedia": []
    },
    "login": {
        "username": "orosario",
        "oauth2": null,
        "password": "$2y$10$HDIYc4oESh\/Uj.E7DJg9ju8SqqClK8.4G15UA0Pf1d16XB71WdY9a"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-09-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "QUINARCH4532",
    "name": {
        "title": "Ms",
        "first": "Quinn",
        "middle": "H",
        "last": "Archer",
        "suffix": null
    },
    "address": {
        "streetAddress": "8865 Red Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sacav\u00e9m",
        "locality1": "Sacav\u00e9m",
        "locality2": "Loures",
        "country": "PT",
        "postalCode": "2685-120",
        "geoSpatial": [
            "-9.108",
            "38.792"
        ]
    },
    "contact": {
        "email": "qarcher157@megafon.com",
        "phone": "157-248-4532",
        "socMedia": {
            "twitter": "qarcher@twitter.com"
        }
    },
    "login": {
        "username": "qarcher",
        "oauth2": "qarcher@twitter.com",
        "password": "$2y$10$XCf3YJ3OBjEPXMZCQ3tdQeorfjaAZuC7Q.QejYxbFQzkYJF0oIHEW"
    },
    "otherContact": {
        "emails": [
            "qarcher157@lguplus.com",
            "qarcher157@bce.com",
            "qarcher157@belgacom.com"
        ],
        "phoneNumbers": [
            "157-447-7092",
            "157-790-8739",
            "157-999-4443"
        ],
        "socMedias": [
            {
                "facebook": "qarcher@facebook.com"
            },
            {
                "facebook": "qarcher@facebook.com"
            },
            {
                "facebook": "qarcher@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-08-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "THERRIOS2437",
    "name": {
        "title": "Ms",
        "first": "Therese",
        "middle": "J",
        "last": "Rios",
        "suffix": null
    },
    "address": {
        "streetAddress": "9021 Long Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "West Woombye",
        "locality1": "QLD",
        "locality2": "Queensland",
        "country": "AU",
        "postalCode": "4559",
        "geoSpatial": [
            "152.9256",
            "-26.6664"
        ]
    },
    "contact": {
        "email": "trios158@eunet.com",
        "phone": "158-930-2437",
        "socMedia": {
            "facebook": "trios@facebook.com"
        }
    },
    "login": {
        "username": "trios",
        "oauth2": "trios@facebook.com",
        "password": "$2y$10$lhczE5VIrM\/PhNBg64vpF.EtvRdsIUap769HBE8TmHMIcnmy3IeQe"
    },
    "otherContact": {
        "emails": [
            "trios158@sktelecom.com",
            "trios158@ktc.com",
            "trios158@kpn.com"
        ],
        "phoneNumbers": [
            "158-458-1504",
            "158-739-6572",
            "158-303-2637"
        ],
        "socMedias": [
            {
                "facebook": "trios@facebook.com"
            },
            {
                "skype": "trios@skype.com"
            },
            {
                "line": "trios@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-10-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MATTCRAW7175",
    "name": {
        "title": null,
        "first": "Matthew",
        "middle": null,
        "last": "Crawford",
        "suffix": null
    },
    "address": {
        "streetAddress": "3678 Short Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mamoudzou",
        "locality1": "Mamoudzou",
        "locality2": "Mamoudzou",
        "country": "YT",
        "postalCode": "97600",
        "geoSpatial": [
            "45.2288",
            "-12.7823"
        ]
    },
    "contact": {
        "email": "mcrawfor159@telia.com",
        "phone": "159-877-7175",
        "socMedia": []
    },
    "login": {
        "username": "mcrawfor",
        "oauth2": null,
        "password": "$2y$10$ZsgNjOdR2dSlS3kCLu6M4eYmTvN.6M6XnRaE0BVuu1PbEt9fFkQBG"
    },
    "otherContact": {
        "emails": [
            "mcrawfor159@centurylink.com",
            "mcrawfor159@vodafone.com",
            "mcrawfor159@telecomitalia.com"
        ],
        "phoneNumbers": [
            "159-985-5071",
            "159-535-6870",
            "159-755-9245"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-11-24"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CLAYREEV4591",
    "name": {
        "title": "Ms",
        "first": "Clay",
        "middle": "Z",
        "last": "Reeves",
        "suffix": null
    },
    "address": {
        "streetAddress": "2766 Winding Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vimont",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "H7M",
        "geoSpatial": [
            "-73.7159",
            "45.5984"
        ]
    },
    "contact": {
        "email": "creeves160@bt.com",
        "phone": "160-059-4591",
        "socMedia": {
            "google": "creeves@google.com"
        }
    },
    "login": {
        "username": "creeves",
        "oauth2": "creeves@google.com",
        "password": "$2y$10$Wls.AZQZYL9.8jNKyben6e9Ek4d1jOvGqKx2ecTxAIWZOsxOXKuXm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1957-10-02"
    },
    "partner": "Y",
    "businessName": "Illuminati Industries LLC"
});
db.users.insertOne(
{
    "userKey": "DONNESPA7340",
    "name": {
        "title": "Ms",
        "first": "Donna",
        "middle": "O",
        "last": "Esparza",
        "suffix": null
    },
    "address": {
        "streetAddress": "4627 Little Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u043a\u0430",
        "locality1": "Romenskyi",
        "locality2": "Romenskyi",
        "country": "UA",
        "postalCode": "42046",
        "geoSpatial": [
            "33.4276",
            "50.8033"
        ]
    },
    "contact": {
        "email": "desparza161@rogers.com",
        "phone": "161-568-7340",
        "socMedia": {
            "facebook": "desparza@facebook.com"
        }
    },
    "login": {
        "username": "desparza",
        "oauth2": "desparza@facebook.com",
        "password": "$2y$10$Ic0y55mfp90A762IaW7vxeiQIiysPnlzfOMtLIG97JJZFsYw1tQXC"
    },
    "otherContact": {
        "emails": [
            "desparza161@lguplus.com"
        ],
        "phoneNumbers": [
            "161-652-5509"
        ],
        "socMedias": [
            {
                "skype": "desparza@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-08-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHAICAMA3097",
    "name": {
        "title": null,
        "first": "Shaina",
        "middle": null,
        "last": "Camacho",
        "suffix": null
    },
    "address": {
        "streetAddress": "2962 Short Gulch Road",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": "11",
        "city": "Western Alberta (Jasper)",
        "locality1": "AB",
        "locality2": "Alberta",
        "country": "CA",
        "postalCode": "T0E",
        "geoSpatial": [
            "-115.0948",
            "53.6758"
        ]
    },
    "contact": {
        "email": "scamacho162@mtn.com",
        "phone": "162-782-3097",
        "socMedia": []
    },
    "login": {
        "username": "scamacho",
        "oauth2": null,
        "password": "$2y$10$DB.dsFPRWyKljmJ\/jKAz8.7Fr6ZPuw\/Zjf8TfM8xuPNZPqKgQfurS"
    },
    "otherContact": {
        "emails": [
            "scamacho162@millicom.com"
        ],
        "phoneNumbers": [
            "162-669-6291"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-02-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MAXICANT3868",
    "name": {
        "title": "Mr",
        "first": "Maximo",
        "middle": "K",
        "last": "Cantu",
        "suffix": null
    },
    "address": {
        "streetAddress": "6869 Red Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0418\u0437\u0432\u043e\u0440 \u043c\u0430\u0445\u0430\u043b\u0430 \/ Izvor makhala",
        "locality1": "VID",
        "locality2": "\u041a\u0443\u043b\u0430 \/ Kula",
        "country": "BG",
        "postalCode": "3821",
        "geoSpatial": [
            "22.4194",
            "43.8689"
        ]
    },
    "contact": {
        "email": "mcantu163@ooredoo.com",
        "phone": "163-225-3868",
        "socMedia": {
            "facebook": "mcantu@facebook.com"
        }
    },
    "login": {
        "username": "mcantu",
        "oauth2": "mcantu@facebook.com",
        "password": "$2y$10$3ylbcx0seuIIWzq8eJo0q.xJiW6x4Kk4iKjJ7rQpX1yeAHJGOnuCu"
    },
    "otherContact": {
        "emails": [
            "mcantu163@swisscom.com"
        ],
        "phoneNumbers": [
            "163-825-7756"
        ],
        "socMedias": [
            {
                "skype": "mcantu@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-02-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "HUGOHOUS6511",
    "name": {
        "title": "Mr",
        "first": "Hugo",
        "middle": "W",
        "last": "Houston",
        "suffix": null
    },
    "address": {
        "streetAddress": "1659 Winding Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Karanjgaon",
        "locality1": "Dapoli",
        "locality2": "Ratnagiri",
        "country": "IN",
        "postalCode": "415720",
        "geoSpatial": [
            "74.0745",
            "20.0159"
        ]
    },
    "contact": {
        "email": "hhouston164@etisalat.com",
        "phone": "164-482-6511",
        "socMedia": {
            "facebook": "hhouston@facebook.com"
        }
    },
    "login": {
        "username": "hhouston",
        "oauth2": "hhouston@facebook.com",
        "password": "$2y$10$zlo2sUWj7fK639ZlwBdt8.1TV3rVE0rqzQX6ROVvr9\/XbbP8fusqu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-06-13"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ARTHTUCK5662",
    "name": {
        "title": "Mr",
        "first": "Arthur",
        "middle": "O",
        "last": "Tucker",
        "suffix": null
    },
    "address": {
        "streetAddress": "9179 Green Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Broken Hill West",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2880",
        "geoSpatial": [
            "148.6724",
            "-32.5166"
        ]
    },
    "contact": {
        "email": "atucker166@belgacom.com",
        "phone": "166-179-5662",
        "socMedia": {
            "facebook": "atucker@facebook.com"
        }
    },
    "login": {
        "username": "atucker",
        "oauth2": "atucker@facebook.com",
        "password": "$2y$10$aEVrZ3B4viWvRHYsRfxCMeQUiv.eOhaOmhAjAliD9HIpZksTPEIeW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-04-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ANEVAN1752",
    "name": {
        "title": "Ms",
        "first": "An",
        "middle": "W",
        "last": "Evans",
        "suffix": null
    },
    "address": {
        "streetAddress": "7371 Little Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Glyvrar",
        "locality1": null,
        "locality2": null,
        "country": "FO",
        "postalCode": "625",
        "geoSpatial": [
            "-6.7167",
            "62.1333"
        ]
    },
    "contact": {
        "email": "aevans167@tm.com",
        "phone": "167-656-1752",
        "socMedia": {
            "google": "aevans@google.com"
        }
    },
    "login": {
        "username": "aevans",
        "oauth2": "aevans@google.com",
        "password": "$2y$10$MnIqmY.G8LRvXwdsnHhNWucKEJ38kJ7Yy0VkAAi3tXjZaclMENcbC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-12-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALBEVELE3224",
    "name": {
        "title": null,
        "first": "Albert",
        "middle": null,
        "last": "Velez",
        "suffix": null
    },
    "address": {
        "streetAddress": "2987 Big Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "87",
        "city": "Winnipeg (St. Vital North)",
        "locality1": "MB",
        "locality2": "Winnipeg",
        "country": "CA",
        "postalCode": "R2M",
        "geoSpatial": [
            "-97.1147",
            "49.8396"
        ]
    },
    "contact": {
        "email": "avelez168@singtel.com",
        "phone": "168-411-3224",
        "socMedia": []
    },
    "login": {
        "username": "avelez",
        "oauth2": null,
        "password": "$2y$10$8ZkyHlZ3W7Pt82yjI\/.QtOV2913V1xu\/wPGp9zOj\/3Nmrq0d2lk3u"
    },
    "otherContact": {
        "emails": [
            "avelez168@telefonica.com",
            "avelez168@softbank.com",
            "avelez168@vodafone.com"
        ],
        "phoneNumbers": [
            "168-696-7359",
            "168-892-0940",
            "168-929-1569"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-09-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JOHNBARR9419",
    "name": {
        "title": "Mr",
        "first": "Johnson",
        "middle": "N",
        "last": "Barrera",
        "suffix": null
    },
    "address": {
        "streetAddress": "4854 Long Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Butterley",
        "locality1": "England",
        "locality2": "Derbyshire",
        "country": "GB",
        "postalCode": "DE5",
        "geoSpatial": [
            "-1.4005",
            "53.0619"
        ]
    },
    "contact": {
        "email": "jbarrera170@apicnet.com",
        "phone": "170-667-9419",
        "socMedia": {
            "twitter": "jbarrera@twitter.com"
        }
    },
    "login": {
        "username": "jbarrera",
        "oauth2": "jbarrera@twitter.com",
        "password": "$2y$10$u6ef0iWuk.hHRch7L9yZSOZIL6HfqTRAV8vg9hGPXeRcm2ilx3MEe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-01-14"
    },
    "partner": "Y",
    "businessName": "Bizarro Associates Ltd"
});
db.users.insertOne(
{
    "userKey": "BENTWALL6351",
    "name": {
        "title": null,
        "first": "Benton",
        "middle": null,
        "last": "Walls",
        "suffix": null
    },
    "address": {
        "streetAddress": "9565 Green Bend Drive",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": null,
        "city": "\u0411\u0430\u0431\u044f\u043a\u043e\u0432\u043e",
        "locality1": "\u041d\u041e\u0412\u041e\u0423\u0421\u041c\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality2": "\u041d\u041e\u0412\u041e\u0423\u0421\u041c\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "396313",
        "geoSpatial": [
            "39.3721",
            "51.6848"
        ]
    },
    "contact": {
        "email": "bwalls171@ais.com",
        "phone": "171-889-6351",
        "socMedia": []
    },
    "login": {
        "username": "bwalls",
        "oauth2": null,
        "password": "$2y$10$gxz7QJt5yTYAhrmZdeWJv.UoX\/\/3fBncL\/CAUF36HrtvaWZyxZslq"
    },
    "otherContact": {
        "emails": [
            "bwalls171@cubenet.com"
        ],
        "phoneNumbers": [
            "171-320-4520"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-05-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DAMITURN7387",
    "name": {
        "title": "Mr",
        "first": "Damion",
        "middle": "C",
        "last": "Turner",
        "suffix": null
    },
    "address": {
        "streetAddress": "6261 Big Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Strathmore",
        "locality1": "AB",
        "locality2": "Alberta",
        "country": "CA",
        "postalCode": "T1P",
        "geoSpatial": [
            "-113.3852",
            "51.0501"
        ]
    },
    "contact": {
        "email": "dturner172@turkcell.com",
        "phone": "172-949-7387",
        "socMedia": {
            "facebook": "dturner@facebook.com"
        }
    },
    "login": {
        "username": "dturner",
        "oauth2": "dturner@facebook.com",
        "password": "$2y$10$hR9YmgQwlv8ZTHGaIgF4\/e3\/tTdorcTjyk68tH\/RaOQIvW1RTqihy"
    },
    "otherContact": {
        "emails": [
            "dturner172@att.com"
        ],
        "phoneNumbers": [
            "172-649-0779"
        ],
        "socMedias": [
            {
                "google": "dturner@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-01-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DEIDBRAV6372",
    "name": {
        "title": "Ms",
        "first": "Deidra",
        "middle": "C",
        "last": "Bravo",
        "suffix": null
    },
    "address": {
        "streetAddress": "2936 Winding Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Pierre",
        "locality1": "RE",
        "locality2": "R\u00e9union",
        "country": "RE",
        "postalCode": "97853 CEDEX",
        "geoSpatial": [
            "55.4781",
            "-21.3393"
        ]
    },
    "contact": {
        "email": "dbravo173@telecom.com",
        "phone": "173-087-6372",
        "socMedia": {
            "line": "dbravo@line.com"
        }
    },
    "login": {
        "username": "dbravo",
        "oauth2": "dbravo@line.com",
        "password": "$2y$10$JkS7cWs\/Clh8NnC7cz5G1eAIKwShH5L76Vcu1s63SovC2h\/7VuYva"
    },
    "otherContact": {
        "emails": [
            "dbravo173@ktc.com",
            "dbravo173@vivendi.com"
        ],
        "phoneNumbers": [
            "173-317-8458",
            "173-100-1624"
        ],
        "socMedias": [
            {
                "line": "dbravo@line.com"
            },
            {
                "twitter": "dbravo@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-02-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ROSAERIC2228",
    "name": {
        "title": null,
        "first": "Rosa",
        "middle": null,
        "last": "Erickson",
        "suffix": null
    },
    "address": {
        "streetAddress": "298 Short Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "77",
        "city": "Lebanon",
        "locality1": "PA",
        "locality2": "Lebanon",
        "country": "US",
        "postalCode": "17046",
        "geoSpatial": [
            "-76.4368",
            "40.3812"
        ]
    },
    "contact": {
        "email": "rerickso174@jio.com",
        "phone": "174-917-2228",
        "socMedia": []
    },
    "login": {
        "username": "rerickso",
        "oauth2": null,
        "password": "$2y$10$SA2FNQUnQU\/ZbHJ12KdjrO1oKAzEwJcrN5SldkwDqm7T\/mP9oJJkq"
    },
    "otherContact": {
        "emails": [
            "rerickso174@vivendi.com",
            "rerickso174@nordnet.com",
            "rerickso174@swisscom.com"
        ],
        "phoneNumbers": [
            "174-279-8941",
            "174-638-2537",
            "174-384-5748"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-03-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CLEOWILE4501",
    "name": {
        "title": "Ms",
        "first": "Cleotilde",
        "middle": "Q",
        "last": "Wiley",
        "suffix": null
    },
    "address": {
        "streetAddress": "5827 Big Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Szeged",
        "locality1": "CS",
        "locality2": "Csongr\u00e1d",
        "country": "HU",
        "postalCode": "6757",
        "geoSpatial": [
            "20.1667",
            "46.1667"
        ]
    },
    "contact": {
        "email": "cwiley175@mtn.com",
        "phone": "175-929-4501",
        "socMedia": {
            "facebook": "cwiley@facebook.com"
        }
    },
    "login": {
        "username": "cwiley",
        "oauth2": "cwiley@facebook.com",
        "password": "$2y$10$7vNV0I8ZSBSOhYZeILH5IuvUywZTcyFtAaHCbjvyDdIv5FRp9dAvu"
    },
    "otherContact": {
        "emails": [
            "cwiley175@algonet.com",
            "cwiley175@telefonica.com",
            "cwiley175@daxnet.com"
        ],
        "phoneNumbers": [
            "175-439-6140",
            "175-038-9153",
            "175-301-7822"
        ],
        "socMedias": [
            {
                "skype": "cwiley@skype.com"
            },
            {
                "skype": "cwiley@skype.com"
            },
            {
                "linkedin": "cwiley@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-12-22"
    },
    "partner": "Y",
    "businessName": "Leisure Trust"
});
db.users.insertOne(
{
    "userKey": "FRIDMORE2483",
    "name": {
        "title": "Ms",
        "first": "Frida",
        "middle": "P",
        "last": "Moreno",
        "suffix": null
    },
    "address": {
        "streetAddress": "649 Big Stream Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gilroy",
        "locality1": "CA",
        "locality2": "Santa Clara",
        "country": "US",
        "postalCode": "95020",
        "geoSpatial": [
            "-121.5773",
            "37.0139"
        ]
    },
    "contact": {
        "email": "fmoreno176@algonet.com",
        "phone": "176-525-2483",
        "socMedia": {
            "line": "fmoreno@line.com"
        }
    },
    "login": {
        "username": "fmoreno",
        "oauth2": "fmoreno@line.com",
        "password": "$2y$10$KWeIS\/506fLWZiK44Z8NAuivVQ7Ltjbw5Y6rYoWlxJXpWRiONa.na"
    },
    "otherContact": {
        "emails": [
            "fmoreno176@glasnet.com",
            "fmoreno176@telecomitalia.com",
            "fmoreno176@ktc.com"
        ],
        "phoneNumbers": [
            "176-610-4421",
            "176-446-9809",
            "176-003-5583"
        ],
        "socMedias": [
            {
                "google": "fmoreno@google.com"
            },
            {
                "skype": "fmoreno@skype.com"
            },
            {
                "linkedin": "fmoreno@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-07-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CARMTORR0457",
    "name": {
        "title": "Mr",
        "first": "Carmelo",
        "middle": "H",
        "last": "Torres",
        "suffix": null
    },
    "address": {
        "streetAddress": "3988 Long Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rangewood",
        "locality1": "QLD",
        "locality2": "Queensland",
        "country": "AU",
        "postalCode": "4817",
        "geoSpatial": [
            "146.6388",
            "-19.3114"
        ]
    },
    "contact": {
        "email": "ctorres178@etisalat.com",
        "phone": "178-871-0457",
        "socMedia": {
            "skype": "ctorres@skype.com"
        }
    },
    "login": {
        "username": "ctorres",
        "oauth2": "ctorres@skype.com",
        "password": "$2y$10$khCjBVSMn3280630F7YuGehME4FtTcNx5VGaPsk50JEaYigDQD\/Ti"
    },
    "otherContact": {
        "emails": [
            "ctorres178@telus.com",
            "ctorres178@unicom.com",
            "ctorres178@orstom.com"
        ],
        "phoneNumbers": [
            "178-697-2338",
            "178-085-6227",
            "178-329-3870"
        ],
        "socMedias": [
            {
                "line": "ctorres@line.com"
            },
            {
                "facebook": "ctorres@facebook.com"
            },
            {
                "skype": "ctorres@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-10-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ELISFARL5207",
    "name": {
        "title": "Ms",
        "first": "Elisa",
        "middle": "B",
        "last": "Farley",
        "suffix": null
    },
    "address": {
        "streetAddress": "9869 Long Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Panmure",
        "locality1": "E7",
        "locality2": "Auckland",
        "country": "NZ",
        "postalCode": "1545",
        "geoSpatial": [
            "174.8667",
            "-36.8833"
        ]
    },
    "contact": {
        "email": "efarley179@cci.com",
        "phone": "179-607-5207",
        "socMedia": {
            "skype": "efarley@skype.com"
        }
    },
    "login": {
        "username": "efarley",
        "oauth2": "efarley@skype.com",
        "password": "$2y$10$hbEgqZpFPdBBp1WJbrx5cer1zhflJ0TYzBxqp1hFvwHc5r4qu2ASq"
    },
    "otherContact": {
        "emails": [
            "efarley179@verizon.com",
            "efarley179@orange.com"
        ],
        "phoneNumbers": [
            "179-018-9267",
            "179-237-4546"
        ],
        "socMedias": [
            {
                "line": "efarley@line.com"
            },
            {
                "twitter": "efarley@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-05-08"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MALECHRI1166",
    "name": {
        "title": null,
        "first": "Malena",
        "middle": null,
        "last": "Christensen",
        "suffix": null
    },
    "address": {
        "streetAddress": "3565 Blue Tree Circle",
        "buildingName": null,
        "floor": 2,
        "roomAptCondoFlat": "1E",
        "city": "Southwood",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "BA6",
        "geoSpatial": [
            "-2.7161",
            "51.1418"
        ]
    },
    "contact": {
        "email": "mchriste180@telekom.com",
        "phone": "180-688-1166",
        "socMedia": []
    },
    "login": {
        "username": "mchriste",
        "oauth2": null,
        "password": "$2y$10$CnoeboDvgWNbZKZAx2bIHOQRjajXOQTMuXi9zvrqyxRBkQ18WIA2C"
    },
    "otherContact": {
        "emails": [
            "mchriste180@kddi.com",
            "mchriste180@sprint.com"
        ],
        "phoneNumbers": [
            "180-339-5572",
            "180-848-7815"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-01-11"
    },
    "partner": "Y",
    "businessName": "Nonstop Business Company"
});
db.users.insertOne(
{
    "userKey": "CORDUNDE9174",
    "name": {
        "title": "Mr",
        "first": "Cordell",
        "middle": "V",
        "last": "Underwood",
        "suffix": null
    },
    "address": {
        "streetAddress": "9929 Red Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Helier",
        "locality1": "Jersey Channel Islands",
        "locality2": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE2",
        "geoSpatial": [
            "-2.1333",
            "49.2"
        ]
    },
    "contact": {
        "email": "cunderwo181@telecom.com",
        "phone": "181-223-9174",
        "socMedia": {
            "facebook": "cunderwo@facebook.com"
        }
    },
    "login": {
        "username": "cunderwo",
        "oauth2": "cunderwo@facebook.com",
        "password": "$2y$10$nlQZQ9oaii\/5Dqxg4ohC5O3UKWejTMBuz\/7hlMlni9FsTv9qC8tvW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-06-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHADPARK3267",
    "name": {
        "title": "Mr",
        "first": "Chadwick",
        "middle": "D",
        "last": "Parks",
        "suffix": null
    },
    "address": {
        "streetAddress": "5001 Blue Gully Boulevard",
        "buildingName": "Building CE",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mow Cop",
        "locality1": "England",
        "locality2": "Staffordshire",
        "country": "GB",
        "postalCode": "ST7",
        "geoSpatial": [
            "-2.2166",
            "53.1112"
        ]
    },
    "contact": {
        "email": "cparks182@telecom.com",
        "phone": "182-934-3267",
        "socMedia": {
            "line": "cparks@line.com"
        }
    },
    "login": {
        "username": "cparks",
        "oauth2": "cparks@line.com",
        "password": "$2y$10$gVEt7\/gl1HrL0GUXyzmJ..YYzhQIHr1w4u\/xARswypifCd\/4HQ5Je"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-01-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHAYTANG0287",
    "name": {
        "title": null,
        "first": "Shayne",
        "middle": null,
        "last": "Tang",
        "suffix": null
    },
    "address": {
        "streetAddress": "6717 Green Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Andorra la Vella",
        "locality1": null,
        "locality2": null,
        "country": "AD",
        "postalCode": "AD500",
        "geoSpatial": [
            "1.5",
            "42.5"
        ]
    },
    "contact": {
        "email": "stang183@telstra.com",
        "phone": "183-116-0287",
        "socMedia": []
    },
    "login": {
        "username": "stang",
        "oauth2": null,
        "password": "$2y$10$\/ziu3poXQVcwEN85E0Q0Yucwe4Z0W3bTraoKJgdBYksVRlwV35IoS"
    },
    "otherContact": {
        "emails": [
            "stang183@bce.com",
            "stang183@access.com",
            "stang183@glasnet.com"
        ],
        "phoneNumbers": [
            "183-499-3367",
            "183-630-2838",
            "183-405-5992"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-11-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CORYSTUA6817",
    "name": {
        "title": "Mr",
        "first": "Cory",
        "middle": "P",
        "last": "Stuart",
        "suffix": null
    },
    "address": {
        "streetAddress": "8953 Green Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nice",
        "locality1": "CA",
        "locality2": "Lake",
        "country": "US",
        "postalCode": "95464",
        "geoSpatial": [
            "-122.8315",
            "39.1194"
        ]
    },
    "contact": {
        "email": "cstuart184@bt.com",
        "phone": "184-842-6817",
        "socMedia": {
            "google": "cstuart@google.com"
        }
    },
    "login": {
        "username": "cstuart",
        "oauth2": "cstuart@google.com",
        "password": "$2y$10$7ayyKN\/oK\/sPKNtXfabN2OXZ4ml9BgoepHccB.Lu8whpffddZkReu"
    },
    "otherContact": {
        "emails": [
            "cstuart184@ote.com"
        ],
        "phoneNumbers": [
            "184-765-1294"
        ],
        "socMedias": [
            {
                "google": "cstuart@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-05-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ONIEFRAN7169",
    "name": {
        "title": "Ms",
        "first": "Onie",
        "middle": "P",
        "last": "Franco",
        "suffix": null
    },
    "address": {
        "streetAddress": "9141 Big Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sevilla",
        "locality1": "AN",
        "locality2": "Sevilla",
        "country": "ES",
        "postalCode": "41005",
        "geoSpatial": [
            "-5.9761",
            "37.3824"
        ]
    },
    "contact": {
        "email": "ofranco185@ote.com",
        "phone": "185-140-7169",
        "socMedia": {
            "google": "ofranco@google.com"
        }
    },
    "login": {
        "username": "ofranco",
        "oauth2": "ofranco@google.com",
        "password": "$2y$10$HWtLI\/gyuY0Tgfn.DW2YwuEngkDY2g.sFJ0VUieBZwmS38ifL2v\/q"
    },
    "otherContact": {
        "emails": [
            "ofranco185@kpn.com",
            "ofranco185@rogers.com"
        ],
        "phoneNumbers": [
            "185-295-6072",
            "185-437-2721"
        ],
        "socMedias": [
            {
                "twitter": "ofranco@twitter.com"
            },
            {
                "facebook": "ofranco@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-04-16"
    },
    "partner": "Y",
    "businessName": "Accomodation Holdings"
});
db.users.insertOne(
{
    "userKey": "ROLALE5450",
    "name": {
        "title": null,
        "first": "Rolando",
        "middle": null,
        "last": "Le",
        "suffix": null
    },
    "address": {
        "streetAddress": "918 Short Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "B0",
        "city": "Hadal Uparli",
        "locality1": "Nurpur",
        "locality2": "Kangra",
        "country": "IN",
        "postalCode": "176211",
        "geoSpatial": [
            "75.9072",
            "32.3713"
        ]
    },
    "contact": {
        "email": "rle186@telia.com",
        "phone": "186-067-5450",
        "socMedia": []
    },
    "login": {
        "username": "rle",
        "oauth2": null,
        "password": "$2y$10$V4.9lj16uf6lI\/ZpXZCQMOap\/gf9I2PPQnpvrt2nW84FRX8cgXJAK"
    },
    "otherContact": {
        "emails": [
            "rle186@glasnet.com"
        ],
        "phoneNumbers": [
            "186-807-1066"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-04-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "PERCSOLO0002",
    "name": {
        "title": "Mr",
        "first": "Percy",
        "middle": "T",
        "last": "Solomon",
        "suffix": null
    },
    "address": {
        "streetAddress": "8529 Short Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Desangi",
        "locality1": "Jewargi",
        "locality2": "Gulbarga",
        "country": "IN",
        "postalCode": "585310",
        "geoSpatial": [
            "76.7117",
            "17.077"
        ]
    },
    "contact": {
        "email": "psolomon188@chunghwa.com",
        "phone": "188-330-0002",
        "socMedia": {
            "linkedin": "psolomon@linkedin.com"
        }
    },
    "login": {
        "username": "psolomon",
        "oauth2": "psolomon@linkedin.com",
        "password": "$2y$10$3.cjVOFWbc2uqTK.737xuuIIa2qN4VaesxtT.76X5cerme762BNUW"
    },
    "otherContact": {
        "emails": [
            "psolomon188@glasnet.com"
        ],
        "phoneNumbers": [
            "188-518-7286"
        ],
        "socMedias": [
            {
                "linkedin": "psolomon@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-07-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ROBEAHME4020",
    "name": {
        "title": null,
        "first": "Robert",
        "middle": null,
        "last": "Ahmed",
        "suffix": null
    },
    "address": {
        "streetAddress": "6249 Short Bough Ride",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": null,
        "city": "Bregenzer",
        "locality1": "Sonntag",
        "locality2": "Politischer Bezirk Bludenz",
        "country": "AT",
        "postalCode": "6731",
        "geoSpatial": [
            "9.8995",
            "47.2405"
        ]
    },
    "contact": {
        "email": "rahmed189@apicnet.com",
        "phone": "189-134-4020",
        "socMedia": []
    },
    "login": {
        "username": "rahmed",
        "oauth2": null,
        "password": "$2y$10$uDqKc7DXnlNuYrPWmz2dueyWbHBvgTY5SeJgxQt5UKJnGNj4tV3M."
    },
    "otherContact": {
        "emails": [
            "rahmed189@daxnet.com",
            "rahmed189@greennet.com"
        ],
        "phoneNumbers": [
            "189-777-6574",
            "189-687-2676"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-04-12"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "XOCHLAND3663",
    "name": {
        "title": "Ms",
        "first": "Xochitl",
        "middle": "W",
        "last": "Landry",
        "suffix": null
    },
    "address": {
        "streetAddress": "7473 Short Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Edmonton (Kaskitayo)",
        "locality1": "AB",
        "locality2": "Edmonton",
        "country": "CA",
        "postalCode": "T6J",
        "geoSpatial": [
            "-113.521",
            "53.4564"
        ]
    },
    "contact": {
        "email": "xlandry190@econnect.com",
        "phone": "190-279-3663",
        "socMedia": {
            "skype": "xlandry@skype.com"
        }
    },
    "login": {
        "username": "xlandry",
        "oauth2": "xlandry@skype.com",
        "password": "$2y$10$gF.pGo5Cfp8BRmZSUFjEjuunGNYDC2fMWKRDG686KXoc3tam0IUX2"
    },
    "otherContact": {
        "emails": [
            "xlandry190@singtel.com",
            "xlandry190@belgacom.com",
            "xlandry190@swisscom.com"
        ],
        "phoneNumbers": [
            "190-813-3707",
            "190-777-2423",
            "190-912-8181"
        ],
        "socMedias": [
            {
                "skype": "xlandry@skype.com"
            },
            {
                "line": "xlandry@line.com"
            },
            {
                "twitter": "xlandry@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-12-06"
    },
    "partner": "Y",
    "businessName": "Comfort Business"
});
db.users.insertOne(
{
    "userKey": "MARCPINE8980",
    "name": {
        "title": "Mr",
        "first": "Marcus",
        "middle": "Q",
        "last": "Pineda",
        "suffix": null
    },
    "address": {
        "streetAddress": "7842 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Warwick",
        "locality1": "Warwick Parish",
        "locality2": "Warwick Parish",
        "country": "BM",
        "postalCode": "WK 05",
        "geoSpatial": [
            "-64.8072",
            "32.2658"
        ]
    },
    "contact": {
        "email": "mpineda191@rogers.com",
        "phone": "191-029-8980",
        "socMedia": {
            "google": "mpineda@google.com"
        }
    },
    "login": {
        "username": "mpineda",
        "oauth2": "mpineda@google.com",
        "password": "$2y$10$eBFMEnoHhPeUVpxGlq7ASuV5SiiClKzCuizRN\/3PIvi\/LOV2BdB.K"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-12-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JARRNEWM3298",
    "name": {
        "title": null,
        "first": "Jarrod",
        "middle": null,
        "last": "Newman",
        "suffix": null
    },
    "address": {
        "streetAddress": "1582 Green Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "30",
        "city": "Hucking",
        "locality1": "England",
        "locality2": "Kent",
        "country": "GB",
        "postalCode": "ME17",
        "geoSpatial": [
            "0.637",
            "51.2928"
        ]
    },
    "contact": {
        "email": "jnewman192@att.com",
        "phone": "192-459-3298",
        "socMedia": []
    },
    "login": {
        "username": "jnewman",
        "oauth2": null,
        "password": "$2y$10$DecCQwdzYK4nNYkA44bWrOFx3j9itaSPIqd0Roj5WlZPuddhMPQI."
    },
    "otherContact": {
        "emails": [
            "jnewman192@ntt.com",
            "jnewman192@kddi.com",
            "jnewman192@icom.com"
        ],
        "phoneNumbers": [
            "192-461-5594",
            "192-537-6434",
            "192-855-7446"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-08-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHAUCAMP9609",
    "name": {
        "title": "Ms",
        "first": "Shaunda",
        "middle": "N",
        "last": "Campbell",
        "suffix": null
    },
    "address": {
        "streetAddress": "7914 Short Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gr\u00edmsey",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "611",
        "geoSpatial": [
            "-18.0135",
            "66.5394"
        ]
    },
    "contact": {
        "email": "scampbel193@zain.com",
        "phone": "193-010-9609",
        "socMedia": {
            "line": "scampbel@line.com"
        }
    },
    "login": {
        "username": "scampbel",
        "oauth2": "scampbel@line.com",
        "password": "$2y$10$J78AENfxWiWF3at3sahfQOhqWYt2FdScN5Y5HvBWohtI0KuCpFKrO"
    },
    "otherContact": {
        "emails": [
            "scampbel193@ntt.com"
        ],
        "phoneNumbers": [
            "193-639-3400"
        ],
        "socMedias": [
            {
                "facebook": "scampbel@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-05-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARKBART6263",
    "name": {
        "title": "Mr",
        "first": "Mark",
        "middle": "D",
        "last": "Bartlett",
        "suffix": null
    },
    "address": {
        "streetAddress": "9982 Little Gully Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Castella",
        "locality1": "VIC",
        "locality2": "Victoria",
        "country": "AU",
        "postalCode": "3777",
        "geoSpatial": [
            "145.4333",
            "-37.5167"
        ]
    },
    "contact": {
        "email": "mbartlet194@unicom.com",
        "phone": "194-362-6263",
        "socMedia": {
            "skype": "mbartlet@skype.com"
        }
    },
    "login": {
        "username": "mbartlet",
        "oauth2": "mbartlet@skype.com",
        "password": "$2y$10$m\/X99dZVNjmgMH.7LnNCEehzPXqK3IOKDhnnDr8XEUxv79A\/1qPSe"
    },
    "otherContact": {
        "emails": [
            "mbartlet194@telefonica.com",
            "mbartlet194@sktelecom.com",
            "mbartlet194@uunet.com"
        ],
        "phoneNumbers": [
            "194-975-8930",
            "194-885-8466",
            "194-770-2493"
        ],
        "socMedias": [
            {
                "facebook": "mbartlet@facebook.com"
            },
            {
                "twitter": "mbartlet@twitter.com"
            },
            {
                "google": "mbartlet@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-12-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KYMBCORT2880",
    "name": {
        "title": "Ms",
        "first": "Kymberly",
        "middle": "S",
        "last": "Cortez",
        "suffix": null
    },
    "address": {
        "streetAddress": "190 Green Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Central Alberta (Stettler)",
        "locality1": "AB",
        "locality2": "Alberta",
        "country": "CA",
        "postalCode": "T0C",
        "geoSpatial": [
            "-111.6941",
            "52.1431"
        ]
    },
    "contact": {
        "email": "kcortez196@ptcl.com",
        "phone": "196-143-2880",
        "socMedia": {
            "facebook": "kcortez@facebook.com"
        }
    },
    "login": {
        "username": "kcortez",
        "oauth2": "kcortez@facebook.com",
        "password": "$2y$10$PN4BxDnss2Tj2UGWq8qDf.a6B1ajeajdal7\/j68mG9tfyK2Et4xwK"
    },
    "otherContact": {
        "emails": [
            "kcortez196@netcom.com"
        ],
        "phoneNumbers": [
            "196-364-2117"
        ],
        "socMedias": [
            {
                "line": "kcortez@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-07-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KERMCAMA9304",
    "name": {
        "title": "Mr",
        "first": "Kermit",
        "middle": "J",
        "last": "Camacho",
        "suffix": null
    },
    "address": {
        "streetAddress": "8612 Green Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chouatia",
        "locality1": "Medea",
        "locality2": "Medea",
        "country": "DZ",
        "postalCode": "26053",
        "geoSpatial": [
            "3.1238",
            "36.2513"
        ]
    },
    "contact": {
        "email": "kcamacho197@chunghwa.com",
        "phone": "197-904-9304",
        "socMedia": {
            "facebook": "kcamacho@facebook.com"
        }
    },
    "login": {
        "username": "kcamacho",
        "oauth2": "kcamacho@facebook.com",
        "password": "$2y$10$GhrXtrqoxEP4etOW1Ir0herWOsZqK21e2ehYGIEca0qH\/KHRXlxqi"
    },
    "otherContact": {
        "emails": [
            "kcamacho197@oi.com"
        ],
        "phoneNumbers": [
            "197-403-8931"
        ],
        "socMedias": [
            {
                "facebook": "kcamacho@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-09-23"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SYLVREEV9441",
    "name": {
        "title": null,
        "first": "Sylvie",
        "middle": null,
        "last": "Reeves",
        "suffix": null
    },
    "address": {
        "streetAddress": "2415 Long Canyon Street",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "B8",
        "city": "East Durham Regional Municipality (Orono)",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "L0B",
        "geoSpatial": [
            "-78.7465",
            "44.0773"
        ]
    },
    "contact": {
        "email": "sreeves198@movil.com",
        "phone": "198-726-9441",
        "socMedia": []
    },
    "login": {
        "username": "sreeves",
        "oauth2": null,
        "password": "$2y$10$JEI\/IW8R5Fnqyut2bAoF8OP\/mi79Wqj7bYGVm73BWWvDkKkiCY9QW"
    },
    "otherContact": {
        "emails": [
            "sreeves198@tata.com",
            "sreeves198@telecom.com"
        ],
        "phoneNumbers": [
            "198-193-3607",
            "198-407-7452"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-02-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ESTEGOLD7917",
    "name": {
        "title": "Ms",
        "first": "Estell",
        "middle": "N",
        "last": "Golden",
        "suffix": null
    },
    "address": {
        "streetAddress": "2466 Red Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Edmonton (North Westmount \/ West Calder \/ East Mistatim)",
        "locality1": "AB",
        "locality2": "Edmonton",
        "country": "CA",
        "postalCode": "T5L",
        "geoSpatial": [
            "-113.5526",
            "53.585"
        ]
    },
    "contact": {
        "email": "egolden199@glasnet.com",
        "phone": "199-252-7917",
        "socMedia": {
            "google": "egolden@google.com"
        }
    },
    "login": {
        "username": "egolden",
        "oauth2": "egolden@google.com",
        "password": "$2y$10$Fg.hYMI3zSVmL6O.sKown.b3\/MeIDuctMuX6i6Qbc3yNplyQh3mIa"
    },
    "otherContact": {
        "emails": [
            "egolden199@apicnet.com",
            "egolden199@cci.com"
        ],
        "phoneNumbers": [
            "199-195-0689",
            "199-947-9163"
        ],
        "socMedias": [
            {
                "skype": "egolden@skype.com"
            },
            {
                "google": "egolden@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-03-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CAMEGEOR7285",
    "name": {
        "title": "Mr",
        "first": "Cameron",
        "middle": "Y",
        "last": "George",
        "suffix": null
    },
    "address": {
        "streetAddress": "4599 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Highclere",
        "locality1": "England",
        "locality2": "Hampshire",
        "country": "GB",
        "postalCode": "RG20",
        "geoSpatial": [
            "-1.3757",
            "51.3386"
        ]
    },
    "contact": {
        "email": "cgeorge200@optus.com",
        "phone": "200-154-7285",
        "socMedia": {
            "line": "cgeorge@line.com"
        }
    },
    "login": {
        "username": "cgeorge",
        "oauth2": "cgeorge@line.com",
        "password": "$2y$10$ALjNVy2AqTxn\/ct0KV8qyeHKMcK3pPVwoaQ0K9vyajXvns\/hestjy"
    },
    "otherContact": {
        "emails": [
            "cgeorge200@tm.com",
            "cgeorge200@lguplus.com"
        ],
        "phoneNumbers": [
            "200-651-9128",
            "200-846-6622"
        ],
        "socMedias": [
            {
                "line": "cgeorge@line.com"
            },
            {
                "google": "cgeorge@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-12-04"
    },
    "partner": "Y",
    "businessName": "Industrious Trust Ltd"
});
db.users.insertOne(
{
    "userKey": "TYSOFRAN6299",
    "name": {
        "title": null,
        "first": "Tyson",
        "middle": null,
        "last": "Frank",
        "suffix": null
    },
    "address": {
        "streetAddress": "2112 Green Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Trishal",
        "locality1": "H",
        "locality2": "Mymensingh",
        "country": "BD",
        "postalCode": "2220",
        "geoSpatial": [
            "90.3948",
            "24.5817"
        ]
    },
    "contact": {
        "email": "tfrank201@telia.com",
        "phone": "201-266-6299",
        "socMedia": []
    },
    "login": {
        "username": "tfrank",
        "oauth2": null,
        "password": "$2y$10$c\/a2nIbV6qgRsDGhCLdwi.YUVx8b7vNImhCr.nit2elzJmwcC80wa"
    },
    "otherContact": {
        "emails": [
            "tfrank201@sprint.com"
        ],
        "phoneNumbers": [
            "201-373-7123"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1993-01-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KAROMYER7666",
    "name": {
        "title": "Ms",
        "first": "Karon",
        "middle": "N",
        "last": "Myers",
        "suffix": null
    },
    "address": {
        "streetAddress": "251 Little Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Scarborough (Kennedy Park \/ Ionview \/ East Birchmount Park)",
        "locality1": "ON",
        "locality2": "Scarborough",
        "country": "CA",
        "postalCode": "M1K",
        "geoSpatial": [
            "-79.2639",
            "43.7298"
        ]
    },
    "contact": {
        "email": "kmyers202@kpn.com",
        "phone": "202-200-7666",
        "socMedia": {
            "line": "kmyers@line.com"
        }
    },
    "login": {
        "username": "kmyers",
        "oauth2": "kmyers@line.com",
        "password": "$2y$10$hU1f5oDIaEdCXp0uBzG3eu.F8X2QZTzhyQR88seIHzXnWEDZIHTUW"
    },
    "otherContact": {
        "emails": [
            "kmyers202@ooredoo.com",
            "kmyers202@telesystems.com",
            "kmyers202@kpn.com"
        ],
        "phoneNumbers": [
            "202-111-5963",
            "202-406-8983",
            "202-920-2919"
        ],
        "socMedias": [
            {
                "facebook": "kmyers@facebook.com"
            },
            {
                "line": "kmyers@line.com"
            },
            {
                "facebook": "kmyers@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-12-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SALVMCGE7834",
    "name": {
        "title": "Mr",
        "first": "Salvador",
        "middle": "R",
        "last": "Mcgee",
        "suffix": null
    },
    "address": {
        "streetAddress": "7781 Little Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St. George's",
        "locality1": "Saint George\u2019s Parish",
        "locality2": "Saint George\u2019s Parish",
        "country": "BM",
        "postalCode": "GE 02",
        "geoSpatial": [
            "-64.6944",
            "32.3726"
        ]
    },
    "contact": {
        "email": "smcgee203@eunet.com",
        "phone": "203-245-7834",
        "socMedia": {
            "twitter": "smcgee@twitter.com"
        }
    },
    "login": {
        "username": "smcgee",
        "oauth2": "smcgee@twitter.com",
        "password": "$2y$10$bc7tlDNoEIPOEZLtHRctlu8iHxCV3v8sDKfbsqg0ZjU9JBcdBDjbG"
    },
    "otherContact": {
        "emails": [
            "smcgee203@telus.com",
            "smcgee203@telenor.com"
        ],
        "phoneNumbers": [
            "203-222-8619",
            "203-385-8364"
        ],
        "socMedias": [
            {
                "twitter": "smcgee@twitter.com"
            },
            {
                "line": "smcgee@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-01-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "REYFISC2979",
    "name": {
        "title": null,
        "first": "Rey",
        "middle": null,
        "last": "Fischer",
        "suffix": null
    },
    "address": {
        "streetAddress": "3764 Red Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "A5",
        "city": "Paraswahi",
        "locality1": "Amarpatan",
        "locality2": "Satna",
        "country": "IN",
        "postalCode": "485775",
        "geoSpatial": [
            "81.0093",
            "24.3389"
        ]
    },
    "contact": {
        "email": "rfischer204@icom.com",
        "phone": "204-237-2979",
        "socMedia": []
    },
    "login": {
        "username": "rfischer",
        "oauth2": null,
        "password": "$2y$10$Seb5POXqFPb3XNLEjAnQR.lUH3OwFyrazKleaa35eLYRUIS4AdWwq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-03-23"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VONHARR7938",
    "name": {
        "title": "Mr",
        "first": "Von",
        "middle": "P",
        "last": "Harrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "310 Little Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Torrance",
        "locality1": "CA",
        "locality2": "Los Angeles",
        "country": "US",
        "postalCode": "90508",
        "geoSpatial": [
            "-118.2987",
            "33.7866"
        ]
    },
    "contact": {
        "email": "vharrell206@worldnet.com",
        "phone": "206-077-7938",
        "socMedia": {
            "google": "vharrell@google.com"
        }
    },
    "login": {
        "username": "vharrell",
        "oauth2": "vharrell@google.com",
        "password": "$2y$10$G1o2yXAiU3MGNZTW2L.dfOR1IC.aoYxAnSDC01x6Oe2ftSNGnt4TO"
    },
    "otherContact": {
        "emails": [
            "vharrell206@glasnet.com"
        ],
        "phoneNumbers": [
            "206-892-6674"
        ],
        "socMedias": [
            {
                "linkedin": "vharrell@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-07-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHARWINT8206",
    "name": {
        "title": null,
        "first": "Charlie",
        "middle": null,
        "last": "Winters",
        "suffix": null
    },
    "address": {
        "streetAddress": "2606 Blue Tree Circle",
        "buildingName": null,
        "floor": 1,
        "roomAptCondoFlat": null,
        "city": "Sadoveni",
        "locality1": "Boto\u015fani",
        "locality2": "Boto\u015fani",
        "country": "RO",
        "postalCode": "717238",
        "geoSpatial": [
            "27.1336",
            "47.9872"
        ]
    },
    "contact": {
        "email": "cwinters207@tm.com",
        "phone": "207-395-8206",
        "socMedia": []
    },
    "login": {
        "username": "cwinters",
        "oauth2": null,
        "password": "$2y$10$XQpfQvtJPXnr0kSkU.lr6eFwgjLykWLhrE.mqVy8KLCPsxSy7jUO6"
    },
    "otherContact": {
        "emails": [
            "cwinters207@turkcell.com"
        ],
        "phoneNumbers": [
            "207-983-9841"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-11-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MALCSPEN8770",
    "name": {
        "title": "Mr",
        "first": "Malcolm",
        "middle": "Y",
        "last": "Spencer",
        "suffix": null
    },
    "address": {
        "streetAddress": "5009 Long Bough Street",
        "buildingName": "Building C8",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "East Toronto (The Beaches)",
        "locality1": "ON",
        "locality2": "Toronto",
        "country": "CA",
        "postalCode": "M4E",
        "geoSpatial": [
            "-79.2941",
            "43.6784"
        ]
    },
    "contact": {
        "email": "mspencer208@jio.com",
        "phone": "208-499-8770",
        "socMedia": {
            "google": "mspencer@google.com"
        }
    },
    "login": {
        "username": "mspencer",
        "oauth2": "mspencer@google.com",
        "password": "$2y$10$2MjUvjmfgiJVqM8WDWTmh.YE5Mo4EX50OHodSoxEQncjKqriDHvCq"
    },
    "otherContact": {
        "emails": [
            "mspencer208@ptcl.com",
            "mspencer208@vodafone.com",
            "mspencer208@telecomitalia.com"
        ],
        "phoneNumbers": [
            "208-094-5475",
            "208-815-6018",
            "208-062-0039"
        ],
        "socMedias": [
            {
                "twitter": "mspencer@twitter.com"
            },
            {
                "skype": "mspencer@skype.com"
            },
            {
                "linkedin": "mspencer@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-01-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "YANGRHOD6893",
    "name": {
        "title": null,
        "first": "Yang",
        "middle": null,
        "last": "Rhodes",
        "suffix": null
    },
    "address": {
        "streetAddress": "4022 Long Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "8B",
        "city": "Osborne",
        "locality1": "SA",
        "locality2": "SA CITY SUBS",
        "country": "AU",
        "postalCode": "5017",
        "geoSpatial": [
            "138.498",
            "-34.798"
        ]
    },
    "contact": {
        "email": "yrhodes210@unicom.com",
        "phone": "210-359-6893",
        "socMedia": []
    },
    "login": {
        "username": "yrhodes",
        "oauth2": null,
        "password": "$2y$10$rvhh33.rDXJa\/KFINHdzretSsYSE.hprRxyo8ssXwpBeL84T.ZSvm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-11-23"
    },
    "partner": "Y",
    "businessName": "Specialty Business"
});
db.users.insertOne(
{
    "userKey": "EARTGUER6940",
    "name": {
        "title": "Ms",
        "first": "Eartha",
        "middle": "Z",
        "last": "Guerra",
        "suffix": null
    },
    "address": {
        "streetAddress": "2306 Big Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nari\u00f1o",
        "locality1": "Nari\u00f1o",
        "locality2": "Nari\u00f1o",
        "country": "CO",
        "postalCode": "252830",
        "geoSpatial": [
            "-74.8273",
            "4.3978"
        ]
    },
    "contact": {
        "email": "eguerra211@telecomitalia.com",
        "phone": "211-919-6940",
        "socMedia": {
            "facebook": "eguerra@facebook.com"
        }
    },
    "login": {
        "username": "eguerra",
        "oauth2": "eguerra@facebook.com",
        "password": "$2y$10$gJ.MzJLn7VHKhB27b2ceiOxfCM85eIa8j5SqEkLvPhcQjcHUU.ycq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-06-24"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "FEDECAST8349",
    "name": {
        "title": "Mr",
        "first": "Federico",
        "middle": "Z",
        "last": "Castillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "3564 Long River Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dayboro",
        "locality1": "QLD",
        "locality2": "NORTHGATE NORTH",
        "country": "AU",
        "postalCode": "4521",
        "geoSpatial": [
            "152.8225",
            "-27.1963"
        ]
    },
    "contact": {
        "email": "fcastill212@orstom.com",
        "phone": "212-007-8349",
        "socMedia": {
            "facebook": "fcastill@facebook.com"
        }
    },
    "login": {
        "username": "fcastill",
        "oauth2": "fcastill@facebook.com",
        "password": "$2y$10$kyHs4t56x4gEyfUfYgcc2OyamUy3TWb4LUru2vV7OoYhwh.8TLeJG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-06-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRADGILB3891",
    "name": {
        "title": null,
        "first": "Bradly",
        "middle": null,
        "last": "Gilbert",
        "suffix": null
    },
    "address": {
        "streetAddress": "624 Red Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hot Springs",
        "locality1": "MT",
        "locality2": "Sanders",
        "country": "US",
        "postalCode": "59845",
        "geoSpatial": [
            "-114.6597",
            "47.5914"
        ]
    },
    "contact": {
        "email": "bgilbert213@glasnet.com",
        "phone": "213-909-3891",
        "socMedia": []
    },
    "login": {
        "username": "bgilbert",
        "oauth2": null,
        "password": "$2y$10$zbRxetI6Qea3tsOkU8mqxuBpE1.IKtNSYG1TWXHy3HL0M88xSJ7zq"
    },
    "otherContact": {
        "emails": [
            "bgilbert213@vodafone.com",
            "bgilbert213@mtn.com"
        ],
        "phoneNumbers": [
            "213-781-3246",
            "213-045-0189"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-02-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RANDBELL6035",
    "name": {
        "title": "Mr",
        "first": "Randy",
        "middle": "G",
        "last": "Bell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9351 Red Woods Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Conception Bay",
        "locality1": "NL",
        "locality2": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A1X",
        "geoSpatial": [
            "-52.9981",
            "47.4999"
        ]
    },
    "contact": {
        "email": "rbell214@millicom.com",
        "phone": "214-493-6035",
        "socMedia": {
            "twitter": "rbell@twitter.com"
        }
    },
    "login": {
        "username": "rbell",
        "oauth2": "rbell@twitter.com",
        "password": "$2y$10$7ZqTWmaacFCMQd8Ta0NpguwGV2tv3dCrDkDX8EFYLNpkXGxd.U6\/O"
    },
    "otherContact": {
        "emails": [
            "rbell214@netcom.com",
            "rbell214@frontier.com"
        ],
        "phoneNumbers": [
            "214-539-8389",
            "214-598-3782"
        ],
        "socMedias": [
            {
                "line": "rbell@line.com"
            },
            {
                "google": "rbell@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-03-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHALHURS8730",
    "name": {
        "title": "Ms",
        "first": "Shala",
        "middle": "Z",
        "last": "Hurst",
        "suffix": null
    },
    "address": {
        "streetAddress": "6516 Long Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pouembout",
        "locality1": "Pouembout",
        "locality2": "Pouembout",
        "country": "NC",
        "postalCode": "98825",
        "geoSpatial": [
            "164.9834",
            "-21.1076"
        ]
    },
    "contact": {
        "email": "shurst215@algonet.com",
        "phone": "215-234-8730",
        "socMedia": {
            "google": "shurst@google.com"
        }
    },
    "login": {
        "username": "shurst",
        "oauth2": "shurst@google.com",
        "password": "$2y$10$bDzMZ66pyuKaH3VT8dWFF.FTS6QuXLHjr1DxcPZIjgwDZ6nNq.pwa"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-06-30"
    },
    "partner": "Y",
    "businessName": "Ninety Nine Percenter Industries LLC"
});
db.users.insertOne(
{
    "userKey": "BRADMCCO9601",
    "name": {
        "title": null,
        "first": "Brad",
        "middle": null,
        "last": "Mccoy",
        "suffix": null
    },
    "address": {
        "streetAddress": "4716 Big Stream Ride",
        "buildingName": null,
        "floor": 2,
        "roomAptCondoFlat": "5C",
        "city": "Allardville",
        "locality1": "NB",
        "locality2": "New Brunswick",
        "country": "CA",
        "postalCode": "E8L",
        "geoSpatial": [
            "-65.495",
            "47.475"
        ]
    },
    "contact": {
        "email": "bmccoy216@telkom.com",
        "phone": "216-008-9601",
        "socMedia": []
    },
    "login": {
        "username": "bmccoy",
        "oauth2": null,
        "password": "$2y$10$VNk4KUO1AEsTSlajhxsNBeBsJSvgdUTbvtMst69Acyjjpk8Tuyu\/u"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-05-30"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MALCMOSS2428",
    "name": {
        "title": "Mr",
        "first": "Malcom",
        "middle": "T",
        "last": "Moss",
        "suffix": null
    },
    "address": {
        "streetAddress": "9422 Little Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Reykjav\u00edk - 10",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "110",
        "geoSpatial": [
            "-21.8197",
            "64.1251"
        ]
    },
    "contact": {
        "email": "mmoss217@ais.com",
        "phone": "217-174-2428",
        "socMedia": {
            "line": "mmoss@line.com"
        }
    },
    "login": {
        "username": "mmoss",
        "oauth2": "mmoss@line.com",
        "password": "$2y$10$djJnzvcbKS.drotJ6cCe9OrJxR3EJFD8OolsG2beq2H8gm3X4xBJK"
    },
    "otherContact": {
        "emails": [
            "mmoss217@telecom.com",
            "mmoss217@ccs.com"
        ],
        "phoneNumbers": [
            "217-733-1860",
            "217-760-6311"
        ],
        "socMedias": [
            {
                "skype": "mmoss@skype.com"
            },
            {
                "twitter": "mmoss@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1959-01-12"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KATRLARA7960",
    "name": {
        "title": "Ms",
        "first": "Katrice",
        "middle": "Y",
        "last": "Lara",
        "suffix": null
    },
    "address": {
        "streetAddress": "4988 Big Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Greenwood",
        "locality1": "SC",
        "locality2": "Greenwood",
        "country": "US",
        "postalCode": "29648",
        "geoSpatial": [
            "-82.1681",
            "34.2124"
        ]
    },
    "contact": {
        "email": "klara218@movil.com",
        "phone": "218-141-7960",
        "socMedia": {
            "skype": "klara@skype.com"
        }
    },
    "login": {
        "username": "klara",
        "oauth2": "klara@skype.com",
        "password": "$2y$10$L.oBceqFLJftmFyEfHd3\/ec.x\/BGVQ9Qf\/cLx\/vL7dzl6XEuC4CZq"
    },
    "otherContact": {
        "emails": [
            "klara218@telecom.com"
        ],
        "phoneNumbers": [
            "218-264-2880"
        ],
        "socMedias": [
            {
                "google": "klara@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-09-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RANDVELE1640",
    "name": {
        "title": null,
        "first": "Randal",
        "middle": null,
        "last": "Velez",
        "suffix": null
    },
    "address": {
        "streetAddress": "8314 Short Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cayenne",
        "locality1": "GF",
        "locality2": "Guyane",
        "country": "GF",
        "postalCode": "97334 CEDEX",
        "geoSpatial": [
            "-52.3333",
            "4.9333"
        ]
    },
    "contact": {
        "email": "rvelez219@vodafone.com",
        "phone": "219-175-1640",
        "socMedia": []
    },
    "login": {
        "username": "rvelez",
        "oauth2": null,
        "password": "$2y$10$ysVKvcfThGayKomiFeUaL.D9vQb9Ewju3RDG8nzSyMMgbXxPB86Ni"
    },
    "otherContact": {
        "emails": [
            "rvelez219@verizon.com"
        ],
        "phoneNumbers": [
            "219-887-3076"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-09-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRIASTRI9253",
    "name": {
        "title": "Mr",
        "first": "Brian",
        "middle": "X",
        "last": "Strickland",
        "suffix": null
    },
    "address": {
        "streetAddress": "3 Short Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Highgrove",
        "locality1": "QLD",
        "locality2": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4352",
        "geoSpatial": [
            "151.7667",
            "-27.1333"
        ]
    },
    "contact": {
        "email": "bstrickl220@cerist.com",
        "phone": "220-289-9253",
        "socMedia": {
            "line": "bstrickl@line.com"
        }
    },
    "login": {
        "username": "bstrickl",
        "oauth2": "bstrickl@line.com",
        "password": "$2y$10$vKH1rfqlCR20Clek8sQGj.65D4UOK6ANrKmFew7bFBDi4Ur7S0t1O"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-08-23"
    },
    "partner": "Y",
    "businessName": "Illuminati Partners Ltd"
});
db.users.insertOne(
{
    "userKey": "LASHPRES6051",
    "name": {
        "title": "Ms",
        "first": "Lashawn",
        "middle": "F",
        "last": "Preston",
        "suffix": null
    },
    "address": {
        "streetAddress": "6866 Red Ridge Way",
        "buildingName": "Building E0",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "V\u00fd\u0161kovice",
        "locality1": "Nov\u00fd Ji\u010d\u00edn",
        "locality2": "Nov\u00fd Ji\u010d\u00edn",
        "country": "CZ",
        "postalCode": "743 01",
        "geoSpatial": [
            "18",
            "49.8167"
        ]
    },
    "contact": {
        "email": "lpreston221@greennet.com",
        "phone": "221-143-6051",
        "socMedia": {
            "line": "lpreston@line.com"
        }
    },
    "login": {
        "username": "lpreston",
        "oauth2": "lpreston@line.com",
        "password": "$2y$10$CYk3yVuUVfsOPN\/0uTSg.uWlLjp.5zP51AG5nyVk\/4zegrtl3r\/wW"
    },
    "otherContact": {
        "emails": [
            "lpreston221@tata.com",
            "lpreston221@glasnet.com"
        ],
        "phoneNumbers": [
            "221-473-2451",
            "221-189-7719"
        ],
        "socMedias": [
            {
                "line": "lpreston@line.com"
            },
            {
                "linkedin": "lpreston@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-09-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRIGMULL2682",
    "name": {
        "title": null,
        "first": "Brigid",
        "middle": null,
        "last": "Mullins",
        "suffix": null
    },
    "address": {
        "streetAddress": "8171 Blue Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "63",
        "city": "Douglas",
        "locality1": "OK",
        "locality2": "Garfield",
        "country": "US",
        "postalCode": "73733",
        "geoSpatial": [
            "-97.6896",
            "36.2481"
        ]
    },
    "contact": {
        "email": "bmullins222@ais.com",
        "phone": "222-358-2682",
        "socMedia": []
    },
    "login": {
        "username": "bmullins",
        "oauth2": null,
        "password": "$2y$10$Ss46pNvIxcQTH6q3jbFdRerkJfjn6byrPbVpQyXIqecSPLQhGqMI."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-01-23"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DEEDMANN2351",
    "name": {
        "title": "Ms",
        "first": "Deedra",
        "middle": "M",
        "last": "Mann",
        "suffix": null
    },
    "address": {
        "streetAddress": "5373 Blue Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Juan",
        "locality1": "San Juan",
        "locality2": "San Juan",
        "country": "PR",
        "postalCode": "00928",
        "geoSpatial": [
            "-66.1057",
            "18.4663"
        ]
    },
    "contact": {
        "email": "dmann223@telstra.com",
        "phone": "223-727-2351",
        "socMedia": {
            "facebook": "dmann@facebook.com"
        }
    },
    "login": {
        "username": "dmann",
        "oauth2": "dmann@facebook.com",
        "password": "$2y$10$uLDVt3XDcU1thvDXLeLVSOVmHN43JifN4OowT8CKHvaTUoYwFu\/FO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-04-30"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RUSTMOOD6411",
    "name": {
        "title": "Mr",
        "first": "Rusty",
        "middle": "F",
        "last": "Moody",
        "suffix": null
    },
    "address": {
        "streetAddress": "9743 Red Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Brooweena",
        "locality1": "QLD",
        "locality2": "BRIS CITY CNTRY",
        "country": "AU",
        "postalCode": "4620",
        "geoSpatial": [
            "152.2611",
            "-25.6059"
        ]
    },
    "contact": {
        "email": "rmoody224@ote.com",
        "phone": "224-265-6411",
        "socMedia": {
            "facebook": "rmoody@facebook.com"
        }
    },
    "login": {
        "username": "rmoody",
        "oauth2": "rmoody@facebook.com",
        "password": "$2y$10$GJXyWeJt6K2WrscJPO2Et.gjGWyQppaTy2OyBFTJFTkPupHZ6D5TW"
    },
    "otherContact": {
        "emails": [
            "rmoody224@ntt.com"
        ],
        "phoneNumbers": [
            "224-269-3759"
        ],
        "socMedias": [
            {
                "linkedin": "rmoody@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-07-25"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ANGEWAGN7837",
    "name": {
        "title": null,
        "first": "Angel",
        "middle": null,
        "last": "Wagner",
        "suffix": null
    },
    "address": {
        "streetAddress": "8174 Blue Gulch Road",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": null,
        "city": "SACAPULAS",
        "locality1": "DEPTO DEL QUICHE",
        "locality2": "DEPTO DEL QUICHE",
        "country": "GT",
        "postalCode": "14016",
        "geoSpatial": [
            "-91.0872",
            "15.2867"
        ]
    },
    "contact": {
        "email": "awagner225@glasnet.com",
        "phone": "225-818-7837",
        "socMedia": []
    },
    "login": {
        "username": "awagner",
        "oauth2": null,
        "password": "$2y$10$Oyf80WNilVT2pR6gQrg\/AOjORle1tqiuTkCNaBYxMN3flo.IK0A8m"
    },
    "otherContact": {
        "emails": [
            "awagner225@oi.com",
            "awagner225@sktelecom.com",
            "awagner225@centurylink.com"
        ],
        "phoneNumbers": [
            "225-199-8003",
            "225-288-9048",
            "225-071-0322"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-03-02"
    },
    "partner": "Y",
    "businessName": "Comfort Partners LLC"
});
db.users.insertOne(
{
    "userKey": "ALBECOMB1119",
    "name": {
        "title": "Ms",
        "first": "Albert",
        "middle": "T",
        "last": "Combs",
        "suffix": null
    },
    "address": {
        "streetAddress": "5627 Green Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "South Dennis",
        "locality1": "MA",
        "locality2": "Barnstable",
        "country": "US",
        "postalCode": "02660",
        "geoSpatial": [
            "-70.1585",
            "41.7097"
        ]
    },
    "contact": {
        "email": "acombs226@chunghwa.com",
        "phone": "226-794-1119",
        "socMedia": {
            "skype": "acombs@skype.com"
        }
    },
    "login": {
        "username": "acombs",
        "oauth2": "acombs@skype.com",
        "password": "$2y$10$LFQTjXSQH0\/IkAQhepxHZuCECtSPIQUpeQUPX1x5Jv1\/G93He0jsy"
    },
    "otherContact": {
        "emails": [
            "acombs226@daxnet.com"
        ],
        "phoneNumbers": [
            "226-127-5457"
        ],
        "socMedias": [
            {
                "linkedin": "acombs@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-09-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SOILMATT6734",
    "name": {
        "title": "Ms",
        "first": "Soila",
        "middle": "M",
        "last": "Matthews",
        "suffix": null
    },
    "address": {
        "streetAddress": "39 Red Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "LOS TRONCOS (SANTA ELENA-DPTO.RIO SECO)",
        "locality1": "X",
        "locality2": "Cordoba",
        "country": "AR",
        "postalCode": "5246",
        "geoSpatial": [
            "-63.7417",
            "-30.3083"
        ]
    },
    "contact": {
        "email": "smatthew227@optus.com",
        "phone": "227-787-6734",
        "socMedia": {
            "skype": "smatthew@skype.com"
        }
    },
    "login": {
        "username": "smatthew",
        "oauth2": "smatthew@skype.com",
        "password": "$2y$10$Va3pkH2HC1jgbllk9mrhbOcsw3w\/\/Cwhy.vucyPhQaOm5EHrfeqOS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-01-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHERHENR7708",
    "name": {
        "title": null,
        "first": "Sherri",
        "middle": null,
        "last": "Henry",
        "suffix": null
    },
    "address": {
        "streetAddress": "8483 Winding Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "6A",
        "city": "Mithapur (Jamnagar)",
        "locality1": "Okhamandal",
        "locality2": "Jamnagar",
        "country": "IN",
        "postalCode": "361345",
        "geoSpatial": [
            "69.007",
            "22.3961"
        ]
    },
    "contact": {
        "email": "shenry228@nordnet.com",
        "phone": "228-176-7708",
        "socMedia": []
    },
    "login": {
        "username": "shenry",
        "oauth2": null,
        "password": "$2y$10$OtbjKzE4Y1JRee9Yev11OOefa6ROLhgrkn5HCPmbi4NnQfuGekSSW"
    },
    "otherContact": {
        "emails": [
            "shenry228@bt.com",
            "shenry228@etisalat.com",
            "shenry228@rogers.com"
        ],
        "phoneNumbers": [
            "228-847-8387",
            "228-084-2350",
            "228-153-9178"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-09-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LAVAALVA5145",
    "name": {
        "title": "Ms",
        "first": "Lavada",
        "middle": "Z",
        "last": "Alvarez",
        "suffix": null
    },
    "address": {
        "streetAddress": "173 Green Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0411\u043e\u0431\u0435\u0448\u0438\u043d\u043e \/ Bobeshino",
        "locality1": "KNL",
        "locality2": "\u041a\u044e\u0441\u0442\u0435\u043d\u0434\u0438\u043b \/ Kjustendil",
        "country": "BG",
        "postalCode": "2567",
        "geoSpatial": [
            "22.4225",
            "42.3144"
        ]
    },
    "contact": {
        "email": "lalvarez229@turkcell.com",
        "phone": "229-287-5145",
        "socMedia": {
            "google": "lalvarez@google.com"
        }
    },
    "login": {
        "username": "lalvarez",
        "oauth2": "lalvarez@google.com",
        "password": "$2y$10$O6AgZ4CtPbftS6s92f14FuY0VNJvE4UIzK2d2OfBaGqiyqVWUqLKq"
    },
    "otherContact": {
        "emails": [
            "lalvarez229@turkcell.com",
            "lalvarez229@telus.com"
        ],
        "phoneNumbers": [
            "229-485-1090",
            "229-071-9324"
        ],
        "socMedias": [
            {
                "skype": "lalvarez@skype.com"
            },
            {
                "facebook": "lalvarez@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-11-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ADRIGILB0392",
    "name": {
        "title": "Mr",
        "first": "Adrian",
        "middle": "B",
        "last": "Gilbert",
        "suffix": null
    },
    "address": {
        "streetAddress": "4573 Long Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Basile",
        "locality1": "NB",
        "locality2": "New Brunswick",
        "country": "CA",
        "postalCode": "E7C",
        "geoSpatial": [
            "-68.0684",
            "47.6583"
        ]
    },
    "contact": {
        "email": "agilbert230@nii.com",
        "phone": "230-381-0392",
        "socMedia": {
            "twitter": "agilbert@twitter.com"
        }
    },
    "login": {
        "username": "agilbert",
        "oauth2": "agilbert@twitter.com",
        "password": "$2y$10$d20HljR0bew8KDA5Bj8TzuY4P8zpu4Np8vnKHgDZ9KwgO2cUoeNWa"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-12-11"
    },
    "partner": "Y",
    "businessName": "Nonstop Associates"
});
db.users.insertOne(
{
    "userKey": "LYNDBRUC8165",
    "name": {
        "title": null,
        "first": "Lyndsey",
        "middle": null,
        "last": "Bruce",
        "suffix": null
    },
    "address": {
        "streetAddress": "3404 Red River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pointe-\u00e0-Pitre",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97004 CEDEX",
        "geoSpatial": [
            "-61.5343",
            "16.2422"
        ]
    },
    "contact": {
        "email": "lbruce231@telekom.com",
        "phone": "231-815-8165",
        "socMedia": []
    },
    "login": {
        "username": "lbruce",
        "oauth2": null,
        "password": "$2y$10$Ep.wV4D8fvh7w\/yGQiDEsunoIhiAJxjKyi0bdL8JCaiQm\/vr5r9jy"
    },
    "otherContact": {
        "emails": [
            "lbruce231@jio.com",
            "lbruce231@singtel.com"
        ],
        "phoneNumbers": [
            "231-029-3862",
            "231-594-3352"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-05-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RODGTRUJ6245",
    "name": {
        "title": "Mr",
        "first": "Rodger",
        "middle": "P",
        "last": "Trujillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "8166 Blue Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Southend-on-Sea",
        "locality1": "England",
        "locality2": "Essex",
        "country": "GB",
        "postalCode": "SS22",
        "geoSpatial": [
            "0.7143",
            "51.5378"
        ]
    },
    "contact": {
        "email": "rtrujill232@telecom.com",
        "phone": "232-470-6245",
        "socMedia": {
            "twitter": "rtrujill@twitter.com"
        }
    },
    "login": {
        "username": "rtrujill",
        "oauth2": "rtrujill@twitter.com",
        "password": "$2y$10$apWakT6hFlSTesUbFgMiS.yQX5JhMIf8WJPxtFDHfa7IncauaIQcC"
    },
    "otherContact": {
        "emails": [
            "rtrujill232@softbank.com",
            "rtrujill232@telecom.com"
        ],
        "phoneNumbers": [
            "232-991-4964",
            "232-039-0412"
        ],
        "socMedias": [
            {
                "facebook": "rtrujill@facebook.com"
            },
            {
                "twitter": "rtrujill@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-05-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ABRAWARR0219",
    "name": {
        "title": "Mr",
        "first": "Abram",
        "middle": "S",
        "last": "Warren",
        "suffix": null
    },
    "address": {
        "streetAddress": "3024 Blue Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Piatra-Neam\u0163",
        "locality1": "Neam\u0163",
        "locality2": "Neam\u0163",
        "country": "RO",
        "postalCode": "610241",
        "geoSpatial": [
            "26.375",
            "46.9195"
        ]
    },
    "contact": {
        "email": "awarren233@optus.com",
        "phone": "233-002-0219",
        "socMedia": {
            "line": "awarren@line.com"
        }
    },
    "login": {
        "username": "awarren",
        "oauth2": "awarren@line.com",
        "password": "$2y$10$goAVb3tV5CveyxidagzFJOZrGirV60kKKaWqrOTbcWROdNHAuOCh2"
    },
    "otherContact": {
        "emails": [
            "awarren233@telecom.com",
            "awarren233@telkom.com",
            "awarren233@megafon.com"
        ],
        "phoneNumbers": [
            "233-872-1598",
            "233-199-7686",
            "233-442-9164"
        ],
        "socMedias": [
            {
                "line": "awarren@line.com"
            },
            {
                "linkedin": "awarren@linkedin.com"
            },
            {
                "skype": "awarren@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-08-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "STEFBLAC7448",
    "name": {
        "title": null,
        "first": "Stefania",
        "middle": null,
        "last": "Blackburn",
        "suffix": null
    },
    "address": {
        "streetAddress": "9022 Big River Boulevard",
        "buildingName": "Building C4",
        "floor": 18,
        "roomAptCondoFlat": "F7",
        "city": "Boyd",
        "locality1": "WI",
        "locality2": "Chippewa",
        "country": "US",
        "postalCode": "54726",
        "geoSpatial": [
            "-91.0294",
            "44.9437"
        ]
    },
    "contact": {
        "email": "sblackbu234@airtel.com",
        "phone": "234-970-7448",
        "socMedia": []
    },
    "login": {
        "username": "sblackbu",
        "oauth2": null,
        "password": "$2y$10$ubhymQUc\/bCtVA6qvvD4J.dAjDlMmC34\/YIsPq\/nnIFNJXOH63MFa"
    },
    "otherContact": {
        "emails": [
            "sblackbu234@megafon.com",
            "sblackbu234@openworld.com",
            "sblackbu234@millicom.com"
        ],
        "phoneNumbers": [
            "234-891-1709",
            "234-691-2754",
            "234-811-9055"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-08-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "TIMOONEI2463",
    "name": {
        "title": "Mr",
        "first": "Timothy",
        "middle": "O",
        "last": "Oneill",
        "suffix": null
    },
    "address": {
        "streetAddress": "5739 Little Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paredones",
        "locality1": "Paredones",
        "locality2": "Provincia de Cardenal Caro",
        "country": "CL",
        "postalCode": "3270000",
        "geoSpatial": [
            "-71.9112",
            "-34.6733"
        ]
    },
    "contact": {
        "email": "toneill235@access.com",
        "phone": "235-650-2463",
        "socMedia": {
            "facebook": "toneill@facebook.com"
        }
    },
    "login": {
        "username": "toneill",
        "oauth2": "toneill@facebook.com",
        "password": "$2y$10$VVjh1JsG01G8A8Tru2lzr.qePJuihCnCOQqLA8cTUhhib1BRNzDvy"
    },
    "otherContact": {
        "emails": [
            "toneill235@softbank.com"
        ],
        "phoneNumbers": [
            "235-654-6532"
        ],
        "socMedias": [
            {
                "facebook": "toneill@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-10-01"
    },
    "partner": "Y",
    "businessName": "Serious Industries Company"
});
db.users.insertOne(
{
    "userKey": "FATIVILL2676",
    "name": {
        "title": "Ms",
        "first": "Fatima",
        "middle": "O",
        "last": "Villa",
        "suffix": null
    },
    "address": {
        "streetAddress": "9943 Red Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vancouver (West Kitsilano \/ Jericho)",
        "locality1": "BC",
        "locality2": "Vancouver",
        "country": "CA",
        "postalCode": "V6R",
        "geoSpatial": [
            "-123.1976",
            "49.2666"
        ]
    },
    "contact": {
        "email": "fvilla236@telkom.com",
        "phone": "236-323-2676",
        "socMedia": {
            "linkedin": "fvilla@linkedin.com"
        }
    },
    "login": {
        "username": "fvilla",
        "oauth2": "fvilla@linkedin.com",
        "password": "$2y$10$vamU\/\/nUO1NZTFKbQtMI\/.\/bBU4HdkFz7jD8yu829.VIPbTnVT5JO"
    },
    "otherContact": {
        "emails": [
            "fvilla236@maxcomm.com",
            "fvilla236@bce.com",
            "fvilla236@chunghwa.com"
        ],
        "phoneNumbers": [
            "236-344-5501",
            "236-085-5505",
            "236-317-2769"
        ],
        "socMedias": [
            {
                "twitter": "fvilla@twitter.com"
            },
            {
                "linkedin": "fvilla@linkedin.com"
            },
            {
                "skype": "fvilla@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-07-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VIKIROJA2945",
    "name": {
        "title": "Dr",
        "first": "Viki",
        "middle": null,
        "last": "Rojas",
        "suffix": "Jr"
    },
    "address": {
        "streetAddress": "761 Red Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pointe Saint-Antoine",
        "locality1": "Larvotto",
        "locality2": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "geoSpatial": [
            "7.4278",
            "43.7333"
        ]
    },
    "contact": {
        "email": "vrojas237@tt.com",
        "phone": "237-116-2945",
        "socMedia": []
    },
    "login": {
        "username": "vrojas",
        "oauth2": null,
        "password": "$2y$10$eAGFaRbyxiJeedIlp0v1vuvthDbsn.jdt4k1p8zKAr760vrmitq\/e"
    },
    "otherContact": {
        "emails": [
            "vrojas237@lguplus.com",
            "vrojas237@telenor.com",
            "vrojas237@tm.com"
        ],
        "phoneNumbers": [
            "237-510-1335",
            "237-420-6446",
            "237-165-1843"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-09-20"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DANNFLOR0636",
    "name": {
        "title": "Mr",
        "first": "Danny",
        "middle": "Y",
        "last": "Flores",
        "suffix": null
    },
    "address": {
        "streetAddress": "3696 Blue Gully Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Avondale",
        "locality1": "AZ",
        "locality2": "Maricopa",
        "country": "US",
        "postalCode": "85392",
        "geoSpatial": [
            "-112.3093",
            "33.4777"
        ]
    },
    "contact": {
        "email": "dflores238@movil.com",
        "phone": "238-779-0636",
        "socMedia": {
            "twitter": "dflores@twitter.com"
        }
    },
    "login": {
        "username": "dflores",
        "oauth2": "dflores@twitter.com",
        "password": "$2y$10$DQGhC1o1EKyi5uVE.UyItuIbxyLqC51Nt2YcjqG0qDjU9T6EppOq2"
    },
    "otherContact": {
        "emails": [
            "dflores238@glasnet.com",
            "dflores238@chunghwa.com",
            "dflores238@cci.com"
        ],
        "phoneNumbers": [
            "238-618-6649",
            "238-211-7901",
            "238-270-5040"
        ],
        "socMedias": [
            {
                "google": "dflores@google.com"
            },
            {
                "facebook": "dflores@facebook.com"
            },
            {
                "line": "dflores@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-05-25"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DOUGOLIV2092",
    "name": {
        "title": "Mr",
        "first": "Doug",
        "middle": "Z",
        "last": "Oliver",
        "suffix": null
    },
    "address": {
        "streetAddress": "4674 Big Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bucure\u015fti 63",
        "locality1": "Sector 1",
        "locality2": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "011962",
        "geoSpatial": [
            "26.0602",
            "44.4914"
        ]
    },
    "contact": {
        "email": "doliver239@ntt.com",
        "phone": "239-125-2092",
        "socMedia": {
            "line": "doliver@line.com"
        }
    },
    "login": {
        "username": "doliver",
        "oauth2": "doliver@line.com",
        "password": "$2y$10$sLQhXyBoy3Z2C9icG80\/QeAaPrC5HeN3MU0HQ5rT1XXaZW\/oLXLum"
    },
    "otherContact": {
        "emails": [
            "doliver239@orange.com"
        ],
        "phoneNumbers": [
            "239-416-2326"
        ],
        "socMedias": [
            {
                "skype": "doliver@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-01-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MICHDALT9152",
    "name": {
        "title": null,
        "first": "Michael",
        "middle": null,
        "last": "Dalton",
        "suffix": null
    },
    "address": {
        "streetAddress": "6776 Little Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "0C",
        "city": "Westonzoyland",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "TA7",
        "geoSpatial": [
            "-2.9284",
            "51.1085"
        ]
    },
    "contact": {
        "email": "mdalton240@kddi.com",
        "phone": "240-116-9152",
        "socMedia": []
    },
    "login": {
        "username": "mdalton",
        "oauth2": null,
        "password": "$2y$10$MgHdSAUy6.9RUoa4f.7iDOQzpBuISxuKVu72ivgNjfg.BbIJLzJDq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1950-05-27"
    },
    "partner": "Y",
    "businessName": "Lazy Bird Industries"
});
db.users.insertOne(
{
    "userKey": "DUNGPINE0812",
    "name": {
        "title": "Ms",
        "first": "Dung",
        "middle": "A",
        "last": "Pineda",
        "suffix": null
    },
    "address": {
        "streetAddress": "8486 Little Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chang Han",
        "locality1": "Roi Et",
        "locality2": "Roi Et",
        "country": "TH",
        "postalCode": "45000",
        "geoSpatial": [
            "102.7333",
            "16.7167"
        ]
    },
    "contact": {
        "email": "dpineda241@optus.com",
        "phone": "241-699-0812",
        "socMedia": {
            "google": "dpineda@google.com"
        }
    },
    "login": {
        "username": "dpineda",
        "oauth2": "dpineda@google.com",
        "password": "$2y$10$.tSi52OOdEEiK.NYxfiY6.auOoZYyVGYtxsDQwqf7jARkawlDax8."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-01-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JEFFCOOP8991",
    "name": {
        "title": "Ms",
        "first": "Jeffrey",
        "middle": "O",
        "last": "Cooper",
        "suffix": null
    },
    "address": {
        "streetAddress": "4506 Green Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eucla",
        "locality1": "WA",
        "locality2": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6443",
        "geoSpatial": [
            "124.3774",
            "-32.0134"
        ]
    },
    "contact": {
        "email": "jcooper242@mtn.com",
        "phone": "242-717-8991",
        "socMedia": {
            "line": "jcooper@line.com"
        }
    },
    "login": {
        "username": "jcooper",
        "oauth2": "jcooper@line.com",
        "password": "$2y$10$egkJFuGv.x9H385WLbQhHuN.HOu9JOJxR6cRqubBVrVgNYafCU8gS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-06-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LEONSANT6998",
    "name": {
        "title": null,
        "first": "Leonel",
        "middle": null,
        "last": "Santana",
        "suffix": null
    },
    "address": {
        "streetAddress": "5340 Winding Hill Boulevard",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": null,
        "city": "Pompaples",
        "locality1": "VD",
        "locality2": "Morges District",
        "country": "CH",
        "postalCode": "1318",
        "geoSpatial": [
            "6.5097",
            "46.667"
        ]
    },
    "contact": {
        "email": "lsantana243@telesystems.com",
        "phone": "243-214-6998",
        "socMedia": []
    },
    "login": {
        "username": "lsantana",
        "oauth2": null,
        "password": "$2y$10$UHpZ7ez4TUYA\/Y29qAuZrOn.KayRJe3PeKOEoKSk.BWWnzuCQRbmS"
    },
    "otherContact": {
        "emails": [
            "lsantana243@verizon.com"
        ],
        "phoneNumbers": [
            "243-638-0602"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-10-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MAXBENT9772",
    "name": {
        "title": "Mr",
        "first": "Max",
        "middle": "E",
        "last": "Bentley",
        "suffix": null
    },
    "address": {
        "streetAddress": "4355 Short Woods Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ajax Northwest",
        "locality1": "ON",
        "locality2": "Ajax",
        "country": "CA",
        "postalCode": "L1T",
        "geoSpatial": [
            "-79.0534",
            "43.8843"
        ]
    },
    "contact": {
        "email": "mbentley244@sprint.com",
        "phone": "244-129-9772",
        "socMedia": {
            "skype": "mbentley@skype.com"
        }
    },
    "login": {
        "username": "mbentley",
        "oauth2": "mbentley@skype.com",
        "password": "$2y$10$8tPWWKxSbKO8Lhk4n\/r7QOXS6LRekaZL8VTylvSJQZegFg5GwWbFC"
    },
    "otherContact": {
        "emails": [
            "mbentley244@nii.com",
            "mbentley244@ote.com"
        ],
        "phoneNumbers": [
            "244-021-2187",
            "244-562-8467"
        ],
        "socMedias": [
            {
                "twitter": "mbentley@twitter.com"
            },
            {
                "skype": "mbentley@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-09-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALAIDOUG7905",
    "name": {
        "title": "Ms",
        "first": "Alaine",
        "middle": "D",
        "last": "Dougherty",
        "suffix": null
    },
    "address": {
        "streetAddress": "4962 Blue Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Obreja Noua",
        "locality1": "Falesti",
        "locality2": "Falesti",
        "country": "MD",
        "postalCode": "MD-5938",
        "geoSpatial": [
            "27.6931",
            "47.6742"
        ]
    },
    "contact": {
        "email": "adougher245@etisalat.com",
        "phone": "245-140-7905",
        "socMedia": {
            "twitter": "adougher@twitter.com"
        }
    },
    "login": {
        "username": "adougher",
        "oauth2": "adougher@twitter.com",
        "password": "$2y$10$h4mdEecDbWHlAz0ERke.duG8AWySp4ZiKvDZ6q1cM42GZavqwQwsa"
    },
    "otherContact": {
        "emails": [
            "adougher245@millicom.com"
        ],
        "phoneNumbers": [
            "245-634-7903"
        ],
        "socMedias": [
            {
                "line": "adougher@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-10-21"
    },
    "partner": "Y",
    "businessName": "Illuminati Trust"
});
db.users.insertOne(
{
    "userKey": "ROMABENJ3078",
    "name": {
        "title": null,
        "first": "Roman",
        "middle": null,
        "last": "Benjamin",
        "suffix": null
    },
    "address": {
        "streetAddress": "6315 Little Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "15",
        "city": "Clachan",
        "locality1": "Scotland",
        "locality2": "Western Isles",
        "country": "GB",
        "postalCode": "HS8",
        "geoSpatial": [
            "-7.3667",
            "57.3833"
        ]
    },
    "contact": {
        "email": "rbenjami246@telecom.com",
        "phone": "246-063-3078",
        "socMedia": []
    },
    "login": {
        "username": "rbenjami",
        "oauth2": null,
        "password": "$2y$10$6rvr5QKvC3.uf5SjbYtV6eQfyctLyjRDJ5TahC8R7lJLZxDQselHu"
    },
    "otherContact": {
        "emails": [
            "rbenjami246@tm.com"
        ],
        "phoneNumbers": [
            "246-108-8213"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-03-23"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARTBEAS6546",
    "name": {
        "title": "Ms",
        "first": "Martin",
        "middle": "U",
        "last": "Beasley",
        "suffix": null
    },
    "address": {
        "streetAddress": "6352 Short Ridge Street",
        "buildingName": "Building 01",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Burgwindheim",
        "locality1": "BY",
        "locality2": "Upper Franconia",
        "country": "DE",
        "postalCode": "96154",
        "geoSpatial": [
            "10.5963",
            "49.8273"
        ]
    },
    "contact": {
        "email": "mbeasley247@lguplus.com",
        "phone": "247-830-6546",
        "socMedia": {
            "line": "mbeasley@line.com"
        }
    },
    "login": {
        "username": "mbeasley",
        "oauth2": "mbeasley@line.com",
        "password": "$2y$10$tAC7HY.ojkoEC2EUfKDWX.o\/qvnzMN.neHP.ZCLQUN5KISECmXVau"
    },
    "otherContact": {
        "emails": [
            "mbeasley247@unicom.com"
        ],
        "phoneNumbers": [
            "247-110-3472"
        ],
        "socMedias": [
            {
                "linkedin": "mbeasley@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-03-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHEYNAVA1160",
    "name": {
        "title": "Ms",
        "first": "Cheyenne",
        "middle": "O",
        "last": "Nava",
        "suffix": null
    },
    "address": {
        "streetAddress": "5233 Green Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Qualicum Beach",
        "locality1": "BC",
        "locality2": "British Columbia",
        "country": "CA",
        "postalCode": "V9K",
        "geoSpatial": [
            "-124.4361",
            "49.3468"
        ]
    },
    "contact": {
        "email": "cnava248@oi.com",
        "phone": "248-404-1160",
        "socMedia": {
            "twitter": "cnava@twitter.com"
        }
    },
    "login": {
        "username": "cnava",
        "oauth2": "cnava@twitter.com",
        "password": "$2y$10$JTkiWNyH5dERrBCTm\/BY3.amfqXpM6sP\/Eecsc4wz7xlUKVpRQztm"
    },
    "otherContact": {
        "emails": [
            "cnava248@vodafone.com"
        ],
        "phoneNumbers": [
            "248-487-6011"
        ],
        "socMedias": [
            {
                "facebook": "cnava@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-09-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KANDADAM6166",
    "name": {
        "title": null,
        "first": "Kandi",
        "middle": null,
        "last": "Adams",
        "suffix": null
    },
    "address": {
        "streetAddress": "4041 Big Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "G\u00f8tugj\u00f3gv",
        "locality1": null,
        "locality2": null,
        "country": "FO",
        "postalCode": "511",
        "geoSpatial": [
            "-6.7333",
            "62.1833"
        ]
    },
    "contact": {
        "email": "kadams249@apicnet.com",
        "phone": "249-308-6166",
        "socMedia": []
    },
    "login": {
        "username": "kadams",
        "oauth2": null,
        "password": "$2y$10$2tRqKF6fNbqL4hc\/pbEpPOZ55mwaRbCCPrWgGDKdShg.QP8JpxzD2"
    },
    "otherContact": {
        "emails": [
            "kadams249@centurylink.com",
            "kadams249@econnect.com"
        ],
        "phoneNumbers": [
            "249-535-2228",
            "249-647-2198"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-02-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ROSAPADI9593",
    "name": {
        "title": "Ms",
        "first": "Rosalind",
        "middle": "N",
        "last": "Padilla",
        "suffix": null
    },
    "address": {
        "streetAddress": "8274 Short Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lower Skeena (Port Edward)",
        "locality1": "BC",
        "locality2": "British Columbia",
        "country": "CA",
        "postalCode": "V0V",
        "geoSpatial": [
            "-129.8986",
            "53.9725"
        ]
    },
    "contact": {
        "email": "rpadilla250@telstra.com",
        "phone": "250-037-9593",
        "socMedia": {
            "linkedin": "rpadilla@linkedin.com"
        }
    },
    "login": {
        "username": "rpadilla",
        "oauth2": "rpadilla@linkedin.com",
        "password": "$2y$10$96TYEIfkGTFhKPNusQ5ls.ljQfvmiTfPrTbLjC7XixtAU8k8Rep8K"
    },
    "otherContact": {
        "emails": [
            "rpadilla250@zain.com"
        ],
        "phoneNumbers": [
            "250-141-4724"
        ],
        "socMedias": [
            {
                "google": "rpadilla@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-02-05"
    },
    "partner": "Y",
    "businessName": "Accomodation Trust Inc"
});
db.users.insertOne(
{
    "userKey": "FIDESHEP9548",
    "name": {
        "title": "Mr",
        "first": "Fidel",
        "middle": "C",
        "last": "Sheppard",
        "suffix": null
    },
    "address": {
        "streetAddress": "6199 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "G\u00f6k\u00e7e",
        "locality1": "D\u00fczce",
        "locality2": "D\u00fczce",
        "country": "TR",
        "postalCode": "81100",
        "geoSpatial": [
            "31.2",
            "40.8167"
        ]
    },
    "contact": {
        "email": "fsheppar251@frontier.com",
        "phone": "251-566-9548",
        "socMedia": {
            "linkedin": "fsheppar@linkedin.com"
        }
    },
    "login": {
        "username": "fsheppar",
        "oauth2": "fsheppar@linkedin.com",
        "password": "$2y$10$RvDATV9HGYwXutnbdBy\/0eaztRk10lj8tgFT2b\/uppIFMjvEeUw86"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-12-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "TEENROSA0603",
    "name": {
        "title": null,
        "first": "Teena",
        "middle": null,
        "last": "Rosales",
        "suffix": null
    },
    "address": {
        "streetAddress": "7326 Long Gully Road",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": "0D",
        "city": "Othery",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "TA7",
        "geoSpatial": [
            "-2.8811",
            "51.0806"
        ]
    },
    "contact": {
        "email": "trosales252@megafon.com",
        "phone": "252-539-0603",
        "socMedia": []
    },
    "login": {
        "username": "trosales",
        "oauth2": null,
        "password": "$2y$10$kJlgVSY22cJLALVyt\/Vhu.o2mo8BplMYq4fxM1M43oNoFLfbcTBb6"
    },
    "otherContact": {
        "emails": [
            "trosales252@bce.com",
            "trosales252@telus.com",
            "trosales252@ais.com"
        ],
        "phoneNumbers": [
            "252-681-8556",
            "252-177-2296",
            "252-251-7390"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-10-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LUCIJARV9887",
    "name": {
        "title": "Ms",
        "first": "Lucille",
        "middle": "O",
        "last": "Jarvis",
        "suffix": null
    },
    "address": {
        "streetAddress": "6382 Big Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Guadalupe",
        "locality1": "Guadalupe",
        "locality2": "Goicoechea",
        "country": "CR",
        "postalCode": "10801",
        "geoSpatial": [
            "-84.0511",
            "9.9486"
        ]
    },
    "contact": {
        "email": "ljarvis253@kpn.com",
        "phone": "253-578-9887",
        "socMedia": {
            "line": "ljarvis@line.com"
        }
    },
    "login": {
        "username": "ljarvis",
        "oauth2": "ljarvis@line.com",
        "password": "$2y$10$uMJ0a0LibBezmfX9.mSPtOg9y6wS\/gyGbTFsSx5oV5wiBsBS.5lgW"
    },
    "otherContact": {
        "emails": [
            "ljarvis253@bce.com",
            "ljarvis253@cerist.com",
            "ljarvis253@bt.com"
        ],
        "phoneNumbers": [
            "253-620-8494",
            "253-093-1634",
            "253-522-2334"
        ],
        "socMedias": [
            {
                "skype": "ljarvis@skype.com"
            },
            {
                "facebook": "ljarvis@facebook.com"
            },
            {
                "twitter": "ljarvis@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-12-13"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CALEBRAN3394",
    "name": {
        "title": "Mr",
        "first": "Caleb",
        "middle": "Q",
        "last": "Brandt",
        "suffix": null
    },
    "address": {
        "streetAddress": "8542 Green Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Stoke sub Hambon",
        "locality1": "England",
        "locality2": "Somerset",
        "country": "GB",
        "postalCode": "TA14",
        "geoSpatial": [
            "-2.7572",
            "50.9302"
        ]
    },
    "contact": {
        "email": "cbrandt254@ote.com",
        "phone": "254-734-3394",
        "socMedia": {
            "linkedin": "cbrandt@linkedin.com"
        }
    },
    "login": {
        "username": "cbrandt",
        "oauth2": "cbrandt@linkedin.com",
        "password": "$2y$10$EakBhk43CNE9A1FGFP4UY.qGsz\/l1pbXl3pVbiShiWE5NwJmYz6oq"
    },
    "otherContact": {
        "emails": [
            "cbrandt254@kpn.com",
            "cbrandt254@econnect.com",
            "cbrandt254@orange.com"
        ],
        "phoneNumbers": [
            "254-294-8351",
            "254-849-3733",
            "254-528-4664"
        ],
        "socMedias": [
            {
                "facebook": "cbrandt@facebook.com"
            },
            {
                "line": "cbrandt@line.com"
            },
            {
                "linkedin": "cbrandt@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-04-07"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARDGAIN3681",
    "name": {
        "title": "Ms",
        "first": "Mardell",
        "middle": "Y",
        "last": "Gaines",
        "suffix": null
    },
    "address": {
        "streetAddress": "2460 Red Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Stonehouse",
        "locality1": "England",
        "locality2": "Gloucestershire",
        "country": "GB",
        "postalCode": "GL10",
        "geoSpatial": [
            "-2.2833",
            "51.75"
        ]
    },
    "contact": {
        "email": "mgaines256@orange.com",
        "phone": "256-608-3681",
        "socMedia": {
            "twitter": "mgaines@twitter.com"
        }
    },
    "login": {
        "username": "mgaines",
        "oauth2": "mgaines@twitter.com",
        "password": "$2y$10$IF3i.PnrjMTguwp3U61xp..e\/Atp.OKmo.TiFFdGAEkqkDMLGuja2"
    },
    "otherContact": {
        "emails": [
            "mgaines256@glasnet.com",
            "mgaines256@ccs.com"
        ],
        "phoneNumbers": [
            "256-435-3037",
            "256-581-3635"
        ],
        "socMedias": [
            {
                "google": "mgaines@google.com"
            },
            {
                "line": "mgaines@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-05-15"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARICOLL2166",
    "name": {
        "title": "Ms",
        "first": "Marisa",
        "middle": "L",
        "last": "Collins",
        "suffix": null
    },
    "address": {
        "streetAddress": "9180 Winding Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Privat-d\u2019Allier",
        "locality1": "Arrondissement du Puy",
        "locality2": "Haute-Loire",
        "country": "FR",
        "postalCode": "43580",
        "geoSpatial": [
            "3.6744",
            "44.9901"
        ]
    },
    "contact": {
        "email": "mcollins257@megafon.com",
        "phone": "257-642-2166",
        "socMedia": {
            "line": "mcollins@line.com"
        }
    },
    "login": {
        "username": "mcollins",
        "oauth2": "mcollins@line.com",
        "password": "$2y$10$FTHPvpjO.vw0coJ\/i85RBeIlZVM\/RGhReaisxLsyUzxjDy.5K.UXm"
    },
    "otherContact": {
        "emails": [
            "mcollins257@cubenet.com",
            "mcollins257@kpn.com",
            "mcollins257@cubenet.com"
        ],
        "phoneNumbers": [
            "257-675-6223",
            "257-183-6654",
            "257-413-7331"
        ],
        "socMedias": [
            {
                "linkedin": "mcollins@linkedin.com"
            },
            {
                "facebook": "mcollins@facebook.com"
            },
            {
                "line": "mcollins@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-02-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARGFELI9542",
    "name": {
        "title": null,
        "first": "Margert",
        "middle": null,
        "last": "Felix",
        "suffix": null
    },
    "address": {
        "streetAddress": "7624 Little Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "41",
        "city": "Maujpuri",
        "locality1": "Jalna",
        "locality2": "Jalna",
        "country": "IN",
        "postalCode": "431214",
        "geoSpatial": [
            "76.0783",
            "19.7996"
        ]
    },
    "contact": {
        "email": "mfelix258@telstra.com",
        "phone": "258-426-9542",
        "socMedia": []
    },
    "login": {
        "username": "mfelix",
        "oauth2": null,
        "password": "$2y$10$Z7ee9LY3\/6Av7F9WT2Ho7.ezQYcRJ.cRl2KtfdPxyhkOuv8TBNDGu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-06-15"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DONNHERR6538",
    "name": {
        "title": "Mr",
        "first": "Donnell",
        "middle": "S",
        "last": "Herrera",
        "suffix": null
    },
    "address": {
        "streetAddress": "1327 Long Mountain Ride",
        "buildingName": "Building F6",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cabramatta West",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2166",
        "geoSpatial": [
            "150.9106",
            "-33.8967"
        ]
    },
    "contact": {
        "email": "dherrera260@softbank.com",
        "phone": "260-078-6538",
        "socMedia": {
            "line": "dherrera@line.com"
        }
    },
    "login": {
        "username": "dherrera",
        "oauth2": "dherrera@line.com",
        "password": "$2y$10$0mv12JcKwIWJ7Vt71E5l.uAQtEN5LIrUgZHimjKfXsnyj2mEvA3Sq"
    },
    "otherContact": {
        "emails": [
            "dherrera260@sktelecom.com"
        ],
        "phoneNumbers": [
            "260-557-2326"
        ],
        "socMedias": [
            {
                "line": "dherrera@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-09-29"
    },
    "partner": "Y",
    "businessName": "Illuminati Associates Company"
});
db.users.insertOne(
{
    "userKey": "JERRGREG6563",
    "name": {
        "title": null,
        "first": "Jerry",
        "middle": null,
        "last": "Gregory",
        "suffix": null
    },
    "address": {
        "streetAddress": "2699 Blue River Ride",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "Hamilton (Westdale \/ Cootes Paradise \/ Ainslie Wood)",
        "locality1": "ON",
        "locality2": "Hamilton",
        "country": "CA",
        "postalCode": "L8S",
        "geoSpatial": [
            "-79.9161",
            "43.2606"
        ]
    },
    "contact": {
        "email": "jgregory261@uunet.com",
        "phone": "261-663-6563",
        "socMedia": []
    },
    "login": {
        "username": "jgregory",
        "oauth2": null,
        "password": "$2y$10$uupJmzTeoGq8Au5G5W.W2Ov3LsUdPh3lruXcI14lTbj9pSh0Aqdj2"
    },
    "otherContact": {
        "emails": [
            "jgregory261@seednet.com",
            "jgregory261@sktelecom.com"
        ],
        "phoneNumbers": [
            "261-922-0292",
            "261-945-7582"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-10-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DANEBALL6375",
    "name": {
        "title": "Ms",
        "first": "Danette",
        "middle": "W",
        "last": "Ballard",
        "suffix": null
    },
    "address": {
        "streetAddress": "2742 Long Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Thorngate",
        "locality1": "SA",
        "locality2": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5082",
        "geoSpatial": [
            "138.5983",
            "-34.8978"
        ]
    },
    "contact": {
        "email": "dballard262@bt.com",
        "phone": "262-000-6375",
        "socMedia": {
            "line": "dballard@line.com"
        }
    },
    "login": {
        "username": "dballard",
        "oauth2": "dballard@line.com",
        "password": "$2y$10$2Ax2sZ\/TpAQPVzx52wx\/Ve8n3MQrT7nleh4\/K5ZaRlEQegzdqXLqm"
    },
    "otherContact": {
        "emails": [
            "dballard262@safaricom.com",
            "dballard262@vivendi.com",
            "dballard262@ptcl.com"
        ],
        "phoneNumbers": [
            "262-377-6219",
            "262-391-7838",
            "262-052-1923"
        ],
        "socMedias": [
            {
                "skype": "dballard@skype.com"
            },
            {
                "line": "dballard@line.com"
            },
            {
                "line": "dballard@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-05-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VEROSHER9621",
    "name": {
        "title": "Ms",
        "first": "Veronique",
        "middle": "N",
        "last": "Sherman",
        "suffix": null
    },
    "address": {
        "streetAddress": "923 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cayenne",
        "locality1": "GF",
        "locality2": "Guyane",
        "country": "GF",
        "postalCode": "97337 CEDEX",
        "geoSpatial": [
            "-52.3333",
            "4.9333"
        ]
    },
    "contact": {
        "email": "vsherman263@tm.com",
        "phone": "263-155-9621",
        "socMedia": {
            "line": "vsherman@line.com"
        }
    },
    "login": {
        "username": "vsherman",
        "oauth2": "vsherman@line.com",
        "password": "$2y$10$F592PzMVGjllk7nZGhlbguUghmDAzeqo7vl3YP3U0saUd2PQwjnku"
    },
    "otherContact": {
        "emails": [
            "vsherman263@telecom.com"
        ],
        "phoneNumbers": [
            "263-124-2188"
        ],
        "socMedias": [
            {
                "twitter": "vsherman@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-07-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "STEPZAMO4361",
    "name": {
        "title": null,
        "first": "Stephen",
        "middle": null,
        "last": "Zamora",
        "suffix": null
    },
    "address": {
        "streetAddress": "1238 Red Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "DE",
        "city": "Eastern Suburbs Mc",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "1330",
        "geoSpatial": [
            "151.2248",
            "-33.8693"
        ]
    },
    "contact": {
        "email": "szamora264@tm.com",
        "phone": "264-702-4361",
        "socMedia": []
    },
    "login": {
        "username": "szamora",
        "oauth2": null,
        "password": "$2y$10$5Dpk8u26K8re0nisHCZsh.kSyT8MTw72hTVhAt\/IF4.I7p.qNfguu"
    },
    "otherContact": {
        "emails": [
            "szamora264@worldnet.com"
        ],
        "phoneNumbers": [
            "264-129-2084"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-08-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SOLOHUFF8460",
    "name": {
        "title": "Mr",
        "first": "Solomon",
        "middle": "B",
        "last": "Huffman",
        "suffix": null
    },
    "address": {
        "streetAddress": "7906 Big Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bertrange",
        "locality1": "LU",
        "locality2": "Bertrange",
        "country": "LU",
        "postalCode": "L-8080",
        "geoSpatial": [
            "6.072",
            "49.6026"
        ]
    },
    "contact": {
        "email": "shuffman265@uunet.com",
        "phone": "265-270-8460",
        "socMedia": {
            "google": "shuffman@google.com"
        }
    },
    "login": {
        "username": "shuffman",
        "oauth2": "shuffman@google.com",
        "password": "$2y$10$GnZ1c8KtZ.f2ewh28X3CGufwWF4cThMYuivWKJ0kU6MyfQUrvnY8u"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-10-04"
    },
    "partner": "Y",
    "businessName": "Bizarro Associates Inc"
});
db.users.insertOne(
{
    "userKey": "IZETRAY3793",
    "name": {
        "title": "Ms",
        "first": "Izetta",
        "middle": "M",
        "last": "Ray",
        "suffix": null
    },
    "address": {
        "streetAddress": "240 Winding Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Madigahalli",
        "locality1": "T Narasipura",
        "locality2": "Mysore",
        "country": "IN",
        "postalCode": "571101",
        "geoSpatial": [
            "76.8481",
            "12.3571"
        ]
    },
    "contact": {
        "email": "iray266@greennet.com",
        "phone": "266-075-3793",
        "socMedia": {
            "facebook": "iray@facebook.com"
        }
    },
    "login": {
        "username": "iray",
        "oauth2": "iray@facebook.com",
        "password": "$2y$10$E\/qCHyN8kRtAUUoeDHvbqOZuCqV0UHl2TUkaSN3o8oobVPbfIsF6G"
    },
    "otherContact": {
        "emails": [
            "iray266@zain.com"
        ],
        "phoneNumbers": [
            "266-755-8777"
        ],
        "socMedias": [
            {
                "linkedin": "iray@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-08-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "WILLMCLA9874",
    "name": {
        "title": null,
        "first": "Willian",
        "middle": null,
        "last": "Mclaughlin",
        "suffix": null
    },
    "address": {
        "streetAddress": "7495 Short Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sandger\u00f0i",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "245",
        "geoSpatial": [
            "-22.7031",
            "64.0381"
        ]
    },
    "contact": {
        "email": "wmclaugh267@ntt.com",
        "phone": "267-135-9874",
        "socMedia": []
    },
    "login": {
        "username": "wmclaugh",
        "oauth2": null,
        "password": "$2y$10$NEgb8aDjzuM\/Xm1QNQRz4uyQC6kRoQicYUr7vGth3rLZK\/cyMwySS"
    },
    "otherContact": {
        "emails": [
            "wmclaugh267@kpn.com",
            "wmclaugh267@bifty.com",
            "wmclaugh267@vodafone.com"
        ],
        "phoneNumbers": [
            "267-735-3573",
            "267-204-1268",
            "267-981-5695"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-11-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LOUIBARN8585",
    "name": {
        "title": "Mr",
        "first": "Louis",
        "middle": "N",
        "last": "Barnes",
        "suffix": null
    },
    "address": {
        "streetAddress": "8319 Winding Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Luncarty",
        "locality1": "Scotland",
        "locality2": "Perth and Kinross",
        "country": "GB",
        "postalCode": "PH1",
        "geoSpatial": [
            "-3.4701",
            "56.4531"
        ]
    },
    "contact": {
        "email": "lbarnes268@telenor.com",
        "phone": "268-692-8585",
        "socMedia": {
            "google": "lbarnes@google.com"
        }
    },
    "login": {
        "username": "lbarnes",
        "oauth2": "lbarnes@google.com",
        "password": "$2y$10$IXic9X7A0EdASdsF3YGcW.njO1rwYXLFOyi\/vO\/fISkri5oxgxQPa"
    },
    "otherContact": {
        "emails": [
            "lbarnes268@ntt.com",
            "lbarnes268@telus.com",
            "lbarnes268@cubenet.com"
        ],
        "phoneNumbers": [
            "268-762-3031",
            "268-505-2016",
            "268-675-5652"
        ],
        "socMedias": [
            {
                "skype": "lbarnes@skype.com"
            },
            {
                "line": "lbarnes@line.com"
            },
            {
                "skype": "lbarnes@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-05-28"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MAXSLOA8628",
    "name": {
        "title": "Mr",
        "first": "Max",
        "middle": "Y",
        "last": "Sloan",
        "suffix": null
    },
    "address": {
        "streetAddress": "9082 Little Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "LA SOMBRA",
        "locality1": "B",
        "locality2": "Buenos Aires",
        "country": "AR",
        "postalCode": "8136",
        "geoSpatial": [
            "-63.35",
            "-38.9167"
        ]
    },
    "contact": {
        "email": "msloan269@millicom.com",
        "phone": "269-274-8628",
        "socMedia": {
            "twitter": "msloan@twitter.com"
        }
    },
    "login": {
        "username": "msloan",
        "oauth2": "msloan@twitter.com",
        "password": "$2y$10$woLSCYYbV8KPtA\/tyQLY\/uTfOXyHDpFSA7qOY8YPxI2mS8lJAjRIe"
    },
    "otherContact": {
        "emails": [
            "msloan269@belgacom.com"
        ],
        "phoneNumbers": [
            "269-174-0026"
        ],
        "socMedias": [
            {
                "facebook": "msloan@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-01-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ROGEROSS8610",
    "name": {
        "title": null,
        "first": "Rogelio",
        "middle": null,
        "last": "Ross",
        "suffix": null
    },
    "address": {
        "streetAddress": "8295 Winding Creek Street",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "52",
        "city": "Denton",
        "locality1": "NC",
        "locality2": "Davidson",
        "country": "US",
        "postalCode": "27239",
        "geoSpatial": [
            "-80.0959",
            "35.6196"
        ]
    },
    "contact": {
        "email": "rross270@icom.com",
        "phone": "270-166-8610",
        "socMedia": []
    },
    "login": {
        "username": "rross",
        "oauth2": null,
        "password": "$2y$10$yKe7YpACg7eP8JCvq5rDa.OsSkN1fP5FjRkQsDavEi4XPckL9cI5C"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-02-24"
    },
    "partner": "Y",
    "businessName": "Friendly Business Ltd"
});
db.users.insertOne(
{
    "userKey": "VERNMONT0506",
    "name": {
        "title": "Mr",
        "first": "Vern",
        "middle": "O",
        "last": "Montgomery",
        "suffix": null
    },
    "address": {
        "streetAddress": "2483 Short Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rivas",
        "locality1": "Rivas",
        "locality2": "P\u00e9rez Zeled\u00f3n",
        "country": "CR",
        "postalCode": "11904",
        "geoSpatial": [
            "-83.6045",
            "9.4842"
        ]
    },
    "contact": {
        "email": "vmontgom271@cerist.com",
        "phone": "271-485-0506",
        "socMedia": {
            "google": "vmontgom@google.com"
        }
    },
    "login": {
        "username": "vmontgom",
        "oauth2": "vmontgom@google.com",
        "password": "$2y$10$o3A8JHeuofQEPLOf12TXhOMnWmDnn8cobSOj6t1LeTxnmywTltA.W"
    },
    "otherContact": {
        "emails": [
            "vmontgom271@tt.com",
            "vmontgom271@chunghwa.com",
            "vmontgom271@rogers.com"
        ],
        "phoneNumbers": [
            "271-234-3607",
            "271-594-0795",
            "271-997-9488"
        ],
        "socMedias": [
            {
                "facebook": "vmontgom@facebook.com"
            },
            {
                "skype": "vmontgom@skype.com"
            },
            {
                "linkedin": "vmontgom@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-12-03"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ROSASEXT0393",
    "name": {
        "title": "Ms",
        "first": "Rosanne",
        "middle": "E",
        "last": "Sexton",
        "suffix": null
    },
    "address": {
        "streetAddress": "6650 Long Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Balwa Dakhli",
        "locality1": "NA",
        "locality2": "Gorakhpur",
        "country": "IN",
        "postalCode": "273402",
        "geoSpatial": [
            "83.3149",
            "26.4455"
        ]
    },
    "contact": {
        "email": "rsexton272@belgacom.com",
        "phone": "272-003-0393",
        "socMedia": {
            "linkedin": "rsexton@linkedin.com"
        }
    },
    "login": {
        "username": "rsexton",
        "oauth2": "rsexton@linkedin.com",
        "password": "$2y$10$mwidCHy7fInDMcFFK1uChe7Lgzn4Fz7DItSfUIa\/dN5CjthLgR7fC"
    },
    "otherContact": {
        "emails": [
            "rsexton272@turkcell.com",
            "rsexton272@icom.com"
        ],
        "phoneNumbers": [
            "272-943-9493",
            "272-817-4745"
        ],
        "socMedias": [
            {
                "twitter": "rsexton@twitter.com"
            },
            {
                "line": "rsexton@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-11-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHERWILC7777",
    "name": {
        "title": null,
        "first": "Cherri",
        "middle": null,
        "last": "Wilcox",
        "suffix": null
    },
    "address": {
        "streetAddress": "264 Blue Creek Way",
        "buildingName": "Building 98",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0414\u0443\u0431\u0438 (\u0417\u0430\u0433\u0430\u0442\u044f\u043d\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
        "locality1": "Irshavskyi",
        "locality2": "Irshavskyi",
        "country": "UA",
        "postalCode": "90112",
        "geoSpatial": [
            "22.9716",
            "48.1924"
        ]
    },
    "contact": {
        "email": "cwilcox273@ptcl.com",
        "phone": "273-597-7777",
        "socMedia": []
    },
    "login": {
        "username": "cwilcox",
        "oauth2": null,
        "password": "$2y$10$9sJep2k9ad5Gbtj2e.LdLOyTb0wrLNYvG6HnzKkMPd2HEddwepb0K"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-08-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRITBLAC2018",
    "name": {
        "title": "Mr",
        "first": "Britt",
        "middle": "X",
        "last": "Blackwell",
        "suffix": null
    },
    "address": {
        "streetAddress": "699 Green Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Winnipeg (River Heights Central)",
        "locality1": "MB",
        "locality2": "Winnipeg",
        "country": "CA",
        "postalCode": "R3M",
        "geoSpatial": [
            "-97.1665",
            "49.8625"
        ]
    },
    "contact": {
        "email": "bblackwe274@cerist.com",
        "phone": "274-397-2018",
        "socMedia": {
            "twitter": "bblackwe@twitter.com"
        }
    },
    "login": {
        "username": "bblackwe",
        "oauth2": "bblackwe@twitter.com",
        "password": "$2y$10$4XlwdPrtCt9AzEtFZnhzhOMAJDavg3CDt7utywcjmPxBIbXuk.Jd."
    },
    "otherContact": {
        "emails": [
            "bblackwe274@ui.com",
            "bblackwe274@sprint.com",
            "bblackwe274@icom.com"
        ],
        "phoneNumbers": [
            "274-585-5049",
            "274-647-9852",
            "274-480-9481"
        ],
        "socMedias": [
            {
                "line": "bblackwe@line.com"
            },
            {
                "facebook": "bblackwe@facebook.com"
            },
            {
                "skype": "bblackwe@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-12-03"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHANKHAN8305",
    "name": {
        "title": "Ms",
        "first": "Shanta",
        "middle": "O",
        "last": "Khan",
        "suffix": null
    },
    "address": {
        "streetAddress": "1849 Green Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Helbetschlag",
        "locality1": "Gr\u00fcnbach",
        "locality2": "Politischer Bezirk Freistadt",
        "country": "AT",
        "postalCode": "4261",
        "geoSpatial": [
            "14.5078",
            "48.5429"
        ]
    },
    "contact": {
        "email": "skhan275@vivendi.com",
        "phone": "275-754-8305",
        "socMedia": {
            "facebook": "skhan@facebook.com"
        }
    },
    "login": {
        "username": "skhan",
        "oauth2": "skhan@facebook.com",
        "password": "$2y$10$B5qiEHogUmCnJotqatKbUOgMSaRxs3N4zeQI8n02htLYlC9Ib.CmG"
    },
    "otherContact": {
        "emails": [
            "skhan275@softbank.com"
        ],
        "phoneNumbers": [
            "275-875-3426"
        ],
        "socMedias": [
            {
                "line": "skhan@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-09-14"
    },
    "partner": "Y",
    "businessName": "Specialty Holdings Inc"
});
db.users.insertOne(
{
    "userKey": "VIRGLOPE2985",
    "name": {
        "title": null,
        "first": "Virginia",
        "middle": null,
        "last": "Lopez",
        "suffix": null
    },
    "address": {
        "streetAddress": "727 Winding Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "62",
        "city": "Front Royal",
        "locality1": "VA",
        "locality2": "Warren",
        "country": "US",
        "postalCode": "22630",
        "geoSpatial": [
            "-78.1796",
            "38.9268"
        ]
    },
    "contact": {
        "email": "vlopez276@kpn.com",
        "phone": "276-939-2985",
        "socMedia": []
    },
    "login": {
        "username": "vlopez",
        "oauth2": null,
        "password": "$2y$10$J0g4qSSZWvHQoq3E6FyYXuVVWHufPa\/PPy4ODIkdxn0LkSc2hnm.a"
    },
    "otherContact": {
        "emails": [
            "vlopez276@telesystems.com",
            "vlopez276@cubenet.com",
            "vlopez276@relcom.com"
        ],
        "phoneNumbers": [
            "276-314-1041",
            "276-889-8681",
            "276-218-6877"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-09-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JENNLARS4362",
    "name": {
        "title": "Ms",
        "first": "Jennette",
        "middle": "X",
        "last": "Larsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "7292 Little Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hegymagas",
        "locality1": "VE",
        "locality2": "Veszpr\u00e9m",
        "country": "HU",
        "postalCode": "8265",
        "geoSpatial": [
            "17.4333",
            "46.8333"
        ]
    },
    "contact": {
        "email": "jlarsen277@ote.com",
        "phone": "277-554-4362",
        "socMedia": {
            "google": "jlarsen@google.com"
        }
    },
    "login": {
        "username": "jlarsen",
        "oauth2": "jlarsen@google.com",
        "password": "$2y$10$7s6Pi6KG.mPTBl4mNI0LV.DPPRZQQDiLmmPiyst1loCdKf2B9\/PmW"
    },
    "otherContact": {
        "emails": [
            "jlarsen277@tm.com"
        ],
        "phoneNumbers": [
            "277-412-3494"
        ],
        "socMedias": [
            {
                "twitter": "jlarsen@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-02-08"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VAUGACEV2540",
    "name": {
        "title": "Mr",
        "first": "Vaughn",
        "middle": "O",
        "last": "Acevedo",
        "suffix": null
    },
    "address": {
        "streetAddress": "4833 Blue Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Woori Yallock",
        "locality1": "VIC",
        "locality2": "RINGWOOD",
        "country": "AU",
        "postalCode": "3139",
        "geoSpatial": [
            "145.5382",
            "-37.7806"
        ]
    },
    "contact": {
        "email": "vacevedo278@jio.com",
        "phone": "278-215-2540",
        "socMedia": {
            "linkedin": "vacevedo@linkedin.com"
        }
    },
    "login": {
        "username": "vacevedo",
        "oauth2": "vacevedo@linkedin.com",
        "password": "$2y$10$\/cx3jCmnihaEZBpeg39UROtgHelBBt0M7hlGxaRPmdj48CcZ.8QI6"
    },
    "otherContact": {
        "emails": [
            "vacevedo278@telesystems.com"
        ],
        "phoneNumbers": [
            "278-007-5638"
        ],
        "socMedias": [
            {
                "twitter": "vacevedo@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-01-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "OLENWOOD1587",
    "name": {
        "title": null,
        "first": "Olen",
        "middle": null,
        "last": "Wood",
        "suffix": null
    },
    "address": {
        "streetAddress": "6877 Red Gulch Road",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": null,
        "city": "Riedlkam",
        "locality1": "Lamprechtshausen",
        "locality2": "Politischer Bezirk Salzburg-Umgebung",
        "country": "AT",
        "postalCode": "5112",
        "geoSpatial": [
            "12.9833",
            "47.9833"
        ]
    },
    "contact": {
        "email": "owood279@glasnet.com",
        "phone": "279-642-1587",
        "socMedia": []
    },
    "login": {
        "username": "owood",
        "oauth2": null,
        "password": "$2y$10$fKOi9OiC8GoDAiaW4dJ7tesJ.tFtggvzEnUka1Boqo\/liaLWyqBie"
    },
    "otherContact": {
        "emails": [
            "owood279@cubenet.com",
            "owood279@telkom.com"
        ],
        "phoneNumbers": [
            "279-149-1360",
            "279-320-3152"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-04-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DARRMCKE7501",
    "name": {
        "title": "Mr",
        "first": "Darren",
        "middle": "N",
        "last": "Mckenzie",
        "suffix": null
    },
    "address": {
        "streetAddress": "5152 Blue Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "East York (Leaside)",
        "locality1": "ON",
        "locality2": "East York ",
        "country": "CA",
        "postalCode": "M4G",
        "geoSpatial": [
            "-79.3644",
            "43.7124"
        ]
    },
    "contact": {
        "email": "dmckenzi280@ui.com",
        "phone": "280-186-7501",
        "socMedia": {
            "facebook": "dmckenzi@facebook.com"
        }
    },
    "login": {
        "username": "dmckenzi",
        "oauth2": "dmckenzi@facebook.com",
        "password": "$2y$10$TuVoGrCrcpEMCzfk\/0zEu.EIIiHcxw2ojEasgoVPwLJVcv6aajdvu"
    },
    "otherContact": {
        "emails": [
            "dmckenzi280@belgacom.com",
            "dmckenzi280@telefonica.com"
        ],
        "phoneNumbers": [
            "280-109-0631",
            "280-447-2223"
        ],
        "socMedias": [
            {
                "line": "dmckenzi@line.com"
            },
            {
                "line": "dmckenzi@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-01-21"
    },
    "partner": "Y",
    "businessName": "Accomodation Industries Inc"
});
db.users.insertOne(
{
    "userKey": "JOHNPOTT2703",
    "name": {
        "title": "Mr",
        "first": "Johnathan",
        "middle": "F",
        "last": "Potter",
        "suffix": null
    },
    "address": {
        "streetAddress": "2128 Winding Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tataresti",
        "locality1": "Straseni",
        "locality2": "Straseni",
        "country": "MD",
        "postalCode": "MD-3732",
        "geoSpatial": [
            "28.5386",
            "47.2044"
        ]
    },
    "contact": {
        "email": "jpotter281@telenor.com",
        "phone": "281-779-2703",
        "socMedia": {
            "skype": "jpotter@skype.com"
        }
    },
    "login": {
        "username": "jpotter",
        "oauth2": "jpotter@skype.com",
        "password": "$2y$10$gxGpJBv7jJ0GFkAk80Xmj.Yuze1TTBJEocYsWkxxduUrDMiiYPK7G"
    },
    "otherContact": {
        "emails": [
            "jpotter281@ktc.com",
            "jpotter281@pldt.com",
            "jpotter281@ui.com"
        ],
        "phoneNumbers": [
            "281-007-5047",
            "281-781-3820",
            "281-823-1848"
        ],
        "socMedias": [
            {
                "line": "jpotter@line.com"
            },
            {
                "linkedin": "jpotter@linkedin.com"
            },
            {
                "facebook": "jpotter@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1993-04-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LINCCERV3656",
    "name": {
        "title": "Dr",
        "first": "Lincoln",
        "middle": null,
        "last": "Cervantes",
        "suffix": "III"
    },
    "address": {
        "streetAddress": "5090 Green Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "14",
        "city": "Pallichal",
        "locality1": "Thiruvananthapuram",
        "locality2": "Thiruvananthapuram",
        "country": "IN",
        "postalCode": "695020",
        "geoSpatial": [
            "76.9305",
            "8.4954"
        ]
    },
    "contact": {
        "email": "lcervant282@belgacom.com",
        "phone": "282-324-3656",
        "socMedia": []
    },
    "login": {
        "username": "lcervant",
        "oauth2": null,
        "password": "$2y$10$ihMjLRMXu0VZCxvtV5E.3u.GmAKA5PFSVahb2uBjnPTThJ686nuM2"
    },
    "otherContact": {
        "emails": [
            "lcervant282@airtel.com",
            "lcervant282@econnect.com"
        ],
        "phoneNumbers": [
            "282-023-5598",
            "282-947-1260"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-07-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DEDRKIRB0858",
    "name": {
        "title": "Ms",
        "first": "Dedra",
        "middle": "V",
        "last": "Kirby",
        "suffix": null
    },
    "address": {
        "streetAddress": "8099 Blue Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kalenberg",
        "locality1": "Steenwijkerland",
        "locality2": "Steenwijkerland",
        "country": "NL",
        "postalCode": "8377",
        "geoSpatial": [
            "5.957",
            "52.7784"
        ]
    },
    "contact": {
        "email": "dkirby283@ote.com",
        "phone": "283-848-0858",
        "socMedia": {
            "google": "dkirby@google.com"
        }
    },
    "login": {
        "username": "dkirby",
        "oauth2": "dkirby@google.com",
        "password": "$2y$10$WRQXzLbAL6RjFasZShM6pOAuOpyMuOaBWiRpCZwY24fGDT2nS7drm"
    },
    "otherContact": {
        "emails": [
            "dkirby283@ooredoo.com",
            "dkirby283@millicom.com",
            "dkirby283@bifty.com"
        ],
        "phoneNumbers": [
            "283-481-6045",
            "283-298-6702",
            "283-267-6536"
        ],
        "socMedias": [
            {
                "linkedin": "dkirby@linkedin.com"
            },
            {
                "skype": "dkirby@skype.com"
            },
            {
                "google": "dkirby@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-05-24"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JEFFHEND7077",
    "name": {
        "title": "Mr",
        "first": "Jefferson",
        "middle": "R",
        "last": "Henderson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7714 Short Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cellan",
        "locality1": "Wales",
        "locality2": "Ceredigion",
        "country": "GB",
        "postalCode": "SA48",
        "geoSpatial": [
            "-4.0343",
            "52.1231"
        ]
    },
    "contact": {
        "email": "jhenders284@ccs.com",
        "phone": "284-687-7077",
        "socMedia": {
            "twitter": "jhenders@twitter.com"
        }
    },
    "login": {
        "username": "jhenders",
        "oauth2": "jhenders@twitter.com",
        "password": "$2y$10$iR18AKYKO5n95dLp2GO9\/uct4.p85XNfXNQlrhB26zA3k8f8pa03e"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-09-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "REGIBERR2743",
    "name": {
        "title": "Dr",
        "first": "Regine",
        "middle": null,
        "last": "Berry",
        "suffix": "Jr"
    },
    "address": {
        "streetAddress": "1377 Green Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Mata",
        "locality1": "NAY",
        "locality2": "Del Nayar",
        "country": "MX",
        "postalCode": "63537",
        "geoSpatial": [
            "-104.7576",
            "21.9727"
        ]
    },
    "contact": {
        "email": "rberry285@tm.com",
        "phone": "285-793-2743",
        "socMedia": []
    },
    "login": {
        "username": "rberry",
        "oauth2": null,
        "password": "$2y$10$9vo3fbTyNPa9ty02PbhZAeDYN6Nua74y8i1YA.f3xq3vQk5mi1fdq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-12-06"
    },
    "partner": "Y",
    "businessName": "Nonstop Industries Ltd"
});
db.users.insertOne(
{
    "userKey": "JERRGLAS7492",
    "name": {
        "title": "Mr",
        "first": "Jerry",
        "middle": "F",
        "last": "Glass",
        "suffix": null
    },
    "address": {
        "streetAddress": "4672 Big Bridge Avenue",
        "buildingName": "Building A6",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hardy",
        "locality1": "AR",
        "locality2": "Sharp",
        "country": "US",
        "postalCode": "72542",
        "geoSpatial": [
            "-91.411",
            "36.3227"
        ]
    },
    "contact": {
        "email": "jglass286@ui.com",
        "phone": "286-412-7492",
        "socMedia": {
            "facebook": "jglass@facebook.com"
        }
    },
    "login": {
        "username": "jglass",
        "oauth2": "jglass@facebook.com",
        "password": "$2y$10$wQXLXlIoyvFgz1wZRv1tBO0papwdwMmjJSi.ZboDybly1dttl6cs6"
    },
    "otherContact": {
        "emails": [
            "jglass286@apicnet.com",
            "jglass286@telekom.com",
            "jglass286@bt.com"
        ],
        "phoneNumbers": [
            "286-005-6736",
            "286-646-1493",
            "286-120-2743"
        ],
        "socMedias": [
            {
                "skype": "jglass@skype.com"
            },
            {
                "line": "jglass@line.com"
            },
            {
                "twitter": "jglass@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-05-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ISIDMATT5433",
    "name": {
        "title": "Ms",
        "first": "Isidra",
        "middle": "O",
        "last": "Matthews",
        "suffix": null
    },
    "address": {
        "streetAddress": "3198 Green Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Koski As",
        "locality1": "Salo",
        "locality2": "Salo",
        "country": "FI",
        "postalCode": "25560",
        "geoSpatial": [
            "23.2721",
            "60.1847"
        ]
    },
    "contact": {
        "email": "imatthew287@frontier.com",
        "phone": "287-186-5433",
        "socMedia": {
            "skype": "imatthew@skype.com"
        }
    },
    "login": {
        "username": "imatthew",
        "oauth2": "imatthew@skype.com",
        "password": "$2y$10$2Y69U1p760Rp55MwDj7sxuV9NoeLzNvLBDZDER6\/35pkZT4WKj9cq"
    },
    "otherContact": {
        "emails": [
            "imatthew287@tm.com",
            "imatthew287@nii.com"
        ],
        "phoneNumbers": [
            "287-735-9416",
            "287-921-9240"
        ],
        "socMedias": [
            {
                "linkedin": "imatthew@linkedin.com"
            },
            {
                "skype": "imatthew@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-04-30"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "NANBENT6806",
    "name": {
        "title": "Dr",
        "first": "Nan",
        "middle": null,
        "last": "Bentley",
        "suffix": "III"
    },
    "address": {
        "streetAddress": "9314 Big Bridge Road",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": "7A",
        "city": "Tolga",
        "locality1": "QLD",
        "locality2": "NORTH QLD",
        "country": "AU",
        "postalCode": "4882",
        "geoSpatial": [
            "145.4833",
            "-17.2333"
        ]
    },
    "contact": {
        "email": "nbentley288@telkom.com",
        "phone": "288-453-6806",
        "socMedia": []
    },
    "login": {
        "username": "nbentley",
        "oauth2": null,
        "password": "$2y$10$pX\/P4xER3qhXPE6szdzcV..ihltETnJYYIfdc.6JODlPSmhcvM58G"
    },
    "otherContact": {
        "emails": [
            "nbentley288@movil.com",
            "nbentley288@telesystems.com"
        ],
        "phoneNumbers": [
            "288-225-1138",
            "288-747-5893"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-08-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ANNARAMI2278",
    "name": {
        "title": "Ms",
        "first": "Annamaria",
        "middle": "Z",
        "last": "Ramirez",
        "suffix": null
    },
    "address": {
        "streetAddress": "4124 Winding Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lupton",
        "locality1": "MI",
        "locality2": "Ogemaw",
        "country": "US",
        "postalCode": "48635",
        "geoSpatial": [
            "-83.9905",
            "44.3976"
        ]
    },
    "contact": {
        "email": "aramirez290@airtel.com",
        "phone": "290-119-2278",
        "socMedia": {
            "line": "aramirez@line.com"
        }
    },
    "login": {
        "username": "aramirez",
        "oauth2": "aramirez@line.com",
        "password": "$2y$10$5WTeCrXOcag6pmazhdghVOCw2QUuvQJoZ55\/Kp0DwVXqejc9oPXFi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-04-20"
    },
    "partner": "Y",
    "businessName": "Round the Clock Business LLC"
});
db.users.insertOne(
{
    "userKey": "VANCSTOU3053",
    "name": {
        "title": "Mr",
        "first": "Vance",
        "middle": "S",
        "last": "Stout",
        "suffix": null
    },
    "address": {
        "streetAddress": "6910 Blue Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Riverside",
        "locality1": "VIC",
        "locality2": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3401",
        "geoSpatial": [
            "141.9796",
            "-36.7717"
        ]
    },
    "contact": {
        "email": "vstout292@centurylink.com",
        "phone": "292-570-3053",
        "socMedia": {
            "facebook": "vstout@facebook.com"
        }
    },
    "login": {
        "username": "vstout",
        "oauth2": "vstout@facebook.com",
        "password": "$2y$10$rjtFpC9PMkcKGR6wzbIp2OpF6J996F1jcDzPoIEsXITUDbNSkV7Le"
    },
    "otherContact": {
        "emails": [
            "vstout292@unicom.com",
            "vstout292@cci.com"
        ],
        "phoneNumbers": [
            "292-225-6147",
            "292-107-1767"
        ],
        "socMedias": [
            {
                "twitter": "vstout@twitter.com"
            },
            {
                "skype": "vstout@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-09-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARCFARL9551",
    "name": {
        "title": null,
        "first": "Marcellus",
        "middle": null,
        "last": "Farley",
        "suffix": null
    },
    "address": {
        "streetAddress": "780 Big Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "82",
        "city": "Hoyleton",
        "locality1": "SA",
        "locality2": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5453",
        "geoSpatial": [
            "138.55",
            "-34.0333"
        ]
    },
    "contact": {
        "email": "mfarley294@bt.com",
        "phone": "294-234-9551",
        "socMedia": []
    },
    "login": {
        "username": "mfarley",
        "oauth2": null,
        "password": "$2y$10$4glogteBAp.8gGKWiwYvOeiEI8OaUUN8xk8hUr48p79q3LnqanUya"
    },
    "otherContact": {
        "emails": [
            "mfarley294@bt.com",
            "mfarley294@unicom.com",
            "mfarley294@ntt.com"
        ],
        "phoneNumbers": [
            "294-093-4891",
            "294-440-8472",
            "294-139-4008"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-11-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JAVIWADE6467",
    "name": {
        "title": "Mr",
        "first": "Javier",
        "middle": "R",
        "last": "Wade",
        "suffix": null
    },
    "address": {
        "streetAddress": "1852 Big Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paltanen",
        "locality1": "Pieks\u00e4m\u00e4ki",
        "locality2": "Pieks\u00e4m\u00e4ki",
        "country": "FI",
        "postalCode": "77110",
        "geoSpatial": [
            "26.8998",
            "62.3293"
        ]
    },
    "contact": {
        "email": "jwade295@ui.com",
        "phone": "295-739-6467",
        "socMedia": {
            "twitter": "jwade@twitter.com"
        }
    },
    "login": {
        "username": "jwade",
        "oauth2": "jwade@twitter.com",
        "password": "$2y$10$pXcRmH72vq32B.bImKIai.Ncp4Nm3Nro26ff0YlGbznJF2rAPyR9m"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-11-21"
    },
    "partner": "Y",
    "businessName": "Accomodation Associates"
});
db.users.insertOne(
{
    "userKey": "DANISPEA8799",
    "name": {
        "title": "Mr",
        "first": "Danial",
        "middle": "A",
        "last": "Spears",
        "suffix": null
    },
    "address": {
        "streetAddress": "9481 Big Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cowell",
        "locality1": "SA",
        "locality2": "SA FAR",
        "country": "AU",
        "postalCode": "5602",
        "geoSpatial": [
            "136.9212",
            "-33.6823"
        ]
    },
    "contact": {
        "email": "dspears296@singtel.com",
        "phone": "296-232-8799",
        "socMedia": {
            "twitter": "dspears@twitter.com"
        }
    },
    "login": {
        "username": "dspears",
        "oauth2": "dspears@twitter.com",
        "password": "$2y$10$UF4ia0lHUT9.dBbvp7nMSeCLqG\/JP1SWjDt38IUfd8BlFam1oyo5e"
    },
    "otherContact": {
        "emails": [
            "dspears296@apicnet.com"
        ],
        "phoneNumbers": [
            "296-187-6721"
        ],
        "socMedias": [
            {
                "facebook": "dspears@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-05-24"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CASSRAMO3178",
    "name": {
        "title": null,
        "first": "Cassey",
        "middle": null,
        "last": "Ramos",
        "suffix": null
    },
    "address": {
        "streetAddress": "9507 Short Bend Way",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Nebiler",
        "locality1": "Serik",
        "locality2": "Serik",
        "country": "TR",
        "postalCode": "07541",
        "geoSpatial": [
            "30.9394",
            "37.0267"
        ]
    },
    "contact": {
        "email": "cramos297@bt.com",
        "phone": "297-802-3178",
        "socMedia": []
    },
    "login": {
        "username": "cramos",
        "oauth2": null,
        "password": "$2y$10$HLG\/RLwG3DKjN6AlzUsXLuBvzZTTho0lNgANbA83osR6SKnI1ORw2"
    },
    "otherContact": {
        "emails": [
            "cramos297@cerist.com",
            "cramos297@econnect.com"
        ],
        "phoneNumbers": [
            "297-568-5586",
            "297-147-3841"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-07-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KIMBSHEP7619",
    "name": {
        "title": "Ms",
        "first": "Kimber",
        "middle": "V",
        "last": "Sheppard",
        "suffix": null
    },
    "address": {
        "streetAddress": "2997 Short Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jalag",
        "locality1": "Jaisinghpur",
        "locality2": "Kangra",
        "country": "IN",
        "postalCode": "176094",
        "geoSpatial": [
            "77.2546",
            "31.1747"
        ]
    },
    "contact": {
        "email": "ksheppar298@cerist.com",
        "phone": "298-929-7619",
        "socMedia": {
            "google": "ksheppar@google.com"
        }
    },
    "login": {
        "username": "ksheppar",
        "oauth2": "ksheppar@google.com",
        "password": "$2y$10$idxVgrLRWZRMupm0TZdiZeFCCkLx7VPba1BWmSzwS\/EHit3S0Vila"
    },
    "otherContact": {
        "emails": [
            "ksheppar298@telstra.com"
        ],
        "phoneNumbers": [
            "298-533-4502"
        ],
        "socMedias": [
            {
                "linkedin": "ksheppar@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-09-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SAGEDUDL7316",
    "name": {
        "title": "Ms",
        "first": "Sage",
        "middle": "Y",
        "last": "Dudley",
        "suffix": null
    },
    "address": {
        "streetAddress": "2584 Red River Ride",
        "buildingName": "Building DE",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bonehill",
        "locality1": "England",
        "locality2": "Staffordshire",
        "country": "GB",
        "postalCode": "B78",
        "geoSpatial": [
            "-1.6748",
            "52.6051"
        ]
    },
    "contact": {
        "email": "sdudley299@jio.com",
        "phone": "299-373-7316",
        "socMedia": {
            "google": "sdudley@google.com"
        }
    },
    "login": {
        "username": "sdudley",
        "oauth2": "sdudley@google.com",
        "password": "$2y$10$355efGBy5wmiqK1sZ5jLoujDl1i2WTaZ3mrwbTOl7eTZPnqG5eOi6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-09-08"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "FELEDUNC5887",
    "name": {
        "title": null,
        "first": "Felecia",
        "middle": null,
        "last": "Duncan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2923 Green Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "68",
        "city": "Kuchawada",
        "locality1": "Dhanera",
        "locality2": "Banaskantha",
        "country": "IN",
        "postalCode": "385545",
        "geoSpatial": [
            "72.263",
            "24.4537"
        ]
    },
    "contact": {
        "email": "fduncan300@etisalat.com",
        "phone": "300-924-5887",
        "socMedia": []
    },
    "login": {
        "username": "fduncan",
        "oauth2": null,
        "password": "$2y$10$ZPHkN9J7L7H1F\/VoGxPnzOyiBtb6B2pyqq.lGdJmL6TkfDR9UjKES"
    },
    "otherContact": {
        "emails": [
            "fduncan300@vimpelcom.com",
            "fduncan300@sktelecom.com"
        ],
        "phoneNumbers": [
            "300-503-0801",
            "300-321-9392"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-01-23"
    },
    "partner": "Y",
    "businessName": "Ninety Nine Percenter Holdings"
});
db.users.insertOne(
{
    "userKey": "GAVISTRO2472",
    "name": {
        "title": "Mr",
        "first": "Gavin",
        "middle": "D",
        "last": "Strong",
        "suffix": null
    },
    "address": {
        "streetAddress": "2478 Little Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eagle Bay",
        "locality1": "WA",
        "locality2": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6281",
        "geoSpatial": [
            "115.0811",
            "-33.6164"
        ]
    },
    "contact": {
        "email": "gstrong302@openworld.com",
        "phone": "302-089-2472",
        "socMedia": {
            "twitter": "gstrong@twitter.com"
        }
    },
    "login": {
        "username": "gstrong",
        "oauth2": "gstrong@twitter.com",
        "password": "$2y$10$D4kw0vSsPmVJrCYAjFW13OvtYoE5jEDgYeSBwO926DtDX9Jbxl9LG"
    },
    "otherContact": {
        "emails": [
            "gstrong302@lookdata.com",
            "gstrong302@uunet.com"
        ],
        "phoneNumbers": [
            "302-220-9878",
            "302-593-5245"
        ],
        "socMedias": [
            {
                "twitter": "gstrong@twitter.com"
            },
            {
                "linkedin": "gstrong@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-09-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ERNIQUIN0854",
    "name": {
        "title": null,
        "first": "Ernie",
        "middle": null,
        "last": "Quinn",
        "suffix": null
    },
    "address": {
        "streetAddress": "7566 Winding Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Sampsons",
        "locality1": "Guernsey Channel Islands",
        "locality2": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY2",
        "geoSpatial": [
            "-2.6",
            "49.45"
        ]
    },
    "contact": {
        "email": "equinn303@vivendi.com",
        "phone": "303-855-0854",
        "socMedia": []
    },
    "login": {
        "username": "equinn",
        "oauth2": null,
        "password": "$2y$10$k3w1qYtH6fv\/ASWeZz.Hj.9DSlgCX8aGsLPiMuZUNq6ggp39b7tIO"
    },
    "otherContact": {
        "emails": [
            "equinn303@optus.com",
            "equinn303@jio.com"
        ],
        "phoneNumbers": [
            "303-597-4652",
            "303-180-9538"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-03-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRYORHOD1538",
    "name": {
        "title": "Mr",
        "first": "Bryon",
        "middle": "Q",
        "last": "Rhodes",
        "suffix": null
    },
    "address": {
        "streetAddress": "4772 Long Gully Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Halvalli",
        "locality1": "NA",
        "locality2": "Uttara Kannada",
        "country": "IN",
        "postalCode": "581314",
        "geoSpatial": [
            "74.5968",
            "14.7271"
        ]
    },
    "contact": {
        "email": "brhodes304@frontier.com",
        "phone": "304-804-1538",
        "socMedia": {
            "line": "brhodes@line.com"
        }
    },
    "login": {
        "username": "brhodes",
        "oauth2": "brhodes@line.com",
        "password": "$2y$10$T6Y1kUbAKEz9dcpcU3kq3Ol7ExJusHDD2spJTSHsV2ZTiKt9SsjnS"
    },
    "otherContact": {
        "emails": [
            "brhodes304@frontier.com"
        ],
        "phoneNumbers": [
            "304-789-9689"
        ],
        "socMedias": [
            {
                "skype": "brhodes@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-09-15"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JAYCAST8617",
    "name": {
        "title": "Mr",
        "first": "Jay",
        "middle": "T",
        "last": "Castillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "5808 Short Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cayenne",
        "locality1": "GF",
        "locality2": "Guyane",
        "country": "GF",
        "postalCode": "97337 CEDEX",
        "geoSpatial": [
            "-52.3333",
            "4.9333"
        ]
    },
    "contact": {
        "email": "jcastill305@swisscom.com",
        "phone": "305-255-8617",
        "socMedia": {
            "twitter": "jcastill@twitter.com"
        }
    },
    "login": {
        "username": "jcastill",
        "oauth2": "jcastill@twitter.com",
        "password": "$2y$10$.Rrg8GPIqakP6tkTGk6eFOCVO.hv.JXY2QzXBrh3fJMn3ckiBXxbK"
    },
    "otherContact": {
        "emails": [
            "jcastill305@kddi.com",
            "jcastill305@mtn.com"
        ],
        "phoneNumbers": [
            "305-267-4101",
            "305-680-4743"
        ],
        "socMedias": [
            {
                "google": "jcastill@google.com"
            },
            {
                "twitter": "jcastill@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-01-04"
    },
    "partner": "Y",
    "businessName": "Bizarro Business"
});
db.users.insertOne(
{
    "userKey": "WALTGARN9368",
    "name": {
        "title": null,
        "first": "Waltraud",
        "middle": null,
        "last": "Garner",
        "suffix": null
    },
    "address": {
        "streetAddress": "8105 Short Mountain Way",
        "buildingName": null,
        "floor": 9,
        "roomAptCondoFlat": "F1",
        "city": "Wandearah",
        "locality1": "SA",
        "locality2": "South Australia",
        "country": "AU",
        "postalCode": "5523",
        "geoSpatial": [
            "138.171",
            "-33.3949"
        ]
    },
    "contact": {
        "email": "wgarner306@telia.com",
        "phone": "306-493-9368",
        "socMedia": []
    },
    "login": {
        "username": "wgarner",
        "oauth2": null,
        "password": "$2y$10$FJZihOMGdIEDpLFcjULs\/uF3yJ.Nze0LKEzDplRrZRvYXNIFnctm6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-01-08"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ARLECOBB5480",
    "name": {
        "title": "Ms",
        "first": "Arlean",
        "middle": "G",
        "last": "Cobb",
        "suffix": null
    },
    "address": {
        "streetAddress": "36 Short Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dogana",
        "locality1": null,
        "locality2": null,
        "country": "SM",
        "postalCode": "47891",
        "geoSpatial": [
            "12.4905",
            "43.9803"
        ]
    },
    "contact": {
        "email": "acobb307@jio.com",
        "phone": "307-089-5480",
        "socMedia": {
            "line": "acobb@line.com"
        }
    },
    "login": {
        "username": "acobb",
        "oauth2": "acobb@line.com",
        "password": "$2y$10$ctyxkoHGGNXwFhUZ0Qscl.ARtZyeIJ7DbsJdYfZgf6traBSN2.mCe"
    },
    "otherContact": {
        "emails": [
            "acobb307@uunet.com"
        ],
        "phoneNumbers": [
            "307-599-6407"
        ],
        "socMedias": [
            {
                "google": "acobb@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-10-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARSMORR9887",
    "name": {
        "title": "Mr",
        "first": "Marshall",
        "middle": "S",
        "last": "Morris",
        "suffix": null
    },
    "address": {
        "streetAddress": "3786 Big Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Puraina Bhawani Bux",
        "locality1": "Nanpara",
        "locality2": "Bahraich",
        "country": "IN",
        "postalCode": "271865",
        "geoSpatial": [
            "81.5568",
            "27.7089"
        ]
    },
    "contact": {
        "email": "mmorris308@ooredoo.com",
        "phone": "308-444-9887",
        "socMedia": {
            "skype": "mmorris@skype.com"
        }
    },
    "login": {
        "username": "mmorris",
        "oauth2": "mmorris@skype.com",
        "password": "$2y$10$yULGPB3a2vJ3y.HMfLO4reRe0BEByjCFnxBM7vc6uVFZ2bNELJItW"
    },
    "otherContact": {
        "emails": [
            "mmorris308@tm.com"
        ],
        "phoneNumbers": [
            "308-016-8432"
        ],
        "socMedias": [
            {
                "skype": "mmorris@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-01-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CORAGREE5263",
    "name": {
        "title": null,
        "first": "Corazon",
        "middle": null,
        "last": "Greene",
        "suffix": null
    },
    "address": {
        "streetAddress": "7729 Short Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "COATEPEQUE",
        "locality1": "DEPTO DE QUETZALTENANGO",
        "locality2": "DEPTO DE QUETZALTENANGO",
        "country": "GT",
        "postalCode": "09020",
        "geoSpatial": [
            "-91.8667",
            "14.7"
        ]
    },
    "contact": {
        "email": "cgreene309@relcom.com",
        "phone": "309-373-5263",
        "socMedia": []
    },
    "login": {
        "username": "cgreene",
        "oauth2": null,
        "password": "$2y$10$t0RVo\/ND9X4YNWogJT1ui.t\/qNlpEMmMC.r.haMDadBsNgxrwUQT6"
    },
    "otherContact": {
        "emails": [
            "cgreene309@vodafone.com",
            "cgreene309@maxcomm.com",
            "cgreene309@zain.com"
        ],
        "phoneNumbers": [
            "309-066-2793",
            "309-932-8210",
            "309-949-5447"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-04-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JEANDUDL1944",
    "name": {
        "title": "Ms",
        "first": "Jeane",
        "middle": "G",
        "last": "Dudley",
        "suffix": null
    },
    "address": {
        "streetAddress": "9702 Little Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Walnut Ridge",
        "locality1": "AR",
        "locality2": "Lawrence",
        "country": "US",
        "postalCode": "72476",
        "geoSpatial": [
            "-90.9288",
            "36.0244"
        ]
    },
    "contact": {
        "email": "jdudley310@lookdata.com",
        "phone": "310-933-1944",
        "socMedia": {
            "line": "jdudley@line.com"
        }
    },
    "login": {
        "username": "jdudley",
        "oauth2": "jdudley@line.com",
        "password": "$2y$10$iah8DcC4E6s7gXnTz\/mcUuF7py89jj5Ys8EY9MWXDuYshIGQRIs0G"
    },
    "otherContact": {
        "emails": [
            "jdudley310@telecom.com",
            "jdudley310@unicom.com"
        ],
        "phoneNumbers": [
            "310-153-0430",
            "310-581-3478"
        ],
        "socMedias": [
            {
                "google": "jdudley@google.com"
            },
            {
                "facebook": "jdudley@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-04-22"
    },
    "partner": "Y",
    "businessName": "Bizarro Trust Inc"
});
db.users.insertOne(
{
    "userKey": "LAVEANDE0287",
    "name": {
        "title": "Ms",
        "first": "Lavelle",
        "middle": "S",
        "last": "Andersen",
        "suffix": null
    },
    "address": {
        "streetAddress": "1435 Short Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "TRAPICHE GRANDE (CHUARRANCHO)",
        "locality1": "DEPTO DE GUATEMALA",
        "locality2": "DEPTO DE GUATEMALA",
        "country": "GT",
        "postalCode": "01071",
        "geoSpatial": [
            "-90.5199",
            "14.6328"
        ]
    },
    "contact": {
        "email": "landerse311@optus.com",
        "phone": "311-038-0287",
        "socMedia": {
            "linkedin": "landerse@linkedin.com"
        }
    },
    "login": {
        "username": "landerse",
        "oauth2": "landerse@linkedin.com",
        "password": "$2y$10$VCI4kGqbrOJ8HYbUJDhg\/ubN8hH\/mEpvHiqtFRgn1RQMJJZibi1z."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-09-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ZACHFOX4368",
    "name": {
        "title": null,
        "first": "Zachery",
        "middle": null,
        "last": "Fox",
        "suffix": null
    },
    "address": {
        "streetAddress": "119 Red Mound Boulevard",
        "buildingName": "Building 3A",
        "floor": null,
        "roomAptCondoFlat": "18",
        "city": "Sudbury",
        "locality1": "England",
        "locality2": "Suffolk",
        "country": "GB",
        "postalCode": "CO10",
        "geoSpatial": [
            "0.7312",
            "52.0389"
        ]
    },
    "contact": {
        "email": "zfox312@cci.com",
        "phone": "312-260-4368",
        "socMedia": []
    },
    "login": {
        "username": "zfox",
        "oauth2": null,
        "password": "$2y$10$m2KVXsR85RJdr8sYtV13WOc7InAdEPcFrRNmLRqHowFh9JcNF\/DNy"
    },
    "otherContact": {
        "emails": [
            "zfox312@netcom.com",
            "zfox312@telefonica.com",
            "zfox312@frontier.com"
        ],
        "phoneNumbers": [
            "312-557-2134",
            "312-891-2597",
            "312-947-9223"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-08-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BRICEATO2321",
    "name": {
        "title": "Mr",
        "first": "Brice",
        "middle": "Z",
        "last": "Eaton",
        "suffix": null
    },
    "address": {
        "streetAddress": "4266 Little Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Aguada",
        "locality1": "Aguada",
        "locality2": "Aguada",
        "country": "PR",
        "postalCode": "00602",
        "geoSpatial": [
            "-67.1882",
            "18.3794"
        ]
    },
    "contact": {
        "email": "beaton313@telesystems.com",
        "phone": "313-231-2321",
        "socMedia": {
            "twitter": "beaton@twitter.com"
        }
    },
    "login": {
        "username": "beaton",
        "oauth2": "beaton@twitter.com",
        "password": "$2y$10$S4zPNdZJjo1qtZ3as8Eoz.ZHJEk4T2zeir7b5ueWG4GpU4ECq4etO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-12-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "TEDLYNC7932",
    "name": {
        "title": "Mr",
        "first": "Ted",
        "middle": "W",
        "last": "Lynch",
        "suffix": null
    },
    "address": {
        "streetAddress": "1405 Big Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Quebec City South Central",
        "locality1": "QC",
        "locality2": "Capitale-Nationale",
        "country": "CA",
        "postalCode": "G1N",
        "geoSpatial": [
            "-71.2639",
            "46.8035"
        ]
    },
    "contact": {
        "email": "tlynch314@relcom.com",
        "phone": "314-657-7932",
        "socMedia": {
            "skype": "tlynch@skype.com"
        }
    },
    "login": {
        "username": "tlynch",
        "oauth2": "tlynch@skype.com",
        "password": "$2y$10$49PcCjSt9Sq8jbbnkOaMROcDLfly0HKTFFbcg6PfxQYCkd\/uq4xXe"
    },
    "otherContact": {
        "emails": [
            "tlynch314@oi.com"
        ],
        "phoneNumbers": [
            "314-386-0849"
        ],
        "socMedias": [
            {
                "linkedin": "tlynch@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-06-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHANFARR8205",
    "name": {
        "title": null,
        "first": "Chang",
        "middle": null,
        "last": "Farrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "880 Blue Ditch Drive",
        "buildingName": null,
        "floor": 7,
        "roomAptCondoFlat": null,
        "city": "LA REPRESITA (QUINES - DPTO. AYACUCHO)",
        "locality1": "D",
        "locality2": "San Luis",
        "country": "AR",
        "postalCode": "5711",
        "geoSpatial": [
            "-65.875",
            "-32.1667"
        ]
    },
    "contact": {
        "email": "cfarrell315@turkcell.com",
        "phone": "315-976-8205",
        "socMedia": []
    },
    "login": {
        "username": "cfarrell",
        "oauth2": null,
        "password": "$2y$10$UMwAokjZENHX3gPqq0CNguFBf0uE234sZTlRDpR9YnRscMAWVImXi"
    },
    "otherContact": {
        "emails": [
            "cfarrell315@glasnet.com"
        ],
        "phoneNumbers": [
            "315-900-6138"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-01-21"
    },
    "partner": "Y",
    "businessName": "Friendly Industries"
});
db.users.insertOne(
{
    "userKey": "KEVIMATH6422",
    "name": {
        "title": "Mr",
        "first": "Kevin",
        "middle": "A",
        "last": "Mathis",
        "suffix": null
    },
    "address": {
        "streetAddress": "7786 Short Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "The Den",
        "locality1": "Scotland",
        "locality2": "North Ayrshire",
        "country": "GB",
        "postalCode": "KA24",
        "geoSpatial": [
            "-4.7159",
            "55.7096"
        ]
    },
    "contact": {
        "email": "kmathis316@telefonica.com",
        "phone": "316-224-6422",
        "socMedia": {
            "line": "kmathis@line.com"
        }
    },
    "login": {
        "username": "kmathis",
        "oauth2": "kmathis@line.com",
        "password": "$2y$10$0QCkoKcKk33nLauubMaABuZNGVB7uUsMdx5rjjmqCOaEKnxxwNdTq"
    },
    "otherContact": {
        "emails": [
            "kmathis316@swisscom.com",
            "kmathis316@bt.com",
            "kmathis316@oi.com"
        ],
        "phoneNumbers": [
            "316-016-5896",
            "316-350-2433",
            "316-027-5182"
        ],
        "socMedias": [
            {
                "twitter": "kmathis@twitter.com"
            },
            {
                "facebook": "kmathis@facebook.com"
            },
            {
                "skype": "kmathis@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-10-03"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GINOFRED9131",
    "name": {
        "title": "Mr",
        "first": "Gino",
        "middle": "E",
        "last": "Frederick",
        "suffix": null
    },
    "address": {
        "streetAddress": "7057 Short Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Esti",
        "locality1": "Stru\u017e\u0101nu pag.",
        "locality2": "Stru\u017e\u0101nu pag.",
        "country": "LV",
        "postalCode": "LV-4643",
        "geoSpatial": [
            "27.2554",
            "56.7007"
        ]
    },
    "contact": {
        "email": "gfrederi317@rogers.com",
        "phone": "317-303-9131",
        "socMedia": {
            "google": "gfrederi@google.com"
        }
    },
    "login": {
        "username": "gfrederi",
        "oauth2": "gfrederi@google.com",
        "password": "$2y$10$rpE2yHF5nI\/fh5oNMVJBGOIuJWxgMR7s34izJBTZKZlYuT24ag4AS"
    },
    "otherContact": {
        "emails": [
            "gfrederi317@netcom.com",
            "gfrederi317@nii.com",
            "gfrederi317@seednet.com"
        ],
        "phoneNumbers": [
            "317-176-9164",
            "317-438-0214",
            "317-973-6755"
        ],
        "socMedias": [
            {
                "google": "gfrederi@google.com"
            },
            {
                "google": "gfrederi@google.com"
            },
            {
                "google": "gfrederi@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-09-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "NOLARIVE8614",
    "name": {
        "title": null,
        "first": "Nolan",
        "middle": null,
        "last": "Rivers",
        "suffix": null
    },
    "address": {
        "streetAddress": "9337 Winding Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "A8",
        "city": "Abbotsford East",
        "locality1": "BC",
        "locality2": "British Columbia",
        "country": "CA",
        "postalCode": "V3G",
        "geoSpatial": [
            "-122.178",
            "49.0754"
        ]
    },
    "contact": {
        "email": "nrivers318@att.com",
        "phone": "318-746-8614",
        "socMedia": []
    },
    "login": {
        "username": "nrivers",
        "oauth2": null,
        "password": "$2y$10$91ewA1xED\/ROdIfnHBHqg.tOA.9t5mO42l4QbYq3GyJylh4HClz2a"
    },
    "otherContact": {
        "emails": [
            "nrivers318@sktelecom.com"
        ],
        "phoneNumbers": [
            "318-323-8237"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-01-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DORESUTT1771",
    "name": {
        "title": "Ms",
        "first": "Dorene",
        "middle": "V",
        "last": "Sutton",
        "suffix": null
    },
    "address": {
        "streetAddress": "2704 Green Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tautenburg",
        "locality1": "TH",
        "locality2": "Saale-Holzland-Kreis",
        "country": "DE",
        "postalCode": "07778",
        "geoSpatial": [
            "11.7167",
            "51"
        ]
    },
    "contact": {
        "email": "dsutton319@telkom.com",
        "phone": "319-567-1771",
        "socMedia": {
            "twitter": "dsutton@twitter.com"
        }
    },
    "login": {
        "username": "dsutton",
        "oauth2": "dsutton@twitter.com",
        "password": "$2y$10$cDGLC1bqXaeYi8bf3fWcyuqKcveBQvda7RTPWxOUf.EoHpnFWoWyS"
    },
    "otherContact": {
        "emails": [
            "dsutton319@algonet.com",
            "dsutton319@telenor.com",
            "dsutton319@netcom.com"
        ],
        "phoneNumbers": [
            "319-205-3258",
            "319-835-7797",
            "319-595-4140"
        ],
        "socMedias": [
            {
                "line": "dsutton@line.com"
            },
            {
                "skype": "dsutton@skype.com"
            },
            {
                "facebook": "dsutton@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-12-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BURLTUCK0382",
    "name": {
        "title": "Ms",
        "first": "Burl",
        "middle": "U",
        "last": "Tucker",
        "suffix": null
    },
    "address": {
        "streetAddress": "3954 Big Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Jean-sur-Richelieu West",
        "locality1": "QC",
        "locality2": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J2Y",
        "geoSpatial": [
            "-73.3556",
            "45.3114"
        ]
    },
    "contact": {
        "email": "btucker320@millicom.com",
        "phone": "320-380-0382",
        "socMedia": {
            "linkedin": "btucker@linkedin.com"
        }
    },
    "login": {
        "username": "btucker",
        "oauth2": "btucker@linkedin.com",
        "password": "$2y$10$5MzjeJgpKJekHxSQUDnVSO9hmSD6vgT9gmG9C2pGnDTu72Qf\/hXFi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1990-06-03"
    },
    "partner": "Y",
    "businessName": "Green Partners LLC"
});
db.users.insertOne(
{
    "userKey": "FRANGARD9384",
    "name": {
        "title": null,
        "first": "Francis",
        "middle": null,
        "last": "Gardner",
        "suffix": null
    },
    "address": {
        "streetAddress": "4140 Short Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Christiansted",
        "locality1": "St. Croix",
        "locality2": "St. Croix",
        "country": "VI",
        "postalCode": "00823",
        "geoSpatial": [
            "-64.7445",
            "17.7237"
        ]
    },
    "contact": {
        "email": "fgardner321@cci.com",
        "phone": "321-826-9384",
        "socMedia": []
    },
    "login": {
        "username": "fgardner",
        "oauth2": null,
        "password": "$2y$10$PK8nMT4y\/6LY43HTNS0QTutg6.EZiHTTJQRgz5jkrocb682OVcnNm"
    },
    "otherContact": {
        "emails": [
            "fgardner321@telecom.com",
            "fgardner321@telekom.com",
            "fgardner321@cubenet.com"
        ],
        "phoneNumbers": [
            "321-954-7279",
            "321-008-3023",
            "321-903-5739"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-03-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GRADPALA9495",
    "name": {
        "title": "Mr",
        "first": "Grady",
        "middle": "T",
        "last": "Palacios",
        "suffix": null
    },
    "address": {
        "streetAddress": "1423 Long Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Constant",
        "locality1": "QC",
        "locality2": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J5A",
        "geoSpatial": [
            "-73.5659",
            "45.3668"
        ]
    },
    "contact": {
        "email": "gpalacio322@netcom.com",
        "phone": "322-242-9495",
        "socMedia": {
            "skype": "gpalacio@skype.com"
        }
    },
    "login": {
        "username": "gpalacio",
        "oauth2": "gpalacio@skype.com",
        "password": "$2y$10$zUBJUzpUDNviq.IuPP10seDPuQ.hMC3cQWcBNROjo02bKEQvw8Uqe"
    },
    "otherContact": {
        "emails": [
            "gpalacio322@telecomitalia.com",
            "gpalacio322@kddi.com"
        ],
        "phoneNumbers": [
            "322-490-4414",
            "322-334-5079"
        ],
        "socMedias": [
            {
                "twitter": "gpalacio@twitter.com"
            },
            {
                "line": "gpalacio@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-03-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALLAFRAN2370",
    "name": {
        "title": "Ms",
        "first": "Alla",
        "middle": "R",
        "last": "Frank",
        "suffix": null
    },
    "address": {
        "streetAddress": "8849 Long Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0428\u0430\u0440\u0430\u043d\u0438 \/ Sharani",
        "locality1": "GAB",
        "locality2": "\u0413\u0430\u0431\u0440\u043e\u0432\u043e \/ Gabrovo",
        "country": "BG",
        "postalCode": "5300",
        "geoSpatial": [
            "25.3132",
            "42.8761"
        ]
    },
    "contact": {
        "email": "afrank323@glasnet.com",
        "phone": "323-812-2370",
        "socMedia": {
            "twitter": "afrank@twitter.com"
        }
    },
    "login": {
        "username": "afrank",
        "oauth2": "afrank@twitter.com",
        "password": "$2y$10$yvg3AawIJolxrw85qGUEDOFTjmNr86kcWNh39ZjuyHh3s.jXdp1M6"
    },
    "otherContact": {
        "emails": [
            "afrank323@tata.com",
            "afrank323@ooredoo.com"
        ],
        "phoneNumbers": [
            "323-044-4107",
            "323-897-5165"
        ],
        "socMedias": [
            {
                "line": "afrank@line.com"
            },
            {
                "twitter": "afrank@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-09-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LONMOSL6883",
    "name": {
        "title": null,
        "first": "Lon",
        "middle": null,
        "last": "Mosley",
        "suffix": null
    },
    "address": {
        "streetAddress": "3067 Little Canyon Street",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": "A8",
        "city": "Kolazhi Rm",
        "locality1": "NA",
        "locality2": "Thrissur",
        "country": "IN",
        "postalCode": "680010",
        "geoSpatial": [
            "76.2593",
            "10.5028"
        ]
    },
    "contact": {
        "email": "lmosley324@etisalat.com",
        "phone": "324-959-6883",
        "socMedia": []
    },
    "login": {
        "username": "lmosley",
        "oauth2": null,
        "password": "$2y$10$jIvrPlbaC8M4eiY4lBGL4.suxwCtj9.clHdd8CBoMFZsr9fEZ\/GEK"
    },
    "otherContact": {
        "emails": [
            "lmosley324@icom.com",
            "lmosley324@jio.com",
            "lmosley324@chunghwa.com"
        ],
        "phoneNumbers": [
            "324-433-6875",
            "324-259-1493",
            "324-571-6804"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-04-03"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DENIBURN6974",
    "name": {
        "title": "Ms",
        "first": "Denisse",
        "middle": "W",
        "last": "Burnett",
        "suffix": null
    },
    "address": {
        "streetAddress": "9439 Winding Ditch Boulevard",
        "buildingName": "Building F4",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Escaldes-Engordany",
        "locality1": null,
        "locality2": null,
        "country": "AD",
        "postalCode": "AD700",
        "geoSpatial": [
            "1.5667",
            "42.5"
        ]
    },
    "contact": {
        "email": "dburnett325@singtel.com",
        "phone": "325-814-6974",
        "socMedia": {
            "google": "dburnett@google.com"
        }
    },
    "login": {
        "username": "dburnett",
        "oauth2": "dburnett@google.com",
        "password": "$2y$10$7wB14sxpJ\/MRgT8zMkLzduzq7CL1c8NGMsJjUYX2Ar7QS9kKEHRfu"
    },
    "otherContact": {
        "emails": [
            "dburnett325@turkcell.com",
            "dburnett325@bt.com",
            "dburnett325@safaricom.com"
        ],
        "phoneNumbers": [
            "325-703-3907",
            "325-128-7388",
            "325-759-4446"
        ],
        "socMedias": [
            {
                "linkedin": "dburnett@linkedin.com"
            },
            {
                "facebook": "dburnett@facebook.com"
            },
            {
                "google": "dburnett@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-08-03"
    },
    "partner": "Y",
    "businessName": "Powerhouse Partners Inc"
});
db.users.insertOne(
{
    "userKey": "ALIZMIDD9764",
    "name": {
        "title": "Ms",
        "first": "Aliza",
        "middle": "O",
        "last": "Middleton",
        "suffix": null
    },
    "address": {
        "streetAddress": "1178 Long Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Richmond Southeast",
        "locality1": "BC",
        "locality2": "Richmond",
        "country": "CA",
        "postalCode": "V6W",
        "geoSpatial": [
            "-123.048",
            "49.1534"
        ]
    },
    "contact": {
        "email": "amiddlet326@mtn.com",
        "phone": "326-238-9764",
        "socMedia": {
            "google": "amiddlet@google.com"
        }
    },
    "login": {
        "username": "amiddlet",
        "oauth2": "amiddlet@google.com",
        "password": "$2y$10$iQnCreR9L9ofYyOXF.IYyuQIvec10K.e4UZhndbyX3lo9wchcgw.6"
    },
    "otherContact": {
        "emails": [
            "amiddlet326@uunet.com"
        ],
        "phoneNumbers": [
            "326-854-6156"
        ],
        "socMedias": [
            {
                "skype": "amiddlet@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-05-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "AMELSALI2029",
    "name": {
        "title": null,
        "first": "Amelia",
        "middle": null,
        "last": "Salinas",
        "suffix": null
    },
    "address": {
        "streetAddress": "3976 Red Mound Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cimu\u0161ki",
        "locality1": "E2",
        "locality2": "Ro\u017ekalnu pag.",
        "country": "LV",
        "postalCode": "LV-5325",
        "geoSpatial": [
            "26.464",
            "56.2024"
        ]
    },
    "contact": {
        "email": "asalinas327@ccs.com",
        "phone": "327-223-2029",
        "socMedia": []
    },
    "login": {
        "username": "asalinas",
        "oauth2": null,
        "password": "$2y$10$KHdUbxBorAZQytv\/x3ez9OSETEPmoJzPtC\/tww5sx5z2lyk8EXyUG"
    },
    "otherContact": {
        "emails": [
            "asalinas327@maxcomm.com",
            "asalinas327@frontier.com",
            "asalinas327@oi.com"
        ],
        "phoneNumbers": [
            "327-180-8157",
            "327-167-9511",
            "327-938-9712"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-07-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JERRROSA3783",
    "name": {
        "title": "Mr",
        "first": "Jerrold",
        "middle": "I",
        "last": "Rosas",
        "suffix": null
    },
    "address": {
        "streetAddress": "8067 Blue Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Stratfield Turgis",
        "locality1": "England",
        "locality2": "Hampshire",
        "country": "GB",
        "postalCode": "RG27",
        "geoSpatial": [
            "-1.0017",
            "51.3312"
        ]
    },
    "contact": {
        "email": "jrosas328@millicom.com",
        "phone": "328-726-3783",
        "socMedia": {
            "twitter": "jrosas@twitter.com"
        }
    },
    "login": {
        "username": "jrosas",
        "oauth2": "jrosas@twitter.com",
        "password": "$2y$10$9qfk3.3Um0bRQYk.x7PvPex30buGuLckdzLzp3aWvd1XnXiDseRbe"
    },
    "otherContact": {
        "emails": [
            "jrosas328@kddi.com",
            "jrosas328@vodafone.com"
        ],
        "phoneNumbers": [
            "328-931-3028",
            "328-342-2117"
        ],
        "socMedias": [
            {
                "twitter": "jrosas@twitter.com"
            },
            {
                "line": "jrosas@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-07-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "IRAHART9616",
    "name": {
        "title": "Mr",
        "first": "Ira",
        "middle": "F",
        "last": "Hartman",
        "suffix": null
    },
    "address": {
        "streetAddress": "4781 Red River Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Florida",
        "locality1": "CHP",
        "locality2": "Salto de Agua",
        "country": "MX",
        "postalCode": "29906",
        "geoSpatial": [
            "-92.2586",
            "17.4617"
        ]
    },
    "contact": {
        "email": "ihartman329@telia.com",
        "phone": "329-111-9616",
        "socMedia": {
            "google": "ihartman@google.com"
        }
    },
    "login": {
        "username": "ihartman",
        "oauth2": "ihartman@google.com",
        "password": "$2y$10$peWhjlIdxvmBi2ZfC1bbsuUMNQ8jwEXhCq0Xyk1z\/rmWR9rXWblh2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-08-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "NOEMCOOK0071",
    "name": {
        "title": null,
        "first": "Noemi",
        "middle": null,
        "last": "Cook",
        "suffix": null
    },
    "address": {
        "streetAddress": "3734 Long Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C7",
        "city": "Biate",
        "locality1": "East Lungdar (Part)",
        "locality2": "Champhai",
        "country": "IN",
        "postalCode": "796370",
        "geoSpatial": [
            "93.1214",
            "23.2487"
        ]
    },
    "contact": {
        "email": "ncook330@cerist.com",
        "phone": "330-072-0071",
        "socMedia": []
    },
    "login": {
        "username": "ncook",
        "oauth2": null,
        "password": "$2y$10$mAY9C1mJCY7MG2GREq5Pg.sYKdGgGKI4p1SuiwhNEQsJdmx5kIRLe"
    },
    "otherContact": {
        "emails": [
            "ncook330@oi.com",
            "ncook330@daxnet.com",
            "ncook330@tm.com"
        ],
        "phoneNumbers": [
            "330-981-2688",
            "330-442-8984",
            "330-160-2250"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-08-12"
    },
    "partner": "Y",
    "businessName": "Serious Business"
});
db.users.insertOne(
{
    "userKey": "GLENROSS6310",
    "name": {
        "title": "Mr",
        "first": "Glenn",
        "middle": "P",
        "last": "Ross",
        "suffix": null
    },
    "address": {
        "streetAddress": "6117 Short Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pharwala",
        "locality1": "Phagwara",
        "locality2": "Jalandhar",
        "country": "IN",
        "postalCode": "144037",
        "geoSpatial": [
            "75.6689",
            "31.0902"
        ]
    },
    "contact": {
        "email": "gross332@vodafone.com",
        "phone": "332-750-6310",
        "socMedia": {
            "linkedin": "gross@linkedin.com"
        }
    },
    "login": {
        "username": "gross",
        "oauth2": "gross@linkedin.com",
        "password": "$2y$10$wgfvsc1tlyeWBHrUzhuI8OKjgkyERURS.Qr6mQDjHHRt59AqSsJTC"
    },
    "otherContact": {
        "emails": [
            "gross332@megafon.com",
            "gross332@ui.com"
        ],
        "phoneNumbers": [
            "332-357-7941",
            "332-901-9981"
        ],
        "socMedias": [
            {
                "skype": "gross@skype.com"
            },
            {
                "facebook": "gross@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-06-29"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DARWLAMB3969",
    "name": {
        "title": null,
        "first": "Darwin",
        "middle": null,
        "last": "Lambert",
        "suffix": null
    },
    "address": {
        "streetAddress": "9505 Big Mountain Street",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": null,
        "city": "Boyle",
        "locality1": null,
        "locality2": null,
        "country": "IE",
        "postalCode": "F52",
        "geoSpatial": [
            "-8.3",
            "53.9667"
        ]
    },
    "contact": {
        "email": "dlambert333@tt.com",
        "phone": "333-229-3969",
        "socMedia": []
    },
    "login": {
        "username": "dlambert",
        "oauth2": null,
        "password": "$2y$10$b44gUAAVUkAF4aPSyXNzFOLJtHB\/lsKZp7\/LgLy7YLHyxWVR6F\/ge"
    },
    "otherContact": {
        "emails": [
            "dlambert333@megafon.com",
            "dlambert333@greennet.com"
        ],
        "phoneNumbers": [
            "333-515-9485",
            "333-266-8261"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-07-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ARLENIXO0896",
    "name": {
        "title": "Mr",
        "first": "Arlen",
        "middle": "A",
        "last": "Nixon",
        "suffix": null
    },
    "address": {
        "streetAddress": "1278 Big Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Feria",
        "locality1": "TX",
        "locality2": "Cameron",
        "country": "US",
        "postalCode": "78559",
        "geoSpatial": [
            "-97.8261",
            "26.1666"
        ]
    },
    "contact": {
        "email": "anixon334@ote.com",
        "phone": "334-884-0896",
        "socMedia": {
            "google": "anixon@google.com"
        }
    },
    "login": {
        "username": "anixon",
        "oauth2": "anixon@google.com",
        "password": "$2y$10$5.uP78D\/qMgQaBB\/SqfiAOKfIGSedT2JplcteUOARFiy22Vvm805W"
    },
    "otherContact": {
        "emails": [
            "anixon334@tt.com",
            "anixon334@nii.com",
            "anixon334@sprint.com"
        ],
        "phoneNumbers": [
            "334-608-8339",
            "334-825-7350",
            "334-053-3537"
        ],
        "socMedias": [
            {
                "linkedin": "anixon@linkedin.com"
            },
            {
                "linkedin": "anixon@linkedin.com"
            },
            {
                "facebook": "anixon@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-10-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CARMMOON0951",
    "name": {
        "title": "Mr",
        "first": "Carmine",
        "middle": "P",
        "last": "Moon",
        "suffix": null
    },
    "address": {
        "streetAddress": "3272 Red Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bandr\u00e9l\u00e9",
        "locality1": "Bandrele",
        "locality2": "Bandrele",
        "country": "YT",
        "postalCode": "97660",
        "geoSpatial": [
            "45.1926",
            "-12.9128"
        ]
    },
    "contact": {
        "email": "cmoon335@telkom.com",
        "phone": "335-332-0951",
        "socMedia": {
            "twitter": "cmoon@twitter.com"
        }
    },
    "login": {
        "username": "cmoon",
        "oauth2": "cmoon@twitter.com",
        "password": "$2y$10$WKyLKemYM1A6FKi6A5snqOE3U9ki05kjEqdC9QzZVKPUrtkHs1b.e"
    },
    "otherContact": {
        "emails": [
            "cmoon335@movil.com",
            "cmoon335@safaricom.com",
            "cmoon335@ote.com"
        ],
        "phoneNumbers": [
            "335-747-3865",
            "335-907-4774",
            "335-686-2141"
        ],
        "socMedias": [
            {
                "facebook": "cmoon@facebook.com"
            },
            {
                "facebook": "cmoon@facebook.com"
            },
            {
                "google": "cmoon@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-11-09"
    },
    "partner": "Y",
    "businessName": "Nonstop Business"
});
db.users.insertOne(
{
    "userKey": "LEEACOBB3984",
    "name": {
        "title": null,
        "first": "Leeanna",
        "middle": null,
        "last": "Cobb",
        "suffix": null
    },
    "address": {
        "streetAddress": "771 Green Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "F7",
        "city": "Jamaica",
        "locality1": "NY",
        "locality2": "Queens",
        "country": "US",
        "postalCode": "11424",
        "geoSpatial": [
            "-73.8708",
            "40.6514"
        ]
    },
    "contact": {
        "email": "lcobb336@softbank.com",
        "phone": "336-584-3984",
        "socMedia": []
    },
    "login": {
        "username": "lcobb",
        "oauth2": null,
        "password": "$2y$10$Gvrf83o0UXcWzTUnvpf2RepfLwy79PmTs9HLraX3rxk2IOTqkyoUq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-08-18"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CLORARNO6479",
    "name": {
        "title": "Ms",
        "first": "Clorinda",
        "middle": "U",
        "last": "Arnold",
        "suffix": null
    },
    "address": {
        "streetAddress": "9710 Red Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Herlev",
        "locality1": "Gladsaxe Kommune",
        "locality2": "Gladsaxe Kommune",
        "country": "DK",
        "postalCode": "2730",
        "geoSpatial": [
            "12.44",
            "55.7237"
        ]
    },
    "contact": {
        "email": "carnold337@telus.com",
        "phone": "337-860-6479",
        "socMedia": {
            "skype": "carnold@skype.com"
        }
    },
    "login": {
        "username": "carnold",
        "oauth2": "carnold@skype.com",
        "password": "$2y$10$52FNhtZDX1CgIFsioV4bhOwAdDXOi1k5lZ2BI9W.gATMinVyUs6JW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-03-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JAROPALA2233",
    "name": {
        "title": "Mr",
        "first": "Jarod",
        "middle": "J",
        "last": "Palacios",
        "suffix": null
    },
    "address": {
        "streetAddress": "4606 Big Bridge Ride",
        "buildingName": "Building 13",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Haflong Bazar",
        "locality1": "NA",
        "locality2": "North Cachar Hills",
        "country": "IN",
        "postalCode": "788819",
        "geoSpatial": [
            "93.0147",
            "25.2421"
        ]
    },
    "contact": {
        "email": "jpalacio338@ooredoo.com",
        "phone": "338-121-2233",
        "socMedia": {
            "linkedin": "jpalacio@linkedin.com"
        }
    },
    "login": {
        "username": "jpalacio",
        "oauth2": "jpalacio@linkedin.com",
        "password": "$2y$10$YI\/Q.T0DIgi5fffM4aupjuMjczLh7tFaZG0VuUrSaTPr0oW6Eyehm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-08-19"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JOLIZIMM5347",
    "name": {
        "title": null,
        "first": "Jolie",
        "middle": null,
        "last": "Zimmerman",
        "suffix": null
    },
    "address": {
        "streetAddress": "5829 Winding Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ensanche Luperon",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "10406",
        "geoSpatial": [
            "-69.9",
            "18.5"
        ]
    },
    "contact": {
        "email": "jzimmerm339@softbank.com",
        "phone": "339-311-5347",
        "socMedia": []
    },
    "login": {
        "username": "jzimmerm",
        "oauth2": null,
        "password": "$2y$10$O.GKhrFe8C3kmaueVkRz\/.OXWqIDGlud3krSO.hmAHrT.zmoX3zbG"
    },
    "otherContact": {
        "emails": [
            "jzimmerm339@airtel.com",
            "jzimmerm339@vodafone.com"
        ],
        "phoneNumbers": [
            "339-292-6730",
            "339-511-1433"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-07-25"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CHANCURT7152",
    "name": {
        "title": "Mr",
        "first": "Chang",
        "middle": "S",
        "last": "Curtis",
        "suffix": null
    },
    "address": {
        "streetAddress": "634 Little Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Thunder Bay North",
        "locality1": "ON",
        "locality2": "Thunder Bay ",
        "country": "CA",
        "postalCode": "P7G",
        "geoSpatial": [
            "-89.3168",
            "48.4001"
        ]
    },
    "contact": {
        "email": "ccurtis340@ntt.com",
        "phone": "340-488-7152",
        "socMedia": {
            "google": "ccurtis@google.com"
        }
    },
    "login": {
        "username": "ccurtis",
        "oauth2": "ccurtis@google.com",
        "password": "$2y$10$RRRvEAwQpeuJDGRSpuf7juB8keiYDux8E031iavy6Xv6guQwM3Yke"
    },
    "otherContact": {
        "emails": [
            "ccurtis340@eunet.com",
            "ccurtis340@softbank.com"
        ],
        "phoneNumbers": [
            "340-904-8771",
            "340-236-1686"
        ],
        "socMedias": [
            {
                "linkedin": "ccurtis@linkedin.com"
            },
            {
                "twitter": "ccurtis@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-12-13"
    },
    "partner": "Y",
    "businessName": "Powerhouse Trust Inc"
});
db.users.insertOne(
{
    "userKey": "ALTAGATE4948",
    "name": {
        "title": "Ms",
        "first": "Altagracia",
        "middle": "C",
        "last": "Gates",
        "suffix": null
    },
    "address": {
        "streetAddress": "7384 Green Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ollague",
        "locality1": "Ollague",
        "locality2": "Provincia de El Loa",
        "country": "CL",
        "postalCode": "1420000",
        "geoSpatial": [
            "-68.3134",
            "-21.4566"
        ]
    },
    "contact": {
        "email": "agates341@bce.com",
        "phone": "341-785-4948",
        "socMedia": {
            "skype": "agates@skype.com"
        }
    },
    "login": {
        "username": "agates",
        "oauth2": "agates@skype.com",
        "password": "$2y$10$NpVvG1nx\/JIO\/h99o.VRAe\/MfGhLZBw\/krDQpIRkoXXKBU0SHcqcS"
    },
    "otherContact": {
        "emails": [
            "agates341@ais.com",
            "agates341@telesystems.com",
            "agates341@ccs.com"
        ],
        "phoneNumbers": [
            "341-593-3698",
            "341-359-0634",
            "341-247-5876"
        ],
        "socMedias": [
            {
                "skype": "agates@skype.com"
            },
            {
                "linkedin": "agates@linkedin.com"
            },
            {
                "facebook": "agates@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-07-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GLENMCCU5207",
    "name": {
        "title": null,
        "first": "Glenn",
        "middle": null,
        "last": "Mccullough",
        "suffix": null
    },
    "address": {
        "streetAddress": "9061 Short Ridge Drive",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": "C1",
        "city": "Wattsville",
        "locality1": "AL",
        "locality2": "St. Clair",
        "country": "US",
        "postalCode": "35182",
        "geoSpatial": [
            "-86.2567",
            "33.7068"
        ]
    },
    "contact": {
        "email": "gmccullo342@apicnet.com",
        "phone": "342-630-5207",
        "socMedia": []
    },
    "login": {
        "username": "gmccullo",
        "oauth2": null,
        "password": "$2y$10$BQNtylIZ03.H\/ZmluZtTYuXDVl6VcV2gcgxu6YS7usYAIB8cYmIuq"
    },
    "otherContact": {
        "emails": [
            "gmccullo342@ntt.com",
            "gmccullo342@vodafone.com"
        ],
        "phoneNumbers": [
            "342-687-6184",
            "342-620-8738"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-11-12"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "IMABOYL5790",
    "name": {
        "title": "Ms",
        "first": "Ima",
        "middle": "D",
        "last": "Boyle",
        "suffix": null
    },
    "address": {
        "streetAddress": "8035 Little River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Poum",
        "locality1": "Poum",
        "locality2": "Poum",
        "country": "NC",
        "postalCode": "98826",
        "geoSpatial": [
            "164.0292",
            "-20.2368"
        ]
    },
    "contact": {
        "email": "iboyle343@telecom.com",
        "phone": "343-829-5790",
        "socMedia": {
            "google": "iboyle@google.com"
        }
    },
    "login": {
        "username": "iboyle",
        "oauth2": "iboyle@google.com",
        "password": "$2y$10$.R02ERCNfGmuPOj9b3aCTe0MpbCo\/5jAdWcchRY6S92ctNbles6gO"
    },
    "otherContact": {
        "emails": [
            "iboyle343@telekom.com",
            "iboyle343@pldt.com"
        ],
        "phoneNumbers": [
            "343-036-5983",
            "343-295-6932"
        ],
        "socMedias": [
            {
                "facebook": "iboyle@facebook.com"
            },
            {
                "facebook": "iboyle@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-12-30"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RYANCHOI9891",
    "name": {
        "title": "Ms",
        "first": "Ryan",
        "middle": "Z",
        "last": "Choi",
        "suffix": null
    },
    "address": {
        "streetAddress": "7954 Winding Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ramsay",
        "locality1": "QLD",
        "locality2": "Queensland",
        "country": "AU",
        "postalCode": "4358",
        "geoSpatial": [
            "151.9886",
            "-27.7232"
        ]
    },
    "contact": {
        "email": "rchoi344@seednet.com",
        "phone": "344-611-9891",
        "socMedia": {
            "twitter": "rchoi@twitter.com"
        }
    },
    "login": {
        "username": "rchoi",
        "oauth2": "rchoi@twitter.com",
        "password": "$2y$10$h\/PCmrshpM.WxK9qTm3bxexr\/rRmXnNkHuH2Jg3exCap7IGJB2te6"
    },
    "otherContact": {
        "emails": [
            "rchoi344@icom.com",
            "rchoi344@ais.com",
            "rchoi344@millicom.com"
        ],
        "phoneNumbers": [
            "344-554-6214",
            "344-192-9855",
            "344-440-2407"
        ],
        "socMedias": [
            {
                "skype": "rchoi@skype.com"
            },
            {
                "twitter": "rchoi@twitter.com"
            },
            {
                "twitter": "rchoi@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-12-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "SHERDEJE2702",
    "name": {
        "title": null,
        "first": "Sherlyn",
        "middle": null,
        "last": "Dejesus",
        "suffix": null
    },
    "address": {
        "streetAddress": "3457 Blue Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Umatac",
        "locality1": "Guam",
        "locality2": "Guam",
        "country": "GU",
        "postalCode": "96918",
        "geoSpatial": [
            "144.7863",
            "13.4443"
        ]
    },
    "contact": {
        "email": "sdejesus345@seednet.com",
        "phone": "345-904-2702",
        "socMedia": []
    },
    "login": {
        "username": "sdejesus",
        "oauth2": null,
        "password": "$2y$10$MYjvRrf79RA7yx0JIHDgXez6zc\/dFOILalmKXFPvEbRb12bQI8i0e"
    },
    "otherContact": {
        "emails": [
            "sdejesus345@telecom.com",
            "sdejesus345@softbank.com"
        ],
        "phoneNumbers": [
            "345-685-7344",
            "345-298-7501"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-08-08"
    },
    "partner": "Y",
    "businessName": "Specialty Business Ltd"
});
db.users.insertOne(
{
    "userKey": "TIFFBOYE9569",
    "name": {
        "title": "Ms",
        "first": "Tiffany",
        "middle": "T",
        "last": "Boyer",
        "suffix": null
    },
    "address": {
        "streetAddress": "1764 Green Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "De Soto",
        "locality1": "IL",
        "locality2": "Jackson",
        "country": "US",
        "postalCode": "62924",
        "geoSpatial": [
            "-89.2218",
            "37.8147"
        ]
    },
    "contact": {
        "email": "tboyer346@tt.com",
        "phone": "346-468-9569",
        "socMedia": {
            "skype": "tboyer@skype.com"
        }
    },
    "login": {
        "username": "tboyer",
        "oauth2": "tboyer@skype.com",
        "password": "$2y$10$HerIhuamLFM49FwdCpE9eu1MvwiouyJQB5YUtwf9T41ySJnQtHLaO"
    },
    "otherContact": {
        "emails": [
            "tboyer346@chunghwa.com",
            "tboyer346@mtn.com"
        ],
        "phoneNumbers": [
            "346-136-4233",
            "346-701-0477"
        ],
        "socMedias": [
            {
                "skype": "tboyer@skype.com"
            },
            {
                "facebook": "tboyer@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-11-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VALPERE3048",
    "name": {
        "title": "Mr",
        "first": "Val",
        "middle": "B",
        "last": "Perez",
        "suffix": null
    },
    "address": {
        "streetAddress": "5418 Long Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "K\u00f8benhavn V",
        "locality1": "K\u00f8benhavns Kommune",
        "locality2": "K\u00f8benhavns Kommune",
        "country": "DK",
        "postalCode": "1667",
        "geoSpatial": [
            "12.5655",
            "55.6759"
        ]
    },
    "contact": {
        "email": "vperez347@telekom.com",
        "phone": "347-601-3048",
        "socMedia": {
            "linkedin": "vperez@linkedin.com"
        }
    },
    "login": {
        "username": "vperez",
        "oauth2": "vperez@linkedin.com",
        "password": "$2y$10$52LyJ3e6gc0bll6XHUjVKeXPRzUwqNTL\/4LAChTL2RgfiPzrTzIX2"
    },
    "otherContact": {
        "emails": [
            "vperez347@apicnet.com",
            "vperez347@telecom.com"
        ],
        "phoneNumbers": [
            "347-510-3037",
            "347-999-0396"
        ],
        "socMedias": [
            {
                "line": "vperez@line.com"
            },
            {
                "google": "vperez@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-01-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DARWDELE3351",
    "name": {
        "title": null,
        "first": "Darwin",
        "middle": null,
        "last": "Deleon",
        "suffix": null
    },
    "address": {
        "streetAddress": "7378 Short Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "F3",
        "city": "Manchester",
        "locality1": "CT",
        "locality2": "Hartford",
        "country": "US",
        "postalCode": "06042",
        "geoSpatial": [
            "-72.5292",
            "41.7966"
        ]
    },
    "contact": {
        "email": "ddeleon348@ccs.com",
        "phone": "348-147-3351",
        "socMedia": []
    },
    "login": {
        "username": "ddeleon",
        "oauth2": null,
        "password": "$2y$10$V6X8OxZaXPOJphvhlBxMN.UYfQRqNftIRSIHYuIQ9R.vx7iPAZFM."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-05-30"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARYREYN6352",
    "name": {
        "title": "Ms",
        "first": "Marylynn",
        "middle": "M",
        "last": "Reynolds",
        "suffix": null
    },
    "address": {
        "streetAddress": "51 Red River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "K\u00f6sehacili",
        "locality1": "B\u00fcnyan",
        "locality2": "B\u00fcnyan",
        "country": "TR",
        "postalCode": "38600",
        "geoSpatial": [
            "35.9667",
            "38.9167"
        ]
    },
    "contact": {
        "email": "mreynold349@vodafone.com",
        "phone": "349-986-6352",
        "socMedia": {
            "facebook": "mreynold@facebook.com"
        }
    },
    "login": {
        "username": "mreynold",
        "oauth2": "mreynold@facebook.com",
        "password": "$2y$10$.M.UJ8TROJf5B1ICabr5COaFHt0xW.H2IdZ2lhJE.Op9CjGVJ8hKy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-08-03"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "NOECHER9803",
    "name": {
        "title": "Mr",
        "first": "Noe",
        "middle": "R",
        "last": "Cherry",
        "suffix": null
    },
    "address": {
        "streetAddress": "5236 Blue Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vernon East",
        "locality1": "BC",
        "locality2": "Vernon",
        "country": "CA",
        "postalCode": "V1B",
        "geoSpatial": [
            "-118.938",
            "50.084"
        ]
    },
    "contact": {
        "email": "ncherry350@etisalat.com",
        "phone": "350-143-9803",
        "socMedia": {
            "skype": "ncherry@skype.com"
        }
    },
    "login": {
        "username": "ncherry",
        "oauth2": "ncherry@skype.com",
        "password": "$2y$10$bhtPY6EbvaM6UYoW3yqrMeaOrKlgWamrsJTYL6izmMr7jyz3od0Ae"
    },
    "otherContact": {
        "emails": [
            "ncherry350@movil.com",
            "ncherry350@millicom.com"
        ],
        "phoneNumbers": [
            "350-839-4297",
            "350-105-3875"
        ],
        "socMedias": [
            {
                "twitter": "ncherry@twitter.com"
            },
            {
                "line": "ncherry@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-12-25"
    },
    "partner": "Y",
    "businessName": "Specialty Holdings"
});
db.users.insertOne(
{
    "userKey": "TENNCARR1235",
    "name": {
        "title": null,
        "first": "Tennille",
        "middle": null,
        "last": "Carrillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "2147 Little Ridge Circle",
        "buildingName": "Building A5",
        "floor": 9,
        "roomAptCondoFlat": null,
        "city": "Wheelock",
        "locality1": "England",
        "locality2": "Cheshire",
        "country": "GB",
        "postalCode": "CW11",
        "geoSpatial": [
            "-2.3729",
            "53.1287"
        ]
    },
    "contact": {
        "email": "tcarrill351@telecomitalia.com",
        "phone": "351-104-1235",
        "socMedia": []
    },
    "login": {
        "username": "tcarrill",
        "oauth2": null,
        "password": "$2y$10$BvdOTivgGwR9I8jqOiUIcOHozuKIRC6TptXRKkeKIp4cK7KpjFtKi"
    },
    "otherContact": {
        "emails": [
            "tcarrill351@sprint.com",
            "tcarrill351@ais.com",
            "tcarrill351@telecomitalia.com"
        ],
        "phoneNumbers": [
            "351-135-7693",
            "351-516-4647",
            "351-976-7485"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-01-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BIBIHENR8718",
    "name": {
        "title": "Ms",
        "first": "Bibi",
        "middle": "K",
        "last": "Henry",
        "suffix": null
    },
    "address": {
        "streetAddress": "1734 Long Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chicago",
        "locality1": "IL",
        "locality2": "Cook",
        "country": "US",
        "postalCode": "60693",
        "geoSpatial": [
            "-87.6501",
            "41.85"
        ]
    },
    "contact": {
        "email": "bhenry352@telesystems.com",
        "phone": "352-462-8718",
        "socMedia": {
            "twitter": "bhenry@twitter.com"
        }
    },
    "login": {
        "username": "bhenry",
        "oauth2": "bhenry@twitter.com",
        "password": "$2y$10$0fPqL7FXxApcqYyWrVgGu.nUeSySfVoNjFkx3qe\/HhnfXwW\/zqZjC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-08-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LLOYHOLL8291",
    "name": {
        "title": "Mr",
        "first": "Lloyd",
        "middle": "T",
        "last": "Holland",
        "suffix": null
    },
    "address": {
        "streetAddress": "1825 Green Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Raka",
        "locality1": null,
        "locality2": null,
        "country": "SI",
        "postalCode": "8274",
        "geoSpatial": [
            "15.3842",
            "45.9297"
        ]
    },
    "contact": {
        "email": "lholland353@telecomitalia.com",
        "phone": "353-057-8291",
        "socMedia": {
            "google": "lholland@google.com"
        }
    },
    "login": {
        "username": "lholland",
        "oauth2": "lholland@google.com",
        "password": "$2y$10$ilezEDb.G8yHlC2\/RDKmAO4qOMF9oatHJGk5TLsDR50QHDNVVwMOC"
    },
    "otherContact": {
        "emails": [
            "lholland353@access.com"
        ],
        "phoneNumbers": [
            "353-657-6995"
        ],
        "socMedias": [
            {
                "skype": "lholland@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-07-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MONIROSA3951",
    "name": {
        "title": null,
        "first": "Monique",
        "middle": null,
        "last": "Rosas",
        "suffix": null
    },
    "address": {
        "streetAddress": "8609 Long Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "92",
        "city": "Clune",
        "locality1": "Scotland",
        "locality2": "Highland",
        "country": "GB",
        "postalCode": "IV13",
        "geoSpatial": [
            "-3.9931",
            "57.3079"
        ]
    },
    "contact": {
        "email": "mrosas354@openworld.com",
        "phone": "354-462-3951",
        "socMedia": []
    },
    "login": {
        "username": "mrosas",
        "oauth2": null,
        "password": "$2y$10$wKCoo11yzwmDgSk6j\/n\/w.WJmRkcznJIBvHU5rPHstXK8q0kdL4Nm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-06-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "CAPRBLAN6365",
    "name": {
        "title": "Ms",
        "first": "Caprice",
        "middle": "S",
        "last": "Blanchard",
        "suffix": null
    },
    "address": {
        "streetAddress": "8683 Winding Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Somerharju",
        "locality1": "Luum\u00e4ki",
        "locality2": "Lappeenranta",
        "country": "FI",
        "postalCode": "54580",
        "geoSpatial": [
            "27.4134",
            "60.9377"
        ]
    },
    "contact": {
        "email": "cblancha355@cubenet.com",
        "phone": "355-999-6365",
        "socMedia": {
            "line": "cblancha@line.com"
        }
    },
    "login": {
        "username": "cblancha",
        "oauth2": "cblancha@line.com",
        "password": "$2y$10$4AbIZMuRO6y4j3.M.4rAe.kunxljBwLXp0931SAS5pSGVqUDxTD8W"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-01-24"
    },
    "partner": "Y",
    "businessName": "Ninety Nine Percenter Trust"
});
db.users.insertOne(
{
    "userKey": "VERLWILL9394",
    "name": {
        "title": "Ms",
        "first": "Verlie",
        "middle": "U",
        "last": "Williamson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2876 Short Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Grand Falls Central",
        "locality1": "NB",
        "locality2": "Grand Falls ",
        "country": "CA",
        "postalCode": "E3Z",
        "geoSpatial": [
            "-67.7466",
            "46.9266"
        ]
    },
    "contact": {
        "email": "vwilliam356@jio.com",
        "phone": "356-797-9394",
        "socMedia": {
            "twitter": "vwilliam@twitter.com"
        }
    },
    "login": {
        "username": "vwilliam",
        "oauth2": "vwilliam@twitter.com",
        "password": "$2y$10$zfJjnl4fW8gA.3jAzkmjM.KNNzhVhRfS.KkR.5oJCkW5BtfvQwc22"
    },
    "otherContact": {
        "emails": [
            "vwilliam356@millicom.com",
            "vwilliam356@safaricom.com"
        ],
        "phoneNumbers": [
            "356-280-8758",
            "356-358-3426"
        ],
        "socMedias": [
            {
                "twitter": "vwilliam@twitter.com"
            },
            {
                "twitter": "vwilliam@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-08-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MARLCHAN6146",
    "name": {
        "title": null,
        "first": "Marlon",
        "middle": null,
        "last": "Chang",
        "suffix": null
    },
    "address": {
        "streetAddress": "2743 Long Gully Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Las Caobitas",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "10905",
        "geoSpatial": [
            "-70.4667",
            "18.45"
        ]
    },
    "contact": {
        "email": "mchang357@access.com",
        "phone": "357-845-6146",
        "socMedia": []
    },
    "login": {
        "username": "mchang",
        "oauth2": null,
        "password": "$2y$10$DuWXnjoeJV9RBXtv65IVpuBla1ByyOmstx89r40qhnMdIyx.BMJ.u"
    },
    "otherContact": {
        "emails": [
            "mchang357@orstom.com"
        ],
        "phoneNumbers": [
            "357-652-7992"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-10-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALMECERV0467",
    "name": {
        "title": "Ms",
        "first": "Almeta",
        "middle": "I",
        "last": "Cervantes",
        "suffix": null
    },
    "address": {
        "streetAddress": "6791 Winding Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dorsell",
        "locality1": "Scotland",
        "locality2": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB33",
        "geoSpatial": [
            "-2.7427",
            "57.2254"
        ]
    },
    "contact": {
        "email": "acervant358@sktelecom.com",
        "phone": "358-827-0467",
        "socMedia": {
            "skype": "acervant@skype.com"
        }
    },
    "login": {
        "username": "acervant",
        "oauth2": "acervant@skype.com",
        "password": "$2y$10$80m2PhIK9MGXfFwrti2hZO1g62L9nytiaSeB9OFo4irysXWNoceB2"
    },
    "otherContact": {
        "emails": [
            "acervant358@lookdata.com",
            "acervant358@telkom.com",
            "acervant358@eunet.com"
        ],
        "phoneNumbers": [
            "358-632-4063",
            "358-175-3936",
            "358-399-0455"
        ],
        "socMedias": [
            {
                "linkedin": "acervant@linkedin.com"
            },
            {
                "twitter": "acervant@twitter.com"
            },
            {
                "google": "acervant@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-09-12"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KANDCABR8458",
    "name": {
        "title": "Ms",
        "first": "Kandis",
        "middle": "I",
        "last": "Cabrera",
        "suffix": null
    },
    "address": {
        "streetAddress": "957 Green Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Llanera",
        "locality1": null,
        "locality2": null,
        "country": "PH",
        "postalCode": "3126",
        "geoSpatial": [
            "121.0189",
            "15.6653"
        ]
    },
    "contact": {
        "email": "kcabrera359@chunghwa.com",
        "phone": "359-225-8458",
        "socMedia": {
            "linkedin": "kcabrera@linkedin.com"
        }
    },
    "login": {
        "username": "kcabrera",
        "oauth2": "kcabrera@linkedin.com",
        "password": "$2y$10$QSUoSGPohM.cP8\/E\/N1Ar.I2mCx0XgG2\/5TFH5yTnd7Kk5dc2Y6yu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-10-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JACIGONZ8929",
    "name": {
        "title": null,
        "first": "Jacinto",
        "middle": null,
        "last": "Gonzales",
        "suffix": null
    },
    "address": {
        "streetAddress": "9163 Big Bough Way",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": "25",
        "city": "Fulbari",
        "locality1": "Ttb",
        "locality2": "Jorhat",
        "country": "IN",
        "postalCode": "785630",
        "geoSpatial": [
            "94.0639",
            "26.3155"
        ]
    },
    "contact": {
        "email": "jgonzale360@frontier.com",
        "phone": "360-840-8929",
        "socMedia": []
    },
    "login": {
        "username": "jgonzale",
        "oauth2": null,
        "password": "$2y$10$sqTz5dw\/fciA06UL8G2hIecP2CJ1PnKUozHhC5uTkNwzer0sJyEYW"
    },
    "otherContact": {
        "emails": [
            "jgonzale360@worldnet.com",
            "jgonzale360@centurylink.com"
        ],
        "phoneNumbers": [
            "360-413-4039",
            "360-965-6979"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-08-09"
    },
    "partner": "Y",
    "businessName": "Powerhouse Partners"
});
db.users.insertOne(
{
    "userKey": "KENYSANT6084",
    "name": {
        "title": "Ms",
        "first": "Kenya",
        "middle": "X",
        "last": "Santana",
        "suffix": null
    },
    "address": {
        "streetAddress": "350 Long Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00cdsafir\u00f0i",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "401",
        "geoSpatial": [
            "-23.135",
            "66.0747"
        ]
    },
    "contact": {
        "email": "ksantana361@nii.com",
        "phone": "361-688-6084",
        "socMedia": {
            "google": "ksantana@google.com"
        }
    },
    "login": {
        "username": "ksantana",
        "oauth2": "ksantana@google.com",
        "password": "$2y$10$9uIGTbmZEvu0QGPhEjj7u.VrOTTiU0Shh6swqmvyOfvOsXm\/uzQoC"
    },
    "otherContact": {
        "emails": [
            "ksantana361@nordnet.com",
            "ksantana361@cerist.com",
            "ksantana361@eunet.com"
        ],
        "phoneNumbers": [
            "361-551-8320",
            "361-494-5040",
            "361-702-6668"
        ],
        "socMedias": [
            {
                "google": "ksantana@google.com"
            },
            {
                "linkedin": "ksantana@linkedin.com"
            },
            {
                "google": "ksantana@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-08-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "FRANHAWK8234",
    "name": {
        "title": "Mr",
        "first": "Frank",
        "middle": "E",
        "last": "Hawkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "4214 Green Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bournemouth",
        "locality1": "England",
        "locality2": "Dorset",
        "country": "GB",
        "postalCode": "BH2",
        "geoSpatial": [
            "-1.8795",
            "50.7205"
        ]
    },
    "contact": {
        "email": "fhawkins362@telstra.com",
        "phone": "362-586-8234",
        "socMedia": {
            "google": "fhawkins@google.com"
        }
    },
    "login": {
        "username": "fhawkins",
        "oauth2": "fhawkins@google.com",
        "password": "$2y$10$u0o82A0mWNrr9t1iA7xkdO1UPJjshiUdMFUBKwsOU5oaWXxMaOIpy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-09-24"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KIAHERM2641",
    "name": {
        "title": null,
        "first": "Kia",
        "middle": null,
        "last": "Herman",
        "suffix": null
    },
    "address": {
        "streetAddress": "3475 Red Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chiesanuova",
        "locality1": null,
        "locality2": null,
        "country": "SM",
        "postalCode": "47894",
        "geoSpatial": [
            "12.4167",
            "43.9167"
        ]
    },
    "contact": {
        "email": "kherman363@bifty.com",
        "phone": "363-020-2641",
        "socMedia": []
    },
    "login": {
        "username": "kherman",
        "oauth2": null,
        "password": "$2y$10$5YSb.oZo5zXmqh8GxzrRe.uLeOHoMjXYi\/eTBPPgcZX7eKCUsBd1m"
    },
    "otherContact": {
        "emails": [
            "kherman363@softbank.com"
        ],
        "phoneNumbers": [
            "363-060-2346"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-01-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "PATBAKE1070",
    "name": {
        "title": "Mr",
        "first": "Pat",
        "middle": "R",
        "last": "Baker",
        "suffix": null
    },
    "address": {
        "streetAddress": "719 Little Stream Road",
        "buildingName": "Building 09",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Blanchetown",
        "locality1": "SA",
        "locality2": "SA FAR",
        "country": "AU",
        "postalCode": "5357",
        "geoSpatial": [
            "139.6145",
            "-34.3531"
        ]
    },
    "contact": {
        "email": "pbaker364@chunghwa.com",
        "phone": "364-995-1070",
        "socMedia": {
            "linkedin": "pbaker@linkedin.com"
        }
    },
    "login": {
        "username": "pbaker",
        "oauth2": "pbaker@linkedin.com",
        "password": "$2y$10$.nDeKssC.UcfwINUEgllHeb.vF326dNnTJVqYpbyk0sG1Ah0WdRVm"
    },
    "otherContact": {
        "emails": [
            "pbaker364@telesystems.com",
            "pbaker364@millicom.com"
        ],
        "phoneNumbers": [
            "364-157-9530",
            "364-684-8181"
        ],
        "socMedias": [
            {
                "line": "pbaker@line.com"
            },
            {
                "linkedin": "pbaker@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-05-12"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LACIHARR4920",
    "name": {
        "title": "Ms",
        "first": "Laci",
        "middle": "M",
        "last": "Harrison",
        "suffix": null
    },
    "address": {
        "streetAddress": "878 Big Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wexford",
        "locality1": null,
        "locality2": null,
        "country": "IE",
        "postalCode": "Y35",
        "geoSpatial": [
            "-6.4575",
            "52.3342"
        ]
    },
    "contact": {
        "email": "lharriso365@telia.com",
        "phone": "365-587-4920",
        "socMedia": {
            "twitter": "lharriso@twitter.com"
        }
    },
    "login": {
        "username": "lharriso",
        "oauth2": "lharriso@twitter.com",
        "password": "$2y$10$hgDmjSaK21t1.mV0gtt8Zu7o\/uyWX38MvGptVPPl1b2YRKG3\/ysdq"
    },
    "otherContact": {
        "emails": [
            "lharriso365@eunet.com",
            "lharriso365@movil.com"
        ],
        "phoneNumbers": [
            "365-769-2217",
            "365-240-5709"
        ],
        "socMedias": [
            {
                "facebook": "lharriso@facebook.com"
            },
            {
                "linkedin": "lharriso@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-02-21"
    },
    "partner": "Y",
    "businessName": "Comfort Industries Inc"
});
db.users.insertOne(
{
    "userKey": "JOEBREN4066",
    "name": {
        "title": null,
        "first": "Joe",
        "middle": null,
        "last": "Brennan",
        "suffix": null
    },
    "address": {
        "streetAddress": "6581 Winding River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "17",
        "city": "Kalamazoo",
        "locality1": "MI",
        "locality2": "Kalamazoo",
        "country": "US",
        "postalCode": "49004",
        "geoSpatial": [
            "-85.5621",
            "42.3518"
        ]
    },
    "contact": {
        "email": "jbrennan366@icom.com",
        "phone": "366-952-4066",
        "socMedia": []
    },
    "login": {
        "username": "jbrennan",
        "oauth2": null,
        "password": "$2y$10$OVuQCW9zQFGcaFx8VdpjpuGpUDjPux9C411.XKBM4CpP1HE3DIqJy"
    },
    "otherContact": {
        "emails": [
            "jbrennan366@icom.com",
            "jbrennan366@zain.com"
        ],
        "phoneNumbers": [
            "366-713-9291",
            "366-698-4647"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-04-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "NATHMCDO6073",
    "name": {
        "title": "Mr",
        "first": "Nathan",
        "middle": "L",
        "last": "Mcdonald",
        "suffix": null
    },
    "address": {
        "streetAddress": "452 Red Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pokhari Kanher",
        "locality1": "Parner",
        "locality2": "Ahmed Nagar",
        "country": "IN",
        "postalCode": "414304",
        "geoSpatial": [
            "74.4827",
            "19.5808"
        ]
    },
    "contact": {
        "email": "nmcdonal367@bt.com",
        "phone": "367-552-6073",
        "socMedia": {
            "linkedin": "nmcdonal@linkedin.com"
        }
    },
    "login": {
        "username": "nmcdonal",
        "oauth2": "nmcdonal@linkedin.com",
        "password": "$2y$10$Bb9AdzWxMHPD2VBzSIV2lu4GseW6dXDbb5jnW2.iVSErq0Tn6DEkm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-05-09"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DARRAVAL0128",
    "name": {
        "title": "Mr",
        "first": "Darron",
        "middle": "Q",
        "last": "Avalos",
        "suffix": null
    },
    "address": {
        "streetAddress": "3034 Little Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ville-Marie",
        "locality1": "QC",
        "locality2": "Abitibi-T\u00e9miscamingue",
        "country": "CA",
        "postalCode": "J9V",
        "geoSpatial": [
            "-79.433",
            "47.3334"
        ]
    },
    "contact": {
        "email": "davalos368@softbank.com",
        "phone": "368-720-0128",
        "socMedia": {
            "google": "davalos@google.com"
        }
    },
    "login": {
        "username": "davalos",
        "oauth2": "davalos@google.com",
        "password": "$2y$10$Y4h2s.KKK3GJBhXX4LgSsOQ2S2vQNiW9O1llqCKPWhT899ZkNGDxi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-10-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ERINMYER7479",
    "name": {
        "title": "Mr",
        "first": "Erin",
        "middle": "B",
        "last": "Myers",
        "suffix": null
    },
    "address": {
        "streetAddress": "2705 Red Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Frenchs Forest",
        "locality1": "NSW",
        "locality2": "WARRINGAH",
        "country": "AU",
        "postalCode": "1640",
        "geoSpatial": [
            "151.2232",
            "-33.7482"
        ]
    },
    "contact": {
        "email": "emyers370@zain.com",
        "phone": "370-342-7479",
        "socMedia": {
            "google": "emyers@google.com"
        }
    },
    "login": {
        "username": "emyers",
        "oauth2": "emyers@google.com",
        "password": "$2y$10$cssDl6kqUK1Puonwu8EkfO.\/iArSU9mbAIDSJINowKctPoJ1At5ge"
    },
    "otherContact": {
        "emails": [
            "emyers370@bce.com",
            "emyers370@netcom.com",
            "emyers370@sprint.com"
        ],
        "phoneNumbers": [
            "370-582-7659",
            "370-715-9487",
            "370-234-2306"
        ],
        "socMedias": [
            {
                "linkedin": "emyers@linkedin.com"
            },
            {
                "linkedin": "emyers@linkedin.com"
            },
            {
                "line": "emyers@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-04-05"
    },
    "partner": "Y",
    "businessName": "Ninety Nine Percenter Partners Ltd"
});
db.users.insertOne(
{
    "userKey": "HYOMOLI2465",
    "name": {
        "title": "Ms",
        "first": "Hyo",
        "middle": "O",
        "last": "Molina",
        "suffix": null
    },
    "address": {
        "streetAddress": "1693 Little Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saipan",
        "locality1": "Saipan",
        "locality2": "Saipan",
        "country": "MP",
        "postalCode": "96950",
        "geoSpatial": [
            "145.7408",
            "15.1685"
        ]
    },
    "contact": {
        "email": "hmolina371@sprint.com",
        "phone": "371-051-2465",
        "socMedia": {
            "facebook": "hmolina@facebook.com"
        }
    },
    "login": {
        "username": "hmolina",
        "oauth2": "hmolina@facebook.com",
        "password": "$2y$10$8x3cjV.1w9nBo3tqVM4YJ.LafEy85HhV.sXlGf8.E3flg.Ub9wuea"
    },
    "otherContact": {
        "emails": [
            "hmolina371@nordnet.com"
        ],
        "phoneNumbers": [
            "371-881-4963"
        ],
        "socMedias": [
            {
                "twitter": "hmolina@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-07-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "BERTBARN0674",
    "name": {
        "title": null,
        "first": "Bert",
        "middle": null,
        "last": "Barnes",
        "suffix": null
    },
    "address": {
        "streetAddress": "205 Green Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "28",
        "city": "Perth",
        "locality1": "WA",
        "locality2": "CURTIN",
        "country": "AU",
        "postalCode": "6841",
        "geoSpatial": [
            "115.8614",
            "-31.9522"
        ]
    },
    "contact": {
        "email": "bbarnes372@unicom.com",
        "phone": "372-905-0674",
        "socMedia": []
    },
    "login": {
        "username": "bbarnes",
        "oauth2": null,
        "password": "$2y$10$JLiqOH58AigPNQDGbyP0Jusvu1g2XS5NdKZxfGBuRGPzXdzLq\/5GS"
    },
    "otherContact": {
        "emails": [
            "bbarnes372@safaricom.com",
            "bbarnes372@safaricom.com"
        ],
        "phoneNumbers": [
            "372-517-5566",
            "372-761-0154"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-08-24"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "PAULLAWR4916",
    "name": {
        "title": "Ms",
        "first": "Paulina",
        "middle": "S",
        "last": "Lawrence",
        "suffix": null
    },
    "address": {
        "streetAddress": "2461 Green Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bibile",
        "locality1": "Moneragala",
        "locality2": "Moneragala",
        "country": "LK",
        "postalCode": "91500",
        "geoSpatial": [
            "81.2192",
            "7.1577"
        ]
    },
    "contact": {
        "email": "plawrenc373@maxcomm.com",
        "phone": "373-647-4916",
        "socMedia": {
            "skype": "plawrenc@skype.com"
        }
    },
    "login": {
        "username": "plawrenc",
        "oauth2": "plawrenc@skype.com",
        "password": "$2y$10$ScC2Q0gWg6hHonJV0O73OOmMWne9mChi5txk8HZDBHuFfT6PpNiRq"
    },
    "otherContact": {
        "emails": [
            "plawrenc373@zain.com"
        ],
        "phoneNumbers": [
            "373-280-7819"
        ],
        "socMedias": [
            {
                "facebook": "plawrenc@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-04-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RENNNICH2096",
    "name": {
        "title": "Ms",
        "first": "Renna",
        "middle": "R",
        "last": "Nicholson",
        "suffix": null
    },
    "address": {
        "streetAddress": "5309 Green Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Thornhill East",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "L3T",
        "geoSpatial": [
            "-79.3946",
            "43.8227"
        ]
    },
    "contact": {
        "email": "rnichols374@telecomitalia.com",
        "phone": "374-951-2096",
        "socMedia": {
            "skype": "rnichols@skype.com"
        }
    },
    "login": {
        "username": "rnichols",
        "oauth2": "rnichols@skype.com",
        "password": "$2y$10$3cFsHwvSji9LwbivtylAxe9VoORAIawfNLJjooM5sR8cqTizvvKCC"
    },
    "otherContact": {
        "emails": [
            "rnichols374@swisscom.com"
        ],
        "phoneNumbers": [
            "374-427-5696"
        ],
        "socMedias": [
            {
                "twitter": "rnichols@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-08-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "VANNTANG3564",
    "name": {
        "title": null,
        "first": "Vannesa",
        "middle": null,
        "last": "Tang",
        "suffix": null
    },
    "address": {
        "streetAddress": "4760 Little Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Langenhagen",
        "locality1": "NI",
        "locality2": "Region Hannover",
        "country": "DE",
        "postalCode": "30853",
        "geoSpatial": [
            "9.7492",
            "52.4506"
        ]
    },
    "contact": {
        "email": "vtang375@cci.com",
        "phone": "375-579-3564",
        "socMedia": []
    },
    "login": {
        "username": "vtang",
        "oauth2": null,
        "password": "$2y$10$ndpCGtX3xGhV3wJyY5x17u8EGltyEOj\/1uH4EwWNAOs4K4ew6dl.."
    },
    "otherContact": {
        "emails": [
            "vtang375@orange.com"
        ],
        "phoneNumbers": [
            "375-086-0283"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-08-29"
    },
    "partner": "Y",
    "businessName": "Friendly Industries Ltd"
});
db.users.insertOne(
{
    "userKey": "ELOYMANN9959",
    "name": {
        "title": "Mr",
        "first": "Eloy",
        "middle": "A",
        "last": "Manning",
        "suffix": null
    },
    "address": {
        "streetAddress": "2310 Big Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Timor",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2338",
        "geoSpatial": [
            "151.0833",
            "-31.7833"
        ]
    },
    "contact": {
        "email": "emanning376@uunet.com",
        "phone": "376-966-9959",
        "socMedia": {
            "facebook": "emanning@facebook.com"
        }
    },
    "login": {
        "username": "emanning",
        "oauth2": "emanning@facebook.com",
        "password": "$2y$10$ScKyWCChidrCPG77aTJQvehIK\/k71kQ57vIAn76rJSPScONk7Xzm2"
    },
    "otherContact": {
        "emails": [
            "emanning376@cubenet.com",
            "emanning376@bce.com"
        ],
        "phoneNumbers": [
            "376-631-7314",
            "376-101-6258"
        ],
        "socMedias": [
            {
                "twitter": "emanning@twitter.com"
            },
            {
                "skype": "emanning@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-08-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LANACONL2715",
    "name": {
        "title": "Ms",
        "first": "Lana",
        "middle": "E",
        "last": "Conley",
        "suffix": null
    },
    "address": {
        "streetAddress": "5586 Red Mound Drive",
        "buildingName": "Building 6E",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Horontaipale",
        "locality1": "Vesanto",
        "locality2": "Sis\u00e4-Savo",
        "country": "FI",
        "postalCode": "72380",
        "geoSpatial": [
            "26.1438",
            "62.9149"
        ]
    },
    "contact": {
        "email": "lconley377@bt.com",
        "phone": "377-178-2715",
        "socMedia": {
            "google": "lconley@google.com"
        }
    },
    "login": {
        "username": "lconley",
        "oauth2": "lconley@google.com",
        "password": "$2y$10$LorROYSRR29bz2\/0N9Vy\/expXsK\/oKQBYwSi3LbvBx1CQvr\/psr3e"
    },
    "otherContact": {
        "emails": [
            "lconley377@nordnet.com",
            "lconley377@sktelecom.com",
            "lconley377@tm.com"
        ],
        "phoneNumbers": [
            "377-480-2663",
            "377-980-6824",
            "377-730-4765"
        ],
        "socMedias": [
            {
                "facebook": "lconley@facebook.com"
            },
            {
                "twitter": "lconley@twitter.com"
            },
            {
                "skype": "lconley@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-09-11"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "HARRDANI6086",
    "name": {
        "title": null,
        "first": "Harriett",
        "middle": null,
        "last": "Daniel",
        "suffix": null
    },
    "address": {
        "streetAddress": "2199 Big Stream Avenue",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": "92",
        "city": "Deviyakurichi",
        "locality1": "Atur",
        "locality2": "Salem",
        "country": "IN",
        "postalCode": "636112",
        "geoSpatial": [
            "78.8107",
            "11.3882"
        ]
    },
    "contact": {
        "email": "hdaniel378@netcom.com",
        "phone": "378-197-6086",
        "socMedia": []
    },
    "login": {
        "username": "hdaniel",
        "oauth2": null,
        "password": "$2y$10$hCh\/36M\/jBHklX1sTrEg1OkfljQLxeoGlSIInbNIxsgqGs8lhQ2oW"
    },
    "otherContact": {
        "emails": [
            "hdaniel378@tt.com",
            "hdaniel378@vimpelcom.com"
        ],
        "phoneNumbers": [
            "378-244-3432",
            "378-584-7567"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-08-14"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DEANGIBB8906",
    "name": {
        "title": "Mr",
        "first": "Dean",
        "middle": "T",
        "last": "Gibbs",
        "suffix": null
    },
    "address": {
        "streetAddress": "3264 Little Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Res. Sol de Luz",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "11205",
        "geoSpatial": [
            "-70.1833",
            "18.6167"
        ]
    },
    "contact": {
        "email": "dgibbs379@relcom.com",
        "phone": "379-281-8906",
        "socMedia": {
            "linkedin": "dgibbs@linkedin.com"
        }
    },
    "login": {
        "username": "dgibbs",
        "oauth2": "dgibbs@linkedin.com",
        "password": "$2y$10$QiMKfJ178DHknoMWVl4rxOcSYDDKFWw37BPVSOL50nIFbh9GsAyNK"
    },
    "otherContact": {
        "emails": [
            "dgibbs379@chunghwa.com",
            "dgibbs379@telenor.com",
            "dgibbs379@nii.com"
        ],
        "phoneNumbers": [
            "379-750-0970",
            "379-109-4604",
            "379-058-8940"
        ],
        "socMedias": [
            {
                "google": "dgibbs@google.com"
            },
            {
                "line": "dgibbs@line.com"
            },
            {
                "twitter": "dgibbs@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-04-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "FLORHORT3834",
    "name": {
        "title": "Ms",
        "first": "Flora",
        "middle": "U",
        "last": "Horton",
        "suffix": null
    },
    "address": {
        "streetAddress": "5229 Red Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sydney",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "1043",
        "geoSpatial": [
            "151.2073",
            "-33.8678"
        ]
    },
    "contact": {
        "email": "fhorton380@lguplus.com",
        "phone": "380-713-3834",
        "socMedia": {
            "line": "fhorton@line.com"
        }
    },
    "login": {
        "username": "fhorton",
        "oauth2": "fhorton@line.com",
        "password": "$2y$10$penzH1hii0YZyD6eUEl1CepXmDmkaFa1.EJk8npXyukCpyxGC1OIe"
    },
    "otherContact": {
        "emails": [
            "fhorton380@jio.com",
            "fhorton380@seednet.com"
        ],
        "phoneNumbers": [
            "380-539-7678",
            "380-174-1776"
        ],
        "socMedias": [
            {
                "skype": "fhorton@skype.com"
            },
            {
                "line": "fhorton@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-12-21"
    },
    "partner": "Y",
    "businessName": "Serious Associates Ltd"
});
db.users.insertOne(
{
    "userKey": "GAYEMILL0590",
    "name": {
        "title": "Dr",
        "first": "Gaye",
        "middle": null,
        "last": "Mills",
        "suffix": "II"
    },
    "address": {
        "streetAddress": "3445 Short Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Horn\u00ed Skr\u00fdchov",
        "locality1": "Jind\u0159ich\u016fv Hradec",
        "locality2": "Jind\u0159ich\u016fv Hradec",
        "country": "CZ",
        "postalCode": "377 01",
        "geoSpatial": [
            "15.0167",
            "49.1667"
        ]
    },
    "contact": {
        "email": "gmills381@megafon.com",
        "phone": "381-900-0590",
        "socMedia": []
    },
    "login": {
        "username": "gmills",
        "oauth2": null,
        "password": "$2y$10$nEt1fs4TAYe8Ozt9uzElCOm5Js5eb3iOp9wPuDa0HQckVKxHtU7.m"
    },
    "otherContact": {
        "emails": [
            "gmills381@chunghwa.com"
        ],
        "phoneNumbers": [
            "381-745-1647"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-05-10"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "GENNFRED5047",
    "name": {
        "title": "Ms",
        "first": "Gennie",
        "middle": "U",
        "last": "Frederick",
        "suffix": null
    },
    "address": {
        "streetAddress": "6961 Short Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bocoble",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2850",
        "geoSpatial": [
            "149.652",
            "-32.6278"
        ]
    },
    "contact": {
        "email": "gfrederi382@etisalat.com",
        "phone": "382-163-5047",
        "socMedia": {
            "line": "gfrederi@line.com"
        }
    },
    "login": {
        "username": "gfrederi",
        "oauth2": "gfrederi@line.com",
        "password": "$2y$10$nK78WkN2cIX6eYkm\/591ced6ATzyOmuknRmqFFww9t8VfYHSnsz0S"
    },
    "otherContact": {
        "emails": [
            "gfrederi382@pldt.com",
            "gfrederi382@worldnet.com"
        ],
        "phoneNumbers": [
            "382-280-6064",
            "382-135-3307"
        ],
        "socMedias": [
            {
                "google": "gfrederi@google.com"
            },
            {
                "google": "gfrederi@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-08-22"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "TYROVAUG0508",
    "name": {
        "title": "Mr",
        "first": "Tyron",
        "middle": "I",
        "last": "Vaughn",
        "suffix": null
    },
    "address": {
        "streetAddress": "8649 Short Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Angelopolis",
        "locality1": "Angel\u00f3polis",
        "locality2": "Angel\u00f3polis",
        "country": "CO",
        "postalCode": "055830",
        "geoSpatial": [
            "-75.7092",
            "6.1107"
        ]
    },
    "contact": {
        "email": "tvaughn383@ais.com",
        "phone": "383-748-0508",
        "socMedia": {
            "skype": "tvaughn@skype.com"
        }
    },
    "login": {
        "username": "tvaughn",
        "oauth2": "tvaughn@skype.com",
        "password": "$2y$10$ZYaivOqZxpX7VmIJcpbmeebATRMrWdhMLWbVMIwEY7Qcu.eMJ9bUu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-09-15"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LAVESKIN0706",
    "name": {
        "title": null,
        "first": "Laverne",
        "middle": null,
        "last": "Skinner",
        "suffix": null
    },
    "address": {
        "streetAddress": "7522 Red Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "67",
        "city": "Wilmington",
        "locality1": "DE",
        "locality2": "New Castle",
        "country": "US",
        "postalCode": "19804",
        "geoSpatial": [
            "-75.6184",
            "39.7168"
        ]
    },
    "contact": {
        "email": "lskinner384@nii.com",
        "phone": "384-065-0706",
        "socMedia": []
    },
    "login": {
        "username": "lskinner",
        "oauth2": null,
        "password": "$2y$10$XpGnWtvixaGlf6TpyU\/bW.fQuJL1kWT9TXOcSW1IJQVjU3.puVuze"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-12-27"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "KEVIMAHO5210",
    "name": {
        "title": "Ms",
        "first": "Kevin",
        "middle": "V",
        "last": "Mahoney",
        "suffix": null
    },
    "address": {
        "streetAddress": "8568 Long Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dunkerque",
        "locality1": "Arrondissement de Dunkerque",
        "locality2": "Nord",
        "country": "FR",
        "postalCode": "59377 CEDEX 1",
        "geoSpatial": [
            "2.377",
            "51.033"
        ]
    },
    "contact": {
        "email": "kmahoney385@ote.com",
        "phone": "385-524-5210",
        "socMedia": {
            "line": "kmahoney@line.com"
        }
    },
    "login": {
        "username": "kmahoney",
        "oauth2": "kmahoney@line.com",
        "password": "$2y$10$qOyigrIIIneb\/HEEiTHbq.2OPf1ewuhoAgq2xc8mYG.c4YBEcyCIu"
    },
    "otherContact": {
        "emails": [
            "kmahoney385@cci.com"
        ],
        "phoneNumbers": [
            "385-769-6878"
        ],
        "socMedias": [
            {
                "facebook": "kmahoney@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-10-21"
    },
    "partner": "Y",
    "businessName": "Round the Clock Partners"
});
db.users.insertOne(
{
    "userKey": "KATEQUIN2452",
    "name": {
        "title": "Ms",
        "first": "Katerine",
        "middle": "Y",
        "last": "Quinn",
        "suffix": null
    },
    "address": {
        "streetAddress": "9529 Red Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chester",
        "locality1": "ID",
        "locality2": "Fremont",
        "country": "US",
        "postalCode": "83421",
        "geoSpatial": [
            "-111.5351",
            "44.0011"
        ]
    },
    "contact": {
        "email": "kquinn386@openworld.com",
        "phone": "386-607-2452",
        "socMedia": {
            "google": "kquinn@google.com"
        }
    },
    "login": {
        "username": "kquinn",
        "oauth2": "kquinn@google.com",
        "password": "$2y$10$exnfWXvU9PkDgJV96FL4uecN.th4aHXdP\/4In5P5xJ1PhKtwK8.lG"
    },
    "otherContact": {
        "emails": [
            "kquinn386@sprint.com",
            "kquinn386@sprint.com",
            "kquinn386@kddi.com"
        ],
        "phoneNumbers": [
            "386-007-1220",
            "386-263-7398",
            "386-289-3515"
        ],
        "socMedias": [
            {
                "facebook": "kquinn@facebook.com"
            },
            {
                "facebook": "kquinn@facebook.com"
            },
            {
                "twitter": "kquinn@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-11-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "JUNIHUMP0213",
    "name": {
        "title": null,
        "first": "Junior",
        "middle": null,
        "last": "Humphrey",
        "suffix": null
    },
    "address": {
        "streetAddress": "1512 Blue Woods Road",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "St Helier",
        "locality1": "Jersey Channel Islands",
        "locality2": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE2",
        "geoSpatial": [
            "-2.1333",
            "49.2"
        ]
    },
    "contact": {
        "email": "jhumphre387@nordnet.com",
        "phone": "387-473-0213",
        "socMedia": []
    },
    "login": {
        "username": "jhumphre",
        "oauth2": null,
        "password": "$2y$10$d4EAgesXo8Ck1bD0tAAKz.rf7\/Yflt3g.6aeA1SFn5nfVGF3NAGZq"
    },
    "otherContact": {
        "emails": [
            "jhumphre387@ktc.com"
        ],
        "phoneNumbers": [
            "387-388-6114"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-09-26"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALISCOOP8045",
    "name": {
        "title": "Ms",
        "first": "Alisia",
        "middle": "T",
        "last": "Cooper",
        "suffix": null
    },
    "address": {
        "streetAddress": "9041 Big Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Helena",
        "locality1": "MT",
        "locality2": "Lewis and Clark",
        "country": "US",
        "postalCode": "59604",
        "geoSpatial": [
            "-111.9689",
            "46.6672"
        ]
    },
    "contact": {
        "email": "acooper388@att.com",
        "phone": "388-371-8045",
        "socMedia": {
            "linkedin": "acooper@linkedin.com"
        }
    },
    "login": {
        "username": "acooper",
        "oauth2": "acooper@linkedin.com",
        "password": "$2y$10$cNp2zJ1rRcT0t2e8zr44AuyCOGA63OcNqAFyHHs3iCjLX\/7oyDZIy"
    },
    "otherContact": {
        "emails": [
            "acooper388@telstra.com",
            "acooper388@ktc.com",
            "acooper388@belgacom.com"
        ],
        "phoneNumbers": [
            "388-629-2564",
            "388-680-6268",
            "388-506-9497"
        ],
        "socMedias": [
            {
                "line": "acooper@line.com"
            },
            {
                "line": "acooper@line.com"
            },
            {
                "google": "acooper@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-03-05"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "LAMAEVER1371",
    "name": {
        "title": "Mr",
        "first": "Lamar",
        "middle": "B",
        "last": "Everett",
        "suffix": null
    },
    "address": {
        "streetAddress": "2992 Short Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Juncos",
        "locality1": "Juncos",
        "locality2": "Juncos",
        "country": "PR",
        "postalCode": "00777",
        "geoSpatial": [
            "-65.921",
            "18.2275"
        ]
    },
    "contact": {
        "email": "leverett389@vimpelcom.com",
        "phone": "389-233-1371",
        "socMedia": {
            "linkedin": "leverett@linkedin.com"
        }
    },
    "login": {
        "username": "leverett",
        "oauth2": "leverett@linkedin.com",
        "password": "$2y$10$CUsLuUxmW3OGLhvmfw77GeDOir9TxQduX.LNlp1sQKSqNgcBgGDNi"
    },
    "otherContact": {
        "emails": [
            "leverett389@lguplus.com",
            "leverett389@worldnet.com",
            "leverett389@greennet.com"
        ],
        "phoneNumbers": [
            "389-904-4319",
            "389-248-7613",
            "389-154-5367"
        ],
        "socMedias": [
            {
                "facebook": "leverett@facebook.com"
            },
            {
                "linkedin": "leverett@linkedin.com"
            },
            {
                "linkedin": "leverett@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-06-01"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "MIQUHUFF9490",
    "name": {
        "title": "Dr",
        "first": "Miquel",
        "middle": null,
        "last": "Huffman",
        "suffix": "II"
    },
    "address": {
        "streetAddress": "501 Winding Mound Drive",
        "buildingName": "Building F9",
        "floor": null,
        "roomAptCondoFlat": "07",
        "city": "Goshen",
        "locality1": "CT",
        "locality2": "Litchfield",
        "country": "US",
        "postalCode": "06756",
        "geoSpatial": [
            "-73.2429",
            "41.8335"
        ]
    },
    "contact": {
        "email": "mhuffman390@telefonica.com",
        "phone": "390-454-9490",
        "socMedia": []
    },
    "login": {
        "username": "mhuffman",
        "oauth2": null,
        "password": "$2y$10$brjZ1LM53TXZUkUlrlaJaerv64AErDWnu7nOIwsGUJbIpMSOrnCzK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-01-07"
    },
    "partner": "Y",
    "businessName": "Industrious Associates Ltd"
});
db.users.insertOne(
{
    "userKey": "PHUOMITC7093",
    "name": {
        "title": "Ms",
        "first": "Phuong",
        "middle": "B",
        "last": "Mitchell",
        "suffix": null
    },
    "address": {
        "streetAddress": "4482 Winding Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kakanj",
        "locality1": "\u0110evrske",
        "locality2": "\u0110evrske",
        "country": "HR",
        "postalCode": "22319",
        "geoSpatial": [
            "15.8732",
            "43.9591"
        ]
    },
    "contact": {
        "email": "pmitchel391@orstom.com",
        "phone": "391-437-7093",
        "socMedia": {
            "line": "pmitchel@line.com"
        }
    },
    "login": {
        "username": "pmitchel",
        "oauth2": "pmitchel@line.com",
        "password": "$2y$10$skK9lti62TSfaZGpQXHZ4Om8f.oZ17G2MVDg4LOyiVCuGNRHU1Qku"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-08-21"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "DANNPRAT2272",
    "name": {
        "title": "Ms",
        "first": "Dannie",
        "middle": "H",
        "last": "Pratt",
        "suffix": null
    },
    "address": {
        "streetAddress": "2426 Long Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Murupiri",
        "locality1": "Mandar",
        "locality2": "Ranchi",
        "country": "IN",
        "postalCode": "835214",
        "geoSpatial": [
            "85.53",
            "23.8876"
        ]
    },
    "contact": {
        "email": "dpratt392@lookdata.com",
        "phone": "392-108-2272",
        "socMedia": {
            "linkedin": "dpratt@linkedin.com"
        }
    },
    "login": {
        "username": "dpratt",
        "oauth2": "dpratt@linkedin.com",
        "password": "$2y$10$wnm.knKgOznoRGJ6LfCu4.HGBMupwfPdSZXavEBO745j6ycAhe9UC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-04-13"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ALBECURT1088",
    "name": {
        "title": null,
        "first": "Albert",
        "middle": null,
        "last": "Curtis",
        "suffix": null
    },
    "address": {
        "streetAddress": "2670 Little Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Calera",
        "locality1": "JAL",
        "locality2": "Teocaltiche",
        "country": "MX",
        "postalCode": "47215",
        "geoSpatial": [
            "-102.5856",
            "21.4969"
        ]
    },
    "contact": {
        "email": "acurtis393@mtn.com",
        "phone": "393-524-1088",
        "socMedia": []
    },
    "login": {
        "username": "acurtis",
        "oauth2": null,
        "password": "$2y$10$bEZ9wqAuQ3UaF5lqMsaQXuGAP\/g3lDhk38YMdKmUyXbl9\/f.M7N4G"
    },
    "otherContact": {
        "emails": [
            "acurtis393@nordnet.com",
            "acurtis393@centurylink.com",
            "acurtis393@telesystems.com"
        ],
        "phoneNumbers": [
            "393-648-4387",
            "393-263-8572",
            "393-059-2980"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-07-16"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "RENNREYE2333",
    "name": {
        "title": "Ms",
        "first": "Renna",
        "middle": "H",
        "last": "Reyes",
        "suffix": null
    },
    "address": {
        "streetAddress": "8581 Red Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Medicine Hat North",
        "locality1": "AB",
        "locality2": "Medicine Hat ",
        "country": "CA",
        "postalCode": "T1C",
        "geoSpatial": [
            "-110.6911",
            "50.0774"
        ]
    },
    "contact": {
        "email": "rreyes394@ais.com",
        "phone": "394-218-2333",
        "socMedia": {
            "facebook": "rreyes@facebook.com"
        }
    },
    "login": {
        "username": "rreyes",
        "oauth2": "rreyes@facebook.com",
        "password": "$2y$10$3LIi4NcIIFXQKhPpS2qaCeBWCwEKUyrqQBHBChes9rSJpavAjWq1C"
    },
    "otherContact": {
        "emails": [
            "rreyes394@ktc.com",
            "rreyes394@softbank.com",
            "rreyes394@rogers.com"
        ],
        "phoneNumbers": [
            "394-526-0160",
            "394-743-4264",
            "394-255-3536"
        ],
        "socMedias": [
            {
                "linkedin": "rreyes@linkedin.com"
            },
            {
                "twitter": "rreyes@twitter.com"
            },
            {
                "twitter": "rreyes@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-11-17"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ANDEHOLT8972",
    "name": {
        "title": "Mr",
        "first": "Anderson",
        "middle": "R",
        "last": "Holt",
        "suffix": null
    },
    "address": {
        "streetAddress": "3736 Blue Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Renaico",
        "locality1": "Renaico",
        "locality2": "Provincia de Malleco",
        "country": "CL",
        "postalCode": "4670000",
        "geoSpatial": [
            "-72.5757",
            "-37.7178"
        ]
    },
    "contact": {
        "email": "aholt395@unicom.com",
        "phone": "395-065-8972",
        "socMedia": {
            "line": "aholt@line.com"
        }
    },
    "login": {
        "username": "aholt",
        "oauth2": "aholt@line.com",
        "password": "$2y$10$UExNXb1ULs0mWQcPYzww9OTHUFyiq7eckRQVqhOqI0T3b5gwBfydm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-02-04"
    },
    "partner": "Y",
    "businessName": "Powerhouse Associates Company"
});
db.users.insertOne(
{
    "userKey": "KOREMCDA7691",
    "name": {
        "title": null,
        "first": "Korey",
        "middle": null,
        "last": "Mcdaniel",
        "suffix": null
    },
    "address": {
        "streetAddress": "9370 Long Woods Circle",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": "32",
        "city": "Pandy",
        "locality1": "Wales",
        "locality2": "Powys",
        "country": "GB",
        "postalCode": "SY19",
        "geoSpatial": [
            "-3.6344",
            "52.5792"
        ]
    },
    "contact": {
        "email": "kmcdanie396@cerist.com",
        "phone": "396-143-7691",
        "socMedia": []
    },
    "login": {
        "username": "kmcdanie",
        "oauth2": null,
        "password": "$2y$10$LTaCHlNqjSZhy0RVQlm2z.xflH9yvfDsBvHBlWXTTAvMS8.NuKxoC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-01-06"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "THADROSA8629",
    "name": {
        "title": "Mr",
        "first": "Thaddeus",
        "middle": "E",
        "last": "Rosales",
        "suffix": null
    },
    "address": {
        "streetAddress": "1413 Long Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Arreigada",
        "locality1": "Arreigada",
        "locality2": "Pa\u00e7os de Ferreira",
        "country": "PT",
        "postalCode": "4595-051",
        "geoSpatial": [
            "-8.393",
            "41.2523"
        ]
    },
    "contact": {
        "email": "trosales397@optus.com",
        "phone": "397-439-8629",
        "socMedia": {
            "linkedin": "trosales@linkedin.com"
        }
    },
    "login": {
        "username": "trosales",
        "oauth2": "trosales@linkedin.com",
        "password": "$2y$10$lC8mU2oVUHl8ZdC\/fG1BnOkOB2Eq6NvECpOOfpNkzQ2XJeXvndlge"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-05-02"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "HUNGBRAD4097",
    "name": {
        "title": "Mr",
        "first": "Hung",
        "middle": "Z",
        "last": "Bradford",
        "suffix": null
    },
    "address": {
        "streetAddress": "1084 Little Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Blackfalds",
        "locality1": "AB",
        "locality2": "Alberta",
        "country": "CA",
        "postalCode": "T4M",
        "geoSpatial": [
            "-113.7853",
            "52.3834"
        ]
    },
    "contact": {
        "email": "hbradfor398@telia.com",
        "phone": "398-868-4097",
        "socMedia": {
            "facebook": "hbradfor@facebook.com"
        }
    },
    "login": {
        "username": "hbradfor",
        "oauth2": "hbradfor@facebook.com",
        "password": "$2y$10$n7zsSWgxV4L19GHnjXkMu.FRyRwffPOrMhr\/He16oK\/TfJAHVQMHS"
    },
    "otherContact": {
        "emails": [
            "hbradfor398@swisscom.com",
            "hbradfor398@icom.com",
            "hbradfor398@telus.com"
        ],
        "phoneNumbers": [
            "398-853-9382",
            "398-014-7112",
            "398-343-6815"
        ],
        "socMedias": [
            {
                "linkedin": "hbradfor@linkedin.com"
            },
            {
                "skype": "hbradfor@skype.com"
            },
            {
                "twitter": "hbradfor@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-06-25"
    },
    "partner": "N",
    "businessName": null
});
db.users.insertOne(
{
    "userKey": "ANGEPOTT7575",
    "name": {
        "title": null,
        "first": "Angelo",
        "middle": null,
        "last": "Potter",
        "suffix": null
    },
    "address": {
        "streetAddress": "2623 Little Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fossh\u00f3lli",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "645",
        "geoSpatial": [
            "-17.5386",
            "65.6859"
        ]
    },
    "contact": {
        "email": "apotter399@ooredoo.com",
        "phone": "399-340-7575",
        "socMedia": []
    },
    "login": {
        "username": "apotter",
        "oauth2": null,
        "password": "$2y$10$F7dlhWnS3gtc.CoeUUJNcetqPRK6IVAY6GSknu\/yvEVv90J4GJc6a"
    },
    "otherContact": {
        "emails": [
            "apotter399@icom.com"
        ],
        "phoneNumbers": [
            "399-170-4151"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-07-07"
    },
    "partner": "N",
    "businessName": null
});
