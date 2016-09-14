---
title: 6th. day of porting INET6  第六天
tags:
  - OMNET++
date: 2005-04-05 10:24:06
---

11th. Part:
IPv4d/IPProcessing 模組功能等同 IPv4/IP 模組

因此 IPv4 資料夾即已實作 IPv4 協定
IPv4d 資料夾內程式則是將IP模組內容拆開成多個子模組,
以此推論, 若模擬的目標是 IP 協定運作情形,
單單只看到 IP 模組並不能滿足要求時,
則將 Nodes/INET/ 各 .ned 檔中的"IP" 改成"IPProcessing"應該
就可以看到更詳細的 IP 協定運作情形. 建議名稱: Routerd / Router6d?

節點先做 Nodes/INET6/BurstHost6 與 Router6, StandardHost6 稍後再處理

* 要寫自行設定模組的 Tutorial

12th. Part:
INET比 NS2 好的特色:
FlatNetworkConfigurator,
只需指定網域/遮罩,
INET 即自動配置各節點模擬用的位址.

* 要研究 AutoRouting 中 FlatNetworkConfigurator 的做法
(怎麼與 ND 互補? (有 ND 那 FlatNetworkConfigurator 就不應作用於'*Host'上) ex:
* 決定 Prefix/Prefix Lenth(Subnetmask),
* 設定啟不啟動 DAD 等)

Neighbor Discovery vs ARP
IPv6d/ND 將作為一個模組來對應 NetworkInterfaces/ARP

IP protocol header is represented by the IPDatagram message class