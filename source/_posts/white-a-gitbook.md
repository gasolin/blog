---
title: 用gitbook寫書的體驗
tags:
  - ethereum
  - git
  - markdown
date: 2018-01-28 13:30:30
---

把過去半年本部落格上關於區塊鏈的文章整理放到Gitbook。命名為[Ethereum區塊鏈！智能合約(Smart Contract)與分散式網頁應用(DApp)入門](https://www.gitbook.com/book/gasolin/learn-ethereum-dapp/details)，對區塊鏈，智能合約，分散式應用(DApp)感興趣的讀者不妨前往一觀。

這不是我寫的第一本電子書[^1]，也不是我第一本用Markdown寫的電子書(以前用Leanpub出版過[Firefox OS 開發書](https://leanpub.com/gaiafromabove))，但絕對是我編輯過程最順暢的一本書（雖然還未完成 XD）。

## 一路Markdown

編輯過程最順暢不是因為對主題很熟悉或寫得快，而是因為從部落格文章初稿到Gitbook，在寫作的過程中可以一路使用Markdown。而且由於原本部落格圖片皆使用外連，因此引用圖片時也不用像以前編書時需要重新導入的過程。由於gitbook也支援`mermaid.js`插件，支援我常常使用的flowchart語法，因此這些流程圖也不需要重新截圖或繪製，節省了大量時間。

## 所見即所得編輯器...

我已有Ｍarkdown格式的初稿，但剛開始我使用gitbook提供的所見即所得的編輯器。使用起來感覺非常不自在。

線上編輯器提供的`new change request`，所見即所得編輯等功能，特別是gitbook提供的所見即所得編輯器無法切換回純Markdown模式，對於已熟悉git, Markdown語法的我來說並沒有變得好用。直接將Markdown格式貼到編輯器上時，也無法順利辨識格式，反而是貼上已輸出的部落格網頁時效果好很多。

所以最後我放棄使用線上編輯器，而是在本機編輯Markdown後直接git推送到專案上。

gitbook在同步收到新的改動後，會自動編譯並發布新版本，相當方便。接下來應該會繼續使用這個流程。


## 參考資料

* [1] 我的著作 https://gasolin.idv.tw/portfolio#books
* [2] 利用gitbook命令行工具创建和编译书籍 http://mdengli.com/gitbook_cmd_study/
* [3] 深入淺出 GitBook 寫作與自助出版，電子書也能多人協作 http://www.codedata.com.tw/social-coding/gitbook-self-publishing
* [4] 用 GitBook 來寫本書吧！http://www.oxxostudio.tw/articles/201502/gitbook.html
