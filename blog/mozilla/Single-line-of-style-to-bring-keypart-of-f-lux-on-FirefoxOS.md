---
title: Single line of style to bring (keypart of) f.lux on FirefoxOS
tags:
  - html
  - FirefoxOS
date: 2015-02-24 07:34:23
---

Claim: this exercise is for experiment, not for product.

[![](http://4.bp.blogspot.com/-BcKUOW2lvxA/VOwjKljJnSI/AAAAAAAAD20/fG8jM03NKLg/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-24%2B%E4%B8%8B%E5%8D%882.09.23.png)](http://4.bp.blogspot.com/-BcKUOW2lvxA/VOwjKljJnSI/AAAAAAAAD20/fG8jM03NKLg/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-24%2B%E4%B8%8B%E5%8D%882.09.23.png)

According to [wikipedia](http://en.wikipedia.org/wiki/F.lux), **f.lux** adjusts a computer display's [color temperature](http://en.wikipedia.org/wiki/Color_temperature "Color temperature") according to its location and time of day. I always use it on my Mac to make my eyes more comfortable at night.

So, the topic is about if we can bring that experience on Firefox OS.
Adjust display's color temperature generally is a system specific issue. But actually it can be categorized as an CSS trick if we like to [make it on web](https://gist.github.com/contra/254e1a5a07da830d6051) (a gist to mimic the f.lux effect).

To quick experiment if it doable or not, the validation steps are:

1\. open the [WebIDE](https://developer.mozilla.org/en-US/docs/Tools/WebIDE) on [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
2\. download and open emulator (I choose v2.2) on WebIDE.
3\. To debug system app, choose `System` from top left selector in WebIDE.
4\. once connected,&nbsp; select the `html` tag and add style
`**filter: brightness(0.8) sepia(0.9);**` into the element. 

[![](http://2.bp.blogspot.com/-rV4FV9HRVEE/VOwjP4MFTUI/AAAAAAAAD28/AMFRpG21jlk/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-24%2B%E4%B8%8B%E5%8D%882.09.05.png)](http://2.bp.blogspot.com/-rV4FV9HRVEE/VOwjP4MFTUI/AAAAAAAAD28/AMFRpG21jlk/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-24%2B%E4%B8%8B%E5%8D%882.09.05.png)

The live view changed to f.lux like color temperature.


[![](http://4.bp.blogspot.com/-BcKUOW2lvxA/VOwjKljJnSI/AAAAAAAAD20/fG8jM03NKLg/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-24%2B%E4%B8%8B%E5%8D%882.09.23.png)](http://4.bp.blogspot.com/-BcKUOW2lvxA/VOwjKljJnSI/AAAAAAAAD20/fG8jM03NKLg/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-24%2B%E4%B8%8B%E5%8D%882.09.23.png)

So it works!

To make it persistent on real device, edit `[gaia/apps/system/style/system/system.css](https://github.com/mozilla-b2g/gaia/blob/master/apps/system/style/system/system.css#L5)`, add above style into `html` tag. Run `make reset-gaia` then you have the style applied on device.

### What's Next

The above experiment will change your device's color temperature permanently, which is not what f.lux do. To make it as option, you can add an option in settings &gt; developer panel and add a observer in system to dynamically add such style into system html tag.

If you feel the strong desire to have such feature happen on Firefox OS device, fire a bug on [bugzilla](http://bugzilla.mozilla.org/).
