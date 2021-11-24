---
title: 聊天機器人一份，不加咖啡
tags:
  - javascript
  - chatbot
date: 2016-08-25 01:55:50
---

[![](https://3.bp.blogspot.com/-3vup0pGDk6g/V75MUn5HqWI/AAAAAAAAEO8/Uv_Lecp99y0JNUZD090iVyxi-g92-fXJwCLcB/s640/2016-08-25%2B09-33-23%2B%25E7%259A%2584%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%259C%2596.png)](https://3.bp.blogspot.com/-3vup0pGDk6g/V75MUn5HqWI/AAAAAAAAEO8/Uv_Lecp99y0JNUZD090iVyxi-g92-fXJwCLcB/s1600/2016-08-25%2B09-33-23%2B%25E7%259A%2584%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%259C%2596.png)

「聊天機器人一份，不加咖啡」是今年在 Coscup 2016 分享的講題，[投影片在此](https://hackmd.io/p/HJ7dfgVc#/)。
內容包含介紹聊天機器人與 [Hubot](https://github.com/github/hubot)，轉換Coffeescript到ES6，與移植經驗總結。

<iframe src="https://hackmd.io/p/HJ7dfgVc#/" height="400px" width="600px" align="center"></iframe>

[Webbybot](https://github.com/gasolin/webbybot) 是我們將 Hubot 完全移植到 ES6 的成果。在準備這場演講時，有鑑於Server Side聊天機器人設定上還是稍嫌複雜，於是我參考 Hubot 架構，做了原始版本只有80行的網頁端聊天機器人。除了支援聊天機器人基本功能外，同時也支援擴充腳本(plugin)與擴充功能(addon)。由於參考了Hubot架構，於是命名時就取了[**Sai**hubot](https://gasolin.github.io/saihubot/) 這個既包含 Hubot，又有濃濃台味的名稱（SaiHu 即台語的「師傅」）。

這次活動官方有提供 LINE 版的聊天機器人。我在活動早上花幾小時基於 Saihubot　做了　[Coscup 2016網頁版機器人](https://gasolin.github.io/cosbot/)，可以上去玩玩。

<iframe src="https://gasolin.github.io/cosbot/" height="400px" width="600px" align="center"></iframe>

要做一個自己的網頁聊天機器人，只須在 github 上 fork 專案，然後就可以直接在 Github 上編輯，修改後的結果直接反應到 https://[your name].github.io/saihubot 網站上。修改極端容易，畢竟核心只有不到100行，對聊天機器人有點興趣的人可以照著上述說明試試，看看原始碼，當然若能送個 Issue 或 Pull Request，這場「扎根」議程達到的效果就最好了。
