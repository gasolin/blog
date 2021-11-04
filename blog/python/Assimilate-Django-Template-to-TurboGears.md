---
title: Assimilate Django Template to TurboGears
tags:
  - python
  - TurboGears
date: 2006-07-22 05:10:43
---

Lots of people use Django template for Pyhton Web Framework(As Django project shares).

And if we want to make people feel comfortable to try TurboGears (and then migrate to tg hopefully), first thing we can do is making django template system available on TurboGears.

Its easy because many template plugins (and their source codes) are available for TurboGears, I use a couple hours to read the [template plugins doc](http://www.turbogears.org/docs/plugins/template.html) and make the TurboDjango template plugin.

You can try the  django template in minutes. Here is the step by step guide:

Install By SetupTools

$ easy_install TurboDjango

How to Make it just Work?

Step 1\. Quickstart

Use tg-admin tool to create a project

$ tg-admin quickstart tgdj

The project name is "tgdj"

Step 2\. Edit Controller

Edit tgdj/tgdj/controller.py, add following method in "Root" class.

> @expose(template = "django:tgdj.templates.djpage")
> def page(self):
> return dict(name="TurboGears")
"djpage" is django template name

Step 3\. Edit Template

Edit tgdj/tgdj/templates/djpage.html

> [h1]Hello, {{name}}[/h1]

The template has "html" file suffix

Step 4\. Check Result

In tgdj, start develop server by typing

$ start-tgdj

Then surf [http://localhost:8080/page](http://localhost:8080/page), you'll see

> # Hello, TurboGears
The Release is available [here](http://www.python.org/pypi/TurboDjango).

To Django Users: You can migrate your database with [SQLAlchemy's SqlSoup](http://inet6.blogspot.com/2006/07/turbogears-with-sqlsoup.html)
