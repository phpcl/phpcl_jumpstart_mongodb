// NOTE: you cannot run this script directly
//       cut and paste the query into a mongo shell first
// NOTE: you must first create a geo-spatial index on the `jumpstart.zip.loc` field before proceeding

// get a list of cities a certain distance from postal code 94103
// first get the lat/lon for Jupiter, FL
db.zips.findOne({"city" : "JUPITER"});

// displays a list of cities within 1 degree of Jupiter, FL
lat_lon = [ -80.120091, 26.933938 ]
degrees = 1
query = {
    "loc" : {
        $geoWithin: { $center: [lat_lon, degrees] }
    }
}
db.zips.find(query, {"city":1});

// create "2dsphere" index
db.zips.createIndex({"loc":"2dsphere"});

// list of post codes within 100 km of Jupiter, FL
db.zips.findOne({"city" : "JUPITER"});
lat_lon = [ -80.120091, 26.933938 ]
distance = 100000
query = {
    "loc" : {
        $near: {
            $geometry: { type: "Point", coordinates: lat_lon },
            $maxDistance: distance,
        }
    }
}
db.zips.find(query, {"city":1});

