---
title: 網站的基本運作方式 (科普)
tags:
  - web
  - mobile
date: 2016-09-20 15:13:31
---

當我們在瀏覽器上輸入網址，按下Enter鍵之後，瀏覽器會傳送一個訊息出去，向符合這個網址的網站伺服器發出請求。當網站伺服器收到請求後，就會傳回瀏覽器所請求的網頁。

{% mermaid %}
sequenceDiagram
  Browser ->> Server: 網站請求
  Server -->> Browser: 傳回網頁
{% endmermaid %}

瀏覽器收到網頁後，瀏覽器會開始解析網頁內容。網頁使用一種稱為`HTML (HyperText Markup Language)`[^1]的文字格式來定義裡面內容。當瀏覽器看到一些特定標籤（諸如link或script）的時候，瀏覽器會根據標籤裡的網址，再次向符合這些網址的網站伺服器請求相關的資源。而這些網址所代表的網站伺服器，與原本提供網頁的網站伺服器並不一定是同一台。

{% mermaid %}
sequenceDiagram
  Browser ->> Server: 請求網頁中的資源
  Server -->> Browser: 傳回資源
  Browser ->> Server2: 請求網頁中的資源
  Server2 -->> Browser: 傳回資源
{% endmermaid %}

網頁中包含的資源通常指的是Javascript[^2]，CSS[^3]，與圖片，影片，聲音等檔案。現代網頁通常以HTML呈現網頁的語義（網頁的大致架構與內容），以CSS改變在不同設備上呈現的效果，以Javascript控制網頁的實際運作。

從網路上接收到所有相關的CSS與JavaScript資源後，瀏覽器才會開始繪製頁面。

{% mermaid %}
graph LR
  subgraph Browser
    page
  end

  subgraph Web server
    html
    resources["resources (js, css, images)"]
  end

  html --> page
  resources --> page

{% endmermaid %}

### 參考資料：

會寫這篇的原因之一是剛剛幫這個部落格加入了[Mermaid](https://knsv.github.io/mermaid) (使用Markdown畫方塊圖, 循序圖) 與footnote支援，想試試顯示的效果:p

[^1]: https://zh.wikipedia.org/wiki/HTML
[^2]: https://zh.wikipedia.org/wiki/JavaScript
[^3]: https://zh.wikipedia.org/wiki/Cascading_Style_Sheets
