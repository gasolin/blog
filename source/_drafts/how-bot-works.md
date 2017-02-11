---
title: how bot works
tags:
  - web
  - mobile
  - bot
---

Traditional computer architecture
{% mermaid %}
graph TD
Input -> Computing
Computing --> Output
Computing <--> Storage
{% endmermaid %}

Morden age computer architecture
{% mermaid %}
graph TD
Input[IoT Sensor] -> Computing[Cloud computing]
Computing --> Output[IoT Trigger]
Computing <--> Storage[cloud Storage]
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
