---
title: INET6 Project
tags:
  - OMNET++
date: 2005-03-03 12:59:55
---

動機:
由於自己論文的模擬需求, 嘗試了許多網路模擬工具, 包括 OPNET, NS2, OMNET++ 等.
試用後發現 OPNET 架構完備, 然而複雜度過高, 因授權關係使用上亦受到重重限制.
NS2 使用免費, 牌子老又擁有不可忽視的模組群, 然而OTCL與 C 之間模組關係處理複雜, 模組使用時還必需與版本配合, 毫無可攜性.
而 OMNET++ 具有許多 NS2 沒有的優點, 例如是物件導向式的模擬工具. 跨平台通用, 使用C++語言撰寫.
在網路模擬上目前則提供了 INET, Mobility Framework, IPv6Suite 等網路模擬模組.
Mobility Framework 是一個相似於 NS2 的網路模擬模組, 提供樣版檔案, 讓使用者從 Mac 層至 Application 層自行挑選, 組合出所需的網路.
而 INET 是三者中支援OSI七層最完整的網路模擬模組, 使用上也最為簡便. 然而目前並不支援 IPv6 與 IP Mobility.
IPv6Suite 提供 IPv6, IPv4, MIPv6 等的模擬, , 功能最為強大.
然而問題頗多, 由於綁定太過額外模組, 僅限於 Linux 平台, 也不容易修改,
在網路模擬上具有分層不夠清楚, 安裝不夠簡單, 文件不夠友善等缺點.
因此一個主要目的以 INET 模組為基礎, 依據 INET 網路分層, 並以 IPv6Suite 為參考,
使 INET 支援 IPv6 的 INET6 計畫於焉成型

INET6 計畫包含
* IPv6 模組程式
* nedDoc 模組程式碼生成文件
* 安裝步驟
* 導覽 Tutorial
* 模擬寫作指引

未來計畫:
* MIPv6 模組程式 (待 Mobility Framework 整合後繼續開發)
* NEMO 模組程式
* DualStack 模組程式

本計畫發展穩定後, 最終將合併入 INET 模組中, 提供OMNET++平台上完整的網路模擬環境.