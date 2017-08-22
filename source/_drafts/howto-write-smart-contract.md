---
title: 如何撰寫智能合約(Smart Contract)?
tags:
  - web
  - mobile
  - ethereum
---

## Mist + testrpc

Mist Browser

Mist-installer-x.x.x
https://github.com/ethereum/mist/releases

or Parity
https://parity.io/parity.html

https://geth.ethereum.org/downloads/

$ npm install -g ethereumjs-testrpc truffle
$ testrpc

$ mkdir demo
$ cd demo
$ truffle init

$ truffle compile
$ truffle migrate

$ truffle create contract Hello

// run migrate again
$ truffle migrate --reset

* The Hitchhiker’s Guide to Smart Contracts in Ethereum https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05
* Truffle on Windows http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows
* https://amisamity.github.io/contract-training/
* http://truffleframework.com/docs/getting_started/