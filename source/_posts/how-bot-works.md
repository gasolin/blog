---
title: 聊天機器人是怎麼運作的(I)
tags:
  - web
  - bot
  - mobile
date: 2017-03-01 10:36:53
---


聊天機器人（Chat bot）已存在許久，常見於各種即時通訊工具中。一般人最可能接觸到的，還是銀行的語音服務（Voice Response System）。

當我們打電話到銀行免付費專線，會有語音提示我們輸入驗證資料，然後輸入對應的數字來得到銀行服務。
只有在根據一串語音提示，輸入特定數字時才轉接到真人回應的專線。這個過程跟使用聊天機器人基本上是一樣的。

{% mermaid %}
graph LR
User --> dial[撥號]
dial --> identify[輸入身份驗證資料]
identify --> number
number[選擇服務項目] --> auto[1-8:自動回答]
number --> man[9:專人服務]
{% endmermaid %}
銀行的語音服務流程


## 行動裝置的完全普及

近年來聊天機器人能重新進入公眾視線，主因還是行動裝置的完全普及：
幾乎所有的人都擁有一台智慧型手機。而且所有人的手機上都有一至數個聊天App（LINE, Facebook Messenger, Wechat）。

邏輯思維2016年底跨年演講裡提到，美國, 中國想上網的人基本都已經能上網（上網人口已經接近飽和），人們每周平均花24小時上網,而這些數字都已經沒有太大的提升空間。因此所有的網路服務都得從有限的總量中搶占使用者的上網時間與關注。

換句話說，2016年我們已正式進入行動網路（移動互連網）的下半場。

## 聊天App佔用使用者更多上網時間

2016年初的調查顯示，人們每天平均在手機和在電腦上所花的時間差不多。
隨著手機App的發展，人們能透過手機完成的事也越來越多。可以預見到的是人們每天花在手機上的時間佔比會再增加。
人們在手機上花費最多時間的是聊天App和社交App。而今天的聊天/社交App都已內建網頁檢視（webview）功能。
看到「朋友」分享的新聞連結，點選後可以直接瀏覽內容，完全不需要另外再開啟瀏覽器來查看新聞。

由於聊天App佔用了使用者多數的時間，依照「使用者在哪，機會就在哪」的原則，聊天機器人，或是對話式界面(Conversational UI)成了一個選項。

## Siri, 聊天機器人的濫觴

這波新一代聊天機器人的濫觴，也許可以歸功於2011年蘋果推出的Siri[^1]，雖然Siri並不存在於聊天App中。
iPhone的使用者可以透過手機上的Siri智能助理應用，做到用口語詢問近期天氣，日程表，查詢地圖，餐廳，設定鬧鐘等行動，從而用更便利的方式取得服務。
雖然今天Siri與其他選擇相比，已盡顯不足之處, 但當時Siri的推出，讓人們感知到與機器直接對話已不再遙不可及，
這直接鼓勵了眾家廠商願意加大投入。近幾年語音辨識，人工智能AI的爆發式進展，與此必然有著千絲萬縷的聯繫。

## 聊天機器人有什麼用?

```
Reddit 曾有用戶提問，如果某個 1950 年代的人突然出現，最難向他解釋的現代事物是什麼？
最多人推的回答是： 「我擁有一部機器，就放在我的口袋裡，我可以用它來存取任何人類已知的知識。
我常用這個來看貓咪的圖片，還有跟陌生人筆戰。」
-- @wastemobile
```

就像现在手机App一样，大部分的App其实没什么用，用了只是消耗自己的时间。
但是像Siri所能做的，使用者可以透過聊天機器人簡化日常的瑣事，或是快速得到常見問題的答案。
Slack平台上已有許多機器人，可以同步Github Bug，代辦事項的資訊，提醒今日任務等。這些Bot能省下使用者寶貴的線上時間。
我們更多需要的是這類型（用更便利的方式取得服務）的聊天機器人。


## 聊天機器人與使用者的互動方式

```
在網際網路上，沒人知道你是一隻狗
```

聊天軟體原本的功用是讓使用者可以和「另一個使用者」或「一群使用者」交流。聊天機器人則是取代「另一個使用者」的角色，讓使用者和「聊天機器人」一對一交流，或是讓聊天機器人加入群組，和「一群使用者」交流。

{% mermaid %}
graph LR
User --> bot[Chat Bot]
bot --> User
{% endmermaid %}
一對一

{% mermaid %}
graph LR
User --> Group
Group --> User
Group --> bot[Chat Bot]
bot --> Group
{% endmermaid %}
群組（多對多）


## 聊天機器人的應對方式

除了「一對一」，「群組」（多對多）之外，依據聊天機器人的應對方式，還可以分為通知型（Notify），模式型（Pattern Matching），對話型（Context Aware）等幾種聊天機器人。

### 通知型（Notify）

通知型機器人會根據使用者「訂閱」的資訊，傳訊息通知使用者。例如明日天氣預報機器人可以定時告訴使用者明天氣象狀況與溫度，出門需不須要帶傘。
使用者一般不需要輸入任何訊息與機器人對話。

{% mermaid %}
graph RL
bot[Chat Bot] -- notify --> User
{% endmermaid %}

### 模式型（Pattern Matching）

模式型機器人會比對使用者送出的訊息，如果符合機器人設定好的一些模式，就做出對應的回應。

{% mermaid %}
graph RL
subgraph chatbot
Matcher[Pattern Matching] --> Responder[Build Response]
end
User -- request --> Matcher
Responder -- response --> User
{% endmermaid %}

例如使用者可以透過天氣機器人，輸入"weather in Taipei"查詢當前台北的天氣。

基本的模式型機器人沒有對話的概念，並不會根據使用者過去的應對而改變回應的結果。
例如使用天氣機器人時每次都需要指定想查詢的地點，或是透過預先設定地點/偏好溫度格式來簡化使用方式。

除了傳統使用正則表達式(Regex)來比對模式外，Facebook Messenger bot則提供更接近口語的自然語言處理（Nature language Processing）模式比對。
多數聊天機器人框架目前都仍偏向模式型。

### 對話型（Context Aware）

對話型機器人會從與使用者過去的對話中提取使用者的偏好，並運用到後續的對話中。

{% mermaid %}
graph RL
subgraph chatbot
Parser -- Action --> Processor[Do actions]
Processor --> contexture[Context Brain]
Processor --> Responder[Build Response]
end
User -- request --> Parser[Intent Parser]
Responder -- response --> User
{% endmermaid %}

例如Google Assistant會根據你之前的查詢,去進一步找到你想听的音樂。


## 參考資料

* [^1] https://en.wikipedia.org/wiki/Siri
* [^2] 在網際網路上，沒人知道你是一隻狗 https://zh.wikipedia.org/wiki/%E5%9C%A8%E4%BA%92%E8%81%94%E7%BD%91%E4%B8%8A%EF%BC%8C%E6%B2%A1%E4%BA%BA%E7%9F%A5%E9%81%93%E4%BD%A0%E6%98%AF%E4%B8%80%E6%9D%A1%E7%8B%97
