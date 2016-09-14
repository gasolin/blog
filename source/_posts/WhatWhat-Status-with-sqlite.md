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

<span style="font-weight: bold;font-size:24;" >1\.  check out the source from svn</span>

svn co [http://cleverdevil.org/svn/optio/whatwhat/trunk](http://cleverdevil.org/svn/optio/whatwhat/trunk)

<span style="font-weight: bold;font-size:24;" >2\.  install textile with easy_install command</span>

$ easy_install textile

<span style="font-weight: bold;font-size:24;" >3\. config the dev.cfg file to use sqlite database</span>

enter the whatwhat status folder, edit <span style="font-weight: bold;font-size:24;" >dev.cfg </span><span style="font-size:24;">:</span>

[global]
# WHATWHAT SPECIFIC
whatwhat.uploaddir = '%(current_dir_uri)s/whatwhat/static/files'

# DATABASE
sqlobject.dburi="sqlite://%(current_dir_uri)s/devdata.sqlite"

<span style="font-weight: bold;font-size:24;" >4\. create database by tg-admin sql sql command</span>

$ tg-admin sql sql (or tg-admin sql create)

<span style="font-weight: bold;font-size:24;" >5\.  add default user with catwalk</span>

5.1 first you need to start the TurboGears toolbox

$ tg-admin toolbox

5.2\. choose the catwalk in browser

5.3 select "Person" in catwalk left side menu

5.4 click "Add Person" button on top of the page

5.5 <span style="font-weight: bold;font-size:24;" >enter the following informations:
</span>
displayname: any name
email: any email<span style="font-weight: bold;font-size:24;" >
</span>userid:<span style="font-weight: bold;font-size:24;" > admin
</span>password:<span style="font-weight: bold;font-size:24;" > 21232f297a57a5a743894a0e4a801fc3
</span>
Note that the password field is crypted, the verbose password we typed means "admin"<span style="font-weight: bold;font-size:24;" >.

<span style="font-weight: bold;font-size:24;" >6\. Start whatwhat status
</span></span>
run

$ whatwhat-start.py<span style="font-weight: bold;font-size:24;" ><span style="font-weight: bold;font-size:24;" >

</span></span>enter the username/password as "admin", "admin"
, then click login.

all done!