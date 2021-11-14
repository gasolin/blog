---
title: 我如何做個人自動化紀錄-2020版
tags:
  - web
  - mobile
  - automation
  - life
date: 2020-04-04 15:00:29
---

2017年開始紀錄自己使用的自動化紀錄工具。

## 為什麼要做個人自動化紀錄?

有人會問，Facebook/Twitter不就可以記錄大小事了嗎? 如果會這麼回答，那就實在太天真了:smirk:。FB上也許包含了自己覺得值得分享的事，但生活中還有諸多事情值得記錄，而不適合與大眾分享。

或是想整理過去公開紀錄，造訪過去使用過的社交平台（Plurk, Google+, Blogger）已非常難以找出過去的隨筆或評論。

擁有自己的一份完整數位化生活記錄，是我持續的個人目標之一。要達成這個目標，需要藉助一些自動化紀錄工具，好讓整個過程變得自然而不困難。

<!-- truncate -->

## 混用多種工具

沒有一個工具可以滿足方方面面的需求。因此比較實際的方式，是混用多種工具以達成目標。
幸好，自動化的目標就是讓事情更少需要經過人工處理，因此各種工具設定好之後，期待他們能自動運作，只要定期維護檢視就好。

手機上透過 Automate，
網路服務透過 IFTTT 和 Integromat，將各種服務整合起來使用。

## 即時資訊自動化

透過 Google SpreadSheet 和 Integromat，取得自己關注的資訊。

