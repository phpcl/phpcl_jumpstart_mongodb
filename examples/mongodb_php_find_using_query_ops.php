<?php
// Produces a list of male attendee names, email address and phone numbers signed up for events taking place in Canada.
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // execute query
    $filter  = [
        '$and' => [[
            'userInfo.otherInfo.gender' => 'M',
            '$or' => [[
                'eventInfo.hotelInfo.location.country' => 'CA',
                'eventInfo.hotelInfo.location.country' => 'US'
            ]],
            'eventInfo.eventDate' => ['$gte' => '2020-06-01'],
            'eventInfo.eventDate' => ['$lte' => '2020-12-31']
        ]]
    ];
    $options = [
        'sort' => ['userInfo.name.last' => 1],
        'projection' => [
                'eventInfo.eventDate' => 1,
                'eventInfo.hotelInfo.location.country' => 1,
                'userInfo.name.first' => 1,
                'userInfo.name.last' => 1,
                'userInfo.contact.email' => 1,
                'userInfo.contact.phone' => 1
        ]
    ];
    $query = $client->jumpstart->signups->find($filter, $options);

    // output results
    printf("%12s | %12s | %28s | %20s | %3s | %10s\n", 'First', 'Last', 'Email', 'Phone', 'Cty', 'Date');
    printf("%12s | %12s | %28s | %20s | %3s | %10s\n",
        str_repeat('-', 12), str_repeat('-', 12), str_repeat('-', 28), str_repeat('-', 20), '---', str_repeat('-', 10));
    foreach ($query as $doc) {
        printf("%12s | %12s | %28s | %20s | %3s | %10s\n",
            $doc->userInfo->name->first,
            $doc->userInfo->name->last,
            $doc->userInfo->contact->email,
            $doc->userInfo->contact->phone,
            $doc->eventInfo->hotelInfo->location->country,
            $doc->eventInfo->eventDate);
    }
} catch (Throwable $t) {
    echo $t->getMessage();
}

$client->$db->events->find(
[
    '$and'=> [
        "eventDate" => ["$lt"=>"2020-09-01"],
        "eventDate" => ["$gte"=>"2020-06-01"]
    ]
],
[
    'projection' => ["eventName"=>1],
    'sort' => ["eventDate" => 1]
]
);

// model query:
/*
filter = { "$and" : [
        { "userInfo.otherInfo.gender" : "F" },
        { "$or" : [
                { "eventInfo.hotelInfo.location.country" : "CA" },
                { "eventInfo.hotelInfo.location.country" : "US" }
        ]},
        { "eventInfo.eventDate" : {"$gte" : "2020-06-01" }},
        { "eventInfo.eventDate" : {"$lte" : "2020-12-31" }} ]
}
projection = {
    "_id" : 0,
    "eventInfo.eventDate" : 1,
    "eventInfo.hotelInfo.location.country" : 1,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1,
    "userInfo.contact.email" : 1,
    "userInfo.contact.phone" : 1
}
db.signups.find(filter,projection).sort({"userInfo.name.last" : 1});
*/