# Source Code for PHP-CL MongoDB JumpStart Course

## Host Computer Setup

The commands listed here, for the most part, must be performed either by root (Windows: administrator), or a user with root access (e.g. member of `sudoers` group).

For Windows installations, it is recommended that you install [Git for Windows](https://gitforwindows.org/).  You can then use the `bash` shell included with this product to run the commands exactly as in these instructions.

To configure your computer to run the examples in the PHP-CL JumpStart:MongoDB, proceed as follows:
* Install `docker`
  * CentOS: https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce
  * Debian: https://docs.docker.com/install/linux/docker-ce/debian/
  * Fedora: https://docs.docker.com/install/linux/docker-ce/fedora/
  * Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
  * Windows: https://docs.docker.com/docker-for-windows/install/
  * Mac: https://docs.docker.com/docker-for-mac/install/
* If you get permissions errors when running `docker` commands, make sure a group `docker` exists, and then add your current user to that group.
  * See: https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue
```
sudo groupadd docker
sudo usermod -aG docker $USER
```
* Clone this repository to some directory which is referred to as `/path/to/repo` in this guide
```
git clone https://github.com/phpcl/phpcl_jumpstart_mongodb /path/to/repo
```

## Run the Container
From a terminal window (command prompt) on your host computer:

### Using Docker Compose (easiest way!)
* Install [`docker compose`](https://docs.docker.com/compose/install/)
* Change to the directory for this repository
```
cd /path/to/repo
```
* Bring the demo environment online using docker-compose
```
docker-compose up
```

### Using Docker (hard way)
* Download the image
```
docker pull unlikelysource/mongodb_php:latest
```
* Create a volume to hold MongoDB data
```
docker volume create db_data_jumpstart_mongodb
```
* Run the image
```
docker run -d --name phpcl-jumpstart-mongodb -p 27111:27017 -v db_data_jumpstart_mongodb:/data/db -v /path/to/repo:/home/root/code unlikelysource/mongodb_php:latest
```
* Copy the init script
```
docker cp ./docker/init.sh phpcl-jumpstart-mongodb:/tmp/init.sh
```

## Course Setup
Complete these steps after getting the container up and running.

* Verify the container is running:
```
docker container ls
```
* If not already in the container shell, open a shell to the container:
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it phpcl-jumpstart-mongodb /bin/bash
```
* Confirm files from git repo for course are available in the container.  At a minimum you should see listed this `README.md` file.
```
cd /home/root/code
ls -l
```
* Confirm MongoDB is running
```
mongo
> db.serverStatus();
> exit;
```

### Restore the sample data using the init script
There's a file `/tmp/init.sh` that restores the sample data and install the MongoDB PHP Library.
* Examine the init script
```
cat /tmp/init.sh
```
* Run the init script
```
/tmp/init.sh
```
* For output you should see a reference to the _Flintstones_.

### Restore the sample data using the hard way
If you prefer to do the setup yourself (good practice!), proceed as follows:
* Restore the sample data using the `mongo` shell
```
mongo /home/root/code/sample_data/jumpstart_events_insert.js
mongo /home/root/code/sample_data/jumpstart_hotels_insert.js
mongo /home/root/code/sample_data/jumpstart_signups_insert.js
mongo /home/root/code/sample_data/jumpstart_users_insert.js
mongo /home/root/code/sample_data/jumpstart_zips_insert.js
```
* Install the MongoDB PHP Library
  * See: https://docs.mongodb.com/php-library/current/tutorial/install-php-library/
  * Examine the file `/home/root/code/composer.json`
  * Run composer install
```
php composer.phar self-update
php composer.phar install
```

## Test the MongoDB PHP Extension and Library
* If not already in the container shell, open a shell to the container:
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it phpcl-jumpstart-mongodb /bin/bash
```
* Change to the directory mapped to this repo:
```
cd /home/root/code
```
* Test the MongoDB PHP extension:
```
php examples/mongodb_php_ext_test.php
```
* Test the MongoDB PHP library:
```
php examples/mongodb_php_library_test.php
```
* For output you should see a reference to the _Flintstones_.

You are now ready to run the examples!
