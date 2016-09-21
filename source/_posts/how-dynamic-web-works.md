---
title: 動態網頁的基本運作方式 (科普)
tags:
  - web
  - mobile
  - webframework
date: 2016-09-21 11:15:47
---


## 網頁有兩種

網頁類型可以簡單分為兩類：靜態網頁和動態網頁[^1]。在上一篇文章中我們介紹了基本的網頁運作方式，即瀏覽器請求網頁，網站伺服器傳回網頁。

{% mermaid %}
sequenceDiagram
  Browser ->> Server: 網站請求
  Server -->> Browser: 傳回網頁
{% endmermaid %}

這個模式適用於所有的網頁。對於瀏覽器來說，靜態網頁和動態網頁並沒有差別，都是收到一份完整的網頁後開始解析。
靜態網頁和動態網頁的區分，主要是發生在網站伺服器端。

支援動態網頁的網站伺服器，在收到網頁或資源的請求後，會透過CGI[^2]或WSGI[^3]界面，交由佈署在伺服器裡的動態網頁腳本進行處理。

{% mermaid %}
graph LR
  subgraph Web server
    request --> scripts
    scripts --> response
  end
{% endmermaid %}

我們現在日常用到的許多網站，其中要處理的工作遠比這個示意圖複雜。例如許多網站需要從資料庫中存取資料，或是需要更容易地保持頁面之間的一致性。因此透過各種程式語言撰寫的「網頁框架」也應運而生，簡化了諸多開發網站時會碰到的需求，並可以重用或繼承其他人做過的工具和經驗。比起直接寫腳本，大多數網站會選用各種「網頁框架」來開發。

### 參考資料：

[^1]: https://en.wikipedia.org/wiki/Dynamic_web_page
[^2]: https://en.wikipedia.org/wiki/Common_Gateway_Interface
[^3]: https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface
