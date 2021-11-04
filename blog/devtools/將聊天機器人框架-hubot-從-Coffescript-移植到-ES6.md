---
title: 將聊天機器人框架 hubot 從 Coffescript 移植到 ES6
tags:
  - javascript
date: 2016-03-14 08:31:46
---

[![Hubo](https://farm1.staticflickr.com/91/210333714_cccff3a76f.jpg)](https://www.flickr.com/photos/franzbrandtwein/210333714/in/photolist-jA1Tm-7zsdd5-c3S9RY-6nV3Rp-96h4Vx-of3ttt-38gqh7-gmHXQv-dVEbJF-7E2T3H-HtFB3-robohy-druZRm-nrF4vh-HtFAN-7Dk3uW-pkMp7E-qpn51r-67WHcz-dmkogt-AkVdM-951oFH-af6bdQ-igcWis-bw1gLG-6ZkGsP-r3KjtA-aojgSy-qXYEst-ckHzAN-97rv7G-qfi5f6-bu6G96-4mdWDR-62fyWi-qgcVh4-89o3px-8AKiYq-Xb2wh-5K91Q3-rwerig-i19QiK-7jGYc7-2Pc3VK-bNBoUp-9RDmqK-9iEDUt-kb1z7K-dwYP4H-pN2djS "Hubo") 


([English Version available here](http://blog.gasolin.idv.tw/2016/03/how-we-ported-hubot-from-coffeescript.html)）

用兩周多的時間，路路續續把原本用 [Coffeescript](http://coffeescript.org/) 撰寫的 [Hubot](https://github.com/github/hubot) 聊天機器人框架移植成使用到 ES6 特性的純 Javascript 版本。
現在這個移植版本已經可供使用。移植後依然可以使用 Hubot 原來以 Coffeescript 撰寫的各種擴充套件(Plugins) 。
[https://github.com/gasolin/webbybot](https://github.com/gasolin/webbybot)
(目前的版本完全移植 Hubot 的功能，已開 [Issue](https://github.com/github/hubot/issues/1138#issue-138031128) 詢問 Hubot 是否有興趣 merge 回去，在此之前先放在自己的 webbybot repo 裡)
移植的動機之一是為了了解整個聊天機器人框架，為後續可能的修改打基礎。
其二則是嘗試平常不常用到的ES6新特性。
過去 Coffeescript 和 [Typescript](http://www.typescriptlang.org/) 等最終編譯成 Javascript 執行的語言，都走在 Javascript 之前，提供了許多語法上的新特性。但在 2015 年 Javascript 開始的新發佈規劃(一年一版)下，ES6(ES2015)已將 Coffescript 眾多特性都收編了。且現在透過 [Babel](http://babeljs.io/) 可以將 ES6 編譯成現有的 Javascript 直譯器能讀懂的語法。在這樣的趨勢下，過去開發者想為這些新特性多學一套語言的誘因就不再存在了。
移植過程中採用的作法與遇到了一些坑，在此一一列出來。
**1\. 不用 grunt gulp, 直接使用 npm script**
在 package.json 裡可以直接在 "script" 屬性中定義一些要執行的腳本，例如 webbybot 透過 "npm run build" 來將 ES6 轉換成 Javascript 直譯器能讀懂的語法。用 “npm run lint" 來做 style check。
**2\. 不用 webpack, 直接使用babel**
移植之初決定使用 webpack 的 babel loader 來轉換 ES6，但這是一連串從「錯誤中學習」的開始。 webpack 支援使用 require 命令載入各種檔案，而且webpack 在轉換的過程中會將檔案打包成一份。但後端程式其實不太需要打包，而且 Hubot 作為一個框架，執行後從外部讀取 Plugin 是非常重要的功能。 使用 webpack 時，它會將程式中出現的 require 都視為它的 require，而嘗試從打包好的檔案中找到我們需要的外部 plugin，結果是徒勞的。當我們換用 npm script 直接呼叫 babel-cli 來打包，原來使用 webpack 時出現的諸多問題也都一併解決了。
**3\. 該不該 return**
在移植的過程中常用到的工具是 [Coffeescript](http://coffeescript.org/) 官網的 "Try Coffeescript" 分頁。可以即時將 Coffeescript 結果轉換成 Javascript。 但是真的把程式碼貼上去會發現， Coffeescript 所轉出來的 Javascript 所有的函式都會回傳值。需要手工一個個確認。
**4\. test cases**
Hubot 本身有很完整的單元測試。所以每移植一支程式碼時，只要一併移植對應的單元測試，就可以捉對拿來直接測試。單元測試移植時出現最多該不該 return 的問題。
**5\. class and super**
Hubot 使用了很多 Coffeescript 的 Class 語法。Class 與 super 的用法在 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 上可以找到相關教學。
**6\. Default + Rest + Spread**
Hubot 程式碼裡常常會出現諸如 reply(strings...) 的語法。Coffeescript 裡的"strings..."可以對應到ES6 的 "...strings"（...放置位置剛好相反）。
"...strings" 代表的是一個陣列。在程式中有時要展開有時不用，其實頗令人苦惱。**7\. 使用 for..of 替換 for.. in 迴圈**
碰到 for..in 迴圈有幾種解法，最不會出錯的是將 Array iteration 改寫成 forEach。但是用 forEach ˇ的話無法在執行中使用 break/return 跳出是其缺點。其二是在 for..in 迴圈裡加入 hasOwnProperty 確認不會跑到無關的 function。
在 Webbybot 的第二版中已使用 ES6支援的 [for..of 迴圈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 來取代 forEach 和 for..in 迴圈。由於 for..of 迴圈只支援 iteratable ，不支援一般 Object，所以碰到要對 Object 跑迴圈時可以在 Object 外包一層 Object.keys，例如 `for (let item of Object.keys(TargetObj)) {...}
**8\. 使用 Object.assign 替換 Extend**

要擴展一個物件的功能不用再用 lodash 或是自己寫 extend 函式，直接用 [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 吧。

以上是移植過程中碰上的問題。感謝同事 Ray Lin 一起幫忙完成這次的移植。

現在 Webbybot (Hubot ES6 port) 整套都可以用 Javascript 寫了，歡迎試用或上 Patch 喔。

[https://github.com/gasolin/webbybot](https://github.com/gasolin/webbybot)
