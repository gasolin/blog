---
title: 如何撰寫智能合約(Smart Contract)?
tags:
  - web
  - mobile
  - ethereum
---

## Testrpc + Truffle

$ npm install -g ethereumjs-testrpc truffle zeppelin-solidity
$ testrpc

$ mkdir demo
$ cd demo
$ truffle init

$ truffle create contract Hello

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

/migrations/2_deploy_contracts.js

```
var HelloToken = artifacts.require("./HelloToken.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};
```


$ truffle compile
$ truffle migrate

// run migrate again
$ truffle migrate --reset

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
