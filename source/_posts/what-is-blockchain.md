---
title: 區塊鏈是什麼？
tags:
  - blockchain
  - ethereum
date: 2017-08-10 22:23:31
---

今年比特幣(Bitcoin)[^1]與以太幣(Ether)[^2]價格紛紛到達新高。主因除了隨著更多支援加密貨幣(Crypto Currency)-當地貨幣的兌換/代購/交易所開張，取得虛擬貨幣/代幣的方式更加多元外，首次公開發行加密代幣(ICO, Initial Coin/Crypto Token Offering)[^3] 這種創新的投資/募資方式愈加熱絡，也讓一些個人與機構意識到虛擬貨幣作為貨幣或貨品的投資價值。

這些虛擬幣背後所使用的技術叫做區塊鏈(blockchain)[^4]，可以被用來解決各種「交易」相關的問題。

## 網際網路交換訊息，區塊鏈交換價值

網際網路出現之前，不同的系統之間沒辦法用標準的協定來互相通訊和傳遞訊息。網際網路讓不同連網方式（撥接、光纖、4G）、不同設備間可以互相連接，滿足人與人之間對訊息的即時需求。人們的生活在網際網路發展起來的這20多年間，也因此產生了極大地改變。

2001年時，Napter[^5]開啟了透過點對點(P2P)網路交換MP3的風潮，這是第一次大眾意識到點對點網路可以被廣泛地應用在資訊交換上。隨後BitTorrent(BT)[^6]接過大旗，透過BitTorrent與配合的磁力連結(Magnet Link)[^7]，2009年時已占據了近50%整體網際網路流量。

區塊鏈基於網際網路，點對點(P2P)網路，和以密碼學為基礎的共識紀錄機制，提供了一個可以不被地域限制，快速交換價值的方式，降低交易的不確定性(uncertainty)與風險。
網際網路和點對點網路解決了資訊交換的問題，而區塊鏈則進一步想解決價值交換與交易信任的問題。

{% mermaid graph TD %}
公開加密貨幣 --- 區塊鏈
公開加密貨幣 --- 激勵機制
區塊鏈 --- P2P
區塊鏈 --- 共識機制
共識機制 --- 密碼學
P2P --- 網際網路
{% endmermaid %}

區塊鏈不僅只是加密貨幣，透過區塊鏈，我們可以和各地的人做生意，用很低的手續費在不同國家收款與匯款(都在同一個公開區塊鏈上)，而且幾分鐘內就可到帳；交易的過程中，所有的合約都由網路上的節點自動執行(智能合約 Smart Contract)，可以避免人為操縱與詐欺等潛在的信任問題，讓人們可以更安心地交易；未來還可以透過瀏覽器使用智能合約，就像使用網站一樣容易(分散式應用 DAPP)。

暢想未來的商業模型，可能是顧客透過易用的手機或網頁DAPP取得商家提供的資訊，經由可信任的智能合約，讓彼此能快速地交換價值與服務。

## 聯盟鏈

區塊鏈根據型態，大致分為公有鏈，私有鏈、聯盟鏈幾種。公有鏈就是大眾比較常聽到的各種加密代幣。可以在 https://coinmarketcap.com/ 查看大部分的加密貨幣。除了公有鏈之外，多家銀行、支付機構、甚至IBM、微軟等科技公司也相繼投入資源，參與區塊鏈研究與發展。多數機構採用的是聯盟鏈的形式。Apache基金會下的Hyper Ledger[^9]計畫是目前發展較好的聯盟鏈。

聯盟鏈與公有鏈有許多不同點。其一是對資料一致性有更高地要求。其二因為相對來說聯盟鏈的節點比較可控，也不需要加入代幣激勵機制或浪費能源在比拚算力的Prove-of-WOrk(PoW)共識機制上。其三是需要對資源與智能合約存取設置權限，以符合企業內部的需求。

## 區塊鏈用到的加密技術

可以在Youtube上查看 [Blockchain 101 - A Visual Demo](https://youtu.be/_160oMzblY8)影片[^14]，或前往對應的[Block Chain Demo網站](https://anders.com/blockchain/)[^15]自行動手試驗。

## 參考資料

* [1] 比特幣 https://zh.wikipedia.org/wiki/%E6%AF%94%E7%89%B9%E5%B8%81
* [2] 以太坊 https://zh.wikipedia.org/wiki/%E4%BB%A5%E5%A4%AA%E5%9D%8A
* [3] 首次公開發行加密代幣 https://zh.wikipedia.org/wiki/%E9%A6%96%E6%AC%A1%E4%BB%A3%E5%B8%81%E5%8F%91%E5%94%AE
* [4] 區塊鏈https://zh.wikipedia.org/wiki/%E5%8C%BA%E5%9D%97%E9%93%BE
* [5] Napster https://en.wikipedia.org/wiki/Napster
* [6] BitTorrent https://en.wikipedia.org/wiki/BitTorrent
* [7] 磁力連結 https://zh.wikipedia.org/wiki/%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5
* [8] [What Are Magnet Links, and How Do I Use Them to Download Torrents?](http://lifehacker.com/5875899/what-are-magnet-links-and-how-do-i-use-them-to-download-torrents)
* [9] https://www.hyperledger.org/
* [10] https://entethalliance.org/
* [11] https://en.wikipedia.org/wiki/Proof-of-work_system
* [12] How Bitcoin Works Under the Hood https://www.youtube.com/watch?v=Lx9zgZCMqXE
* [13] TED [How the blockchain will radically transform the economy](https://www.youtube.com/watch?v=RplnSVTzvnU)
* [14] [Blockchain 101 - A Visual Demo](https://youtu.be/_160oMzblY8)
* [15] [Block Chain Demo網站](https://anders.com/blockchain/)
* [16] What is an Initial Coin Offering? https://www.youtube.com/watch?v=iyuZ_bCQeIE
