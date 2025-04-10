"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81690],{52485:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>I,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(8209);const o={title:"5th. day of porting INET6 \u7b2c\u4e94\u5929",tags:["OMNET++"],date:new Date("2005-03-27T00:34:01.000Z")},i=void 0,l={permalink:"/ipv6/5th-day-of-porting-INET6-\u7b2c\u4e94\u5929",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/ipv6/5th-day-of-porting-INET6-\u7b2c\u4e94\u5929.md",source:"@site/blog/ipv6/5th-day-of-porting-INET6-\u7b2c\u4e94\u5929.md",title:"5th. day of porting INET6 \u7b2c\u4e94\u5929",description:"9th. Part:",date:"2005-03-27T00:34:01.000Z",formattedDate:"March 27, 2005",tags:[{label:"OMNET++",permalink:"/tags/omnet"}],readingTime:3.13,hasTruncateMarker:!1,authors:[],frontMatter:{title:"5th. day of porting INET6 \u7b2c\u4e94\u5929",tags:["OMNET++"],date:"2005-03-27T00:34:01.000Z"},prevItem:{title:"NS2 \u6a21\u7d44\u7de8\u8b6f\u5fc3\u5f97",permalink:"/ipv6/NS2-\u6a21\u7d44\u7de8\u8b6f\u5fc3\u5f97"},nextItem:{title:"4th. day of porting INET6 \u7b2c\u56db\u5929",permalink:"/ipv6/4th-day-of-porting-INET6-\u7b2c\u56db\u5929"}},p={authorsImageUrls:[]},s=[],d={toc:s};function I(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"9th. Part:\n\u7de8\u8f2f IP6Datagram.msg\n\u53c3\u8003 ",(0,r.kt)("a",{parentName:"p",href:"http://www.iana.org/numbers.html"},"IANA")," \u4e0a",(0,r.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/protocol-numbers"},"PROTOCOL NUMBERS")," \u4f86\u6539\u5beb IP6Datagram.msg"),(0,r.kt)("p",null,"Protocol field ->  Next Header field\n\u56e0\u6b64 enum \u540d\u7a31 IP6ProtocolFieldId \u6539\u6210  IP6NextHeaderFieldId"),(0,r.kt)("p",null,"IPv4 \u4e0a\u53eb Protocol field, IPv6 \u4e0a\u7a31 Next Header field\n\u70ba\u4e86\u76f8\u5bb9\u6027\uff0c\u5c07\u539f\u672c\u5b9a\u7fa9\u7684 Protocol field \u5168\u4fdd\u7559\u4e4b\u5916\uff0c\u53e6\u5916\u65b0\u589e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_IPv6_Route = 43;  //Routing Header for IPv6       ","[Deering]"),(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_IPv6_Frag =  44;  //Fragment Header for IPv6     ","[Deering]"),(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_ESP   = 50;  //Encap Security Payload            ","[RFC2406]"),(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_AH   = 51;  //Authentication Header               ","[RFC2402]"),(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_IPv6_ICMP  = 58; //ICMP for IPv6                ","[RFC1883]","\nIP6_PROT_NONE  = 59; --\x3e IP6_PROT_NoNxt  = 59; //No Next Header for IPv6           ","[RFC1883]"),(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_Opts  = 60; //Destination Options for IPv6      ","[RFC1883]"),(0,r.kt)("li",{parentName:"ul"},"IP6_PROT_ENCAP = 98; //Encapsulation Header         ","[RFC1241,RXB3]")),(0,r.kt)("p",null,"\u9664\u4e86\u9019\u4e9b\u4e4b\u5916\uff0c\u9806\u4fbf\u628a\u4e00\u4e9b Routing protocol \u7684\u865f\u4e5f\u52a0\u4e86\u4e0a\u53bb."),(0,r.kt)("p",null,"IP6_PROT_IPv6_MOBILITY \u539f\u672c\u7d66 62,  \u6539\u6210\nIP6_PROT_IPv6_MOBILITY = 135; //Mobility Header for IPv6 ","[RFC3775]"),(0,r.kt)("p",null,"\u5f9e\u4e00\u4e32\u914d\u7d66\u865f\u78bc\u4e2d\u767c\u73fe\u6bd4\u8f03\u7279\u5225\u7684\u662f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"61                 any host internal protocol           [IANA]\n63                 any local network                    [IANA]\n68                 any distributed file system          [IANA]\n99                 any private encryption scheme        [IANA]\n114                any 0-hop protocol                   [IANA]\n")),(0,r.kt)("p",null,"\u525b\u958b\u59cb\u770b\u4e0d\u77e5\u6709\u4f55\u7279\u5225\u4f5c\u7528\uff0c\u5f8c\u4f86\u60f3\u60f3\u9019\u5e7e\u500b\u4fdd\u7559\u4f4d\u770b\u8d77\u4f86\u5c0d\u6a21\u64ec\u5de5\u5177\u597d\u50cf\u4e0d\u8cf4\n--\x3e \u6709\u65b0\u5354\u5b9a\u8981\u8a66\u4f5c\uff1f\n\u4e0d\u5fc5\u6539\u5230\u6a19\u982d\u5b9a\u7fa9\uff0c\u66ab\u6642\u5148\u7528\u9019\u5e7e\u500b\u5427\uff01\n\u4e0d\u904e\u6c92\u6709\u6a19\u982d\u540d\u7a31\u600e\u9ebc\u8fa6\uff1f\nOrz ..... \u9084\u662f\u66ab\u6642\u4e0d\u8981\u52a0\u9032\u53bb\u597d\u4e86"),(0,r.kt)("p",null,"\u672c\u6a94\u6848\u7de8\u5b8c\u7684\u4e0b\u4e00\u6b65\u61c9\u662f\u7de8\u8f2f IP6Address.h \u6216  IP6ControInfo.msg \u5427"),(0,r.kt)("p",null,"Ref:  ",(0,r.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/ipv6-parameters"},"IP VERSION 6 PARAMETERS")," ,   ",(0,r.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/icmpv6-parameters"},"ICMPv6 TYPE NUMBERS")),(0,r.kt)("p",null,"10th. Part:"),(0,r.kt)("p",null,"\u7de8\u8f2f IP6Datagram.msg \u4e2d\u7684 message IP6Datagram :\n\u53c3\u8003 IPv6Suite IP6Datagram.cc \u4f86\u6539\u5beb IP6Datagram.msg"),(0,r.kt)("p",null,"ToDo:\n1","."," \u5c07\u76f8\u95dc\u5404\u6a19\u982d\u5b9a\u7fa9\u5728\u6a94\u6848\u88e1.\n2","."," \u5b9a\u7fa9 flow_label \u7d50\u69cb (struct, 20 bit = double + short OR int + int + short OR?)\n3","."," \u8a02 Options Types"),(0,r.kt)("p",null,"IP6Datagram.cc \u4e2d\u6a19\u982d\u662f\u5982\u6b64\u5b9a\u7fa9\u51fa\u4f86\u7684:"),(0,r.kt)("p",null,"static const ipv6_hdr IPV6_INITIAL_HDR =\n{\n0x60000000, //version 6, traffic class of 0, flow label of 0\n0,   //payload of 0\n59,   //No next header yet\n0,   //Hop Limit set to uninitialised\nIPv6_ADDR_UNSPECIFIED,\nIPv6_ADDR_UNSPECIFIED\n};"),(0,r.kt)("p",null,"\u5b8c\u6574\u7684\u6a19\u982d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message IP6Datagram\n{\n properties:\n     //g Still unknown its func\n     omitGetVerb = true;\n fields:\n     short version            = 6;                               // version 6\n     int traffic_class        = 0;                               // traffic class of 0\n     IP6FlowLabel flow_label;                                    // flow label of 0\n     double payload_length    = 0;                               // payload of 0\n     int next_header enum(IP6NextHeaderFieldId) = IP_PROT_NONxt; // No next header yet\n     int hop_limit            = 0;                               //Hop Limit set to uninitialised\n     IP6Address srcAddress;\n     IP6Address destAddress;\n}\n")),(0,r.kt)("p",null,"\u5373\u5c07\u78b0\u5230 day 3 \u63d0\u5230\u7684 \u5ef6\u4f38\u6a19\u982d\u8655\u7406 \u554f\u984c. ",(0,r.kt)("a",{parentName:"p",href:"http://ietf.org/rfc/rfc2460.txt?number=2460"},"RFC2460")," \u4e0a\u7684\u6558\u8ff0\u662f\u9019\u6a23\u7684"),(0,r.kt)("p",null,"4.1  Extension Header Order ","[Page 6]","\nWhen more than one extension header is used in the same packet, it is\nrecommended that those headers appear in the following order:"),(0,r.kt)("p",null,"   IPv6 header\nHop-by-Hop Options header\nDestination Options header (note 1)\nRouting header\nAuthentication header (note 2)\nEncapsulating Security Payload header (note 2)\nDestination Options header (note 3)\nupper-layer header\nFragment header"),(0,r.kt)("p",null,"\u586b class IP6Options,\n\u78b0\u5230 Option_Data: Variable-length field.  Option-Type-specific data \u7684\u554f\u984c"),(0,r.kt)("p",null,"\u7d93 majorlee \u5b78\u9577\u6307\u9ede\n",(0,r.kt)("a",{parentName:"p",href:"http://rfc-editor.org/rfc/rfc3493.txt"},"RFC 3493")," Basic Socket Interface Extensions for IPv6.\n",(0,r.kt)("a",{parentName:"p",href:"http://rfc-editor.org/rfc/rfc3542.txt"},"RFC 3542")," Advanced Sockets Application Program Interface (API) for IPv6\n\u88e1\u53ef\u80fd\u6703\u6709\u7b54\u6848."))}I.isMDXComponent=!0}}]);