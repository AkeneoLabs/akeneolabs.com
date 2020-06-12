# Docker Installation

Akeneo can be installed in Linux, Mac and Windows thanks to the docker image.

Since Akeneo 4.0, the installation is pretty easy and fast. Also gives you few cool tools that will help you to develop better.

## Requirements

- Make
- Docker
- Docker-compose
- Bash

## Download Akeneo

### Using composer

In the official page, says that you can download the latest version using the next steps:

```
mkdir pim
cd pim
docker run -ti -u www-data --rm \
    -v $(pwd):/srv/pim -v ~/.composer:/var/www/.composer -w /srv/pim \
    akeneo/pim-php-dev:4.0 php -d memory_limit=4G /usr/local/bin/composer create-project \
    akeneo/pim-community-standard /srv/pim "4.0.*@stable"
```

Unfortunately, didn't work to me. This command should download the docker images and then install Akeneo.

After install Akeneo you should run the next command to see akeneo working.

```
make dev
```

### Using a direct link

Download akeneo using the next link: [https://download.akeneo.com/pim-community-standard-v4.0-latest-icecat.tar.gz](https://download.akeneo.com/pim-community-standard-v4.0-latest-icecat.tar.gz)

Unzip the folder and finally use 

```
make dev
```

To start to download all images and install Akeneo.

### Conclusion

After installing Akeneo you can access using 

<img src="/docker-installation/home-page-akeneo" title="Doing login in Akeneo" title="Login in Akeneo">

## Xdebug

<img src="/docker-installation/starts-to-install.png" alt="Akeneo starts to be installed" title="Akeneo starts to be installed">

download-images
downloading_images
install_akeneo_project


