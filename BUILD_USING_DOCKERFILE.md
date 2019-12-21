# Build the Image Using the Dockerfile
* Create an empty directory on your computer `path/to/course/mongodb`
* Change to this directory
```
cd path/to/course/mongodb
```
* Create a file `path/to/course/mongodb/Dockerfile`
```
touch path/to/course/mongodb/Dockerfile
```
* Paste cut and paste into the file `path/to/course/mongodb/Dockerfile` from here:
  * [https://github.com/phpcl/phpcl_jumpstart_mongodb/blob/master/Dockerfile](https://github.com/phpcl/phpcl_jumpstart_mongodb/blob/master/Dockerfile)
* Use `docker` to build an image from the docker file
```
docker build unlikelysource/mongodb_php .
```
* Run a container from the image
```
docker run -d --name phpcl_jumpstart_mongodb -v path/to/course/data:/data/db -v path/to/course/code:/home/root/code unlikelysource/mongodb_php
```
