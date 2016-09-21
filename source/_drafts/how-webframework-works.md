---
title: 網頁框架的基本運作方式 (科普)
tags:
  - web
  - mobile
  - webframework
---

在上一篇文章中我們介紹了動態網頁的運作方式：網站伺服器在收到網頁或資源的請求（Request）後，交由佈署在伺服器裡的動態網頁腳本，根據提供的網址處理並回應（response）對應的網頁。

{% mermaid %}
graph LR
  subgraph Web server
    request --> scripts
    scripts --> response
  end
{% endmermaid %}

我們現在日常用到的許多網站，其中要處理的工作遠比這個示意圖複雜。例如許多網站需要從資料庫中存取資料，或是需要更容易地保持頁面之間的一致性。因此透過各種程式語言撰寫的「網頁框架」也應運而生。「網頁框架」除了可以簡化諸多開發網站時會碰到的需求，還可以重用或繼承其他人做過的工具和經驗。比起直接寫腳本自行處理所有事情，大多數網站會選用各種「網頁框架」來開發。

## 網頁框架處理哪些事?

{% mermaid %}
graph LR
  subgraph WSGI
    request
    response
  end
  subgraph Webframework
    route --> controller
    controller --> template
    template --> controller
    controller --> model
    model --> controller
  end

  request --> route
  controller --> response
{% endmermaid %}

「網頁框架」
