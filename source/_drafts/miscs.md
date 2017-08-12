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

## 代幣眾籌靠不靠譜?

