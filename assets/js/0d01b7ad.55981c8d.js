"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35146],{22916:(t,p,e)=>{e.r(p),e.d(p,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>y,metadata:()=>r,toc:()=>i});var n=e(87462),a=(e(67294),e(3905));e(8209);const y={title:"\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u7684\u6d41\u6c13: pypy",tags:["python","pypy"],date:new Date("2007-03-31T04:46:05.000Z")},o=void 0,r={permalink:"/python/pypy-intro",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/python/pypy-intro.md",source:"@site/blog/python/pypy-intro.md",title:"\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u7684\u6d41\u6c13: pypy",description:"PyPy 1.0 \u525b\u767c\u4f48",date:"2007-03-31T04:46:05.000Z",formattedDate:"March 31, 2007",tags:[{label:"python",permalink:"/tags/python"},{label:"pypy",permalink:"/tags/pypy"}],readingTime:2.04,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u7684\u6d41\u6c13: pypy",tags:["python","pypy"],date:"2007-03-31T04:46:05.000Z"},prevItem:{title:"pypy \u67b6\u69cb\u5206\u6790 1",permalink:"/python/trace-pypy-arch-1"},nextItem:{title:"\u4f86\u500b\u7db2\u6458",permalink:"/digest/a-digest"}},l={authorsImageUrls:[]},i=[],h={toc:i};function s(t){let{components:p,...e}=t;return(0,a.kt)("wrapper",(0,n.Z)({},h,e,{components:p,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://codespeak.net/pypy/dist/pypy/doc/release-1.0.0.html%20"},"PyPy 1.0 \u525b\u767c\u4f48"),"\nPyPy \u662f:"),(0,a.kt)("p",null,"1","."," \u4f7f\u7528 Python \u8a9e\u8a00\u7de8\u5beb\u7684 Python \u8a9e\u8a00 (\u7a31\u4f5c rpython).\n2","."," \u53ef\u4ee5\u5c07 python \u7a0b\u5f0f\u78bc\u7de8\u8b6f\u6210\u539f\u751f\u7684 c, CLI (.net 2.0), javascript \u6216\u5176\u4ed6\u8a9e\u8a00\u57f7\u884c\u7a0b\u5f0f\uff0c\u63d0\u9ad8\u57f7\u884c\u901f\u5ea6.\n3","."," \u53ef\u4ee5\u628a rpython \u7de8\u8b6f\u6210 javascript , \u7528\u4f86\u7522\u751f\u5ba2\u6236\u7aef javascript / \u7de8\u5beb ajax \u61c9\u7528.\n4","."," \u53ef\u4ee5\u5c07 rpython \u7a0b\u5f0f\u78bc\u6d41\u7a0b\u5c55\u793a\u6210\u8996\u5716.\n5","."," \u53ef\u4ee5\u900f\u904e JIT \u7522\u751f\u81ea\u8a02\u7248\u672c\u7684\u7de8\u8b6f\u5668."),(0,a.kt)("p",null,"\u70ba\u4ec0\u9ebc\u8aaa pypy \u662f\u6d41\u6c13\u54e9\uff1f\u56e0\u70ba\u8ddf\u5176\u4ed6\u7a0b\u5f0f\u8a9e\u8a00\u76f8\u6bd4\uff0c\u5b83\u6839\u672c\u5c31\u662f\u5728\u4f5c\u5f0a\u561b\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u8aaa c \u8a9e\u8a00\u5beb\u7684\u7a0b\u5f0f\u6700\u5feb\uff0cpypy \u53ef\u4ee5\u5c07\u7a0b\u5f0f\u78bc\u81ea\u52d5\u8f49\u6210 c \u7248\u7a0b\u5f0f\u3002\u7528 gcc \u7de8\u8b6f\u5f8c\u50c5\u6162\u539f\u751f c \u57f7\u884c\u6a94 10~20%."),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u8aaa .Net \u8de8\u5e73\u53f0\uff0cpypy \u53ef\u4ee5\u5c07\u7a0b\u5f0f\u78bc\u81ea\u52d5\u8f49\u6210 .Net \u7248\u7a0b\u5f0f\u3002\u7de8\u8b6f\u5f8c\u6bd4  ",(0,a.kt)("a",{parentName:"li",href:"http://www.voidspace.org.uk/python/weblog/arch_d7_2007_03_24.shtml#e674"}," MS \u5b98\u65b9\u63d0\u4f9b\u7684 .Net \u5e73\u53f0 IronPython \u5feb 100 \u500d"),"."),(0,a.kt)("li",{parentName:"ul"},"\u5beb\u597d\u7684\u7a0b\u5f0f\u53ef\u4ee5\u900f\u904e pypy \u81ea\u52d5\u5e6b\u4f60\u756b\u6d41\u7a0b\u5716\u3002\u6700\u6050\u6016\u7684\u662f pypy \u662f\u4f7f\u7528 Python \u8a9e\u8a00\u7de8\u5beb\u7684 Python \u8a9e\u8a00\uff0c\u53ef\u900f\u904e\u8f49\u8b6f\u5668\u7de8\u8b6f\u6210\u5404\u5e73\u53f0\u57f7\u884c\u7a0b\u5f0f\u4ee5\u53d6\u5f97\u8d85\u904e cpython  \u7684\u6548\u80fd.\n\u5404\u7a2e\u8a9e\u8a00\u8f49\u8b6f\u5668 (translator) \u4e5f\u53ef\u4ee5\u7528 rpython \u672c\u8eab\u64b0\u5beb\u3002\u4ee5\u5f8c rpython \u8a9e\u8a00\u958b\u767c\u8005\u4e0d\u7528\u662f C \u8a9e\u8a00\u5c08\u5bb6\u4e5f\u53ef\u4ee5\u53c3\u8207\u6539\u9032 Python \u8a9e\u8a00\uff0c\u8207\u5176\u4ed6\u8a9e\u8a00\u76f8\u6bd4\u52a0\u5165\u5404\u7a2e\u5be6\u9a57\u6027\u65b0\u7279\u6027\u7684\u96e3\u5ea6\u7c21\u55ae\u4e86\u597d\u5e7e\u500b\u6578\u91cf\u7d1a.")),(0,a.kt)("p",null,"\u7528 pypy \u76ee\u524d\u5df2\u7d93\u53ef\u4ee5\u7522\u751f JavaScript \u7a0b\u5f0f\u78bc\uff0c\u4f86\u652f\u63f4 AJAX \u958b\u767c.\n\u4ee5\u5f8c\u60f3\u5fc5\u4e5f\u80fd\u7522\u751f ActionScript \u7a0b\u5f0f\u78bc\uff0c\u652f\u63f4 Flash/Flex/Appolo \u958b\u767c\u5427\uff1f"),(0,a.kt)("p",null,"\u6211\u5df2\u7d93\u6e96\u5099\u8981\u5c48\u670d\u65bc pypy \u7684\u60e1\u52e2\u529b\u4e86 XD"))}s.isMDXComponent=!0}}]);