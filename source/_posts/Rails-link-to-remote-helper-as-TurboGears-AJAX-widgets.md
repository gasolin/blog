---
title: Rails 'link_to_remote' helper as TurboGears AJAX widgets
tags:
  - python
  - TurboGears
date: 2007-01-11 02:27:24
---

I wrote a doc in [TurboGears doc site](http://docs.turbogears.org/): [Wrap AJAX operation in Widgets](http://docs.turbogears.org/1.0/RemoteLink), which demonstrates how to use the widget to do basic AJAX operation as Rails 'link_to_remote' helper.

The RemoteLink widget works differ from Rails 'link_to_remote' helper.
It's simple, pure python(while you use it) and fully 'optional'! 
'Optional' means if you remove the widget, [your site still functional](http://docs.turbogears.org/1.0/Wiki20/Page6). 
Thanks to the mochikit cool functions :-)