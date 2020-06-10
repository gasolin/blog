---
title: 大前端（網頁技術）的科技樹
tags:
  - web
date: 2020-06-09 22:50:46
---

要看清一個領域怎麼發展演化，可以嘗試使用科技樹(或心智圖)來思考。
（順道測試一下在 Hexo 裡插入心智圖的效果 [hexo-simple-mindmap](https://github.com/HunterXuan/hexo-simple-mindmap) )

2009 年前的科技樹，圍繞著瀏覽器發展

{% pullquote mindmap mindmap-sm %}
- Browser
  - HTML
  - Javascript
    - library (jquery)
  - CSS
- Server
  - Frameworks (RoR, Django...)
{% endpullquote %}

2009年後，Node.js 打開了大地圖，瀏覽器不再是唯一戰場

{% pullquote mindmap mindmap-md %}
- Browser (Frontend)
  - HTML
    - HTML5
  - Javascript
    - v8 engine
      - Node.js
        - Command Line
          - Pacakge manager (npm)
          - Build tool (grunt, gulp, webpack...)
        - Backend (Express...)
  - CSS
- Server (Backend)
  - Frameworks
- Mobile
  - Cordova
{% endpullquote %}

2017 年後，ES6開始的定期語言標準更新，讓Javascript語言再次煥發活力；網頁技術亦可用在多種使用者設備

{% pullquote mindmap mindmap-md %}
- Browser (Frontend)
  - HTML
    - HTML5
  - Javascript
    - v8 engine
      - Node.js
        - Command Line
          - Pacakge manager (npm, yarn)
          - Build tool (webpack...)
          - Linter (eslint)
        - Backend (Express...)
    - ES6
      - Transpiler (Babel)
      - TypeScript
  - CSS
  - Web Assembly
- Server (Backend)
  - Frameworks
  - Serverless
  - Bot framework
- Desktop
  - Electron
- Mobile
  - React Native
{% endpullquote %}
