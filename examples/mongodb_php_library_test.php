<?php
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// test data
$data = [
    ['first' => 'Fred','last'  => 'Flintstone','role'  => 'Caveman', 'active' => 1],
    ['first' => 'Wilma','last'  => 'Flintstone','role'  => 'Cavewoman', 'active' => 1],
    ['first' => 'Barney','last'  => 'Rubble','role'  => 'Caveman', 'active' => 0],
    ['first' => 'Betty','last'  => 'Rubble','role'  => 'Cavewoman', 'active' => 0],
];
$db = 'test';
$collection = 'users';
$ref = $db . '.' . $collection;

try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // drop the test database
    $client->dropDatabase($db);

    // write test data
    $client->test->users->insertMany($data);

    // execute query
    $filter  = ['active' => 1];
    $options = [];
    $query = $client->test->users->find($filter, $options);

    // output results
    foreach ($query as $document) {
      var_dump($document);
    }
} catch (Throwable $t) {
    echo $t->getMessage();
}
