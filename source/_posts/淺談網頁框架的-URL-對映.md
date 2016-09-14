---
title: 淺談網頁框架的 URL 對映
tags:
  - python
date: 2006-11-12 04:02:20
---

當開始使用 MVC (Model, View, Controller) 的方式設計網站程式後, 組織網站架構的重任就從傳統的分頁換到程式控制部份 (Controller) 的網址-函式對映 (URL Mapper)上.

舉 python 網頁框架的例子為例, python 的網頁框架很多, 最常聽到的 Django, TurboGears, pylons 都各自有各自不同的網址-函式對映方式.
網址-函式對映能將程式控制部份對映到網站架構, 也能依照一些規則將輸入的網址對應成函式的參數, 方便程式使用.

<span id="title">[Colubrid](http://wsgiarea.pocoo.org/colubrid/documentation/applications/) 這個 WSGI 工具的網站上清楚地列出了目前</span>常見的 URL 對映分類:

*   使用 正則表達式 (Regular Expression, Regex) 對映 -Django
*   使用 物件 (Object) 對映 -TurboGears
*   使用 路徑 (Routes) 對映 -pylons

"-"號後面的補註是我另加上去的, 表示這幾個框架預設的 URL 對映方式. 
當然有的框架也可以用另外的 URL 對映 (例如 TurboGears 也能使用路徑對應方式).

<span style="font-weight:bold;">範例
</span>
首先我們先給出一個基本的程式架構, 再來討論如何將這個程式對應到網頁上.本文隱藏了各網頁框架特定的程式碼, 因此在實際運行各種對應方式時需要再加上各自的程式碼.

<pre>
Class Root(object):
   def index(self):
       return "Front Page"
   def profile(self):
       return "Profile Page"

app = Root()
</pre>
這個類別(Class)包含兩個函式(Method), 我們的目的是讓它顯示成如下的網站架構:
<pre>
/
- index
- profile
</pre>
例子很淺顯, 我們就開始來嘗試吧

<span style="font-weight: bold;">1.使用 正則表達式 (Regular Expression) 對映</span>

使用時在 Root 類別裡加上正則表達式來對映網頁
<pre>
urls = [
         (r'^index,'index'),
         (r'^profile,'profile')
       ]
</pre>
網頁架構是一串以 (r'網頁名稱' ,'函式名稱') 組成的列表來定義.
網頁名稱, 函式名稱部份都可以使用正則表達式

<span style="font-weight: bold;">2.使用 物件對映</span>
不必加入特別的對映方式. 
Root 類別在實例化後等同網站預設的根目錄,
Root 類別下的兩個函式直接對映到相應名稱的網頁上.
<pre>
/- Root
- index()
- profile()
</pre>
訪問 / 或 /index 時就等於訪問 index() 函式, 
訪問 /profile 時就等於訪問 profile() 函式

<span style="font-weight: bold;">3.使用 路徑對映</span>
這種方式是跟 Ruby on Rails 學來的.
方法是另外建立一個類別, 專門處理網頁架構.
<pre>
class app(RoutesApplication):
  mapping = [
      ('/', Root.index),
      ('/profile', Root.profile)
  ]

app = app()
</pre>
網頁架構是以 ('網頁名稱' ,'類別.函式名稱') 組成的列表來定義.
網頁名稱部份可以使用正則表達式.

<span style="font-weight:bold;">
結語</span>

我在寫本篇之前, 從來沒有看懂其他網頁框架的對應方式, 因此傻瓜式的物件對映方式對我來說是最直覺了, 使用至今還沒什麼感到不方便的地方.

雖然本篇所作的比較簡單, 無法展現各種對映方式的實際能力, 
例如本篇沒有比較到輸入參數的對映方式. 

以上三種方法都已經被證明有效而且許多網站正使用著這些方法運行著.
希望大家能以本篇為基礎, 就較理解的 URL 對映方式繼續深入學習.

我很想知道各位看官, 對於用簡單的例子來對的各種 URL 對映方式做說明是不是比較容易理解呢?