---
title: 如何撰寫智能合約(Smart Contract)?(I)
tags:
  - web
  - mobile
  - ethereum
---


## 使用solidity語言撰寫智能合約

Ethereum上的智能合約需要使用solidity[^1]語言來撰寫。之前還有其他能用來撰寫智能合約的語言如Serpent(類Python)、lll(類Fortran)，但目前看到所有公開的智能合約都是使用solidity撰寫。宣傳上說solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈都是使用屬於Javascript生態系的npm來提供的。但我覺得它還是比較像Java或C#。因為它與Java或C#同屬於強型別(Strong Type，在定義變數時需要指定型別)語言、在定義函式(function)時同樣需指定回傳的型別(type)、同樣也需要先編譯才能執行。這些特性都是Javascript所不具備的。

## 將智能合約部署到區塊鏈的流程

solidity和Java或C#其中的一個相似之處，是寫好solidity程式碼(.sol)後，需要先編譯(compile)成EVM(Ethereum Virtual Machine)能讀懂的二進位Contract ByteCode，才能部署到Ethereum的區塊鏈上執行。部署到區塊鏈上的合約會有一個和錢包地址（Address）一樣格式的合約地址（Contract Address）。

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

在[收到我的ENS網域啦 gasolin.eth](https://blog.gasolin.idv.tw/2017/08/13/got-my-ens-domain/)這篇文章中我介紹了申請Ethereum Name Service的過程。其實ENS就是一堆智能合約的集合，一起提供了Name Service服務。

要和合約互動，除了需要有合約地址外，還需要知道合約所提供的操作介面(Application Binary Interface，ABI)，即如何呼叫對應功能的方法和如何解釋程式回傳的資料。

下圖即是ENS Public Resolver這個合約的地址和ABI。
![](https://i.imgur.com/y6jvpAUl.png)

準備好合約地址和ABI後，我們才能呼叫對應功能來存取合約。
![Imgur](https://i.imgur.com/5550HgNl.png)


本文最後章節節就直接教你如何建立一個相容於ERC20標準的加密代幣。
https://www.ethereum.org/token

最成熟的開發框架是 truffle，之前提到過的ENS(Ethereum Name Service)也是採用truffle框架。其他還有embark

testrpc
部署用的是真金白銀，而且根據網路狀況，上鏈要一小段時間15秒 ~ 數分鐘

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
