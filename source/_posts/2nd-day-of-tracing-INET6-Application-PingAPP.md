---
title: '2nd day of tracing INET6: Application/PingAPP'
tags:
  - IPv6
  - OMNET++
date: 2005-05-08 09:42:38
---

Define_Module(PingApp);
模組名稱是 PingApp

PingApp::initialize()

1.  讀入 omnetpp.ini 中設定的參數.
2.  在 TKenv 中監視 

*   sendSeqNo
*   expectedReplySeqNo
*   dropCount
*   outOfOrderArrivalCount
這幾個結果 PingApp::handleMessage(cMessage *msg)

if (msg->isSelfMessage())
若訊息來自本身節點

destAddr = IPAddressResolver().resolve(par("destAddr"));
解析目的位址設定

來自其他節點則啟動回覆機制
processPingResponse(check_and_cast<pingpayload>(msg));

void PingApp::sendPing()

PingPayload *msg = new PingPayload(name);
新增封包, 接著下面照著宣告的格式填入對應的值
msg->setLength(8*packetSize); //? 封包裡沒宣告

sendToICMP(msg, destAddr, srcAddr, hopLimit);
把訊息送到 ICMP 裡

PingApp::scheduleNextPing(cMessage *timer)

simtime_t nextPing = simTime() + intervalp->doubleValue();
模擬時間加上間隔時間

void PingApp::sendToICMP(cMessage *msg, const IPvXAddress& destAddr, const IPvXAddress&amp; srcAddr, int hopLimit)
判斷送出 v4/v6 icmp 格式封包

void PingApp::processPingResponse(PingPayload *msg)
收到ICMP封包, 判斷</pingpayload> v4/v6 並<pingpayload>處理
</pingpayload>