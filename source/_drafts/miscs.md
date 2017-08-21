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

ML如何入門?

1. https://www.coursera.org/learn/machine-learning
2. http://course.fast.ai
3. https://www.deeplearning.ai


如何比较Keras, TensorLayer, TFLearn ？
https://www.zhihu.com/question/50030898

TensorFlow如何入門?
https://www.zhihu.com/question/49909565

http://bangqu.com/181i1U.html


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

# Getting Start your first smart contract

How to install Truffle & TestRPC on Windows for Blockchain development
https://davidburela.wordpress.com/2016/11/18/how-to-install-truffle-testrpc-on-windows-for-blockchain-development/

<!-- $ npm install -g embark ethereumjs-testrpc
$ embark sample
$ cd sample
$ embark simulator -->

/Applications/Mist.app/Contents/MacOS/Mist --rpc localhost:8545

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


5
in another console

$ embark run

best practices
https://github.com/ConsenSys/smart-contract-best-practices

slide
http://slides.com/ming-derwang/solidity-tutorial-6-37-38-54#/11

## DAPP與Web的交集

* Merkle Patricia tree/trie https://github.com/ethereum/wiki/wiki/Patricia-Tree
* RLP https://github.com/ethereum/wiki/wiki/RLP


https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f

* Merkle Patricia tree/trie (MPT) 存储所有账户状态，以及每个区块中的交易和收据数据
* Recursive Length Prefix(RLP): 序列化格式
* REMIX IDE https://remix.ethereum.org/


https://codetract.io/