10月: 重新部署了基於[saihubot](https://github.com/gasolin/saihubot/)的[小g網頁聊天機器人](http://gasolin.idv.tw/g)，將一些即時查詢類的動作寫成網頁可即時取得版。可以輸入`help`參考看看當下可以處理的命令。

### Integromat

透過使用 LASS API ， 當附近 PM2.5 超過35.4(不良)時手機推送訊息給我。

## 手機自動化

* 透過[Automate](https://play.google.com/store/apps/details?id=com.llamalab.automate) App
  * [Youtube 自動點選略過廣告按鈕 (Android)](tools/automate-skip-ad.md)
  * 手機連線到藍芽耳機時，自動開啟指定的 App 播放。

## 照片自動化備份 :camera:

* [Dropbox](http://www.dropbox.com/), 自動從手機上傳照片
* Google相簿, 充電時自動從手機備份照片到Google雲端
* NAS (Synnalogy), 透過`Cloud Sync`從Dropbox同步照片。

```mermaid
graph LR
User -- take photo --> Phone
cam --> Phone
Phone -.-> Dropbox
Phone -.-> gphoto[Google Photo]
Dropbox -.-> NAS
```

## 運動自動化紀錄 :walking:

* 記步，睡眠紀錄：小米手環3
* 體重：小米體重計

再透過小米運動 App 同步到 Google Fit

```mermaid
graph LR
User -- 記步 --> 小米運動App
User -- 量體重 --> 小米體脂計
小米體脂計 -.-> 小米運動App
小米運動App -.-> fit[Google Fit]
```

行走目標為每天4000步。

----

## 生活事件自動化紀錄

延續[用 IFTTT 做自動生活紀錄](life/LifeLog-via-IFTTT.md)這篇的思路，我把看過的書籍、電影，喜歡的Youtube影片，貼過的文章,每日完成的事項都記錄到Google日曆中，以方便之後回顧。

### 自動閱讀/觀看紀錄 :books:

對於電影, 我使用RSS + IFTTT + Google Calendar來自動紀錄。當我在豆瓣上修改狀態，豆瓣的RSS也跟著改變，這時IFTTT會將RSS中的新事項紀錄到Google 日曆上。
對於Youtube上like的影片，Facebook或Twitter上新貼的文章，也會透過IFTTT紀錄到Google 日曆上。

```mermaid
graph LR
User -- add movie --> Douban
User -- post --> Blog
Blog -.-> RSS
Douban -.-> RSS
RSS -.-> IFTTT
IFTTT -.-> gcal[Google Calendar]
```

透過RSS轉IFTTT紀錄

```mermaid
graph LR
User -- like --> Youtube
User -- post --> Facebook
User -- post --> Twitter
Youtube -.-> IFTTT
Facebook -.-> IFTTT
Twitter -.-> IFTTT
IFTTT -.-> gcal[Google Calendar]
```

直接透過IFTTT紀錄

### 自動紀錄每日完成的事項 :notebook:

使用 Todoist + IFTTT + Google Calendar 即可達成自動紀錄。
我在Google Calendar上使用一個單獨的日曆(`成功日記`)來紀錄每日完成的事項。
讀完一本書的時候，也是透過完成 todoist 上對應的待辦事項，顯示在日曆上。

```mermaid
graph LR
User -- checked --> Todoist
Todoist -.-> IFTTT
IFTTT -.-> gcal[Google Calendar]
```

| 我其實非常少開Google日曆，所以目前這樣的設定其實重複回去察看的機會也不高（目前我會手動紀錄在實體筆記本或 joplin 的每週紀錄上）。看看之後有什麼契機可以改進。

### 紀錄看過或待看的網頁 :globe_with_meridians:

我會將待看的文章搜集到Pocket。

除了瀏覽Facebook或Twitter上的文章，我也使用Feedly訂閱一些自己挑選過的網站。並將Feedly設定成當我做標記時，就將本篇文章轉存到Pocket稍候閱讀列表，我可以掃過Feedly列表，標記感興趣的新聞，稍後再到Pocket閱讀。

這樣讓我在看到文章連結當下不需急著看完整篇文章，而是在有空閒的時候才閱讀這些文章。

我唯一的待辦事項收件夾是Todoist，若看到值得閱讀(紀錄)的網頁，桌面上我使用瀏覽器的`Pocket`外掛插件(Firefox瀏覽器內建)，將待看網頁記錄到Pocket中。

在手機上直接使用 Todoist 和 Pocket 等 App，達到一樣的效果。

若在Pocket中覺得這個文章打星星收藏，則記錄到Google日曆中。

```mermaid
graph LR
Feedly --> Pocket
Browser --> addon[Pocket addon + tag]
addon --> Pocket
pocket --star--> IFTTT
IFTTT -.-> gcal[Google Calendar]
```

### 文章更新時自動提醒 :alarm_clock:

有些網站並未提供RSS訂閱，手機上我會使用[Web Alert](https://play.google.com/store/apps/details?id=me.webalert)來取得網頁更新提醒 (主要是追小說新章節)。

```mermaid
graph LR
webalert[Web Alert] --> User
User --> Browser
```

### 開發工具

#### 設定自動備份

使用VS Code [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) ，只需剛開始時設定一次，之後可同步各種VS Code中的設定與插件。

#### 自動更新

盡量使用 brew cask(mac) 命令安裝新軟體，透過`brew cask upgrade`命令更新。

----

## 自動化網站部署 :globe_with_meridians:

目前已使用Github來放我的個人網站與部落格，透過與Travis CI整合，我所修改的任何內容，在幾分鐘之內都會自動部署到網站上。

如何做可參考 [Hello Hexo](make/hello-world) (個人網站自動化部署) 和 [Automatically deploy new commit to github pages via Travis CI](devtools/ghpage-auto-deploy.md)

```mermaid
graph LR
master[Github:master]
travis[Travis CI]
ghpages[Github:gh-pages]
User -- commit --> master
master -. auto build .-> travis
travis -.  auto deploy .-> ghpages
```
| Auto website deploy flow

一些可以直接運作在瀏覽器的專案(如BlocklyDuino和Saihubot)，我會直接將gh-pages設為預設分支，所有改動直接push到這分支中。這樣一有改動即可在網頁上看到更新成果。

之後考慮使用 Github Action 取代 Travis。

---

## 半自動紀錄

### 半自動工作紀錄 :briefcase:

透過翻看Github Pull request + Asana，我可以輕易地將過去一週達成的事項整理出來，再送PR到Github上。
也可以說這塊目前只能算半自動化地列出過去事項列表，可以再繼續改進。

### 定期回顧與整理

我在Joplin中增加一個`Template`項目，裡面放了周檢視/月檢視/季檢視/年檢視樣板。

在 Todoist 中透過重複時間設定，每段時間自動提醒該做檢視了。

撰寫本文的目的之一，也是讓我有回顧我的自動化運作的機會。

回顧: 之前的設定達成率很低。現在採用新的組織代辦事項方法與樣板，簡化了檢視的困難度。目前有效的提升了定期回顧的頻率。

### 照片備份規則

由於Dropbox空間有限，會不定期將Dropbox上的照片移動到到NAS上按年月份分類的`photo/`資料夾.

我的照片並不算多，但若有出遊的月份通常照片會暴增。所以我的基本備份規則是依年份，並以雙月份命名資料夾,若是當月有重大活動則直接在檔名中標注。
例如2016年的照片資料夾裡會有`2016_10_11`，或是`2016_06_london`這樣的命名。

在整理照片的時候，每當遇到特別喜歡的，我會另存到Dropbox中的一個依年份歸檔的資料夾，例如2017年的精彩照片我會另存到 `dropbox/spot/2017`資料夾中，這樣隨時可以找出來欣賞。

另外每年累積的一些螢幕截圖，也放在當年度的`screenshots`資料夾裡。

### 清理RSS Feed

透過Feedly訂閱RSS Feed太容易，但是不小心每天收到的新聞量就遠高於自己能吸收的量，這時可以到
https://feedly.com/i/organize/my 把那些失效的連結清掉，並快速檢視一下現在仍在訂閱的網站，是否還對這些主題感興趣。

## 手動紀錄

為了平衡日常太依靠電子產品的趨向，前年開始就嘗試使用`實體筆記本`作一些紀錄，2018一月中開始嘗試養成更頻繁地使用`實體筆記本`的習慣。在幾經調整後，目前我使用B5方格筆記本做基礎，搭配不同的魔擦筆來作筆記。實體筆記本的好處是除了一般的紀錄，還可以隨意畫心智圖，黏照片，貼紙，蓋印章等。參考各種筆記術書籍，我在每本筆記本前幾頁會空出`索引`區，將筆記本內容索引起來，以便之後查找。

我在Joplin中增加一個`2020年計畫`的文件，保存當年度的周/月/季度紀錄和定期回顧。


## 參考資料
* [我如何做個人自動化紀錄 - 2018 版](life/personal-automation-in-2018.md)
* [我如何做個人自動化紀錄 - 2017 版](life/personal-automation-in-2017.md)
