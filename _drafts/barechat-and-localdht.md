---
title: 網際網路斷了也要上網聊天！談談數位韌性
tags:
  - network
  - P2P
  - holepunch
# date: 2025-02-17 11:40:31
---

### 實際應用：使用 BareChat 聊天室

現在，我們來試著用 [BareChat](https://github.com/gasolin/barechat) 這個聊天軟體，看看它是怎麼利用 DHT 網路來啟動 P2P 連線的。

如果你已經安裝了 NodeJs，在命令行執行 `npx barechat` 命令就可以自動下載並執行 BareChat。

```
> npx barechat a1b2c35fbeb452bc900c5a1c00306e52319a3159317312f54fe5a246d634f51a
[info] Joined chat room a1b2c35fbeb452bc900c5a1c00306e52319a3159317312f54fe5a246d634f51a
```

在另一台電腦上也輸入一樣的命令，因為兩邊輸入了相同的號碼（雜湊碼），所以可以連到同一個聊天室互相對話。

### 網際網路斷了也能聊天嗎？

當你在家裡用 BareChat 聊天，你可以這樣做：

設定一個 DHT 節點作為「啟動點」：
你可以讓家裡的一台電腦（比如你的筆電）先成為一個 DHT 節點，作為大家加入這個「分散式電話簿」的起始點。

Bash

npx hyperdht --bootstrap --host [你的電腦IP位址] --port 55688
這行指令的意思是：

npx hyperdht：啟動一個 DHT 網路的程式。
--bootstrap：告訴它，它是一個「啟動點」，新的電腦可以先連它。
--host [你的電腦IP位址]：設定這個 DHT 節點的網路地址（IP 位址，例如：192.168.0.123）。
--port 55688：設定一個通訊的「門牌號碼」（Port），讓大家知道要從這個門進來。
你的朋友用 BareChat 連接：
現在，你的朋友小明想跟你聊天。他啟動 BareChat 時，就需要告訴 BareChat 你電腦的地址（作為 DHT 的啟動點），這樣他才能找到你。

Bash

npx barechat --bootstrap=192.168.0.123:55688
這行指令的意思是：

npx barechat：啟動 BareChat 聊天程式。
--bootstrap=192.168.0.123:55688：告訴 BareChat，它應該先去連線你電腦上的那個 DHT 節點 (192.168.0.123:55688)，這樣它就能開始找到分散式電話簿中的其他朋友，包括你。
這樣，BareChat 就會利用你的電腦作為 DHT 的「入門點」，小明透過這個入門點進入了你家的「分散式電話簿」網路。一旦你們都加入了這個 DHT 網路，BareChat 就能利用 DHT 找到彼此的 IP 位址，然後建立直接的 P2P 連線，開始你們的聊天！

### BareChat 聊天室如何運作？

BareChat 就像一個「**沒有中央伺服器的聊天室**」，它沒有一個像 LINE 或 Messenger 的總部來幫大家管理帳號與聊天內容，所以你需要透過 DHT 來找到你的朋友。

BareChat 和 Keet 使用相同的 [Hyperdht](https://github.com/holepunchto/hyperdht) 這套 DHT 協定，與建構在其上的 [Hyperswarm](https://github.com/holepunchto/hyperswarm) 這套協定工具。透過 Hyperswarm 協定，只要提供一個主題碼（雜湊碼）給 BareChat，就能與其他關注同一個主題碼的其他機器互相連接，開始聊天。聊天過程中不需要再連上 DHT。
