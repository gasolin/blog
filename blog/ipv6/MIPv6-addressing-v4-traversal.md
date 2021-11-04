---
title: MIPv6 addressing v4 traversal
tags: []
date: 2006-11-08 05:37:10
---

根據[這封](http://www1.ietf.org/mail-archive/web/nemo/current/msg02525.html)信件所言, IETF 上 又將出現一個新的 Working Group.
這篇是他們的 Design team 在 NEMO WG 上的宣告.

這個 WG 的起因來自於 Edouard LASNIER REDDAN一封雷諾車廠研發 MIPv6 Car 成果的[信件](http://www1.ietf.org/mail-archive/web/nemo/current/msg02524.html).
信中說明在大環境使用 IPv4 的環境下在車輛中使用 MIPv6 的車子已經被開發出來了(用的可能就是 Mobile Router),
需要解決的問題除了透過轉換透通機制在純IPv4網域取得HA address外, 還有就是從車廠的角度看, HA不能被通信商把持的問題.

MIPv6 addressing v4 traversal看起來很值得研究,
而HA 不能被通信商把持的問題感覺似乎在未來可以用來加持我的 NEMO-DHA 架構.可惜跟現在我的論文主題方向還是有些差別....

為了更容易了解這封信的價值..我把雷諾車廠信內提到的主題內容也整理成了投影片大綱了附在[前一篇](http://inet6.blogspot.com/2005/06/requirement-of-car-manufacturer-for.html)中

MIPv6 &amp; traversal/Tunnel 應該將會是蠻熱的題材吧, 要求的背景知識也很高,
可惜是實驗室目前要做這題材的話也等於找人重新開始學了,
從讀 traversal/Tunnel mechanism, 想idea, 到準備模擬工具,
跟其他 lab 比起來已經沒什麼優勢了......殘念

我想也大概不會有人想做(碩士班做的話從頭學再用功大概2年內對這主題也不可能做出好東西, 除非請博班帶著大家分著做), 只是講講有這東西而已.

要我繼續留下來是辦不到的, 可惜了這麼棒的東西卻不能自己做....
