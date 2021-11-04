---
title: 4th. day of porting INET6 第四天
tags:
  - OMNET++
date: 2005-03-27 00:31:37
---

7th Part:
為了對將來開發好的程式進行測試, 新增目錄
INET/Tests/IPv6
同時也發現原本 INET 程式的測試數量明顯不足, 但還好結果不差.

發現 Firebird 的 scratchbook extension 可以編輯已截取的網頁文件, 可以在原文件上畫重點並加上註解,
我想應該充分將這個特點利用在 INET 與 IPv6Suite 線上文件注釋上.

8th. Part:
分析 Mobiwan2 架構, 並與學長留下的舊版程式碼作比對.
為此使用 [WinMerge](http://sourceforge.net/projects/winmerge/) 程式來協助版本比對的工作.

OMNET++ INET 與 NS2 的比較:
目錄名: INET mobiwan
架構: 按照 TCP/IP 作分層目錄 / 平行資料夾目錄
相依性: 放到 OMNET++ 3.0以上版本目錄下, 依照 Readme 即可安裝 / 需 Patch 特定版本的 NS2

Mobiwan 新舊檔案比較
檔案: 新 / 舊
ipv6.cc, ipv6.h:
Network --> NetworkAgent

ipv6.cc - line 416
r line 497:
hdr_ipinip **ppinhdr = (hdr_ipinip **)p->access(off_ipinip_); 改成:
hdr_ipinip **ppinhdr = (hdr_ipinip **)hdr_ipinip::access(p);

mipv6.cc  大修改
mipv6.h: Binding訊息 , Mobile IPv6 Base Agent, Mobile IPv6 Node

ipv6routing.h, classifer-src.h 完全相同

tcl/lib 2.27 版多了很多檔案, 包含2.1b1版所有檔案. 尚不知是否會造成什麼影響