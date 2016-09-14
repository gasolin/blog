---
title: '1st. Day of porting INET6 第一天: 從RFC2463開始'
tags:
  - OMNET++
date: 2005-03-06 22:16:52
---

這系列文章僅記錄過程, 目的是從紀錄中看到自己對的 ipv6 了解, 對做事方法的改進.
不總結經驗. 因為一但總結經驗就會陷入長段撰寫文件的誤區. 而且在現在階段, 甚至不能確定此專案能否成功. 希望我能有寫出總結經驗文章來的一天吧:)

1st. Part:
第一步先從ICMPv6開始著手 Porting.
在熟悉INET目錄規劃後, 首先是根據INET目錄規則來建立INET專案所應用到的目錄,
剛開始在Network目錄下先建立IPv6與IPv6d兩個目錄. 並在Nodes目錄下建立INET6目錄.

從 IETF [RFC列表](http://www.ietf.org/iesg/1rfc_index.txt) 中挖出了 RFC 2463, Internet Control Message Protocol (ICMPv6) for the Internet Protocol Version 6 (IPv6) Specification, 依此為憑開始 porting.

編輯 Network/IPv6/ICMPv6.ned
參照[ IPv6Suite](http://ctieware.eng.monash.edu.au/twiki/bin/view/Simulation/IPv6Suite), 從 IPv6Suite/IP/IPv6/Generic 目錄下的 ICMPv6.ned. 觀察它的 ICMPv6 模組組成.
發現該模組與INET的ICMP.ned大不相同, 是由 IPv6Core, Neighbourdiscovery, ICMPv6Combine, 還有 MLD (multicast) 模組組成的複合模組.
MLD模組在剛開始 porting 時可以忽略暫時不處理. 剩下的三塊中...應不應分拆成三個檔案三個simplemodule? , 是否要使用到 ICMPv6Combine 這塊呢? 我馬上陷入了第一個難題中.

2nd. Part:
告解式除錯(Confessional Debug): 為何不先弄好IP header呢? 這絕對是問題.
還好意識到這件事情的時間點還算早. 更堅定了我"只有邊寫邊紀錄才能意識到自己的錯誤"的想法, 因此接下來應先搜尋 IP header 定義的部分, 從這裡開始作修改.

暫時將 DualStack 放到一邊, 完成純 IPv6 Support 的模組後再考慮 DualStack.
但一定會將之排入計畫裡.
因為雖然 DualStack 對我的論文模擬來說重要性不大,
但在實際工作上將會遇到. porting 過一遍心裡會先有點底, 相信多少有些助益.