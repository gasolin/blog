---
title: 用React/Redux來做瀏覽器開發工具(Devtool)是種怎麼樣的體驗
tags:
  - web
  - firefox
  - browser
  - devtools
---



Future:

Step 1: Embrace the web stack (De-XUL, De-chrome, Componentize)


Step 2: Run on browser tab

Being able to develop netmonitor without clone and build entire Gecko.
Everyone can adopt modern Web front-end development workflow to evolve netmonitor and ship new features as fast as possible.
To leverage other browser’s devtools to improve netmonitor.html ‘s  performance
Tasks: we need to do some clean up for controller part during “Run on browser tabs experiment”

Step 3: Cross Browser support

so that we can support Outreachy program (To support Chrome debugging protocol so we can debug pages in chrome).
https://wiki.mozilla.org/Outreachy#Improve_DevTools_Network_Monitor


Develop browser devtools with react/redux


Phase 1 MVP scope: Refactor for maintainable code base(deXUL, deChrome, componentize modules)
Phase 2 Improve Performance, clean Bugzilla, & Plan new features
Phase 3 Run on Browser Tab & Outreachy program (Support Chrome protocol)
Phase 4 Host on Github

* [] [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27#.3akaoptx4)
* [] [How the Debugger got into the flow](http://jasonlaster.github.io/devtools/js/2017/01/20/typing-the-debugger.html)
