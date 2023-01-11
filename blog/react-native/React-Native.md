---
title: React Native
tags:
  - mobile
date: 2015-02-04 15:55:33
---

![](http://2.bp.blogspot.com/-h1K2VsEYe2I/VNI3xOR0JsI/AAAAAAAADzY/El2GI8a20v4/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-04%2B%E4%B8%8B%E5%8D%8811.15.44.png)

在看 Facebook 發表的 [React Native](http://youtu.be/KVZ-P-ZI6W4?t=17m56s) 介紹的時候，講者提到為什麼現在 Web 沒辦法提供如他們做的 Paper App 一樣順暢的體驗，主要是三點：

1. Parallelize work 平行處理
    在 Web 上雖然有 web worker，但能做的事很有限。
2. Gesture Handling
    在 Web 上沒有一個好的如何使用手勢操作的指引
3. Access to Native Capabilities
    在 Web 上沒有辦法使用所有在原生平台上可取用的 API。

於是 Facebook 發表了使用 React UI 來開發 iOS/Android App ，他們現在已用在了 Facebook Group App 上。React Native 不像 Cordova/Phonegap 用 WebView 來跑 HTML/JS/CSS，而是直接接上 Native UI widget。

![](http://4.bp.blogspot.com/-d7HcU_mQEmU/VNI8IeF5XZI/AAAAAAAADzk/nO1cKbvaRH0/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%2B2015-02-04%2B%E4%B8%8B%E5%8D%8811.34.26.png)

雖然使用JS當controller，但用async的方式和Native UI做互動。並且互動時是將UI各改動一次性完成（原本 React 的 Virtual DOM 特性），從而避免 JS 程式運行阻塞住 UI 而影響效能。

當然兩個平台的 Native UI 元件名稱或參數多有不同，所以不能像 Cordova/PhoneGap 那樣「寫一次，跨多個平台」 ，而是「學一次，跨多個平台」（Learn Once，Write anywhere）。

原始演講內容可以查看

<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/KVZ-P-ZI6W4#t=17m56s" width="560"/>

OS: 開發者大會都要留一些爆點啊
