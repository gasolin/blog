"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[64637],{60528:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=e(87462),l=(e(67294),e(3905));e(8209);const p={title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361",tags:["python"],date:new Date("2008-08-08T09:35:47.000Z")},r=void 0,o={permalink:"/code/3min-flashcard",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/code/3min-flashcard.md",source:"@site/blog/code/3min-flashcard.md",title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361",description:"\u4f60/\u59b3\u662f\u5426\u662f\u53bb\u6b7b\u53bb\u6b7b\u5718\u7684\u4e00\u54e1\uff1f\u5728\u9019\u500b\u5145\u6eff\u9583\u5149\u8207\u67f4\u53ef\u592b\u65af\u57fa1812\u5e8f\u66f2\u7684\u7bc0\u65e5\uff0c\u6709\u7a2e\u66ab\u6642\u5931\u660e\u7684\u611f\u89ba\uff1f",date:"2008-08-08T09:35:47.000Z",formattedDate:"August 8, 2008",tags:[{label:"python",permalink:"/tags/python"}],readingTime:2.24,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361",tags:["python"],date:"2008-08-08T09:35:47.000Z"},prevItem:{title:"\u6211\u662f Python\uff0c10\u4ef6\u6240\u6709\u4eba\u90fd\u60f3\u554f\u6211\u7684\u4e8b",permalink:"/python/10-things-python"},nextItem:{title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361 -- \u88dc\u5145\u5305",permalink:"/code/3min-flashcard-patch"}},i={authorsImageUrls:[]},c=[],m={toc:c};function d(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://tbn0.google.com/images?q=tbn:Uy40wXVANJ4nMM:http://www.3515.com.cn/upfile/product/2006/10/00/2006101340970173.jpg"},(0,l.kt)("img",{parentName:"a",src:"http://tbn0.google.com/images?q=tbn:Uy40wXVANJ4nMM:http://www.3515.com.cn/upfile/product/2006/10/00/2006101340970173.jpg",alt:null}))),(0,l.kt)("p",null,"\u4f60 / \u59b3\u662f\u5426\u662f\u53bb\u6b7b\u53bb\u6b7b\u5718\u7684\u4e00\u54e1\uff1f\u5728\u9019\u500b\u5145\u6eff\u9583\u5149\u8207\u67f4\u53ef\u592b\u65af\u57fa 1812 \u5e8f\u66f2\u7684\u7bc0\u65e5\uff0c\u6709\u7a2e\u66ab\u6642\u5931\u660e\u7684\u611f\u89ba\uff1f"),(0,l.kt)("p",null,"\u70ba\u4e86\u5c0d\u6297\u9019\u500b\u7bc0\u65e5\uff0c\u6211\u5011\u5c31\u4f86\u81ea\u88fd\u9583\u5149\u5361\u5427\uff01"),(0,l.kt)("p",null,"\u9019\u500b\u9583\u5149\u5361\u88fd\u4f5c\u7684\u65b9\u6cd5\uff0c\u5c31\u662f\u5beb\u500b\u55ae\u8a5e\u8a18\u61b6\u7a0b\u5f0f\uff0c\u4e26\u628a\u9019\u500b\u55ae\u8a5e\u8a18\u61b6\u7a0b\u5f0f\u547d\u540d\u70ba \u9583\u5149\u5361 (FlashCard) (* \u8a3b) XD"),(0,l.kt)("p",null,"\u5beb\u4e00\u500b\u7c21\u55ae\u7684\u8a18\u61b6\u7a0b\u5f0f\u4e0d\u7528\u82b1\u592a\u591a\u6642\u9593\uff1a\u6211\u5011\u53ea\u9700\u8981\u4e00\u500b\u8a5e\u5eab\uff0c\u8207\u4e00\u500b\u7528\u4f5c\u6aa2\u8996\u8207\u8907\u7fd2\u8a5e\u689d\u7684\u4ecb\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> #!/usr/bin/python\n> # -*- coding: utf-8 -*-\n> \n> deck = [("a","apple"),\n>       ("b", "boy"),\n>       ("c", "cat"),\n>       ("d","dog")] #\u8a5e\u5eab\uff0c\u5305\u542b4\u7b46\u8a5e\u689d\n> \n> import random\n> \n> help = "commands: Fail/Lucky/Quit" #\u652f\u63f4\u7684\u547d\u4ee4\n> \n> while True:\n> card = random.choice(deck) # \u5f9e\u8a5e\u5eab\u88e1\u6311\u4e00\u500b\u8a5e\u689d\uff0c\u5982 (\'d\', \'dog\')\n> which = random.choice(card) # \u5f9e\u8a5e\u689d\u88e1\u6311\u4e00\u500b\u8a5e\uff0c\u5982 (\'d\', \'dog\') \u4e2d\u6311 \'d\' \u6216 \'dog\'\n> \n> print which #\u986f\u793a\u8a5e\n> print card[0], card[1] #\u5370\u51fa\u5b8c\u6574\u7b54\u6848\n> \n> action = raw_input("> ").lower() #\u8f38\u5165\u547d\u4ee4\n> if action == "q": #\u6309\u5176\u4ed6\u9375\u7e7c\u7e8c\uff0c\u6309q\u5c31\u8df3\u51fa\u8ff4\u5708\n>    break\n> if "f" in action or "l" in action: #\u5fd8\u8a18\u6642\u7684\u8655\u7406\u7b56\u7565\n>    print "...recorded."\n>    deck.append(card) #\u591a\u52a0\u672c\u8a5e\u689d\u5165\u8a5e\u5eab\u4e2d\uff0c\u4ee5\u63d0\u5347\u88ab\u9078\u4e2d\u7684\u983b\u7387\n> if "h" in action:\n>    print help #\u5370\u51fa\u8aaa\u660e\n>\n')),(0,l.kt)("p",null,"\u9032\u4e00\u6b65\u4fee\u6539\u53c3\u8003\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u82e5\u8981\u7528\u4f5c\u82f1\u6587\u5b78\u7fd2\u7684\u8a71\uff0c\u4e0d\u53ea\u524d\u9805 (\u82f1\u6587)\u3001\u5f8c\u9805 (\u4e2d\u6587\u89e3\u91cb)\uff0c\u4e5f\u8a31\u9084\u8981\u4e00\u6b04\u97f3\u6a19\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8a5e\u5eab\u61c9\u8a72\u8981\u53ef\u4ee5\u62bd\u63db")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8a5e\u5eab\u61c9\u8a72\u8981\u53ef\u4ee5\u5408\u4f75\u4f7f\u7528 (\u61c9\u8a72\u652f\u63f4\u591a\u8a5e\u5eab)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u7528\u66f4\u6709\u6548\u7684\u5b78\u7fd2\u6a21\u5f0f\uff0c\u5982",(0,l.kt)("a",{parentName:"p",href:"http://www.supermemo.com/english/ol/sm2.htm"},"sm2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u61c9\u8a72\u53ef\u4ee5\u7528\u5716\u7247\u4ee3\u66ff\u6587\u5b57\uff0c\u4ee5\u505a\u5230\u652f\u63f4\u300c\u97f3\u6a19\u300d\u7b49\u6548\u679c\u3002\u53c3\u8003\u8cc7\u6599")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://www.shallowsky.com/software/scripts/flashcard/"},"flashcard"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://www.leancrew.com/all-this/2007/11/simple-flashcard-program-in-python/"},"Simple flashcard program in Python")))),(0,l.kt)("p",null,"* \u8a3b\uff1a\u82f1\u6587\u4e2d\uff0c flashcard \u5c31\u662f\u55ae\u8a5e\u8a18\u61b6\u5361\u7684\u610f\u601d\u3002"))}d.isMDXComponent=!0}}]);