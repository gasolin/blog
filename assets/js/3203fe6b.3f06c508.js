"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89341],{80353:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(8209);const r={title:"\u5982\u4f55\u8b93\u61c9\u7528\u7a0b\u5f0f\u76f4\u63a5\u5b89\u88dd\u5230SD\u5361\u57f7\u884c\uff082.2\uff09",tags:["Android"],date:new Date("2010-05-21T15:28:37.000Z")},d=void 0,i={permalink:"/android/app-run-in-sd-2-2",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/android/app-run-in-sd-2-2.md",source:"@site/blog/android/app-run-in-sd-2-2.md",title:"\u5982\u4f55\u8b93\u61c9\u7528\u7a0b\u5f0f\u76f4\u63a5\u5b89\u88dd\u5230SD\u5361\u57f7\u884c\uff082.2\uff09",description:"Android 2.2 \u4e2d\u65b0\u589e\u4e86\u61c9\u7528\u7a0b\u5f0f\u76f4\u63a5\u5b89\u88dd\u5230SD\u5361\u57f7\u884c (\u4e0d\u5c11\u4eba\u7a31\u9019\u500b\u529f\u80fd\u4f5c App2SD)\uff0c",date:"2010-05-21T15:28:37.000Z",formattedDate:"May 21, 2010",tags:[{label:"Android",permalink:"/tags/android"}],readingTime:2.075,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5982\u4f55\u8b93\u61c9\u7528\u7a0b\u5f0f\u76f4\u63a5\u5b89\u88dd\u5230SD\u5361\u57f7\u884c\uff082.2\uff09",tags:["Android"],date:"2010-05-21T15:28:37.000Z"},prevItem:{title:"\u66f8\u4e0d\u50cf\u66f8\u7684\u6642\u4ee3",permalink:"/digest/book-not-like-book-era"},nextItem:{title:"Android 2.2\uff0c\u5b8c\u5168\u7248\u7684Android\u5c31\u61c9\u8a72\u9577\u9019\u6a23",permalink:"/android/Android-2-2-as-it-should-be"}},l={authorsImageUrls:[]},p=[],s={toc:p};function k(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Android 2.2 \u4e2d\u65b0\u589e\u4e86\u61c9\u7528\u7a0b\u5f0f\u76f4\u63a5\u5b89\u88dd\u5230 SD \u5361\u57f7\u884c (\u4e0d\u5c11\u4eba\u7a31\u9019\u500b\u529f\u80fd\u4f5c App2SD)\uff0c\n\u8981\u4f7f\u7528\u9019\u500b\u529f\u80fd\u53ea\u8981\u5728\u76ee\u524d\u7a0b\u5f0f\u4e2d\u505a\u5e7e\u500b\u8a2d\u5b9a\uff1a"),(0,o.kt)("p",null,"1","."," \u5c08\u6848\u7684 Project Build Target \u7248\u672c\u8a2d\u5b9a\u70ba 2.2 (API 8)\n2","."," \u4fee\u6539 AndroidManifest \u6e05\u55ae"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8a2d\u5b9a Project Build Target \u7248\u672c")),(0,o.kt)("p",null,"\u5728 Eclipse \u5c08\u6848\u5217\u8868\u4e2d\u6309\u53f3\u9375\uff0c\u9078\u53d6 properties \u9078\u9805\uff0c\u6703\u5f48\u51fa\u8a2d\u5b9a\u8996\u7a97\u3002\n\u5728\u4e0a\u9762\u9078\u64c7\u5de6\u5074\u7684 Android \u6a19\u7c64\uff0c\u5728\u53f3\u5074 Build \u6b04\u4f4d\u52fe\u9078\u300cAndroid 2.2\u300d\u9078\u9805\uff08\u6c92\u6709\u9019\u9078\u9805\u7684\u8acb\u53c3\u8003 ",(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/p/androidbmi/wiki/ManageSDK"},"\u7ba1\u7406 SDK")," \u4f86\u5347\u7d1a SDK\uff09\uff0c\u5982\u6b64\u4e00\u4f86\u7de8\u8b6f\u6642\u624d\u80fd\u8a8d\u5f97\u6211\u5011\u63a5\u4e0b\u4f86\u5728 AndroidManifest \u6e05\u55ae\u4e2d\u6240\u505a\u7684\u8a2d\u5b9a\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4fee\u6539 AndroidManifest \u6e05\u55ae")),(0,o.kt)("p",null,"\u5728 manifest \u6a19\u7c64\u4e2d\u52a0\u5165\u4e00\u500b\u300candroid:installLocation\u300d\u5c6c\u6027\uff0c\u5be6\u969b\u7a0b\u5f0f\u78bc\u5982\u4e0b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"<",'manifest xmlns:android="',(0,o.kt)("a",{parentName:"p",href:"http://schemas.android.com/apk/res/android%22"},'http://schemas.android.com/apk/res/android"'),">",'\npackage="com.demo.org"\nandroid:versionName="1.0" android:versionCode="1"\n',(0,o.kt)("strong",{parentName:"p"},'android:installLocation="preferExternal"'),"\n",">","\n....\n",(0,o.kt)("strong",{parentName:"p"},"\u8aaa\u660e"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'android:installLocation="preferExternal"\n\u6e05\u55ae\u4e2d\u52a0\u5165\u4ee5\u4e0a\u5ba3\u544a\u5f8c\uff0c\u7de8\u8b6f\u597d\u7684\u7a0b\u5f0f\u4ecd\u7136\u53ef\u4ee5\u9069\u7528\u65bc\u8f03\u4f4e\u7248\u672c\u7684\u6a5f\u5668\uff0c\u53ea\u6709\u5728\u7a0b\u5f0f\u5b89\u88dd\u5230 Android 2.2 \u7248\u4e4b\u5f8c\u7684\u7cfb\u7d71\u4e0a\uff0c\u7cfb\u7d71\u624d\u6703\u81ea\u52d5\u5c07\u9019\u500b\u7a0b\u5f0f\u5b89\u88dd\u5230 SD \u5361\u4e2d\u3002')),(0,o.kt)("p",null,"\u5b89\u88dd\u5230 SD \u5361\u4e2d\u6642\u7a0b\u5f0f\u6703\u9810\u4f5c\u4e00\u6b21\u52a0\u5bc6\uff0c\u8b93\u53ea\u6709\u5b89\u88dd\u672c\u7a0b\u5f0f\u7684\u6a5f\u5668\u80fd\u5b58\u53d6\u9019\u500b\u7a0b\u5f0f\uff0c\u907f\u514d\u4e86\u7a0b\u5f0f\u53ef\u80fd\u6703\u8f15\u6613\u88ab\u76dc\u62f7\u7684\u7591\u616e\u3002"),(0,o.kt)("p",null,"\u6c92\u6709\u7528\u5230 Service\u3001\u684c\u9762\u5c0f\u5de5\u5177\uff08Widget\uff09\u3001\u6216\u52d5\u614b\u684c\u5e03\uff08Live Wallpaper\uff09\u529f\u80fd\u7684\u7a0b\u5f0f\u6bd4\u8f03\u9069\u5408\u5132\u5b58\u5230 SD \u5361\uff0c\u4f8b\u5982\u904a\u6232\u6216 BMI \u7b49\u5c0f\u7a0b\u5f0f\u3002"),(0,o.kt)("p",null,"\u56e0\u70ba\u7576\u6a5f\u5668\u4f7f\u7528 USB \u548c\u96fb\u8166\u9023\u7dda\uff0c\u5c07 SD \u5361\u639b\u8f09\u6210\u78c1\u789f\u6a5f\u6642\uff0c\u9019\u4e9b\u5132\u5b58\u5728 SD \u5361\u4e2d\u57f7\u884c\u7684\u7a0b\u5f0f\u5c07\u6703\u88ab\u4e2d\u65b7\u3002"),(0,o.kt)("p",null,"\u5176\u4ed6\u63d0\u793a\u8acb\u53c3\u8003 Android","\xa0",(0,o.kt)("a",{parentName:"p",href:"http://developer.android.com/guide/appendix/install-location.html"},"\u5b98\u65b9\u6587\u4ef6"),"\u3002"))}k.isMDXComponent=!0}}]);