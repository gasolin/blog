"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[82878],{21455:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=l(87462),n=(l(67294),l(3905));l(8209);const r={title:"3 \u5206\u9418\u5b78\u6703\u7528 firebug \u9664\u932f",tags:["javascript","firebug"],date:new Date("2012-08-10T10:00:32.000Z")},i=void 0,a={permalink:"/devtools/debug-with-firebug",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/devtools/debug-with-firebug.md",source:"@site/blog/devtools/debug-with-firebug.md",title:"3 \u5206\u9418\u5b78\u6703\u7528 firebug \u9664\u932f",description:"firebug \u662f firefox \u7684\u4e00\u500b\u63d2\u4ef6.",date:"2012-08-10T10:00:32.000Z",formattedDate:"August 10, 2012",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"firebug",permalink:"/tags/firebug"}],readingTime:1.735,hasTruncateMarker:!1,authors:[],frontMatter:{title:"3 \u5206\u9418\u5b78\u6703\u7528 firebug \u9664\u932f",tags:["javascript","firebug"],date:"2012-08-10T10:00:32.000Z"},prevItem:{title:"Blockly + Arduino + Grove = Blocklyduino (pre-alpha)",permalink:"/tools/Blockly-Arduino-Grove-Blocklyduino-pre-alpha"},nextItem:{title:"OpenStack\u662f\u4ec0\u9ebc\uff1f",permalink:"/devtools/what-is-OpenStack"}},s={authorsImageUrls:[]},c=[{value:"\u5370\u51fa\u4e00\u822c\u8a0a\u606f : console.log",id:"\u5370\u51fa\u4e00\u822c\u8a0a\u606f--consolelog",level:2},{value:"\u5370\u51fa\u5177\u6709\u63d0\u793a\u5716\u793a\u7684\u8a0a\u606f console.info/console.warn/console.error",id:"\u5370\u51fa\u5177\u6709\u63d0\u793a\u5716\u793a\u7684\u8a0a\u606f-consoleinfoconsolewarnconsoleerror",level:2},{value:"\u4f7f\u7528\u9664\u932f\u4ecb\u9762 debugger",id:"\u4f7f\u7528\u9664\u932f\u4ecb\u9762-debugger",level:2},{value:"\u8a08\u7b97\u82b1\u8cbb\u6642\u9593 console.time/console.timeEnd",id:"\u8a08\u7b97\u82b1\u8cbb\u6642\u9593-consoletimeconsoletimeend",level:2}],u={toc:c};function g(e){let{components:o,...l}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,l,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"firebug \u662f firefox \u7684\u4e00\u500b\u63d2\u4ef6.\n\u53ef\u4ee5\u8aaa\u662f\u7576\u524d\u7528\u4f86 debug javascript \u7a0b\u5f0f\u7684\u6700\u4f73\u9078\u64c7.\nfirebug \u9084\u63d0\u4f9b\u4e86\u4e00\u4e9b\u597d\u7528\u7684\u51fd\u5f0f\u53ef\u4ee5\u8b93\u60a8\u7684\u6e2c\u8a66\u66f4\u9806\u66a2."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.digitalmediaminute.com/screencast/firebug-js/"},"\u9019\u6bb5\u5f71\u7247")," \u5c55\u793a\u4e86 firebug \u63d0\u4f9b\u7684\u4e00\u4e9b\u597d\u7528\u7684\u51fd\u5f0f."),(0,n.kt)("p",null,"\u5ee2\u8a71\u4e0d\u591a\u8aaa\uff0c\u99ac\u4e0a\u4f86\u770b\u770b\u5427:"),(0,n.kt)("h2",{id:"\u5370\u51fa\u4e00\u822c\u8a0a\u606f--consolelog"},"\u5370\u51fa\u4e00\u822c\u8a0a\u606f : console.log"),(0,n.kt)("p",null,"\u5c31\u50cf\u8a31\u591a\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u7684 'print' \u8a9e\u53e5\uff0cfirebug \u63d0\u4f9b\u7684 console.log \u8a9e\u53e5\u53ef\u4ee5\u76f4\u63a5\u5370\u51fa\u8b8a\u6578\u503c.\n\u4f8b\u5982"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"console.log (\u8b8a\u6578);")),(0,n.kt)("p",null,"\u6216\u8005\u5370\u51fa\u5305\u542b\u8b8a\u6578\u7684\u6558\u8ff0"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'console.log ("\u6558\u8ff0: % d"% \u8b8a\u6578);')),(0,n.kt)("h2",{id:"\u5370\u51fa\u5177\u6709\u63d0\u793a\u5716\u793a\u7684\u8a0a\u606f-consoleinfoconsolewarnconsoleerror"},"\u5370\u51fa\u5177\u6709\u63d0\u793a\u5716\u793a\u7684\u8a0a\u606f console.info/console.warn/console.error"),(0,n.kt)("p",null,"\u8207\u5370\u51fa\u4e00\u822c\u8a0a\u606f (console.log) \u4f7f\u7528\u7684\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c\uff0cconsole.info/console.warn/console.error \u53ea\u662f\u6703\u5728\u8a0a\u606f\u524d\u52a0\u4e0a\u76f8\u61c9\u5716\u793a"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"console.info (a) \u63d0\u793a\u5716\u793a\nconsole.warn (b) \u8b66\u793a\u5716\u793a\nconsole.error (c) \u932f\u8aa4\u5716\u793a")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u9664\u932f\u4ecb\u9762-debugger"},"\u4f7f\u7528\u9664\u932f\u4ecb\u9762 debugger"),(0,n.kt)("p",null,"\u53ea\u8981\u5728\u60f3\u8981\u9664\u932f\u7684\u5730\u65b9\u524d\u52a0\u4e0a\u4e00\u884c\u52a0\u4e0a debugger \u8a9e\u53e5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"debugger;\n.....")),(0,n.kt)("p",null,"\u57f7\u884c\u6642\u5c31\u6703\u5f48\u51fa\u4e00\u500b\u4e92\u52d5\u5f0f\u7684\u9664\u932f\u4ecb\u9762.\n\u9664\u932f\u4ecb\u9762\u63d0\u4f9b\u4e86\u55ae\u6b65\u57f7\u884c\u7b49\u529f\u80fd\uff0c\u4e26\u5373\u6642\u53d6\u5f97\u7576\u524d\u5404\u76f8\u95dc\u8b8a\u6578\u7684\u72c0\u614b.\n\u4e5f\u53ef\u4ee5\u770b\u5230\u8ff4\u5708\u6bcf\u6b21\u57f7\u884c\u5f8c\u6539\u8b8a\u7684\u503c"),(0,n.kt)("h2",{id:"\u8a08\u7b97\u82b1\u8cbb\u6642\u9593-consoletimeconsoletimeend"},"\u8a08\u7b97\u82b1\u8cbb\u6642\u9593 console.time/console.timeEnd"),(0,n.kt)("p",null,"\u5c0d\u65bc AJAX \u7a0b\u5f0f\u4f86\u8aaa\u6709\u4e9b\u52d5\u4f5c\u6703\u82b1\u8cbb\u8f03\u591a\u7684\u6642\u9593\uff0c\u4f7f\u7528"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'console.time ("\u8dd1")\n.....\nconsole.timeEnd ("\u8dd1")')),(0,n.kt)("p",null,"\u5c07\u8981\u6e2c\u8a66\u7684\u7a0b\u5f0f\u6bb5\u5305\u8d77\u4f86\uff0c\u57f7\u884c\u6642\u5c31\u6703\u5370\u51fa\u8a72\u6bb5\u7a0b\u5f0f\u6240\u82b1\u8cbb\u7684\u57f7\u884c\u6642\u9593"))}g.isMDXComponent=!0}}]);