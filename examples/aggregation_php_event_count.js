// NOTE: you cannot run this script directly
//       cut and paste the query into a mongo shell first
use jumpstart;

// This query produces a count of signups by event for the year 2021.  Output includes event name, key and count.  Sorted by count in descending order.
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
