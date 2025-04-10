"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80122],{49658:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>a,toc:()=>d});var l=e(87462),s=(e(67294),e(3905));e(8209);const p={title:"4th day of tracing INET6: Application/TCPApp Echo&Sink",tags:["IPv6","OMNET++"],date:new Date("2005-05-09T12:03:19.000Z")},i=void 0,a={permalink:"/ipv6/4th-day-of-tracing-INET6-Application-TCPApp-Echo-Sink",editUrl:"https://github.com/gasolin/blog/edit/main/website/blog/blog/ipv6/4th-day-of-tracing-INET6-Application-TCPApp-Echo-Sink.md",source:"@site/blog/ipv6/4th-day-of-tracing-INET6-Application-TCPApp-Echo-Sink.md",title:"4th day of tracing INET6: Application/TCPApp Echo&Sink",description:"\u5f9e UDPApp \u6216 TCPApp \u4e00\u5806\u6a94\u6848\u4e2d, \u7e3d\u662f\u8981\u5f9e xxSinkApp \u6700\u5148\u958b\u59cb\u770b,",date:"2005-05-09T12:03:19.000Z",formattedDate:"May 9, 2005",tags:[{label:"IPv6",permalink:"/tags/i-pv-6"},{label:"OMNET++",permalink:"/tags/omnet"}],readingTime:2.52,hasTruncateMarker:!1,authors:[],frontMatter:{title:"4th day of tracing INET6: Application/TCPApp Echo&Sink",tags:["IPv6","OMNET++"],date:"2005-05-09T12:03:19.000Z"},prevItem:{title:"7th. day of porting INET6 \u7b2c\u4e03\u5929",permalink:"/ipv6/7th-day-of-porting-INET6-\u7b2c\u4e03\u5929"},nextItem:{title:"5th day of tracing INET6: setStatusString()",permalink:"/ipv6/5th-day-of-tracing-INET6-setStatusString"}},o={authorsImageUrls:[]},d=[],c={toc:d};function k(t){let{components:n,...e}=t;return(0,s.kt)("wrapper",(0,l.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u5f9e UDPApp \u6216 TCPApp \u4e00\u5806\u6a94\u6848\u4e2d\uff0c\u7e3d\u662f\u8981\u5f9e xxSinkApp \u6700\u5148\u958b\u59cb\u770b\uff0c\n\u6700\u7c21\u55ae\u53c8\u80fd\u731c\u6e2c\u5230\u5927\u81f4\u6d41\u7a0b\u7684\u4e00\u5b9a\u662f\u9019\u5e7e\u500b\u6a94\u6848\uff0c\u900f\u904e\u9019\u6a23 tracing code \u719f\u6089\u4e86\u5927\u81f4\u67b6\u69cb\u5f8c\uff0c\u770b\u5176\u4ed6\u76f8\u95dc\u6a94\u6848\u6642\u6703\u4e8b\u534a\u529f\u500d."),(0,s.kt)("p",null,"\u56e0\u70ba xxSinkApp \u660e\u986f\u8b1b\u7684\u90fd\u6703\u662f\u5982\u4f55\u6536\u5230\u9019\u7a2e\u985e\u578b\u7684\u5c01\u5305\uff0c\u9084\u6709\u6536\u5230\u5f8c\u5982\u4f55\u5c07\u5c01\u5305\u6d88\u6ec5\u7684\u904e\u7a0b"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"TCPSinkApp\nvoid TCPSinkApp::initialize()"),(0,s.kt)("p",null,"TCPSocket socket;\n\u5ba3\u544a TCPSocket"),(0,s.kt)("p",null,'socket.setOutputGate(gate("tcpOut"));'),(0,s.kt)("p",null,"socket.bind(address","[0]",' ? IPAddress (address) : IPAddress (), port);\n\u7e6b\u7d50 "\u4f4d\u5740 - \u57e0\u865f"'),(0,s.kt)("p",null,"socket.listen(true);"),(0,s.kt)("p",null,".... \u53c3\u8003\u4e00\u822c socket \u9023\u7dda\u76f8\u95dc\u6587\u4ef6"),(0,s.kt)("p",null,"void TCPSinkApp::handleMessage (cMessage *msg)\nif (msg->kind ()==TCP_I_PEER_CLOSED)\n\u5982\u679c\u72c0\u614b\u70ba TCP_I_PEER_CLOSED"),(0,s.kt)("p",null,"msg->setKind (TCP_C_CLOSE);\n\u5c07\u72c0\u614b\u8a2d\u6210 TCP_C_CLOSE"),(0,s.kt)("p",null,'send (msg, "tcpOut");\n\u5c07\u8a0a\u606f\u9001\u5230 "tcpOut"'),(0,s.kt)("p",null,"else if (msg->kind ()==TCP_I_DATA || msg->kind ()==TCP_I_URGENT_DATA)\n\u5982\u679c\u72c0\u614b\u70ba TCP_I_DATA \u6216 TCP_I_URGENT_DATA"),(0,s.kt)("p",null,"bytesRcvd += msg->length ()/8;\nbytesRcvd += \u6536\u5230\u7684\u5c01\u5305 bit \u9577\u5ea6 / 8 (\u8b8a\u6210 byte)"),(0,s.kt)("p",null,"delete msg;\n\u4e26\u5c07\u8a0a\u606f\u522a\u9664"),(0,s.kt)("p",null,"else delete msg;\n\u6536\u5230\u5176\u4ed6\u72c0\u614b\u8a0a\u606f\u7684\u8a71\u90fd\u76f4\u63a5\u522a\u9664"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"TCPEchoApp\nechoFactor=1 will result in sending back the same message unmodified\nThe lengths of the messages are multiplied by echoFactor before sending them back"),(0,s.kt)("p",null,"void TCPEchoApp::sendOrSchedule(cMessage *msg)"),(0,s.kt)("p",null,"if (delay==0)\n\u82e5 delay \u8b8a\u6578\u503c\u70ba 0"),(0,s.kt)("p",null,"bytesSent += msg->length ()/8;\n\u7d00\u9304\u7e3d\u5171\u9001\u51fa\u7684\u5c01\u5305 byte \u9577\u5ea6"),(0,s.kt)("p",null,'send (msg, "tcpOut");\n\u4e26\u9001\u51fa\u8a0a\u606f'),(0,s.kt)("p",null,"else scheduleAt (simTime ()+delay, msg);\n\u5426\u5247\u7e7c\u7e8c\u7b49\u5f85 delay \u9019\u6bb5\u6642\u9593"),(0,s.kt)("p",null,"void TCPEchoApp::handleMessage(cMessage *msg)"),(0,s.kt)("p",null,"if (msg->isSelfMessage ())\n\u82e5\u8a0a\u606f\u4f86\u81ea\u672c\u8eab\n\u7d00\u9304\u7e3d\u5171\u9001\u51fa\u7684\u5c01\u5305 byte \u9577\u5ea6\n\u4e26\u9001\u51fa\u8a0a\u606f"),(0,s.kt)("p",null,"else if (msg->kind ()==TCP_I_PEER_CLOSED)\n\u5982\u679c\u72c0\u614b\u70ba TCP_I_PEER_CLOSED"),(0,s.kt)("p",null,"msg->setKind (TCP_C_CLOSE);\n\u5c07\u72c0\u614b\u8a2d\u6210 TCP_C_CLOSE"),(0,s.kt)("p",null,"sendOrSchedule (msg);\n\u5c07\u8a0a\u606f\u50b3\u5230 sendOrSchedule () \u8655\u7406"),(0,s.kt)("p",null,"else if (msg->kind ()==TCP_I_DATA || msg->kind ()==TCP_I_URGENT_DATA)\n\u5982\u679c\u72c0\u614b\u70ba TCP_I_DATA \u6216 TCP_I_URGENT_DATA\n\u7d00\u9304\u7e3d\u5171\u6536\u5230\u7684\u5c01\u5305 byte \u9577\u5ea6"),(0,s.kt)("p",null,"if (echoFactor==0)\n\u82e5 echoFactor==0\n\u5c07\u8a0a\u606f\u522a\u9664"),(0,s.kt)("p",null,"else\n\u5176\u4ed6:\nmsg->setKind (TCP_C_SEND);\n\u72c0\u614b\u8a2d\u6210 TCP_C_SEND"),(0,s.kt)("p",null,"//reverse direction, modify length, and send it back"),(0,s.kt)("p",null,"TCPCommand ",(0,s.kt)("em",{parentName:"p"},"ind = check_and_cast<TCPCommand "),">(msg->removeControlInfo ());\n\u5c07 msg \u7684 ControlInfo \u53bb\u6389\u5f8c\uff0c\u5f37\u5236\u8f49\u63db\u578b\u5225\u6210 TCPCommand"),(0,s.kt)("p",null,"TCPSendCommand *cmd = new TCPSendCommand();"),(0,s.kt)("p",null,"cmd->setConnId(ind->connId());\nmsg->setControlInfo(cmd);"),(0,s.kt)("p",null,"delete ind;\n\u5c07\u4e0d\u518d\u7528\u5230\u7684 ind \u522a\u9664"),(0,s.kt)("p",null,"\u8a08\u7b97\u56de\u50b3\u8a0a\u606f\u5927\u5c0f:\nlong len = long (msg->length ()",(0,s.kt)("em",{parentName:"p"},"echoFactor) & ~7U;\n\u5c07\u539f\u8a0a\u606f\u9577\u5ea6"),"echoFactor"),(0,s.kt)("p",null,"if (len<8) len=8;\n\u82e5\u8a0a\u606f\u9577\u5ea6\u5c0f\u65bc 1 byte, \u88dc\u8db3\u6210 1 byte"),(0,s.kt)("p",null,"msg->setLength (len);\n\u8a2d\u5b9a\u56de\u50b3\u8a0a\u606f\u9577\u5ea6\nsendOrSchedule (msg);\n\u6392\u5230 sendOrSchedule () \u4e2d"),(0,s.kt)("p",null,"else delete msg;\n\u6536\u5230\u5176\u4ed6\u72c0\u614b\u8a0a\u606f\u7684\u8a71\u90fd\u76f4\u63a5\u522a\u9664"))}k.isMDXComponent=!0}}]);