<?php
// demonstrates the use of MongoDB\Collection::deleteOne()
include __DIR__ . '/../vendor/autoload.php';
use MongoDB\Client;

// test data
$data = [
    ['key' => 1, 'first' => 'Fred',  'last' => 'Flintstone'],
    ['key' => 2, 'first' => 'Wilma', 'last' => 'Flintstone'],
    ['key' => 3, 'first' => 'Barney','last' => 'Rubble'],
    ['key' => 4, 'first' => 'Betty', 'last' => 'Rubble']
];
$filter = ['key' => 3];
$opts   = ['projection' => ['_id' => 0]];
try {

    // establish database connection
    $client = new Client('mongodb://localhost:27017');

    // drop users collection from test database
    $client->test->users->drop();

    // insert test data
    $client->test->users->insertMany($data);

    // test the filter
    $obj = $client->test->users->findOne($filter, $opts);
    echo "\nTEST FIND -------------------------------\n";
    echo implode(':',$obj->getArrayCopy());
    echo PHP_EOL;

    // output results
    $query = $client->test->users->find([],$opts);
    echo "\nBEFORE -------------------------------\n";
    foreach ($query as $doc)
        vprintf("%2d : %10s : %16s\n", $doc->getArrayCopy());
    echo PHP_EOL;

    // delete Barney
    $result = $client->test->users->deleteOne($filter);
    if (!$result->isAcknowledged()) {
        echo "Write operation not acknowledged by server\n";
    } else {
        echo ($result->getDeletedCount()) ? "Delete was successful\n" : "Delete was NOT successful\n";
    }

    // output results
    $query = $client->test->users->find([], $opts);
    echo "\nAFTER -------------------------------\n";
    foreach ($query as $doc)
        vprintf("%2d : %10s : %16s\n", $doc->getArrayCopy());

    echo PHP_EOL;
    var_dump($result);

} catch (Throwable $t) {
    echo $t->getMessage() . PHP_EOL;
}
