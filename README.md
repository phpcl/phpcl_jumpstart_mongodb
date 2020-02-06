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

* Create a directory on your computer to hold MongoDB data
  * In this README the home directory will be referred to as `path/to/course`
  * NOTE: if using the Git Bash Shell in Windows, the directory could be `/c/Users/<username>/jumpstart/data`
```
mkdir path/to/course/data
```
* Create a directory on your computer to map to the code examples
  * This path will be used later in these instructions to restore the sample code from the course git repo
  * NOTE: if using the Git Bash Shell in Windows, the directory could be `/c/Users/<username>/jumpstart/code`
```
mkdir path/to/course/code
```

* If you get permissions errors, make sure a group `docker` exists, and then add your current user to that group.
  * See: https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue
```
sudo groupadd docker
sudo usermod -aG docker $USER
```

## Pull the image from docker hub
* Pull the image
```
docker pull unlikelysource/mongodb_php:latest
```
* Run a container from the image substituting `path/to/course` for the actual director path you created on your host computer.
```
docker run -d --name jumpstart_mongodb -p 27777:27017 -v path/to/course/data:/data/db -v path/to/course/code:/home/root/code unlikelysource/mongodb_php:latest
```

## Course Setup
Complete these steps after pulling the image.
* Verify the container you created using any of the methods above is running:
```
docker container ls
```
* If not already in the container shell, open a shell to the container:
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it jumpstart_mongodb /bin/bash
```
* Restore files from git repo for course
```
cd /home/root/code
git clone https://github.com/phpcl/phpcl_jumpstart_mongodb
```
* Change to the directory with the restored course git repo code
```
cd /home/root/code/phpcl_jumpstart_mongodb
```
* Restore the sample data
```
mongo sample_data/jumpstart_events_insert.js
mongo sample_data/jumpstart_hotels_insert.js
mongo sample_data/jumpstart_signups_insert.js
mongo sample_data/jumpstart_users_insert.js
mongo sample_data/jumpstart_zips_insert.js
```
* Install the MongoDB PHP Library
  * See: https://docs.mongodb.com/php-library/current/tutorial/install-php-library/
```
php composer.phar install
```
* Test the MongoDB PHP extension:
```
php examples/mongodb_php_ext_test.php
```
* Test the MongoDB PHP library:
```
php examples/mongodb_php_library_test.php
```

You are now ready to run the examples!
