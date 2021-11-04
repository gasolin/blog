---
title: NS2 無線模擬結果 Trace 檔分析
tags:
  - NS2
date: 2005-05-12 03:20:48
---

新 r 33.908773621 _3_ MAC  --- 334 mipv6_bu 70 [13a 1 4 800] ------- [4196353:0 0:0 32 4198400]
舊 s -t 1.000075000 -Hs 22 -Hd 2147483647 -Ni 22 -Nx 100.00 -Ny 2200.00 -Nz 0.00 -Ne -1.000000 -Nl MAC -Nw --- -Ma 0 -Md ffffffff -Ms 14 -Mt 800 -Is 4222977.0 -Id 2147483647.0 -It ipv6_sol -Il 100 -If 0 -Ii 1 -Iv 255

欄位: event type 事件類型)

有四種基本事件類型

- s: send (傳送)
- r: receive(接收)
- d:drop(丟棄)
- f: forward(轉送)

還有一種特別類型

- m: move (移動)

欄位2: general flag

-t: time (時間)

欄位
3: Next hop info (下一站的資訊)

-Hs: id for this node
-Hd: id for next hop towards the destination

欄位4: Node property type tag (節點屬性類型標籤

-Ni: node id(節點ID)
-Nx –Ny -Nz: node s x/y/z coordinate (節點x/y/z的座標位置)
-Ne: node energy level
-Nl: trace level, such as AGT, RTR, MAC
-Nw: reason for the event (事件發生原因)

欄位5: packet info at MAC level (封包在Mac層的資訊)

-Ma: duration
-Md: dest’s ethernet address
-Ms: src’s ethernet address
-Mt: ethernet type

欄位6: Packet information at IP level (封包在IP層的資訊)

-Is: source address. Source port number (來源位置，a.b其中a為節點 ID, b為埠號
-Id: dest address.dest port number (目的位置)
-It: packet type (封包類型)
-Il: packet size (封包大小)
-If: flow id (資料流 ID)
-Ii: unique id (唯一的ID編號)
-Iv: ttl value (Time To Live的值)

欄位7:
封包在應用層的資訊。

包含的應用程式類型如 arp, tcp 或者是adhoc路由協定, 這個欄位都是以P所開頭的，
且標籤為隨著應用程式不同而不同

Trace 檔分析:

Packet Loss 數量計算:
不考慮 Out-of-Order 情況時, Packet Loss 數量的計算方法最簡單, 每一個封包在傳送端發送前，傳送端都會給封包一個序號，序號是連續性的，因此若是在接收到發現序號有不連續的發生，則可視為有封包的移失。

OWD&IPDV計算:
最重要的欄位是 Sending Time(傳送時間)和Sequence Number(封包序號), 可以用來計算出 One Way Delay (OWD)和 IP Delay Variance (IPDV，或是 Jitter)。

**One Way Delay = 接收時間 – 傳送時間**

**IPDV = |目前量測到的OWD - 上一次量測到的OWD|**


## Reference:
http://140.116.72.80/~smallko/ns2/wireless1.htm
http://www.k-lug.org/~griswold/NS2/ns2-trace-formats.html
http://www.ee.surrey.ac.uk/Personal/L.Wood/ns/
