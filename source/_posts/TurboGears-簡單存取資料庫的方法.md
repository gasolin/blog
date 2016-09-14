---
title: TurboGears 簡單存取資料庫的方法
tags:
  - python
  - TurboGears
date: 2006-11-29 14:45:41
---

拿到一個現成的資料庫, 最快速的就是直接存取啦.

TurboGears 中除了預先定義 schema 外, 也可以直接使用 SQLAlchemy 中的 SqlSoup 模組來直接存取資料庫.

之前我有寫過[英文版](http://inet6.blogspot.com/2006/07/turbogears-with-sqlsoup.html)的, 今天 trace 一下 sqlsoup 後發現還有更簡單的方法: 直接取用 metadata.

1\. 修改 dev.cfg 中的 sqlalchemy.dburi , 指到對應的資料庫

2\. 在 your project/model.py 中, 寫下
> from turbogears.database import metadata
> from sqlalchemy.ext.sqlsoup import SqlSoup
> 
> soup = SqlSoup(metadata)

3\. 使用 shell 存取資料

$ tg-admin shell 

>>> poll = soup.poll.select()
>>> print poll