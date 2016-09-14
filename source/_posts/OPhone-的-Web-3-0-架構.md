---
title: OPhone 的 Web 3.0 架構
tags:
  - Android
  - network
date: 2009-06-24 09:29:59
---

[![](http://www.oms-sdn.com/uploads/Image/5.14(1).jpg)](http://www.oms-sdn.com/uploads/Image/5.14(1).jpg)
<div>
</div><div>中國移動基於 Android 自行訂製的 OPhone 系統終於釋出了 SDK。</div><div>[OPhone 的 SDK](http://www.oms-sdn.com/) 相容於 Android 1.0 API ，使用 ADT 0.8 版開發工具（不支援 Android 1.1、1.5 和 ADT 0.9.x 以上版本的開發工具），並需要安裝它提供的 OPhone SDK 還有 WDT （桌面小程式開發工具 Widget Development Toolkit）這個 Eclipse Plugin。</div><div>
</div><div>無獨有偶的，OPhone 弄出了一個跟 [Opera Unite](http://unite.opera.com/) 相似的「客戶端即伺服器」架構，叫做「Mobileyou」[手機網頁伺服器](http://www.oms-sdn.com/article/show/24;jsessionid=9D59902E76E53BB69A5691043B726B8B)。我乾脆把這類架構稱為「網頁P2P」，或「pWeb」（Personal Web、Peer-2-Peer Web）。</div><div>
</div><div>這類「pWeb」服務架構的本質，簡單說來是在電腦或手機上裝個網頁伺服器，以提供各種以網頁為介面的服務，再結合個人電腦或手機上提供的個人資訊，提供異化的功能性網站。</div><div>
</div><div>中國移動或 Opera 這些服務提供者端，將使用某種動態 DNS 轉址機制（Dynamic DNS），以提供一個統一的網址，如「http://官方網址/個人暱稱/服務」這樣的連結，讓網路上所有的人都可以用這個網址連上 pWeb 網站，以解決使用者該透過哪個網址訪問的問題。</div><div>
</div><div>OPhone 提供的「Mobileyou」，跟 Android 上另一個「i-jetty」應用程式很類似。裝了之後都可以存取手機上的功能，透過網頁介面來管理個人通訊錄、查看簡訊等。</div><div>
</div><div>有了這樣的服務以後，女朋友要看男朋友有沒有偷吃，就不用再偷偷拿他的手機查看簡訊，只要到個人手機上的網站查看就行了（怎麼覺得舉的是個反例 :p）</div><div>
</div><div>
</div>