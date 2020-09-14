---
title: 參與首次代幣發行(ICO)時要知道的事
tags:
  - ethereum
  - ico
date: 2017-08-12 20:46:30
---

```
聲明：gasolin.eth 此 Domain 已過期，我並未繼續註冊
```

最近首次代幣發行(ICO)[^1]相當熱門，但當代幣投資者打算贊助某個專案時，有相當多技術原因可能導致投資失敗，而這些原因大多是可以避免的。


## 1.投資ICO/新創，99%機率跟遇到詐騙沒兩樣

一般統計9成的新創會在一年內關門，存活下來的又有90%會在五年內倒閉。
換句話說，新創的五年存活率只有1%。

首次代幣發行ICO的發起人多是新創公司，投資下去就跟投資新創一樣，有極大失敗的可能。
如果不了解風險，沒做足夠的功課而盲目投資，99%機率投資ICO就跟遇到詐騙沒兩樣。
就算發起人說得天花亂墜，到時參與ICO換得的代幣也只能當紀念用了。


## 2. 別用交易所錢包轉帳

**交易所的錢包並不能換回其他代幣，**
**交易所的錢包並不能換回其他代幣，**
**交易所的錢包並不能換回其他代幣，**
重要的事說三遍。

交易所幾乎都會向客戶宣稱:開戶送比特幣/以太幣錢包。當客戶兌換好代幣後，客戶可以看到錢包帳戶裡的餘額，也可以轉進轉出，從客戶看來確實"擁有"了比特幣/以太幣錢包。

但是交易所的錢包畢竟是交易所的錢包。在轉出比特幣/以太幣時，交易所會動態選用自己轄下的某個錢包帳號出帳。你所參與的代幣眾籌，它的智能合約收到的是交易所的錢包帳號而不是你的錢包帳號，所以智能合約發代幣的對象也變成交易所了。

比較建議的方式是使用[MyEtherWallet](https://www.myetherwallet.com/)[^5]或硬體錢包參與以太坊相關的ICO。其他可使用的錢包可查看參考資料[^7]。

## 3. 用到假錢包

無論是網路上或是手機應用程式商店中，有許多宣稱有比特幣/以太幣錢包功能的網站/App。其中依然有些是假錢包。當你使用這些錢包轉幣時，可能會被騙走。因此盡量選擇自己常用，有信譽的網站/應用，或硬體錢包來操作ICO。

網站應該加入書籤，以後都使用書籤中的網站存取。不要盲目信任搜尋引擎搜到的連結(原因在下一條)，或透過slack等社交網站，那些看起來像官方訊息提供的連結或地址[10]。

## 4.轉帳時填錯地址或轉到假地址

比特幣跟以太幣所謂的`錢包`地址，跟IPv6地址一樣，就是一串16進位數字(而且是頗長的一串。有人算過總共幾位數嗎?)。要投資時需要照著網站上提供的指示，將錢包地址複製到自己的錢包接收地址欄中。
要是很不幸地複製錯了，你轉出的資金就被轉到不知是誰的錢包裡去了。由於以太坊上沒有銀行，一旦轉錯了，也沒有申訴的地方喔。

對於釣魚網站來說，這種根本就是亂碼的錢包地址真是個福音，因為只要將網站複製一下，錢包地址換成自己的，弄個前面網址一模一樣，但並非`.com`的假官方網域，再下個Google搜尋廣告，就可以開張來詐騙了!

但幸好最近ENS(Ethereum Name Service)[^4] 地址網域開始投入使用，可以將以太坊(Ethereum)錢包地址以類似網址的方式表示。
例如我(gasolin)若發起一個ICO，就可以請投資者將以太幣轉到`gasolin.eth`這網址。
`gasolin.eth`會自動轉址到我指定的錢包地址。之後要公開智能合約讓大眾使用時，也可以公開諸如`service.gasolin.eth`這樣的網址，`service.gasolin.eth`會自動轉到對應的智能合約地址。

![Imgur](http://i.imgur.com/nkbbryCm.png)

期望之後有更多的ICO和智能合約使用ENS，讓贊助者可以更安心地轉帳。


## 5.代幣詐騙(scams)

隨著代幣眾籌愈發熱門，代幣詐騙(scams)也層出不窮。除了那種本來就是打算來詐騙(或是來搞笑[^2]?)的專案之外，另一種可能的詐騙方式，是詐騙者做一個長得一模一樣的釣魚網站(phishing)，選一個與原來ICO網站類似的網址，並透過搜尋引擎或論壇散播。沒注意到的投資者就可能因此被騙去代幣。
因此投資前務必多方確認。也可以到`cointelegraph`[^3]或`tokenmarket`[^6]上查看近期的ICO列表。上面列出的ICO項目不代表可靠，但至少新聞網站為了信譽，會把明顯是詐騙的ICO剔除掉(?)。


## 結語

投資一定有風險，ICO投資有賺有賠，申購前應詳閱公開說明書。
可以將上面提到的幾點當作檢核表，避免因為技術原因導致投資失利。

雖然上面舉的gasolin ICO只是個例子，但 [gasolin.eth](https://etherscan.io/enslookup?q=gasolin.eth) 這個網址真的可以用喔！
覺得這篇文章寫得蠻好想打賞一下，可以打賞一點ETH到我的錢包地址，順便試試ENS的功能:p
之後也將分享如何註冊ETH地址的心得。


## 參考資料

* [1] 首次公開發行加密代幣 https://zh.wikipedia.org/wiki/%E9%A6%96%E6%AC%A1%E4%BB%A3%E5%B8%81%E5%8F%91%E5%94%AE
* [2] 嫩模幣 http://nmb.fun/
* [3] https://cointelegraph.com/ico-calendar
* [4] https://registrar.ens.domains/
* [5] [Myetherwallet介紹](http://blockcast.it/2017/05/27/eth-and-eth-token-wallet-series-myetherwallet/)
* [6] https://tokenmarket.net/ico-calendar
* [7] Token compatible Ethereum wallet list https://tokenmarket.net/what-is/ethereum-token-wallets/
* [8] Protecting Yourself and Your Funds https://myetherwallet.github.io/knowledge-base/getting-started/protecting-yourself-and-your-funds.html
* [9] 如果你打算發行ICO，可以看看這篇介紹ICO過程中各種花式被駭的經驗 https://medium.com/@kickico/how-they-tried-to-hack-our-ico-d348659dc4
* [10] How to scam Ethereum in 24 hrs with Slack https://hackernoon.com/how-to-scam-102-860-usd-worth-of-ethereum-in-24-hrs-with-slack-63ce1032219c
