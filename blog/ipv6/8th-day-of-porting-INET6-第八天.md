---
title: 8th. day of porting INET6 第八天
tags:
  - OMNET++
date: 2005-05-12 03:17:23
---

15th Part:

模組組成
- PING6, TraceRoute6
- UDP6
---------
IP6
- ICMP6
- ND (replace ARP)
-- future --
- MLD
- IPSEC
----------

封包處理流程:
收到封包->判斷是給自己或給別人的封包(Deliver locally/Addressed to another node)
If給別人->Look up routing table ->轉送封包到對應介面上(identified interface)

16th Part:
位址格式:

*   unicast
*   link-local
*   multicast
*   IPv4-compatible address 評估: flatconfigurator6 是否可以先使用IPv4-compatible address 的方式設定?

Addressing format(參考 Smartbit-smartflow):

*   Full hexadecimal
*   No leading zero (前面的0省略)
*   Compact(最簡化ex: 2001::1)
*   Mixed (最後四碼接IPv4位址 ex: 2001::192.168.0.1)