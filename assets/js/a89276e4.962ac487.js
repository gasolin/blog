"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[82240],{37292:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={title:"17.3. IPv6 \u5b89\u5168\u6027\u9a57\u8b49",tags:["IPv6"],date:new Date("2005-03-27T00:24:56.000Z")},p=void 0,s={permalink:"/ipv6/17-3-IPv6-\u5b89\u5168\u6027\u9a57\u8b49",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/ipv6/17-3-IPv6-\u5b89\u5168\u6027\u9a57\u8b49.md",source:"@site/blog/ipv6/17-3-IPv6-\u5b89\u5168\u6027\u9a57\u8b49.md",title:"17.3. IPv6 \u5b89\u5168\u6027\u9a57\u8b49",description:"\u76ee\u524d\u4e26\u7121\u5408\u9069\u7684\u5de5\u5177\u53ef\u7528\u4f86\u78ba\u8a8d\u7cfb\u7d71\u4e0a\u95dc\u65bcIPv6 \u7db2\u8def\u7684\u5b89\u5168\u6027\u554f\u984c. \u76ee\u524d\u5373\u4f7f\u662f Nessus \u6216\u5176\u4ed6\u5546\u696d\u6027\u5b89\u5168\u6027\u6aa2\u6e2c\u8edf\u9ad4\u90fd\u9084\u7121\u6cd5\u6383\u63cf IPv6 \u4f4d\u5740.",date:"2005-03-27T00:24:56.000Z",formattedDate:"March 27, 2005",tags:[{label:"IPv6",permalink:"/tags/i-pv-6"}],readingTime:2.64,hasTruncateMarker:!1,authors:[],frontMatter:{title:"17.3. IPv6 \u5b89\u5168\u6027\u9a57\u8b49",tags:["IPv6"],date:"2005-03-27T00:24:56.000Z"},prevItem:{title:"16. \u9632\u706b\u7246",permalink:"/ipv6/16-\u9632\u706b\u7246"},nextItem:{title:"17.1. \u7bc0\u9ede\u5b89\u5168\u6027",permalink:"/ipv6/17-1-\u7bc0\u9ede\u5b89\u5168\u6027"}},l={authorsImageUrls:[]},o=[{value:"17.3.1. \u6cd5\u5f8b\u8b70\u984c",id:"1731-\u6cd5\u5f8b\u8b70\u984c",level:2},{value:"17.3.2. \u4f7f\u7528 IPv6-\u652f\u63f4 \u7684 netcat \u4f5c IPv6 \u5b89\u5168\u6027\u9a57\u8b49",id:"1732-\u4f7f\u7528-ipv6-\u652f\u63f4-\u7684-netcat-\u4f5c-ipv6-\u5b89\u5168\u6027\u9a57\u8b49",level:2},{value:"17.3.3. \u4f7f\u7528 IPv6-\u652f\u63f4 \u7684 nmap \u4f5c IPv6 \u5b89\u5168\u6027\u9a57\u8b49",id:"1733-\u4f7f\u7528-ipv6-\u652f\u63f4-\u7684-nmap-\u4f5c-ipv6-\u5b89\u5168\u6027\u9a57\u8b49",level:2},{value:"17.3.4. \u4f7f\u7528 IPv6-\u652f\u63f4 \u7684 strobe \u4f5c IPv6 \u5b89\u5168\u6027\u9a57\u8b49",id:"1734-\u4f7f\u7528-ipv6-\u652f\u63f4-\u7684-strobe-\u4f5c-ipv6-\u5b89\u5168\u6027\u9a57\u8b49",level:2},{value:"17.3.5. \u9a57\u8b49\u7d50\u679c",id:"1735-\u9a57\u8b49\u7d50\u679c",level:2}],v={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76ee\u524d\u4e26\u7121\u5408\u9069\u7684\u5de5\u5177\u53ef\u7528\u4f86\u78ba\u8a8d\u7cfb\u7d71\u4e0a\u95dc\u65bc IPv6 \u7db2\u8def\u7684\u5b89\u5168\u6027\u554f\u984c\u3002\u76ee\u524d\u5373\u4f7f\u662f ",(0,r.kt)("a",{parentName:"p",href:"http://www.nessus.org/"},"Nessus")," \u6216\u5176\u4ed6\u5546\u696d\u6027\u5b89\u5168\u6027\u6aa2\u6e2c\u8edf\u9ad4\u90fd\u9084\u7121\u6cd5\u6383\u63cf IPv6 \u4f4d\u5740."),(0,r.kt)("h2",{id:"1731-\u6cd5\u5f8b\u8b70\u984c"},"17.3.1","."," \u6cd5\u5f8b\u8b70\u984c"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u50c5\u53ef\u6383\u63cf\u81ea\u6709\u6216\u7d93\u904e\u5c0d\u65b9\u6388\u6b0a\u7684\u96fb\u8166\uff0c\u5426\u5247\u60a8\u5c07\u6709\u906d\u9047\u6cd5\u5f8b\u8ffd\u8a34\u7684\u53ef\u80fd\u3002\u5728\u6383\u63cf\u524d\u8acb\u591a\u78ba\u8a8d\u6383\u63cf\u76ee\u7684 IPv6 \u4f4d\u5740\u662f\u5426\u6b63\u78ba. "),(0,r.kt)("h2",{id:"1732-\u4f7f\u7528-ipv6-\u652f\u63f4-\u7684-netcat-\u4f5c-ipv6-\u5b89\u5168\u6027\u9a57\u8b49"},"17.3.2","."," \u4f7f\u7528 IPv6 - \u652f\u63f4 \u7684 netcat \u4f5c IPv6 \u5b89\u5168\u6027\u9a57\u8b49"),(0,r.kt)("p",null,"\u900f\u904e\u4f7f\u7528 IPv6 - \u652f\u63f4 \u7684 netcat (\u53ef\u53c3\u7167 ",(0,r.kt)("a",{parentName:"p",href:"http://www.bieringer.de/linux/IPv6/status/IPv6+Linux-status-apps.html#security-auditing"},"IPv6+Linux-status-apps/security-auditing")," ) \u4f60\u53ef\u4ee5\u5305\u88dd\u4e00\u500b\u6307\u4ee4\u6bb5 (wrapping a script) \u4ee5\u5b8c\u6210\u5728\u7279\u5b9a\u901a\u8a0a\u57e0\u5340\u6bb5\u7684\u6383\u63cf\uff0c\u6216\u53d6\u5f97 banners \u7b49\u7b49\u5de5\u4f5c\u3002\u4f7f\u7528\u7bc4\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# nc6 ::1 daytime\n13 JUL 2002 11:22:22 CEST\n")),(0,r.kt)("h2",{id:"1733-\u4f7f\u7528-ipv6-\u652f\u63f4-\u7684-nmap-\u4f5c-ipv6-\u5b89\u5168\u6027\u9a57\u8b49"},"17.3.3","."," \u4f7f\u7528 IPv6 - \u652f\u63f4 \u7684 nmap \u4f5c IPv6 \u5b89\u5168\u6027\u9a57\u8b49"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.insecure.org/nmap/"},"NMap"),", \u4f5c\u70ba\u4e16\u754c\u4e0a\u6700\u68d2\u7684\u901a\u8a0a\u57e0\u6383\u63cf\u5de5\u5177\u4e4b\u4e00\uff0c\u5f9e 3.10ALPHA1 \u7248\u8d77\u5373\u652f\u63f4 IPv6 . \u4f7f\u7528\u7bc4\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# nmap -6 -sT ::1\nStarting nmap V. 3.10ALPHA3 ( www.insecure.org/nmap/ )\nInteresting ports on localhost6 (::1):\n(The 1600 ports scanned but not shown below are in state: closed)\nPort       State       Service\n22/tcp     open        ssh\n53/tcp     open        domain\n515/tcp    open        printer\n2401/tcp   open        cvspserver\nNmap run completed -- 1 IP address (1 host up) scanned in 0.525 seconds\n")),(0,r.kt)("h2",{id:"1734-\u4f7f\u7528-ipv6-\u652f\u63f4-\u7684-strobe-\u4f5c-ipv6-\u5b89\u5168\u6027\u9a57\u8b49"},"17.3.4","."," \u4f7f\u7528 IPv6 - \u652f\u63f4 \u7684 strobe \u4f5c IPv6 \u5b89\u5168\u6027\u9a57\u8b49"),(0,r.kt)("p",null,"Strobe \u662f\u4e00\u500b (\u8207 NMap \u76f8\u8f03) \u529f\u80fd\u8f03\u7c21\u55ae\u7684\u901a\u8a0a\u57e0\u6383\u63cf\u5de5\u5177\uff0c\u4f46\u4e5f\u63d0\u4f9b\u4e86 IPv6 - \u652f\u63f4\u4fee\u6b63\u6a94 (\u53c3\u7167 ",(0,r.kt)("a",{parentName:"p",href:"http://www.bieringer.de/linux/IPv6/status/IPv6+Linux-status-apps.html#security-auditing"},"IPv6+Linux-status-apps/security-auditing")," ). "),(0,r.kt)("p",null,"\u4f7f\u7528\u7bc4\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# ./strobe ::1 strobe 1.05 (c) 1995-1999 Julian Assange\n::1 2401 unassigned unknown\n::1 22 ssh Secure Shell - RSA encrypted rsh\n::1 515 printer spooler (lpd)\n::1 6010 unassigned unknown\n::1 53 domain Domain Name Server\n")),(0,r.kt)("p",null,"\u9644\u8a3b: strobe \u4e26\u672a\u7e7c\u7e8c\u958b\u767c\uff0c\u5728\u6b64\u986f\u793a\u7684\u7248\u672c\u4e26\u4e0d\u5341\u5206\u6b63\u78ba."),(0,r.kt)("h2",{id:"1735-\u9a57\u8b49\u7d50\u679c"},"17.3.5. \u9a57\u8b49\u7d50\u679c"),(0,r.kt)("p",null,"\u82e5\u9a57\u8b49\u7d50\u679c\u8207\u4f60\u7684 IPv6 \u5b89\u5168\u7b56\u7565\u4e0d\u76f8\u7b26\uff0c\u4f7f\u7528 IPv6 \u9632\u706b\u7246\u4f86\u95dc\u9589\u6f0f\u6d1e\uff0c\u4f8b\u5982\u4f7f\u7528 netfilter6 (\u53c3\u7167 ",(0,r.kt)("a",{parentName:"p",href:"http://www.tldp.org/HOWTO/Linux+IPv6-HOWTO/firewalling-netfilter6.html"},"Firewalling/Netfilter6")," ).    \u8cc7\u8a0a\uff1a\u66f4\u591a\u95dc\u65bc IP \u5b89\u5168\u6027\u7684\u8cc7\u8a0a\u53ef\u5728\u6b64\u53d6\u5f97:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ietf.org/internet-drafts/"},"Firewalling Considerations for IPv6 / draft-savola-v6ops-firewalling-??.txt"),"     "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ietf.org/internet-drafts/"},"IPv6 Neighbour Discovery trust models and threats / draft-ietf-send-psreq-??.txt"),"     "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ietf.org/internet-drafts/"},"Security Considerations for 6to4 / draft-savola-v6ops-6to4-security-??.txt"),"     "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ietf.org/internet-drafts/"},"Access Control Prefix Router Advertisement Option for IPv6 / draft-bellovin-ipv6-accessprefix-??.txt"),"     "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ietf.org/internet-drafts/"},"Requirements for Plug and Play IPsec for IPv6 applications /draft-kobayakawa-ipsec-ipv6-pnpipsec-reqts-??.txt "),"     "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ietf.org/internet-drafts/"},"Security of IPv6 Routing Header and Home Address Options / draft-savola-ipv6-rh-ha-security-??.txt"))))}u.isMDXComponent=!0}}]);