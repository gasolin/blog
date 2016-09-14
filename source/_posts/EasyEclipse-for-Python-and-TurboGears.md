---
title: EasyEclipse for Python and TurboGears
tags:
  - python
  - TurboGears
date: 2007-01-16 08:08:55
---

<span style="font-size:180%;">EasyEclipse for python
</span>
People who are used to Microsoft VisualStudio or Java IDE usually criticize that python has no good IDE to cooperate with,

I think pydev is one of good python IDE, which is based on eclipse platform.
But since you try to install it, it's pretty annoying to set the eclipse and pydev run properly.

Now [EasyEclipse](http://www.easyeclipse.org/) project provide an easy install pack of [Eclipse for python](http://www.easyeclipse.org/site/distributions/python.html), it contains:

*   eclipse platform itself,

*   pydev(eclipse python support),

*   Subclipse(eclipse SVN GUI),

*   and several useful plugins installed by default.It really ease the installation and configuration of Eclipse for python.

<span style="font-size:180%;">Pydev with Turbogears</span>

Besides that, Pydev developer recently wrote an article for [Configuring Pydev to work with Turbogears](http://pydev.blogspot.com/2006/07/configuring-pydev-to-work-with.html)

It sounds like a right time to try for pydev + TurboGears.

So I searched and installed the [Eclipse for python](http://www.easyeclipse.org/site/distributions/python.html) and [EasyEclipse Web tools editors](http://www.easyeclipse.org/site/plugins/eclipse-wtp-web.html) for eclipse HTML/CSS editor and an Internal Web Browser.

The result? It's not much too say.... pretty good:D

<span style="font-size:180%;">Start Up</span>

First create a <span style="font-weight: bold;">pydev project</span>, it will assign a workspace for the project.
Open the console, change path to the workspace folder.
Use <span style="font-weight: bold;">tg-admin</span> tool to create a TurboGears projects named "<span style="font-style: italic;">projectname</span>" within the  pydev project workspace folder.

Now the project folder will shown on eclipse Navigator panel. (you may need use right click menu-> refresh)
click the start-<span style="font-style: italic;">projectname</span>.py
tap F9, then the web server will run.

You can use the "Open Web Browser" icon which is near with the search icon to open the internal Web Browser. Type http://localhost:8080 to see the welcome page :)

Sounds good?

<span style="font-size:180%;">Configurations</span>

Here are a little configuration tips you may intrested...

<span style="font-weight: bold;">Assign the python interpretor</span>

1\. open window/preference,
select pydev/interpreter-python,
click top right "Add" button to select the python.exe path (windows default is C:\python24\pythonw.exe).
The proper library and key words will automatically load for you to use.

<span style="font-weight: bold;">Template Association</span>

2\. select General/Editors/File Association,
click top right "new" button to add "*.kid" file style for kid template.
Press the second "Add" button to assign the associate editors to HTML Editor(default) and Internal Web Browser.

[![](http://photos1.blogger.com/blogger/1345/565/400/fileassociation.png)](http://photos1.blogger.com/blogger/1345/565/1600/fileassociation.gif)

I also found a WYSIWYG HTML editor
[EasyEclipse eZingBuilder](http://www.easyeclipse.org/site/plugins/ezingbuilder.html), but I can't get the kid page present correctly now.

more tips are welcome