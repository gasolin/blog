"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[85103],{14835:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var p=n(87462),l=(n(67294),n(3905));n(8209);const o={title:"\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u7684\u56db\u4e0d\u4e00\u6c92\u6709",tags:["zhpy","python"],date:new Date("2007-10-22T05:47:54.000Z")},a=void 0,r={permalink:"/python/zhpy-4-differences",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/python/zhpy-4-differences.md",source:"@site/blog/python/zhpy-4-differences.md",title:"\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u7684\u56db\u4e0d\u4e00\u6c92\u6709",description:"\u7aca\u4ee5\u70ba\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u7684\u56db\u4e0d\u4e00\u6c92\u6709\u662f:",date:"2007-10-22T05:47:54.000Z",formattedDate:"October 22, 2007",tags:[{label:"zhpy",permalink:"/tags/zhpy"},{label:"python",permalink:"/tags/python"}],readingTime:1.885,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u7684\u56db\u4e0d\u4e00\u6c92\u6709",tags:["zhpy","python"],date:"2007-10-22T05:47:54.000Z"},prevItem:{title:"\u6709\u8da3\u7684 Geek \u6b4c -  The day the routers died",permalink:"/ipv6/\u6709\u8da3\u7684-Geek-\u6b4c-The-day-the-routers-died"},nextItem:{title:"\u6211\u5c0d\u6e2c\u8a66\u7684\u614b\u5ea6",permalink:"/code/imho-test"}},h={authorsImageUrls:[]},i=[],s={toc:i};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,p.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7aca\u4ee5\u70ba",(0,l.kt)("a",{parentName:"p",href:"http://code.google.com/p/zhpy/"},"\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00"),"\u7684\u56db\u4e0d\u4e00\u6c92\u6709\u662f:"),(0,l.kt)("p",null,"  \u4e00\u4e0d\uff1a\u4e0d\u5f37\u6c42\u5b8c\u5168\u7684\u4e2d\u6587\u7de8\u7a0b"),(0,l.kt)("p",null,"\u904e\u7336\u4e0d\u53ca\uff0c\u7d55\u5927\u591a\u6578\u7684\u7a0b\u5f0f\u8a9e\u8a00\u662f\u4f7f\u7528\u82f1\u6587\u3002\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u7684\u76ee\u6a19\u662f\u5354\u52a9\u4f7f\u7528\u8005\u900f\u904e\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u5b78\u7fd2\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u9032\u800c\u63a5\u89f8\u4e16\u754c\u4e0a\u5927\u90e8\u4efd\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u800c\u4e0d\u662f\u812b\u96e2\u73fe\u5be6\u4e16\u754c\u3002"),(0,l.kt)("p",null,"   \u4e8c\u4e0d\uff1a\u4e0d\u7528\u4e2d\u6587\u6578\u5b57\u6216\u904b\u7b97\u7b26\u865f (\u52a0\uff0c\u6e1b\uff0c\u4e58\uff0c\u9664 +, - ,*, /...)"),(0,l.kt)("p",null,"\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u4f7f\u7528\u5230\u6578\u5b57\u8207\u904b\u7b97\u7b26\u865f\uff0c\u4e26\u4e0d\u50c5\u53ea\u65bc\u5e38\u7528\u7684\u6574\u6578\u6216\u56db\u5247\u904b\u7b97\u7b26\u865f\u3002"),(0,l.kt)("p",null,"  \u4e09\u4e0d\uff1a\u4e0d\u7528\u6587\u8a00\u6587"),(0,l.kt)("p",null,"\u7a0b\u5f0f\u8a9e\u8a00\u662f\u4eba\u8207\u96fb\u8166\u6e9d\u901a\u7684\u8a9e\u8a00\uff0c\u96fb\u8166\u53ea\u61c2\u5f97\u5e73\u92ea\u76f4\u6558\u7684\u908f\u8f2f\u3002\u6240\u4ee5\u6211\u5011\u4e5f\u4e0d\u7528\u6389\u66f8\u888b\uff0c\u76f4\u63a5\u7528\u767d\u8a71\u6e9d\u901a\u3002"),(0,l.kt)("p",null,"  \u56db\u4e0d\uff1a\u4e0d\u7528\u4e2d\u6587\u6a19\u9ede\u7b26\u865f"),(0,l.kt)("p",null,"\u7531\u65bc\u5468\u87d2\u662f\u5b8c\u5168\u517c\u5bb9 ",(0,l.kt)("a",{parentName:"p",href:"http://www.python.org.tw/"},"Python \u7a0b\u5f0f\u8a9e\u8a00"),"\u7684\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u800c\u5c07\u4e2d\u6587\u7684\u6a19\u9ede\u5c0d\u61c9\u5230\u82f1\u6587\u6a19\u9ede\u7684\u6b67\u7570\u4e0d\u5c11\uff0c\u53cd\u800c\u6703\u9020\u6210\u5beb\u4f5c\u8207\u8fa8\u8b58\u7684\u56f0\u64fe\u3002\u7d71\u4e00\u4f7f\u7528\u82f1\u6587\u6a19\u9ede\u4e26\u4e0d\u5f71\u97ff\u95b1\u8b80\uff0c\u5c0d\u4ee5\u5f8c\u5b78\u7fd2\u5176\u4ed6\u82f1\u6587\u7a0b\u5f0f\u8a9e\u8a00\u4e5f\u4e0d\u81f4\u9020\u6210\u984d\u5916\u969c\u7919\u3002"),(0,l.kt)("p",null,"  \u4e00\u6c92\u6709\uff1a\u6c92\u6709\u5927\u62ec\u865f {}"),(0,l.kt)("p",null,"\u5468\u87d2\u662f Python \u7a0b\u5f0f\u8a9e\u8a00\u52a0\u4e0a\u4e2d\u6587\u652f\u63f4\u7684\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u800c Python \u7a0b\u5f0f\u8a9e\u8a00\u672c\u8eab\u5c31\u662f\u4f7f\u7528\u7d50\u69cb\u5316\u7684\u7a0b\u5f0f\u5340\u584a\u4f86\u4ee3\u66ff\u4ee5\u5927\u62ec\u865f\u5224\u5b9a\u7a0b\u5f0f\u5340\u584a\u7684\u8a9e\u8a00\u3002\u4e5f\u7b26\u5408\u4e2d\u6587\u4f7f\u7528\u7fd2\u6163\u3002"))}d.isMDXComponent=!0}}]);