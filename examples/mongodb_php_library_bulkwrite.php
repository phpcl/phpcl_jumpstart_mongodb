<?php
// demonstrates the use of MongoDB\Collection::bulkWrite
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// test data
$bulkDoc = [
    ['insertOne' => [['key' => 'FRF', 'first' => 'Fred',  'last' => 'Flintstone', 'active' => 1]]],
    ['insertOne' => [['key' => 'WIF', 'first' => 'Wilma', 'last' => 'Flintstone', 'active' => 1]]],
    ['insertOne' => [['key' => 'BAR', 'first' => 'Barney','last' => 'Rubble',     'active' => 0]]],
    ['insertOne' => [['key' => 'BER', 'first' => 'Betty', 'last' => 'Rubble',     'active' => 0]]],
    ['updateOne' => [['key' => 'BER'], ['$set'  =>  ['active'  =>  1]]]],
    ['deleteOne' => [['key' => 'BAR']]]
];
try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // drop users collection from test database
    $client->test->users->drop();

    // write test data using bulkWrite
    $client->test->users->bulkWrite($bulkDoc);

    // fetch all documents
    $query = $client->test->users->find([],['projection' => ['_id' => 0]]);

    // output results
    printf("%4s : %12s : %12s : %s\n", 'Key', 'First', 'Last', 'Status');
    printf("%4s : %12s : %12s : %s\n", '----', '------------', '------------', '------');
    foreach ($query as $document)
        vprintf("%4s : %12s : %12s : %2d\n", $document->getArrayCopy());

} catch (Throwable $t) {
    echo $t->getMessage();
}
