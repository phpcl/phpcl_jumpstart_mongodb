<?php
// Produces a list of cities within 1 degree lat/lon of Jupiter, FL USA
// NOTE: assumes "2d" index has been created on "zips" collection
// NOTE: sample data provided by MongoDB (http://media.mongodb.org/zips.json)

include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// init vars
$city     = 'JUPITER';   // search based on this city
$degrees  = 1;           // +/- 1 degree latitude/longitude
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
                '$geoWithin' => [ '$center' => [ $latLon, $degrees] ]
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
// create "2d" index
db.zips.createIndex({"loc":"2d"});
found = db.zips.findOne({"city" : "JUPITER"});

// displays a list of cities within 1 degree of Jupiter, FL
lat_lon = found.loc
degrees = 1
query = {
    "loc" : {
        $geoWithin: { $center: [lat_lon, degrees] }
    }
}
db.zips.find(query, {"city":1});
*/