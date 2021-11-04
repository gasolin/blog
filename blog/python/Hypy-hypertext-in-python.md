---
title: 'Hypy, hypertext in python'
tags: []
date: 2006-03-08 16:07:01
---

http://manatlan.online.fr/hypy.php

今天剛寫完 "Making a Time Tracker in TurboGears", 重新來看 Hypy 這個小樣板程式.

在 TurboGears 中可以這樣使用 hypy
```
0  from turbogears import controllers
0  from turbogears import expose
0  import hypy
1  class Root(controllers.RootController):
2    @expose()
3    def hypyd(self):
4        template="""
5        @html:
7         @head:
8          @title:
9           ${title}
10         @body:
11          Hello TurboGears!
12       """
13       context = (title = "Hello hypy")
14       web = hypy.parse(template,context)
15       return web
```

原本 template 字串樣版用 html 寫的話簡直就是糊在一起, 但是改用 Hypy 寫之後整體就清楚多了
Hypy 的語法跟 kid 的基本語法接近. 又能乾淨地在程式碼中內嵌網頁, 很適合當作一個取代字串樣版介於 controller 與 template 的中間形式.

只是這樣是否就又要使用者多學一種語言, 反而增加學習難度? 這就是相當見仁見智的事了.
