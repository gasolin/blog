---
title: Chrome OS 公開原始碼
tags:
  - chromeos
date: 2009-11-26 03:27:23
---

<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/ANMrzw7JFzA=zh_TW&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/ANMrzw7JFzA=zh_TW&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>


雖然有一堆文件或介紹影片，但再怎麼口沫橫飛，還是不如看上一段 Chrome OS 實際操作影片來的直覺。

總而言之，對專業工作者（繪圖、Coding、玩家）來說，Chrome OS 並不是理想的系統，但看DEMO對一般使用來說，上網聊天種菜儘管夠用了。

我看到 Chrome OS 的幾個重點在

*   Thin Client
*   2 partitions for the root file system
*   Web Apps + Local Media Player **Thin Client**

Chrome OS 真的把所有 OS 中常見的東西都拿掉了。桌面基本上就是個 Chrome 瀏覽器。但也可以切換桌面，切換桌面就是切換帶有不同頁籤的 Chrome 瀏覽器。
![](http://sites.google.com/a/chromium.org/dev/_/rsrc/1258650210340/chromium-os/chromiumos-design-docs/software-architecture/overviewpng)

**2 partitions for the root file system**

2個可置換的 root file system 是高階嵌入式系統中常見的配置，有了這樣的備援方式，OS 基本上就很難更新失敗，更新失敗了也可以救回來。

**Web Apps + Local Media Player**

除了閉著眼都猜的到的 Google Gmail/Doc 之外，也內建了 Notes/Tasks Panel。玩遊戲靠 Flash，播SD 卡/線上的 MP3/影片則可以呼叫系統提供的播放工具。有 Local Media Player 至少沒連網路時也不會太糟。

對了，登入時一定得用 Google 帳號密碼，登入後使用各種 Google 服務時就不用再登入一次。這種作法有沒必要，可能得再深入點實際使用過才知道。如果我是詐騙集團，現在就趕緊來釋出一版 Chrome OS 下載版，相信可以偷到很多 Gmail 帳號 ;)

如果要寫 Chrome OS 上層的應用程式，只能用 HTML5、Javascript、Flash 這些工具，來撰寫網站或是 Chrome Extension。
![](http://sites.google.com/a/chromium.org/dev/_/rsrc/1258650212610/chromium-os/chromiumos-design-docs/software-architecture/chromepng)

[Chromium](http://sites.google.com/a/chromium.org/dev/chromium-os/chromiumos-design-docs) 是 Chrome OS 跟 Chrome 的開源專案。

目前唯一在這個 OS 上開發程式的方式，是透過類似 Firefox Extension 的瀏覽器外掛套件方式達成。

一些連結實在是不太好找，順便列在此:

*   [Chrome OS 相關的討論群組](http://sites.google.com/a/chromium.org/dev/chromium-os/discussion-groups)
*   [Chrome Extension 開發文件](http://code.google.com/chrome/extensions/index.html)
