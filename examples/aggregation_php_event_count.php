<?php
// This script produces a count of signups by event for the year 2021.
// Output includes event name, key and count.
// Sorted by count in descending order.
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');
    $query  = [
        ['$match' => ['eventInfo.eventDate' => ['$regex' => '^2021']]],
        ['$addFields' => [
            'name'  => [ '$concat' => ['$eventInfo.eventName',' [','$eventInfo.eventKey',']']],
            'value' => 1
        ]],
        [ '$group' => [ '_id'   => '$name', 'count' => [ '$sum' => '$value' ]]],
        [ '$sort' =>  [ 'count' => -1 ]]
    ];
    $query = $client->jumpstart->signups->aggregate($query);

    // output results
    printf("%50s | %8s\n", 'Event [Key]', 'Count');
    printf("%50s | %8s\n", str_repeat('-', 50), str_repeat('-', 8));
    foreach ($query as $doc)
        printf("%50s | %8s\n", $doc->_id, $doc->count);
} catch (Throwable $t) {
    echo $t->getMessage();
}

// model query:
/*
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
*/