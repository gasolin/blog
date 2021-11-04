---
title: 試玩 Sphinx 之 2
tags:
  - python
  - rst
date: 2008-11-14 03:37:08
---

之前提到過 [Python](http://www.python.org) 2.6 新採用了一套叫做 [Sphinx](http://sphinx.pocoo.org/) 的 rst 文件生成系統來管理 Python 語言官方的文件資料，用 sphinx 所生成的文件網站除了頁面能自訂樣式，自訂文件導覽順序，甚至還有附有搜尋功能。

已經寫過一篇 [試玩 Sphinx](http://inet6.blogspot.com/2007/11/sphinx.html)。

而現在值得再提的是，[Sphinx](http://sphinx.pocoo.org/) 專案已經獨立出來了，可以將 sphinx 應用在任何需要文件網站的情況裡。

1\. 安裝

> easy_install sphinx

2\. 打開命令列，找個目錄，鍵入

> sphinx-quickstart

照著互動提示輸入一些生成訊息後， sphinx 會在目錄中生成幾個簡單的檔案。

目錄中生成幾個簡單的檔案其內容為：

*  conf.py

conf.py 中的內容大部分是我們剛剛在互動提示中填入的資訊，在此都可以修改。

0.5 版之後支援中文介面(我丟的 Patch)，只要在 conf.py 中指定「language = 'zh_TW'」即可。

* MAKEFILE

給 linux 或 mac 用的 make 檔。

* index.rst

index.rst 等於是整個文件站台的主頁

* .template

文件站台的樣板，要自訂樣板就修改這。

* .static

靜態文件，如圖片等內容。

* .build

建立(編譯)好的文件在此。

.template/.static/.build 這樣的檔案在 windows 下不易辨識，可以在互動提示中詢問 "Name prefix for templates and static dir [.]:" 時，將 '.' 改成 '_'。 那麼生成的資料夾就會變成 _template/_static/_build。

3\. 建立文件

sphinx 會在目錄中生成 make 檔，輸入

> make html

即能產生完整的 html 文件站台。

如此一來，整個完整的站台都能用 rst 格式來構成啦，實在便利。

沒有寫過 rst (結構化)文件的人，也可以參考 [reStructuredText Primer](http://sphinx.pocoo.org/rest.html)。

PS: 順帶一提， Pylons 與 TurboGears2 都已經有 sphinx 支持了。 TurboGears2 的部份(這個是我加進去的)可以用原始碼 docs 目錄中的 get_tgdoc.py 從 docs.turbogears.org 自動下載 rst 格式文件，然後再用上面提到的 'make html' 轉成 html 文件檔。