"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[27742],{18432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(8209);const s={title:"18.3. \u81ea\u52d5\u91d1\u9470\u4ea4\u63db(IKE)",tags:["IPv6"],date:new Date("2005-03-27T00:18:07.000Z")},r=void 0,i={permalink:"/ipv6/18-3-\u81ea\u52d5\u91d1\u9470\u4ea4\u63db-IKE",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/ipv6/18-3-\u81ea\u52d5\u91d1\u9470\u4ea4\u63db-IKE.md",source:"@site/blog/ipv6/18-3-\u81ea\u52d5\u91d1\u9470\u4ea4\u63db-IKE.md",title:"18.3. \u81ea\u52d5\u91d1\u9470\u4ea4\u63db(IKE)",description:'IPsec \u9700\u8981\u900f\u904e\u4e00\u500b\u5b89\u5168\u7684\u91d1\u9470\u4ea4\u63db\u904e\u7a0b. \u5728Linux\u4e2d\u662f\u900f\u904e IKE daemons \u7a0b\u5f0f\u4f86\u9054\u6210. \u5b83\u5011\u4e5f\u4f7f\u7528\u516c\u7528\u5b89\u5168\u6a5f\u5236(common known secret, \u5373\u4e00\u822c\u6240\u8a00\u7684"\u9810\u5148\u5206\u4eab\u5b89\u5168\u6a5f\u5236"(pre-shared secret)), \u6216\u4f7f\u7528RSA\u91d1\u9470 (\u6b64\u91d1\u9470\u4e5f\u53ef\u7528\u5728 X.509 \u8a8d\u8b49\u4e0a)\u8655\u7406\u5c0d\u65b9\u7684\u8a8d\u8b49. \u76ee\u524dLinux\u4e0a\u63d0\u4f9b\u6709\u5169\u7a2e\u4e0d\u540c\u7684 IKE daemons, \u5169\u8005\u5728\u4f7f\u7528\u8207\u914d\u7f6e\u904e\u7a0b\u4e0a\u5b8c\u5168\u4e0d\u540c. \u76f8\u8f03\u65bc*S/WAN , \u7b46\u8005\u6bd4\u8f03\u504f\u597d "pluto"\u5be6\u4f5c, \u56e0\u70ba "pluto"\u6bd4\u8f03\u5bb9\u6613\u800c\u4e14\u53ea\u9700\u4e00\u6b65\u8a2d\u5b9a\u5b89\u88dd.',date:"2005-03-27T00:18:07.000Z",formattedDate:"March 27, 2005",tags:[{label:"IPv6",permalink:"/tags/i-pv-6"}],readingTime:.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"18.3. \u81ea\u52d5\u91d1\u9470\u4ea4\u63db(IKE)",tags:["IPv6"],date:"2005-03-27T00:18:07.000Z"},prevItem:{title:"18.1. \u4f7f\u7528\u52a0\u5bc6\u8207\u8a8d\u8b49\u7684\u6a21\u5f0f",permalink:"/ipv6/18-1-\u4f7f\u7528\u52a0\u5bc6\u8207\u8a8d\u8b49\u7684\u6a21\u5f0f"},nextItem:{title:"1.2. \u6b78\u985e",permalink:"/ipv6/1-2-\u6b78\u985e"}},l={authorsImageUrls:[]},p=[],m={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'IPsec \u9700\u8981\u900f\u904e\u4e00\u500b\u5b89\u5168\u7684\u91d1\u9470\u4ea4\u63db\u904e\u7a0b\u3002\u5728 Linux \u4e2d\u662f\u900f\u904e IKE daemons \u7a0b\u5f0f\u4f86\u9054\u6210\u3002\u5b83\u5011\u4e5f\u4f7f\u7528\u516c\u7528\u5b89\u5168\u6a5f\u5236 (common known secret, \u5373\u4e00\u822c\u6240\u8a00\u7684 "\u9810\u5148\u5206\u4eab\u5b89\u5168\u6a5f\u5236"(pre-shared secret)), \u6216\u4f7f\u7528 RSA \u91d1\u9470 (\u6b64\u91d1\u9470\u4e5f\u53ef\u7528\u5728 X.509 \u8a8d\u8b49\u4e0a) \u8655\u7406\u5c0d\u65b9\u7684\u8a8d\u8b49\u3002\u76ee\u524d Linux \u4e0a\u63d0\u4f9b\u6709\u5169\u7a2e\u4e0d\u540c\u7684 IKE daemons, \u5169\u8005\u5728\u4f7f\u7528\u8207\u914d\u7f6e\u904e\u7a0b\u4e0a\u5b8c\u5168\u4e0d\u540c\u3002\u76f8\u8f03\u65bc * S/WAN , \u7b46\u8005\u6bd4\u8f03\u504f\u597d "pluto" \u5be6\u4f5c\uff0c\u56e0\u70ba "pluto" \u6bd4\u8f03\u5bb9\u6613\u800c\u4e14\u53ea\u9700\u4e00\u6b65\u8a2d\u5b9a\u5b89\u88dd.'))}c.isMDXComponent=!0}}]);