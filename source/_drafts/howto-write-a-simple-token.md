---
title: 如何撰寫智能合約(Smart Contract)?(II)建立加密代幣
tags:
  - ethereum
---

[上一篇]中我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。在閱讀完本文後，你將學會建立一個簡易的加密代幣🔒💵。

## 開發前的準備

延續上一篇的內容，在開發的過程中，我們將繼續使用`testrpc`[^1]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

首先確保已啟動testrpc，若尚未啟動，可以使用以下命令啟動

```
$ testrpc
...
```

這樣我們就可以開始建立加密代幣智能合約專案了。

## 建立一個代幣合約

在`contracts/`目錄下建立一個`SimpleToken.sol`檔案。也可以使用以下命令來產生檔案：

```sh
$ truffle create contract SimpleToken
```

`SimpleToken.sol`檔案內容如下：

```
pragma solidity ^0.4.11;

contract SimpleToken {
  unit256 public INITIAL_SUPPLY = 88888;
  mapping(address => unit256) balances;

  function SimpleToken() {
    balances[msg.sender] = INITIAL_SUPPLY;
  }

  // transfer token for a specified address
  function transfer(address _to, unit256 _value) returns (bool){
    balances[msg.sender] -= _value;
    balances[to] += _value;
    return true;
  }

  // Gets the balance of the specified address
  function balanceOf(address _owner) constant returns (uint256) {
    return balances[_owner];
  }
}
```

### 講解

```
pragma solidity ^0.4.11;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

```
uint256 public INITIAL_SUPPLY = 88888;
mapping(address => unit256) balances;
```

我們定義了初始代幣數目`INITIAL_SUPPLY`。這邊隨意選擇了一個吉祥數字`88888`。只要把全域變數設為`public`(公開)，編譯時就會自動新增一個讀取公開變數的ABI接口。

我們用`mapping`來定義一個可以儲存鍵值對(key-value pair)的資料結構(類似Javascript中的`{"0xaabbccddeeff": 888}`)，同時也需要分別指定`address`作為鍵的型別，指定`uint256`作為值的型別。定義好後不能像Javascript那樣可隨時更改儲存的型別。

```
contract SimpleToken {
  function SimpleToken() {
  }
}
```

和合約同名的`SimpleToken`函式，就是`SimpleToken`這個合約的建構函式(constructor)。

```
function SimpleToken() {
  balances[msg.sender] = INITIAL_SUPPLY;
}
```

在建構式將所有的初始代幣`INITIAL_SUPPLY`都指定給`msg.sender`帳號，也就是用來部署這個合約的帳號。

如此一來我們已寫好一個可透過以太幣錢包交易的新加密代幣🔒💵合約。

### 編譯與部署

在`migrations/`目錄下建立一個`3_deploy_token.js`檔案，內容如下：

```js
var HelloToken = artifacts.require("SimpleToken");

module.exports = function(deployer) {
  deployer.deploy(SimpleToken);
};
```

現在執行compile與migrate命令

```sh
$ truffle compile
...
$ truffle migrate
Using network 'development'.

Running migration: 3_deploy_token.js
  Deploying HelloToken...
  ... 0x2c4659528c68b4e43d1edff6c989fba05e8e7e56cc4085d408426d339b4e9ba4
  SimpleToken: 0x352fa9aa18106f269d944935503afe57a00a9a0d
Saving successful migration to network...
  ... 0x1434c1b61e9719f410fc6090ce37c0ec141a1738aba278dd320738e4a5d229fa
Saving artifacts...
```

如此一來我們已將SimpleToken代幣合約部署到testrpc上。

## 驗證

```sh
$ truffle console
> let account1 = web3.eth.accounts[0]
> account1
'0xa4d7ce9137e6f8de4fb1311595b33230be15be50'
> let account2 = web3.eth.accounts[1]
> account2
'0x26c231bdd7c8a7304983b04694c3437b30331019'
> let contract
> SimpleToken.deployed().then(instance => contract = instance)
> contract.address
'0x352fa9aa18106f269d944935503afe57a00a9a0d'
> contract.balanceOf(account1)
{ [String: '88888'] s: 1, e: 4, c: [ 88888 ] }
> contract.balanceOf(account1).then(val => val.toString())
'88888'
> contract.balanceOf(account2)
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }
> contract.transfer(account2, 123)
...
> contract.balanceOf(address1)
{ [String: '88765'] s: 1, e: 4, c: [ 88765 ] }
> contract.balanceOf.call(address2)
{ [String: '123'] s: 1, e: 2, c: [ 123 ] }
>
```

web3.eth.accounts[0]
web3.eth.coinbase
"web3.eth.coinbase" is the default account for your console session

web3.fromWei(web3.eth.getBalance(web3.eth.coinbase));

## 一堆安全漏洞

一堆安全漏洞的合約，輕則執行失敗白花交易費，重則錢被轉光光。

* require(_to != address(0));
* add
* sub

https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/math/SafeMath.sol

## 參考資料

* [1] https://github.com/ethereumjs/testrpc
* An Ethereum Hello World Smart Contract for Beginners part 1 http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/
* http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/

* https://blog.zeppelin.solutions/onward-with-ethereum-smart-contract-security-97a827e47702