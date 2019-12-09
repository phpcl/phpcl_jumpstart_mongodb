<?php
// demonstrates the use of MongoDB\Collection::insertMany, updateOne(), deleteOne()
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// test data
$data = [
    ['key' => 'FRF','first' => 'Fred',  'last' => 'Flintstone','active' => 1],
    ['key' => 'WIF','first' => 'Wilma', 'last' => 'Flintstone','active' => 1],
    ['key' => 'BAR','first' => 'Barney','last' => 'Rubble',    'active' => 0],
    ['key' => 'BER','first' => 'Betty', 'last' => 'Rubble',    'active' => 0],
];
try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // drop users collection from test database
    $client->test->users->drop();

    // write test data using insertMany
    $client->test->users->insertMany($data);

    // update Betty
    $client->test->users->updateOne(['key'=>'BER'],['$set' => ['active' => 1]]);

    // delete Barney
    $client->test->users->deleteOne(['key'=>'BAR']);

    // fetch all documents
    $query = $client->test->users->find();

    // output results
    foreach ($query as $document)var_dump($document);

} catch (Throwable $t) {
    echo $t->getMessage();
}
