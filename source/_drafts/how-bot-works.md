---
title: 聊天機器人是怎麼運作的
tags:
  - web
  - bot
---

{% mermaid %}
graph TD
User --> Adapter[UI Adapter]
Adapter --> Parser[Intent Parser]
Parser - Action -> Processor[Actioner]
Processor --> Responder
Responder --> Adapter
{% endmermaid %}



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
