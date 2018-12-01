---
title: 用Raspberry Pi組裝一套小朋友使用的電腦
tags:
  - kanoos
  - raspberrypi
date: 2018-12-02 00:43:33
---

之前嘗試過組裝一些智能玩具，但能讓小朋友持續保持興趣遊玩的並不多。我發現這些玩具一旦需要編程時，多少還是需準備一台電腦。與大人共用電腦多有不便。因此不如就用每個人家中多出的Raspberry Pi(?)與電子設備，幫小朋友準備好所需的相關材料，協助他組一台精簡的電腦吧。

## 使用的設備列表

我參考的BUILD（最近暗黑破壞神3玩多了...）是一套由專門售賣以Raspberry Pi為核心的教育用電腦提供商的[KANO Computer Kit Touch](https://kano.me/store/us/products/computer-kit-touch)套件。現在整套特價~$230左右，相較其他的STEM教具，整套的價格相當合理。其實如果人在他們有售賣的地區，家中沒有冗餘的設備或想追求更好的使用體驗，相當建議直接購買一套。

這邊是其他人的開箱影片，介紹了使用到的硬體與作業系統
<iframe width="560" height="315" src="https://www.youtube.com/embed/If-I1b-c-ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

以下列出我有用到的設備列表，價格是當初印象裡購入各種設備時的價錢。

- Raspberry Pi 主版
  - 建議使用 3B 或 3B+，速度上才接近可用的電腦
  - (Raspberry Pi 3B ~NT 1400)
- 支援HDMI的螢幕
  - (手邊現有的23吋桌面螢幕 ~NT 4300)
  - (打算再購買10吋觸控螢幕 ~NT 3000)
- 播音設備
  - 沒有喇叭的話，用手機附的耳機聽也行 (但為了小朋友聽力，要用耳機也建議用耳罩式或頭戴式)
  - (手機附的耳機, ~NT 0)
  - (考慮弄個手機喇叭來接 ~NT 100)
- 電源
  - 可用舊手機的 Micro USB 充電線與充電頭，或任何手邊的行動電源
  - (小米行動電源 5000 ~NT 300)
- USB 鍵盤/滑鼠
  - 重用任何現有的鍵鼠，如果有觸控螢幕就不用準備滑鼠
  - (可以找到帶觸控版的鍵盤 ~NT600, 我是拿手邊羅技Unifying鍵盤/滑鼠。)
- Micro SD卡 >16GB
  - (32GB SD卡 ~NT400)


作業系統我的選擇並非常見的`Respbian`，而是刷上「KANO」公司為他們販賣的套件提供的 [KANO OS](http://developers.kano.me/downloads/)。KANO OS作業系統與相關設備的說明書都有提供自由下載使用。

## 組裝

由於Raspberry Pi把組裝電腦時複雜的部份都簡化了，組裝起來非常簡單，即使是國小小朋友也能順利完成。

- 將Micro SD記憶卡插入Raspberry Pi (對低年級小朋友來說插卡的動作太精細了，可以先幫忙做)
- 插上鍵盤/滑鼠用的USB接收器
- 接上Micro USB與電源
- 將HDMI線接到螢幕上

最後連接好的架構大概是這樣：

{% mermaid %}
graph TD
pi[Raspberry Pi] --HDMI-->S[螢幕]
K[鍵盤] -- USB --> pi
M[滑鼠] -- USB --> pi
p((電源)) -- MicroUSB --- pi
pi --> v[喇叭]
m[記憶卡] -.- pi
{% endmermaid %}

## 上手體驗

雖然手邊還沒有合用的觸控螢幕可試，但試用感覺 KANO OS 介面很親和。從插上記憶卡，接上Micro USB初次開機開始，KANO OS將整個OS的啟動流程，變成了一段難忘的遊戲過程。

除了Raspbian中也有附的 Minecraft 等遊戲和各種教育應用，KANO OS還提供了一套將電腦教學與各種小遊戲/程式整合成的像素RPG。

使用者初次進入地是在SD沙灘(SD Beach)，在電腦設備化成的地圖中行走，進入向量村（Vector Village），乙太港(Port Ether)，蟒蛇叢林(Python Jungle)等地，探索電腦世界的奧秘。

在SD沙灘上，馬上可以玩到`PONG`這個在電子遊戲歷史中，也具有非凡意義的經典遊戲。

走到向量村則是玩`Make Art`遊戲，可以用鍵盤輸入程式命令來繪圖。KANO近期特別活動是畫骷髏頭(Skull)等萬聖節相關圖案，整個過程都可照著一個步驟一個步驟輸入的提示進行，相當友善。

到了蟒蛇叢林，則是從`使用命令行`開始玩起。透過輸入`python snake`命令來啟動文字版貪食蛇遊戲：透過在輸入命令時加入一些參數來調整遊戲設定，使用者可以在遊玩過程中學到命令行的用法，非常地高竿。

我在整個陪伴孩子使用的過程中，感覺就算大人玩起來，內容也相當豐富而有趣。KANO OS做到了讓使用電腦充滿樂趣。非常推薦刷來試試，比起Respbian，更適合入門人群與日常使用（缺點是沒中文介面）


## 其他心得

如果和我一樣是羅技鍵盤/滑鼠，但是是分別購買的，其實有方法不需要在機器上插兩個Unifying接收器。只要到羅技網站下載[Unifying軟體](https://support.logitech.com/zh_tw/software/unifying)到你常用的作業系統上，安裝後即可設定鍵盤/滑鼠共用同個Unifying接收器，設定完成後，將這個Unifying接收器插到Raspberry Pi上後開機，Raspberry Pi也可以認得你的鍵盤/滑鼠。
