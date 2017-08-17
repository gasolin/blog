---
title: miscs
tags:
  - web
  - mobile
---



Traditional computer architecture

{% mermaid %}
graph TD
Input --> CPU
CPU --> Output
CPU <--> Memory
CPU <--> Storage[Second Storage]
{% endmermaid %}

IoT computing architecture [^1]

{% mermaid %}
graph TD
Input[IoT Sensor] -> Computing[Cloud computing]
Computing --> Output[IoT Trigger]
Computing <--> Storage[Cloud Storage]
{% endmermaid %}

{% mermaid %}
graph LR
  User[Human input]
  subgraph Instant Messenger
    messenger
  end
  subgraph bot
    adaptor
    dispatcher
  end
  subgraph Pre-Processor
    Splitor[斷詞]
    LP[自然語言分析]
    Splitor --> LP
  end
  subgraph Rule Engine
    router[listeners]
    processor
  end
  User --> messenger
  messenger --> adaptor
  adaptor --> Splitor
  Splitor : message
  LP --> router
  router --> processor
  processor --> dispatcher
{% endmermaid %}


[^1] http://www.slideshare.net/williamwyliang/the-development-trends-of-smart-applications-and-open-source-system-software-during-the-past-few-years-for-ntu-csie-2017-01

## Solicity

https://monax.io/docs/tutorials/solidity/

https://learnxinyminutes.com/docs/solidity/

以現實生活為例，我們日常生活所需，還必須透過「交易」來滿足。從簡單到買一份早餐，我們都循著「訊息 - 信任 - 價值」的路徑來達成和早餐店老闆的交易。

首先，早上要先想好打算吃什麼早餐，哪家早餐有提供想吃的早餐種類（訊息），選好早餐店與點餐後（信任），完成付帳並拿到餐點（價值）。

那麼，如果我們打算把這個過程搬上網，把實體物品換成虛擬物品呢？

## 區塊鏈

一籃子技術的組合
P2P、加密、智能合約


## 區塊鏈有哪些類型?

區塊鏈根據受眾，大致分為公有鏈，私有鏈、聯盟鏈幾種。公有鏈就是大眾比較常聽到的各種加密代幣。可以在 https://coinmarketcap.com/


做生意 訊息 - 信任 - 價值

信任 -> 資產清算和帳本的確認

多個交易主體且互不信任

使用工程的手段，結合數學加密與金融激勵。


# write web extension


# port web extension

https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension

https://github.com/mozilla/webextension-polyfill

https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext

web-ext run --firefox=/Applications/FirefoxNightly.app/Contents/MacOS/firefox


## Knowledge Graph
LevelGraph

## Machine Learning

如何比较Keras, TensorLayer, TFLearn ？
https://www.zhihu.com/question/50030898

TensorFlow 如何入门？
https://www.zhihu.com/question/49909565

"你吃了這些藥有1%的機率會中獎喔"
要不要搏幾把？如果你了解ICO，也很看好ICO這種投資方式，可以酌量根據自己的財力來參與，但別在還搞不清的狀況下賭身家。
在這上面賭身家，就像醫師在你決定開始吃這些藥後才改跟你說"你病後的五年存活率有1%喔"，想必心都涼了吧。


可更新合約的架構思路
https://ethereum.stackexchange.com/questions/2404/upgradeable-smart-contracts

upgradable
https://gist.github.com/Arachnid/4ca9da48d51e23e5cfe0f0e14dd6318f

https://github.com/ConsenSys/smart-contract-best-practices

合約本身部署了就不能更改，但可以透過　entryway contract / ENS　更新對應的合約位址。

部署註冊合約 --> 取得註冊合約位址
--> 將註冊合約位址寫入後端合約
--> 部署後端合約 --> 取得後端合約位址
--> 將後端合約位址寫入註冊合約

當前端合約需要呼叫後端合約時，改透過註冊合約取得後端合約的位址。


或將邏輯寫在library中並透過DELEGATECALL/CALLCODE呼叫，這樣資料都還是存在合約中。缺點是ABI(程式公開介面)不能改

ETH ERC-20

[How to create a Token Factory with Ethereum — Part 1](https://hackernoon.com/how-to-create-a-token-factory-with-ethereum-part-1-85e84d1f38fc)

$ npm install -g embark ethereumjs-testrpc
$ embark sample
$ cd sample
$ embark simulator

C:\Users\gasol\Documents\TokenFactory>embark simulator
EthereumJS TestRPC v4.0.1 (ganache-core: 1.0.1)

Available Accounts
==================
(0) 0x6af5362aaf6c2ab09080823b35cab6fec12114ff
(1) 0x003eb258f2173150cfe2c070db01ed341df7e983
(2) 0xe845c81a06e8b3eabdfed9e948e039896225713c
(3) 0x5ff63992c35c65c2792428d2d3281d1892f5f92b
(4) 0x68325c28043e2ce23ab2d4bede3d50c3f5d2d691
(5) 0x4e995b2e4a230b47ae1191e09592f8a1b451dd49
(6) 0x09aeaf344b2a6191735341053cd72ce062243568
(7) 0xc5bbaf241c8df6f5e796529d13eb9a1e2a682836
(8) 0x75045ccdfe0f303b723ffffed5324051b7cffe97
(9) 0x77579332dc3c96f596e3d369c51c94c96fb2143b

Private Keys
==================
(0) 502084ea5f19ed0039b32f9027777ae01dbb1abe0e16fef3da9a3d4166cf2526
(1) 1ea55f278da5932cc552333aa09ade35485a7cd81f727c558de0e2ab54f7fd7c
(2) 58d516d17c86a5a5ef34a2ef1a1442e4ddbeb8c3e806df98d2a5b32bb9f7e2db
(3) 54262ffa4926258e4187b77013ea2a4b94737974124d47d05b644ffa57b85b49
(4) ebec5efd7c2b80a8f593069277ab7f5306a5250d61a27d04192176a35ad59c5a
(5) 4d8b05d035473124cd5eebee2cb75062e78691218bae7dc02f1f6ec4a572f50a
(6) 7c98c217d59f58bd01566ea1af6e92b56eb684098a6e10e88267eb6a916412a1
(7) 51e9e15619383362210d0f46c597fa5758dbc8a5f31fa27d81fc37233921087d
(8) 9cde1df82f97e53a88490f999a668b203414178ad9975d0560d8218283a9eb71
(9) e7f10368c849b85dc3b1910f442734244c979fe98617f307af3744c765a3b0b2

HD Wallet
==================
Mnemonic:      immense can theme physical media stove marine pizza general fee crisp winter
Base HD Path:  m/44'/60'/0'/0/{account_index}

5
in another console

$ embark run

