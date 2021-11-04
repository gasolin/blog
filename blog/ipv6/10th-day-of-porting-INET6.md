---
title: 10th day of porting INET6
tags:
  - OMNET++
date: 2005-05-12 03:21:40
---

18th. Part:
NetworkLayer6.ned:
disable OSPF, RSVP
原 protocolMapping = "6:0,17:1,1:2,2:3,46:4,89:5"; 
表示 TCP(6):0, UDP(17):1, ICMP(1):2, IGMP(2):3, RSVP(46):4, OSPF(89):5
考慮到保證將來 DualStack 相容性, 因此不更改原對應數字, 而從後面再繼續補加.

暫時補加
ICMPv6(58):2, ROUTING(43), MOBILITY(135)
protocolMapping 後添上 58:6,43:7,135:8

* 應再找資料確認 Neighbor Discovery -- ND 模組是否應包含在 ICMPv6 模組裡

19th. Part:
照著 Winodws 步驟, 以 TicToc10 為基礎編譯.
OMNET++/Sample/INET6Test:
修改 IP6Datagram.msg 以通過 compiler.

這次是針對"模擬"來做修正:

* 因為 20 bits 不好宣告(RFC 中是連 version, Traffic Class 一同宣告在一起), 
因此 flow label 欄位訂的較 RFC 小 (20->16) 
(反正沒在用, 應該沒什麼關係)
* 在訂 IPv6 options message struct 時, Padding 不加似乎也沒關係
* IP6FRAGMENT identification 欄位訂的較 RFC 小 (32->16) 

目前採用方式-> 全改用 int , short, long 來宣告, 皆遠大於所需位元數