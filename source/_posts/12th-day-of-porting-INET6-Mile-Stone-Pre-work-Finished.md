---
title: '12th. day of porting INET6 (Mile Stone: Pre-work Finished)'
tags:
  - IPv6
  - OMNET++
date: 2005-05-12 03:23:24
---

22th. Part:
修改IPControlInfo.msg:
協定對應改成 IP6NextHeaderFieldId

檢討: 在修改一陣子模組之後, 對整個架構更了解的同時, 
也更了解修改整個IP協定的難度.
因為了解, 而越來越缺少每個部分改好兜起來就能跑的自信.

所以檢討了現在 porting 的方法, 歸納出下面幾條新的 porting 步驟:

第一階段: 多方嘗試 (完成)
1\. 初步對各主要模組了解, trace code 同時並做初步 porting.
2\. 儲存當前 porting slices 成果

第二階段: 系統化調試
1\. 一切修改都應該先以能執行, 能隨時觀察模擬流程為目標. 
(每次修改都能編出可用的快照檔(snapshot))
2\. 將 IP 相關模組複製一份, 編譯, 確定可用的新增協定方式
3\. 階段修改
  2\. 修改 Mac 層加入訊息
  3\. 修改 IPDatagram.msg 新增協定
  4\. 修改協定訊息
  5\. 修改各 Class 名稱
  6\. 實際修改 Class 
  7\. 路由表位址, 位址解譯, flatconfigurator

第三階段: 新增功能
1\. Neighbor Discovery
(Major Option). MIPv6 & NEMO (After Wireless Support)
2\. DualStack
3\. Extension Header Proccessing
4\. RSVP, Multicast