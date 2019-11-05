<?php
// demonstrates the use of MongoDB\Collection::updateOne
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

function displayInfo($doc, $label)
{
    $output = "\n$label -----------------------------------------\n";
    $output .= 'Phone: ' . $doc->contact->phone . PHP_EOL;
    $output .= 'Soc Media: ' . PHP_EOL;
    foreach ($doc->otherContact->socMedias as $key => $value) {
        $output .= "\t$key : " . implode(':', $value->getArrayCopy()) . "\n";
    }
    return $output;
}

// sample data
$key        = 'ALTOBEAN9560';
$newPhone   = rand(100,999) . '-' . rand(100,999) . '-' . rand(1000,9999);
$newEmail   = 'mr.bean' . rand(1000,9999);
$newSoc     = 'test' . rand(1000,9999);

// build update args
$db   = 'jumpstart';
$coll = 'users';
$filterDoc  = [ 'userKey' => $key ];
$updateDoc  = [
    '$set' => [ 'contact.phone' => $newPhone ],
    '$push' => [ 'otherContact.socMedias' =>
        [ $newSoc => $newEmail . '@' . $newSoc  . '.com']
    ]
];

try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // fetch current document
    $doc = $client->$db->$coll->findOne($filterDoc);
    echo displayInfo($doc, 'OLD');

    // perform update
    $client->$db->$coll->updateOne($filterDoc, $updateDoc);

    // fetch updated document
    $doc = $client->$db->$coll->findOne($filterDoc);
    echo displayInfo($doc, 'NEW');

} catch (Throwable $t) {
    echo $t->getMessage();
}

// JSON op to model:
/*
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
*/