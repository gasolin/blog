---
title: FreeBSD TCP/IP-Stack to OMNeT++
tags:
  - OMNET++
date: 2005-05-08 22:50:57
---

I found this paper through IEEE Xplore, and intrest in  the topic
"Eval freeBSD protocol stack in OMNeT++".

Integration of the FreeBSD TCP/IP-Stack into the Discrete Event
Simulator OMNet++
Bless, R.; Doll, M.;
Simulation Conference, 2004\. Proceedings of the 2004 Winter
Volume 2,  December 5-8, 2004 Page(s):487 - 492

--
* In asimulation environment one wants to run several hosts in parallel,
So every required global and static FreeBSD variable must be made local to each host. -> a structure to store all the kernel variables for one host.
-> Consequently,in the FreeBSD source every occurrence of the variables must be replaced by a reference into the corresponding structure.

ex: xyz is replaced to D->xyz

where D points to the current host structure that contains all the global and static kernel variables for this particular host.

* Encapsulate the complete TCP/IP into one OMNeT++ simple module.

Others are out of my knowledge...... 
In consequence, I think porting protocol stacks from different architecture is still not an easy way....