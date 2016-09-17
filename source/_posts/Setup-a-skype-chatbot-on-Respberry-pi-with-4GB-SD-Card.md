---
title: Setup a skype chatbot on Respberry pi with 4GB SD Card
tags:
  - javascript
  - fun
date: 2016-04-08 02:45:45
---

It's a small challenge and fun to setup a chatbot on a small device with restrained resource.

Here's the instruction to setup a chatbot on Respberry pi with 4GB SD Card.

### Download respbian lite

We need respbian lite because normal Respbian took more than 4GB space. If you have 8GB or larger SD Card, normal Respbian works fine for you.

You can download them from [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/)

### Flash image to sdcard

I did it in Mac with diskutil. You can check the install guide from [https://www.raspberrypi.org/documentation/installation/installing-images/README.md](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) for other platforms.

```sh
$ diskutil list
/dev/disk0 (internal, physical):
...
/dev/disk1 (internal, virtual):
...
/dev/disk2 (internal, virtual):
... 2: Linux 3.8 GB disk2s2

$ diskutil unmountDisk disk2
$ sudo dd bs=1m if=2016-03-18-raspbian-jessie-lite.img of=/dev/rdisk2
```

### Login to respbian

Respbian lite does not provide desktop environment, so we'll do everything with command line.

Insert SDCard, bootup and login into respbian with

```
name: pi
password: raspberry
```

Refer from [http://elinux.org/RPi_Distributions#Raspbian](http://elinux.org/RPi_Distributions#Raspbian)

### Install node and redis

Refer from [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

```
$ `curl -sL https://deb.nodesource.com/setup_5.x > script
$ chmod 755 script
$ sudo -E ./script
$ sudo apt-get install -y nodejs build-essential redis-server
$ node -v
v5.10.1
```

### Install webbybot

Webbybot is the rewrite of hubot from coffeescript to ES6, its will be more maintainable in the future.

In respbian lite, the git is not pre-installed, so we need install **git-core** from **apt-get** as well.

```sh
$ sudo apt-get install git-core
$ git clone https://github.com/gasolin/webby-template pibot
$ cd pibot
$ npm install
$ ./bin/webby
webby> webby test
webby> **pong**
```

### Deploy on messengers

Check Workable adapters section to install your bot onto telegram, facebook messenger, or skype [https://github.com/gasolin/webby-template#workable-adapters](https://github.com/gasolin/webby-template#workable-adapters)

Let's take skype for example. First you need sign up an skype account, then put the username/password on to `.env` file.

```
vi .env
```

```
HUBOT_SKYPE_USERNAME=name
HUBOT_SKYPE_PASSWORD=password
```

Then install hubot-skyweb adapter and switch the core to webbybot

```sh
npm install hubot-skyweb
```

```sh
vi node_module/hubot-skyweb/src/skyweb.coffee
```

replace require 'hubot' to 'webbybot'. Then run

```sh
./bin/webby -a skyweb
```

You are good to go! You can add new skills on your pibot by following [https://github.com/gasolin/webbybot/#add-plugins](https://github.com/gasolin/webbybot/#add-plugins) which is same as hubot, and create your own plugin to control the respberry pi [https://github.com/gasolin/webbybot#write-your-own-plugin](https://github.com/gasolin/webbybot#write-your-own-plugin).

Have fun!

