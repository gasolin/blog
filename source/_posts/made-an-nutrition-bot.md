---
title: 做一個回覆食材營養成份的聊天機器人
tags:
  - chatbot
date: 2018-03-21 17:40:00
---

![Imgur](http://qr-official.line.me/L/WzwZJDSLWY.png)

可以透過QRCode加入營養成份LINE bot。

Update: 謝謝大家熱烈試用「營養成份bot」,因為測試帳號已達50人的上限，所以將遷移到新的無人數上限的「營養成份2 bot」，請點選新的「營養成份bot」邀請連結 https://line.me/R/ti/p/%40hoz2085q

歡迎分享新連結給可能需要的朋友，讓大家隨手查營養，吃得更健康。
(目前的bot仍然可以使用，但不再更新維護)


## 食物，運動，與身體平衡

最近在看代謝型態飲食全書，裡面提到`吃下的東西`與`運動`，與體內的平衡和慢性病的產生有相當密切的關係。要讓身體重新回復到平衡的健康狀態，需要選擇適合自己的食物（營養素的比例）並搭配適當運動（有氧 + 無氧）與充足睡眠。

{% mermaid %}
graph LR
食物 --> 身體吸收
身體吸收 -- 影響 --> 體內系統的平衡
運動 --> 強化身體
強化身體 -- 影響 --> 體內系統的平衡
睡眠 --> 修補身體
修補身體 -- 影響 --> 體內系統的平衡
{% endmermaid %}

其中我們所選擇的一天三餐與餐間的`飲食習慣`，則是潛移默化地影響我們的健康。
當我們持續吃不好的食物或錯誤的營養素比例，則讓體內的系統處在有的養分過多，有的養分不足的持續不平衡的狀態。這些不平衡讓各種體內各種系統無法正常工作。例如一餐吃進過多的精製糖份可能造成血液中的糖份快速升高，胰臟必須快速分泌大量胰島素來協助細胞消化糖份，當這樣不平衡的狀態維持久了，就會造成胰臟的過度負擔。當體內的代謝開始失常時，我們可以先觀察到一些亞健康症狀，累積久了就成了各種慢性病。因此`選擇適合自己的食物`是相當重要的。

{% mermaid %}
graph LR
吃錯食物 --> 身體吸收
身體吸收 -- 影響 --> 體內系統不平衡
體內系統不平衡 --> 代謝失常
代謝失常 --> 亞健康症狀
亞健康症狀 --> 慢性病
{% endmermaid %}

## Bot 怎麼做成的

要`選擇適合自己的食物`時，我除了先做了測驗了解個人飲食中三大營養素(`碳水化合物`、`蛋白質`、`脂肪`)的參考比例，也想知道每樣吃下的東西大致的營養成份。

我想到如果有各種食材的營養成份資料，就可以做成聊天機器人或App以供隨時查詢。我搜尋了一下，發現政府資料開放平台上有公開的「[食品營養成分資料集](https://data.gov.tw/dataset/8543)」，提供csv, json, xml等格式下載。

下載開啟資料後，發現原始的JSON格式還是蠻....有趣的。

下載的JSON格式資料長這樣：

```
[{"食品分類":"魚貝類"},{"資料類別":"樣品基本資料"},{"整合編號":"J11101"},{"樣品名稱":"鮸魚"},{"俗名":"鮸仔,敏魚,鮸,敏仔魚"},{"樣品英文名稱":"Brown croaker; Mi-iuy croaker"}
```

...對於這種JSON存法只能...呵呵。

重新下載了csv檔，這次看到的格式總算正常了點，但解開後的csv檔案有接近50MB大小。寫了個腳本過濾掉不需要的資料，並轉換成需要的格式後，輸出總共不到500KB，這樣的大小就算放到App裡也還合適。

這次使用[bottender](http://bottender.js.org/)框架來連接到LINE[^1]。由於LINE需要HTTPS連線，開發的過程中使用了[ngrok](https://ngrok.com/)來讓LINE可以連到開發中的電腦，免去另外架設公開網站的麻煩。

此外還使用了[Fuse.js](http://fusejs.io/)這個模糊搜尋函式庫，在搜尋的時候只要打部份內容，就可以搜出相關的條目。

整個bot的軟體架構如下

{% mermaid %}
graph LR
subgraph 資料處理
公開資料(csv) -- 轉換/過濾 --> JSON
end
subgraph Node
JSON --> fuse.js
fuse.js --> bottender
bottender --> ngrok-cli
end
ngrok-cli --> ngrok
ngrok --> ngrok-cli
ngrok --> LINE
LINE --> ngrok
ngrok-cli --> bottender
{% endmermaid %}

## 開發中遇到的小坑

* developer channel or free channel

剛開始申請用 [developer channel](https://developers.line.me/console/) ，因為所有API都可以使用，開發起來會比較順暢。但稍後就遇到了Bot只能加50人好友的限制。

* Push Message vs Reply Message

developer channel可以用Push Message API(也就是bottender範例中接的sendText)。free channel的話不能使用Push Message API(context.sendText)，只能用Reply Message API。也就是不能推送訊息，但可以回覆使用者訊息（至多五筆）。查了一下文件[^2]，雖然需要稍微改變一點寫法(context.reply)，但還算容易解決。

現在上線讓大家使用的已是改用Reply Message API的版本。

## 我可以加這個Bot嗎?

可以透過掃描QRCode加入營養成份LINE bot。

<img src="http://qr-official.line.me/L/WzwZJDSLWY.png">

或點選以下連結

<a href="https://line.me/R/ti/p/%40hoz2085q"><img height="36" border="0" alt="加入好友" src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"></a>

因為使用免費的Host，不能保證bot永遠在線，若第一次沒回應，可以稍等半分鐘後再試。


## 會不會 Open Source

目前程式還沒有好好整理，尚不打算開源。

## 參考資料

* [1] https://bottender.js.org/docs/Platforms-LINE
* [2] https://bottender.js.org/docs/APIReference-LineContext#reply-api---official-docs
