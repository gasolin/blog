---
title: Making a Time Tracker in TurboGears
tags:
  - TurboGears
date: 2006-03-07 10:52:15
---

2006/30/7
Since may people may come from [42](http://42.blogs.warnock.me.uk/2006/03/will_python_dom.html), I suggest you to download the full instruction at [TurboGears Trac](http://trac.turbogears.org/turbogears/wiki/QuickPrototyping), you'll see full instruction to make it.

This article is motivate by the [framework comparison screencast](http://oodt.jpl.nasa.gov/better-web-app.mov) performed by Sean Kelly. I found this screencast from [TurboGears group](http://groups.google.com/group/turbogears/browse_thread/thread/76378b490de76eab). the [screencast](http://oodt.jpl.nasa.gov/better-web-app.mov) compare J2EE , [Rails](http://www.rubyonrails.org) ,[Zope](http://www.zope.org) ,[TurboGears](http://www.turbogears.org) ,and [Django](http://www.djangoproject.com).  TurboGears did fairly well. but Sean Kelly wasn't using the latest version(~0.9) during his tests.Thus I try to re-imlement the demo by using bunch of exciting new features (Model Designer, CatWalk, DataController...) introduced in the latest TurboGears  version.

<span style="font-weight:bold;">Origin version in ScreenCast
</span>

The screencast implement page like this,  there is a add only interface, no editing.

[![TimeTracker preview](http://static.flickr.com/50/107081514_bcdd91b2b5_o.jpg)](http://www.flickr.com/photos/gasolin/107081514/ "Photo Sharing")

And it cost 2 python source files 49 lines of code, 2 page of templates, 53 lines of code, not a hundred lines of code.

[![Time Tracker preview Evaluation](http://static.flickr.com/42/107081515_4dcbd2af65_o.gif)](http://www.flickr.com/photos/gasolin/107081515/ "Photo Sharing")

<span style="font-weight:bold;">Re-Implement version with latest svn(#885)</span>
Its time catch up with Sean Kelly's demo in latest TurboGears version.
The re-implement with latest Turbogears svn like this. TurboGears > 0.9 provide autogenerate Editor(Catwalk) in Admin Panel(Toolbox)

[![Timetracker catwalk](http://static.flickr.com/33/107080749_f038bd03fb.jpg)](http://www.flickr.com/photos/gasolin/107080749/ "Photo Sharing")

We can get another running mode editor(much usefull for real app) with DataController by several lines of code.

[![Timetracker  DataController](http://static.flickr.com/40/107080750_ea36cfeced.jpg)](http://www.flickr.com/photos/gasolin/107080750/ "Photo Sharing")

the re-implement version cost 2 python source files (now Turbogears config file is in python) 6 lines of code, 0 page of templates, not a ten lines of code. The re-implement version also include a full-functional database-relation editor.

[![Timetracker Evaluation](http://static.flickr.com/19/107080751_4ad98ddb35_o.gif)](http://www.flickr.com/photos/gasolin/107080751/ "Photo Sharing")

Turbogears automatically generate pages for you both in admin and practice perspective. In Turbogears you can customize DataController and other widgets' looking and feel to fit your layout style.