#!/bin/bash
cd /home/root/code
mongo ./sample_data/jumpstart_events_insert.js
mongo ./sample_data/jumpstart_hotels_insert.js
mongo ./sample_data/jumpstart_signups_insert.js
mongo ./sample_data/jumpstart_users_insert.js
mongo ./sample_data/jumpstart_zips_insert.js
php composer.phar self-update
php composer.phar install
php examples/mongodb_php_ext_test.php
php examples/mongodb_php_library_test.php
echo "Done!"
