---
title: NS2 無線模擬結果 Trace 檔分析
tags:
  - NS2
date: 2005-05-12 03:20:48
---

<span style="font-family:新細明體;">新 r 33.908773621 _3_ MAC  --- 334 mipv6_bu 70 [13a 1 4 800] ------- [4196353:0 0:0 32 4198400]
舊 s -t 1.000075000 -Hs 22 -Hd 2147483647 -Ni 22 -Nx 100.00 -Ny 2200.00 -Nz 0.00 -Ne -1.000000 -Nl MAC -Nw --- -Ma 0 -Md ffffffff -Ms 14 -Mt 800 -Is 4222977.0 -Id 2147483647.0 -It ipv6_sol -Il 100 -If 0 -Ii 1 -Iv 255

欄位</span><span lang="EN-US">: event type (</span><span style="font-family:新細明體;">事件類型</span>)

<span lang="EN-US">有四種基本事件類型
</span>

<span style="" lang="EN-US">s: send (</span><span style="font-family:新細明體;">傳送</span><span style="" lang="EN-US">)<span style="">          </span>
r: receive(</span><span style="font-family:新細明體;">接收</span><span style="" lang="EN-US">)<span style="">
</span>d:drop(</span><span style="font-family:新細明體;">丟棄</span><span style="" lang="EN-US">)<span style="">
</span>f: forward(</span><span style="font-family:新細明體;">轉送</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US"><o:p>還有一種特別類型
m: move (移動)
</o:p></span>

<span style="font-family:新細明體;">
欄位</span><span style="" lang="EN-US">2: <span class="GramE">general</span> flag</span>

<span lang="EN-US">-t: time (</span><span style="font-family:新細明體;">時間</span><span lang="EN-US">)

</span>

<span lang="EN-US"><o:p> </o:p></span>

<span style="font-family:新細明體;">欄位</span><span lang="EN-US">3: <span style="">Next hop info (</span></span><span style="font-family:新細明體;">下一站的資訊</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Hs: id for this node<o:p></o:p></span>

<span class="GramE"><span style="" lang="EN-US">-Hd</span></span><span style="" lang="EN-US">: id for next hop towards the destination

</span>

<span lang="EN-US"><o:p> </o:p></span>

<span style="font-family:新細明體;">欄位</span><span style="" lang="EN-US">4: Node property type tag (</span><span style="font-family:新細明體;">節點屬性類型標籤</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Ni: node id<span style="">  </span>(</span><span style="font-family:新細明體;">節點</span><span style="" lang="EN-US">ID)<span style="">   </span><o:p></o:p></span>

<span style="" lang="EN-US">-Nx <span class="GramE">–</span>Ny -Nz: node<span class="GramE">’</span>s x/y/z coordinate (</span><span style="font-family:新細明體;">節點</span><span style="" lang="EN-US">x/y/z</span><span style="font-family:新細明體;">的座標位置</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Ne: node energy level <o:p></o:p></span>

<span class="GramE"><span style="" lang="EN-US">-Nl</span></span><span style="" lang="EN-US">: trace level, such as AGT, RTR, MAC<o:p></o:p></span>

<span style="" lang="EN-US">-Nw: reason for the event (</span><span style="font-family:新細明體;">事件發生原因</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US"><o:p>
</o:p></span>

<span style="font-family:新細明體;">欄位</span><span style="" lang="EN-US">5: packet info at MAC level (</span><span style="font-family:新細明體;">封包在</span><span style="" lang="EN-US">Mac</span><span style="font-family:新細明體;">層的資訊</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Ma: duration <o:p></o:p></span>

<span style="" lang="EN-US">-Md: dest’s ethernet address<o:p></o:p></span>

<span style="" lang="EN-US">-Ms: src’s ethernet address<o:p></o:p></span>

<span style="" lang="EN-US">-Mt: ethernet type<o:p></o:p></span>
     <span style="" lang="EN-US"><o:p></o:p></span>  

<span style="font-family:新細明體;">欄位</span><span style="" lang="EN-US">6: Packet information at IP level (</span><span style="font-family:新細明體;">封包在</span><span style="" lang="EN-US">IP</span><span style="font-family:新細明體;">層的資訊</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Is: source address. Source port number (</span><span style="font-family:新細明體;">來源位置，</span><span style="" lang="EN-US">a.b</span><span style="font-family:新細明體;">其中</span><span style="" lang="EN-US">a</span><span style="font-family:新細明體;">為節點</span><span style="" lang="EN-US">ID</span><span style="font-family:新細明體;">，</span><span style="" lang="EN-US">b</span><span class="GramE"><span style="font-family:新細明體;">為埠號</span></span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Id: dest address.dest port number (</span><span style="font-family:新細明體;">目的位置</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-It: packet type (</span><span style="font-family:新細明體;">封包類型</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Il: packet size (</span><span style="font-family:新細明體;">封包大小</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-If: flow id (</span><span style="font-family:新細明體;">資料流</span><span style="" lang="EN-US">ID)<o:p></o:p></span>

<span style="" lang="EN-US">-Ii: unique id (</span><span style="font-family:新細明體;">唯一的</span><span style="" lang="EN-US">ID</span><span style="font-family:新細明體;">編號</span><span style="" lang="EN-US">)<o:p></o:p></span>

<span style="" lang="EN-US">-Iv: ttl value (Time To Live</span><span style="font-family:新細明體;">的值</span><span style="" lang="EN-US">)</span>

<span style="" lang="EN-US"><o:p></o:p></span>

<span style="" lang="EN-US"><o:p> </o:p></span>
    <span style="font-family:新細明體;">欄位</span><span style="" lang="EN-US">7:
</span><span style="font-family:新細明體;">封包在應用層的資訊。
包含的應用程式類型如 </span><span style="" lang="EN-US">arp, tcp </span><span style="font-family:新細明體;">或者是 </span><span style="" lang="EN-US">adhoc </span><span style="font-family:新細明體;">路由協定, </span><span style="font-family:新細明體;">
這個欄位都是以</span><span style="" lang="EN-US">P</span><span style="font-family:新細明體;">所開頭的，
且標籤為隨著應用程式不同而不同

Trace 檔分析:

</span><span lang="EN-US">Packet Loss</span><span style="font-family:新細明體;"> 數量計算:</span>
<span style="font-family:新細明體;">不考慮</span><span lang="EN-US">Out-of-Order</span><span style="font-family:新細明體;">情況時, </span><span lang="EN-US">Packet Loss</span><span style="font-family:新細明體;">數量的計算方法最簡單, </span><span style="font-family:新細明體;">每一個封包在傳送端發送前，傳送端都會給封包一個序號，序號是連續性的，因此若是在接收到發現序號有不連續的發生，則可視為有封包<span class="GramE">的移失</span>。

OWD&IPDV</span><span style="font-family:新細明體;">計算:</span>
<span lang="EN-US">最重要的欄位是 Sending Time(</span><span style="font-family:新細明體;">傳送時間</span><span lang="EN-US">)</span><span style="font-family:新細明體;">和</span><span lang="EN-US">Sequence Number(</span><span style="font-family:新細明體;">封包序號</span><span lang="EN-US">), </span><span style="font-family:新細明體;">可以用來計算出</span><span lang="EN-US">One Way Delay (OWD)</span><span style="font-family:新細明體;">和</span><span lang="EN-US">IP Delay Variance (IPDV</span><span style="font-family:新細明體;">，或是</span><span lang="EN-US">Jitter)</span><span style="font-family:新細明體;">。</span><span style="font-family:新細明體;">
</span><span style="font-family:新細明體;"></span><span lang="EN-US"></span><span style="font-family:新細明體;"></span><span lang="EN-US"></span><span style="font-family:新細明體;"></span>

**<span  lang="EN-US" style="font-family:新細明體;">One Way Delay = 接收時間 <span class="GramE">–</span> 傳送時間<o:p></o:p></span>**
   **<span  lang="EN-US" style="font-family:新細明體;">IPDV = |目前量測到的OWD <span class="GramE">–</span> 上一次量測到的OWD |

</span>**Reference:
http://140.116.72.80/~smallko/ns2/wireless1.htm
http://www.k-lug.org/~griswold/NS2/ns2-trace-formats.html
http://www.ee.surrey.ac.uk/Personal/L.Wood/ns/