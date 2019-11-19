---
title: Progressive Web App 是什麼
tags:
  - web
  - mobile
---

## Mobile App

現代的行動裝置網頁中往往可以看到如以下的宣告

```
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
```

viewport標籤的作用是協助瀏覽器來調整適合使用者的閱讀解析度。對於特別設計給行動裝置看的網頁，可以設定「maximum-scale=1.0; user-scalable=0;」來強制規定這個網頁不能被縮放。


http://36kr.com/p/5052799.html

Native App

Web App

{% mermaid graph LR %}
   WebUI(Web)
   MobileUI(Mobile)
   DesktopUI(Desktop)
   IMUI(Instant Messenger)
   service(Web Services)
   device(Conect Devices)
   APIs((Web API))
   nAPIs((Nearby API))
   WebUI --- APIs
   MobileUI --- APIs
   DesktopUI --- APIs
   IMUI --- APIs
   APIs --- service
   APIs --- device
{% endmermaid %}

https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.x0i3qjtvr

[^2]: Viewport的設定 https://hsinyu00.wordpress.com/2011/04/05/mobile-web-viewport/
