---
title: 5th. day of porting INET6 第五天
tags:
  - OMNET++
date: 2005-03-27 00:34:01
---

9th. Part:
編輯 IP6Datagram.msg
參考 [IANA](http://www.iana.org/numbers.html) 上[PROTOCOL NUMBERS](http://www.iana.org/assignments/protocol-numbers) 來改寫 IP6Datagram.msg

Protocol field ->  Next Header field
因此 enum 名稱IP6ProtocolFieldId 改成  IP6NextHeaderFieldId

IPv4 上叫 Protocol field, IPv6 上稱 Next Header field
為了相容性, 將原本定義的 Protocol field 全保留之外, 另外新增

+ IP6_PROT_IPv6_Route = 43;  //Routing Header for IPv6       [Deering]
+ IP6_PROT_IPv6_Frag =  44;  //Fragment Header for IPv6     [Deering]
+ IP6_PROT_ESP   = 50;  //Encap Security Payload            [RFC2406]
+ IP6_PROT_AH   = 51;  //Authentication Header               [RFC2402]
+  IP6_PROT_IPv6_ICMP  = 58; //ICMP for IPv6                [RFC1883]
IP6_PROT_NONE  = 59; --> IP6_PROT_NoNxt  = 59; //No Next Header for IPv6           [RFC1883]
+ IP6_PROT_Opts  = 60; //Destination Options for IPv6      [RFC1883]
+ IP6_PROT_ENCAP = 98; //Encapsulation Header         [RFC1241,RXB3]

除了這些之外, 順便把一些 Routing protocol 的號也加了上去.

IP6_PROT_IPv6_MOBILITY 原本給 62,  改成
IP6_PROT_IPv6_MOBILITY = 135; //Mobility Header for IPv6 [RFC3775]

從一串配給號碼中發現比較特別的是

```
61                 any host internal protocol           [IANA]
63                 any local network                    [IANA]
68                 any distributed file system          [IANA]
99                 any private encryption scheme        [IANA]
114                any 0-hop protocol                   [IANA]
```

剛開始看不知有何特別作用, 後來想想這幾個保留位看起來對模擬工具好像不賴
--> 有新協定要試作?
不必改到標頭定義, 暫時先用這幾個吧!
不過沒有標頭名稱怎麼辦?
Orz ..... 還是暫時不要加進去好了

本檔案編完的下一步應是編輯 IP6Address.h 或  IP6ControInfo.msg 吧

Ref:  [IP VERSION 6 PARAMETERS](http://www.iana.org/assignments/ipv6-parameters) ,   [ICMPv6 TYPE NUMBERS](http://www.iana.org/assignments/icmpv6-parameters)

10th. Part:

編輯 IP6Datagram.msg 中的 message IP6Datagram :
參考 IPv6Suite IP6Datagram.cc 來改寫 IP6Datagram.msg

ToDo:
1\. 將相關各標頭定義在檔案裡.
2\. 定義 flow_label 結構(struct, 20 bit = double + short OR int + int + short OR?)
3\. 訂 Options Types

IP6Datagram.cc 中標頭是如此定義出來的:

static const ipv6_hdr IPV6_INITIAL_HDR =
{
0x60000000, //version 6, traffic class of 0, flow label of 0
0,   //payload of 0
59,   //No next header yet
0,   //Hop Limit set to uninitialised
IPv6_ADDR_UNSPECIFIED,
IPv6_ADDR_UNSPECIFIED
};

完整的標頭:

```
message IP6Datagram
{
 properties:
     //g Still unknown its func
     omitGetVerb = true;
 fields:
     short version            = 6;                               // version 6
     int traffic_class        = 0;                               // traffic class of 0
     IP6FlowLabel flow_label;                                    // flow label of 0
     double payload_length    = 0;                               // payload of 0
     int next_header enum(IP6NextHeaderFieldId) = IP_PROT_NONxt; // No next header yet
     int hop_limit            = 0;                               //Hop Limit set to uninitialised
     IP6Address srcAddress;
     IP6Address destAddress;
}
```

即將碰到 day 3 提到的 延伸標頭處理 問題. [RFC2460](http://ietf.org/rfc/rfc2460.txt?number=2460) 上的敘述是這樣的

4.1  Extension Header Order [Page 6]
When more than one extension header is used in the same packet, it is
recommended that those headers appear in the following order:

   IPv6 header
   Hop-by-Hop Options header
   Destination Options header (note 1)
   Routing header
   Authentication header (note 2)
   Encapsulating Security Payload header (note 2)
   Destination Options header (note 3)
   upper-layer header
   Fragment header

填 class IP6Options,
碰到Option_Data: Variable-length field.  Option-Type-specific data 的問題

經 majorlee 學長指點
[RFC 3493](http://rfc-editor.org/rfc/rfc3493.txt) Basic Socket Interface Extensions for IPv6.
[RFC 3542](http://rfc-editor.org/rfc/rfc3542.txt) Advanced Sockets Application Program Interface (API) for IPv6
裡可能會有答案.
