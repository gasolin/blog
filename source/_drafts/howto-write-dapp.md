---
title: 如何撰寫DAPP?
tags:
  - web
  - mobile
  - ethereum
---

{% mermaid %}
graph TD
DAPP --- DAPP瀏覽器
DAPP瀏覽器 --- 智能合約
智能合約 --- 區塊鏈

網頁前端 --- 瀏覽器
瀏覽器 --- 網頁後端
網頁後端 --- 網際網路
{% endmermaid %}

{% mermaid %}
graph TD
DAPP ---> Javascript
智能合約 ---> Solidity
{% endmermaid %}

## Mist + testrpc

## Mist + geth

get Mist-linux64-0-9-3.deb from github(not Ethereum-Wallet) and install it
https://github.com/ethereum/mist/releases/

$ geth --datadir=./chaindata init ./genesis.json
$ geth --datadir=./chaindata

$ ethereumwallet --args --rpc /home/gasolin/Documents/idv/geth/chaindata/geth.ipc

creaete account

$ geth attach <path to ipc>.ipc

> miner.start(1)
// wait until DAG generated
> miner.stop()

https://github.com/ethereum/mist/wiki#bind-address-already-in-use

truffle-builder
https://github.com/trufflesuite/truffle-default-builder
http://truffleframework.com/docs/advanced/build_processes

var DefaultBuilder = require("truffle-default-builder");
module.exports = {
  build: new DefaultBuilder(...) // specify the default builder configuration here.
}

http://truffleframework.com/tutorials/building-testing-frontend-app-truffle-3

* [How to start developing on Ethereum for web developers](http://jefflau.net/how-to-start-developing-on-ethereum-for-web-developers/)

* http://truffleframework.com/tutorials/how-to-install-truffle-and-testrpc-on-windows-for-blockchain-development