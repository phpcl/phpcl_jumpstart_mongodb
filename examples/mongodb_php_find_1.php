<?php
// Produces a list of male attendee names, email address and phone numbers signed up for events taking place in Canada.
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // execute query
    $filter  = ['userInfo.otherInfo.gender' => 'M', 'eventInfo.hotelInfo.location.country' => 'CA'];
    $options = [
        'sort' => ['userInfo.name.last' => 1],
        'projection' => [
                'userInfo.name.first' => 1,
                'userInfo.name.last' => 1,
                'userInfo.contact.email' => 1,
                'userInfo.contact.phone' => 1
        ]
    ];
    $query = $client->jumpstart->signups->find($filter, $options);

    // output results
    printf("%12s | %12s | %25s | %20s\n", 'First', 'Last', 'Email', 'Phone');
    printf("%12s | %12s | %25s | %20s\n",
        str_repeat('-', 12), str_repeat('-', 12), str_repeat('-', 25), str_repeat('-', 20));
    foreach ($query as $doc) {
        printf("%12s | %12s | %30s | %20s\n",
            $doc->userInfo->name->first,
            $doc->userInfo->name->last,
            $doc->userInfo->contact->email,
            $doc->userInfo->contact->phone);
    }
} catch (Throwable $t) {
    echo $t->getMessage();
}

// model query:
/*
filter = {
    "userInfo.otherInfo.gender" : "M",
    "eventInfo.hotelInfo.location.country" : "CA"
}
projection = {
    "_id" : 0,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1,
    "userInfo.contact.email" : 1,
    "userInfo.contact.phone" : 1
}
db.signups.find(filter,projection).sort({"userInfo.name.last" : 1});
*/