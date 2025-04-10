"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[56036],{12399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));n(8209);const r={title:"Interact Bitfinex API with Node-RED",tags:["bitfinex","nodered"],date:new Date("2019-01-07T14:33:42.000Z")},o=void 0,l={permalink:"/tools/node-red-contrib-bitfinex",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/tools/node-red-contrib-bitfinex.md",source:"@site/blog/tools/node-red-contrib-bitfinex.md",title:"Interact Bitfinex API with Node-RED",description:"Imgur",date:"2019-01-07T14:33:42.000Z",formattedDate:"January 7, 2019",tags:[{label:"bitfinex",permalink:"/tags/bitfinex"},{label:"nodered",permalink:"/tags/nodered"}],readingTime:3.33,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Interact Bitfinex API with Node-RED",tags:["bitfinex","nodered"],date:"2019-01-07T14:33:42.000Z"},prevItem:{title:"Tuning for my daily Elementary OS Juno",permalink:"/tools/elementary_juno"},nextItem:{title:"\u7528Raspberry Pi\u7d44\u88dd\u4e00\u5957\u5c0f\u670b\u53cb\u4f7f\u7528\u7684\u96fb\u8166",permalink:"/tools/raspberrypi-kano-os"}},s={authorsImageUrls:[]},p=[{value:"Getting start with Node-RED and Bitfinex API",id:"getting-start-with-node-red-and-bitfinex-api",level:2},{value:"Interact with Node-RED",id:"interact-with-node-red",level:2},{value:"Visualize data with Node-RED dashboard",id:"visualize-data-with-node-red-dashboard",level:2},{value:"One more thing",id:"one-more-thing",level:2},{value:"Other way to interact with Bitfinex API",id:"other-way-to-interact-with-bitfinex-api",level:2},{value:"Inreact with the REST API",id:"inreact-with-the-rest-api",level:3},{value:"Interact with API library",id:"interact-with-api-library",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/BDWezQx.png",alt:"Imgur"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Anticipate how API choices and abstractions impact the way other people would solve the problem\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://bit.ly/2Fflnpz"},"Designing very large (JavaScript) applications"))),(0,a.kt)("p",null,"There are many ways to access Bitfinex API to get most of Bitfinex exchange functionalities. For example, you can access REST API, websocket API, or call the language specific API library to eaze the interaction efforts. But in my opinion interact via Node-RED Bitfinex function block is the most easiest one."),(0,a.kt)("h2",{id:"getting-start-with-node-red-and-bitfinex-api"},"Getting start with Node-RED and Bitfinex API"),(0,a.kt)("p",null,"To get start, you can "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"install Node-RED ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g node-red"),"."),(0,a.kt)("li",{parentName:"ol"},"Start Node-RED via ",(0,a.kt)("inlineCode",{parentName:"li"},"node-red")," command, then go ",(0,a.kt)("inlineCode",{parentName:"li"},"settings > Palette > Install")," tab in node-red"),(0,a.kt)("li",{parentName:"ol"},"search ",(0,a.kt)("inlineCode",{parentName:"li"},"bitfinex")," to install this module.")),(0,a.kt)("h2",{id:"interact-with-node-red"},"Interact with Node-RED"),(0,a.kt)("p",null,"Node-RED is a great way to interact with everything online, with a more intuitive interface."),(0,a.kt)("p",null,"To simplify the interaction with Bitfinex,\nI wrapped the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-red-contrib-bitfinex"},"Bitfinex function block for Node-RED"),", which makes bitfinex API very easy to access in Node-RED. You can visually show exchange data in node-red's dashboard, mashup with other services, or trade from weird objects around your house."),(0,a.kt)("p",null,"For example, you can follow the screenshot to make below REST API work."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ivFAJWH.gif",alt:"Imgur"})),(0,a.kt)("p",null,"Access websocket API is very simple as well"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ecJV6Io.gif",alt:"Imgur"})),(0,a.kt)("p",null,"You can use configuration block to put your apiKey and apiSecret."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/0eVeu4I.png",alt:"Imgur"})),(0,a.kt)("h2",{id:"visualize-data-with-node-red-dashboard"},"Visualize data with Node-RED dashboard"),(0,a.kt)("p",null,"Once you got the data via bitfinex function block, it's pretty easy to visualize value and diagram with ",(0,a.kt)("a",{parentName:"p",href:"https://flows.nodered.org/node/node-red-dashboard"},"Node-RED dashboard")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/mow1AUX.gif",alt:"Imgur"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/1Y9ooGD.gif",alt:"Imgur"})),(0,a.kt)("h2",{id:"one-more-thing"},"One more thing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"You may not know")," the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bitfinex.com/v2/reference#rest-public-tickers"},"tickers api")," allow query multiple symbols at once, like ",(0,a.kt)("inlineCode",{parentName:"p"},"rest.tickers(['tETHUSD', 'tBTCUSD'])")," and this functoin block supports multiple outputs as well!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/MLS7sCq.gif",alt:"Imgur"})),(0,a.kt)("p",null,"If you make something interesting with Bitfinex API and node-RED, please let me know! (You can share to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gasolin/node-red-contrib-bitfinex/issues"},"https://github.com/gasolin/node-red-contrib-bitfinex/issues"),")"),(0,a.kt)("h2",{id:"other-way-to-interact-with-bitfinex-api"},"Other way to interact with Bitfinex API"),(0,a.kt)("p",null,"For reference, You can learn more ways to access the Bitfinex API below."),(0,a.kt)("h3",{id:"inreact-with-the-rest-api"},"Inreact with the REST API"),(0,a.kt)("p",null,"We could read the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bitfinex.com/v2/reference#rest-public-tickers%60"},"API doc")," and find we can get the recent ETH/USD pair states via open the browser and visit ",(0,a.kt)("a",{parentName:"p",href:"https://api.bitfinex.com/v2/tickers?symbols=tETHUSD"},"https://api.bitfinex.com/v2/tickers?symbols=tETHUSD")),(0,a.kt)("p",null,"We'll get an minimal array as the returned data. Refer to the doc we know each column means:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n// on trading pairs (ex. tBTCUSD)\n  [\n    SYMBOL,\n    BID, \n    BID_SIZE, \n    ASK, \n    ASK_SIZE, \n    DAILY_CHANGE, \n    DAILY_CHANGE_PERC, \n    LAST_PRICE, \n    VOLUME, \n    HIGH, \n    LOW\n  ],\n]\n")),(0,a.kt)("p",null,"Then we can process the array to get what we want. For example, to access the last price of ETH/USD, we could find the result from ",(0,a.kt)("inlineCode",{parentName:"p"},"array[0][7]")," (The first item in returned array denotes ETH/USD result array, the 8th item(the array count from 0 so its 7) in ETH/USD result array is the LAST_PRICE)"),(0,a.kt)("h3",{id:"interact-with-api-library"},"Interact with API library"),(0,a.kt)("p",null,"But for more complicated interaction like place an order with authenticated API, we generally prefer to call language specific library to simplify the process."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bitfinex.com/v2/docs/open-source-libraries"},"Bitfinex official doc")," listed several open source language specific libraries for developers."),(0,a.kt)("p",null,"For example, we can use nodejs/javascript to access Bitfinex API via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitfinexcom/bitfinex-api-node"},"Bitfinex's nodejs API library")),(0,a.kt)("p",null,"To install the library, call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install bitfinex-api-node\n")),(0,a.kt)("p",null,"Then you can edit a ",(0,a.kt)("inlineCode",{parentName:"p"},"demo.js")," file with content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const BFX = require('bitfinex-api-node')\nconst bfx = new BFX()\nconst rest = bfx.rest(2)\nrest.tickers(['tETHUSD']).then(tickers => {\n  console.log(tickers)\n})\n")),(0,a.kt)("p",null,"to get same result as directly call the REST API on the browser."),(0,a.kt)("p",null,"Though You may not know the node API build-in the data model mapping, which saves you from manually parsing the returned result."),(0,a.kt)("p",null,"All you need to do is pass ",(0,a.kt)("inlineCode",{parentName:"p"},"{ transform: true}")," parameter when access the ",(0,a.kt)("inlineCode",{parentName:"p"},"bfx.rest")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const rest = bfx.rest(2, { transform: true })\n")),(0,a.kt)("p",null,"Then you can get value via ",(0,a.kt)("inlineCode",{parentName:"p"},"ticker.lastPrice"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ticker.high"),"..."),(0,a.kt)("p",null,"If you want to access authenticated APIs, just pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"apiSecret")," when construct the ",(0,a.kt)("inlineCode",{parentName:"p"},"bfx")," api instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const bfx = new BFX({\n  apiKey: '...',\n  apiSecret: '...',\n})\n")),(0,a.kt)("p",null,"The API call seems not hard but it did require some effort to make all works."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disclosure:")," I am currently working on Bitfinex. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gasolin/node-red-contrib-bitfinex"},"Node-red-contrib-bitfinex")," is the personal project though."))}d.isMDXComponent=!0}}]);