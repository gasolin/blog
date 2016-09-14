---
title: 與 NS3 的第一次接觸
tags:
  - NS3
date: 2007-06-19 13:21:19
---

[NS-3](http://www.nsnam.org/)? <strike>跟PS3沒關係</strike> NS(Network Simulator)-3 是已經主宰網路模擬界多年的 [NS2](http://www.isi.edu/nsnam/ns/) 的繼任者. 原來 NS-3 早已悄悄上路. 值得花點時間來瞧瞧 NS-3 有什麼改進.

<div style="text-align: left;">初接觸的感覺還不錯, NS-3 有個比 NS2 規範多的[網站](http://www.nsnam.org/), 拿掉 otcl 介面描述語言, 使用 C++ 模組化元件並直接用 C++ 來描述拓樸, 有[公開](http://code.nsnam.org/)可參與的程式碼, 有定期的[版本發佈規劃](http://www.nsnam.org/wiki/index.php/Roadmap), 而且有 [Python Binding](http://code.nsnam.org/gjc/ns-3-pybindgen/) (用 Python script 來描述拓樸, 與控制模擬的互動)的規劃!

有 Python Binding 這件事其實看了他們的網站並不那麼意外.
</div>NS-3專案程式碼用 [mercurial](http://www.selenic.com/mercurial/) 管理(用 python 寫的分散式版本控制系統), 所以程式碼可以用"hg clone http://http://code.nsnam.org/ns-3-dev/"抓下來. 預設的編譯程式是一般比較少聽過的 scons, 而在[版本發佈規劃](http://www.nsnam.org/wiki/index.php/Roadmap)中不久就要以另一套 waf 來取代原本的 scons.  scons 跟 waf 都是 Python 版的 "better Make" 程式.
總之原本 Makefile 要用 shell script 寫的地方, 都改用 python script 來撰寫, 可讀性較佳之外還可以用到 Python 語言的所有功能.

就 NS-3 模組本身而言, NS-3 去掉了 NS-2 中 <strike>討人厭的</strike> 使用 otcl 描述模型的方式, 改成[直接用 C++ 描述](http://code.nsnam.org/gjc/ns-3-pybindgen/file/1690717820e3/examples/simple-p2p.cc)之後, 安裝上簡單了不少, 也不用多學一門沒啥用途的語言. C++ 讓多數基本網路元件可以重用, 像以前各個模組會"綁版本"的情形應可降低很多.

目前還在開發中的 Python Binding 讓 [網路模型也可以用 Python 描述](http://code.nsnam.org/gjc/ns-3-pybindgen/file/1690717820e3/examples/simple-p2p.py), 晚上編譯完還沒意識到如何使用 Python 版.  不過編好的 C++ 版一執行就跑出熟悉的 .tr 檔還是蠻有親切感的.

目前 NS-3 的核心網路元件還不多(不過 node 終於可以有真的IP位址了 XD), 範例較少是比較可惜的. 看看這情形要多久才能改善囉.