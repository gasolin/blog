---
title: UI Demos and reuse Gaia UI elements with Building Blocks
tags:
  - FirefoxOS
date: 2014-01-13 03:43:16
---

[![](http://1.bp.blogspot.com/-pY5UVjBXwyU/UiSoZBflAII/AAAAAAAADfY/Vgh66Qya58k/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-09-02+%E4%B8%8B%E5%8D%8811.01.52.png)&nbsp;](http://1.bp.blogspot.com/-pY5UVjBXwyU/UiSoZBflAII/AAAAAAAADfY/Vgh66Qya58k/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-09-02+%E4%B8%8B%E5%8D%8811.01.52.png)

## List of UI elements
Though what FirefoxOS encourage developers to develop for the (general) Web, but not for FirefoxOS only. There's still a portion of developers would prefer to start their very first mobile web app with FirefoxOS native look and feel.

From Feb 2013, I've made my first Firefox/OS marketplace webapp: [UI Demos](https://marketplace.firefox.com/app/ui-demos) , which demonstrate FirefoxOS (gaia) UI Building-Blocks elements and provide correspondent code blocks for reference.
&nbsp;(The wrapper version of UI Demos is also available in [Android Play Store](https://play.google.com/store/apps/details?id=tw.idv.gasolin.ffosud))

Basically those FirefoxOS(gaia) UI Building-Blocks are a set of UI elements defined purely in CSS. So you can include correspondent styles and see your web changed to a 'mobile' looking.

[![](http://2.bp.blogspot.com/-PfMDOmnaacI/UiSolBxGxmI/AAAAAAAADfg/1wCKVbcfFlM/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-09-02+%E4%B8%8B%E5%8D%8811.02.41.png)&nbsp;](http://2.bp.blogspot.com/-PfMDOmnaacI/UiSolBxGxmI/AAAAAAAADfg/1wCKVbcfFlM/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-09-02+%E4%B8%8B%E5%8D%8811.02.41.png)

## Custom headers

Since these UI are intended to serve the need of FirefoxOS(gaia) presence, they **looks not well** in other browser. (update: Include `cross_browser.css` if you want your webapp can run on other browsers.)

Recently FirefoxOS UI related developers starting a project called "[Building-Blocks](https://github.com/buildingfirefoxos/Building-Blocks/)" to make developers outside of FirefoxOS (gaia) can reuse the same UI more easily.

[https://github.com/buildingfirefoxos/Building-Blocks/](https://github.com/buildingfirefoxos/Building-Blocks/)

&nbsp; 
1\. Currently you can git clone the code from git `https://github.com/buildingfirefoxos/Building-Blocks.git`

2\. I also register 'building-blocks' to bower list so my [webapplate](https://github.com/gasolin/webapplate) project or [yeoman](http://yeoman.io/) generators can reuse it with bower.
Use bower (need ran 'npm install -g bower' first) to install 'building-blocks' into your project is easy
$ bower install building-blocks

Or you can predefined required libraries in '[bower.json](https://github.com/gasolin/webapplate/blob/master/bower.json)' file. then run 'bower install' directly.

For code and demos, please install [UI Demos](https://marketplace.firefox.com/app/ui-demos) by your Desktop Firefox browser or FirefoxOS devices.

[![](http://4.bp.blogspot.com/-cs8qurTiFCY/UiSpJFpgcvI/AAAAAAAADfo/vYAW8hGRdn0/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-09-02+%E4%B8%8B%E5%8D%8811.05.10.png)&nbsp;](http://4.bp.blogspot.com/-cs8qurTiFCY/UiSpJFpgcvI/AAAAAAAADfo/vYAW8hGRdn0/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-09-02+%E4%B8%8B%E5%8D%8811.05.10.png)

Reusable code samples
