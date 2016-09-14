---
title: 結構文本(rst)轉網頁投影片(s5)
tags:
  - s5
  - docutils
  - python
  - rst
  - pygments
date: 2007-03-16 18:48:05
---

在看 [pycon-trac-presentation](http://matt-good.net/2007/02/28/pycon-trac-presentation/) 時,
發現 Matt Good 用 docutils 模組提供的"rst2s5" 套件來將結構文本(rst) 轉換成網頁投影片(s5) 效果還蠻不錯的. 用他客製化的 rst2s5 模組可以透過 pygments 支援程式的語法高亮展示.

以下提供使用方法

下載
====

$ easy_install docutils
$ easy_install docutils pygments

並下載 [rst2s5 with code high lighting](http://matt-good.net/2007/02/28/pycon-trac-presentation/)

用法
====

rst2s5.py [輸入].rst [輸出].html

i.e.
rst2s5.py xxx.rst ooo.html

會產生的輸出結果是 "ooo.html" 這個檔名的檔案,
跟一個包含 s5 投影片 js/css 資料的資料夾.

語法備忘
=============

<pre>
=======
標題
=======

:Author: Fred Lin
:Date:   $Date: 2007-03-16 $

一張投影片
==========

.. code-block:: pycon

  >>> # python console

.. class:: handout

   handout 是放註解的地方. 不會 show 到投影片上
   code-block 可用 pygments 提供的各種語法高亮, 如 pycon, python, bash, html...

投影片再一張
============

.. class:: incremental

   * 1st. item
   * 2nd. item

.. image:: python.png

.. class:: handout

   依序顯示重點. image 會嵌入圖片.

.. include:: pylevels.rst

語法參考
========

http://docutils.sourceforge.net/docs/user/slide-shows.html

.. class:: handout

   前一張後的 include 語句支援嵌套其他 rst 文件.

</pre>