---
title: scapy
tags:
  - python
  - network
date: 2008-08-08 01:32:31
---

[scapy](http://trac.secdev.org/scapy) 是個相當好用的封包產生工具,
只是因為有幾個用到的函式庫需要手動尋找並安裝, 還蠻不方便的.
Windows 下使用的限制更多.

[scapy](http://trac.secdev.org/scapy) 雖然只有一個檔案卻可以產生各種 Layer 2 以上的封包.
封包中有用到時會自行填入mac, ip, checksum 等訊息, 實在太省事了.
[scapy](http://trac.secdev.org/scapy) 允許自訂封包欄位來設計自己的協定, 或改變封包的內容.
裝上一些圖形處理函式庫後還可以輸出 protocol 欄位圖形等等.

在此列出需求函式庫的連結. (Mac 環境下需安裝)

pcap
http://code.google.com/p/pypcap/
libdnet
http://sourceforge.net/projects/libdnet/

gnuplot
http://sourceforge.net/projects/gnuplot/
gnuplot-py
http://sourceforge.net/projects/gnuplot-py/
pyx
http://sourceforge.net/projects/pyx/