---
title: 一個 WebApp，各自表述
tags:
  - webapp
  - Android
  - FirefoxOS
date: 2014-08-24 07:54:09
---

前陣子寫了一篇「[像原生應用程式一樣的 WebApp？趕快學起來！](http://tech.mozilla.com.tw/posts/4803/%E5%83%8F%E5%8E%9F%E7%94%9F%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E4%B8%80%E6%A8%A3%E7%9A%84-webapp%EF%BC%9F%E8%B6%95%E5%BF%AB%E5%AD%B8%E8%B5%B7%E4%BE%86%EF%BC%81)」，稍微提到現在 WebApp 在桌面和移動端上已經可以像一般應用程式一樣安裝、移除、離線使用。

再進一步觀之，webapp 至今尚未有統一的標準，但Adobe、Google、Mozilla已分別為此推出 Cordova (PhoneGap)、Chrome Apps、WebApp等多種方式來達成此目標。

**Cordova (PhoneGap)**

Cordova 其實是在各個智慧手機平台上實作共用的Native Adapter，透過 Javascript Interface 來存取設備功能。所以得以使用同一套 web API，而能在不同的平台上執行。

因此 Cordova App 在各平台上執行的效果取決於該平台的 WebView 支援程度。所幸近期兩大 OS 的 WebView 都已隨自家瀏覽器更新，在新版 OS 上 Webapp 的效能已漸漸不再是太大的問題。

**Chrome Apps**

Chrome Apps 可以在 Chrome 桌面瀏覽器上執行，並提供修改版的 Cordova，Chrome App 可以使用相同的 API 移植到 Android App 上。

近期 Chrome 也進一步釋出 [Chrome Dev Editor](https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg) 與  App Dev Tool，提供在瀏覽器上即可編輯網頁App 與即時在 Android 手機上預覽的功能。

**Mozilla Webapp**

Mozilla Webapp 可以在「[像原生應用程式一樣的 WebApp？趕快學起來！](http://tech.mozilla.com.tw/posts/4803/%E5%83%8F%E5%8E%9F%E7%94%9F%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E4%B8%80%E6%A8%A3%E7%9A%84-webapp%EF%BC%9F%E8%B6%95%E5%BF%AB%E5%AD%B8%E8%B5%B7%E4%BE%86%EF%BC%81)」這篇中找到比較詳細的解釋。

開發工具的部分，近期 Mozilla 亦將 WebIDE 整合進瀏覽器中。除HTML/JS/CSS編輯器外，也附帶Firefox OS 模擬器與 adb 工具，所以在桌面安裝了 Firefox 後可直接在 Firefox 中開發 Web app。開發的 Web app 除了在瀏覽器或模擬器中測試外，亦可以直接傳送到 Firefox OS裝置或 Android 裝置（需要裝 Firefox for Android）上測試。

以上三者之間各自有些異同之處，但並非不可調和。Cordova 已正式支援輸出 Firefox OS webApp，Chrome App 與 Mozilla Webapp 也已共用大部份的 manifest 格式。Chrome Apps 也透過修改 Cordova，來讓 Chrome Apps 的特有 web API能運行在 Android 手機上。 

若想開始嘗試寫 Webapp，我寫的 [We<span id="goog_609996666"></span><span id="goog_609996667"></span>bapplate](https://github.com/webapplate/webapplate) 除了可以幫你處理掉開新專案、封裝App、整合測試框架、程式碼風格檢查等問題，也已經同時支援 Mozilla WebApp 、 Chrome Apps，可以參考看看。