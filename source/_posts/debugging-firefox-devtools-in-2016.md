---
title: Debugging Firefox Devtools in 2016
tags:
  - devtools
  - web
date: 2016-12-22 11:12:05
---


Not like [previous article about general workflow on Mozilla Gecko project](http://blog.gasolin.idv.tw/2016/08/08/The-newbies-workflow-on-Mozilla-Gecko-project/),
This article is like a cookbook that I encountered during debugging Firefox devtools (mostly around inspector and network monitor).

## Remote debugging

According to [MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Debugging), first of all you need to go through `Developer > Toggle Tools > Toolbox Options > Advance settings` to check 2 options:

* Enable browser chrome and add-on debugging toolboxes
* Enable remote debugging

Then use `Shift+Option+Command+i` on Mac or `Ctrl+Shift+i` on linux to open the remote debugger.

### Disable autohide in popup

Once I'm developing toolbar web extensions or any popup windows, I feel very appreciate this feature. 

https://developer.mozilla.org/zh-TW/Add-ons/WebExtensions/Debugging#Disable_autohide

### Boost build time via set mozconfig artifact

Add these settings in `mozconfig` file
```
# Enable debug version of the pre-build binary artifact
export MOZ_DEBUG="1"

# Automatically download and use compiled C++ components:
ac_add_options --enable-artifact-builds

# Write build artifacts to:
mk_add_options MOZ_OBJDIR=./objdir-frontend-debug-artifact
```

If you just develop frontend UI(JS, CSS, XUL, HTML), the [artifact build](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Artifact_builds) prebuild the C++ and the static part of the code so you can download and link it automatically during `mach build`, it saves you tremendous build time and helps you move quicker.

You can use the command

```
./mach build faster
```

to further boost the build time.

### Enable React and other JS debugging message

Add these settings in `mozconfig` file

`ac_add_options --enable-debug-js-modules`

It will turn on React and other JS debugging message. Note that will influence performance while running.

### Open devtools and chrome debugger with website

You may not know its possible to open a website with opened devtool with the command:

`./mach run --devtools --jsdebugger www.yahoo.com.tw`

### Test on Try server

Mozilla Try Server let you run tests on all supported platforms. You can pick which test set and which platform to run by providing command arguments. Here's what I used for test devtools related bugs on Windows, Mac, and Linux.

```
try: -b do -p linux64,macosx64,win64 -u mochitest-dt,mochitest-e10s-devtools-chrome -t none --artifact
```

Add `--artifact` argument will both save total running time and computing resources.


## Tracing Code

### Via global search in editor

Many modern editor ex sublime, visual studio code provide great support of global search. `Ctrl + Shift + f` is your good friend.


### Via DXR or searchfox

[DXR](http://dxr.mozilla.org/) and [searchfox](http://searchfox.org) is a code search and navigation tool for large projects like Mozilla-center. 
It supports full-text and regex searches as well as structural queries.

http://dxr.mozilla.org/


## ES6 nits

### Do not use forEach with yield

`forEach` is a good way to loop array, but is not compatible with the generator(because the need of implement iterator interface), so if you use `yield` inside of `forEach` loop, it will not behave as you expect.
The better choice is use `for..of` loop or `map` instead.

### Try to be functional

The powerful `=>` arrow syntax sugar is not just for replacing `bind(this)`, it gives the developer a clear way to write more compact code.

For example 

```js
promise.then(function(a , b) {
  return a + b;
});
```

can be written as 

```
promise.then((a, b) => a + b);
```

## Misc

* [Devtools hacking](https://wiki.mozilla.org/DevTools/Hacking)
* [Build faster](http://jasonlaster.github.io/devtools/js/2016/03/22/workflow.html)
* [SSH Error handling in linux](http://stackoverflow.com/questions/29134512/insecureplatformwarning-a-true-sslcontext-object-is-not-available-this-prevent)
