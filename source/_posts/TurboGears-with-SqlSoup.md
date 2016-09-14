---
title: TurboGears with SqlSoup
tags:
  - python
  - TurboGears
date: 2006-11-22 06:19:11
---

<span style="font-size:180%;">Purpose</span><span style="font-weight: bold;">

</span>Have <span style="font-weight: bold;">an exist database</span> and want migrate to TurboGears?
Or you've been using TurboGears SQLObject model and want to <span style="font-weight: bold;">migrate </span>to [SQLAlchemy](http://www.sqlalchemy.org/)?

<span style="font-size:180%;">Solution</span>

TurboGears newly support SQLAlchemy 0.2 module(>0.9a6), it provide  a slick solution: SqlSoup !

<span style="font-size:130%;">What SqlSoup does?</span>

SqlSoup inspects your database and reflects its contents to class, <span style="font-weight: bold;">no model definitions</span> are necessary!

<span style="font-size:130%;">What does that mean?</span>

It means you only need to specify a uri for database,
and call SqlSoup to do the rest.

<span style="font-size:130%;">What's the Benifits?</span>

SqlSoup maps database tables to classes automatically. I'm not sure how efficient it is, but at least you can use SqlSoup by following ways:

*   To <span style="font-weight: bold;">use existing Database</span> design tools to design my database
*   To use SqlSoup <span style="font-weight: bold;">in design phase</span>, and code to SQLAlchemy class when the databse is settled down.
*   To <span style="font-weight: bold;">painless migrate</span> SQLObject generated database to SQLAlchemy<span style="font-size:130%;">Test Code</span>

Try the test code, it is thin.

in model.py
> 1 from sqlalchemy.ext.sqlsoup import SqlSoup
> 
> 2 uri = "sqlite://%(current_dir_uri)s/devdata.sqlite"
> 3 soup = SqlSoup(uri)

<span style="font-size:130%;">Explain</span><span style="font-weight: bold;">
</span>
line 1 import SqlSoup from sqlalchemy module,

line 2 specify the uri link to the database (I believe it can be improved)

line 3 the real code calling SqlSoup connect to uri

line 4 and line 5 shows I call the table "poll" from database

if you can't execute is , maybe you should install sqlalchemy first
<span style="font-weight: bold;">$ easy_install sqlalchemy</span>

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

<span style="font-weight: bold;"></span>
<span style="font-size:180%;">Reference</span>

That's all you need in TurboGears.
To get further usage , you can refer to [<span class="PostTitle">        Introducing SqlSoup</span>](http://spyced.blogspot.com/2006/04/introducing-sqlsoup.html)

ps: Actually TurboGears has done nothing particularly to support SqlSoup, I just use it as other modules.