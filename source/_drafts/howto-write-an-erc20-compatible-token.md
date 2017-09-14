---
title: 如何撰寫智能合約(Smart Contract)?(III)建立標準代幣
tags:
  - ethereum
---

[上一篇]中我們已寫好並部署完成了簡單的加密代幣🔒💵合約。在閱讀完本文後，你將學會建立一個可以放到乙太幣錢包:purse:的加密代幣🔒💵。

## 開發前的準備

延續上一篇的內容，在開發的過程中，我們將繼續使用`testrpc`[^1]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

首先確保已啟動testrpc，若尚未啟動，可以使用以下命令啟動

```
$ testrpc
...
```

除了運行testrpc之外，本篇建立的代幣若要能透過乙太幣錢包:purse:收送，必須相容ERC20標準[^2]。ERC20標準定義了所有支援錢包必須的合約介面。
本篇將使用OpenZeppelin[^2]函式庫來簡化建立加密代幣🔒💵的過程。

```
$ npm install zeppelin-solidity
```

`OpenZeppelin`是一套協助撰寫安全的加密合約的函式庫，裡面也提供了相容ERC20標準的智能合約。可以透過npm工具安裝到專案目錄`node_modules/zeppelin-solodity/`中。

我們可以開始建立加密代幣智能合約專案了。

## 建立一個標準代幣合約

在`contracts/`目錄下建立一個`HelloToken.sol`檔案。也可以使用以下命令來產生檔案：

```sh
$ truffle create contract HelloToken
```

`HelloToken.sol`檔案內容如下：

```
pragma solidity ^0.4.11;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract HelloToken is StandardToken {
  string public name = "HelloCoin";
  string public symbol = "HC";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 88888;

  function HelloToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
```

### 講解

```
pragma solidity ^0.4.11;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

```
import "zeppelin-solidity/contracts/token/StandardToken.sol";
```

接著我們使用`import`語句，來讀入`zeppelin-solidity`提供的`StandardToken`合約。

```
contract HelloToken is StandardToken {
}
```

建立`HelloToken`合約時，使用`is`語句繼承了[StandardToken](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/StandardToken.sol)合約。因此`HelloToken`合約繼承了`StandardToken`合約所包含的資料與呼叫方法。

```
string public name = "HelloCoin";
string public symbol = "H@";
uint8 public decimals = 2;
uint256 public INITIAL_SUPPLY = 88888;
```

只要把全域變數設為`public`(公開)，編譯時就會自動新增一個讀取公開變數的ABI接口。

這邊設定參數的目的是指定這個代幣的一些特性。以美金來說，美金的名字叫`dollar`，代號為`$`，最小交易單位為2。2代表一塊錢最小可分割到小數點後2位交易，即最小交易單位為0.01元，也就是一美分cent)，供給量是某個極大的數字；這邊我為這個加密代幣取的名字(name)是`HelloCoin`(哈囉幣)，代幣的代號(symbol)為`H@`，最小分割單位亦為2(0.01)。

以下為美金，比特幣，以太幣，HelloCoin的對照表供參考：

Name | Symbol | decimals
------------ | ------------- | -------------
Dollar | $ | 2
Bitcoin | BTC | 8
Ethereum | ETH | 18
HelloCoin | H@ | 2

最後還定義了初始代幣數目`INITIAL_SUPPLY`。這邊隨意選擇了一個吉祥數字`88888`。

```
function HelloToken() {
  totalSupply = INITIAL_SUPPLY;
  balances[msg.sender] = INITIAL_SUPPLY;
}
```

和合約同名的`HelloToken`方法，就是`HelloToken`合約的建構函式(constructor)。
在建構式裡指定了`totalSupply`數目，並將所有的初始代幣`INITIAL_SUPPLY`都指定給`msg.sender`帳號，也就是用來部署這個合約的帳號。‵`totalSupply`定義於[ERC20Basic.sol](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20Basic.sol#L10)中，`balances`定義於[BasicToken.sol](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/BasicToken.sol#L15)中。

如此一來我們已寫好一個可透過以太幣錢包交易的新加密代幣🔒💵合約。這個合約一經部署，就可以一直存在於以太坊區塊鏈上，世界上也就多了一種新的加密代幣。只要你能找到人想擁有這種代幣，這種代幣就有交易的價值。

### 編譯與部署

在`migrations/`目錄下建立一個`3_deploy_token.js`檔案，內容如下：

```js
var HelloToken = artifacts.require("HelloToken");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};
```

現在執行compile與migrate命令

```sh
$ truffle compile
...
$ truffle migrate --reset
Using network 'development'.

