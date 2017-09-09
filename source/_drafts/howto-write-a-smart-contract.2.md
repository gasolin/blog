---
title: 如何撰寫智能合約(Smart Contract)?(II)
tags:
  - ethereum
---

[上一篇]中我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。在閱讀完本文後，你將學會建立一個可以放到乙太幣錢包的加密代幣。

## 開發前的準備

啟動testrpc

```
$ testrpc
```

使用 OpenZeppelin 

```
$ npm install zeppelin-solidity
```


## 建立一個代幣合約

在`contracts/`目錄下建立一個`HelloToken.sol`檔案。也可以使用以下命令來產生檔案：

```sh
$ truffle create contract HelloToken
```



```
pragma solidity ^0.4.4;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract HelloToken is StandardToken {
  string public name = "HelloToken";
  string public symbol = "HT";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 88888;

  unction HelloToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
```

把全域變數設為public時，就會新增一個讀取public變數的ABI接口。


在`migrations/`目錄下建立一個`3_deploy_token.js`檔案，

```
var HelloToken = artifacts.require("HelloToken");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};
```

```sh
$ truffle compile
...
$ truffle migrate
Using network 'development'.

Running migration: 3_deploy_token.js
  Deploying HelloToken...
  ... 0x2c4659528c68b4e43d1edff6c989fba05e8e7e56cc4085d408426d339b4e9ba4
  HelloToken: 0x352fa9aa18106f269d944935503afe57a00a9a0d
Saving successful migration to network...
  ... 0x1434c1b61e9719f410fc6090ce37c0ec141a1738aba278dd320738e4a5d229fa
Saving artifacts...
```

```sh
$ truffle console
> let account1 = web3.eth.accounts[0]
> let account2 = web3.eth.accounts[1]
> account1
'0xa4d7ce9137e6f8de4fb1311595b33230be15be50'
> account2
'0x26c231bdd7c8a7304983b04694c3437b30331019'
> let contract
> HelloToken.deployed().then(instance => contract = instance)
> contract.address
'0x352fa9aa18106f269d944935503afe57a00a9a0d'
> contract.balanceOf.call(account1)
{ [String: '88888'] s: 1, e: 4, c: [ 88888 ] }
> contract.balanceOf.call(account1).then(val => val.toString())
'88888'
> contract.balanceOf.call(account2)
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }
> contract.transfer.transaction(account2, 123)
true
```



## 參考資料

* [1] Solidity http://solidity.readthedocs.io/en/latest/index.html
* [2] Truffle Framework http://truffleframework.com/
* [3] https://github.com/ethereumjs/testrpc
* [4] OpenZeppelin https://github.com/OpenZeppelin/zeppelin-solidity
* An Ethereum Hello World Smart Contract for Beginners part 1 http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/
* http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/
* What is an Initial Coin Offering? https://www.youtube.com/watch?v=iyuZ_bCQeIE

* https://blog.zeppelin.solutions/how-to-create-token-and-initial-coin-offering-contracts-using-truffle-openzeppelin-1b7a5dae99b6