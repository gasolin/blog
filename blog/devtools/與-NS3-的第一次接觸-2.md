---
title: 與 NS3 的第一次接觸-2
tags:
  - NS3
date: 2007-06-19 14:04:51
---

[前篇](http://inet6.blogspot.com/2007/06/ns3.html) 中提到模擬程式跑完會產生 trace  (.tr)檔. 這幾天再仔細看了一下, 模擬程式跑完竟然也會產生 .pcap 檔!

pcap 封包檔案是用來紀錄網路封包的格式. 這個檔案格式可以使用 tcpdump 或是圖形介面的 wireshark 等工具開啟, 從除錯的角度上來看, 因為有一些現成封包分析工具可用來分析 pcap 封包檔, 因此比起 .tr 檔更容易分析. 對熟悉網路開發的人來說,  pcap 讓人有從真實網路抓封包的錯覺 :D

一打開 pcap 封包, NS-3 目前的優缺點就無所遁形:

優點:

1\. 封包格式參照真實封包定義, 擴充性佳

缺點:

1\. 封包目前只支援 IP, UDP, 沒有 mac 層支援
2\. 沒計算 checksum (計較起來這其實不算缺點, 沒有那個做網路模擬的還真的去算 checksum)

另外 NS-3 還比較差的一點是目前的拓樸描述還蠻醜的, 宣告一個網路節點會用到這種鬼語法:

> Ptr[node] n0 = Create[internetnode] ();相對8月中預計發佈的 3.0.5 版中可使用的 Python script 版本宣告則是:
> n0 = ns.MakeInterNetNode()同樣的 simple-p2p 拓樸, Python 版的可能是因為加入較少與實做相關的 code 所以比較好理解.
擁有較好可讀性的 Python script 應該是個學習網路模擬的好幫手 :D