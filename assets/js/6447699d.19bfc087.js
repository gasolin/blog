"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[45673],{63384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>k});var a=n(87462),p=(n(67294),n(3905));n(8209);const i={title:"plurk + jaiku \u4e00\u8d77\u767c\u7c21\u8a0a",tags:[],date:new Date("2008-09-18T08:57:51.000Z")},o=void 0,r={permalink:"/tools/plurk-jaiku-message",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/tools/plurk-jaiku-message.md",source:"@site/blog/tools/plurk-jaiku-message.md",title:"plurk + jaiku \u4e00\u8d77\u767c\u7c21\u8a0a",description:"\u4e0b\u8f09 plurkapipy \u8ddf python-jaiku \u5f8c\uff0c\u518d\u628a\u4e0b\u9762\u7684 python \u6a94\u6848\u53e6\u5b58\u65b0\u6a94\u3002\u586b\u5165\u5fc5\u9700\u7684\u5e33\u865f\u5bc6\u78bc\u6216 apikey \u5f8c\uff0c\u5c31\u53ef\u4ee5\u540c\u6642\u4f7f\u7528 plurk + jaiku \u56c9\u3002\u4e0b\u9762\u662f console \u7248\u672c\uff1a",date:"2008-09-18T08:57:51.000Z",formattedDate:"September 18, 2008",tags:[],readingTime:.775,hasTruncateMarker:!1,authors:[],frontMatter:{title:"plurk + jaiku \u4e00\u8d77\u767c\u7c21\u8a0a",tags:[],date:"2008-09-18T08:57:51.000Z"},prevItem:{title:"T-Mobile G1 \u548c Android SDK 1.0",permalink:"/android/T-Mobile-G1-Android-SDK-1-0"},nextItem:{title:"Will Django Live in separate world?",permalink:"/python/Will-Django-Live-in-separate-world"}},l={authorsImageUrls:[]},k=[],s={toc:k};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4e0b\u8f09 ",(0,p.kt)("a",{parentName:"p",href:"http://code.google.com/p/plurkapipy/"},"plurkapipy")," \u8ddf ",(0,p.kt)("a",{parentName:"p",href:"http://code.google.com/p/python-jaiku/"},"python-jaiku")," \u5f8c\uff0c\u518d\u628a\u4e0b\u9762\u7684 python \u6a94\u6848\u53e6\u5b58\u65b0\u6a94\u3002\u586b\u5165\u5fc5\u9700\u7684\u5e33\u865f\u5bc6\u78bc\u6216 apikey \u5f8c\uff0c\u5c31\u53ef\u4ee5\u540c\u6642\u4f7f\u7528 plurk + jaiku \u56c9\u3002\u4e0b\u9762\u662f console \u7248\u672c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'> #!/usr/bin/python\n> #coding=utf-8\n> import plurkapi #http://code.google.com/p/plurkapipy/\n> import jaiku #http://code.google.com/p/python-jaiku/\n> \n> #plurk login infomation\n> pnickname = ""\n> ppassword = ""\n> \n> #jaiku login infomation\n> jusername = ""\n> japikey = ""\n> \n> message = raw_input("\u8981\u9001\u51fa\u7684\u8a0a\u606f\uff1a")\n> \n> #jaiku\n> japi = jaiku.Api(username=jusername, api_key=japikey)\n> print japi.PostPresence(message)\n> \n> # plurk\n> papi = plurkapi.PlurkAPI()\n> if papi.login(pnickname, ppassword) == False:\n>     print "login fail"\n> else:\n>     print papi.addPlurk(content=message, lang="tr_ch")\n')),(0,p.kt)("p",null,"\u518d\u642d\u914d App Engine \u7684\u8a71\uff0c\u5f88\u5feb\u5c31\u53ef\u4ee5\u5beb\u51fa\u4e00\u500b\u7db2\u9801\u4ecb\u9762\u7684\u767c\u8a0a\u7a0b\u5f0f\u56c9\u3002"))}u.isMDXComponent=!0}}]);