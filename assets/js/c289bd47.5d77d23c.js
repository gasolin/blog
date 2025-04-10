"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10079],{10332:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var s=e(87462),o=(e(67294),e(3905));e(8209);const l={title:"\u7d50\u69cb\u6587\u672c(rst)\u8f49\u7db2\u9801\u6295\u5f71\u7247(s5)",tags:["s5","docutils","python","rst","pygments"],date:new Date("2007-03-16T18:48:05.000Z")},a=void 0,r={permalink:"/devtools/structure-text-rst-to-slides-s5",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/devtools/structure-text-rst-to-slides-s5.md",source:"@site/blog/devtools/structure-text-rst-to-slides-s5.md",title:"\u7d50\u69cb\u6587\u672c(rst)\u8f49\u7db2\u9801\u6295\u5f71\u7247(s5)",description:"\u5728\u770b pycon-trac-presentation \u6642,",date:"2007-03-16T18:48:05.000Z",formattedDate:"March 16, 2007",tags:[{label:"s5",permalink:"/tags/s-5"},{label:"docutils",permalink:"/tags/docutils"},{label:"python",permalink:"/tags/python"},{label:"rst",permalink:"/tags/rst"},{label:"pygments",permalink:"/tags/pygments"}],readingTime:1.29,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u7d50\u69cb\u6587\u672c(rst)\u8f49\u7db2\u9801\u6295\u5f71\u7247(s5)",tags:["s5","docutils","python","rst","pygments"],date:"2007-03-16T18:48:05.000Z"},prevItem:{title:"Functional Programming \u51fd\u6578\u5f0f\u7de8\u7a0b(\u7a0b\u5f0f\u8a2d\u8a08)",permalink:"/code/Functional-Programming"},nextItem:{title:"Python \u793e\u7fa4\u7684 web \u6846\u67b6\u958b\u767c",permalink:"/python/Python-web-frameworks"}},i={authorsImageUrls:[]},p=[],c={toc:p};function d(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,s.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u770b ",(0,o.kt)("a",{parentName:"p",href:"http://matt-good.net/2007/02/28/pycon-trac-presentation/"},"pycon-trac-presentation"),' \u6642\uff0c\n\u767c\u73fe Matt Good \u7528 docutils \u6a21\u7d44\u63d0\u4f9b\u7684 "rst2s5" \u5957\u4ef6\u4f86\u5c07\u7d50\u69cb\u6587\u672c (rst) \u8f49\u63db\u6210\u7db2\u9801\u6295\u5f71\u7247 (s5) \u6548\u679c\u9084\u883b\u4e0d\u932f\u7684\u3002\u7528\u4ed6\u5ba2\u88fd\u5316\u7684 rst2s5 \u6a21\u7d44\u53ef\u4ee5\u900f\u904e pygments \u652f\u63f4\u7a0b\u5f0f\u7684\u8a9e\u6cd5\u9ad8\u4eae\u5c55\u793a.'),(0,o.kt)("p",null,"\u4ee5\u4e0b\u63d0\u4f9b\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("h1",{id:"\u4e0b\u8f09"},"\u4e0b\u8f09"),(0,o.kt)("p",null,"$ easy_install docutils\n$ easy_install docutils pygments"),(0,o.kt)("p",null,"\u4e26\u4e0b\u8f09 ",(0,o.kt)("a",{parentName:"p",href:"http://matt-good.net/2007/02/28/pycon-trac-presentation/"},"rst2s5 with code high lighting")),(0,o.kt)("h1",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,o.kt)("p",null,"rst2s5.py ","[\u8f38\u5165]",".rst ","[\u8f38\u51fa]",".html"),(0,o.kt)("p",null,"i.e.\nrst2s5.py xxx.rst ooo.html"),(0,o.kt)("p",null,'\u6703\u7522\u751f\u7684\u8f38\u51fa\u7d50\u679c\u662f "ooo.html" \u9019\u500b\u6a94\u540d\u7684\u6a94\u6848\uff0c\n\u8ddf\u4e00\u500b\u5305\u542b s5 \u6295\u5f71\u7247 js/css \u8cc7\u6599\u7684\u8cc7\u6599\u593e.'),(0,o.kt)("h1",{id:"\u8a9e\u6cd5\u5099\u5fd8"},"\u8a9e\u6cd5\u5099\u5fd8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=======\n\u6a19\u984c\n=======\n\n:Author: Fred Lin\n:Date:   $Date: 2007-03-16 $\n\n\u4e00\u5f35\u6295\u5f71\u7247\n==========\n\n.. code-block:: pycon\n\n  >>> # python console\n\n.. class:: handout\n\n   handout \u662f\u653e\u8a3b\u89e3\u7684\u5730\u65b9. \u4e0d\u6703 show \u5230\u6295\u5f71\u7247\u4e0a\n   code-block \u53ef\u7528 pygments \u63d0\u4f9b\u7684\u5404\u7a2e\u8a9e\u6cd5\u9ad8\u4eae, \u5982 pycon, python, bash, html...\n\n\u6295\u5f71\u7247\u518d\u4e00\u5f35\n============\n\n.. class:: incremental\n\n   * 1st. item\n   * 2nd. item\n\n.. image:: python.png\n\n.. class:: handout\n\n   \u4f9d\u5e8f\u986f\u793a\u91cd\u9ede. image \u6703\u5d4c\u5165\u5716\u7247.\n\n.. include:: pylevels.rst\n\n\u8a9e\u6cd5\u53c3\u8003\n========\n\nhttp://docutils.sourceforge.net/docs/user/slide-shows.html\n\n.. class:: handout\n\n   \u524d\u4e00\u5f35\u5f8c\u7684 include \u8a9e\u53e5\u652f\u63f4\u5d4c\u5957\u5176\u4ed6 rst \u6587\u4ef6.\n\n")))}d.isMDXComponent=!0}}]);