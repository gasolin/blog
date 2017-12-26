---
title: 聊天機器人是怎麼運作的I
tags:
  - web
  - bot
  - mobile
---


我們看過了聊天機器人與使用者互動的方式，那聊天機器人內部是怎麼運作的呢？

## 對話

實際上，「對話」是件很複雜的事情。兩個人要能對談，首先兩個人的語言要相通。再則，兩個人對要談的事情需要有相近的背景知識，否則就需要理解的一方先解釋事情的梗概，讓另一方有概念後才談得起來。

## 我們需要哪種類型的聊天機器人？

從上面的分類來看，對話型機器人無疑是最強力的。但就實用的角度來看，模式型機器人



IM Service --> Inbound message
Outbound Message --> IM Service
Inbound message -> Bot Engine
Bot Engine --> Bot Model

文字處理 Word Processing

斷詞, POS tagging, sentence analysis and question tagging
進行自然語言的理解。這裡 NLP 一般是進行一些規範化的操作，比如識別一些專有名詞和地名，把主謂賓等一些簡單的語言結構分析出來，糾正一些常見的語法和拼寫錯誤，把一些時態相關的詞根分解出來等。

Dialog State Tracking: topic 聊天狀態的跟蹤

意圖感知 Intent Parser

知識圖譜
WordNet
http://wordnet.princeton.edu/
中文 http://lope.linguistics.ntu.edu.tw/cwn2/

World Knowledge, bot knowledge, user knowledge


問答對 -> ML -> 問答語料

對話引擎

plugin to call API/NLP

NLG 自然語言生成


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


https://www.zixundingzhi.com/yidonghulianwang/a36bf975daebc732.html