---
title: Python 的封裝格式 egg 介紹
tags:
  - python
date: 2007-01-19 16:50:23
---

對岸的 黄毅 兄寫了一篇 "[Build extensible application with egg](http://codeplayer.blogspot.com/2007/01/build-extensible-application-with-egg.html)
" 參考資料, 介紹 Python 的封裝格式

> 在 python 社區中 egg 已經是一種廣為人知的格式了。眾所周知對於 python 來說 egg 是一種用來生小蛇的東西，小蛇自然就是 python 軟件包了(純屬瞎扯 ;-)。
> 
> 簡單地說，egg 之於 python 正如 jar 之於 java。是一種軟件包打包的格式

想要讀懂這篇文章的關鍵在 "egg 最重要的作用是给软件包增加元数据！"這句話.

"软件包"大概大家還能猜得出來是什麼, 不過"元數據"是啥? 

答案是 "MetaData", Meta-Data 的意思就是資料背後的參考資料. 
用在這的意思是說, 這個程式的壓縮包裡, 除了提供這個程式的功能外, 還提供了安裝相關的資訊. 

例如我在[如何把蛋砸到起司商店?](http://inet6.blogspot.com/2006/09/blog-post.html)中指出 cheeseshop 的上傳方式, 所有 cheeseshop 上的各個說明欄位都可以事先在你的 setup.py 檔案中填好, 用同樣的 

> setup.py bdist_egg

命令來將程式包裝成 egg 檔.