<?php
use MongoDB\Driver\ {Manager,BulkWrite,Query,Command};

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
    $mongo = new Manager('mongodb://localhost:27017');

    // clear out the test database
    $cmd = new Command(['dropDatabase' => 1]);
    $mongo->executeCommand($db, $cmd);

    // write test data
    $write = new BulkWrite();
    foreach ($data as $doc) $write->insert($doc);
    $mongo->executeBulkWrite($ref, $write);

    // execute query
    $filter  = ['active' => 1];
    $options = [];
    $query = new Query($filter, $options);
    $rows  = $mongo->executeQuery($ref, $query);

    // output results
    foreach ($rows as $document) {
      var_dump($document);
    }
} catch (Throwable $t) {
    echo $t->getMessage();
}
