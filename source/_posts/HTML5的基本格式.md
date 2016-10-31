---
title: HTML5的基本格式
tags:
  - html
  - reimaging
date: 2013-03-31 02:02:01
---

<div class="separator" style="clear: both; text-align: center;">[![](http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png)](http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png)</div>
如果你好一陣子沒有關心網頁相關技術，那麼看到下面的code, 可能會揉揉眼睛說：這樣也能跑？

```html
<!DOCTYPE html>
<html lang=”en”>
  <head>
    <meta charset=utf-8>
    <title>page title</title>
    <!–<link href=”style.css” rel=”stylesheet”></link>–>
    <!–<script src=”script.js”></script>–>
    <!–<style></style>–>
</head>
<body>
  <!– content –>
  <!–<script type=”text/javascript”></script>–>
</body>
```

只要有瀏覽器，大家都可以試著寫網頁。
我們分行來看看上面的網頁程式碼:

## 主要架構

```
<!DOCTYPE html>
```

HTML5的格式宣告，注意「DOCTYPE」要用大寫才有向前相容喔(請參考[HTML5 Hacks](http://shop.oreilly.com/product/0636920026273.do) 1)。

```
<html lang="en">
</head>
```

HTML主標籤，所有HTML頁面的內容都要放在裡面。 html標籤裡的`lang`是標籤的屬性，`lang="en"`代表這張網頁的預設語言是英文(en)。若預設語言是正體中文可以改成`lang="zh-tw"`。

Header參數

```
<head></head>
```

HTML檔案標頭， 一些頁面相關資訊。

```
<body></body>
```

HTML內容， 顯示給使用者看的頁面內容。

## Header參數

以下是放在header標籤中的參數:

```
<meta charset=utf-8>
```

聲明這個網頁是以UTF-8格式編碼，多數瀏覽器只在前512 bytes查看文字編碼格式，所以這個標籤務必放在Header標籤的最前頭。</span>

```
<title>page title</title>
```

頁面標題，通常會顯示在瀏覽器標籤頁上。

```
<link href=”style.css” rel=”stylesheet”></link>
<script src=”script.js”></script>
```

透過 link 和 script 標籤，我們可以連結到其他CSS或Javascript檔案。

```
<style></style>
```

script標籤裡可以放Javascript程式碼，style標籤裡可以放CSS定義。

## Body參數

以下是放在body標籤中的參數:

```
<!–- content -–>
```

HTML的註解標籤，在「&lt;!--」和「--&gt;」標籤之間的內容不做解析。

```
<script defer type="text/javascript"></script>
```

當瀏覽器讀取HTML頁面的時候，會先將headers標籤中定義的CSS或Javascript檔案載入後，才會顯示網頁。 
因此因為效能的緣故，現在新的網頁寫法建議將比較不急著在載入網頁時立即執行的 script 標籤，都放在「body」標籤中。但最好還是將JS與CSS分別放在不同的檔案中，透過link和script標籤連結到這個網頁。

上面提到的HTML5基本格式只有講到「語義」(Semantic)方面的改進，而所謂的HTML5其實是包含HTML、CSS、Javascript、瀏覽器的全方位改進，更多的資訊可參考 [Mozilla Developer Network](https://developer.mozilla.org/docs/HTML/HTML5)

參考: [A Minimal HTML Document](http://www.sitepoint.com/a-minimal-html-document-html5-edition/)
