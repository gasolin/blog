"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[45303],{75002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(8209);const i={title:"kid \u6216 genshi \u4e2d\u6587\u6a23\u677f\u7de8\u8f2f",tags:["python"],date:new Date("2006-10-06T09:57:07.000Z")},r=void 0,l={permalink:"/python/kid-genshi-chinese-template",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/python/kid-genshi-chinese-template.md",source:"@site/blog/python/kid-genshi-chinese-template.md",title:"kid \u6216 genshi \u4e2d\u6587\u6a23\u677f\u7de8\u8f2f",description:"\u539f\u672c\u4f7f\u7528 TurboGears \u90fd\u662f\u62ff\u4f86\u505a\u4e9b\u7db2\u7ad9\u61c9\u7528\u7a0b\u5f0f\u7684\u539f\u578b, \u4eab\u53d7\u5b83\u5e36\u4f86\u7684\u6a02\u8da3. \u73fe\u5728\u7d42\u65bc\u7b49\u5230\u4e00\u500b\u53ef\u4ee5\u88fd\u4f5c\u5be6\u969b\u7db2\u7ad9\u7684\u6a5f\u6703.",date:"2006-10-06T09:57:07.000Z",formattedDate:"October 6, 2006",tags:[{label:"python",permalink:"/tags/python"}],readingTime:1.64,hasTruncateMarker:!1,authors:[],frontMatter:{title:"kid \u6216 genshi \u4e2d\u6587\u6a23\u677f\u7de8\u8f2f",tags:["python"],date:"2006-10-06T09:57:07.000Z"},prevItem:{title:"\u6536\u5230\u7ba1\u7406\u6b0a\u9650",permalink:"/python/get-turbogear-auth"},nextItem:{title:"TurboGears on O3 Magzine",permalink:"/python/TurboGears-on-O3-Magzine"}},s={authorsImageUrls:[]},p=[],h={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u539f\u672c\u4f7f\u7528 TurboGears \u90fd\u662f\u62ff\u4f86\u505a\u4e9b\u7db2\u7ad9\u61c9\u7528\u7a0b\u5f0f\u7684\u539f\u578b\uff0c\u4eab\u53d7\u5b83\u5e36\u4f86\u7684\u6a02\u8da3\u3002\u73fe\u5728\u7d42\u65bc\u7b49\u5230\u4e00\u500b\u53ef\u4ee5\u88fd\u4f5c\u5be6\u969b\u7db2\u7ad9\u7684\u6a5f\u6703. "),(0,o.kt)("p",null,"\u6211\u6253\u7b97\u4f7f\u7528 TurboGears \u7684 1.1 (\u5728 SVN Trunk \u958b\u767c\u4e2d) \u7248\u672c\u958b\u59cb\u505a\u4e00\u500b\u4e2d\u6587\u7684\u61c9\u7528\u7db2\u7ad9.\n\u4f7f\u7528 genshi \u505a\u7db2\u9801\u6a23\u677f\u7cfb\u7d71\u548c SQLAlchemy \u505a ORM, \u4e26\u4f7f\u7528 pydev (python) + Aptana (web) eclipse \u74b0\u5883\u958b\u767c."),(0,o.kt)("p",null,"\u525b\u958b\u59cb\u73a9\u5f97\u5f88\u9806\u5229\uff1aP\n\u76f4\u5230\u6211\u767c\u73fe\u5728\u9810\u89bd\u7db2\u9801\u6642\u767c\u751f\u4e86\u932f\u8aa4.\n\u932f\u8aa4\u8a0a\u606f\u770b\u8d77\u4f86\u662f\u6709\u4e2d\u6587\u7684\u5730\u65b9\u6703\u5831\u932f\uff0c\u56e0\u6b64\u6211\u4ee5\u70ba\u662f\u7db2\u9801\u6a23\u677f\u9810\u8a2d\u7de8\u78bc\u4e0d\u662f 'utf-8' \u7684\u554f\u984c."),(0,o.kt)("p",null,"\u627e\u4e86\u534a\u5929\uff0c\u5230\u5f8c\u4f86\u76f4\u63a5\u7528\u700f\u89bd\u5668\u9810\u89bd\u6642\uff0c\u624d\u767c\u73fe\u6574\u500b\u4e2d\u6587\u90e8\u4efd\u90fd\u8b8a\u6210\u4e86\u4e82\u78bc\uff0c\u6539\u7de8\u78bc\u70ba big5 \u6642\u624d\u986f\u793a\u6b63\u5e38\u3002\u539f\u4f86\u7f6a\u9b41\u798d\u9996\u662f\u4f5c\u696d\u7cfb\u7d71\u548c\u7de8\u8f2f\u5668\uff01"),(0,o.kt)("p",null,"\u4f5c\u696d\u7cfb\u7d71\u9810\u8a2d\u7de8\u78bc\u662f big5, \u56e0\u6b64\u7167\u4e00\u822c\u8f38\u5165\u65b9\u5f0f\u5728\u7de8\u8f2f\u5668\u4e2d\u7de8\u8f2f\u5132\u5b58\u4e2d\u6587\u5b57\u7684\u7d50\u679c\uff0c\u7576\u7136\u4e0d\u662f\u6211\u6240\u671f\u671b\u7684 utf-8 \u56c9.\n\u7576\u6211\u6539\u4f7f\u7528 Dreamweaver \u4f86\u7de8\u8f2f\u6a23\u7248\u5f8c\uff0c\u4e00\u5207\u986f\u793a\u5c31\u56de\u6b78\u6b63\u5e38\u4e86.\n\u61c9\u8a72\u662f\u7de8\u8f2f\u6642 Dreamweaver \u6703\u81ea\u52d5\u5e6b\u5fd9\u8f49\u78bc\u5427:-D"),(0,o.kt)("p",null,"Anyway, \u9084\u662f\u5e0c\u671b\u80fd\u627e\u5230\u500b OpenSource \u7684\u7db2\u9801\u7de8\u8f2f\u5668\u53ef\u4ee5\u505a\u5230\u570b\u969b\u5316\u652f\u63f4\u5440."))}u.isMDXComponent=!0}}]);