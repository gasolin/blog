---
title: react redux
tags:
  - web
---

{% mermaid %}
graph LR
Model --> App
View --> App
{% endmermaid %}

最近在開發Devtools的過程中使用到react與redux相關技術。

React 負責建立介面，並處理介面相關更新與操作(透過VDOM)，Redux 提供 react 所需的 state 與 event handler (action)
