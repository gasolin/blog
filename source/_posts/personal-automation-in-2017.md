---
title: 我如何做個人自動化紀錄-2017版
tags:
  - web
  - mobile
  - automation
  - life
date: 2017-02-02 10:57:29
---

## 為什麼要做個人自動化紀錄?

有人會問，Facebook/Twitter不就可以記錄大小事了嗎? 如果會這麼回答，那就實在太天真了:smirk:。FB上也許包含了自己覺得值得分享的事，但生活中還有諸多事情值得記錄，而不適合與大眾分享。
擁有自己的一份完整數位化生活記錄，是我今年的個人目標之一。要達成這個目標，需要藉助一些自動化紀錄工具，好讓整個過程變得自然而不困難。

## 照片自動化備份 :camera:

* 360CAM所拍的相片一律備份到手機
* [Dropbox](http://www.dropbox.com/), 自動從手機上傳照片
* Google相簿, 自動從手機上傳照片
* NAS (Synnalogy), 從Dropbox同步照片. 由於Dropbox空間有限，會不定期將Dropbox上的照片手動整理備份到NAS上.

{% mermaid graph LR %}
cam[360 CAM]
User -- take photo --> cam
User -- take photo --> Phone
cam --> Phone
Phone -.-> Dropbox
Phone -.-> gphoto[Google Photo]
Dropbox -.-> NAS
{% endmermaid %}
照片備份規則

我的照片並不算多，但若有出遊的月份通常照片會暴增。所以我的基本備份規則是依年份，並以雙月份命名資料夾,若是當月有重大活動則直接在檔名中標注。
例如2016年的照片資料夾裡會有`2016_1011`，或是`2016_06倫敦`這樣的命名。

在整理照片的時候，每當遇到特別喜歡的，我會另存到Dropbox中的一個依年份歸檔的資料夾，例如2017年的精彩照片我會另存到 `dropbox/spot/2017`資料夾中，這樣隨時可以找出來欣賞。

## 運動自動化紀錄 :walking:

* 記步，睡眠紀錄：小米手環2
* 體重：小米體重計

{% mermaid graph LR %}
User -. 走路 .-> 小米手環2
User -. 睡覺 .-> 小米手環2
User -- 量體重 --> 小米體重計
小米手環2 -.-> 小米運動App
小米體重計 -.-> 小米運動App
{% endmermaid %}

今年將每天預定的步數由3000步提高到`4000步`，略高於平常的活動數字，
每天要達成這個目標的話，需要特意地多走幾步路。

update(9/1): 後來不再帶小米手環2，覺得記錄睡眠與步數意義不大。同時為了降低多走路所需要的意志力，把每日步數改成更容易達成的300步，只要開始走，通常都會超過需要的步數。

----

## 生活事件自動化紀錄

延續[用 IFTTT 做自動生活紀錄](https://blog.gasolin.idv.tw/2015/02/28/%E7%94%A8-IFTTT-%E5%81%9A%E8%87%AA%E5%8B%95%E7%94%9F%E6%B4%BB%E7%B4%80%E9%8C%84-LifeLog/)這篇的思路，我把看過的書籍、電影，喜歡的Youtube影片，貼過的文章,每日完成的事項都記錄到Google Calendar中，以方便之後回顧。

### 自動閱讀/觀看紀錄 :books:

對於書籍與電影, 我使用RSS + IFTTT + Google Calendar來自動紀錄。
當我在Anobii或豆瓣上修改狀態，Anobii或豆瓣的RSS也跟著改變，這時IFTTT會將RSS中的新事項紀錄到Google Calendar上。
對於Youtube上like的影片，Facebook或Twitter上新貼的文章，也會透過IFTTT紀錄到Google Calendar上。

{% mermaid graph LR %}
User -- update book --> Anobii
User -- add movie --> Douban
User -- post --> Blog
Blog -.-> RSS
Anobii -.-> RSS
Douban -.-> RSS
RSS -.-> IFTTT
IFTTT -.-> gcal[Google Calendar]
{% endmermaid %}
透過RSS轉IFTTT紀錄

{% mermaid graph LR %}
User -- like --> Youtube
User -- post --> Facebook
User -- post --> Twitter
Youtube -.-> IFTTT
Facebook -.-> IFTTT
Twitter -.-> IFTTT
IFTTT -.-> gcal[Google Calendar]
{% endmermaid %}
直接透過IFTTT紀錄

### 自動紀錄每日完成的事項 :notebook:

這部份是自動紀錄的核心。使用 Todoist + IFTTT + Google Calendar 即可達成。
我在Google Calendar上使用一個單獨的日曆(成功日記)來紀錄每日完成的事項。

{% mermaid graph LR %}
User -- checked --> Todoist
Todoist -.-> IFTTT
IFTTT -.-> gcal[Google Calendar]
{% endmermaid %}
If task completed in Todoist, Then log into Google Calendar

#### 從Email新增待辦事項 :email:

為了更方便地蒐集待辦事項，我參考這份影片 https://youtu.be/V7Dk7pzjJmM?t=11m30s 來將Todoist#Inbox設定為Email聯絡人，這樣處理Email的過程中也能快速地新增待辦事項。

### 紀錄看過或待看的網頁 :globe_with_meridians:

因為我唯一的收件夾是Todoist，所以若看到值得閱讀(紀錄)的網頁，桌面上我使用自己開發的瀏覽器Web Extension，搭配IFTTT去紀錄網頁到Todoist，或加個短評分享到Facebook或Twitter。
在手機上就直接使用Todoist和Facebook等App達到一樣的效果。

{% mermaid graph LR %}
User -- tap --> Browser[Browser addon]
Browser -.-> IFTTT[IFTTT Maker Channel]
IFTTT -.-> Todoist
IFTTT -.-> Facebook
IFTTT -.-> Twitter
{% endmermaid %}
If new task then create new Todoist item, If share then share to Facebook and Twitter.

### 文章更新時自動提醒 :alarm_clock:

除了偶而瀏覽Facebook或Twitter上充滿同溫層的快餐短文，我也使用Feedly訂閱一些自己挑選過的網站。
然而有些網站並未提供RSS訂閱，手機上我會使用[Web Alert](https://play.google.com/store/apps/details?id=me.webalert)來取得網頁更新提醒。
搭配Todoist稍候閱讀列表，我可以不在看到文章連結當下急著消費，而是在有空閒的時候才閱讀這些文章。

{% mermaid graph LR %}
webalert[Web Alert] --> User
User --> Browser
{% endmermaid %}

### 半自動工作紀錄 :briefcase:

透過翻看Todoist或Google Calendar，我可以輕易地將過去一週達成的事項整理出來，再送PR到Github上。
也可以說這塊目前只能算半自動化地列出過去事項列表，可以再繼續改進。

----

## 自動化網站部署 :globe_with_meridians:

目前已使用Github來放我的個人網站與部落格，透過與Travis CI整合，我所修改的任何內容，在幾分鐘之內都會自動部署到網站上。

如何做可參考 [Hello Hexo](https://blog.gasolin.idv.tw/2016/09/18/hello-world/) (個人網站自動化部署) 和 [Automatically deploy new commit to github pages via Travis CI](https://blog.gasolin.idv.tw/2017/01/03/ghpage-auto-deploy/)

{% mermaid graph LR %}
master[Github:master]
travis[Travis CI]
ghpages[Github:gh-pages]
User -- commit --> master
master -. auto build .-> travis
travis -.  auto deploy .-> ghpages
{% endmermaid %}
Auto website deploy flow

一些可以直接運作在瀏覽器的專案(如BlocklyDuino和Saihubot)，我會直接將gh-pages設為預設分支，所有改動直接push到這分支中。
這樣一有改動即可在網頁上看到更新成果。
