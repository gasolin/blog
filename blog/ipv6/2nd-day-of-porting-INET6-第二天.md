---
title: 2nd. day of porting INET6 第二天
tags:
  - OMNET++
date: 2005-03-06 22:14:32
---

3rd. Part:

再次瀏覽 INET 目錄, 評估應該增修的檔案:
初步規劃大致如下:

+ Network/IPv6     //.ned, .msg 資源檔, IP6 實作
+ Network/IPv6d  //IP6 分模組實作
+ Network/Autorouting/FlatNetworkConfigurator6.ned  //模擬用位址自動設定
+ Nodes/INET6     //組合模組成為節點
+ Applications/PingApp6

這時又發現了 INET 的一個好處: 模組所包含的目錄大致與 TCP/IP 架構分層符合,
對熟悉網路的我來說, 很容易找到應該增修檔案的位址.

順便規劃 DualStack, 但暫時不做, 原因如 Day1 2nd. Part:
+ Network/DualStack
+ Network/Autorouting/FlatNetworkConfiguratorDS.ned
+ Nodes/DualStack
應用層不必修改.

做 DualStack 的話還會另外引入 6to4 等 transition/tunnel 模組,
工作量會遠遠比目前列出的 DualStack所需修改內容多上許多,
且現在自己還不具備白手疊床架屋的能力.
因此先弄好 IPv6 部分的 porting 才是最重要的.

昨天思考 ICMPv6 3個模組部分, 決定分拆成多個 simplemodule,
在 NetworkLayer6 裡再進行合作.

4th. Part:
編輯 Network/IPv6/IPv6.ned:

IPControlInfo:
When IPv6 sends up a packet to a higher layer protocol, it will also attach an IP6ControlInfo to the packet, with the source and destination IPv6 address

*   與上層溝通的訊息, 若名稱不改的話. 以後做 DualStack 從上層傳下來的封包會否出問題?
*   另外弄個小 script 來判斷位址長度是否比改名造成的後果來的容易?
When delivering packets to higher-layer protocols, the output gate is determined from the Protocol field in the IPv6 header. The protocol-to-gateindex mapping must be given in the protocolMapping string parameter

*   protocolMapping 應該被 NextHeader 或延伸標頭分析取代
routing table 儲存在 RoutingTable6 模組裡.
if the route entry contained a next hop address, it will be passed to the interface in the attached IPRoutingDecision.