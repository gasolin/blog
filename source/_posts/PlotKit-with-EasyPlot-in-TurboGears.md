---
title: PlotKit with EasyPlot in TurboGears
tags:
  - python
  - TurboGears
date: 2006-07-04 15:41:34
---

NOTICE: This Article is updated for 0.9w3

I recently update my TurboGears PlotKit widget.
This version(0.9w3, 0.9 is [origin lib's version](http://www.liquidx.net/plotkit/), w means 'widget')

To get these widgets, easy_install them :

$easy_install plotkit

Then, you can Check the demo in TurboGears toolbox :D

[![](http://photos1.blogger.com/blogger/1345/565/400/easyplot.gif)](http://photos1.blogger.com/blogger/1345/565/1600/easyplot.gif)

How to try it? Well, it's extremely simple.

For a fresh quickstart site,

In <span style="font-weight: bold;">controllers.py</span>:

```
from plotkit import EasyPlot

class Root(controllers.RootController):
@expose(template="wgtest.templates.welcome")
def index(self):
setA = [[0,0], [1,2], [2,3], [3,7], [4,8], [5,6]]
setB = [[0,0], [1,1], [2,4], [3,8], [4,7], [5,20]]
setC = [[0,1], [1,3], [2,5], [3,5], [4,3], [5,2]]
return dict(ep= EasyPlot(id="diag",
                       style="line",
                       width="300",
                       height="300",
                       data=[setA, setB, setC]))
```

In <span style="font-weight: bold;">welcome.kid</span>:

${ep.display()}

add this script into html "body".

<span style="font-weight: bold;">Explain:

</span><span style="font-style: italic;">from plotkit import EasyPlot</span>

First of all, import the proper widget. (origin PlotKit widget is still availbe)

<span style="font-style: italic;">return dict(ep= EasyPlot(...))</span>

return the "ep" diagram instance to template

<span style="font-style: italic;">${ep.display()}</span>

display the diagram in template

<span style="font-weight: bold;">Parameters:

</span><span style="font-weight: bold;">id</span> : (diag)
The Diagram's Identifer (Element ID)
<span style="font-weight: bold;">
style</span> : (line)
The diagram could be plot as a "line", "pie", or "bar"diagram.
<span style="font-weight: bold;">
width, height</span> : (400, 400)
The diagram's size
<span style="font-weight: bold;">
data</span> :
Datasets is structured with [[x,y],[x1,y1],....]

<span style="font-weight: bold;">option :</span>
options of both Layout and Renderer (dictionary style), need be a string

The [origin example](http://media.liquidx.net/js/plotkit-doc/PlotKit.EasyPlot.html) is here.

-----------------------------------------------------------------------------

History
0.9w3 07/04/2006: more flexible EasyPlot dataset
0.9w2 : fix bugs and add a  EasyPlot() widget to plot a diagram within the code.

The svn repository is in [Sourceforge](http://svn.sourceforge.net/viewcvs.cgi/tgwidgets/), you can share your TurboGears widget there, too.

known limit:
current widget's  option param suppor is not very OO, you need pass the dictionary in string format (can't recognize "v", "label")
