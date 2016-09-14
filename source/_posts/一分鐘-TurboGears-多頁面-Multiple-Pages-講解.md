---
title: 一分鐘 TurboGears - 多頁面 (Multiple Pages) 講解
tags:
  - TurboGears
date: 2006-02-07 15:14:12
---

<span style="font-weight:bold;">1.使用超連結 (Make a Hyper link)</span>

return """Hello , &lt;a href="tg"&gt;World!&lt;/a&gt;"""

在 TurboGears 中你可以直接用 return 傳 html 程式碼到網頁頁面上, 因此在 TurboGears 中你完全可以不使用樣板(Template)來建構一個網站. 注意到這邊的 "return" 使用"三重括號"來框住要傳回的資料, 在 python 中使用"三重括號"框住的內容就如 c 語言中的 "/* */" 標籤一樣代表多行內容或註解, 裡面可以允許html語法中的一般括號" "存在, 因此我們不必為了回傳資料的正確性而將內容改寫成如 &lt;a href=\"tg\"&gt; 的形式.

<span style="font-weight:bold;">2\. 建立多個頁面 Make another pages</span>
3   def index(self):
7   def tg(self):

在範例中我們共建立了兩個函式, 這些函式前都加上了"@expose()"敘述, 表示都會被加入TurboGears 的網頁樹狀結構中.

要建立額外的網頁, 就在 "controllers" 類別下加入更多的方法即可.

<span style="font-weight:bold;">3\. url() 方法</span>
    8           return "... &lt;a href=%s&gt;...&lt;/a&gt;"""%url("/home")
當有多層網頁時, 使用 url() 方法/函式可以保證連結的正確性