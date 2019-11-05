<?php
// demonstrates the use of MongoDB\Collection::bulkWrite
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// test data
$bulk_op = [
    ['insertOne' => [['first' => 'Fred','last' => 'Flintstone','active' => 1]]],
    ['insertOne' => [['first' => 'Wilma','last' => 'Flintstone','active' => 1]]],
    ['insertOne' => [['first' => 'Barney','last' => 'Rubble','active' => 0]]],
    ['insertOne' => [['first' => 'Betty','last' => 'Rubble','active' => 0]]],
    ['updateOne' => [['first' => 'Betty'], ['$set' => ['active' => 1]]]],
    ['deleteOne' => [['first' => 'Barney']]]
];
try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // drop users collection from test database
    $client->test->users->drop();

    // write test data using bulkWrite
    $client->test->users->bulkWrite($bulk_op);

    // fetch all documents
    $query = $client->test->users->find();

    // output results
    foreach ($query as $document) {
      var_dump($document);
    }
} catch (Throwable $t) {
    echo $t->getMessage();
}
