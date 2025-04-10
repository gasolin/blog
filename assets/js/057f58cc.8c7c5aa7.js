"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22865],{52688:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var o=r(87462),l=(r(67294),r(3905));r(8209);const n={title:"TurboGears AJAX \u4f7f\u7528\u611f\u60f3",tags:["python","TurboGears"],date:new Date("2006-05-13T13:30:19.000Z")},a=void 0,p={permalink:"/python/imho-TurboGears-AJAX",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/python/imho-TurboGears-AJAX.md",source:"@site/blog/python/imho-TurboGears-AJAX.md",title:"TurboGears AJAX \u4f7f\u7528\u611f\u60f3",description:"\u5f88\u96e3\u7528\u7c21\u77ed\u8a00\u8a9e\u8868\u8ff0\u9019\u7a2e\u4e92\u52d5\u958b\u767c\u7684\u7d93\u9a57. \u771f\u7684\u8981\u7a0d\u5fae\u63cf\u8ff0\u7684\u8a71, \u90a3\u662f\u4e00\u7a2e\u4e0d\u7ba1\u4f60\u60f3\u8981\u600e\u9ebc\u9032\u884c\u4e0b\u4e00\u500b\u958b\u767c\u6b65\u9a5f\u6642, TurboGears \u90fd\u5e6b\u4f60\u6e96\u5099\u597d\u4e86\u5404\u7a2e\u57fa\u672c\u5de5\u5177\u7684\u611f\u89ba.",date:"2006-05-13T13:30:19.000Z",formattedDate:"May 13, 2006",tags:[{label:"python",permalink:"/tags/python"},{label:"TurboGears",permalink:"/tags/turbo-gears"}],readingTime:4.26,hasTruncateMarker:!1,authors:[],frontMatter:{title:"TurboGears AJAX \u4f7f\u7528\u611f\u60f3",tags:["python","TurboGears"],date:"2006-05-13T13:30:19.000Z"},prevItem:{title:"MochiKit Intro - Ajax Experience Slides",permalink:"/python/MochiKit-Intro-Ajax-Experience-Slides"},nextItem:{title:"Python \u96d9\u9031\u520a ...?",permalink:"/python/Python-biweekly"}},i={authorsImageUrls:[]},s=[],u={toc:s};function c(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f88\u96e3\u7528\u7c21\u77ed\u8a00\u8a9e\u8868\u8ff0\u9019\u7a2e\u4e92\u52d5\u958b\u767c\u7684\u7d93\u9a57\u3002\u771f\u7684\u8981\u7a0d\u5fae\u63cf\u8ff0\u7684\u8a71\uff0c\u90a3\u662f\u4e00\u7a2e\u4e0d\u7ba1\u4f60\u60f3\u8981\u600e\u9ebc\u9032\u884c\u4e0b\u4e00\u500b\u958b\u767c\u6b65\u9a5f\u6642\uff0cTurboGears \u90fd\u5e6b\u4f60\u6e96\u5099\u597d\u4e86\u5404\u7a2e\u57fa\u672c\u5de5\u5177\u7684\u611f\u89ba.")),(0,l.kt)("p",null,"\u5728\u5b78\u7fd2 TurboGears \u4e4b\u5f8c\uff0c\u6211\u7528 TurboGears \u6846\u67b6\u8a66\u505a\u4e86\u4e00\u500b\u7db2\u8def\u6a21\u64ec\u67b6\u69cb\u7522\u751f\u5668\uff0c\u767c\u73fe\u4f7f\u7528 TurboGears \u5beb\u64cd\u4f5c\u5230\u8868\u55ae\u7684\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u5be6\u5728\u8d85\u65b9\u4fbf."),(0,l.kt)("p",null,"\u5f88\u96e3\u7528\u7c21\u77ed\u8a00\u8a9e\u8868\u8ff0\u9019\u7a2e\u4e92\u52d5\u958b\u767c\u7684\u7d93\u9a57\u3002\u771f\u7684\u8981\u7a0d\u5fae\u63cf\u8ff0\u7684\u8a71\uff0c\u90a3\u662f\u4e00\u7a2e\u4e0d\u7ba1\u4f60\u60f3\u8981\u600e\u9ebc\u9032\u884c\u4e0b\u4e00\u500b\u958b\u767c\u6b65\u9a5f\u6642\uff0cTurboGears \u90fd\u5e6b\u4f60\u6e96\u5099\u597d\u4e86\u5404\u7a2e\u57fa\u672c\u5de5\u5177\u7684\u611f\u89ba."),(0,l.kt)("p",null,"(\u4ee5\u4e0b\u4e0d\u5305\u542b\u7a0b\u5f0f\u78bc)."),(0,l.kt)("p",null,"\u8a2d\u8a08\u8003\u91cf"),(0,l.kt)("p",null,"\u7522\u751f\u5668\u7a0b\u5f0f\u88e1\u4f7f\u7528\u5230\u5927\u91cf\u5c0f\u584a\u7684\u8868\u55ae\uff0c\u7528\u4e0a AJAX \u6280\u8853\u53ef\u4ee5\u5927\u5e45\u7e2e\u77ed\u4f86\u4f86\u56de\u56de\u4fee\u6539\u7684\u6642\u9593\uff0c\u589e\u9032\u4f7f\u7528\u8005\u7d93\u9a57."),(0,l.kt)("p",null,"\u63a1\u7528 ' \u5167\u5bb9\u70ba\u4e2d\u5fc3 ' \u7684\u958b\u767c\u65b9\u5f0f\uff0ccontroller \u4e2d\u76e1\u91cf\u53ea\u8fd4\u56de\u8207\u5167\u5bb9\u6709\u95dc\u7684\u8cc7\u6599\u3002\u6240\u6709\u5167\u5bb9\u5c55\u793a\u90fd\u5728\u6a23\u7248\u8ddf javascript \u4e2d\u7522\u751f."),(0,l.kt)("p",null,"\u958b\u767c\u4e4b\u521d\u5c31\u53ef\u4ee5\u9810\u898b\u7a0b\u5f0f\u4e2d\u5c07\u6703\u51fa\u73fe\u76f8\u5c0d\u5927\u91cf\u7684 Javascript \u7a0b\u5f0f\u78bc\uff0c\u6211\u76e1\u91cf\u63a1\u7528 AJAX in Action \u4e2d\u63d0\u5230\u5c07\u7a0b\u5f0f\u78bc\u8ddf\u7db2\u9801\u5206\u96e2\u7684\u65b9\u5f0f\u5be6\u505a\uff0c\u5c07 Javascript \u7528 import \u7684\u65b9\u5f0f\u5305\u542b\u9032\u7db2\u9801. "),(0,l.kt)("p",null,"\u539f\u578b\u968e\u6bb5\n\u5728 protocontroller.py \u4e2d\u65b0\u589e\u4e00\u500b\u65b9\u6cd5\u51fd\u5f0f\uff0c\u5728\u5176\u4e2d\u624b\u52d5\u5efa\u7acb\u4e00\u500b\u5217\u8868 (\u9810\u898b\u5c07\u4f86\u5c07\u6539\u6210\u5f9e\u8cc7\u6599\u5eab\u4e2d\u8b80\u51fa), \u8fd4\u56de\u5217\u8868\u5230\u7db2\u9801\uff0c\u4f5c\u70ba\u525b\u958b\u59cb\u8981\u50b3\u5165\u7db2\u9801\u7684\u8cc7\u6599."),(0,l.kt)("p",null,"\u5efa\u7acb\u4e00\u500b\u525b\u525b\u7684\u65b9\u6cd5\u51fd\u5f0f\u6240\u7528\u5230\u7684\u6a23\u7248 (template), \u5728\u6a23\u7248\u4e2d\u5efa\u7acb\u4e00\u500b\u8868\u55ae\uff0c\u4f86\u8b93\u4f7f\u7528\u8005\u9078\u64c7\u50b3\u5165\u7684\u8cc7\u6599\u3002\u4e26\u63d0\u4f9b\u4e00\u500b\u7d66\u4f7f\u7528\u8005\u4e92\u52d5\u7528\u7684\u6309\u9215."),(0,l.kt)("p",null,"\u4f7f\u7528\u8005\u6309\u4e0b\u4e92\u52d5\u7528\u7684\u6309\u9215\u5f8c\uff0c\u5229\u7528 mochikit (TurboGears \u5167\u5efa\u7684 javascript \u51fd\u5f0f\u5eab) \u63d0\u4f9b\u7684 DOM \u8655\u7406\u53c3\u6578\uff0c\u7531\u4f7f\u7528\u8005\u9078\u64c7\u7684\u9078\u9805\u4f86\u52d5\u614b\u5275\u5efa\u9032\u4e00\u6b65\u7684\u8868\u55ae\u8207\u7b2c\u4e8c\u500b\u4e92\u52d5\u7528\u7684\u6309\u9215."),(0,l.kt)("p",null,"\u4f7f\u7528\u8005\u586b\u597d\u76f8\u95dc\u8cc7\u8a0a\uff0c\u6309\u4e0b\u7b2c\u4e8c\u500b\u4e92\u52d5\u7528\u7684\u6309\u9215\u3002\u50b3\u56de\u8cc7\u6599\u5230\u53e6\u4e00\u500b\u65b9\u6cd5\u51fd\u5f0f\uff0c\n\u53d6\u5f97\u4e0b\u4e00\u500b\u9801\u9762."),(0,l.kt)("p",null,"exception: \u4f7f\u7528\u8005\u4fee\u6539\u539f\u4f86\u7684\u9078\u64c7\uff0c\u6309\u4e0b\u4e92\u52d5\u7528\u7684\u6309\u9215\u5f8c\uff0c\u5229\u7528 mochikit \u63d0\u4f9b\u7684 DOM \u8655\u7406\u51fd\u5f0f\u66f4\u65b0\u539f\u672c\u52d5\u614b\u7522\u751f\u7684\u5167\u5bb9. "),(0,l.kt)("p",null,"AJAX \u7db2\u9801\n\u4f7f\u7528 mochikit \u63d0\u4f9b\u7684\u975e\u540c\u6b65 (Async) \u8655\u7406\u51fd\u5f0f\uff0c\u5f9e\u4f3a\u670d\u5668\u53d6\u56de\u8cc7\u8a0a.   "),(0,l.kt)("p",null,"\u611f\u60f3\nAJAX \u975e\u540c\u6b65\u8655\u7406\u90e8\u5206\u9700\u8981 server /client \u4e00\u8d77\u914d\u5408\u624d\u884c\uff0c\u56e0\u6b64\u5c0d\u4e00\u500b\u7db2\u9801\u6846\u67b6\u800c\u8a00\uff0c\u4e0d\u662f\u55ae\u7d14\u52a0\u4e0a\u4e00\u500b AJAX \u51fd\u5f0f\u5eab\uff0c\u9019\u500b\u6846\u67b6\u5c31\u53ef\u4ee5\u8aaa\u662f\u652f\u63f4 AJAX. TurboGears \u5728\u9019\u9ede\u4e0a\u5408\u683c\u4e86\uff01"),(0,l.kt)("p",null,"\u958b\u767c\u6642\u5f88\u5999\u7684\u5730\u65b9\u662f Turbogears \u8655\u7406\u8868\u55ae\u53c3\u6578 (POST) \u8ddf\u7db2\u9801\u53c3\u6578 (GET) \u7684\u65b9\u5f0f\u662f\u4e00\u81f4\u7684\uff0c\u6240\u4ee5\u539f\u672c controller \u4e2d\u5beb\u597d\u7684\u7a0b\u5f0f\u6839\u672c\u4e0d\u600e\u9ebc\u9700\u8981\u4fee\u6539. "),(0,l.kt)("p",null,"Turbogears \u8fd4\u56de\u7684\u8cc7\u6599\u9664\u4e86\u7d66\u6a23\u7248\u7528\u4e4b\u5916\uff0c\u8981\u56de\u50b3 JSON \u683c\u5f0f\u53ea\u8981\u5728 uri \u5f8c\u52a0\u4e0a '?tg_format=json' \u5373\u53ef\uff0c\u4e5f\u4e0d\u5fc5\u505a\u984d\u5916\u8655\u7406. "),(0,l.kt)("p",null,"javascript \u5f88\u591a\u8a9e\u6cd5\u8ddf c \u548c python \u76f8\u4f3c\uff0cmochikit \u51fd\u5f0f\u5eab\u66f4\u662f\u501f\u7528\u4e86\u5f88\u591a python \u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u56e0\u6b64\u5be6\u969b\u5beb\u8d77\u4f86 client/server side \u7a0b\u5f0f\uff0c\u8f49\u63db\u9593\u4e26\u4e0d\u611f\u5230\u592a\u904e\u7a81\u5140."),(0,l.kt)("p",null,"\u5230\u76ee\u524d\u4f7f\u7528\u4e0a\u9084\u6c92\u767c\u73fe TurboGears \u6c92\u6709 url mapping \u6709\u4ec0\u9ebc\u58de\u8655\uff0c\u8981\u7528 url mapping \u7684\u8a71\u518d\u88dd routes \u4e0d\u9072."))}c.isMDXComponent=!0}}]);