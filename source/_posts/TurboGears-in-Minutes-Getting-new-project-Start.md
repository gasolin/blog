---
title: TurboGears in Minutes - Getting new project Start
tags:
  - python
  - TurboGears
date: 2006-10-24 01:28:52
---

I decide to start a new track of TurboGears Tutorial (In English), which is light weight enough so it will be easy to follow.

Why not start this tutorial on [TurboGears Documentation Site](http://docs.turbogears.org) ?

It just because I feel more comfortable with blogger's editor, and I'll feel less guilty if I mess these tutorial up :-D

Oops, 5 seconds passed, let's go back to the topic.

<span style="font-size:130%;">
<span style="font-size:180%;">Start a new project</span></span>
To start a new project (new site) with TurboGears, you'd use "<span style="font-style: italic;">tg-admin quickstart</span>" command for it.
The syntax is:

> $ tg-admin quickstart [projectname]
Let's create a "TurboHello" (sound's powerful, isn't it? :-D) project for example:

> $ tg-admin quickstart TurboHello
The console will prompt some choices. Feel free to press "enter" button (let defaults) and proceed to the next step.

<span style="font-size:180%;">Start the web server</span>

The 'TurboHello' folder was created by your console. After the project was created, enter the 'TurboHello' folder, and you could start the TurboGears development web server with following command:

> $ ./start-TurboHello.py

The web server is running, browse [http://localhost:8080/](http://localhost:8080/) to see the project welcome page:

[![](http://photos1.blogger.com/blogger/1345/565/320/welcome.png)](http://photos1.blogger.com/blogger/1345/565/1600/welcome.gif)

Pretty and easy, right?

<span style="font-size:180%;">The project structure</span>
While entering the 'TurboHello' folder, you'll see the project skeleton laid there. Those files can be categorized for 4  purposes:

The document was merged to http://docs.turbogears.org/1.0/GettingStarted/BigPicture

TurboGears followed MVC design pattern (search if you don't know that), which seperate the web application design into three different roles, to build the default quickstart project.
TurboGears  also offer you the flexibility to 'not use the MVC' as well (will be shown in next minutes).

We'd always focus on part 4: "the Development part" in TurboGears.