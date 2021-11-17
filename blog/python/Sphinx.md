---
title: 試玩 Sphinx
tags:
  - python
  - rst
date: 2008-03-26 06:22:54
---

Sphinx 是 Python 2.6 新採用的 rst 文件生成系統.

要開始玩首先得下載 Python 原始碼

svn co http://svn.python.org/projects/doctools/trunk/  python

下載完後進入 Doc 目錄, 輸入

make html

則會自動下載 sphinx 與相關程式, 然後自動編譯 rst 檔案.

如果輸入

make web 

的話則是產生一個可執行的線上網頁文件程式. 此網站程式甚至還支援搜尋, 真是強悍到有點扯 @@

Update:

Sphinx 產生的首頁原來是從 template 中 render 的. 看來拿到其他地方重用的彈性並沒想像中的高.
一般使用 rst 時還是繼續用自己寫的 [mopowg](http://pypi.python.org/pypi/mopowg/) 吧.