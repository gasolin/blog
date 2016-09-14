---
title: HTML5的基本格式
tags:
  - html
  - reimaging
date: 2013-03-31 02:02:01
---

<div class="separator" style="clear: both; text-align: center;">[![](http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png)](http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png)</div>
如果你好一陣子沒有關心網頁相關技術，那麼看到下面的code, 可能會揉揉眼睛說：這樣也能跑？

> &lt;!DOCTYPE html&gt; 
> &lt;html lang="en"&gt;
> &nbsp; &lt;head&gt;
> &nbsp;&nbsp;&nbsp; &lt;meta charset=utf-8&gt;
> &nbsp;&nbsp;&nbsp; &lt;title&gt;page title&lt;/title&gt;
> &nbsp;&nbsp;&nbsp; &lt;!--&lt;link href="style.css" rel="stylesheet"&gt;&lt;/link&gt;--&gt;
> &nbsp;&nbsp;&nbsp; &lt;!--&lt;script src="script.js"&gt;&lt;/script&gt;--&gt;
> &nbsp;&nbsp;&nbsp; &lt;!--&lt;style&gt;&lt;/style&gt;--&gt;
> &lt;/head&gt;
> &lt;body&gt;
> &nbsp; &lt;!-- content --&gt; 
> &lt;!--&lt;script type="text/javascript"&gt;&lt;/script&gt;--&gt;
> &lt;/body&gt;
> &lt;/html&gt;&nbsp;只要有瀏覽器，大家都可以試著寫網頁。
我們分行來看看上面的網頁程式碼:

## 主要架構

&nbsp;&lt;!DOCTYPE html&gt;

HTML5的格式宣告，注意「DOCTYPE」要用大寫才有向前相容喔(請參考[HTML5 Hacks](http://shop.oreilly.com/product/0636920026273.do) 1)。

&lt;html lang="en"&gt;
&lt;/html&gt; 

HTML主標籤，所有HTML頁面的內容都要放在裡面。 

Header參數

&lt;head&gt;&lt;/head&gt;

HTML檔案標頭， 一些頁面相關資訊。

&lt;body&gt;&lt;/body&gt;

HTML內容， 顯示給使用者看的頁面內容。

## Header參數

以下是放在header標籤中的參數:

&lt;meta charset=utf-8&gt;

聲明這個網頁是以UTF-8格式編碼，多數瀏覽器只在前<span style="background-color: white; font-family: sans-serif; font-size: 15px;">512 bytes查看文字</span>編碼格式，<span style="font-family: sans-serif;"><span style="font-size: 15px;">所以這個標籤務必放在Header</span></span><span style="font-family: sans-serif; font-size: 15px;">標籤的</span><span style="font-family: sans-serif; font-size: 15px;">最前頭。</span>

&lt;title&gt;page title&lt;/title&gt;

頁面標題，通常會顯示在瀏覽器標籤頁上。

&lt;link href="style.css" rel="stylesheet"&gt;&lt;/link&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;

透過 link 和 script 標籤，我們可以連結到其他CSS或Javascript檔案。

&nbsp;&lt;style&gt;&lt;/style&gt;

style標籤裡可以放CSS定義。

## Body參數

以下是放在body標籤中的參數:

&lt;!-- content --&gt; 

HTML的註解標籤，在「&lt;!--」和「--&gt;」標籤之間的內容不做解析。

&lt;script type="text/javascript"&gt;&lt;/script&gt;

當瀏覽器讀取HTML頁面的時候，會先將headers標籤中定義的CSS或Javascript檔案載入後，才會顯示網頁。 
因此因為效能的緣故，現在新的網頁寫法建議將比較不急著在載入網頁時立即執行的 script 標籤，都放在「body」標籤中。

上面提到的HTML5基本格式只有講到「語義」(Semantic)方面的改進，而所謂的HTML5其實是包含HTML、CSS、Javascript、瀏覽器的全方位改進，更多的資訊可參考 [Mozilla Developer Network](https://developer.mozilla.org/docs/HTML/HTML5)

參考: [A Minimal HTML Document](http://www.sitepoint.com/a-minimal-html-document-html5-edition/)