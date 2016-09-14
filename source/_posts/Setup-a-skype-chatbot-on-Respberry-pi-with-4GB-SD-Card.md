---
title: Setup a skype chatbot on Respberry pi with 4GB SD Card
tags:
  - javascript
  - fun
date: 2016-04-08 02:45:45
---

It's a small challenge and fun to setup a chatbot on a small device with restrained resource.

Here's the instruction to setup a chatbot on Respberry pi with 4GB SD Card.

1\. Download respbian lite

We need respbian lite because normal Respbian took more than 4GB space. If you have 8GB or larger SD Card, normal Respbian works fine for you.

You can download them from [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/)

2\. Flash image to sdcard

I did it in Mac with diskutil. You can check the install guide from [https://www.raspberrypi.org/documentation/installation/installing-images/README.md](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) for other platforms.
> $ diskutil list
> /dev/disk0 (internal, physical):
> ...
> /dev/disk1 (internal, virtual):
> ...
> /dev/disk2 (internal, virtual):
> #:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TYPE NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IDENTIFIER
> 0:&nbsp;&nbsp;&nbsp;&nbsp; FDisk_partition_scheme&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *3.9 GB&nbsp;&nbsp;&nbsp; disk2
> 1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Windows_FAT_32 boot&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58.7 MB&nbsp;&nbsp;&nbsp; disk2s1
> 2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Linux&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.8 GB&nbsp;&nbsp;&nbsp;&nbsp; disk2s2
> 
> $ diskutil unmountDisk disk2
> $ sudo dd bs=1m if=2016-03-18-raspbian-jessie-lite.img of=/dev/rdisk2
3\. Login to respbian

Respbian lite does not provide desktop environment, so we'll do everything with command line.

Insert SDCard, bootup and login into respbian with
> name: pi
> password: raspberry
Refer from [http://elinux.org/RPi_Distributions#Raspbian](http://elinux.org/RPi_Distributions#Raspbian)

4\. Install node and redis

Refer from [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

> <pre class="prettyprint linenums"><span class="pln">$ </span>`curl -sL https://deb.nodesource.com/setup_5.x`<span class="com"> &gt; script</span></pre><pre class="prettyprint linenums"><span class="com">$ chmod 755 script</span></pre><pre class="prettyprint linenums"><span class="com">$ sudo -E ./script</span></pre><pre class="prettyprint linenums"><span class="com">$ sudo apt-get install -y nodejs </span><span class="com">build-essential redis-server</span></pre><pre class="prettyprint linenums"><span class="com">$ node -v</span></pre><pre class="prettyprint linenums"><span class="com">v5.10.1
> </span></pre><pre class="prettyprint linenums"><span class="com">5\. Install webbybot</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre><pre class="prettyprint linenums"><span class="com">Webbybot is the rewrite of hubot from coffeescript to ES6, its will be more maintainable in the future.</span></pre><pre class="prettyprint linenums"><span class="com">In respbian lite, the git is not pre-installed, so we need install **git-core** from **apt-get** as well.</span></pre>> <pre class="prettyprint linenums"><span class="com">sudo apt-get install git-core</span></pre><pre class="prettyprint linenums"><span class="com">git clone https://github.com/gasolin/webby-template pibot</span></pre><pre class="prettyprint linenums"><span class="com">cd pibot</span></pre><pre class="prettyprint linenums"><span class="com">npm install</span></pre><pre class="prettyprint linenums"><span class="com">./bin/webby</span></pre><pre class="prettyprint linenums"><span class="com">webby&gt; webby test</span></pre><pre class="prettyprint linenums"><span class="com">webby&gt; **pong**</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre><pre class="prettyprint linenums"><span class="com">6\. Deploy on messengers</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre><pre class="prettyprint linenums"><span class="com">Check Workable adapters section to install your bot onto telegram, facebook messenger, or skype</span></pre><pre class="prettyprint linenums"><span class="com">[https://github.com/gasolin/webby-template#workable-adapters](https://github.com/gasolin/webby-template#workable-adapters)</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre><pre class="prettyprint linenums"><span class="com">Let's take skype for example. First you need sign up an </span><span class="com"><span class="com">skype </span>account, then put the username/password on to .env file.</span></pre><span class="com"></span>
<pre class="prettyprint linenums"><span class="com">&nbsp;</span></pre>> <pre class="prettyprint linenums"><span class="com">vi .env</span></pre>> <span class="com"></span>> <pre class="prettyprint linenums">HUBOT_SKYPE_USERNAME=name
> HUBOT_SKYPE_PASSWORD=password</pre><pre class="prettyprint linenums">&nbsp;</pre><pre class="prettyprint linenums"><span class="com">Then install hubot-skyweb adapter and switch the core to webbybot</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre>> <pre class="prettyprint linenums"><span class="com">npm install hubot-skyweb</span></pre><pre class="prettyprint linenums"><span class="com"></span>vi node_module/hubot-skyweb/src/skyweb.coffee</pre><pre class="prettyprint linenums"></pre><pre class="prettyprint linenums">replace require 'hubot' to 'webbybot'.</pre><pre class="prettyprint linenums"></pre><pre class="prettyprint linenums">Then run</pre><pre class="prettyprint linenums">&nbsp;</pre>> <pre class="prettyprint linenums">./bin/webby -a skyweb </pre><pre class="prettyprint linenums"><span class="com">
</span></pre><pre class="prettyprint linenums"><span class="com">You are good to go! You can add new skills on your pibot by following [https://github.com/gasolin/webbybot/#add-plugins](https://github.com/gasolin/webbybot/#add-plugins)</span></pre><pre class="prettyprint linenums"><span class="com">which is same as hubot, and create your own plugin to control the respberry pi [https://github.com/gasolin/webbybot#write-your-own-plugin](https://github.com/gasolin/webbybot#write-your-own-plugin).</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre><pre class="prettyprint linenums"><span class="com">Have fun!</span></pre><pre class="prettyprint linenums"><span class="com">
</span></pre>