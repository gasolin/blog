---
title: JSDoc generator in Gaia
tags:
  - FirefoxOS
  - webframework
date: 2015-06-08 02:47:26
---

<iframe allowfullscreen="" frameborder="0" height="333" mozallowfullscreen="" msallowfullscreen="" oallowfullscreen="" src="https://www.flickr.com/photos/martino_/9737982315/in/photolist-fQvGSP-amDaFg-amG2rb-59b4Yy-5vWMzf-f8qaks-hxt2tZ-9vy7L8-hD4KYt-edj5U8-4GZkRV-edj3BF-oKVYK7-edpEGS-edjc8T-f8brp4-dm5RTi-7SGqv8-8cxsHY-991Tu5-hAXRh8-fgMMhj-jjR181-4EySgF-fwa9zL-cAtxiU-7HKgV-9VMUi1-h4tqKg-ej3JDk-azMMwP-8p6YBM-akKnga-91AQhf-2j7XBh-pGxPMD-bTBf44-mSJdMU-ixg1hh-jd1NvW-fvUZYz-fvUXbP-7kpHpC-91xGz8-91AQ7b-hD3SUB-tf8mBc-gYsCxY-j7WsYW-ixg9AZ/player/" webkitallowfullscreen="" width="500"></iframe>

Last week I've [post](https://groups.google.com/forum/#!topic/mozilla.dev.gaia/UI1uL7ukedo) on dev-gaia to notice the change of JSDoc generator.

Now gaia's jsdoc generator takes standard  jsdoc config format from each app's jsdoc.json file. And app owner could  customize its look and feel if they prefer to do so.
[http://usejsdoc.org/about-<wbr></wbr>configuring-jsdoc.html](http://usejsdoc.org/about-configuring-jsdoc.html)

Here's the working jsdoc for Firefox OS settings app [http://gasolin.github.io/gaia/settings/ .](http://gasolin.github.io/gaia/settings/)

[![](http://4.bp.blogspot.com/-diJKPL8ynts/VXUCIo35OBI/AAAAAAAAD5k/JG59TzUcjHI/s400/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7%2B2015-06-08%2B%25E4%25B8%258A%25E5%258D%258810.46.21.png)](http://4.bp.blogspot.com/-diJKPL8ynts/VXUCIo35OBI/AAAAAAAAD5k/JG59TzUcjHI/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7%2B2015-06-08%2B%25E4%25B8%258A%25E5%258D%258810.46.21.png)

The trick is done by [gulp](http://gulpjs.com/) and shell commands, which can be apply on any other projects. Here's how I did it.

First of all is install required packages

> $ npm install gulp gulp-shell jsdoc --save-dev
Then open `gulpfile.js` and add following scripts:

> var gulp = require('gulp');
> var shell = require('gulp-shell');
> 
> gulp.task('jsdoc', shell.task([
> &nbsp; './node_modules/jsdoc/jsdoc.js -c jsdoc.json'
> ]));
(It's an simplified version because gaia contains 20+ web apps in it, so I add some tree-walking code to create bunch of gulp tasks. But basically its the same)
The simplified version is now available for reuse in [webapplate](https://github.com/webapplate/webapplate/blob/master/gulpfile.js).

Bonus section:

Here's how I upload jsdoc ([http://gasolin.github.io/gaia/settings/](http://gasolin.github.io/gaia/settings/) , [http://gasolin.github.io/gaia/system/](http://gasolin.github.io/gaia/system/)) to github gh pages.

Add another section in gulpfile.js with following script

> var gulp = require('gulp');
> var ghPages = require('gulp-gh-pages');
> 
> ...
> 
> gulp.task('github', ['jsdoc'], function() {
> &nbsp; return gulp.src('./docs/**/*')
> &nbsp;&nbsp;&nbsp; .pipe(ghPages());
> });
Run `gulp github` command and the build tool will generate jsdoc and upload to github page automatically.
