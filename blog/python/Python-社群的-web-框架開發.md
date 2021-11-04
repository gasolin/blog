---
title: Python 社群的 web 框架開發
tags:
  - python
  - webframework
date: 2007-03-06 05:04:36
---

框架介紹

Python 社群中各種 web 框架開發路線都有. 

Django
目前 Django 框架吸引的使用者最多, 一方面原因是 Django 團隊的性質, Django 有一個像 Rails 那樣的專職團隊在維護, 保證了專案的持續性. 同時不錯的指引文件, 對初學者友善的 Admin 介面, 開發者 Adrian 四處不遺餘力的宣傳也是吸引人的原因. 
除了持續框架維護的承諾, 宣傳之外, Django 框架傑出的效能也屢屢在網頁框架評比中勝出.
python 創造者 Guido 也將 Django 視為 Python 語言的首選網頁框架.

Django 網頁框架的每個部份都是 Django 開發團隊自行建置.
但是在 Django 之外, python 社群其實早已有各式各樣的網頁開發工具. TurboGears 與 pylons 開發者則是致力於將這些開發有年的網頁開發工具"黏起來", 發揮小兵團結的綜合效應.

TurboGears
例如使用 TurboGears 框架, 就可免去各模組間合作時的重複設定. 由於各個挑選的模組都經過多年實戰測試, 除了滿足基本的開發需求外. 也比較容易達成較深入或較特殊的需求. 

構成 TurboGears 框架的組件, 包含 Template, model, URL dispatcher, AJAX library 等等全部可以透過 setuptools 工具簡單安裝與替換. 彈性 100%!

TurboGears 框架還提供命令列(tg-admin)和網頁工具箱(Toolbox)等可供擴展的輔助工具,從而獲得相當棒的開發體驗. (Toolbox 裡面也有類似 Django Admin 的 Catwalk 工具.)

整合 Django 與 TurboGears? 
那麼這兩個都很棒的框架有沒有整合的可能呢?

Kevin Dangoor (TurboGears 框架創造者)在 Pycon 2007 的 web panel 說:

> You can have more innovation with individual components with their own maintainers than with a full stack.
> 比起完整的框架, 將各個組件讓各自的維護者維護可以產生更多的創造性

TurboGears 框架的這種開發哲學與 Django 團隊走的路是完全相反的. 加上 Django 團隊堅持在他們的網頁框架中不包含 AJAX 功能並不成問題 (我覺得問題是在其他 Django 用戶沒有什麼很容易的方法提供 Django AJAX 擴充包). 在這種理念完全不同的情況下是不可能整合的.


Pylons
TurboGears 跟 Pylons 兩個框架走的路線更相近. 一些擴充模組或樣板引擎早都可以共用了.
pylons 差不多就是換掉 controller 核心的 TurboGears.
Pylons 框架沒有 TG 的 toolbox 或 Django 的 Admin 介面, 但支援 WSGI, web helpers (學習 Rails), 效能也不錯, 卻還沒找到自己的最佳定位.

整合 TurboGears 與 Pylons?

那麼這兩個框架有沒有整合的可能呢?

> it’s the style/feel thing that represents the difference between the two framework
> -- Kavin Dangoor

[Kavin Dangoor](http://www.blueskyonmars.com/2007/03/05/merging-turbogears-and-pylons/) 和 [
Mark Ramn](http://compoundthinking.com/blog/index.php/2007/03/05/merging-turbogears-and-pylons/) 兩位 TurboGears 框架的代表人物在 pycon 2007 後紛紛對 TurboGears 與 Pylons 的整合發表了樂觀的文章. 原因是兩個框架的理念相近, 差別主要在預設選擇的套件不同. 還有實作上所造成的差異.
