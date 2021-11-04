---
title: 網路模擬 Scenario
tags:
  - NS2
  - TurboGears
date: 2005-05-12 03:23:05
---

說到網路模擬, 大家在試過各種模擬網路工具之後, 都會覺得模擬網路比起實際架設其實並不是容易的事情,

網路模擬 Scenario 主要都是由4個部分構成: 點, 線, 面, 時間

因為網路通訊本身就由Physical/MAC, IP, Network, Application 等層構成,
就 Physical/MAC 來簡分就有無線, 有線之別, IP, Network層裡又有多樣的協定,
總合起來先天網路通訊本模擬上就有極高的複雜度.

先由網路模擬 Scenario來說.
 在 ns2 上是在tcl檔中定義, 在omnet++上是在ned檔與omnetpp.ini檔中定義