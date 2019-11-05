// NOTE: you cannot run this script directly
//       cut and paste the query into a mongo shell first
use jumpstart;

// list of events scheduled for 2021
filter = { "eventInfo.eventDate" : { "$regex" : "^2021" } }
projection = {
    "_id" : 0,
    "eventInfo.eventName" : 1,
    "eventInfo.eventDate" : 1,
    "eventInfo.hotelInfo.hotelName" : 1,
    "eventInfo.hotelInfo.location.city" : 1,
    "eventInfo.hotelInfo.location.country" : 1,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1
}
db.signups.find(filter,projection).sort({"eventInfo.eventDate":1});

// list of events scheduled for 2021
filter = {
    "eventInfo.eventDate" : { "$regex" : "^2021" },
    "$or" : [
        { "eventInfo.hotelInfo.location.country" : { "$eq" : "AU" }},
        {"eventInfo.hotelInfo.location.country" : { "$eq" : "CA" }}
    ]
}
projection = {
    "_id" : 0,
    "eventInfo.eventName" : 1,
    "eventInfo.eventDate" : 1,
    "eventInfo.hotelInfo.hotelName" : 1,
    "eventInfo.hotelInfo.location.city" : 1,
    "eventInfo.hotelInfo.location.country" : 1,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1
}
db.signups.find(filter,projection).sort({"eventInfo.eventDate":1});
// list of male attendee names, email address and phone numbers signed up for events taking place in Canada.
filter = {
    "userInfo.otherInfo.gender" : "M",
    "eventInfo.hotelInfo.location.country" : "CA"
}
projection = {
    "_id" : 0,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1,
    "userInfo.contact.email" : 1,
    "userInfo.contact.phone" : 1
}
db.signups.find(filter,projection).sort({"userInfo.name.last" : 1});
// list of female attendee names, email address and phone numbers signed up for events taking place in the US or Canada in the last 6 months of the year 2020
filter = {
    "$and" : [
        { "userInfo.otherInfo.gender" : "F" },
        {
            "$or" : [
                { "eventInfo.hotelInfo.location.country" : "CA" },
                { "eventInfo.hotelInfo.location.country" : "US" }
            ]
        },
        { "eventInfo.eventDate" : {"$gte" : "2020-06-01" }},
        { "eventInfo.eventDate" : {"$lte" : "2020-12-31" }}
    ]
}
projection = {
    "_id" : 0,
    "eventInfo.eventDate" : 1,
    "eventInfo.hotelInfo.hotelName" : 1,
    "eventInfo.hotelInfo.location.country" : 1,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1,
    "userInfo.contact.email" : 1,
    "userInfo.contact.phone" : 1
}
db.signups.find(filter,projection).sort({"userInfo.name.last" : 1});

