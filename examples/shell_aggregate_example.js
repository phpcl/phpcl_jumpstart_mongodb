// NOTE: you cannot run this script directly
//       cut and paste the query into a mongo shell first
use jumpstart;

// "normalize" a set of existing MongoDB collections
// 1. Create a new collection "signup_ltd" from "signups" by adding a new field "userKey" and unsetting "signups.userInfo" and "signups.eventInfo"
db.signups.aggregate([
    { $addFields : { "userKey" : "$userInfo.userKey" }},
    { $unset : ["userInfo","eventInfo"] },
    { $out   : "signup_ltd" }
]);

// 2. Create a new collection "event_ltd" from "events" by unsetting "hotelInfo"
db.events.aggregate([
    { $unset : "hotelInfo" },
    { $out   : "event_ltd" }
]);

// 3. Get a list of signups with full user, event and hotel info using $lookup
db.signup_ltd.aggregate([
    { $lookup :
        {
            "from"         : "users",
            "localField"   : "userKey",
            "foreignField" : "userKey",
            "as"           : "userInfo"
        }
    },
    { $lookup :
        {
            "from"         : "event_ltd",
            "localField"   : "eventKey",
            "foreignField" : "eventKey",
            "as"           : "eventInfo"
        }
    },
    { $match:
        { "eventInfo.eventDate" : { "$regex" : "^2021" } }
    },
    { $lookup :
        {
            "from"         : "hotels",
            "localField"   : "eventInfo.propertyKey",
            "foreignField" : "propertyKey",
            "as"           : "hotelInfo"
        }
    },
    { $project :
        {
            "_id" : 0,
            "eventInfo.eventName" : 1,
            "eventInfo.eventDate" : 1,
            "hotelInfo.hotelName" : 1,
            "hotelInfo.location.city" : 1,
            "hotelInfo.location.country" : 1,
            "userInfo.name.first" : 1,
            "userInfo.name.last" : 1
        }
    }
]);

// 4. List of event names, dates, hotels and countries held for the year 2021
db.signups.aggregate([
    {$match:{"eventInfo.eventDate":/^2021/}},
    {$addFields:
        {
            "name":"$eventInfo.eventName",
            "date":"$eventInfo.eventDate",
            "hotel":"$eventInfo.hotelInfo.hotelName",
            "country":"$eventInfo.hotelInfo.location.country"
        }
    },
    {$project:{"name":1,"date":1,"hotel":1,"country":1,"_id":0}},
    {$sort:{"date":1}}
]);

// 5. This query produces a count of signups by event for the year 2021.  Output includes event name, key and count.  Sorted by count in descending order.
db.signups.aggregate([
    {$match: {"eventInfo.eventDate": {"$regex":"^2021"}}},
    {$addFields:
        {
            "name": {$concat : ["$eventInfo.eventName"," [","$eventInfo.eventKey","]"]},
            "value":1
        }
    },
    {$group:{"_id":"$name", "count":{$sum:"$value"}}},
    {$sort:{"count":-1}}
]);
