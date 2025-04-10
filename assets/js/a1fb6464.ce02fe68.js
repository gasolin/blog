"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[31758],{90350:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var o=a(87462),l=(a(67294),a(3905));a(8209);const r={title:"Assimilate Django Template to TurboGears",tags:["python","TurboGears"],date:new Date("2006-07-22T05:10:43.000Z")},n=void 0,p={permalink:"/python/Assimilate-Django-Template-to-TurboGears",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/python/Assimilate-Django-Template-to-TurboGears.md",source:"@site/blog/python/Assimilate-Django-Template-to-TurboGears.md",title:"Assimilate Django Template to TurboGears",description:"Lots of people use Django template for Pyhton Web Framework(As Django project shares).",date:"2006-07-22T05:10:43.000Z",formattedDate:"July 22, 2006",tags:[{label:"python",permalink:"/tags/python"},{label:"TurboGears",permalink:"/tags/turbo-gears"}],readingTime:1.005,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Assimilate Django Template to TurboGears",tags:["python","TurboGears"],date:"2006-07-22T05:10:43.000Z"},prevItem:{title:"IPv6-IPv4 TCP Relay & PortProxy",permalink:"/ipv6/IPv6-IPv4-TCP-Relay-PortProxy"},nextItem:{title:"TurboGears \u4e2d\u4f7f\u7528 Django \u6a21\u677f",permalink:"/python/TurboGears-Django-template"}},s={authorsImageUrls:[]},u=[],i={toc:u};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,o.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Lots of people use Django template for Pyhton Web Framework(As Django project shares)."),(0,l.kt)("p",null,"And if we want to make people feel comfortable to try TurboGears (and then migrate to tg hopefully), first thing we can do is making django template system available on TurboGears."),(0,l.kt)("p",null,"Its easy because many template plugins (and their source codes) are available for TurboGears, I use a couple hours to read the ",(0,l.kt)("a",{parentName:"p",href:"http://www.turbogears.org/docs/plugins/template.html"},"template plugins doc")," and make the TurboDjango template plugin."),(0,l.kt)("p",null,"You can try the  django template in minutes. Here is the step by step guide:"),(0,l.kt)("p",null,"Install By SetupTools"),(0,l.kt)("p",null,"$ easy_install TurboDjango"),(0,l.kt)("p",null,"How to Make it just Work?"),(0,l.kt)("p",null,"Step 1","."," Quickstart"),(0,l.kt)("p",null,"Use tg-admin tool to create a project"),(0,l.kt)("p",null,"$ tg-admin quickstart tgdj"),(0,l.kt)("p",null,'The project name is "tgdj"'),(0,l.kt)("p",null,"Step 2","."," Edit Controller"),(0,l.kt)("p",null,'Edit tgdj/tgdj/controller.py, add following method in "Root" class.'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'@expose(template = "django:tgdj.templates.djpage")\ndef page(self):\nreturn dict(name="TurboGears")\n"djpage" is django template name')),(0,l.kt)("p",null,"Step 3","."," Edit Template"),(0,l.kt)("p",null,"Edit tgdj/tgdj/templates/djpage.html"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[h1]","Hello, {{name}}","[/h1]")),(0,l.kt)("p",null,'The template has "html" file suffix'),(0,l.kt)("p",null,"Step 4","."," Check Result"),(0,l.kt)("p",null,"In tgdj, start develop server by typing"),(0,l.kt)("p",null,"$ start-tgdj"),(0,l.kt)("p",null,"Then surf ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/page"},"http://localhost:8080/page"),", you'll see"),(0,l.kt)("blockquote",null,(0,l.kt)("h1",{parentName:"blockquote",id:"hello-turbogears"},"Hello, TurboGears"),(0,l.kt)("p",{parentName:"blockquote"},"The Release is available ",(0,l.kt)("a",{parentName:"p",href:"http://www.python.org/pypi/TurboDjango"},"here"),".")),(0,l.kt)("p",null,"To Django Users: You can migrate your database with ",(0,l.kt)("a",{parentName:"p",href:"http://inet6.blogspot.com/2006/07/turbogears-with-sqlsoup.html"},"SQLAlchemy's SqlSoup")))}m.isMDXComponent=!0}}]);