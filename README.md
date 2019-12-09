# phpcl_jumpstart_mongodb
Source Code for PHP-CL MongoDB JumpStart Course

## VM
* Install `docker`
  * CentOS: https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce
  * Debian: https://docs.docker.com/install/linux/docker-ce/debian/
  * Fedora: https://docs.docker.com/install/linux/docker-ce/fedora/
  * Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
  * Windows: https://docs.docker.com/docker-for-windows/install/
  * Mac: https://docs.docker.com/docker-for-mac/install/
* Pull latest `Linux for PHP` image:
  * See: https://hub.docker.com/r/asclinux/linuxforphp-8.1-ultimate/tags/
```
docker pull asclinux/linuxforphp-8.1-ultimate:7.4-nts
```
* Create a volume `jumpstart_mongodb`
```
docker volume create jumpstart_mongodb
```
* Identify the location
```
docker volume ls
docker volume inspect jumpstart_mongodb
```
* Run PHP for Linux image and mount the volume
```
docker run -dit --restart=always --name phpcl_jumpstart_doctrine -v ${PWD}/:/srv/www -p 8181:80 -p 10443:443 -p 2222:22 --mount source=jumpstart_mongodb,target=/srv/jumpstart asclinux/linuxforphp-8.1-ultimate:7.3-nts lfphp
```
* Get container ID
```
docker container ls
```
* Open a shell to the container
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it phpcl_jumpstart_doctrine /bin/bash
```
* Create directories to hold the MongoDB datbase and log files
```
mkdir /srv/jumpstart/mongodb
mkdir /srv/jumpstart/mongodb/lib
mkdir /srv/jumpstart/mongodb/log
```
* Remove existing version of MongoDB from the image
  *
* Install MongoDB
  * See: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition-on-ubuntu
  * In the `/etc/mongod.conf` file set the following:
    * `storage.dbPath` to `/srv/jumpstart/mongodb/lib`
    * `systemLog.path` to `/srv/jumpstart/mongodb/log`
* Install MongoDB PHP Driver
  * See: https://www.php.net/manual/en/mongodb.installation.pecl.php
  * See: https://docs.mongodb.com/php-library/current/tutorial/install-php-library/
* Restore files from repo for course
```
cd /srv/jumpstart
git clone https://github.com/phpcl/phpcl_jumpstart_mongodb
```
* Restore sample data
```
cd /srv/jumpstart/phpcl_jumpstart_mongodb
mongo sample_data/jumpstart_events_insert.js
mongo sample_data/jumpstart_hotels_insert.js
mongo sample_data/jumpstart_signups_insert.js
mongo sample_data/jumpstart_users_insert.js
mongo sample_data/jumpstart_zips_insert.js
```
* Connect repo to container web server
```
ln -s /srv/jumpstart/phpcl_jumpstart_doctrine /srv/www/jumpstart
```
* Access container web site from your browser
```
http://localhost:8181/jumpstart
```
