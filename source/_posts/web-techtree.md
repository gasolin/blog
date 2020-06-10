---
title: 大前端（網頁技術）的科技樹
tags:
  - web
date: 2020-06-09 22:50:46
---

要看清一個領域怎麼發展演化，可以嘗試使用科技樹(或心智圖)來思考。
（順道測試一下在 Hexo 裡插入心智圖的效果 [hexo-simple-mindmap](https://github.com/HunterXuan/hexo-simple-mindmap) )

2009 年前的科技樹（第一代）

{% pullquote mindmap mindmap-sm %}
- Browser
  - HTML
  - Javascript
  - CSS
- Server
  - Frameworks (RoR, Django...)
{% endpullquote %}

2009年後

{% pullquote mindmap mindmap-md %}
- Browser (Frontend)
  - HTML
  - Javascript
    - v8 engine
      - Node.js
        - Command Line
        - Backend (Express...)
    - ES6
  - CSS
- Server (Backend)
  - Frameworks
{% endpullquote %}

2019 年後

{% pullquote mindmap mindmap-lg %}
- Browser (Frontend)
  - HTML
  - Javascript
    - v8 engine
      - Node.js
        - Command Line
        - Backend (Express...)
    - ES6
    - WASM
  - CSS
- Server (Backend)
  - Frameworks
  - Serverless
- Desktop
  - Electron
- Mobile
  - React Native
{% endpullquote %}
