"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[24995],{96291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),l=(a(67294),a(3905)),n=a(8209);const o={title:"\u5728 Linux \u4e0a\u8a2d\u5b9a Ledger Nano S \u786c\u9ad4\u9322\u5305",tags:["ethereum","linux"],date:new Date("2017-12-26T23:10:30.000Z")},p=void 0,i={permalink:"/crypto/setup_ledger_nano_on_linux",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/crypto/setup_ledger_nano_on_linux.md",source:"@site/blog/crypto/setup_ledger_nano_on_linux.md",title:"\u5728 Linux \u4e0a\u8a2d\u5b9a Ledger Nano S \u786c\u9ad4\u9322\u5305",description:"\u4eca\u5929\u5df2\u628a\u524d\u9663\u5b50\u8cb7\u5230\u7684 Ledget Nano S \u786c\u9ad4\u9322\u5305\u5728Windows 10/Elementary OS(/Ubuntu 16.04)\u4e0a\u8a2d\u5b9a\u597d\uff0c\u6b63\u5f0f\u958b\u59cb\u4f7f\u7528\u3002\u548c\u9810\u671f\u4e00\u6a23\uff0c\u96d6\u7136\u5728Linux\u4e0a\u525b\u958b\u59cb\u8a2d\u5b9a\u6642\u9700\u8981\u591a\u505a\u4e00\u4e9b\u6b65\u9a5f\uff0c\u4f46\u662f\u4e00\u65e6\u8a2d\u5b9a\u597d\u5f8c\uff0c\u4f7f\u7528\u904e\u7a0b\u548c\u5728\u5176\u4ed6\u5e73\u53f0\u4e0a\u4e26\u6c92\u6709\u5340\u5225\u3002",date:"2017-12-26T23:10:30.000Z",formattedDate:"December 26, 2017",tags:[{label:"ethereum",permalink:"/tags/ethereum"},{label:"linux",permalink:"/tags/linux"}],readingTime:5.1,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5728 Linux \u4e0a\u8a2d\u5b9a Ledger Nano S \u786c\u9ad4\u9322\u5305",tags:["ethereum","linux"],date:"2017-12-26T23:10:30.000Z"},prevItem:{title:"\u5982\u4f55\u64b0\u5beb\u667a\u80fd\u5408\u7d04(Smart Contract)?(IV)\u52a0\u5165\u55ae\u5143\u6e2c\u8a66",permalink:"/crypto/howto-write-a-contract-test"},nextItem:{title:"Firefox \u4f7f\u7528\u8005\u5c0e\u89bd (Onboarding)",permalink:"/code/firefox-onboarding"}},d={authorsImageUrls:[]},u=[{value:"1. \u8a2d\u5b9a Ledget Nano S \u786c\u9ad4",id:"1-\u8a2d\u5b9a-ledget-nano-s-\u786c\u9ad4",level:2},{value:"2. \u5728\u96fb\u8166\u4e0a\u5b89\u88dd Chrome \u6216 Chromium",id:"2-\u5728\u96fb\u8166\u4e0a\u5b89\u88dd-chrome-\u6216-chromium",level:2},{value:"3. \u5b89\u88dd Ledger Manager",id:"3-\u5b89\u88dd-ledger-manager",level:2},{value:"4. \u8a2d\u5b9a USB \u9023\u7dda",id:"4-\u8a2d\u5b9a-usb-\u9023\u7dda",level:2},{value:"4. \u5b89\u88dd Ethereum App",id:"4-\u5b89\u88dd-ethereum-app",level:2},{value:"5. \u5b89\u88dd Ledger Wallet Ethereum",id:"5-\u5b89\u88dd-ledger-wallet-ethereum",level:2}],m={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4eca\u5929\u5df2\u628a\u524d\u9663\u5b50\u8cb7\u5230\u7684 Ledget Nano S \u786c\u9ad4\u9322\u5305\u5728 Windows 10/Elementary OS (/Ubuntu 16.04) \u4e0a\u8a2d\u5b9a\u597d\uff0c\u6b63\u5f0f\u958b\u59cb\u4f7f\u7528\u3002\u548c\u9810\u671f\u4e00\u6a23\uff0c\u96d6\u7136\u5728 Linux \u4e0a\u525b\u958b\u59cb\u8a2d\u5b9a\u6642\u9700\u8981\u591a\u505a\u4e00\u4e9b\u6b65\u9a5f\uff0c\u4f46\u662f\u4e00\u65e6\u8a2d\u5b9a\u597d\u5f8c\uff0c\u4f7f\u7528\u904e\u7a0b\u548c\u5728\u5176\u4ed6\u5e73\u53f0\u4e0a\u4e26\u6c92\u6709\u5340\u5225\u3002"),(0,l.kt)("h1",{id:"\u786c\u9ad4\u9322\u5305"},"\u786c\u9ad4\u9322\u5305"),(0,l.kt)("p",null,"\u904e\u53bb\u900f\u904e NAS\uff0c\u5916\u63a5\u786c\u789f\u7b49\u65b9\u5f0f\u4f86\u4fdd\u8b77\u81ea\u5df1\u7684\u76f8\u7247\uff0c\u4f5c\u54c1\u7b49\u300c\u6578\u4f4d\u8cc7\u7522\u300d\uff0c\u4ee5\u9632\u54ea\u5929\u6a94\u6848\u907a\u5931\u6216\u5916\u6d41\u3002\u73fe\u5728\u8981\u5b88\u8b77\u7684\u7bc4\u570d\u66f4\u8981\u64f4\u53ca\u300c\u52a0\u5bc6\u4ee3\u5e63\u300d\uff0c\u5373\u4fdd\u8b77\u81ea\u5df1\u7684\u300c\u6578\u4f4d\u8ca1\u7522\u300d\u3002"),(0,l.kt)(n.G,{chart:"graph LR\n\u4f5c\u54c1 --\x3e NAS\n\u76f8\u7247 --\x3e NAS\n\u76f8\u7247 --\x3e \u7dda\u4e0a\u5099\u4efd\nNAS --\x3e \u6578\u4f4d\u8cc7\u7522\n\u7dda\u4e0a\u5099\u4efd --\x3e \u6578\u4f4d\u8cc7\u7522\n\u52a0\u5bc6\u4ee3\u5e63 --\x3e \u786c\u9ad4\u9322\u5305\n\u786c\u9ad4\u9322\u5305 --\x3e \u6578\u4f4d\u8cc7\u7522",mdxType:"Mermaid"}),(0,l.kt)("p",null,"MyEtherWallet \u7db2\u7ad9",(0,l.kt)("a",{parentName:"p",href:"https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html"},"\u63a8\u85a6"),"\u4efb\u4f55\u64c1\u6709\u8d85\u904e\u300c2 \u5468\u7684\u85aa\u8cc7\u300d\u6578\u4f4d\u8ca1\u7522\u7684\u4eba\uff0c\u4f7f\u7528\u300c\u786c\u9ad4\u9322\u5305\u300d\u4f86\u4fdd\u7ba1\u81ea\u5df1\u7684\u300c\u52a0\u5bc6\u4ee3\u5e63\u300d\uff0c\u4ee5\u907f\u514d\u53ef\u80fd\u7684\u8ca1\u7522\u640d\u5931\u3002"),(0,l.kt)("p",null,"\u76ee\u524d Ledget Nano S \u548c TREZOR \u662f\u5169\u6b3e\u8f03\u591a\u4eba\u4f7f\u7528\u7684\u786c\u9ad4\u9322\u5305\u3002\u786c\u9ad4\u9322\u5305\u7684\u5b89\u5168\u6027\u5f9e\u7522\u751f\u9322\u5305\u5e33\u865f\u958b\u59cb\u3002\u786c\u9ad4\u9322\u5305\u5e33\u865f\u7684\u79c1\u9470\u4e00\u76f4\u4fdd\u5b58\u5728\u786c\u9ad4\u8a2d\u5099\u4e2d\uff0c\u53ea\u8981\u4fdd\u5b58\u597d\u300crecovery phase\u300d(Mnemonic Seed)\uff0c\u4e0d\u6703\u767c\u751f\u4f7f\u7528\u7dda\u4e0a\u4ea4\u6613\u6240\u6642\u5e33\u865f\u6216\u5e33\u6236\u4e2d\u7684\u4ee3\u5e63\u53ef\u80fd\u88ab\u76dc\u7684\u98a8\u96aa\u3002\u53ea\u6709\u5728\u767c\u9001\u4ee3\u5e63\u6642\u9700\u8981\u89e3\u9396\u9322\u5305\u5e33\u865f\u3002\u89e3\u9396\u9322\u5305\u5e33\u865f\u6642\uff0c\u8f38\u5165 PIN \u78bc\u89e3\u9396\u7684\u904e\u7a0b\uff0c\u4e5f\u662f\u900f\u904e\u786c\u9ad4\u9322\u5305\u4e0a\u7684\u6309\u9375\u5b8c\u6210\uff0c\u5f9e\u800c\u907f\u514d\u4e86\u6240\u4f7f\u7528\u7684\u96fb\u8166\u53ef\u80fd\u5df2\u88ab\u5165\u4fb5\u8005\u5b89\u88dd\u9375\u76e4\u5074\u9304\u8edf\u9ad4\u800c\u9020\u6210\u7684\u8ca1\u7522\u4e0a\u7684\u98a8\u96aa\u3002"),(0,l.kt)("h1",{id:"\u8a2d\u5b9a\u6d41\u7a0b"},"\u8a2d\u5b9a\u6d41\u7a0b"),(0,l.kt)("h2",{id:"1-\u8a2d\u5b9a-ledget-nano-s-\u786c\u9ad4"},"1. \u8a2d\u5b9a Ledget Nano S \u786c\u9ad4"),(0,l.kt)("p",null,"\u5728 Ledget Nano S \u4e0a\u900f\u904e\u6309\u58d3\u5de6\u53f3\u5169\u9846\u786c\u9ad4\u6309\u9215\uff0c\u8a2d\u5b9a 4~8 \u5b57\u7684 PIN Code \u8207 24 \u500b\u55ae\u5b57\u7684\u300crecovery phase\u300d\uff0c\u4e26\u7528\u7d19\u7b46\u7b49\u5be6\u9ad4\u65b9\u5f0f\u8a18\u9304\u4e0b\u4f86\uff08\u5343\u842c\u5225\u7528\u62cd\u7167\u7684...\uff09\u3002\u5b8c\u6210\u5f8c\u6a5f\u5668\u6703\u96a8\u6a5f\u6311\u5e7e\u500b\u6b21\u5e8f\u6e2c\u8a66\uff0c\u800c\u4f60\u9700\u8981\u9078\u64c7\u5c0d\u61c9\u7684\u55ae\u5b57\u4f86\u78ba\u8a8d\u5b89\u5168\u6027\u3002\u5982\u679c\u4ee5\u5f8c\u6a5f\u5668\u58de\u4e86\u6216\u907a\u5931\u4e86\uff0c\u4ecd\u7136\u53ef\u4ee5\u900f\u904e\u9019 24 \u500b\u55ae\u5b57\u7684\u300crecovery phase\u300d\u4f86\u53d6\u56de\u5e33\u865f\u3002"),(0,l.kt)("h2",{id:"2-\u5728\u96fb\u8166\u4e0a\u5b89\u88dd-chrome-\u6216-chromium"},"2. \u5728\u96fb\u8166\u4e0a\u5b89\u88dd Chrome \u6216 Chromium"),(0,l.kt)("p",null,"\u56e0\u70ba\u76ee\u524d Ledger Nano S \u4f7f\u7528 Chrome App \u6280\u8853\u4f86\u63d0\u4f9b\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\uff0cChrome \u4e5f\u662f\u552f\u4e00\u652f\u63f4",(0,l.kt)("a",{parentName:"p",href:"https://wicg.github.io/webusb/"},"WebUSB API"),"\u7684\u700f\u89bd\u5668...Google \u8fd1\u671f\u516c\u544a Chrome App \u5373\u5c07\u88ab Progressive Web App \u53d6\u4ee3\uff0c\u6211\u5011\u62ed\u76ee\u4ee5\u5f85 Ledger \u516c\u53f8\u5c07\u62ff\u51fa\u4ec0\u9ebc\u65b9\u6848\u4f86\u61c9\u5c0d\u3002"),(0,l.kt)("h2",{id:"3-\u5b89\u88dd-ledger-manager"},"3. \u5b89\u88dd Ledger Manager"),(0,l.kt)("p",null,"\u524d\u5f80",(0,l.kt)("a",{parentName:"p",href:"https://www.ledgerwallet.com/apps/manager"},"https://www.ledgerwallet.com/apps/manager"),"\u5b89\u88dd Ledger Manager\u3002"),(0,l.kt)("h2",{id:"4-\u8a2d\u5b9a-usb-\u9023\u7dda"},"4. \u8a2d\u5b9a USB \u9023\u7dda"),(0,l.kt)("p",null,"\u9019\u6642\u958b\u555f Ledger Manager\uff0c\u5c07 Ledget Nano S \u9023\u7dda\u5230\u96fb\u8166\u4e26\u89e3\u9396\uff0cLedger Manager \u7121\u6cd5\u627e\u5230\u5c0d\u61c9\u7684\u8a2d\u5099\u3002"),(0,l.kt)("p",null,"\u9019\u6642\u53ef\u4ee5\u53c3\u8003",(0,l.kt)("a",{parentName:"p",href:"https://ledger.zendesk.com/hc/en-us/articles/115005165269-What-if-Ledger-Wallet-is-not-recognized-on-Linux-"},"What if Ledger Wallet is not recognized on Linux?"),"\u5728\u547d\u4ee4\u884c\u74b0\u5883\u4e0b\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -q -O - https://www.ledgerwallet.com/support/add_udev_rules.sh | sudo bash\n")),(0,l.kt)("p",null,"\u57f7\u884c\u5f8c\u91cd\u65b0\u5c07 Ledget Nano S \u9023\u7dda\u5230\u96fb\u8166\u4e26\u89e3\u9396\uff0c\u53ef\u4ee5\u770b\u5230 Ledger Manager \u958b\u59cb\u66f4\u65b0\u8cc7\u6599\u3002"),(0,l.kt)("h2",{id:"4-\u5b89\u88dd-ethereum-app"},"4. \u5b89\u88dd Ethereum App"),(0,l.kt)("p",null,"Ledger Manager \u8207 Ledget Nano S \u9023\u7dda\u5f8c\uff0c\u9664\u4e86\u53ef\u4ee5\u66f4\u65b0\u97cc\u9ad4\u4e4b\u5916\uff0c\u4e5f\u80fd\u5b89\u88dd\u4e0d\u540c\u7684\u300c\u52a0\u5bc6\u4ee3\u5e63\u300dApp \u9032 Ledget Nano S\u3002"),(0,l.kt)("p",null,"\u9019\u908a\u9078\u64c7\u5b89\u88dd Ethereum App\u3002"),(0,l.kt)("p",null,"\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u5728 Ledget Nano S \u4e0a\u53ef\u4ee5\u770b\u5230\u591a\u51fa\u4e00\u500b",(0,l.kt)("inlineCode",{parentName:"p"},"Ethereum"),"\u7684\u5716\u793a\u3002"),(0,l.kt)("p",null,"\u9ede\u9078\u9032\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"Ethereum"),"\uff0c\u78ba\u8a8d",(0,l.kt)("inlineCode",{parentName:"p"},"Browser Support"),"\u9078\u9805\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"No")," (Ethereum> Settings > Browser Support > No)\uff0c\u9019\u6a23\u7a0d\u5f8c\u5b89\u88dd\u7684 Ledger Wallet Ethereum \u624d\u80fd\u8fa8\u8b58\u5230 Ledget Nano S\u3002"),(0,l.kt)("h2",{id:"5-\u5b89\u88dd-ledger-wallet-ethereum"},"5. \u5b89\u88dd Ledger Wallet Ethereum"),(0,l.kt)("p",null,"\u53c3\u8003",(0,l.kt)("a",{parentName:"p",href:"https://ledger.zendesk.com/hc/en-us/articles/115005199649-How-to-install-and-use-Ethereum-and-Ethereum-Classic-"},"How to install and use Ethereum and Ethereum Classic?")," \u524d\u5f80",(0,l.kt)("a",{parentName:"p",href:"https://www.ledgerwallet.com/apps/ethereum"},"https://www.ledgerwallet.com/apps/ethereum"),"\u4e0b\u8f09 Ledger Wallet Ethereum App\u3002"),(0,l.kt)("p",null,"\u5b89\u88dd\u597d\u5f8c\u91cd\u65b0\u5c07 Ledget Nano S \u9023\u7dda\u5230\u96fb\u8166\u4e26\u89e3\u9396\uff0c\u53ef\u4ee5\u770b\u5230\u76f8\u95dc\u64cd\u4f5c\u754c\u9762\u3002"),(0,l.kt)("h1",{id:"\u4f7f\u7528-myetherwallet-\u53d6\u4ee3-ledger-wallet-ethereum"},"\u4f7f\u7528 MyEtherWallet \u53d6\u4ee3 Ledger Wallet Ethereum"),(0,l.kt)("p",null,"\u82e5\u4e0d\u559c\u6b61\u4f7f\u7528 App\uff0c\u9084\u53ef\u900f\u904e MyEtherWallet \u4f86\u5b58\u53d6\u3002"),(0,l.kt)("p",null,"\u53c3\u8003",(0,l.kt)("a",{parentName:"p",href:"https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-ledger-hardware-wallet.html"},"Moving from MyEtherWallet to Ledger")," \u548c",(0,l.kt)("a",{parentName:"p",href:"https://ledger.zendesk.com/hc/en-us/articles/115005200009-How-to-use-MyEtherWallet-with-Ledger"},"How to use MyEtherWallet with Ledger")," \u9019\u5169\u7bc7\u8a2d\u5b9a\uff0c\u5c07",(0,l.kt)("inlineCode",{parentName:"p"},"Setting"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Contract Data"),"\u8207",(0,l.kt)("inlineCode",{parentName:"p"},"Browser support"),"\u9078\u9805\u90fd\u8a2d\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"Yes"),"\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Ethereum > Settings > Contract Data > Yes\nEthereum > Settings > Browser Support > Yes\n")),(0,l.kt)("p",null,"\u900f\u904e Chrome \u700f\u89bd\u5668\uff0c\u5728 MyEtherWallet \u4e2d\u770b\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"How would you like to access your wallet"),"\u9078\u9805\u6642\uff0c\u9078\u64c7",(0,l.kt)("inlineCode",{parentName:"p"},"Ledger Wallet"),"\u4e26\u5728\u786c\u9ad4\u4e0a\u89e3\u9396\u5373\u53ef\u3002"),(0,l.kt)("h1",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BIP39 Mnemonic Code Converter ",(0,l.kt)("a",{parentName:"li",href:"https://iancoleman.io/bip39/"},"https://iancoleman.io/bip39/"))))}h.isMDXComponent=!0}}]);