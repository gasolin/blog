---
title: '4th day of tracing INET6: Application/TCPApp Echo&Sink'
tags:
  - IPv6
  - OMNET++
date: 2005-05-09 12:03:19
---

從 UDPApp 或 TCPApp 一堆檔案中, 總是要從 xxSinkApp 最先開始看, 
最簡單又能猜測到大致流程的一定是這幾個檔案, 透過這樣 tracing code 熟悉了大致架構後, 看其他相關檔案時會事半功倍.

因為 xxSinkApp 明顯講的都會是如何收到這種類型的封包, 還有收到後如何將封包消滅的過程

----
TCPSinkApp
void TCPSinkApp::initialize()

TCPSocket socket;
宣告TCPSocket

socket.setOutputGate(gate("tcpOut"));

socket.bind(address[0] ? IPAddress(address) : IPAddress(), port);
繫結"位址-埠號"

socket.listen(true);

....參考一般 socket 連線相關文件

void TCPSinkApp::handleMessage(cMessage *msg)
if (msg->kind()==TCP_I_PEER_CLOSED)
如果狀態為TCP_I_PEER_CLOSED

msg->setKind(TCP_C_CLOSE);
將狀態設成TCP_C_CLOSE

send(msg, "tcpOut");
將訊息送到"tcpOut"

else if (msg->kind()==TCP_I_DATA || msg->kind()==TCP_I_URGENT_DATA)
如果狀態為 TCP_I_DATA 或 TCP_I_URGENT_DATA

bytesRcvd += msg->length()/8;
bytesRcvd += 收到的封包bit長度/8(變成byte)

delete msg;
並將訊息刪除

else delete msg;
收到其他狀態訊息的話都直接刪除

----
TCPEchoApp
echoFactor=1 will result in sending back the same message unmodified
The lengths of the messages are multiplied by echoFactor before sending them back

void TCPEchoApp::sendOrSchedule(cMessage *msg)

if (delay==0)
若 delay 變數值為 0

bytesSent += msg->length()/8;
紀錄總共送出的封包byte長度

send(msg, "tcpOut");
並送出訊息

else scheduleAt(simTime()+delay, msg);
否則繼續等待 delay 這段時間

void TCPEchoApp::handleMessage(cMessage *msg)

if (msg->isSelfMessage())
若訊息來自本身
紀錄總共送出的封包byte長度
並送出訊息

else if (msg->kind()==TCP_I_PEER_CLOSED)
如果狀態為TCP_I_PEER_CLOSED

msg->setKind(TCP_C_CLOSE);
將狀態設成 TCP_C_CLOSE

sendOrSchedule(msg);
將訊息傳到sendOrSchedule()處理

else if (msg->kind()==TCP_I_DATA || msg->kind()==TCP_I_URGENT_DATA)
如果狀態為 TCP_I_DATA 或 TCP_I_URGENT_DATA
紀錄總共收到的封包byte長度

if (echoFactor==0)
若echoFactor==0
將訊息刪除

else
其他:
msg->setKind(TCP_C_SEND);
狀態設成 TCP_C_SEND

//reverse direction, modify length, and send it back

TCPCommand *ind = check_and_cast<TCPCommand *>(msg->removeControlInfo());
將 msg 的 ControlInfo 去掉後, 強制轉換型別成 TCPCommand

TCPSendCommand *cmd = new TCPSendCommand();

cmd->setConnId(ind->connId());
msg->setControlInfo(cmd);

delete ind;
將不再用到的 ind 刪除

計算回傳訊息大小:
long len = long(msg->length()*echoFactor) & ~7U;
將原訊息長度*echoFactor

if (len<8) len=8;
若訊息長度小於1 byte, 補足成1 byte

msg->setLength(len);
設定回傳訊息長度
sendOrSchedule(msg);
排到sendOrSchedule()中

else delete msg;
收到其他狀態訊息的話都直接刪除