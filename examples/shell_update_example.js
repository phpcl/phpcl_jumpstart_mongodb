# NOTE: you cannot run this script directly
#       cut and paste the query into a mongo shell first
use jumpstart;
key    = 'ALTOBEAN9560'
projection = { "contact" : 1, "otherContact.socMedias" : 1 }
filter = { "userKey" : key }
update = {
    "$set" : { "contact.phone" : "111-222-3333" },
    "$push" : { "otherContact.socMedias" :
        { "github" : "judy.raymond@github.com"}
    }
}
db.users.findOne(filter);
db.users.updateOne(filter, update);
db.users.findOne(filter,projection);
