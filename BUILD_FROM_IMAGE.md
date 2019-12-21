# Build the Image Manually
Skip this section if you've already built the image using the `Dockerfile`!

* Pull latest `mongo` image:
  * See: https://hub.docker.com/_/mongo/
```
docker pull mongo
```
* Run a container from the MongoDB image, mounting the volume that maps MongoDB data to the data directory:
```
docker run -d --name phpcl_jumpstart_mongodb -v path/to/course/data:/data/db mongo
```
* Verify the container is running
```
docker container ls
```
* Verify that MongoDB is writing data to the directory you created above
```
ls -l path/to/course/data
```
* Open a shell to the container:
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
pecl update-channels
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
