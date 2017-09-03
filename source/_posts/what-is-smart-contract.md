---
title: 什麼是智能合約(Smart Contract)?
tags:
  - ethereum
date: 2017-09-2 22:14:48
---

## 智能合約:ledger:是什麼

在區塊鏈上運行的程式，通常稱為智能合約(Smart Contract):ledger:。所以通常會把"寫區塊鏈程式"改稱作"寫智能合約"。雖然比特幣(Bitcoin)上也能寫智能合約，但是比特幣所支援的語法僅與交易有關，能做的事情比較有限。因此目前提到寫智能合約，通常指的是支援執行圖靈完備程式的以太坊(Ethereum)區塊鏈:chains:。

## 智能合約可以做什麼

目前最常見的智能合約是各種加密貨幣合約:pound:，開發者可以很容易地透過部署一個智能合約，來提供運行於以太坊上的新加密代幣。如果這份智能合約相容於ERC20標準[^1]，開發者不需要重新開發從挖礦到交易的整個代幣生態系，你的新加密代幣就可以直接使用支援以太坊的電子錢包:moneybag:來收送，大大降低了建立新加密代幣的門檻。

智能合約也讓募資:money_with_wings:變得更透明。參與者投資資金或提供服務，也可獲得相應的權益。這份權益可以用代幣的形式返還給參與者。同樣地如果這代幣相容於ERC20標準[^2]，投資者或贊助者還可以隨時交易這些代幣。讓資金的運用變得更加彈性，也降低了投資的門檻。

除此之外，智能合約也可以用來運作各式公開公正的自動服務機構(DAO，Decentralized Autonomous Organization):bank:。透過分散在全球各節點上運作的智能合約，所有運作與決策都是公開透明的，降低了交易的不確定性(Uncertainty)。

## 智能合約和一般程式的差異

以太坊智能合約確實有些和一般程式不同的特性，以下整理了四個不同點。

### 一，整合金流容易

一般的應用程式要整合金流是件非常不容易的事情。而智能合約極容易整合金流系統(使用以太幣或自行建立的新代幣合約)。

### 二，部署時與後續呼叫時需費用

一般的應用程式需要提供網址讓使用者下載，一般的網頁應用程式也需要運行在伺服器上，開發者需要維持伺服器的運作以提供服務，這需要持續地花費（就算是免費的伺服器或網頁空間，也是廠商自行吸收了費用），程式開始運作後，除了維持費用外不需額外的花費。

智能合約在部署時需要一筆費用，這筆費用將分給參與交易驗證（挖礦）的人。而在合約部署成功後，合約會作為不可更改的區塊鏈的一部分，分散地儲存在全球各地以太坊的節點上。也因此，智能合約在部署後，並不需定期提供維持費用。但是每次呼叫智能合約時，都需要提供一小筆交易費用。

### 三，儲存資料的成本更高

一般的應用程式將資料儲存在本機或伺服器上，需要資料時再從本機或伺服器上讀取，而智能合約將資料儲存在區塊鏈上，儲存資料所需的時間與成本相對昂貴。

### 四，部署後無法更改

一般的應用程式改版時可透過安裝新版程式，網頁應用程式也可透過部署新版程式達成，而智能合約一旦部署到區塊鏈上後，就無法更改這個智能合約。當然聰明的開發者透過加入額外的智能合約，也已有辦法繞過智能合約部署後無法再更改的限制。

## 如何撰寫智能合約？

Ethereum上的智能合約需要使用solidity[^2]語言來撰寫。之前還有其他能用來撰寫智能合約的語言如Serpent(類Python)、lll(類Fortran)，但目前看到所有公開的智能合約都是使用solidity撰寫。官方宣傳上說solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈都是使用屬於Javascript生態系的npm來提供的。

## 將智能合約部署到區塊鏈的流程

寫好solidity程式碼(.sol)後，需要先將程式碼編譯(compile)成EVM(Ethereum Virtual Machine)能讀懂的二進位Contract ByteCode，才能部署到Ethereum的區塊鏈上執行。部署到區塊鏈上的合約會有一個和錢包地址（Address）一樣格式的合約地址（Contract Address）。

{% mermaid %}
graph LR
subgraph local
.sol -- compile --> bytecode[Contract Bytecode]
end
subgraph ethereum
bytecode -- deploy --> Contract
end
{% endmermaid %}

部署後智能合約可自動執行。後續呼叫智能合約的時候，使用者可以使用部署合約的錢包地址(Owner Account)，或依據撰寫的智能合約條件，讓其他錢包地址也能呼叫這個智能合約。
所謂的"呼叫智能合約"，其實就是向這個合約地址發起交易，只是交易的不只是代幣，而可以是智能合約提供的呼叫方法。

{% mermaid %}
graph LR
subgraph local
Account
end
subgraph ethereum
Account -- call --> Contract
Contract --> EVM
end
{% endmermaid %}

## 有點抽象，來個例子？ :chestnut:

在[收到我的ENS網域啦 gasolin.eth](https://blog.gasolin.idv.tw/2017/08/13/got-my-ens-domain/)這篇文章中，我介紹了申請Ethereum Name Service的心得。其實ENS本身就是一堆智能合約的集合，透過這些智能合約，一起提供了Ethereum Name Service從申請，競價，到設定地址對應的服務。

要和智能合約互動，除了需要有合約地址外，還需要知道合約所提供的操作介面(Application Binary Interface，ABI)，即知道如何呼叫程式提供的功能，和如何解釋程式回傳的資料。
ABI（JSON格式）檔案在從原始碼編譯成ByteCode時會一併產生。

下圖即是ENS Public Resolver這個合約的地址和ABI。
![](https://i.imgur.com/y6jvpAUl.png)

準備好合約地址和ABI後，我們才能呼叫對應功能來存取合約。
![Imgur](https://i.imgur.com/5550HgNl.png)

在下一篇中，我將簡單介紹如何撰寫Solidity程式，敬請期待。

## 參考資料

* [1] ERC20 https://theethereum.wiki/w/index.php/ERC20_Token_Standard
* [2] Solidity http://solidity.readthedocs.io/en/latest/index.html
