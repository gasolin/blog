---
title: plurk + jaiku 一起發簡訊
tags: []
date: 2008-09-18 08:57:51
---

下載 [plurkapipy](http://code.google.com/p/plurkapipy/) 跟 [python-jaiku](http://code.google.com/p/python-jaiku/) 後，再把下面的 python 檔案另存新檔。填入必需的帳號密碼或 apikey 後，就可以同時使用 plurk + jaiku 囉。下面是 console 版本：

> <pre>#!/usr/bin/python
> #coding=utf-8
> import plurkapi #http://code.google.com/p/plurkapipy/
> import jaiku #http://code.google.com/p/python-jaiku/
> 
> #plurk login infomation
> pnickname = ""
> ppassword = ""
> 
> #jaiku login infomation
> jusername = ""
> japikey = ""
> 
> message = raw_input("要送出的訊息：")
> 
> #jaiku
> japi = jaiku.Api(username=jusername, api_key=japikey)
> print japi.PostPresence(message)
> 
> # plurk
> papi = plurkapi.PlurkAPI()
> if papi.login(pnickname, ppassword) == False:
>     print "login fail"
> else:
>     print papi.addPlurk(content=message, lang="tr_ch")</pre>

再搭配 App Engine 的話，很快就可以寫出一個網頁介面的發訊程式囉。