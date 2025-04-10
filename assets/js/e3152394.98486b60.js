"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[69166],{39170:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=l(87462),r=(l(67294),l(3905));l(8209);const n={title:"\u6df1\u5165 TurboGears - \u5f9e\u6a21\u677f\u751f\u6210\u7db2\u9801 (Templating)",tags:["TurboGears"],date:new Date("2006-02-28T13:58:26.000Z")},o=void 0,i={permalink:"/python/divein-TurboGears-Templating",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/python/divein-TurboGears-Templating.md",source:"@site/blog/python/divein-TurboGears-Templating.md",title:"\u6df1\u5165 TurboGears - \u5f9e\u6a21\u677f\u751f\u6210\u7db2\u9801 (Templating)",description:"TurboGears \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5f9e\u6a21\u677f\u751f\u6210\u7db2\u9801 (Templating) \u7684\u65b9\u5f0f,\u53ef\u4ee5\u66f4\u597d\u5730\u5c07\u63a7\u5236\u908f\u8f2f\u8207\u64cd\u4f5c\u4ecb\u9762\u5206\u958b,\u4f86\u9054\u5230\u7a0b\u5f0f\u78bc\u8207\u7db2\u9801\u5206\u96e2\u7684\u9700\u6c42.\u8b93\u7a0b\u5f0f\u8207\u7db2\u9801\u66f4\u6613\u65bc\u7dad\u8b77.",date:"2006-02-28T13:58:26.000Z",formattedDate:"February 28, 2006",tags:[{label:"TurboGears",permalink:"/tags/turbo-gears"}],readingTime:3.38,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u6df1\u5165 TurboGears - \u5f9e\u6a21\u677f\u751f\u6210\u7db2\u9801 (Templating)",tags:["TurboGears"],date:"2006-02-28T13:58:26.000Z"},prevItem:{title:"\u6df1\u5165 TurboGears - \u9a57\u8b49\u4e26\u8f49\u63db\u8868\u55ae\u53c3\u6578 (Validators) \u8b1b\u89e3\u8349\u7a3f",permalink:"/python/divein-TurboGears-form-Validators"},nextItem:{title:"\u7a0b\u5e8f\u7dad\u8b77",permalink:"/code/maintenance"}},p={authorsImageUrls:[]},s=[{value:"1.\u5efa\u7acb\u63a7\u5236\u908f\u8f2f(Add Logic)",id:"1\u5efa\u7acb\u63a7\u5236\u908f\u8f2fadd-logic",level:2},{value:"2.\u5efa\u7acb\u6a21\u677f",id:"2\u5efa\u7acb\u6a21\u677f",level:2},{value:"3.\u6a21\u677f\u5ba3\u544a",id:"3\u6a21\u677f\u5ba3\u544a",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],u={toc:s};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TurboGears \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5f9e\u6a21\u677f\u751f\u6210\u7db2\u9801 (Templating) \u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u5c07\u63a7\u5236\u908f\u8f2f\u8207\u64cd\u4f5c\u4ecb\u9762\u5206\u958b\uff0c\u4f86\u9054\u5230\u7a0b\u5f0f\u78bc\u8207\u7db2\u9801\u5206\u96e2\u7684\u9700\u6c42\u3002\u8b93\u7a0b\u5f0f\u8207\u7db2\u9801\u66f4\u6613\u65bc\u7dad\u8b77. "),(0,r.kt)("p",null,"\u4f7f\u7528 TurboGears \u4e2d\u7684\u9810\u8a2d\u6a21\u677f\uff0c\u53ef\u4ee5\u7528\u6240\u898b\u5373\u6240\u5f97 (WYSIWYG) \u7db2\u9801\u7de8\u8f2f\u5668\u4f86\u7de8\u8f2f\u7db2\u9801\u5916\u89c0.\n\u4e26\u5728\u56de\u50b3\u6642\u7528\u5b57\u5178 (dict) \u5f62\u5f0f\u50b3\u56de\u8b8a\u6578\uff0c\u964d\u4f4e\u7a0b\u5f0f\u78bc\u8207\u7db2\u9801\u4e4b\u9593\u7684\u76f4\u63a5\u95dc\u806f\u6027."),(0,r.kt)("p",null,"\u8b93\u6211\u5011\u7528\u6a21\u677f\u529f\u80fd\u53d6\u4ee3\u5c07\u7db2\u9801\u7528\u5b57\u4e32\u5b58\u5728 controllers \u4e2d\u7684\u65b9\u5f0f:"),(0,r.kt)("h2",{id:"1\u5efa\u7acb\u63a7\u5236\u908f\u8f2fadd-logic"},"1. \u5efa\u7acb\u63a7\u5236\u908f\u8f2f (Add Logic)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'0 from turbogears import controllers\n1 from turbogears import expose\n2 class Root(controllers.RootController):\n3    @expose(template=".templates.filename")\n4    def webpage(self):\n5        return dict()\n')),(0,r.kt)("p",null,'\u900f\u904e\u5728 @expose () \u65b9\u6cd5\u4e2d\u52a0\u5165 template=".templates.filename" \u5ba3\u544a\u4f86\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u6a21\u677f\u540d\u7a31.'),(0,r.kt)("p",null,"return \u578b\u614b\u5fc5\u9808\u662f\u5b57\u5178\u578b\u614b\u3002\u88e1\u9762\u50b3\u56de\u7684\u5167\u5bb9\u5247\u53ef\u4ee5\u52d5\u614b\u88ab\u586b\u5165\u6a21\u677f\u4e2d"),(0,r.kt)("h2",{id:"2\u5efa\u7acb\u6a21\u677f"},"2. \u5efa\u7acb\u6a21\u677f"),(0,r.kt)("p",null,'\u6211\u5011\u5efa\u7acb "filename.kid" \u7684\u6a21\u677f.\n\u6a21\u677f\u540d\u7a31\u8981\u8ddf controllers \u4e2d @expose (template=".templates.filename") \u7684 filename \u76f8\u7b26'),(0,r.kt)("h2",{id:"3\u6a21\u677f\u5ba3\u544a"},"3. \u6a21\u677f\u5ba3\u544a"),(0,r.kt)("p",null,"\u6a21\u677f\u8981\u4f7f\u7528 XHTML \u683c\u5f0f\u4f86\u64b0\u5beb. "),(0,r.kt)("p",null,"\u5f9e HTML \u8f49\u63db\u5230 XHTML \u7684\u4e3b\u8981\u5dee\u5225\u5728\u65bc XHTML \u5c0d\u7db2\u9801\u8a9e\u6cd5\u6709\u8f03\u56b4\u683c\u898f\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 html \u6a19\u7c64\u5167\u52a0\u4e0a ","<",'html xmlns:py="',(0,r.kt)("a",{parentName:"p",href:"http://purl.org/kid/ns#%22/"},'http://purl.org/kid/ns#"/'),">"," \u5ba3\u544a\uff0c\u8868\u793a\u9019\u662f\u4e00\u500b TurboGears \u7684\u6a21\u677f\uff0c\u5728\u57f7\u884c\u7684\u6642\u5019 TurboGears \u624d\u80fd\u6b63\u78ba\u5730\u5c07\u81ea\u884c\u8a2d\u5b9a\u7684\u8b8a\u6578\u66ff\u63db\u6210\u9069\u7576\u7684\u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u7684\u6a19\u7c64\u8981\u5c0d\u7a31\uff0c\u55ae\u4e00\u7684\u6a19\u7c64\u8981\u4ee5 / \u4f5c\u7d50\u5c3e\u3002\u4f8b\u5982 ","<","br",">"," \u8b8a\u6210 ","<","br/",">",", ","<","input",">"," \u8b8a\u6210 ","<","input/",">"))),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("p",null,'\u524d\u5e7e\u5206\u9418\u88e1\u7684\u7bc4\u4f8b\u90fd\u662f\u5728 Controller \u4e2d\u5c07\u7db2\u9801\u7528\u4e00\u500b "template" \u5b57\u4e32\u4f86\u8868\u793a\uff0c\u76f4\u63a5\u5c07\u7db2\u9801\u5167\u5bb9\u5b58\u5728 python \u7a0b\u5f0f\u88e1\u3002\u7136\u5f8c\u7528\u50b3\u56de\u503c (return) \u7684\u65b9\u5f0f\u5c07 "template" \u5b57\u4e32\u8f49\u63db\u6210\u7db2\u9801\u986f\u793a\u51fa\u4f86.\n\u7528\u9019\u7a2e\u65b9\u6cd5\u5beb\u7db2\u9801\u7a0b\u5f0f\uff0c\u597d\u8655\u662f\u6211\u5011\u53ea\u9700\u8981\u5c07\u7db2\u9801\u7a0b\u5f0f\u7576\u4f5c\u4e00\u822c\u7a0b\u5f0f\u4f86\u8655\u7406\u5c31\u884c\u4e86\uff0c\u4e0d\u9700\u8981\u4e86\u89e3\u592a\u591a\u8907\u96dc\u7684\u52d5\u614b\u7db2\u9801\u6280\u5de7\uff0c\u5229\u7528\u9019\u6a23\u7684\u65b9\u6cd5\uff0c\u6211\u5011\u9700\u8981\u4ed4\u7d30\u8655\u7406\u63d2\u5165\u8b8a\u6578\u7684\u985e\u5225\uff0c\u4e26\u5728\u56de\u50b3\u6642\u6ce8\u610f\u8b8a\u6578\u7684\u5b89\u6392\u9806\u5e8f\uff0c\u597d\u6b63\u78ba\u5730\u5c07\u5b57\u4e32\u4e2d\u7684\u8b8a\u6578\u66ff\u63db\u6210\u6211\u5011\u671f\u671b\u7684\u6a23\u5b50.\n\u6211\u5011\u5f88\u5feb\u5730\u5c31\u767c\u73fe\u9019\u6a23\u5c07\u7db2\u9801\u5167\u5bb9\u5d4c\u5728\u7a0b\u5f0f\u78bc\u88e1\u7684\u5beb\u4f5c\u65b9\u5f0f\uff0c\u96a8\u8457\u6f38\u6f38\u589e\u52a0\u7684\u529f\u80fd\u65b9\u6cd5\uff0c\u8207\u8981\u6c42\u66f4\u8907\u96dc\u7684\u5167\u5bb9\u5448\u73fe\u6642\uff0c\u7a0b\u5f0f\u78bc\u5c31\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u96e3\u4ee5\u7dad\u8b77.'),(0,r.kt)("p",null,"\u6211\u5011\u61c9\u8a72\u8981\u64c1\u6709\u65b9\u4fbf\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u4efb\u610f\u9806\u5e8f\u50b3\u56de\u6211\u5011\u60f3\u8981\u986f\u793a\u7684\u5167\u5bb9\uff0c\u4e26\u5728\u5be6\u969b\u7684\u7db2\u9801\u4e0a\u91cd\u8907\u904b\u7528\u9019\u4e9b\u8cc7\u8a0a\u3002\u6700\u597d\u9084\u53ef\u4ee5\u7528\u4e00\u822c\u7684\u6240\u898b\u5373\u6240\u5f97 (WYSIWYG) \u7db2\u9801\u7de8\u8f2f\u5668\u4f86\u7de8\u8f2f\u7db2\u9801\u5916\u89c0\uff0c"))}m.isMDXComponent=!0}}]);