Running migration: 3_deploy_token.js
  Deploying HelloToken...
  ... 0x2c4659528c68b4e43d1edff6c989fba05e8e7e56cc4085d408426d339b4e9ba4
  HelloToken: 0x352fa9aa18106f269d944935503afe57a00a9a0d
Saving successful migration to network...
  ... 0x1434c1b61e9719f410fc6090ce37c0ec141a1738aba278dd320738e4a5d229fa
Saving artifacts...
```

如此一來我們已將HelloCoin代幣合約部署到testrpc上。

## 驗證

```sh
$ truffle console
> let contract
> HelloToken.deployed().then(instance => contract = instance)
> contract.address
'0x352fa9aa18106f269d944935503afe57a00a9a0d'
> contract.balanceOf(web3.eth.coinbase)
{ [String: '88888'] s: 1, e: 4, c: [ 88888 ] }
> contract.balanceOf(web3.eth.accounts[1])
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }
> contract.transfer(web3.eth.accounts[1], 123)
...
> contract.balanceOf(web3.eth.accounts[0])
{ [String: '88765'] s: 1, e: 4, c: [ 88765 ] }
> contract.balanceOf(web3.eth.accounts[1])
{ [String: '123'] s: 1, e: 2, c: [ 123 ] }
>
```

### 講解

```sh
> let contract
> SimpleToken.deployed().then(instance => contract = instance)
```

這邊使用`HelloToken.deployed().then`語句來取得HelloToken合約的Instance(實例)，並存到`contract`變數中，以方便後續的呼叫。

```sh
> contract.balanceOf(web3.eth.coinbase)
{ [String: '88888'] s: 1, e: 4, c: [ 88888 ] }
> contract.balanceOf(web3.eth.accounts[1])
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }
```

`web3.eth.coinbase` 代表操作者預設的帳號，即testrpc所提供的10個帳號中的第一個帳號，也可以透過`web3.eth.accounts[0]`取得。
這兩句的目的是在進行轉帳操作前，先查詢前兩個帳號所擁有的代幣餘額。透過呼叫`balanceOf`函式，可以看到第一個帳號(部署合約的帳號)裡存著所有的代幣。

```
> contract.transfer(web3.eth.accounts[1], 123)
...
```

接著使用`transfer`函式來傳送`123`個代幣到第二個帳號`web3.eth.accounts[1]`。如果轉帳成功，傳送者預設帳號中會減少123個代幣，接收者帳號中會增加123個代幣。

```
> contract.balanceOf(web3.eth.coinbase)
{ [String: '88765'] s: 1, e: 4, c: [ 88765 ] }
> contract.balanceOf.call(web3.eth.accounts[1])
{ [String: '123'] s: 1, e: 2, c: [ 123 ] }
>
```

我們再次透過呼叫`balanceOf`函式，查詢傳送者帳號和接收者帳號各自剩下的SimpleToken數目。發現轉帳真的成功了。

## 放到以太幣錢包


## 結語

我們用到OpenZeppelin提供的函式庫來簡化代幣的工作。實際使用前還是建議將用到的程式碼都再審查幾遍。如何審查可以從 OpenZeppelin 自己提供的Audit開始看[^4]，可以學到一些觀念。

## 參考資料

* [1] https://github.com/ethereumjs/testrpc
* [2] ERC20 https://theethereum.wiki/w/index.php/ERC20_Token_Standard
* [3] OpenZeppelin https://github.com/OpenZeppelin/zeppelin-solidity
* [4] OpenZeppelin Audit https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/audit/ZeppelinAudit.md
* An Ethereum Hello World Smart Contract for Beginners part 1 http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/
* http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/
* What is an Initial Coin Offering? https://www.youtube.com/watch?v=iyuZ_bCQeIE
* https://blog.zeppelin.solutions/how-to-create-token-and-initial-coin-offering-contracts-using-truffle-openzeppelin-1b7a5dae99b6
* https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/math/SafeMath.sol
