<?php
// demonstrates the use of MongoDB\Collection::insertMany
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// test data
$data = [
    ['first' => 'Fred','last' => 'Flintstone','active' => 1],
    ['first' => 'Wilma','last' => 'Flintstone','active' => 1],
    ['first' => 'Barney','last' => 'Rubble','active' => 0],
    ['first' => 'Betty','last' => 'Rubble','active' => 0],
];
try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // drop users collection from test database
    $client->test->users->drop();

    // write test data using insertMany
    $client->test->users->insertMany($data);

    // fetch all documents
    $query = $client->test->users->find();

    // output results
    foreach ($query as $document) {
      var_dump($document);
    }
} catch (Throwable $t) {
    echo $t->getMessage();
}
