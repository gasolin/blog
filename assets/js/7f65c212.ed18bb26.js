"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95586],{79190:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>r});var l=n(87462),o=(n(67294),n(3905));n(8209);const a={title:"\u6211\u5c0d\u6e2c\u8a66\u7684\u614b\u5ea6",tags:["aglie test","python"],date:new Date("2007-10-22T05:45:04.000Z")},s=void 0,p={permalink:"/code/imho-test",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/code/imho-test.md",source:"@site/blog/code/imho-test.md",title:"\u6211\u5c0d\u6e2c\u8a66\u7684\u614b\u5ea6",description:"pycon 2007 \u88e1\u7684 presentation \u63d0\u5230\u6e2c\u8a66\u91d1\u5b57\u5854, \u7531\u4e0b\u800c\u4e0a\u5c07\u6e2c\u8a66\u6b78\u70ba\u4e09\u985e\uff1a",date:"2007-10-22T05:45:04.000Z",formattedDate:"October 22, 2007",tags:[{label:"aglie test",permalink:"/tags/aglie-test"},{label:"python",permalink:"/tags/python"}],readingTime:2.305,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u6211\u5c0d\u6e2c\u8a66\u7684\u614b\u5ea6",tags:["aglie test","python"],date:"2007-10-22T05:45:04.000Z"},prevItem:{title:"\u5468\u87d2\u4e2d\u6587\u7a0b\u5f0f\u8a9e\u8a00\u7684\u56db\u4e0d\u4e00\u6c92\u6709",permalink:"/python/zhpy-4-differences"},nextItem:{title:"Python \u8a9e\u8a00\u7684\u7e2e\u6392\u8ff7\u601d",permalink:"/python/Python-indent"}},i={authorsImageUrls:[]},r=[],u={toc:r};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pycon 2007 \u88e1\u7684 presentation \u63d0\u5230\u6e2c\u8a66\u91d1\u5b57\u5854\uff0c\u7531\u4e0b\u800c\u4e0a\u5c07\u6e2c\u8a66\u6b78\u70ba\u4e09\u985e\uff1a"),(0,o.kt)("p",null,"\u55ae\u5143\u6e2c\u8a66\uff0c\u529f\u80fd\u6e2c\u8a66\uff0c\u61c9\u7528\u6e2c\u8a66\u3002"),(0,o.kt)("p",null,"\u7a0b\u5f0f\u6e2c\u8a66\u9700\u8981\u5f88\u591a\u7684\u55ae\u5143\u6e2c\u8a66\uff0c\u4e00\u4e9b\u529f\u80fd\u6e2c\u8a66\uff0c\u5c11\u91cf\u7684\u61c9\u7528\u6e2c\u8a66\u3002"),(0,o.kt)("p",null,"\u5177\u6709\u67d0\u500b\u7a0b\u5ea6\u7684\u55ae\u5143\u6e2c\u8a66\u53ef\u4ee5\u4fdd\u8b49\u4ee3\u78bc\u8cea\u91cf\u3002"),(0,o.kt)("p",null,"\u5468\u87d2\u662f\u6211\u7b2c\u4e00\u500b\u5305\u542b\u5b8c\u6574\u6e2c\u8a66\u7684\u958b\u6e90\u5c08\u6848\u3002\u7136\u800c\u5468\u87d2\u4e5f\u4e0d\u662f\u4e00\u958b\u59cb\u5c31\u5beb\u4e86\u6e2c\u8a66\u7528\u4f8b."),(0,o.kt)("p",null,'\u6211\u7684\u7d93\u9a57\u662f "\u5148\u80fd\u8dd1\uff0c\u518d\u6c42\u597d"\u3002\u5728\u4e00\u958b\u59cb\u5148\u8b93\u529f\u80fd\u80fd\u8dd1\uff0c\u4e4b\u5f8c\u518d\u60f3\u6cd5\u6539\u5584\u6216\u6539\u5beb\u3002'),(0,o.kt)("p",null,"\u5468\u87d2\u6539\u5584\u6216\u6539\u5beb\u7684\u904e\u7a0b\u4e2d\uff0cunittest, doctest (\u55ae\u5143\u6e2c\u8a66\uff0c\u529f\u80fd\u6e2c\u8a66),\n\u8207 example test (\u61c9\u7528\u6e2c\u8a66) \u5c31\u662f\u4e3b\u8981\u4fdd\u8b49\u529f\u80fd\u7a69\u5b9a\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u6211\u89ba\u5f97\u52a0\u5165\u6e2c\u8a66\u662f\u6211\u5728\u958b\u767c\u5468\u87d2\u904e\u7a0b\u4e2d\u505a\u51fa\u7684\u6700\u597d\u6c7a\u5b9a\u3002\n\u7576\u5468\u87d2\u7a0b\u5f0f\u8d85\u904e 15k \u5f8c\uff0c\n\u5df2\u7d93\u9032\u5165\u96e3\u4ee5\u5c07\u6574\u4efd code \u77ed\u6642\u9593\u4e00\u6b21 Review \u7684\u968e\u6bb5\u3002\n\u9019\u6642\u6211\u6c7a\u5b9a\u82b1\u6642\u9593\u70ba\u5468\u87d2\u52a0\u5165\u4e00\u90e8\u5206\u6e2c\u8a66\u7528\u4f8b\u3002\n\u6211\u767c\u73fe\u9019\u9ebc\u4f5c\u63d0\u6607\u4e86\u6574\u500b\u5c0f\u7a0b\u5f0f\u7684 ' \u89e3\u6790\u5ea6 '-- nosetests \u7684\u5831\u8868\u544a\u8a34\u6211\uff1a\u6bcf\u500b\u7c21\u55ae\u7684\u529f\u80fd\u90fd\u904b\u884c\u3002"),(0,o.kt)("p",null,"\u7576\u6211\u5728\u5468\u87d2\u52a0\u5165\u4e86\u67d0\u6578\u91cf\u7684\u6e2c\u8a66\u7528\u4f8b\u5f8c\uff0c\u5468\u87d2\u7684\u958b\u767c\u65b9\u5f0f\u5c31\u6709\u4e86\u8cea\u8b8a\u3002"),(0,o.kt)("p",null,"\u7531\u65bc\u53ef\u4ee5\u63d0\u524d\u7531\u81ea\u52d5\u6e2c\u8a66\u7372\u5f97\u529f\u80fd\u7d50\u679c\uff0c\u8b93\u5468\u87d2\u7684\u958b\u767c\u65b9\u5f0f\u8b8a\u5f97\u66f4\u5927\u81bd\uff0c\n\u6211\u53ef\u4ee5\u653e\u5fc3\u5730\u5927\u81bd\u8a66\u9a57\u5404\u7a2e\u65b0\u529f\u80fd\uff0c\u4e26\u96a8\u6642\u80fd\u900f\u904e\u6e2c\u8a66\u78ba\u8a8d\u65b0\u529f\u80fd\u5c0d\u67b6\u69cb\u5e36\u4f86\u7684\u5f71\u97ff\u3002\n\u4e5f\u5f97\u4ee5\u5728\u65e9\u671f\u7248\u672c\u4e2d\u5373\u8f15\u9b06\u5730\u900f\u904e\u5927\u898f\u6a21\u7684\u91cd\u69cb\u4f86\u589e\u52a0\u67b6\u69cb\u7684\u5f48\u6027\u3002"),(0,o.kt)("p",null,"\u7528\u5e7e\u6b21\u5c31\u4e1f\u7684\u7a0b\u5f0f / \u8173\u672c\u7576\u7136\u6c92\u52a0\u5165\u6e2c\u8a66\u7684\u50f9\u503c.\n\u7136\u800c\u8981\u7dad\u6301\u4e00\u4efd\u53ef\u7dad\u8b77\u7684\u7a0b\u5f0f\uff0c\u52a0\u5165\u6e2c\u8a66\u662f\u5f88\u597d\u7684\u65b9\u5f0f."))}c.isMDXComponent=!0}}]);