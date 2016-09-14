---
title: IPv6 Programming in 5 minutes
tags:
  - IPv6
date: 2005-06-13 14:58:30
---

[<span class="title">IPv6 Programming in 5 minutes</span>](http://www.ipv6style.jp/en/apps/20030617/index.shtml) in IPv6Style

Use DNS record to check <span class="semi_title">dual stack:
</span> 

1.  Try accessing the IPv6 address written in the AAAA record.

2.  If an attempt to connect using IPv6 fails, try accessing the IPv4 address  written in the A record. Use address family independent function: getaddrinfo()