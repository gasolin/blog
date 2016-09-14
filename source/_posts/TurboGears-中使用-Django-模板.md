---
title: TurboGears 中使用 Django 模板
tags:
  - python
  - TurboGears
date: 2006-07-22 04:54:39
---

利用 TurboDjango Template Plugin, 可以在 TurboGears, Buffet, 或 CherryPy 裡如此這般調用 Django 模板:

在 controller.py 裡
```
{{{
   @expose(template = "django:dem.templates.djpage")
   def page(self):
       return dict(name="TurboGears")

 <div id="qhide_141663" style="display: block;" class="qt">}}}
```

</div> 用 "template " 參數指定樣板時加一個"django:"前綴,
或是在設定檔app.cfg中將預設的tg.defaultview = "kid" 改成
tg.defaultview = "django" 就可以在全站使用 django 模板.

djpage 是模板名稱, return dict
後面給的參數群是要傳給模板的參數.

在  djpage.html 裡
```{{{

[h1]Hello, {{name}}[/h1]
 <div id="qhide_141664" style="display: block;" class="qt">}}}
```

</div> djpage 是模板名稱, html是檔名

網頁 [http://localhost:8080/page](http://localhost:8080/page) 的輸出結果是

"

# Hello, {{name}}
"
