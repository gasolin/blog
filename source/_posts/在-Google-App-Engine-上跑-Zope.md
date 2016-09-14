---
title: 在 Google App Engine 上跑 Zope
tags: []
date: 2008-07-14 01:48:55
---

http://mockit.blogspot.com/2008/07/getting-started-with-zope-on-google-app.html

只能說，這篇看到標題就很驚人了 ＠＠

原來 Guido 把 [zipimport](http://code.google.com/p/googleappengine/issues/detail?id=161#c19) 在App  Engine 上實做出來了(原來所有 App Engine 上的 module 都不能用 zip 格式調用)。所以多數 Python Framework 理論上應該都能在 GAE 上跑了。