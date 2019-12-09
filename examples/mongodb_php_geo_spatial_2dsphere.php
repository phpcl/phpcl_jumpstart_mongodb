<?php
// Produces a list of cities within 50 km of Jupiter, FL USA
// NOTE: assumes "2dsphere" index has been created on "zips" collection
// NOTE: sample data provided by MongoDB (http://media.mongodb.org/zips.json)

include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// init vars
$city     = 'JUPITER';   // search based on this city
$distance = 50000;       // i.e. 50 km
$output   = '';

try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // find 1st "zips" document located in Jupiter, Florida USA
    $found = $client->jumpstart->zips->findOne(['city' => $city]);

    // run query
    if (!$found) {

        $output = 'Sorry: city not found!';

    } else {

        // get latitude/longitude
        $latLon = $found->loc->getArrayCopy();

        // run geo-spatial query
        $filter = [
            'loc' => [
                '$near' => [
                    '$geometry' => [ 'type' => 'Point', 'coordinates' => $latLon ],
                    '$maxDistance' => $distance,
                ]
            ]
        ];
        $query = $client->jumpstart->zips->find($filter);

        // output results
        $output .= sprintf("%10s | %20s | %5s | %10s | %10s\n", 'Post Code', 'City', 'State', 'Latitude', 'Longitude');
        $output .= sprintf("%10s | %20s | %5s | %10s | %10s\n",
            '----------', str_repeat('-', 20), '-----', '----------', '----------');
        foreach ($query as $doc)
            $output .= sprintf("%10s | %20s | %5s | %10.6f | %10.6f\n",
                $doc->_id, $doc->city, $doc->state, $doc->loc[1], $doc->loc[0]);


    }

} catch (Throwable $t) {
    $output .= $t->getMessage();
}
echo $output;

// model query:
/*
// create "2dsphere" index
db.zips.createIndex({"loc":"2dsphere"});
// list of post codes within 100 km of Jupiter, FL
found = db.zips.findOne({"city" : "JUPITER"});
lat_lon = found.loc
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
*/