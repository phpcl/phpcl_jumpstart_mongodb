# phpcl_jumpstart_mongodb
Examples and Sample Data for PHP-CL JumpStart: MongoDB

## VM
* Install `docker`
* Create a volume `jumpstart`
```
docker volume create jumpstart
```
* Identify the location
```
docker volume ls
docker volume inspect jumpstart
```
* Run PHP for Linux image and mount the volume
```
docker run -d mongo:bionic -it --name phpcl_jumpstart_mongodb --mount source=jumpstart,target=/mnt/jumpstart
```
* Get container ID
```
docker container ls
```
* Open a shell to the container
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it phpcl_jumpstart_mongodb /bin/bash
```
* Restore files from repo for course
```
cd /srv/jumpstart
git clone https://github.com/phpcl/phpcl_jumpstart_mongodb
```
* Restore database and assign privileges
```
cd /srv/jumpstart/phpcl_jumpstart_mongodb
mongo /srv/jumpstart/phpcl_jumpstart_mongodb/sample_data/jumpstart_users_insert.js
mongo /srv/jumpstart/phpcl_jumpstart_mongodb/sample_data/jumpstart_hotels_insert.js
mongo /srv/jumpstart/phpcl_jumpstart_mongodb/sample_data/jumpstart_events_insert.js
mongo /srv/jumpstart/phpcl_jumpstart_mongodb/sample_data/jumpstart_signups_insert.js
```
