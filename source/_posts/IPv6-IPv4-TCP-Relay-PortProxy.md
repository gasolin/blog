---
title: IPv6-IPv4 TCP Relay & PortProxy
tags:
  - IPv6
date: 2006-07-28 13:41:40
---

在看 [ブロードバンドルータ(CG-BARPRO6)によるOCN IPv6接続 ](http://ipv6.blog.ocn.ne.jp/ipv6/2006/06/cgbarpro6ocn_ip_62af.html)這篇文章時,
發現回覆中提到很可惜沒支援 "v6-v4 TCP Relay" 這功能.

IPv6-IPv4 TCP Relay 到底是什麼呢?

上網查了一查, 原來就是一種 BIS(Bump In Stack) 的應用, 讓 IPv4 Only的程式可以透過 Port Mapping 來存取 IPv6 網路.

例如回覆中提到一台僅支援 IPv4 的網路電視機器, 因為區網內使用私有地址的關係, 需要在外部建一台 Virtual Server 才能在各地存取網路電視這資源.
如果 Router 能支援 "IPv6-IPv4 TCP Relay", 我們就能在外部使用 IPv6 位址存取網路電視了!

想起來就很讚, 做起來.......:-D

參考：
[介面 Portproxy 的 Netsh 命令](http://www.microsoft.com/technet/prodtechnol/windowsserver2003/zh-cht/library/ServerHelp/2e145188-ce7e-4556-8540-abd9e7feb46c.mspx?mfr=true)