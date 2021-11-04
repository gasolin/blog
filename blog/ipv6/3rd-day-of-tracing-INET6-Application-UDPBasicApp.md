---
title: '3rd day of tracing INET6: Application/UDPBasicApp'
tags:
  - IPv6
  - OMNET++
date: 2005-05-12 03:23:42
---

If the dest_addresses parameter contains more than one address,
one of them is randomly chosen for each packet.

An address may be given in the dotted decimal notation, or with the module name. (The IPAddressResolver class is used to resolve the address.)

To disable the model, set dest_addresses to "".

The peer can be UDPSink or another UDPBasicApp (it handles received packets exactly like UDPSink).

----
UDPAppBase:
*** void UDPAppBase::bindToPort(int port)

   cMessage *msg = new cMessage("UDP_C_BIND", UDP_C_BIND);
建立新 message "*msg", 使用 UDP_C_BIND 格式

   UDPControlInfo *ctrl = new UDPControlInfo();
建立新 record "*ctrl"

   ctrl->setSrcPort(port);
將port參數設定進ctrl的SrcPort參數中

   msg->setControlInfo(ctrl);
將ctrl包進 msg 中的 ControlInfo 參數中

   send(msg, "to_udp");
送到傳輸層的 udp 做處理

void UDPAppBase::sendToUDP(cMessage *msg, int srcPort, const IPvXAddress& destAddr, int destPort)

msg->setKind(UDP_C_DATA);
Send message to UDP, with the appropriate control info attached

其他類似bindToPort()

----
UDPSink:
void UDPSink::initialize()

WATCH(numReceived);
TKenv 中顯示 numReceived 變數

if (port!=-1)
      bindToPort(port);
port 數字正常就將 port 參數繫結到埠號

void UDPSink::handleMessage(cMessage *msg)
處理封包並秀numReceived狀態在畫面中

void UDPSink::processPacket(cMessage *msg)
收到封包後刪除, numReceived數 +1

----

UDPBaseApp

const char *destAddrs = par("dest_addresses");
讀入目的位址
cStringTokenizer tokenizer(destAddrs);
const char *token;
while ((token = tokenizer.nextToken())!=NULL)
    destAddresses.push_back(IPAddressResolver().resolve(token));
解析 string 成可辨識的位址格式

void UDPBasicApp::sendPacket()
IPvXAddress destAddr = chooseDestAddr();
超過一個目的位址時從中選擇隨機目的位址

IPvXAddress UDPBasicApp::chooseDestAddr()
{
    int k = intrand(destAddresses.size());
destAddresses.size() 即目標位址數量, intrand(n) 從n中隨機取一數

    return destAddresses[k];
}