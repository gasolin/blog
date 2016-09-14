---
title: TurboEntity 版 SimpleBlog
tags:
  - python
  - TurboGears
date: 2006-11-02 01:59:19
---

這幾天 [TurboEntity](http://turboentity.ematia.de/) 這個類似 ActiveMapper 的模組一出現馬上獲得不小的關注.
因為它可以用幾乎與 SQLObject 數量相當的程式碼來定義 ORM, 又能完全繼承 SQLAlchemy 的效能和彈性.

[ Lee McFadden](http://www.splee.co.uk/colophon/) 從上上週開始在他的 Blog 上連載了 3 篇 'SimpleBlog' 系列文章, 引導如何使用 SQLAlchemy + TurboGears 製作簡單的 Blog系統.
他採用了接近基本`<span style="font-family:Georgia,serif;"> </span>`SQLAlchemy 的設定方式, 因此程式碼有點多.`<span style="font-family:Georgia,serif;"></span>`

我用 [TurboEntity](http://turboentity.ematia.de/) 照著 '[SimpleBlog Part I](http://www.splee.co.uk/2006/10/14/simpleblog-part-1/)' 中的範例改寫後, 獲得以下程式碼 (model.py):
> <pre>
> from turboentity import *
> from docutils.core import publish_parts
> 
> class Post(Entity): 
>     title = Column(Unicode(50))
>     content = Column(Unicode)
>     post_date = Column(DateTime, default=datetime.now())
>     is_published = Column(Boolean, default=False)
> 
>     @property
>     def html_content(self):
>         return publish_parts(self.content,writer_name="html")["html_body"]
> </pre>

在其它部份保持不變的情形下, 拿來跟原文比較可以發現使用 [TurboEntity](http://turboentity.ematia.de/) 寫的定義 ORM 程式, 就程式碼行數上實在不輸 SQLObject. 難能可貴地是同樣能保持很高的可讀性.

[TurboEntity](http://turboentity.ematia.de/) 網站上還有使用 [TurboEntity](http://turboentity.ematia.de/) 版本做 TurboGears Identity Model 的例子, 看來轉換到從 SQLObject 轉換到 SQLAlchemy 已經不再是太令人躊躇的事了.