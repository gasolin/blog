---
title: 如何撰寫智能合約(Smart Contract)?(I)
tags:
  - javascript
  - solidity
  - ethereum
date: 2017-09-06 18:30:31
---

Update: 11/30/2017 更新教程，使用[Truffle 4.0.1](https://github.com/trufflesuite/truffle/releases/tag/v4.0.0)。

[上一篇](https://blog.gasolin.idv.tw/2017/09/02/what-is-smart-contract/)中介紹了智能合約:ledger:是什麼，也概略描述了從編譯到部署智能合約的流程，接下來將介紹如何使用solidity語言來寫智能合約。

## 使用solidity語言撰寫智能合約

Ethereum上的智能合約需要使用`solidity`[^1]語言來撰寫。雖然還有其他能用來撰寫智能合約的語言如`Serpent`(類Python)、`lll`(類Fortran)，但目前看到所有公開的智能合約都是使用solidity撰寫。

宣傳上說，solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈，都是使用屬於Javascript生態系的npm來提供的。但我覺得solidity還是比較像Java或C#。
因為和Javascript不同，solidity與Java或C#同屬於強型別(Strong Type，在定義變數時需要指定型別)語言、在定義函式(function)時同樣需指定回傳的型別(type)、同樣也需要先編譯才能執行。這些特性都是Javascript所不具備的。

## 開發前的準備

本文將使用當前最活躍的智能合約開發框架`truffle`[^3]為基礎來開發。之前提到過的ENS(Ethereum Name Service)[^5]也是採用truffle框架。其他選擇還有`embark`[^4]等。

就像一般網站或App開發一樣，在提供公開服務之前，開發者會在自己用於寫程式的電腦(又稱作本機):computer:或透過測試網路:spider_web:來測試程式執行的效果，測試完成後，才會部署到公開的網路上提供服務。
開發區塊鏈智能合約(程式)的過程也是如此。特別是公開鏈上所有寫入或讀取計算結果的操作都需要真金白銀(虛擬代幣):money_with_wings:，而且根據網路狀況，每個公開鏈上的操作都需要要一小段反應時間(15秒 ~ 數分鐘)，這些等待頗浪費寶貴的開發時間:hourglass_flowing_sand:。
因此在開發的過程中，我們將使用`testrpc`[^6]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

testrpc中也包含了Javascript版本的Ethereum虛擬機(Ethereum Virtual Machine)[^7]，因此可以完整地執行智能合約:innocent:。

此外，開發前還需準備一個合手的編輯器。我目前是使用[Visual Studio Code](https://code.visualstudio.com)搭配[solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)插件來開發。solidity插件除了支援語法高亮之外，也會透過Solium[^11]檢查並提示基本的語法錯誤，相當方便。其他編輯器應該也有類似的插件可選擇。

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

可以看到testrpc啟動後自動建立了10個帳號(Accounts)，與每個帳號對應的私鑰(Private Key):key:。每個帳號中都有100個測試用的以太幣(Ether):dollar:。要注意testrpc僅運行在記憶體中，因此每次重開時都會回到全新的狀態。

一切準備就緒，我們可以開始建立第一份智能合約專案了。

## 建立專案

開啟另一個命令列視窗，輸入以下命令以建立專案：

```sh
$ mkdir hello
$ cd hello
$ truffle init
```

如此一來，我們已建立好第一份智能合約專案了。

在`demo/`資料夾下，可以看到`contracts/`資料夾，裡面放的是這個專案所包含的所有solidity程式。我們在`contracts/`資料夾中額外建立一個`HelloWorld.sol`檔案。（或者也可以用`truffle create contract HelloWorld`命令來建立）

`HelloWorld.sol`檔案內容如下：
```
pragma solidity ^0.4.11;

contract HelloWorld {
  function sayHello() returns (string) {
    return ("Hello World");
  }
}
```

### 講解

```
pragma solidity ^0.4.11;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

想要知道當前的solidity版本，也可以用 `truffle version` 命令來查看當前使用的truffle與solidity版本：

```sh
$ truffle version
Truffle v4.0.1 (core: 4.0.1)
Solidity v0.4.18 (solc-js)
```

```
contract HelloWorld {
  ...
}
```

`contract`關鍵字類似於其他語言中較常見的`class`。因為solidity是專為智能合約(Contact)設計的語言，宣告`contract`後即內建了開發智能合約所需的功能。也可以把這句理解為`class HelloWorld extends Contract`。

雖然一個.sol檔案中可以定義多個Contract，但建議一個.sol檔案中只定義一個Contract以便於後續的維護。

```
function sayHello() returns (string) {
  return ("Hello World");
}
```

函式的結構與其他程式類似，但如果有傳入的參數或回傳值，需要指定參數或回傳值的型別(type)。所有支援的型別可以查看參考資料[^10]。

## 編譯

現在執行`truffle compile`命令，我們可以將`HelloWorld.sol`原始碼編譯成Ethereum bytecode。

```sh
$ truffle compile
```

編譯成功的話，在`build/contracts/`目錄下會多出`HelloWorld.json`這個檔案。（在Windows平台上執行truffle compile若遇到問題，可以查看參考資料[^9]來解決。）

## 部署

為了將寫好的solidity程式碼部署到區塊鍊上，我們需要做一些相應的設定。

### 遷移

truffle框架中提供了方便部署合約的腳本。我們可以在`migrations/`目錄下維護這些腳本。這些腳本除了能部署合約，也可以用來遷移合約中的資料。建立`migrations/2_deploy_contracts.js`檔案(這些腳本使用Javascript撰寫)，將內容修改如下

```js
var HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
```

這些migration檔案會依照檔案的`編號`來執行。例如`2_`就會在`1_`之後執行。檔案後面的文字只為協助開發者理解之用。

在檔案中可使用`artifacts.require`語句來取得準備部署的合約。使用`deployer.deploy`語句將合約部署到區塊鏈上。這邊`HelloWorld`是`contract`的名稱而不是檔名。因此可以用此語法讀入任一`.sol`檔案中的任一合約。

### 區塊網路設定

為了與`testrpc`連線，需要打開`truffle.js`並加入以下設定：

```js
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
```

truffle 使用 Javascript 的 Object 格式來定義設定。這邊定義了`development`網路為`localhost:8545`，即testrpc所提供的網路位址。

### 部署

現在執行`truffle migrate`命令

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

```sh
$ truffle console
> let contract
> HelloWorld.deployed().then(instance => contract = instance)
> contract.sayHello.call()
'Hello World'
>
```

#### 講解

```js
> HelloWorld.deployed().then(instance => contract = instance)
```

`truffle console`中預載了`truffle-contract`[^12]函式庫，以方便操作部署到區塊鏈上的合約。

這邊使用`HelloWorld.deployed().then`語句來取得HelloWorld合約的Instance(實例)，並存到`contract`變數中，以方便後續的呼叫。

上面用的是Javascript ES6+的語法，這句也可以寫成

```js
HelloWorld.deployed().then(function(instance) {
  hello = instance;
});
```

```sh
> contract.sayHello.call()
'Hello World'
```

這邊直接呼叫`contract.sayHello()`也會得到一樣的結果。`truffle-contract`提供使用`call()`來讀取唯讀(read only)的資料，這樣就不需提供gas。因此如果遇到的操作需要向區塊鏈寫入資料，我們就不能用`call`語句了。

如此一來，我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。

### 加入新方法

我們在`HelloWorld.sol`中再加入一個`echo`方法，`echo`方法接受輸入一個參數，並回傳傳送的參數。

```
function echo(string name) constant returns (string) {
  return name;
}
```

新的`echo`方法中傳入了一個`name`參數。我們也為`echo`方法加入一個`constant`宣告，表示呼叫這個方法並不會改變區塊鏈的狀態。如此一來，透過`truffle-contract`來呼叫此方法時，會自動選用`call`來呼叫，也不需要額外提供gas。

由於更新了合約內容，我們需要先重新新編譯一次，將編譯結果部署到testrpc上，再透過`truffle console`執行看看結果。

```sh
$ truffle compile
...
$ truffle migrate --reset
...
$ truffle console
> let contract
> HelloWorld.deployed().then(instance => contract = instance)
> contract.echo("yo man")
'yo man'
>
```

`echo`方法確實將我們輸入的內容回傳了。同時因為宣告了`constant`，我們不需要直接呼叫`call()`方法，`truffle`會自動選用call來呼叫。

另一點需要注意的，是這次如果還是用`truffle migrate`命令，我們會得到如下訊息：

```sh
$ truffle migrate
Using network 'development'.

Network up to date.
```

Truffle會告訴你現在網路上的合約都已是最新的，但事實上剛剛程式中新增的方法並沒有更新到區塊鏈上。要更新區塊鏈上已部署的程式，需要改寫`migrations`中的腳本，但現在還不到介紹migration的時候。還好我們開發用的區塊鏈是怎麼修改都沒關係的testrpc，可以使用`truffle migrate --reset`命令直接重新在testrpc上部署一次:tada:。


## 使用truffle develop命令

truffle 4.0.0 版本之後加入了`truffle develop`命令。這個命令讓我們不需要另外安裝testrpc等環境，就能直接上手開發。

例如

```sh
truffle develop
Truffle Develop started at http://localhost:9545/

Accounts:
(0) 0x627306090abab3a6e1400e9345bc60c78a8bef57
(1) 0xf17f52151ebef6c7334fad080c5704d77216b732
(2) 0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef
(3) 0x821aea9a577a9b44299b9c15c88cf3087f3b5544
(4) 0x0d1d4e623d10f9fba5db95830f7d3839406c6af2
(5) 0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e
(6) 0x2191ef87e392377ec08e7c08eb105ef5448eced5
(7) 0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5
(8) 0x6330a553fc93768f612722bb8c2ec78ac90b3bbc
(9) 0x5aeda56215b167893e80b4fe645ba6d5bab767de

Mnemonic: candy maple cake sugar pudding cream honey rich smooth crumble sweet treat

truffle(develop)> compile
truffle(develop)> migrate
Using network 'develop'.
Running migration: 1_initial_migration.js
  Deploying Migrations...
...
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying HelloWorld...
...
Saving artifacts...
truffle(develop)> let contract
truffle(develop)> HelloWorld.deployed().then(instance =>contract = instance)
...
truffle(develop)> contract.sayHello.call()
'Hello World'
```

可以看到，在命令行中輸入`truffle develop`命令，可以直接在裡面執行`compile`，`migrate`指令，還可以直接使用`console`命令所提供的與區塊鍊互動等功能。

## 結語

本篇設計的範例[^8]相當簡單，但已達到完整地帶大家快速:zap:走一遍智能合約開發流程的目的。要透過智能合約實現各種功能，可以參考[Solidity by example](http://solidity.readthedocs.io/en/latest/solidity-by-example.html) 和 [Truffle getting started](http://truffleframework.com/docs/getting_started/) 網站學習更多的內容。也歡迎讀者留言，分享學習資源或提供建議。

下一篇會接著介紹如何建立一份簡單的加密代幣🔒💵合約。

## 參考資料

* [1] Solidity http://solidity.readthedocs.io/en/latest/index.html
* [2] Solidity線上編輯器　https://ethereum.github.io/browser-solidity/
* [3] Truffle Framework http://truffleframework.com/
* [4] Embark Framework https://github.com/iurimatias/embark-framework
* [5] ENS也使用Truffle框架 https://github.com/ethereum/ens
* [6] https://github.com/ethereumjs/testrpc
* [7] https://github.com/ethereumjs/ethereumjs-vm
* [8] HelloWorld範例修改自 https://app.pluralsight.com/library/courses/blockchain-fundamentals/
* [9]  Truffle issue on windows http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows
* [10] Solidity支援的型別(Type) https://solidity.readthedocs.io/en/develop/types.html
* [11] Solium syntax check https://github.com/duaraghav8/Solium
* [12] http://truffleframework.com/docs/getting_started/contracts
* [13] 本篇也已分享到medium上的Taipei Ethereum Meetup台灣以太坊社群專欄　https://medium.com/taipei-ethereum-meetup/%E5%A6%82%E4%BD%95%E6%92%B0%E5%AF%AB%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84-smart-contract-i-363d06b1965b
