---
title: 網頁框架的基本運作方式 (科普)
tags:
  - web
  - mobile
  - webframework
---

{% mermaid %}
graph LR
  subgraph WSGI
    request
    response
  end
  subgraph Webframework
    route --> controller
    controller --> template
    template --> controller
    controller --> model
    model --> controller
  end

  request --> route
  controller --> response
{% endmermaid %}

「網頁框架」
