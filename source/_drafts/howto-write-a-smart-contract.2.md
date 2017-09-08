---
title: 如何撰寫智能合約(Smart Contract)?(II)
tags:
  - ethereum
---

[上一篇]中我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。在閱讀完本文後，你將學會建立一個可以放到乙太幣錢包的加密代幣。

## 開發前的準備

```
$ npm install zeppelin-solidity
```

在瀏覽器上安裝MetaMask插件，讓你可以用瀏覽器存取。有[Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)與[Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)版本。


啟動testrpc

```
$ testrpc
```

## 建立一個代幣合約

```
pragma solidity ^0.4.4;
import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract HelloToken is StandardToken {
  string public name = 'HelloToken';
  string public symbol = 'HT';
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 88888;

  unction HelloToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
```

把全域變數設為public時，就會新增一個讀取public變數的ABI接口。


```
var HelloToken = artifacts.require("./HelloToken.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};
```

繼續看 http://truffleframework.com/tutorials/pet-shop 範例

// It is a good guideline to structure functions that interact
// with other contracts (i.e. they call functions or send Ether)
// into three phases:
// 1. checking conditions
// 2. performing actions (potentially changing conditions)
// 3. interacting with other contracts

// If these phases are mixed up, the other contract could call
// back into the current contract and modify the state or cause
// effects (ether payout) to be performed multiple times.
// If functions called internally include interaction with external
// contracts, they also have to be considered interaction with
// external contracts.

* The Hitchhiker’s Guide to Smart Contracts in Ethereum https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05
* https://amisamity.github.io/contract-training/
* Robust Smart Contracts with OpenZeppelin http://truffleframework.com/tutorials/robust-smart-contracts-with-openzeppelin
* http://zeppelin-solidity.readthedocs.io/en/latest/getting-started.html

Mist Browser

Mist-installer-x.x.x
https://github.com/ethereum/mist/releases

or Parity
https://parity.io/parity.html

https://geth.ethereum.org/downloads/

truffle + webpack
http://truffleframework.com/tutorials/bundling-with-webpack

testnet

// $ truffle migrate --network production
$ geth attach
> personal.unlockAccount(eth.coinbase)


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

etherscan.io https://etherscan.io/
ethstats.net https://ethstats.net/

* An Ethereum Hello World Smart Contract for Beginners part 1 http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/
* http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/

* What is an Initial Coin Offering? https://www.youtube.com/watch?v=iyuZ_bCQeIE