---
title: WhatWhat Status with sqlite
tags:
  - python
  - TurboGears
date: 2007-01-26 08:45:20
---

[WhatWhat Status](http://cleverdevil.org/whatwhat/wiki) is a web application for tracking the status of projects across
an organization. It's opensource and able to download from [here](http://cleverdevil.org/whatwhat/wiki).

I found this project from the [TurboGears book](http://www.turbogearsbook.com/). WhatWhatStatus'  default setting is for protegres and MySQL, but not for SQLite. I'd like to share my steps to use  SQLite database with  WhatWhat Status.

1\.  check out the source from svn

svn co [http://cleverdevil.org/svn/optio/whatwhat/trunk](http://cleverdevil.org/svn/optio/whatwhat/trunk)

2\.  install textile with easy_install command

`$ easy_install textile`

3\. config the dev.cfg file to use sqlite database

enter the whatwhat status folder, edit dev.cfg:

```
[global]

# WHATWHAT SPECIFIC

whatwhat.uploaddir = '%(current_dir_uri)s/whatwhat/static/files'

# DATABASE

sqlobject.dburi="sqlite://%(current_dir_uri)s/devdata.sqlite"
```

4\. create database by tg-admin sql sql command

`$ tg-admin sql sql (or tg-admin sql create)`

5\.  add default user with catwalk

5.1 first you need to start the TurboGears toolbox

$ tg-admin toolbox

5.2\. choose the catwalk in browser

5.3 select "Person" in catwalk left side menu

5.4 click "Add Person" button on top of the page

5.5 enter the following informations:

```
displayname: any name
email: any email
userid: admin
password:21232f297a57a5a743894a0e4a801fc3
```

Note that the password field is crypted, the verbose password we typed means "admin".

6\. Start whatwhat status

run

`$ whatwhat-start.py`

enter the username/password as "admin", "admin", then click login.

all done!
