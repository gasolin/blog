---
title: 16.1. 使用 netfilter6 作防火牆
tags:
  - IPv6
date: 2005-03-27 00:26:02
---

IPv6 原生防火牆僅 Linux 核心 2.4 版以上才有支援. 在較舊的 2.2 版以下你只能透過協定 41過濾IPv6-in-IPv4 封包. 

注意: 以下敘述的規則或範例不一定能真正保護你的系統! 本書對此不負任何責任    

在安裝後測試你的規則設定, 可參照 [Section 17.3](http://www.tldp.org/HOWTO/Linux+IPv6-HOWTO/ipv6-security-auditing.html) .   

注意USAGI 專案正在處理IPv6結束連線追蹤問題! 如此將可讓安全規則設定更加容易且更安全!

## 16.1.1\. 更多資訊

*   [Netfilter project](http://www.netfilter.org/)
*   [maillist archive of netfilter users](http://lists.samba.org/pipermail/netfilter/)
*   [maillist archive of netfilter developers](http://lists.samba.org/pipermail/netfilter-devel/)
*   [Unofficial status informations](http://www.bieringer.de/linux/IPv6/status/IPv6+Linux-status-kernel.html#netfilter6)
