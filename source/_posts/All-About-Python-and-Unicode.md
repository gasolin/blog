---
title: All About Python and Unicode
tags:
  - python
  - unicode
date: 2009-07-12 01:18:41
---

[這篇](http://boodebr.org/main/python/all-about-python-and-unicode)完整講解了 Python Unicode 的作法,

例如為什麼都已經是 Unicode 了還會有 encode, decode 的需求?
答案是因為電腦內部以二進制儲存 Unicode, 而一般網頁等程式能處理的是經過"文字編碼"後的 text code (utf-8, big5, gbk).

而為什麼常看到 UTF-8?
因為 UTF-8 這套文字編碼相容英文最常用的 ASCII 文字編碼, 所以大多數英文程式不需要改寫就能沿用.

所以從網頁/程式存中文到資料庫(電腦)時要做 data.encode('big5') 的動作來存到電腦中.

>>> h = '哈囉'
>>> h
'\xab\xa2\xc5o'
>>>

從電腦中取出的中文 data 要做 data.decode('big5') 的動作,

>>> print h
哈囉
>>> h.decode('big5')
u'\u54c8\u56c9'
>>> print h.decode('big5')
哈囉
>>>

那麼為什麼有時候用一些程式不需要自己處理這些事情呢?
那是因為這些程式的作者已經預幫你處理了 XD

不知道預設的編碼時, 可以試試用 [Universal Encoding Detector](http://chardet.feedparser.org/) 來猜測所使用的編碼.<div>
</div><div>Update:</div><div>

*   [Unicode HOWTO](http://www.amk.ca/python/howto/unicode)
*   [How to Use UTF-8 with Python](http://evanjones.ca/python-utf8.html)</div><div>
</div>