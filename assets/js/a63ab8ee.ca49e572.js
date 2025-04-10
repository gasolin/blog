"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95441],{39154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));n(8209);const a={title:"INET QnA",tags:["OMNET++"],date:new Date("2005-06-01T18:09:20.000Z")},l=void 0,r={permalink:"/ipv6/INET-QnA",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/ipv6/INET-QnA.md",source:"@site/blog/ipv6/INET-QnA.md",title:"INET QnA",description:"Q: INET framework without dynamic nedfile",date:"2005-06-01T18:09:20.000Z",formattedDate:"June 1, 2005",tags:[{label:"OMNET++",permalink:"/tags/omnet"}],readingTime:1.58,hasTruncateMarker:!1,authors:[],frontMatter:{title:"INET QnA",tags:["OMNET++"],date:"2005-06-01T18:09:20.000Z"},prevItem:{title:"\u4fee\u6539\u6a21\u7d44\u5fc3\u5f97",permalink:"/ipv6/\u4fee\u6539\u6a21\u7d44\u5fc3\u5f97"},nextItem:{title:"\u7528\u5354\u8b70\u5206\u6790\u5de5\u5177\u5b78\u7fd2TCP/IP",permalink:"/ipv6/\u7528\u5354\u8b70\u5206\u6790\u5de5\u5177\u5b78\u7fd2TCP-IP"}},s={authorsImageUrls:[]},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Q: INET framework without dynamic nedfile"),(0,o.kt)("p",null,'A: Easiest way to switch from dynamic NED to compiled-in NED for INET is\nto remove the "-N" flag from OPTS at the top of the makemake script, then\nregenerate the makefiles (./makemake) and make.  (And of course remove\npreload-ned-files lines from omnetpp.ini\'s.)'),(0,o.kt)("p",null,"Q:I'll use an example from Omnet Documentation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module RoutingTestNetwork\n    parameters:\n        routingNodeType: string; // should hold the name\n                                  // of an existing module type\n    gates: //...\n    submodules:\n        node1: routingNodeType like RoutingNode;\n        node2: routingNodeType like RoutingNode;\n        //...\n    connections nocheck:\n        node1.out0 --\x3e node2.in0;\n        //...\nendmodule\n")),(0,o.kt)("p",null,"What happens if I declare a routingNodeType in omnet.ini file which would be different from that declared in my .ned file?\ne.g. omnetpp.ini:\n*",(0,o.kt)("em",{parentName:"p"},".node"),'.routingNodeType = "Routingsomething"'),(0,o.kt)("p",null,"Or perhaps I have to define this module in RoutingNode.ned and add some parameters in Routingsomething.ned if I want."),(0,o.kt)("p",null,"A:The setting in the NED file, if present, takes precedence over omnetpp.ini\n(basically, omnetpp.ini is only consulted if param is not set in the NED)."),(0,o.kt)("p",null,"The module Routingsomething MUST have at least the parameters and gates\nRoutingNode has, but it can add new ones as well."),(0,o.kt)("p",null,"Q:I wish to create shared libs in each of the subdirectories then link them to an executable for each of the networks like the old IPv6Suite."),(0,o.kt)("p",null,"A: we haven't actually had this option available for the IPv6SuiteWithINET."),(0,o.kt)("p",null,"Currently, all c++ objects are statically linked into bin/INET. A batch file is provided in each network directory to run the executable, bin/INET and load omnetpp.ini (or -f <your_own_network_ini>) in the current network directory. (Eric)"),(0,o.kt)("p",null,"Q:</your_own_network_ini> I've installed TCL/TK but while executing make command, it can't found them\n<your_own_network_ini>A:</your_own_network_ini> Go to the installing directory and edit configure.user. Specifiy the path to\nthe TCL/TK header files. On my mashine tcl.h and tk.h are in /usr/include/:"),(0,o.kt)("p",null,'TK_CFLAGS="-I/usr/include/tcl8 '),(0,o.kt)("p",null,'4 -fwritable-strings"\nTK_LIBS="-L/usr/lib -ltk8.4 -ltcl8.4"'),(0,o.kt)("p",null,"You should change the compiler flags if you want to debug your sessions:"),(0,o.kt)("p",null,"CFLAGS='-gstabs+3 -Wall'"))}p.isMDXComponent=!0}}]);