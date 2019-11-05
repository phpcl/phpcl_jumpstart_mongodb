// NOTE: you cannot run this script directly
//       cut and paste the query into a mongo shell first
use jumpstart;

// Produces a list of of event names, dates, hotels and countries held for the year 2021
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
