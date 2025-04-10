"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[97896],{83241:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=e(87462),o=(e(67294),e(3905));e(8209);const i={title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361 -- \u88dc\u5145\u5305",tags:["python"],date:new Date("2008-08-08T09:31:52.000Z")},r=void 0,u={permalink:"/code/3min-flashcard-patch",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/code/3min-flashcard-patch.md",source:"@site/blog/code/3min-flashcard-patch.md",title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361 -- \u88dc\u5145\u5305",description:"\u7e7c\u4e0a\u4e00\u7bc7\u88e1\u6211\u5011\u88fd\u4f5c\u597d\u9583\u5149\u5361\u5f8c\uff0c\u9019\u88e1\u518d\u9644\u9001\u4e00\u500b\u88dc\u5145\u5305\uff1a \u5e73\u5047\u540d/\u7247\u5047\u540d\u8a5e\u5f59\u5eab\uff0c\u8b93\u9583\u5149\u5361\u771f\u6b63\u80fd\u904b\u7528\u65bc\u65e5\u5e38\u751f\u6d3b\u4e2d XD",date:"2008-08-08T09:31:52.000Z",formattedDate:"August 8, 2008",tags:[{label:"python",permalink:"/tags/python"}],readingTime:2.425,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361 -- \u88dc\u5145\u5305",tags:["python"],date:"2008-08-08T09:31:52.000Z"},prevItem:{title:"\u4e09\u5206\u9418\u6559\u4f60/\u59b3\u81ea\u88fd\u9583\u5149\u5361",permalink:"/code/3min-flashcard"},nextItem:{title:"\u9435\u87d2\u5e36\u96fb\u6c60 IronPython Batteries Included",permalink:"/python/IronPython-Batteries-Included"}},s={authorsImageUrls:[]},p=[],h={toc:p};function l(a){let{components:n,...e}=a;return(0,o.kt)("wrapper",(0,t.Z)({},h,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7e7c\u4e0a\u4e00\u7bc7\u88e1\u6211\u5011",(0,o.kt)("a",{parentName:"p",href:"http://inet6.blogspot.com/2008/08/flashcard.html"},"\u88fd\u4f5c\u597d\u9583\u5149\u5361"),"\u5f8c\uff0c\u9019\u88e1\u518d\u9644\u9001\u4e00\u500b\u88dc\u5145\u5305\uff1a \u5e73\u5047\u540d / \u7247\u5047\u540d\u8a5e\u5f59\u5eab\uff0c\u8b93\u9583\u5149\u5361\u771f\u6b63\u80fd\u904b\u7528\u65bc\u65e5\u5e38\u751f\u6d3b\u4e2d XD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> Hiragana = [("\u3042","a"), ("\u3044", "i"), ("\u3046", "u"), ("\u3048","e"), ("\u304a", "o"),\n>               ("\u304b", "ka"), ("\u304d", "ki"), ("\u304f", "ku"), ("\u3051", "ke"), ("\u3053", "ko"),\n>               ("\u3055", "sa"), ("\u3057", "shi"), ("\u3059", "shu"), ("\u305b", "se"), ("\u305d", "so"),\n>               ("\u305f", "ta"), ("\u3061", "chi"), ("\u3064", "tsu"), ("\u3066", "te"), ("\u3068", "to"),\n>               ("\u306a", "na"), ("\u306b", "ni"), ("\u306c", "nu"), ("\u306d", "ne"), ("\u306e", "no"),\n>               ("\u306f", "ha"), ("\u3072", "hi"), ("\u3075", "hu"), ("\u3078", "he"), ("\u307b", "ho"),\n>               ("\u307e", "ma"), ("\u307f", "mi"), ("\u3080", "mu"), ("\u3081", "me"), ("\u3082", "mo"),\n>               ("\u3084", "ya"),                 ("\u3086", "yu"),                 ("\u3088", "yo"),\n>               ("\u3089", "ra"), ("\u308a", "ri"), ("\u308b", "ru"), ("\u308c", "re"), ("\u308d", "ro"),\n>               ("\u308f", "wa"), ("\u3090", "wi"),              ("\u3091", "we"), ("\u3092", "wo"),\n>               ("\u304c", "ga"), ("\u304e", "gi"), ("\u3050", "gu"), ("\u3052", "ge"), ("\u3054", "go"),\n>               ("\u3056", "za"), ("\u3058", "ji"), ("\u305a", "zu"), ("\u305c", "ze"), ("\u305e", "zo"),\n>               ("\u3060", "da"), ("\u3062", "(ji)"), ("\u3065", "(zu)"), ("\u3067", "de"), ("\u3069", "do"),\n>               ("\u3070", "ba"), ("\u3073", "bi"), ("\u3076", "bu"), ("\u3079", "be"), ("\u307c", "bo"),\n>               ("\u3071", "pa"), ("\u3074", "pi"), ("\u3077", "pu"), ("\u307a", "pe"), ("\u307d", "po")\n>               ] #\u5e73\u5047\u540d\u8a5e\u5eab\n> \n> Katakana = [("\u30a2", "a"), ("\u30a4", "i"), ("\u30a6", "u"), ("\u30a8","e"), ("\u30aa", "o"),\n>               ("\u30ab", "ka"), ("\u30ad", "ki"), ("\u30af", "ku"), ("\u30b1", "ke"), ("\u30b3", "ko"),\n>               ("\u30b5", "sa"), ("\u30b7", "shi"), ("\u30b9", "shu"), ("\u30bb", "se"), ("\u30bd", "so"),\n>               ("\u30bf", "ta"), ("\u30c1", "chi"), ("\u30c4", "tsu"), ("\u30c6", "te"), ("\u30c8", "to"),\n>               ("\u30ca", "na"), ("\u30cb", "ni"), ("\u30cc", "nu"), ("\u30cd", "ne"), ("\u30ce", "no"),\n>               ("\u30cf", "ha"), ("\u30d2", "hi"), ("\u30d5", "hu"), ("\u30d8 ", "he"), ("\u30db", "ho"),\n>               ("\u30de", "ma"), ("\u30df", "mi"), ("\u30e0", "mu"), ("\u30e1", "me"), ("\u30e2", "mo"),\n>               ("\u30e4", "ya"),                 ("\u30e6", "yu"),                 ("\u30e8", "yo"),\n>               ("\u30e9", "ra"), ("\u30ea", "ri"), ("\u30eb", "ru"), ("\u30ec", "re"), ("\u30ed", "ro"),\n>               ("\u30ef", "wa"), ("\u30f0", "wi"),              ("\u30f1", "we"), ("\u30f2", "wo"),\n>                                                                          ("\u30f3", "n"),\n>               ("\u30ac", "ga"), ("\u30ae", "gi"), ("\u30b0", "gu"), ("\u30b2", "ge"), ("\u30b4", "go"),\n>               ("\u30b6", "za"), ("\u30b8", "ji"), ("\u30ba", "zu"), ("\u30bc", "ze"), ("\u30be", "zo"),\n>               ("\u30c0", "da"), ("\u30c2", "(ji)"), ("\u30c5", "(zu)"), ("\u30c7", "de"), ("\u30c9", "do"),\n>               ("\u30d0", "ba"), ("\u30d3", "bi"), ("\u30d6", "bu"), ("\u30d9", "be"), ("\u30dc", "bo"),\n>               ("\u30d1", "pa"), ("\u30d4", "pi"), ("\u30d7", "pu"), ("\u30da", "pe"), ("\u30dd", "po")\n>               ] #\u7247\u5047\u540d\u8a5e\u5eab\n> \n> deck = Hiragana\n')),(0,o.kt)("p",null,'\u4f7f\u7528\u6642\uff0c\u4f9d\u7167\u9700\u6c42\u5c07 deck \u6539\u6210\u7b49\u65bc "Hiragana"\u3001"Katakana"\uff0c\u6216 "Hiragana+Katakana" \u5373\u53ef\u3002'))}l.isMDXComponent=!0}}]);