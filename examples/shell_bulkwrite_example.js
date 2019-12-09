// NOTE: you cannot run this script directly
//       cut and paste the query into a mongo shell first
bulkDoc = [
    {"insertOne" : { "document" : {"key" : "FRF", "first" : "Fred","last" : "Flintstone","active" : 1}}},
    {"insertOne" : { "document" : {"key" : "WIF", "first" : "Wilma","last" : "Flintstone","active" : 1}}},
    {"insertOne" : { "document" : {"key" : "BAR", "first" : "Barney","last" : "Rubble","active" : 0}}},
    {"insertOne" : { "document" : {"key" : "BER", "first" : "Betty","last" : "Rubble","active" : 0}}},
    {"updateOne" : { "filter"   : {"key" : "BER"}, "update" : {"$set" : {"active" : 1}}}},
    {"deleteOne" : { "filter"   : {"key" : "BAR"}}}
]

// clear out the test collection before proceeding
use test;
db.users.drop();

// execute the bulk write operation, and run find() to view the results:
db.users.bulkWrite(bulkDoc);
db.users.find({},{"_id":0});
