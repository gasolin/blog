"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[41683],{84669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(8209);const l={title:"Install react-native for android environment on windows",tags:["web","mobile","react-native","chocolatey"],date:new Date("2016-12-13T17:59:25.000Z")},i=void 0,r={permalink:"/react-native/install-react-native-android-development-environment-on-windows",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/react-native/install-react-native-android-development-environment-on-windows.md",source:"@site/blog/react-native/install-react-native-android-development-environment-on-windows.md",title:"Install react-native for android environment on windows",description:"You may think its pretty hard to setup everything on windows. But after I found chocolatey the process is deadly simple.",date:"2016-12-13T17:59:25.000Z",formattedDate:"December 13, 2016",tags:[{label:"web",permalink:"/tags/web"},{label:"mobile",permalink:"/tags/mobile"},{label:"react-native",permalink:"/tags/react-native"},{label:"chocolatey",permalink:"/tags/chocolatey"}],readingTime:1.185,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Install react-native for android environment on windows",tags:["web","mobile","react-native","chocolatey"],date:"2016-12-13T17:59:25.000Z"},prevItem:{title:"\u500b\u4eba\u5de5\u5177\u7bb12016",permalink:"/tools/tooling-in-2016"},nextItem:{title:"360\u7167\u7247\u7db2\u9801\u7522\u751f\u5668",permalink:"/vr/360-photo"}},s={authorsImageUrls:[]},c=[{value:"Reference:",id:"reference",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may think its pretty hard to setup everything on windows. But after I found ",(0,o.kt)("a",{parentName:"p",href:"http://chocolatey.org/"},"chocolatey")," the process is deadly simple.\nChocolatey is the package manager for windows. Like homebrew for Mac, you can use Chocolatey to install all react-native dependencies and let chocolatey setup system PATH for you automatically."),(0,o.kt)("p",null,"Sounds good? let's install react-native on windows."),(0,o.kt)("p",null,"The very first step is install chocolatey via ","[following its instuction]",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/install"},"https://chocolatey.org/install"),")."),(0,o.kt)("p",null,"Then install git, node, android-sdk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\> choco install git nvm android-sdk\n")),(0,o.kt)("p",null,"And you can download the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/current/"},"latest node version")," via command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install 8.4.0\n")),(0,o.kt)("p",null,"Note that Java Development Kit (JDK) is also installed when you install ",(0,o.kt)("inlineCode",{parentName:"p"},"android-sdk"),", neat!\nAs I mentioned earlier, the SYSTEM PATH are automatically set so you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," command on ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," or the alternative to open up the SDK manager after install is complete! "),(0,o.kt)("p",null,"Once you can open android SDK manager, check ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/getting-started.html#3-install-the-android-6-0-marshmallow-sdk"},"Getting Started")," section in React Native doc to find out which android SDK versions to download."),(0,o.kt)("p",null,"You can also check Chocolatey's ",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages"},"package list")," to install a editor.\nSince its windows, I'll give Visual Studio Code a try:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"c:\\> choco install visualstudiocode\n")),(0,o.kt)("p",null,"Now you are on the fast track to install react-native, its all node related instructions now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"c:\\> npm install -g create-react-native-app\nc:\\> create-react-native-app sample\nc:\\> cd sample\nc:\\sample> npm start\n")),(0,o.kt)("p",null,"Happy coding!"),(0,o.kt)("h2",{id:"reference"},"Reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65#.pnkm80tv7"},"Getting Started with React Native Development on Windows"))))}p.isMDXComponent=!0}}]);