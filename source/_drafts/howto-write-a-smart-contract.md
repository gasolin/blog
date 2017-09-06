---
title: 如何撰寫智能合約(Smart Contract)?(I)
tags:
  - javascript
  - solidity
  - ethereum
---

[上一篇](https://blog.gasolin.idv.tw/2017/09/02/what-is-smart-contract/)中介紹了智能合約是什麼，也概略描述了從編譯到部署智能合約的流程，接下來將介紹如何使用solidity語言來寫智能合約。

## 使用solidity語言撰寫智能合約

Ethereum上的智能合約需要使用solidity[^1]語言來撰寫。雖然還有其他能用來撰寫智能合約的語言如Serpent(類Python)、lll(類Fortran)，但目前看到所有公開的智能合約都是使用solidity撰寫。

宣傳上說，solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈，都是使用屬於Javascript生態系的npm來提供的。但我覺得solidity還是比較像Java或C#。
因為和Javascript不同，solidity與Java或C#同屬於強型別(Strong Type，在定義變數時需要指定型別)語言、在定義函式(function)時同樣需指定回傳的型別(type)、同樣也需要先編譯才能執行。這些特性都是Javascript所不具備的。

## 開發前的準備

本文將使用當前最活躍的智能合約開發框架truffle[^3]為基礎來開發。之前提到過的ENS(Ethereum Name Service)[^5]也是採用truffle框架。其他選擇還有embark[^4]。

就像一般網站或App開發一樣，在提供公開服務之前，開發者會在自己用於寫程式的電腦(又稱作本機)或透過測試網路來測試程式執行的效果，測試完成後，才會部署到公開的網路上提供服務。
開發區塊鏈智能合約(程式)的過程也是如此。特別是公開鏈上所有的操作都需要真金白銀(虛擬代幣)，而且根據網路狀況，每個公開鏈上的操作都需要要一小段反應時間(15秒 ~ 數分鐘)，這些等待頗浪費寶貴的開發時間。
因此在開發的過程中，我們將使用testrpc[^6]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

testrpc中也包含了Javascript版本的Ethereum虛擬機(Ethereum Virtual Machine)[^7]，因此可以完整地執行智能合約。

### 安裝所需工具

首先開發機上必須裝好Node.js，再使用以下命令安裝所需的工具：

```sh
$ npm install -g ethereumjs-testrpc truffle
```

### 啟動 Testrpc

安裝好後隨時可以使用`testrpc`命令來啟動乙太坊測試環境。

```sh
$ testrpc
Available Accounts
==================
(0) 0xa4d7ce9137e6f8de4fb1311595b33230be15be50
(1) 0x26c231bdd7c8a7304983b04694c3437b30331019
(2) 0xe238ccca936dcdbd48f0cf3a1e6f147d04b55527
(3) 0x769ed341bf83cc86e5037cb78388012d6e2d9cc9
(4) 0x72a084c80195de79e5cd8dca59488e67982f65d7
(5) 0xcfda0765b0a82721d2f59581f53846a12e392999
(6) 0x4b0349aea768b4e1ed4cec683f8f7dd112729fea
(7) 0x643c305f0b3844984d7f1f7b9f3ab93a73dfdfcf
(8) 0x2ee0a7974326604442dca127d02fac4957ab3e8a
(9) 0xe00e57db1772f6e81bcccc982e565a10ae26ab92

Private Keys
==================
(0) 7de56fb677edc8d0c7a1f3a6d5bcb8f73ce257d44996e9b5fc8ad414af38a22a
(1) 4401de20cf287d15d1c062005d866a35cd82e2a73f8cb43ec0cb90b117d1ec38
(2) 8f51f9100a81218343d44a047ae3b0be5d80d262a13fbef24dc569b3e335e820
(3) 241a0ff98dfb6f290dbee909c9a7a4eea2de3a2174e7cddf834868ea03f80fa9
(4) ce1108cc6763bc74658068a55b080c6ccbfb1bd26e609588b81c07d13affc70d
(5) f9614c1fd34224787e6c95bbe881fb28fd0fdc00808ef85d0430505f4a348690
(6) 4c1baad08f720f5c5754bb185e66490b45e3480aa3ec419e4b76f7a81118b296
(7) af9af2c6b519d49605cc58b719240299e5e8b9a89a7e94a85625734fc30c46bd
(8) 55ab79ae6de4fad5b98bc1dfd795b945ba8e7d92dcc88073f9e3fdfef471f69f
(9) e9299fb391c8830370991659780933e6b62269e32a8cbc55a29aa5f73df995a2

HD Wallet
==================
Mnemonic:      addict cherry medal cupboard bless reduce oven beauty egg gift pledge exact
Base HD Path:  m/44'/60'/0'/0/{account_index}
```

可以看到testrpc啟動後自動建立了10個帳號(Accounts)，與每個帳號對應的私鑰(Private Key)。

一切準備就緒，我們可以開始建立第一份智能合約專案了。

## 建立專案

開啟另一個命令列視窗，輸入以下命令以建立專案：

```sh
$ mkdir demo
$ cd demo
$ truffle init
```

如此一來，我們已建立好第一份智能合約專案了。

在`demo`資料夾下，可以看到`contracts`資料夾，裡面放的是這個專案所包含的所有solidity程式。我們在`contracts`資料夾中額外建立一個`HelloWorld.sol`檔案。（或者也可以用`truffle create contract HelloWorld`命令來建立）

HelloWorld.sol檔案內容如下：
```
pragma solidity ^0.4.4;

contract HelloWorld {
  function sayHello() returns (string) {
    return ("Hello World");
  }
}
```

### 講解

```
pragma solidity ^0.4.4;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

```
contract HelloWorld {
  ...
}
```

`contract`關鍵字類似於其他語言中較常見的`class`。因為solidity是專為智能合約(Contact)設計的語言，宣告`contract`後即內建了開發智能合約所需的功能。也可以把這句理解為`class HelloWorld extends Contract`。

```
function sayHello() returns (string) {
  return ("Hello World");
}
```

函式的結構與其他程式類似，但如果有傳入的參數或回傳值，需要指定參數或回傳值的型別(type)。

### 編譯

現在執行`truffle compile`命令，我們可以將`HelloWorld.sol`原始碼編譯成Ethereum bytecode。

```sh
$ truffle compile
```

編譯成功的話，在`build/contracts`目錄下會多出`HelloWorld.json`這個檔案。（在Windows平台上執行truffle compile若遇到問題，可以查看參考資料[^9]來解決。）

### 部署

truffle框架中提供了部署的腳本，打開`/migrations/2_deploy_contracts.js`檔案，將內容修改如下

```
var HelloWorld = artifacts.require("./HelloWorld.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
```

使用`artifacts.require`語句來取得準備部署的合約，使用`deployer.deploy`語句將合約部署到區塊鏈上。

現在執行`truffle migrate`命令，

```sh
$ truffle migrate
Using network 'development'.

Running migration: 1_initial_migration.js
...
Saving successful migration to network...
Running migration: 2_deploy_contracts.js
...
Saving successful migration to network...
...
Saving artifacts...

```

如此一來合約已經部署到testrpc中。切換到testrpc視窗，可以看到testrpc有反應了。
### 與合約互動

truffle提供命令行工具，執行`truffle console`命令後，可用Javascript來和剛剛部署的合約互動。

```
$ truffle console
> let hello
> HelloWorld.deployed().then(deployed => hello = deployed)
> hello.sayHello.call()
'Hello World'
```

#### 講解

```js
> HelloWorld.deployed().then(deployed => hello = deployed)
```

這邊使用`HelloWorld.deployed().then`語句來取得HelloWorld合約的Object，並存到`hello`變數中，以方便後續的呼叫。

上面用的是Javascript ES6+的語法，這句也可以寫成

```js
HelloWorld.deployed().then(function(deployed) {
  hello = deployed;
});
```

如此一來我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。

本篇設計的範例[^8]超級簡單，但已達到完整地帶大家快速走一遍智能合約開發流程的目的。要透過智能合約實現各種功能，可以參考[Solidity http://solidity.readthedocs.io/en/latest/index.html] 和 [Truffle]( http://truffleframework.com/) 網站學習更多的內容。也歡迎讀者留言，分享學習資源或提供建議。

下一篇會接著介紹如何建立一個可以放到乙太幣錢包的加密代幣。

## 參考資料

* [1] Solidity http://solidity.readthedocs.io/en/latest/index.html
* [2] Solidity線上編輯器　https://ethereum.github.io/browser-solidity/
etherscan.io https://etherscan.io/
ethstats.net https://ethstats.net/
* [3] Truffle Framework http://truffleframework.com/
* [4] Embark Framework https://github.com/iurimatias/embark-framework
* [5] ENS也使用Truffle框架 https://github.com/ethereum/ens
* [6] https://github.com/ethereumjs/testrpc
* [7] https://github.com/ethereumjs/ethereumjs-vm
* [8] HelloWorld範例修改自 https://app.pluralsight.com/library/courses/blockchain-fundamentals/
* [9]  Truffle issue on windows http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows