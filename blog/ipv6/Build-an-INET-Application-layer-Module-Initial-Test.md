---
title: 'Build an INET Application layer Module: Initial Test'
tags:
  - OMNET++
date: 2005-05-12 03:24:06
---

----in IPv6SuiteWithINET: work----
Applications/UDPApp 下新增 "NDSBasicApp.cc", "NDSBasicApp.h", "NDSBasicApp.ned".

>makemake
>nmake -f makefile.vc depend (option)
>m.bat

----in INET: not work----
Our goal is to build a UDP based Application named NDSApp.

1\. Add "NDSApp" folder in "INET/Applications" folder

2\. Modifiy "INET/makemake.cmd" to generate makefile for the new App(If you add/remove/rename directories).
set ALL_INET_INCLUDES:
append -I%root%/Applications/NDSApp

We copied the line "cd %root%\Applications\UDPApp && ....." and change "UDPApp" to "NDSApp"

cd %root%\Nodes\INET:
append -I..\..\Applications\NDSApp

3\. Copy files "UDPApp.cc", "UDPApp.h", "UDPApp.ned" from "UDPApp" folder,
Rename "UDPApp.cc", "UDPApp.h", "UDPApp.ned" to "NDSApp.cc", "NDSApp.h", "NDSApp.ned".

4\. In file "NDSApp.cc"
"#include "UDPApp.h"" to "#include "NDSApp.h""
Replace the class inherits and function names from "UDP"xx to "NDS"xx, 
ex: "UDPSink::initialize();" to "NDSSink::initialize();"

5\. Add NDSApp to StandardHost
Modifiy INET/Nodes/StandardHost.ned
At import section:
append "NDSApp,"

At module StandardHost parameters section:
Append
"numNdsApps : numeric const,
"ndsAppType : string,"

At module StandardHost submodules section:
Append
ndsApp: ndsAppType[numNdsApps] like NDSApp;
   display: "i=block/app;p=392,67";

At module StandardHost connections section:
Append
"for i=0..numNdsApps-1 do
     ndsApp[i].to_udp --> udp.from_application++;
     ndsApp[i].from_udp <-- udp.to_application++;
 endfor;"

>makemake
>nmake -f makefile.vc depend
>m.bat

Then test it in Example/INET/Multicast

modify its omnetpp.ini

set UDPApp off
# udp app (off)
**.numUdpApps=0
**.udpAppType="UDPApp"

modified udp app configuration to nds app configuration, 
note the captions.