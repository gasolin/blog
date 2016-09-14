---
title: 使用 widgets 實現簡單 AJAX
tags:
  - python
  - TurboGears
date: 2007-01-14 13:06:46
---

IBM developer works 上的 'Ajax with Rails' 一文中提到 Rails 的 helper 裡有一個 link_to_remote 功能, 可以簡單地在使用者按下 link 的情況下, 用 AJAX 的方式取得資料並更新指定的 div 區塊, 從而實現最基本的 AJAX 使用.

而這些功能使用 TurboGears 的 widgets 並不難實現, 我寫了個 [Wrap AJAX operation in Widgets](http://docs.turbogears.org/1.0/RemoteLink) 例子放在官方網站上

程式碼/代碼相當簡單, pylons 使用者/用戶也可以將它改寫成 ToscaWidgets 版本.