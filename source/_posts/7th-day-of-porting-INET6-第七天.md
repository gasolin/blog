---
title: 7th. day of porting INET6 第七天
tags:
  - OMNET++
date: 2005-05-12 03:16:56
---

13th. Part:
看 [RFC3493](http://rfc-editor.org/rfc/rfc3493.txt) 與 [RFC 2542](http://rfc-editor.org/rfc/rfc3542.txt)
一邊處理 IP6Address.h 位址格式設定的問題.

原本 IPAddress
內部結構是 unsigned char addr[4];
用來儲存 32bits IP 位址
改成 IP6Address 後,
內部結構要儲存128 bits IPv6 位址, 因此改成
uint8_t  s6_addr[16];

取消輸入值或回傳值為 int 型態的函數, 因為與 IPv6 位址表示方式不符,
這部分需弄更清楚後再作加強.

14th. Part:
聯想:

猜測OMNET++ 中的 IPControInfo 應該就是  RFC 中的 sockaddr_in ,
是用來與上層協定溝通的資料結構.

* IP模組改變對上層 (APP , UDP) 影響研究
* 雖然已經有 NedDoc 和 Class relation Diagram 來表現模組跟類別的關係,
但要改模組時還是會困惑於各檔案用途還有互相間的關係.
想嘗試使用心智圖 (Mind Map) 來描繪實際檔案關係
http://web.hku.hk/~jwilam/PCEd_FT_2003_IT/mappingware.htm
http://www.donews.net/zminjiao/archive/2004/11/12/167474.aspx
查詢結果: "FreeMind有個很好的功能是根據目錄創建文件，也就是可以根據某個目錄下的文件結構來直接生成一個 MindMap" 這功能正好可用上 :)

該詢問INET Wireless 模組部分的進度
The routing information for wired nodes are based on connectivity of the topology, i.e how are nodes connected to one another through Links.
This connectivity information is used to populate the forwarding tables in each wired node., however wireless nodes have no concept of "links".

Inorder to exchange pkts among these wired and wireless nodes, Base-stations(BS) is introduced to act as gateways between the two domains.

porting 學長模組時,
發現 OPNET/NS2 (Mobiwan2) 共同的缺點是模組用太多簡寫,
讓人剛開始沒有辦法一看就很清楚這模組的作用......
若能減少花在辨認簡寫上的時間,
使用者可以更容易明瞭各模組的作用,
也能更容易去使用它們.