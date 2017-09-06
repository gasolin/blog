---
title: 如何撰寫智能合約(Smart Contract)?(I)
tags:
  - web
  - mobile
  - ethereum
---

[上一篇](https://blog.gasolin.idv.tw/2017/09/02/what-is-smart-contract/)中介紹了智能合約是什麼，也概略描述了從編譯到部署智能合約的流程，接下來將使用solidity語言來寫智能合約。在閱讀完本文後，你將學會建立一個相容於ERC20標準的加密代幣。

## 使用solidity語言撰寫智能合約

Ethereum上的智能合約需要使用solidity[^1]語言來撰寫。雖然還有其他能用來撰寫智能合約的語言如Serpent(類Python)、lll(類Fortran)，
但目前看到所有公開的智能合約都是使用solidity撰寫。

宣傳上說，solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈，都是使用屬於Javascript生態系的npm來提供的。但我覺得solidity還是比較像Java或C#。
因為和Javascript不同，solidity與Java或C#同屬於強型別(Strong Type，在定義變數時需要指定型別)語言、在定義函式(function)時同樣需指定回傳的型別(type)、同樣也需要先編譯才能執行。這些特性都是Javascript所不具備的。

## 開始前的準備

本文將使用當前最活躍的智能合約開發框架truffle[^3]為基礎來開發。之前提到過的ENS(Ethereum Name Service)[^5]也是採用truffle框架。其他選擇還有embark[^4]。

就像一般網站或App開發一樣，在提供公開服務之前，開發者會使用單台電腦(通常就是開發者用於寫程式的電腦，又稱作本機)或測試網路來測試效果，測試完成後才部署到公開的網路上提供服務。
開發區塊鏈智能合約(程式)的過程也是如此。特別是公開鏈上所有的操作都需要真金白銀(虛擬代幣)，而且根據網路狀況，每個鏈上操作都需要要一小段反應時間(15秒 ~ 數分鐘)，一來一往頗浪費寶貴的開發時間。
因此在開發的過程中，我們將使用testrpc[^6]工具在電腦上模擬智能合約所需的區塊鏈。

testrpc中也包含了和使用Javascript撰寫的Ethereum虛擬機(Ethereum Virtual Machine)[^7]，因此可以完整地執行智能合約。

## Testrpc + Truffle

$ npm install -g ethereumjs-testrpc truffle zeppelin-solidity

testrpc 是用 jsvm 做的。

$ testrpc

```
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

$ mkdir demo
$ cd demo
$ truffle init

$ truffle create contract HelloWorld

```
pragma solidity ^0.4.4;

contract HelloWorld {
  function HelloWorld() {
    // constructor
  }
}
```

```
pragma solidity ^0.4.4;

contract HelloWorld {
  function sayHello() returns (string) {
    return ("Hello World");
  }
}
```
(sample from pluralsight)


/migrations/2_deploy_contracts.js

```
var HelloWorld = artifacts.require("./HelloWorld.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
```

$ truffle compile
$ truffle migrate

// run migrate again
$ truffle migrate --reset

```
$ truffle console
> let hw
> HelloWorld.deployed().then(deployed => hw = deployed)
> hw.sayHello.call()
'Hello World'
```


```
pragma solidity ^0.4.4;
import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract HelloToken is StandardToken {
  string public name = 'TutorialToken';
  string public symbol = 'TT';
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 12000;

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
* Truffle on Windows http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows
* https://amisamity.github.io/contract-training/
* http://truffleframework.com/docs/getting_started/

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

https://app.pluralsight.com/library/courses/blockchain-fundamentals/

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