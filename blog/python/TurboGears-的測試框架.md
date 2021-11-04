---
title: TurboGears 的測試框架
tags:
  - TurboGears
date: 2006-03-24 11:04:58
---

TurboGears 裡集成了 [nose](http://somethingaboutorange.com/mrl/projects/nose/) 作為測試工具. nose 支持 unitest / doctest, 可以對資料庫處理 (Model), 生成的頁面(View),  cherrypy 輸出結果(Controller) 作測試. 

搭配 selenium4gears 直接測試網頁介面的能力, 讓 TurboGears 擁有了完整的測試方法.

TurboGears 可以直接集成成熟的現成 python 套件, 這是使用 TurboGears 的好處.