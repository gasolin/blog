---
title: INET QnA
tags:
  - OMNET++
date: 2005-06-01 18:09:20
---

Q: INET framework without dynamic nedfile

A: Easiest way to switch from dynamic NED to compiled-in NED for INET is
to remove the "-N" flag from OPTS at the top of the makemake script, then
regenerate the makefiles (./makemake) and make.  (And of course remove
preload-ned-files lines from omnetpp.ini's.)

Q:I'll use an example from Omnet Documentation:
```
module RoutingTestNetwork
    parameters:
        routingNodeType: string; // should hold the name
                                  // of an existing module type
    gates: //...
    submodules:
        node1: routingNodeType like RoutingNode;
        node2: routingNodeType like RoutingNode;
        //...
    connections nocheck:
        node1.out0 --> node2.in0;
        //...
endmodule
```

What happens if I declare a routingNodeType in omnet.ini file which would be different from that declared in my .ned file?
e.g. omnetpp.ini:
**.node*.routingNodeType = "Routingsomething"

Or perhaps I have to define this module in RoutingNode.ned and add some parameters in Routingsomething.ned if I want.

A:The setting in the NED file, if present, takes precedence over omnetpp.ini
(basically, omnetpp.ini is only consulted if param is not set in the NED).

The module Routingsomething MUST have at least the parameters and gates
RoutingNode has, but it can add new ones as well.

Q:I wish to create shared libs in each of the subdirectories then link them to an executable for each of the networks like the old IPv6Suite.

A: we haven't actually had this option available for the IPv6SuiteWithINET.

Currently, all c++ objects are statically linked into bin/INET. A batch file is provided in each network directory to run the executable, bin/INET and load omnetpp.ini (or -f <your_own_network_ini>) in the current network directory. (Eric)

Q:</your_own_network_ini> I've installed TCL/TK but while executing make command, it can't found them
<your_own_network_ini>A:</your_own_network_ini> Go to the installing directory and edit configure.user. Specifiy the path to
the TCL/TK header files. On my mashine tcl.h and tk.h are in /usr/include/:

TK_CFLAGS="-I/usr/include/tcl8 

4 -fwritable-strings"
TK_LIBS="-L/usr/lib -ltk8.4 -ltcl8.4"

You should change the compiler flags if you want to debug your sessions:

CFLAGS='-gstabs+3 -Wall'
