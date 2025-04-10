"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[79967],{97899:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(8209);const l={title:"\u8207 NS3 \u7684\u7b2c\u4e00\u6b21\u63a5\u89f8-2",tags:["NS3"],date:new Date("2007-06-19T14:04:51.000Z")},p=void 0,r={permalink:"/devtools/2nd-contact-with-NS3",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/devtools/2nd-contact-with-NS3.md",source:"@site/blog/devtools/2nd-contact-with-NS3.md",title:"\u8207 NS3 \u7684\u7b2c\u4e00\u6b21\u63a5\u89f8-2",description:"\u524d\u7bc7 \u4e2d\u63d0\u5230\u6a21\u64ec\u7a0b\u5f0f\u8dd1\u5b8c\u6703\u7522\u751f trace  (.tr)\u6a94. \u9019\u5e7e\u5929\u518d\u4ed4\u7d30\u770b\u4e86\u4e00\u4e0b, \u6a21\u64ec\u7a0b\u5f0f\u8dd1\u5b8c\u7adf\u7136\u4e5f\u6703\u7522\u751f .pcap \u6a94!",date:"2007-06-19T14:04:51.000Z",formattedDate:"June 19, 2007",tags:[{label:"NS3",permalink:"/tags/ns-3"}],readingTime:1.845,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u8207 NS3 \u7684\u7b2c\u4e00\u6b21\u63a5\u89f8-2",tags:["NS3"],date:"2007-06-19T14:04:51.000Z"},prevItem:{title:"trac-subversion \u5b89\u88dd\u914d\u7f6e\u8a2d\u5b9a\u4e09\u5408\u4e00 (Ubuntu)",permalink:"/devtools/trac-subversion-Ubuntu-installation"},nextItem:{title:"\u8207 NS3 \u7684\u7b2c\u4e00\u6b21\u63a5\u89f8",permalink:"/devtools/1st-contact-with-NS3"}},s={authorsImageUrls:[]},c=[],i={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://inet6.blogspot.com/2007/06/ns3.html"},"\u524d\u7bc7")," \u4e2d\u63d0\u5230\u6a21\u64ec\u7a0b\u5f0f\u8dd1\u5b8c\u6703\u7522\u751f trace  (.tr) \u6a94\u3002\u9019\u5e7e\u5929\u518d\u4ed4\u7d30\u770b\u4e86\u4e00\u4e0b\uff0c\u6a21\u64ec\u7a0b\u5f0f\u8dd1\u5b8c\u7adf\u7136\u4e5f\u6703\u7522\u751f .pcap \u6a94\uff01"),(0,o.kt)("p",null,"pcap \u5c01\u5305\u6a94\u6848\u662f\u7528\u4f86\u7d00\u9304\u7db2\u8def\u5c01\u5305\u7684\u683c\u5f0f\u3002\u9019\u500b\u6a94\u6848\u683c\u5f0f\u53ef\u4ee5\u4f7f\u7528 tcpdump \u6216\u662f\u5716\u5f62\u4ecb\u9762\u7684 wireshark \u7b49\u5de5\u5177\u958b\u555f\uff0c\u5f9e\u9664\u932f\u7684\u89d2\u5ea6\u4e0a\u4f86\u770b\uff0c\u56e0\u70ba\u6709\u4e00\u4e9b\u73fe\u6210\u5c01\u5305\u5206\u6790\u5de5\u5177\u53ef\u7528\u4f86\u5206\u6790 pcap \u5c01\u5305\u6a94\uff0c\u56e0\u6b64\u6bd4\u8d77 .tr \u6a94\u66f4\u5bb9\u6613\u5206\u6790\u3002\u5c0d\u719f\u6089\u7db2\u8def\u958b\u767c\u7684\u4eba\u4f86\u8aaa\uff0cpcap \u8b93\u4eba\u6709\u5f9e\u771f\u5be6\u7db2\u8def\u6293\u5c01\u5305\u7684\u932f\u89ba :D"),(0,o.kt)("p",null,"\u4e00\u6253\u958b pcap \u5c01\u5305\uff0cNS-3 \u76ee\u524d\u7684\u512a\u7f3a\u9ede\u5c31\u7121\u6240\u9041\u5f62:"),(0,o.kt)("p",null,"\u512a\u9ede:"),(0,o.kt)("p",null,"1","."," \u5c01\u5305\u683c\u5f0f\u53c3\u7167\u771f\u5be6\u5c01\u5305\u5b9a\u7fa9\uff0c\u64f4\u5145\u6027\u4f73"),(0,o.kt)("p",null,"\u7f3a\u9ede:"),(0,o.kt)("p",null,"1","."," \u5c01\u5305\u76ee\u524d\u53ea\u652f\u63f4 IP, UDP, \u6c92\u6709 mac \u5c64\u652f\u63f4\n2","."," \u6c92\u8a08\u7b97 checksum (\u8a08\u8f03\u8d77\u4f86\u9019\u5176\u5be6\u4e0d\u7b97\u7f3a\u9ede\uff0c\u6c92\u6709\u90a3\u500b\u505a\u7db2\u8def\u6a21\u64ec\u7684\u9084\u771f\u7684\u53bb\u7b97 checksum)"),(0,o.kt)("p",null,"\u53e6\u5916 NS-3 \u9084\u6bd4\u8f03\u5dee\u7684\u4e00\u9ede\u662f\u76ee\u524d\u7684\u62d3\u6a38\u63cf\u8ff0\u9084\u883b\u919c\u7684\uff0c\u5ba3\u544a\u4e00\u500b\u7db2\u8def\u7bc0\u9ede\u6703\u7528\u5230\u9019\u7a2e\u9b3c\u8a9e\u6cd5:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ptr","[node]"," n0 = Create","[internetnode]"," (); \u76f8\u5c0d 8 \u6708\u4e2d\u9810\u8a08\u767c\u4f48\u7684 3.0.5 \u7248\u4e2d\u53ef\u4f7f\u7528\u7684 Python script \u7248\u672c\u5ba3\u544a\u5247\u662f:\nn0 = ns.MakeInterNetNode () \u540c\u6a23\u7684 simple-p2p \u62d3\u6a38\uff0cPython \u7248\u7684\u53ef\u80fd\u662f\u56e0\u70ba\u52a0\u5165\u8f03\u5c11\u8207\u5be6\u505a\u76f8\u95dc\u7684 code \u6240\u4ee5\u6bd4\u8f03\u597d\u7406\u89e3.\n\u64c1\u6709\u8f03\u597d\u53ef\u8b80\u6027\u7684 Python script \u61c9\u8a72\u662f\u500b\u5b78\u7fd2\u7db2\u8def\u6a21\u64ec\u7684\u597d\u5e6b\u624b :D")))}u.isMDXComponent=!0}}]);