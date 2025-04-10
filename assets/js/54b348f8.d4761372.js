"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[50718],{93423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));r(8209);const a={title:"Mercurial, \u5206\u652f\u8207\u5408\u4f75\u5f88\u7c21\u55ae",tags:["hg"],date:new Date("2010-09-11T00:27:20.000Z")},o=void 0,p={permalink:"/devtools/Mercurial-easy-branch-merge",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/devtools/Mercurial-easy-branch-merge.md",source:"@site/blog/devtools/Mercurial-easy-branch-merge.md",title:"Mercurial, \u5206\u652f\u8207\u5408\u4f75\u5f88\u7c21\u55ae",description:"Mercurial(Hg) \u4e00\u76f4\u662f\u6211\u5f88\u611b\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\u3002\u4ee5\u524d\u81ea\u5df1\u6700\u5e38\u7528\u7684\u7528\u9014\u662f\u62ff\u4f86\u53d6\u4ee3 svn\uff0c\u55ae\u7d14\u4eab\u53d7\u55ae\u6a5f/\u96e2\u7dda\u4f7f\u7528\u7248\u672c\u63a7\u5236\u7cfb\u7d71\u958b\u767c\u7684\u6a02\u8da3\u3002",date:"2010-09-11T00:27:20.000Z",formattedDate:"September 11, 2010",tags:[{label:"hg",permalink:"/tags/hg"}],readingTime:4.35,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Mercurial, \u5206\u652f\u8207\u5408\u4f75\u5f88\u7c21\u55ae",tags:["hg"],date:"2010-09-11T00:27:20.000Z"},prevItem:{title:"\u5206\u6563\u5f0f\u7248\u672c\u63a7\u5236\u7684\u5408\u4f5c\u6a21\u5f0f",permalink:"/devtools/corp-with-distributed-version-control-system"},nextItem:{title:"[Mercurial]\u591a\u4f86\u6e90\u66f4\u65b0",permalink:"/devtools/Mercurial-update-from-multi-source"}},i={authorsImageUrls:[]},u=[],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://mercurial.selenic.com/"},"Mercurial(Hg)")," \u4e00\u76f4\u662f\u6211\u5f88\u611b\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\u3002\u4ee5\u524d\u81ea\u5df1\u6700\u5e38\u7528\u7684\u7528\u9014\u662f\u62ff\u4f86\u53d6\u4ee3 ",(0,n.kt)("a",{parentName:"p",href:"http://subversion.tigris.org/"},"svn"),"\uff0c\u55ae\u7d14\u4eab\u53d7\u55ae\u6a5f / \u96e2\u7dda\u4f7f\u7528\u7248\u672c\u63a7\u5236\u7cfb\u7d71\u958b\u767c\u7684\u6a02\u8da3\u3002"),(0,n.kt)("p",null,"\u8981\u55ae\u6a5f\u4f7f\u7528\u7248\u672c\u63a7\u5236\u7cfb\u7d71\u958b\u767c\uff0c\u7167\u8457",(0,n.kt)("a",{parentName:"p",href:"http://inet6.blogspot.com/2007/04/mercurial-mozilla.html"},"\u6c34\u9280\u5206\u6563\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7d71\u7684\u4f7f\u7528\u6982\u5ff5"),"\u505a\u5c31\u884c\u4e86\u3002"),(0,n.kt)("p",null,"\u6700\u8fd1\u770b\u4e86",(0,n.kt)("a",{parentName:"p",href:"http://hginit.com/top/"},"Hg init"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"http://progit.org/book/zh/"},"ProGit"),"\u5169\u4efd\u5206\u5225\u8b1b Hg \u548c Git \u5206\u6563\u5f0f\u7248\u672c\u63a7\u5236\u7684\u66f8\uff0c\u88e1\u9762\u90fd\u76f8\u7576\u63a8\u5d07\u300c\u5206\u652f (Branch) \u958b\u767c\u300d\u7684\u6982\u5ff5\u3002\n\u6240\u8b02\u300c\u5206\u652f\u958b\u767c\u300d\uff0c\u5c31\u662f\u5c07\u4e3b\u5e79 (trunk) \u4fdd\u6301\u5728\u7a69\u5b9a\u53ef\u904b\u4f5c\u7684\u7248\u672c\uff08\u96d6\u7136\u672c\u4f86\u5c31\u8a72\u9019\u9ebc\u505a\uff09\uff0c\u5728\u958b\u767c\u4efb\u4f55\u65b0\u529f\u80fd\u6642\u90fd\u53e6\u5efa\u65b0\u5206\u652f (branch)\uff0c\u958b\u767c\u5230\u4e00\u6bb5\u843d\u4e4b\u5f8c\u518d\u5408\u4f75\u56de\u4e3b\u5e79\u3002\u80fd\u652f\u63f4\u9019\u6a23\u7684\u958b\u767c\u6a21\u5f0f\uff0c\u662f\u56e0\u70ba Hg \u6216 Git \u9019\u4e9b\u5206\u6563\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7d71\u505a\u958b\u5206\u652f\u3001\u5408\u4f75\u7b49\u52d5\u4f5c\u7684\u984d\u5916\u958b\u92b7\u90fd\u5f88\u4f4e\u3002"),(0,n.kt)("p",null,"\u90a3\u9ebc\u8981\u5be6\u969b\u4f7f\u7528\u6642\u8a72\u600e\u9ebc\u505a\u5462\uff1f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u958b\u5206\u652f")),(0,n.kt)("p",null,"\u6211\u6709\u4e00\u500b\u540d\u70ba\u300cZAKU\u300d\uff08\u85a9\u514b\uff09\u7684\u76ee\u9304\uff0c\u4e3b\u5e79\u7248\u672c\u4ee3\u865f\u70ba 3, \u73fe\u5728\u8981\u5be6\u4f5c\u4e00\u500b\u5c07\u7da0\u8272\u8b8a\u6210\u7d05\u8272\u7684\u529f\u80fd\uff0c\u9019\u6642\u6211\u5011\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u65b0\u5206\u652f\u4f86\u7e7c\u7e8c\u958b\u767c\u9019\u500b\u65b0\u529f\u80fd\u3002\u5206\u652f\u547d\u4ee4\u7684\u683c\u5f0f\u70ba\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> $ hg branch [branch name]\n")),(0,n.kt)("p",null,"\u56e0\u6b64\u8981\u5efa\u7acb\u4e00\u500b\u540d\u70ba\u300cred\u300d\u7684\u5206\u652f\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> $ hg branch red\n> marked working directory as branch red\n")),(0,n.kt)("p",null,"\u9019\u9ebc\u4e00\u4f86\uff0c\u4e4b\u5f8c commit \u7684 code \u90fd\u6703\u9032\u5165\u300cred\u300d\u9019\u500b\u5206\u652f\u4e86\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u67e5\u770b\u72c0\u614b")),(0,n.kt)("p",null,"\u5728 commit \u9032\u4e00\u4e9b code \u4e4b\u5f8c\uff08\u7248\u672c\u4ee3\u865f\u5230 13\uff09\uff0c\u8f38\u5165\u300chg branchs\u300d\u547d\u4ee4\u53ef\u4ee5\u5217\u51fa\u6240\u6709\u7248\u672c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> $ hg branches\n> default                       3:e2287f9031a1 (inactive)\n> red                           13:e590de4b0dc9\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5207\u63db\u5206\u652f")),(0,n.kt)("p",null,"\u5728\u958b\u767c\u65b0\u529f\u80fd\u7684\u540c\u6642\uff0c\u4e5f\u53ef\u80fd\u6703\u78b0\u4e0a\u6574\u500b\u5c08\u6848\u5171\u901a\u7684 bug\uff0c\u4ee5\u524d\u8001\u6d3e\u7684\u4f5c\u6cd5\u662f\u518d check out \u4e00\u4efd\u4e3b\u5e79\u7684\u7a0b\u5f0f\u78bc\uff0c\u7136\u5f8c\u5169\u908a\u4fee\u6b63\uff0c\u73fe\u5728\u6709\u4e86 hg, \u53ea\u8981\u5148\u66ab\u6642\u5207\u63db\u56de\u4e3b\u5e79\uff0c\u628a bug \u4fee\u6b63\u4e86\u518d\u5408\u4f75\u56de\u5206\u652f\uff08\u6216\u5230\u6642\u4e00\u6b21\u628a\u5206\u652f\u5408\u4f75\u56de\u4e3b\u5e79\uff09\u3002"),(0,n.kt)("p",null,"\u8981\u5207\u63db\u56de\u4e3b\u5e79\uff0c\u8f38\u5165\u300chg update default\u300d\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> $ hg up default\n> 4 files \u5df2\u66f4\u65b0, 0 files \u5df2\u5408\u4f75, 3 files \u5df2\u79fb\u9664, 0 files unresolved\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5408\u4f75")),(0,n.kt)("p",null,"\u7576\u6211\u5011\u628a\u300cred\u300d\u5206\u652f\u4e2d\u7684\u65b0\u529f\u80fd\u505a\u597d\u5f8c\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5c07\u9019\u4e9b\u4fee\u6539\u5408\u4f75\u56de\u4e3b\u5e79\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u7528\u4e0a\u9762\u7684\u65b9\u6cd5\u5207\u63db\u56de\u4e3b\u5e79\uff0c\u7136\u5f8c\u8f38\u5165\u300chg merge red\u300d\uff0c\u5373\u53ef\u5c07\u300cred\u300d\u5206\u652f\u4e2d\u7684\u4fee\u6539\u52a0\u9032\u4e3b\u5e79\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> $ hg merge red\n> 5 files \u5df2\u66f4\u65b0, 0 files \u5df2\u5408\u4f75, 0 files \u5df2\u79fb\u9664, 0 files unresolved\n> (branch merge, don't forget to commit)\n")),(0,n.kt)("p",null,"\u5408\u4f75\u547d\u4ee4\u7684\u683c\u5f0f\u70ba"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"hg merge ","[branch name]","\n\u5408\u4f75\u5b8c\u5f8c\u78ba\u8a8d\u6c92\u554f\u984c\uff0c\u5c31\u5c07\u7a0b\u5f0f\u78bc\u518d commit \u9032\u7248\u672c\u5eab\u5427\uff01")),(0,n.kt)("p",null,"\u5982\u679c\u53ea\u60f3 push \u67d0 branch \u7684\u4fee\u6539\u5230\u7248\u672c\u5eab\uff0c\u53ef\u4ee5\u4f7f\u7528"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"hg push --rev ","[version]","\n\u547d\u4ee4\uff0c\u9019\u6a23\u53ea\u6703\u5c07\u8207\u6307\u5b9a\u7248\u672c\u76f8\u95dc\u7684\u4fee\u6539\u4e0a\u50b3\u5230\u7248\u672c\u5eab\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"One more thing")),(0,n.kt)("p",null,"\u540c\u6a23\u7684\u65b9\u6cd5\uff0c\u6211\u5011\u53ef\u4ee5\u518d\u5efa\u7acb\u4e00\u500b\u5206\u652f\u300chorn\u300d\u4f86\u958b\u767c\u9577\u89d2\u7684\u529f\u80fd\uff0c\u7136\u5f8c\u518d\u5c07\u300chorn\u300d\u5206\u652f\u5408\u4f75\u56de\u4e3b\u5e79\u3002"),(0,n.kt)("p",null,"\u5225\u5fd8\u4e86 hg \u9084\u6709\u63d0\u4f9b\u4e00\u500b\u96e2\u7dda\u7db2\u9801\u700f\u89bd\u529f\u80fd\uff0c\u8f38\u5165\u300chg serve -p 5000\u300d\uff0c\u5728\u700f\u89bd\u5668\u4e0a\u8f38\u5165\u300chttp://localhost:5000\u300d\u5c31\u80fd\u770b\u5230\u985e\u4f3c gitweb \u7684\u7248\u672c\u63a7\u5236\u8a0a\u606f\u7db2\u9801\u3002\u9ede\u9078\u5de6\u5074\u7684\u300cgraph\u300d\u6a19\u7c64\uff0c\u53ef\u4ee5\u7528\u8996\u89ba\u5316\u7684\u65b9\u5f0f\u770b\u5230\u4e4b\u524d\u6240\u6709\u5206\u652f\u5408\u4f75\u7684\u5716\u5f62\u8a18\u9304\u56c9\uff01"),(0,n.kt)("p",null,"\u5b78\u6703\u5206\u652f\u8207\u5408\u4f75\u5f8c\uff0c\u4f60\u7684\u958b\u767c\u6548\u7387\u6703\u4e0d\u6703\u4e5f\u8b8a\u6210\u4e09\u500d\u901f\u54e9\uff1f"),(0,n.kt)("p",null,"\u53c3\u8003\u8cc7\u6599: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://stevelosh.com/blog/2009/08/a-guide-to-branching-in-mercurial/"},"http://stevelosh.com/blog/2009/08/a-guide-to-branching-in-mercurial/"))))}s.isMDXComponent=!0}}]);