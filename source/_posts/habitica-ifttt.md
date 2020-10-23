---
title: 完成 Habitica 待辦事項 -> 記錄到 Google 日曆
tags:
  - ifttt
  - appscript
  - life
date: 2020-10-23 11:15:46
---

## 我目前使用的待辦事項分類

因為 [Todoist](https://todoist.com/) 高級版 ($29/年) 即將到期，
考量到過去一年的使用狀況，和現在需要多訂閱 [IFTTT Pro](https://ifttt.com/) (至少 $24/年)，所以決定找尋替代品。

我現在用如下的分類來組織待辦事項：

```
本週任務
下週任務
本月任務
下月任務
長期任務
- 2020
- 2021
- 2025
- 待看片單
- 待借（買）書單
- 有一天清單
```

這樣的分類實在簡單到不再需要 Todoist 的高級功能，所以我只需要找個簡單的 Task Ｍanager 來搭配 Joplin 記錄即可。

## 遷移後的代辦事項設定

遷移後我目前的代辦事項設定是

```
每日/習慣：Habitica
週-月：Trello
月-年：Joplin
```

[Habitica](https://habitica.com/) 提供了待辦事項，想養成的習慣，每日任務等三大功能，並提供額外的將現實生活遊戲化的樂趣 🗡。

Habitica 只提供了一個待辦事項列表，所以我只在裡面放當週預計的待辦事項，其他的目前放在 Trello 中。跑了幾週後，接下來我預期會將 Trello 拿掉，將週-月的事項也併入 [Joplin](https://joplinapp.org/) 中紀錄。

## 繼續量化自我

比起繼續使用 Todoist，遷移到 Habitica 還有個缺點，就是原來每完成一個 Todoist 上的待辦事項後，IFTTT 會自動幫我記錄到 Google 日曆中。Habitica 則沒有這樣的整合工具。

幸好 Habitica 雖然沒有整合 IFTTT，但是它提供了 webhook，只要填入任何網址，Habitica 在完成一些動作後，將會呼叫這個網址並傳出相關資訊。
搭配 IFTTT webhook channel，就可以做到「完成待辦事項 -> 記錄到 Google 日曆」的的功能。

## 透過 App Script 達成 Habitica Task 轉 IFTTT

聽起來不賴，不過事情當然沒有那麼完美，中間還有個錯位的環節。
當你想這麼做時會遇到的問題，就是 IFTTT 的 webhook 只接收特定的格式，和 Habitica 透過 webhook 傳出的格式並不相容。

要解決這問題也不困難，只要架個網站，跑個簡單的腳本，將 Habitica 傳出的資料處理一下，再送出 IFTTT 相容格式即可，這樣的東西通常叫做 API 代理（Proxy）🤪。

是是是，我也知道架網站沒那麼容易。額外租用主機的錢，可能就超過 Todoist 訂閱費了，那就完全失去原本節約的目的了。

## Habitica - IFTTT API 代理

因此，我透過寫一個簡單的 [Google App Script](https://script.google.com/) 腳本，並[將 Google App Script 發布成網頁 App](https://developers.google.com/apps-script/guides/web#deploying_a_script_as_a_web_app) 的方式，來簡單自架一個個人用的 Habitica - IFTTT API 代理。

Google Spreadsheet + Google App Script 實在是相當強大，卻少有人討論的免費 Serverless 工具。
對非工程師來說感覺太複雜，對初級工程師來說，覺得它就是 Google Spreadsheet 上的 VBScript 替代品。
但其實只要稍微學習一下，可以拿來完成許多生活自動化的事情。

你可以在 https://github.com/gasolin/habitica-task-to-ifttt 取用這個 Habitica - IFTTT API 代理程式。
