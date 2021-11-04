---
title: IPv6 Programming in 5 minutes
tags:
  - IPv6
date: 2005-06-13 14:58:30
---

[IPv6 Programming in 5 minutes](http://www.ipv6style.jp/en/apps/20030617/index.shtml) in IPv6Style

Use DNS record to check dual stack:

1.  Try accessing the IPv6 address written in the AAAA record.

2.  If an attempt to connect using IPv6 fails, try accessing the IPv4 address  written in the A record. Use address family independent function: getaddrinfo()
