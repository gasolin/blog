"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[48479],{66602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));a(8209);const n={title:"Making a Time Tracker in TurboGears",tags:["TurboGears"],date:new Date("2006-03-07T10:52:15.000Z")},i=void 0,l={permalink:"/code/Making-a-Time-Tracker-in-TurboGears",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/code/Making-a-Time-Tracker-in-TurboGears.md",source:"@site/blog/code/Making-a-Time-Tracker-in-TurboGears.md",title:"Making a Time Tracker in TurboGears",description:"2006/30/7",date:"2006-03-07T10:52:15.000Z",formattedDate:"March 7, 2006",tags:[{label:"TurboGears",permalink:"/tags/turbo-gears"}],readingTime:1.39,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Making a Time Tracker in TurboGears",tags:["TurboGears"],date:"2006-03-07T10:52:15.000Z"},prevItem:{title:"Hypy, hypertext in python",permalink:"/python/Hypy-hypertext-in-python"},nextItem:{title:"Access to IPv6 Home Network from Mobile Terminals",permalink:"/ipv6/Access-to-IPv6-Home-Network-from-Mobile-Terminals"}},m={authorsImageUrls:[]},s=[],d={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2006/30/7\nSince may people may come from ",(0,o.kt)("a",{parentName:"p",href:"http://42.blogs.warnock.me.uk/2006/03/will_python_dom.html"},"42"),", I suggest you to download the full instruction at ",(0,o.kt)("a",{parentName:"p",href:"http://trac.turbogears.org/turbogears/wiki/QuickPrototyping"},"TurboGears Trac"),", you'll see full instruction to make it."),(0,o.kt)("p",null,"This article is motivate by the ",(0,o.kt)("a",{parentName:"p",href:"http://oodt.jpl.nasa.gov/better-web-app.mov"},"framework comparison screencast")," performed by Sean Kelly. I found this screencast from ",(0,o.kt)("a",{parentName:"p",href:"http://groups.google.com/group/turbogears/browse_thread/thread/76378b490de76eab"},"TurboGears group"),". the ",(0,o.kt)("a",{parentName:"p",href:"http://oodt.jpl.nasa.gov/better-web-app.mov"},"screencast")," compare J2EE , ",(0,o.kt)("a",{parentName:"p",href:"http://www.rubyonrails.org"},"Rails")," ,",(0,o.kt)("a",{parentName:"p",href:"http://www.zope.org"},"Zope")," ,",(0,o.kt)("a",{parentName:"p",href:"http://www.turbogears.org"},"TurboGears")," ,and ",(0,o.kt)("a",{parentName:"p",href:"http://www.djangoproject.com"},"Django"),".  TurboGears did fairly well. but Sean Kelly wasn't using the latest version(~0.9) during his tests.Thus I try to re-imlement the demo by using bunch of exciting new features (Model Designer, CatWalk, DataController...) introduced in the latest TurboGears  version."),(0,o.kt)("p",null,"Origin version in ScreenCast"),(0,o.kt)("p",null,"The screencast implement page like this,  there is a add only interface, no editing."),(0,o.kt)("div",{className:"remark-oembed-inline remark-oembed-flickr","data-oembed":""},(0,o.kt)("a",{parentName:"div",href:"http://www.flickr.com/photos/gasolin/107081514/",className:"remark-oembed-anchor","data-oembed":"",rel:"noopener noreferrer nofollow",target:"_blank"},(0,o.kt)("img",{parentName:"a",src:"https://live.staticflickr.com/50/107081514_bcdd91b2b5.jpg",title:"TimeTracker preview",width:500,height:375,className:"remark-oembed-photo","data-oembed":""})),(0,o.kt)("template",{parentName:"div","data-oembed-template":""})),(0,o.kt)("p",null,"And it cost 2 python source files 49 lines of code, 2 page of templates, 53 lines of code, not a hundred lines of code."),(0,o.kt)("div",{className:"remark-oembed-inline remark-oembed-flickr","data-oembed":""},(0,o.kt)("a",{parentName:"div",href:"http://www.flickr.com/photos/gasolin/107081515/",className:"remark-oembed-anchor","data-oembed":"",rel:"noopener noreferrer nofollow",target:"_blank"},(0,o.kt)("img",{parentName:"a",src:"https://live.staticflickr.com/42/107081515_4dcbd2af65_w.jpg",title:"Time Tracker preview Evaluation",width:400,height:299,className:"remark-oembed-photo","data-oembed":""})),(0,o.kt)("template",{parentName:"div","data-oembed-template":""})),(0,o.kt)("p",null,"Re-Implement version with latest svn(#885)"),(0,o.kt)("p",null,"Its time catch up with Sean Kelly's demo in latest TurboGears version.\nThe re-implement with latest Turbogears svn like this. TurboGears > 0.9 provide autogenerate Editor(Catwalk) in Admin Panel(Toolbox)"),(0,o.kt)("div",{className:"remark-oembed-inline remark-oembed-flickr","data-oembed":""},(0,o.kt)("a",{parentName:"div",href:"http://www.flickr.com/photos/gasolin/107080749/",className:"remark-oembed-anchor","data-oembed":"",rel:"noopener noreferrer nofollow",target:"_blank"},(0,o.kt)("img",{parentName:"a",src:"https://live.staticflickr.com/33/107080749_f038bd03fb_z.jpg",title:"Timetracker catwalk",width:640,height:382,className:"remark-oembed-photo","data-oembed":""})),(0,o.kt)("template",{parentName:"div","data-oembed-template":""})),(0,o.kt)("p",null,"We can get another running mode editor(much usefull for real app) with DataController by several lines of code."),(0,o.kt)("div",{className:"remark-oembed-inline remark-oembed-flickr","data-oembed":""},(0,o.kt)("a",{parentName:"div",href:"http://www.flickr.com/photos/gasolin/107080750/",className:"remark-oembed-anchor","data-oembed":"",rel:"noopener noreferrer nofollow",target:"_blank"},(0,o.kt)("img",{parentName:"a",src:"https://live.staticflickr.com/40/107080750_ea36cfeced_z.jpg",title:"Timetracker  DataController",width:604,height:474,className:"remark-oembed-photo","data-oembed":""})),(0,o.kt)("template",{parentName:"div","data-oembed-template":""})),(0,o.kt)("p",null,"the re-implement version cost 2 python source files (now Turbogears config file is in python) 6 lines of code, 0 page of templates, not a ten lines of code. The re-implement version also include a full-functional database-relation editor."),(0,o.kt)("div",{className:"remark-oembed-inline remark-oembed-flickr","data-oembed":""},(0,o.kt)("a",{parentName:"div",href:"http://www.flickr.com/photos/gasolin/107080751/",className:"remark-oembed-anchor","data-oembed":"",rel:"noopener noreferrer nofollow",target:"_blank"},(0,o.kt)("img",{parentName:"a",src:"https://live.staticflickr.com/19/107080751_4ad98ddb35_w.jpg",title:"Timetracker Evaluation",width:400,height:299,className:"remark-oembed-photo","data-oembed":""})),(0,o.kt)("template",{parentName:"div","data-oembed-template":""})),(0,o.kt)("p",null,"Turbogears automatically generate pages for you both in admin and practice perspective. In Turbogears you can customize DataController and other widgets' looking and feel to fit your layout style."),(0,o.kt)("script",{async:!0,defer:!0},"\n    const isDocumentReady = () => {\n      if (document.readyState !== 'complete') {\n        document.addEventListener('readystatechange', isDocumentReady);\n        return false;\n      }\n\n      requestAnimationFrame(() => {\n        \n    document.querySelectorAll('div[data-oembed]').forEach((el) => {\n      const template = el.querySelector('[data-oembed-template]').content.cloneNode(true);\n      el.innerHTML = '';\n      el.attachShadow({ mode: 'closed' }).appendChild(template);\n    });\n\n    document.querySelectorAll('img[data-oembed][data-src]').forEach((img) => {\n      img.setAttribute('src', img.getAttribute('data-src'));\n      img.removeAttribute('data-src');\n    });\n\n    document.querySelectorAll('[data-oembed]').forEach((el) => {\n      el.removeAttribute('data-oembed');\n    });\n  ;\n      });\n\n      return true;\n    };\n\n    if (!isDocumentReady()) {\n      document.addEventListener('readystatechange', isDocumentReady);\n    }\n  "))}c.isMDXComponent=!0}}]);