# phpcl_jumpstart_mongodb
Source Code for PHP-CL MongoDB JumpStart Course

## Host Computer

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
* Pull latest `mongo` image:
  * See: https://hub.docker.com/_/mongo/
```
docker pull mongo
```
* Create a directory on your computer to hold MongoDB data
  * In this README the home directory will be referred to as `/path/to/home`
  * NOTE: if using the Git Bash Shell in Windows, the home directory will be `/c/Users/<username>`
```
mkdir /path/to/home/mongodb/data
```
* Run the MongoDB image and mount the volume that maps MongoDB data to the new directory just created:
```
docker run --name phpcl_jumpstart_mongodb -v /path/to/home/mongodb/data:/data/db -d mongo
```
* Verify the container is running
```
docker container ls
```
* Verify that MongoDB is writing data to the directory you created above
```
ls -l /path/to/home/mongodb/data
```

## Inside the Container
All the following commands are executed from a container shell

* If not already in the container shell, open a shell to the container:
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it phpcl_jumpstart_mongodb /bin/bash
```
* Install PHP 7.4
```
apt-get update
apt-get upgrade
apt-get -y install software-properties-common
add-apt-repository ppa:ondrej/php
apt-get update
apt-get -y install php7.4
```
* Confirm PHP installation
```
php --version
```
* Install PHP 7.4 support modules
```
apt-get -y install php-pear php7.4-curl php7.4-dev php7.4-gd php7.4-mbstring php7.4-zip php7.4-mysql php7.4-xml
```
* Install MongoDB PHP Driver
  * See: https://www.php.net/manual/en/mongodb.installation.pecl.php
```
pecl install mongodb
```
* Install `git`
```
apt-get -y install git
```
* Set up a "home" directory
```
mkdir /home/root
```

## Restore course repo
All command listed below are issued from inside the Docker container with MongoDB and PHP 7.4

* If not already in the container shell, open a shell to the container:
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it phpcl_jumpstart_mongodb /bin/bash
```
* Restore files from repo for course
```
cd /home/root
git clone https://github.com/phpcl/phpcl_jumpstart_mongodb
```
* Restore the sample data
```
cd /home/root/phpcl_jumpstart_mongodb
mongo sample_data/jumpstart_events_insert.js
mongo sample_data/jumpstart_hotels_insert.js
mongo sample_data/jumpstart_signups_insert.js
mongo sample_data/jumpstart_users_insert.js
mongo sample_data/jumpstart_zips_insert.js
```
* Install the MongoDB PHP Library
  * See: https://docs.mongodb.com/php-library/current/tutorial/install-php-library/
```
cd /home/root/phpcl_jumpstart_mongodb
php composer.phar install
```

You are now ready to run the examples.
