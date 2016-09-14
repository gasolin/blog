---
title: TurboGears 支持各種 Ajax 套件
tags:
  - TurboGears
date: 2006-03-23 12:32:02
---

網路上許多 Ajax 套件, 例如 [Dojo](http://dojotoolkit.org/), [Rico](http://openrico.org/), 提供了比 TurboGears 預設的 mochikit 更多視覺上或是功能上的便利.

要讓 TurboGears 框架支援更多這些 Ajax 函式庫超容易. 只要將解壓縮後的函式庫放到 Turbogears/static/js 資料夾下. 然後在要使用時在 html 中以 script type="text/javascript"  src = "/tg_js/script.js" 路徑加入即可

例如要用 Dojo 的 WYSIWYG 網頁編輯器功能, 

先在 html body 中加入
> div class="dojo-Editor"
>     some content
> /div

然後再在 title 中加入 dojo 連結
> script type="text/javascript" src="/tg_js/dojo/dojo.js

並呼叫載入要使用的 dojo-Editor 功能:
> script type="text/javascript"
> dojo.require("dojo.widget.Editor");
> /script