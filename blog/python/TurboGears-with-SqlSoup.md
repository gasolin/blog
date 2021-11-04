---
title: TurboGears with SqlSoup
tags:
  - python
  - TurboGears
date: 2006-11-22 06:19:11
---

Purpose

Have an exist database and want migrate to TurboGears?
Or you've been using TurboGears SQLObject model and want to migrate to [SQLAlchemy](http://www.sqlalchemy.org/)?

Solution

TurboGears newly support SQLAlchemy 0.2 module(>0.9a6), it provide  a slick solution: SqlSoup !

What SqlSoup does?

SqlSoup inspects your database and reflects its contents to class, no model definitions are necessary!

What does that mean?

It means you only need to specify a uri for database,
and call SqlSoup to do the rest.

What's the Benifits?

SqlSoup maps database tables to classes automatically. I'm not sure how efficient it is, but at least you can use SqlSoup by following ways:

*   To use existing Database design tools to design my database
*   To use SqlSoup in design phase, and code to SQLAlchemy class when the databse is settled down.
*   To painless migrate SQLObject generated database to SQLAlchemyTest Code

Try the test code, it is thin.

in model.py
> 1 from sqlalchemy.ext.sqlsoup import SqlSoup
> 
> 2 uri = "sqlite://%(current_dir_uri)s/devdata.sqlite"
> 3 soup = SqlSoup(uri)

Explain

line 1 import SqlSoup from sqlalchemy module,

line 2 specify the uri link to the database (I believe it can be improved)

line 3 the real code calling SqlSoup connect to uri

line 4 and line 5 shows I call the table "poll" from database

if you can't execute is , maybe you should install sqlalchemy first

$ easy_install sqlalchemy

or try the TurboGears way:
> 1 from turbogears import config
> 2 from sqlalchemy.ext.sqlsoup import SqlSoup
> 
> 3 uri = config.get('sqlalchemy.dburi')
> 4 soup = SqlSoup(uri)
All you need to do is specify the dburi for sqlsoup.

Let's test what we got

>>> poll = soup.poll.select()
>>> print poll

## Reference

That's all you need in TurboGears.
To get further usage , you can refer to [Introducing SqlSoup](http://spyced.blogspot.com/2006/04/introducing-sqlsoup.html)

ps: Actually TurboGears has done nothing particularly to support SqlSoup, I just use it as other modules.
