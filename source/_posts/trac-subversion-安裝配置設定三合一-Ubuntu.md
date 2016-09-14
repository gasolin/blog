---
title: trac-subversion 安裝配置設定三合一 (Ubuntu)
tags:
  - trac
  - subversion
date: 2007-06-27 09:01:17
---

因為電源不穩的關係, 苦吞 "svn: No such revision 425 " 訊息. svnadmin recover 都不管用, 只好重新 import 一次 Source 啦... 下次一定研究怎麼自動備份 Orz.

安裝 install apache
=======================

$ sudo apt-get install apache2

安裝 install subversion
=======================

$ sudo apt-get install subversion

$ sudo apt-get install libapache2-svn

設定 Confiigure subversion
--------------------------

Enter menu system/management/user_and_group

change to group tab, add atwo new group named "www-data"(apache) and "subversion"
then add user [your account] and "www-data" to "subversion"'s group members.

or use command instead::

 $ sudo adduser www-data subversion
 $ sudo adduser [your account] subversion

Then we could create svn repository::

 $ sudo svnadmin create /home/svn  (or $ sudo svnadmin /usr/local/svn)

Then Change the folder owner

 $ sudo chown -R www-data:www-data /home/svn
 $ sudo chmod -R g+ws /home/svn

Setup apache host site
$ sudo gedit /etc/apache2/mods-enabled/dav_svn.conf

uncomment following lines:
<pre>[Location /svn]
DAV svn
SVNPath /home/svn
AuthType Basic
AuthName "Subversion Repository"
AuthUserFile /etc/subversion/passwd
[/Location]
</pre>
or add following just above the /location:
<pre>
    [LimitExcept GET PROPFIND OPTIONS REPORT]
    Require valid-user
    [/LimitExcept]
</pre>為 subversion 存取加上密碼:

sudo htpasswd -c /etc/subversion/passwd user_name

重開 apache:

sudo /etc/init.d/apache2 restart

驗證能取得 svn 檔案:

$ svn co http://hostname/svn/myproject myproject --username user_name

安裝 Install Trac
================

$ sudo apt-get install trac

$ sudo mkdir /home/trac
$ sudo chown www-data:www-data /home/trac

To add a virtual host to host trac:

$ sudo gedit /etc/apache2/sites-available/trac

<pre><span style="font-family:monospace;">
</span>[VirtualHost *]
     ServerAdmin webmaster@localhost
     ServerName trac.example.com
     DocumentRoot /usr/share/trac/cgi-bin/
     [Directory /usr/share/trac/cgi-bin/]
             Options Indexes FollowSymLinks MultiViews ExecCGI
             AllowOverride All
             Order allow,deny
             allow from all
     [/Directory]
     Alias /trac "/usr/share/trac/htdocs"

     [Location /]
             SetHandler mod_python 
             PythonHandler trac.web.modpython_frontend 
             PythonOption TracEnvParentDir /home/trac
             #PythonOption TracEnv /home/trac/singletrac
             PythonOption TracUriRoot /
     [/Location]

     DirectoryIndex trac.cgi
     ErrorLog /var/log/apache2/error.trac.log
     CustomLog /var/log/apache2/access.trac.log combined

[/VirtualHost]
</pre>
Uncomment the AddHandler line in /etc/apache2/apache2.conf so that the Trac CGI program will be executed:

# To use CGI scripts outside /cgi-bin/:
#
AddHandler cgi-script .cgi

Disable the default virtualhost, enable the Trac virtualhost, and restart Apache2:

sudo a2dissite default
sudo a2ensite trac
sudo  /etc/init.d/apache2 reload

Make New Trac Project expose to web
===================================

sudo trac-admin /home/trac/YourProjectNameHere initenv

Then the interactive interface was prompt:
[specify the repository to /home/svn/YourProjectNameHere]

sudo chown -R www-data /home/trac/YourProjectNameHere

Refer to
http://trac.edgewall.org/wiki/TracOnUbuntu
http://trac.edgewall.org/wiki/TracModPython
http://www.blendedtechnologies.com/setting-up-subversion-on-ubuntu/11
http://philipatswarchy.wordpress.com/2006/11/27/apachesslsubversionpam/