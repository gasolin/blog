---
title: 個人自動化
tags:
  - web
  - mobile
  - automation
  - life
date: 2017-02-02 10:57:29
---


## 照片備份自動化

* [Dropbox](http://www.dropbox.com/), 自動從手機上傳照片
* Google相簿, 自動從手機上傳照片
* NAS (Synnalogy), 從Dropbox同步照片. 由於Dropbox空間有限，會不定期將Dropbox上的照片手動整理備份到NAS上.
我的照片並不算多，但若有出遊的月份通常照片會暴增。所以我的基本備份規則是依年份，並以雙月份命名資料夾,若是當月有重大活動則直接在檔名中標注。
例如2016年的照片資料夾裡會有`2016_1011`，或是`2016_06倫敦`這樣的命名。

在整理照片的時候，每當遇到特別喜歡的，我會另存到Dropbox中的一個依年份歸檔的資料夾，例如2017年的精彩照片我會另存到 `dropbox/spot/2017`資料夾中，這樣隨時可以找出來欣賞。

{% mermaid %}
graph LR
Phone --> Dropbox
Phone --> gphoto(Google Photo)
Dropbox --> NAS
{% endmermaid %}
照片備份規則

## 運動紀錄自動化

小米手環2 + 小米體重計

今年將每天預定的步數提高到4000步，略高於平常的活動數字，需要特意地多走幾步路。

----

## 生活紀錄自動化

延續[用 IFTTT 做自動生活紀錄](https://blog.gasolin.idv.tw/2015/02/28/%E7%94%A8-IFTTT-%E5%81%9A%E8%87%AA%E5%8B%95%E7%94%9F%E6%B4%BB%E7%B4%80%E9%8C%84-LifeLog/)這篇的思路，
我把看過的書籍、電影，喜歡的Youtube影片，貼過的文章, 每日完成的事項都記錄到Google Calendar中，以方便之後回顧。

### 每日完成的事項自動紀錄

使用 Todoist + IFTTT + Google Calendar 即可達成。我在Google Calendar上使用一個單獨的日曆(日記)來紀錄每日完成的事項。

{% mermaid %}
graph LR
Todoist --> IFTTT
IFTTT --> gcal(Google Calendar)
{% endmermaid %}
If task completed in Todoist, Then log into Google Calendar

### 工作紀錄

透過翻看Todoist或Google Calendar，我可以輕易地將過去一週達成的事項整理出來。

----

### 自動閱讀/觀看紀錄

對於書籍與電影, 我使用RSS + IFTTT + Google Calendar 自動紀錄。若Anobii或豆瓣的RSS改變了，IFTTT會將新事項紀錄到Google Calendar上。

{% mermaid %}
graph LR
Anobii --> RSS
Douban --> RSS
RSS --> IFTTT
IFTTT --> gcal(Google Calendar)
{% endmermaid %}

### 文章更新提醒

除了偶而瀏覽Facebook或Twitter上充滿同溫層的快餐短文，我也使用Feedly訂閱一些自己挑選過的網站。
然而有些網站並未提供RSS訂閱，手機上我會使用[Web Alert](https://play.google.com/store/apps/details?id=me.webalert)來取得網頁更新提醒。
搭配Todoist稍候閱讀列表，我可以不在看到文章連結當下急著消費，而是在有空閒的時候才閱讀這些文章。

### 紀錄看過或待看的網頁

因為我唯一的收件夾是Todoist，所以若看到值得閱讀(紀錄)的網頁，桌面上我使用自己開發的瀏覽器Web Extension，搭配IFTTT去紀錄網頁到Todoist，或加個短評分享到Facebook或Twitter。
在手機上就直接使用Todoist和Facebook等App達到一樣的效果。

{% mermaid %}
graph LR
Browser --> IFTTT(IFTTT Maker Channel)
IFTTT --> Todoist
IFTTT --> Facebook
IFTTT --> Twitter
{% endmermaid %}


----

## 網站部署自動化

目前已使用Github來放我的個人網站與部落格，透過與Travis CI整合，我所修改的任何內容，在幾分鐘之內都會自動部署到網站上。

如何做可參考 [Hello Hexo](https://blog.gasolin.idv.tw/2016/09/18/hello-world/) (個人網站自動化部署) 和 [Automatically deploy new commit to github pages via Travis CI](https://blog.gasolin.idv.tw/2017/01/03/ghpage-auto-deploy/)
