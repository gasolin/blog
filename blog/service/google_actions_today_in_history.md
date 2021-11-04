---
title: 我想問歷史上的今天- Google 助理服務上架心得
tags:
  - google actions
  - Google助理
date: 2019-04-04 22:45:00
---

![Imgur](https://i.imgur.com/UwOC08Rh.png)

我的第一個 Google 助理服務「[歷史上的今天](https://assistant.google.com/services/a/uid/0000005a1a233d97)」上架了，已列在 [Google 助理服務(中文)列表](https://assistant.google.com/explore?hl=zh-TW)中。

https://assistant.google.com/services/a/uid/0000005a1a233d97

相對於 [Google 助理服務(英文)列表](https://assistant.google.com/explore?hl=en)，中文的 Google 助理服務還不多，簡單分享一下開發心得。

## 如何使用

這個Google 助理服務的功能很單純，即從維基百科中隨機選出一條歷史上的今天所發生過的事。

要使用這個Google 助理服務，可開啟Google助理，詢問「我想問歷史上的今天」，Google助理就會啟動「歷史上的今天」服務。

![Imgur](https://i.imgur.com/amIc9Foh.jpg)

## 怎麼做 Google 助理服務

「歷史上的今天」資料取自維基百科，也希望任何感興趣的人都能來參與維護，因此選擇開源。專案頁面在 https://github.com/gasolin/todayinhistory 

我所說的 Google 助理服務其實英文叫「Google Action」，可以用在各種 Google 助理(Assistant) 支援的場景中，如手機，手錶，Chrome Book，Google Home 等。

[歷史上的今天](https://assistant.google.com/services/a/uid/0000005a1a233d97) 這個 Google 助理服務由 https://dialogflow.com/ 託管，使用`Cloud Function`來回應使用者。`Dialogflow`與`Cloud Function`都是 Google 旗下的服務。

`Dialogflow`提供了各種語音/文字聊天機器人 (Chat bot) 的一站式訓練/開發/部署環境。除了Google 助理服務，也可以在上面使用`Dialogflow` API 同時支援 LINE，Facebook Messenger 等聊天機器人。`Cloud Function`也被整合在 Dialogflow 中，讓開發者可以簡單地呼叫一段腳本執行命令，而不需要維護完整的網頁伺服器端程式。

開發[歷史上的今天](https://assistant.google.com/services/a/uid/0000005a1a233d97)的過程中，只要在`Dialogflow`網站上開發，在 [Actions on Google](https://developers.google.com/actions/) 中測試與發佈即可，整個流程甚至不需要下載資料到電腦中。

如果對程式本身，或對每天可能會收到的回應感興趣，專案頁面在 https://github.com/gasolin/todayinhistory ，歡迎造訪按 Star，也歡迎前往 https://assistant.google.com/services/a/uid/0000005a1a233d97 留下好評。