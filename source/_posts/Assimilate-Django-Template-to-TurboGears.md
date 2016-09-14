---
title: Assimilate Django Template to TurboGears
tags:
  - python
  - TurboGears
date: 2006-07-22 05:10:43
---

Lots of people use Django template for Pyhton Web Framework(As Django project shares).

And if we want to make people feel comfortable to try TurboGears (and then migrate to tg hopefully), first thing we can do is making django template system available on TurboGears.

Its easy because many template plugins (and their source codes) are available for TurboGears, I use a couple hours to read the [template plugins doc](http://www.turbogears.org/docs/plugins/template.html) and make the <span style="font-weight: bold;">TurboDjango template</span> plugin.

You can try the  django template in minutes. Here is the step by step guide:<span style="font-weight: bold;">

Install By SetupTools</span>

$ easy_install TurboDjango

<span style="font-weight: bold;">How to Make it just Work?
</span>
<span style="font-weight: bold;">Step 1\. Quickstart</span>

Use tg-admin tool to create a project

$ tg-admin quickstart tgdj

The project name is "tgdj"
<span style="font-weight: bold;">
Step 2\. Edit Controller

</span><span style="font-style: italic;">Edit tgdj/tgdj/controller.py, add following method in "Root" class.</span>
</span>> @expose(template = "django:tgdj.templates.djpage")
> def page(self):
> return dict(name="TurboGears")</span>
"djpage" is django template name

<span style="font-weight: bold;">Step 3\. Edit Template</span>

<span style="font-style: italic;">Edit </span><span style="font-style: italic;">tgdj/tgdj/templates/</span><span style="font-style: italic;">djpage.html</span>

</span>> [h1]Hello, {{name}}[/h1]</span>
The template has "html" file suffix

<span style="font-weight: bold;">Step 4\. Check Result</span>

In <span style="font-style: italic;">tgdj, start develop server by typing

$ start-tgdj

</span>Then surf [http://localhost:8080/page](http://localhost:8080/page), you'll see

</span>> # Hello, TurboGears</span>
The Release is available [here](http://www.python.org/pypi/TurboDjango).

To Django Users: You can migrate your database with [SQLAlchemy's SqlSoup](http://inet6.blogspot.com/2006/07/turbogears-with-sqlsoup.html)</span>