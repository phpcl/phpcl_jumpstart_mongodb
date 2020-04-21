#
# MongoDB + PHP 7.4 Dockerfile
#
# https://github.com/phpcl/phpcl_jumpstart_mongodb/dockerfile
# v20191219: digest: sha256:e12db96a7b13abd127eb26080f42fbab9924af021d615cd6d45f8b963b5ddde5 size: 3246
#

# Pull base image.
FROM mongo

# Install PHP 7.4 + support modules + PHP MongoDB extension
RUN \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install software-properties-common && \
    add-apt-repository ppa:ondrej/php && \
    apt-get update && \
    apt-get -y install php7.4 && \
    apt-get -y install php-pear php7.4-curl php7.4-dev php7.4-gd php7.4-mbstring php7.4-zip php7.4-mysql php7.4-xml && \
    apt-get -y install git && \
    pecl update-channels && \
    pecl install mongodb && \
    echo "extension=mongodb.so">/etc/php/7.4/cli/conf.d/40-mongodb.ini && \
    mkdir /home/root
