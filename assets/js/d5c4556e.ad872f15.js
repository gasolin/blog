"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[12937],{5969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));n(8209);const p={title:"\u5982\u4f55\u64b0\u5beb\u667a\u80fd\u5408\u7d04(Smart Contract)?(III)\u5efa\u7acb\u6a19\u6e96\u4ee3\u5e63",tags:["ethereum","solidity","javascript"],date:new Date("2017-09-16T17:35:31.000Z")},r=void 0,o={permalink:"/crypto/howto-write-an-erc20-compatible-token",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/crypto/howto-write-an-erc20-compatible-token.md",source:"@site/blog/crypto/howto-write-an-erc20-compatible-token.md",title:"\u5982\u4f55\u64b0\u5beb\u667a\u80fd\u5408\u7d04(Smart Contract)?(III)\u5efa\u7acb\u6a19\u6e96\u4ee3\u5e63",description:"\u4e0a\u4e00\u7bc7\u4e2d\u6211\u5011\u5df2\u5beb\u597d\u4e26\u90e8\u7f72\u5b8c\u6210\u4e86\u7c21\u55ae\u7684\u52a0\u5bc6\u4ee3\u5e63\ud83d\udd12\ud83d\udcb5\u5408\u7d04\u3002\u5728\u95b1\u8b80\u5b8c\u672c\u6587\u5f8c\uff0c\u4f60\u5c07\u5b78\u6703\u5efa\u7acb\u4e00\u500b\u53ef\u4ee5\u653e\u5230\u4e59\u592a\u5e63\u9322\u5305\u7684\u52a0\u5bc6\u4ee3\u5e63\ud83d\udd12\ud83d\udcb5\u3002",date:"2017-09-16T17:35:31.000Z",formattedDate:"September 16, 2017",tags:[{label:"ethereum",permalink:"/tags/ethereum"},{label:"solidity",permalink:"/tags/solidity"},{label:"javascript",permalink:"/tags/javascript"}],readingTime:9.3,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5982\u4f55\u64b0\u5beb\u667a\u80fd\u5408\u7d04(Smart Contract)?(III)\u5efa\u7acb\u6a19\u6e96\u4ee3\u5e63",tags:["ethereum","solidity","javascript"],date:"2017-09-16T17:35:31.000Z"},prevItem:{title:"Dual boot Elementary OS & Windows 10 on XPS 13 (9360)",permalink:"/tools/xps13-elementary-os"},nextItem:{title:"\u5982\u4f55\u64b0\u5beb\u667a\u80fd\u5408\u7d04(Smart Contract)?(II)\u5efa\u7acb\u52a0\u5bc6\u4ee3\u5e63",permalink:"/crypto/howto-write-a-simple-token"}},i={authorsImageUrls:[]},m=[{value:"\u958b\u767c\u524d\u7684\u6e96\u5099",id:"\u958b\u767c\u524d\u7684\u6e96\u5099",level:2},{value:"ERC20\u6a19\u6e96",id:"erc20\u6a19\u6e96",level:2},{value:"\u5efa\u7acb\u4e00\u500b\u6a19\u6e96\u4ee3\u5e63\u5408\u7d04",id:"\u5efa\u7acb\u4e00\u500b\u6a19\u6e96\u4ee3\u5e63\u5408\u7d04",level:2},{value:"\u8b1b\u89e3",id:"\u8b1b\u89e3",level:3},{value:"\u7de8\u8b6f\u8207\u90e8\u7f72",id:"\u7de8\u8b6f\u8207\u90e8\u7f72",level:3},{value:"\u9a57\u8b49",id:"\u9a57\u8b49",level:2},{value:"\u8b1b\u89e3",id:"\u8b1b\u89e3-1",level:3},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],k={toc:m};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/crypto/howto-write-a-simple-token"},"\u4e0a\u4e00\u7bc7"),"\u4e2d\u6211\u5011\u5df2\u5beb\u597d\u4e26\u90e8\u7f72\u5b8c\u6210\u4e86\u7c21\u55ae\u7684\u52a0\u5bc6\u4ee3\u5e63\ud83d\udd12\ud83d\udcb5\u5408\u7d04\u3002\u5728\u95b1\u8b80\u5b8c\u672c\u6587\u5f8c\uff0c\u4f60\u5c07\u5b78\u6703\u5efa\u7acb\u4e00\u500b\u53ef\u4ee5\u653e\u5230\u4e59\u592a\u5e63\u9322\u5305\ud83d\udc5b \u7684\u52a0\u5bc6\u4ee3\u5e63\ud83d\udd12\ud83d\udcb5\u3002"),(0,l.kt)("h2",{id:"\u958b\u767c\u524d\u7684\u6e96\u5099"},"\u958b\u767c\u524d\u7684\u6e96\u5099"),(0,l.kt)("p",null,"\u5ef6\u7e8c\u4e0a\u4e00\u7bc7\u7684\u5167\u5bb9\uff0c\u5728\u958b\u767c\u7684\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u5c07\u7e7c\u7e8c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"testrpc"),(0,l.kt)("sup",{parentName:"p",id:"fnref-1-893fd4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-893fd4",className:"footnote-ref"},"1")),"\u5de5\u5177\u5728\u96fb\u8166\u4e0a\u6a21\u64ec\u667a\u80fd\u5408\u7d04\u6240\u9700\u7684\u4e59\u592a\u574a\u5340\u584a\u93c8\u6e2c\u8a66\u74b0\u5883\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u78ba\u4fdd\u5df2\u555f\u52d5 testrpc\u3002\u82e5\u5c1a\u672a\u555f\u52d5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u555f\u52d5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ testrpc\n...\n")),(0,l.kt)("p",null,"\u9019\u908a\u6709\u500b\u503c\u5f97\u4e00\u5b78\u7684\u5c0f\u6280\u5de7\uff1a\u5728\u555f\u52d5 testrpc \u6642\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"--seed"),"\u53c3\u6578\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"testrpc --seed apple banana cherry\n")),(0,l.kt)("p",null,"\u9019\u6a23\u4e4b\u5f8c\u91cd\u65b0\u555f\u52d5 testrpc \u6642\u53ef\u4ee5\u7522\u751f\u4e00\u6a23\u7684\u5e33\u865f (accounts) \u548c\u79c1\u9470 (private key)\u3002"),(0,l.kt)("h2",{id:"erc20\u6a19\u6e96"},"ERC20 \u6a19\u6e96"),(0,l.kt)("p",null,"\u5efa\u7acb\u7684\u4ee3\u5e63\u82e5\u8981\u80fd\u900f\u904e\u4e59\u592a\u5e63\u9322\u5305\ud83d\udc5b \u4f86\u6536\u9001\uff0c\u5fc5\u9808\u76f8\u5bb9\u65bc\u4ee5\u592a\u574a\u7684 ERC20 \u6a19\u6e96",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-893fd4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-893fd4",className:"footnote-ref"},"2")),"\u3002ERC20 \u6a19\u6e96\u5b9a\u7fa9\u4e86\u652f\u63f4\u9322\u5305\u6240\u5fc5\u9808\u7684\u5408\u7d04\u4ecb\u9762\u3002"),(0,l.kt)("p",null,"\u672c\u7bc7\u5c07\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"OpenZeppelin"),(0,l.kt)("sup",{parentName:"p",id:"fnref-2-893fd4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-893fd4",className:"footnote-ref"},"2")),"\u51fd\u5f0f\u5eab\u4f86\u7c21\u5316\u5efa\u7acb\u52a0\u5bc6\u4ee3\u5e63\ud83d\udd12\ud83d\udcb5\u7684\u904e\u7a0b\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"OpenZeppelin"),"\u662f\u4e00\u5957\u5354\u52a9\u64b0\u5beb\u5b89\u5168\u7684\u52a0\u5bc6\u5408\u7d04\u7684\u51fd\u5f0f\u5eab\uff0c\u88e1\u9762\u4e5f\u63d0\u4f9b\u4e86\u76f8\u5bb9 ERC20 \u6a19\u6e96\u7684\u667a\u80fd\u5408\u7d04\u3002\u53ef\u4ee5\u900f\u904e npm \u5de5\u5177\u5b89\u88dd\u5230\u5c08\u6848\u76ee\u9304",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/zeppelin-solodity/"),"\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install zeppelin-solidity\n")),(0,l.kt)("p",null,"\u6e96\u5099\u5b8c\u6210\uff0c\u6211\u5011\u53ef\u4ee5\u958b\u59cb\u5efa\u7acb\u65b0\u7684\u52a0\u5bc6\u4ee3\u5e63\u667a\u80fd\u5408\u7d04\u4e86\u3002"),(0,l.kt)("h2",{id:"\u5efa\u7acb\u4e00\u500b\u6a19\u6e96\u4ee3\u5e63\u5408\u7d04"},"\u5efa\u7acb\u4e00\u500b\u6a19\u6e96\u4ee3\u5e63\u5408\u7d04"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"contracts/"),"\u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500b",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken.sol"),"\u6a94\u6848\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4f86\u7522\u751f\u6a94\u6848\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ truffle create contract HelloToken\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken.sol"),"\u6a94\u6848\u5167\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pragma solidity ^0.4.11;\nimport "zeppelin-solidity/contracts/token/StandardToken.sol";\n\ncontract HelloToken is StandardToken {\n  string public name = "HelloCoin";\n  string public symbol = "H@";\n  uint8 public decimals = 2;\n  uint256 public INITIAL_SUPPLY = 88888;\n\n  function HelloToken() public {\n    totalSupply = INITIAL_SUPPLY;\n    balances[msg.sender] = INITIAL_SUPPLY;\n  }\n}\n')),(0,l.kt)("h3",{id:"\u8b1b\u89e3"},"\u8b1b\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pragma solidity ^0.4.11;\n")),(0,l.kt)("p",null,"\u7b2c\u4e00\u884c\u6307\u540d\u76ee\u524d\u4f7f\u7528\u7684 solidity \u7248\u672c\uff0c\u4e0d\u540c\u7248\u672c\u7684 solidity \u53ef\u80fd\u6703\u7de8\u8b6f\u51fa\u4e0d\u540c\u7684 bytecode\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import "zeppelin-solidity/contracts/token/StandardToken.sol";\n')),(0,l.kt)("p",null,"\u63a5\u8457\u6211\u5011\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"import"),"\u8a9e\u53e5\uff0c\u4f86\u8b80\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"zeppelin-solidity"),"\u63d0\u4f9b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"StandardToken"),"\u5408\u7d04\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"contract HelloToken is StandardToken {\n}\n")),(0,l.kt)("p",null,"\u5efa\u7acb",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken"),"\u5408\u7d04\u6642\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"is"),"\u8a9e\u53e5\u7e7c\u627f\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/StandardToken.sol"},"StandardToken"),"\u5408\u7d04\u3002\u56e0\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken"),"\u5408\u7d04\u7e7c\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"StandardToken"),"\u5408\u7d04\u6240\u5305\u542b\u7684\u8cc7\u6599\u8207\u547c\u53eb\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u7576\u6211\u5011\u7e7c\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"StandardToken"),"\u5408\u7d04\uff0c\u4e5f\u5c31\u652f\u63f4\u4e86\u4ee5\u4e0b ERC-20 \u6a19\u6e96\u4e2d",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-893fd4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-893fd4",className:"footnote-ref"},"2")),"\u898f\u5b9a\u7684\u51fd\u5f0f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u51fd\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalSupply()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e63\u767c\u884c\u7684\u7e3d\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"balanceOf(A)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8a62 A \u5e33\u6236\u4e0b\u7684\u4ee3\u5e63\u6578\u76ee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transfer(A,x)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u50b3\u9001 x \u500b\u4ee3\u5e63\u5230 A \u5e33\u6236")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transferFrom(A,x)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f9e A \u5e33\u6236\u63d0\u53d6 x \u500b\u4ee3\u5e63")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"approve(A,x)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u610f A \u5e33\u6236\u5f9e\u6211\u7684\u5e33\u6236\u4e2d\u63d0\u53d6\u4ee3\u5e63")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowance(A,B)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8a62 B \u5e33\u6236\u53ef\u4ee5\u5f9e A \u5e33\u6236\u63d0\u53d6\u591a\u5c11\u4ee3\u5e63")))),(0,l.kt)("p",null,"\u548c\u524d\u4e00\u7bc7\u4e00\u6a23\uff0c\u5f8c\u9762\u9a57\u8b49\u6642\u6703\u7528\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"balanceOf"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"transfer"),"\u5169\u500b\u51fd\u5f0f\u3002\u56e0\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"StandardToken"),"\u5408\u7d04\u4e2d\u5df2\u7d93\u5e6b\u6211\u5011\u5be6\u505a\u4e86\u9019\u4e9b\u51fd\u5f0f\uff0c\u56e0\u6b64\u6211\u5011\u4e0d\u9700\u8981\u81ea\u5df1\u5f9e\u982d\u518d\u5beb\u4e00\u6b21\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'string public name = "HelloCoin";\nstring public symbol = "H@";\nuint8 public decimals = 2;\nuint256 public INITIAL_SUPPLY = 100000;\n')),(0,l.kt)("p",null,"\u9019\u908a\u8a2d\u5b9a\u53c3\u6578\u7684\u76ee\u7684\u662f\u6307\u5b9a\u9019\u500b\u4ee3\u5e63\u7684\u4e00\u4e9b\u7279\u6027\u3002\u4ee5\u7f8e\u5143\u70ba\u4f8b\uff0c\u7f8e\u5143\u7684\u540d\u7a31 (",(0,l.kt)("inlineCode",{parentName:"p"},"name"),") \u662f",(0,l.kt)("inlineCode",{parentName:"p"},"dollar"),"\uff0c\u7f8e\u5143\u7684\u4ee3\u865f\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\uff0c\u62ff\u4e00\u7f8e\u5143\u53bb\u627e\u96f6\u6700\u5c0f\u53ef\u4ee5\u62ff\u5230\u96f6\u9322\u662f\u4e00\u7f8e\u5206 (cent)\uff0c\u4e5f\u5c31\u662f 0.01 \u5143\u3002\u56e0\u70ba\u4e00\u7f8e\u5143\u6700\u5c0f\u53ef\u5206\u5272\u5230\u5c0f\u6578\u9ede\u5f8c 2 \u4f4d (0.01)\uff0c\u56e0\u6b64\u6700\u5c0f\u4ea4\u6613\u55ae\u4f4d (decimals) \u70ba 2\u3002"),(0,l.kt)("p",null,"\u9019\u908a\u5c07\u9019\u500b\u52a0\u5bc6\u4ee3\u5e63\u53d6\u540d (name) \u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"HelloCoin"),"(\u54c8\u56c9\u5e63)\uff0c\u4ee3\u5e63\u7684\u4ee3\u865f (symbol) \u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"H@"),"\uff0c\u6700\u5c0f\u5206\u5272\u55ae\u4f4d\u662f 2 (\u6700\u5c0f\u53ef\u4ee5\u627e 0.01 \u500b\u54c8\u56c9\u5e63)\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u70ba\u7f8e\u91d1\uff0c\u6bd4\u7279\u5e63\uff0c\u4ee5\u592a\u5e63\uff0c\u54c8\u56c9\u5e63\u7684\u5c0d\u7167\u8868\u4f9b\u53c3\u8003\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"decimals"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dollar"),(0,l.kt)("td",{parentName:"tr",align:null},"$"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bitcoin"),(0,l.kt)("td",{parentName:"tr",align:null},"BTC"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:null},"ETH"),(0,l.kt)("td",{parentName:"tr",align:null},"18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HelloCoin"),(0,l.kt)("td",{parentName:"tr",align:null},"H@"),(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("p",null,"\u6700\u5f8c\u4e5f\u5b9a\u7fa9\u4e86\u521d\u59cb\u4ee3\u5e63\u6578\u76ee",(0,l.kt)("inlineCode",{parentName:"p"},"INITIAL_SUPPLY"),"\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"100000"),"\u3002\u7576\u6211\u5011\u628a\u5168\u57df\u8b8a\u6578\u8a2d\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"public"),"(\u516c\u958b)\uff0c\u7de8\u8b6f\u6642\u5c31\u6703\u81ea\u52d5\u65b0\u589e\u4e00\u500b\u8b80\u53d6\u516c\u958b\u8b8a\u6578\u7684 ABI \u63a5\u53e3\uff0c\u6211\u5011\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"truffle console"),"\u4e2d\u4e5f\u53ef\u4ee5\u8b80\u53d6\u9019\u4e9b\u8b8a\u6578\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function HelloToken() public {\n  totalSupply = INITIAL_SUPPLY;\n  balances[msg.sender] = INITIAL_SUPPLY;\n}\n")),(0,l.kt)("p",null,"\u548c\u5408\u7d04\u540c\u540d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken"),"\u65b9\u6cd5\uff0c\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken"),"\u5408\u7d04\u7684\u5efa\u69cb\u51fd\u5f0f (constructor)\u3002\n\u5728\u5efa\u69cb\u5f0f\u88e1\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"totalSupply"),"\u6578\u76ee\uff0c\u4e26\u5c07\u6240\u6709\u7684\u521d\u59cb\u4ee3\u5e63",(0,l.kt)("inlineCode",{parentName:"p"},"INITIAL_SUPPLY"),"\u90fd\u6307\u5b9a\u7d66",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender"),"\u5e33\u865f\uff0c\u4e5f\u5c31\u662f\u7528\u4f86\u90e8\u7f72\u9019\u500b\u5408\u7d04\u7684\u5e33\u865f\u3002\u2035",(0,l.kt)("inlineCode",{parentName:"p"},"totalSupply"),"\u5b9a\u7fa9\u65bc",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20Basic.sol#L10"},"ERC20Basic.sol"),"\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"balances"),"\u5b9a\u7fa9\u65bc",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/BasicToken.sol#L15"},"BasicToken.sol"),"\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import '../math/SafeMath.sol';\n...\nusing SafeMath for uint256;\n...\nbalances[msg.sender] = balances[msg.sender].sub(_value);\n")),(0,l.kt)("p",null,"\u9032\u4e00\u6b65\u8ffd\u53bb\u770b",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/BasicToken.sol"},"BasicToken.sol"),"\u5408\u7d04\u7684\u5167\u5bb9\uff0c\u53ef\u4ee5\u767c\u73fe",(0,l.kt)("inlineCode",{parentName:"p"},"BasicToken.sol"),"\u5408\u7d04\u4e2d\u532f\u5165\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"SafeMath.sol"),"\u5408\u7d04",(0,l.kt)("sup",{parentName:"p",id:"fnref-7-893fd4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-7-893fd4",className:"footnote-ref"},"7")),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"SafeMath"),"\u5c0d\u5404\u7a2e\u6578\u503c\u904b\u7b97\u52a0\u5165\u4e86\u5fc5\u8981\u7684\u9a57\u8b49\uff0c\u8b93\u5408\u7d04\u4e2d\u7684\u6578\u5b57\u8a08\u7b97\u66f4\u5b89\u5168\u3002"),(0,l.kt)("p",null,"\u5982\u6b64\u4e00\u4f86\uff0c\u6211\u5011\u5df2\u5beb\u597d\u4e00\u500b\u53ef\u900f\u904e\u4ee5\u592a\u5e63\u9322\u5305\u4ea4\u6613\u7684\u65b0\u52a0\u5bc6\u4ee3\u5e63\ud83d\udd12\ud83d\udcb5\u5408\u7d04\u3002\u5982\u679c\u5c07\u9019\u500b\u5408\u7d04\u90e8\u7f72\u5230\u4e59\u592a\u574a\u516c\u958b\u5340\u584a\u934a\u4e0a\uff0c\u9019\u500b\u4ee3\u5e63\u5408\u7d04\u5c31\u6703\u4e00\u76f4\u5b58\u5728\uff0c\u4e16\u754c\u4e0a\u5f9e\u6b64\u4e5f\u5c31\u591a\u4e86\u4e00\u7a2e\u65b0\u7684\u52a0\u5bc6\u4ee3\u5e63\u3002\u53ea\u8981\u4f60\u80fd\u627e\u5230\u4eba\u60f3\u64c1\u6709\u9019\u7a2e\u4ee3\u5e63\uff0c\u9019\u7a2e\u4ee3\u5e63\u5c31\u6709\u4ea4\u6613\u7684\u50f9\u503c\u3002"),(0,l.kt)("h3",{id:"\u7de8\u8b6f\u8207\u90e8\u7f72"},"\u7de8\u8b6f\u8207\u90e8\u7f72"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"migrations/"),"\u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500b",(0,l.kt)("inlineCode",{parentName:"p"},"4_deploy_hellotoken.js"),"\u6a94\u6848\uff0c\u5167\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var HelloToken = artifacts.require("HelloToken");\n\nmodule.exports = function(deployer) {\n  deployer.deploy(HelloToken);\n};\n\n')),(0,l.kt)("p",null,"\u73fe\u5728\u57f7\u884c compile \u8207 migrate \u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ truffle compile\n...\n$ truffle migrate --reset\nUsing network 'development'.\n\nRunning migration: 4_deploy_hellotoken.js\n  Deploying HelloToken...\n  ... 0x2c4659528c68b4e43d1edff6c989fba05e8e7e56cc4085d408426d339b4e9ba4\n  HelloToken: 0x352fa9aa18106f269d944935503afe57a00a9a0d\nSaving successful migration to network...\n  ... 0x1434c1b61e9719f410fc6090ce37c0ec141a1738aba278dd320738e4a5d229fa\nSaving artifacts...\n")),(0,l.kt)("p",null,"\u5982\u6b64\u4e00\u4f86\u6211\u5011\u5df2\u5c07 HelloCoin \u4ee3\u5e63\u5408\u7d04\u90e8\u7f72\u5230 testrpc \u4e0a\u3002"),(0,l.kt)("h2",{id:"\u9a57\u8b49"},"\u9a57\u8b49"),(0,l.kt)("p",null,"\u6211\u5011\u4e00\u6a23\u53ef\u4ee5\u900f\u904e",(0,l.kt)("inlineCode",{parentName:"p"},"truffle console"),"\u4f86\u9a57\u8b49",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken"),"\u662f\u5426\u90e8\u7f72\u6210\u529f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ truffle console\n> let contract\n> HelloToken.deployed().then(instance => contract = instance)\n> contract.address\n'0x352fa9aa18106f269d944935503afe57a00a9a0d'\n> contract.balanceOf(web3.eth.coinbase)\nBigNumber { s: 1, e: 5, c: [ 100000 ] }\n> contract.balanceOf(web3.eth.accounts[1])\nBigNumber { s: 1, e: 0, c: [ 0 ] }\n> contract.transfer(web3.eth.accounts[1], 123)\n...\n> contract.balanceOf(web3.eth.accounts[0])\nBigNumber { s: 1, e: 4, c: [ 99877 ] }\n> contract.balanceOf(web3.eth.accounts[1])\nBigNumber { s: 1, e: 2, c: [ 123 ] }\n>\n")),(0,l.kt)("h3",{id:"\u8b1b\u89e3-1"},"\u8b1b\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"> let contract\n> SimpleToken.deployed().then(instance => contract = instance)\n")),(0,l.kt)("p",null,"\u9019\u908a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"HelloToken.deployed().then"),"\u8a9e\u53e5\u4f86\u53d6\u5f97 HelloToken \u5408\u7d04\u7684 Instance (\u5be6\u4f8b)\uff0c\u4e26\u5b58\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"contract"),"\u8b8a\u6578\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u5f8c\u7e8c\u7684\u547c\u53eb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"> contract.balanceOf(web3.eth.coinbase)\nBigNumber { s: 1, e: 5, c: [ 100000 ] }\n> contract.balanceOf(web3.eth.accounts[1])\nBigNumber { s: 1, e: 0, c: [ 0 ] }\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"web3.eth.coinbase")," \u4ee3\u8868\u64cd\u4f5c\u8005\u9810\u8a2d\u7684\u5e33\u865f\uff0c\u5373 testrpc \u6240\u63d0\u4f9b\u7684 10 \u500b\u5e33\u865f\u4e2d\u7684\u7b2c\u4e00\u500b\u5e33\u865f\uff0c\u4e5f\u53ef\u4ee5\u900f\u904e",(0,l.kt)("inlineCode",{parentName:"p"},"web3.eth.accounts[0]"),"\u53d6\u5f97\u3002\n\u9019\u5169\u53e5\u7684\u76ee\u7684\u662f\u5728\u9032\u884c\u8f49\u5e33\u64cd\u4f5c\u524d\uff0c\u5148\u67e5\u8a62\u524d\u5169\u500b\u5e33\u865f\u6240\u64c1\u6709\u7684\u4ee3\u5e63\u9918\u984d\u3002\u900f\u904e\u547c\u53eb",(0,l.kt)("inlineCode",{parentName:"p"},"balanceOf"),"\u51fd\u5f0f\uff0c\u53ef\u4ee5\u770b\u5230\u7b2c\u4e00\u500b\u5e33\u865f (\u90e8\u7f72\u5408\u7d04\u7684\u5e33\u865f) \u88e1\u5b58\u8457\u6240\u6709\u7684\u4ee3\u5e63\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> contract.transfer(web3.eth.accounts[1], 123)\n...\n")),(0,l.kt)("p",null,"\u63a5\u8457\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"transfer"),"\u51fd\u5f0f\u4f86\u50b3\u9001",(0,l.kt)("inlineCode",{parentName:"p"},"123"),"\u500b\u4ee3\u5e63\u5230\u7b2c\u4e8c\u500b\u5e33\u865f",(0,l.kt)("inlineCode",{parentName:"p"},"web3.eth.accounts[1]"),"\u3002\u5982\u679c\u8f49\u5e33\u6210\u529f\uff0c\u50b3\u9001\u8005\u9810\u8a2d\u5e33\u865f\u4e2d\u6703\u6e1b\u5c11",(0,l.kt)("inlineCode",{parentName:"p"},"123"),"\u500b\u4ee3\u5e63\uff0c\u63a5\u6536\u8005\u5e33\u865f\u4e2d\u6703\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"123"),"\u500b\u4ee3\u5e63\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> contract.balanceOf(web3.eth.accounts[0])\nBigNumber { s: 1, e: 4, c: [ 99877 ] }\n> contract.balanceOf(web3.eth.accounts[1])\nBigNumber { s: 1, e: 2, c: [ 123 ] }\n>\n")),(0,l.kt)("p",null,"\u6211\u5011\u518d\u6b21\u900f\u904e\u547c\u53eb",(0,l.kt)("inlineCode",{parentName:"p"},"balanceOf"),"\u51fd\u5f0f\uff0c\u67e5\u8a62\u50b3\u9001\u8005\u5e33\u865f\u548c\u63a5\u6536\u8005\u5e33\u865f\u5404\u81ea\u5269\u4e0b\u7684 HelloToken \u6578\u76ee\u3002\u767c\u73fe\u8f49\u5e33\u771f\u7684\u6210\u529f\u4e86\u3002"),(0,l.kt)("h2",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,l.kt)("p",null,"\u6211\u5011\u7528\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenZeppelin"),"\u63d0\u4f9b\u7684\u51fd\u5f0f\u5eab\u4f86\u7c21\u5316\u64b0\u5beb\u52a0\u5bc6\u4ee3\u5e63\u5408\u7d04\u7684\u5de5\u4f5c\u3002\u8981\u5be6\u969b\u6295\u5165\u4f7f\u7528\u524d\uff0c\u9084\u662f\u5efa\u8b70\u5c07\u547c\u53eb\u5230\u7684\u7a0b\u5f0f\u78bc\u90fd\u518d\u5be9\u67e5\u5e7e\u904d\u3002\u53ef\u4ee5\u5f9e OpenZeppelin \u81ea\u5df1\u63d0\u4f9b\u7684 Audit \u958b\u59cb\u770b",(0,l.kt)("sup",{parentName:"p",id:"fnref-4-893fd4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-4-893fd4",className:"footnote-ref"},"4")),"\uff0c\u53ef\u4ee5\u5b78\u5230\u4e00\u4e9b\u89c0\u5ff5\u3002"),(0,l.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[1]"," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereumjs/testrpc"},"https://github.com/ethereumjs/testrpc")),(0,l.kt)("li",{parentName:"ul"},"[2]"," ERC20 ",(0,l.kt)("a",{parentName:"li",href:"https://theethereum.wiki/w/index.php/ERC20_Token_Standard"},"https://theethereum.wiki/w/index.php/ERC20_Token_Standard")," \u6216 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md"},"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md")),(0,l.kt)("li",{parentName:"ul"},"[3]"," OpenZeppelin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/OpenZeppelin/zeppelin-solidity"},"https://github.com/OpenZeppelin/zeppelin-solidity")),(0,l.kt)("li",{parentName:"ul"},"[4]"," OpenZeppelin Audit ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/audit/ZeppelinAudit.md"},"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/audit/ZeppelinAudit.md")),(0,l.kt)("li",{parentName:"ul"},"[5]"," An Ethereum Hello World Smart Contract for Beginners part 1 ",(0,l.kt)("a",{parentName:"li",href:"http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/"},"http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/")),(0,l.kt)("li",{parentName:"ul"},"[6]"," ",(0,l.kt)("a",{parentName:"li",href:"http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/"},"http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/")),(0,l.kt)("li",{parentName:"ul"},"[7]"," OpenZeppelin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/math/SafeMath.sol"},"SafeMath \u5408\u7d04"))))}s.isMDXComponent=!0}}]);