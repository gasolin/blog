---
title: NS2 無線模擬
tags:
  - NS2
  - TurboGears
date: 2005-05-12 03:22:30
---

Digest from [here](http://www.isi.edu/nsnam/ns/tutorial/nsscript6.html) :

In a mixed simulation involving wired and wireless nodes its necessary :
 1\. to turn on hierarchical routing
 2\. to create separate domains for wired and wireless nodes. There may be multiple wired and wireless domains to simulate multiple networks.
 3\. to have one base-station node in every wireless domain, thru which the wireless nodes may communicate with nodes outside their domain.

we need to use hierarchical routing in order to route packets between wireless and wired domains
* the routing information for wired nodes are based on connectivity of the topology
* use base-stations which act as gateways between wired and wireless domains

#Number of domains in this topology is 2 (one for the wired nodes and one for the wireless)
AddrParams set domain_num_ 2

#Number of clusters in each of these domains
#which indicates the first domain (wired) to have 1 clusters and
#the second (wireless) to have 5 cluster.
AddrParams set cluster_num_ {1 5}

#the number of nodes in each of these clusters
AddrParams set nodes_num_ {1 1 3 1 1 1}

心得: 
在 mobiwan 中, bs 可以當 rt 用,
因此 bs 也有路由功能

每個bs 都可以當 HA, 因此 mobiwan裡不必指定HA,
mobile attach 上的那個點就自動做 HA.

所以 set mobile_ [create-mobile 1.4.1 1.4.0 1000 200 0 0 0.01]
表示 mobile 會把 1.4.0 這節點當作 HA

create-mobile 來自 proc-mipv6-config.tcl
啟動 def_mobile_config 來處理

base-station:
create-base-station
啟動 def_bs_config 來處理
讓bs可以處理wired&wireless的重點是
#have wired routing mechanism turned on
 -wiredRouting ON
開啟 MIPv6 功能
-mipv6 ON

router: def_transit_config
-mipv6 ON
-mipagent CN

NS2 上的 RO 即是把 CN 當作 HA, 接收 BU, 然後作 tunnel
欲啟動 RO , 則在檔案最前頭宣告:
Agent/MIPv6/MN set rt_opti_     1       ; # 0 if routing optimization OFF