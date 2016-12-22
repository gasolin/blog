---
title: debugging firefox devtools in 2016
tags:
  - devtools
  - web
date: 2016-12-22 11:12:05
---


Not like [previous article about general workflow on Mozilla Gecko project](http://blog.gasolin.idv.tw/2016/08/08/The-newbies-workflow-on-Mozilla-Gecko-project/),
This article is like a cookbook that I encountered during debugging Firefox devtools (mostly around inspector and network monitor).

## Remote debugging

According to [MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Debugging), 
First of all you need go through `Developer > Toggle Tools > Toolbox Options > Advance settings` to check 2 options:

* Enable browser chrome and add-on debugging toolboxes
* Enable remote debugging

Then use `Shift+Option+Command+i` on Mac or `Ctrl+Shift+i` on linux to open the remote debugger.

### Disable autohide in popup

Once I'm developing toolbar web extensions or any popup windows, I feel very appreciate on this feature. 

https://developer.mozilla.org/zh-TW/Add-ons/WebExtensions/Debugging#Disable_autohide

### Boost build time via set mozconfig artifact

If you just develop frontend, the [artifact build](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Artifact_builds) prebuild the C++ and static part of code so you can download and link it automatically during `mach build`,
it saves you tremendous build time and helps you move quicker.

### Open devtools and chrome debugger with website

You may not know its possible to open a website with opened devtool with command:

`./mach run --devtools --jsdebugger www.yahoo.com.tw`


## Tracing Code

### Via global search in editor

`Ctrl + Shift + f` is your good friend.


### Via DXR

[DXR](http://dxr.mozilla.org/) is a code search and navigation tool for large projects like Mozilla-center. 
It supports full-text and regex searches as well as structural queries.

http://dxr.mozilla.org/


## ES6 nits

### not use forEach with yield

`forEach` is a good way to loop array, but is not compatible with generator(because the need of implement iterator interface), so if you use `yield` inside of `forEach` loop, it will not behave as you expect.
The better choice is use `for..of` loop or `map` instead.

## Misc

### SSH Error handling in linux

http://stackoverflow.com/questions/29134512/insecureplatformwarning-a-true-sslcontext-object-is-not-available-this-prevent
