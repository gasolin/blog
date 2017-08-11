---
title: 區塊鏈是什麼？
tags:
  - blockchain
date: 2017-08-10 22:23:31
---

今年比特幣(Bitcoin)[^1]與乙太幣(Ether)[^2]價格紛紛到達新高。主因除了隨著更多支援加密貨幣(Crypto Currency)-當地貨幣的兌換/代購/交易所開張，取得虛擬貨幣/代幣的方式更加多元外，首次公開發行加密代幣(ICO, Initial Coin/Crypto Token Offering)[^3] 這種創新的投資/募資方式愈加熱絡，也讓一些個人與機構意識到虛擬貨幣作為貨幣或貨品的投資價值。

這些虛擬幣背後所使用的技術叫做區塊鏈(blockchain)[^4]，可以被用來解決各種「交易」相關的問題。

## 網際網路交換訊息，區塊鏈交換價值

網際網路出現之前，不同的系統之間沒辦法用標準的協定來互相通訊和傳遞訊息。網際網路讓不同連網方式（撥接、光纖、4G）、不同設備間可以互相連接，滿足人與人之間對訊息的即時需求。人們的生活在網際網路發展起來的這20多年間，也因此產生了極大地改變。

2001年時，Napter[^5]開啟了透過點對點(P2P)網路交換MP3的風潮，這是第一次大眾意識到點對點網路可以被廣泛地應用在資訊交換上。隨後BitTorrent(BT)[^6]接過大旗，透過BitTorrent與配合的磁力連結(Magnet Link)[^7]，2009年時已占據了近50%整體網際網路流量。

區塊鏈基於網際網路，點對點(P2P)網路，和以密碼學為基礎的共識紀錄機制，提供了一個可以不被地域限制，快速交換價值的方式。
網際網路和點對點網路解決了資訊交換的問題，而區塊鏈則進一步想解決價值交換與交易信任的問題。

{% mermaid %}
graph TD
公開加密貨幣 --- 區塊鏈
公開加密貨幣 --- 激勵機制
區塊鏈 --- P2P
區塊鏈 --- 共識機制
共識機制 --- 密碼學
P2P --- 網際網路
{% endmermaid %}

區塊鏈不僅只是加密貨幣，透過區塊鏈，我們可以和各地的人做生意，而不用考慮如何在不同國家收款與匯款；透過新一代的區塊鏈技術，我們可以和各地的人做生意，所有的合約都由網路上的節點自動執行(智能合約 Smart Contract)；未來還可以透過瀏覽器使用智能合約，就像使用網站一樣容易(分散式應用 DAPP)。

## 參考資料

* [1] 比特幣 https://zh.wikipedia.org/wiki/%E6%AF%94%E7%89%B9%E5%B8%81
* [2] 乙太坊 https://zh.wikipedia.org/wiki/%E4%BB%A5%E5%A4%AA%E5%9D%8A
* [3] 首次公開發行加密代幣 https://zh.wikipedia.org/wiki/%E9%A6%96%E6%AC%A1%E4%BB%A3%E5%B8%81%E5%8F%91%E5%94%AE
* [4] 區塊鏈https://zh.wikipedia.org/wiki/%E5%8C%BA%E5%9D%97%E9%93%BE
* [5] Napster https://en.wikipedia.org/wiki/Napster
* [6] BitTorrent https://en.wikipedia.org/wiki/BitTorrent
* [7] 磁力連結 https://zh.wikipedia.org/wiki/%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5
* [8] [What Are Magnet Links, and How Do I Use Them to Download Torrents?](http://lifehacker.com/5875899/what-are-magnet-links-and-how-do-i-use-them-to-download-torrents)
