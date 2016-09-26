---
title: Progressive Web App
tags:
  - web
  - mobile
---

http://36kr.com/p/5052799.html

Native App

Web App

{% mermaid %}
graph LR
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
