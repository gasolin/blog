title: webapplate on jsfiddle
date: 2015-02-13 10:07:00
tags: [mobile,FirefoxOS]
---

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-nkV9gLoimbE/VN3LVpkptTI/AAAAAAAAD0s/6yaydAV6ujo/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-13%2B%E4%B8%8B%E5%8D%886.00.33.png)](http://2.bp.blogspot.com/-nkV9gLoimbE/VN3LVpkptTI/AAAAAAAAD0s/6yaydAV6ujo/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-13%2B%E4%B8%8B%E5%8D%886.00.33.png)</div>

In short, here is the [jsfiddle](http://jsfiddle.net/gasolin/sxjja37j/) link.  

In recent [article on moztech](http://tech.mozilla.com.tw/posts/5987/%e4%bd%bf%e7%94%a8-github-%e9%96%8b%e7%99%bc%e6%88%91%e7%9a%84%e7%ac%ac%e4%b8%80%e5%80%8b%e7%b6%b2%e9%a0%81%e6%87%89%e7%94%a8%e7%a8%8b%e5%bc%8f-%ef%bc%88web-app%ef%bc%89) (in Chinese) I've introduce [ghapplate](https://github.com/webapplate/ghapplate) to develop and host web app directly on github. After the post is published, I'm still seeking for a more easier approach. Since github does not provide web preview while editing, you have to save your current work then view it later on browser to see if it's the expect result.  

So [jsfiddle](http://jsfiddle.net/gasolin/sxjja37j/) comes to my mind. [Here](http://jsfiddle.net/gasolin/sxjja37j/) is a playground that preload the libraries used by [ghapplate](https://github.com/webapplate/ghapplate) and [webapplate](https://github.com/webapplate/webapplate).  

It's possible to [use jsfiddle to prototype web app](https://hacks.mozilla.org/2013/08/using-jsfiddle-to-prototype-firefox-os-apps/) as well. What you need is attach `/manifest.webapp` postfix after your jsfiddle link.  

[jsfiddle](http://jsfiddle.net/gasolin/sxjja37j/) and [ghapplate](https://github.com/webapplate/ghapplate) are good for quick experiment. If you want to get benefit from optimizer, lint check and more during serious web development, [webapplate](https://github.com/webapplate/webapplate) is still the more maintainable choice.