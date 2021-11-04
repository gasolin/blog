---
title: Pagoda CMS in Python and TurboGears
tags:
  - python
  - TurboGears
date: 2007-12-14 17:09:25
---

Pagoda 是使用 TurboGears 框架撰寫的 CMS

http://www.pagodacms.org/

現在網站上僅有他們在 pycon 2007 上的 screencast

> Pagoda provides a first-class plugin-based content management system  
> with a Web 2.0 management console 
> that integrates instantly with existing TurboGears applications.

[郵件列表](http://groups.google.com/group/turbogears/browse_thread/thread/6555cf29f9ede0f3/01a6cbdb894bc7b8?#01a6cbdb894bc7b8)中他們揭示了 Pagoda CMS 的一些特色:
* 只需兩行程式碼就能整合進任何使用 turbogears 撰寫的應用程式
* 專注於內容管理, 而非取代整個網站
* 使用 SQLAlchemy 和 genshi
* 多語言內容版本 revisioned content in multiple languages
* 友善的介面
* 使用易於瞭解的詞彙與控制流程
* 頁面可以有附件, 也可以嵌套內容
* 直接支持靜態內容 (如文件檔案), 亦提供 turbogears 新聞搜集, 日曆, 相簿, 部落格等應用程式套件

預計在三月底以 MIT license 發佈.

...... 要是這些特色都能實現的話, 
因為新聞搜集, 相簿, 部落格等都有現成的 TurboGears 應用程式, 若能用這個軟體全掛在一起, 
可以完全體現 TurboGears 應用程式開發的優勢.
在 Python 網頁框架的佔有率之爭中, 可能會是個扮演 FF7 角色的殺手呀.

2007.12: 可惜等了 9 個月連 Preview 都沒放出來, 真是 Orz. 感覺 Django 已經吃下大部分新進的 Python Web developer 了.