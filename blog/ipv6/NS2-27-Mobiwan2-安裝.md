---
title: NS2.27 + Mobiwan2 安裝
tags:
  - NS2
date: 2005-03-10 13:46:39
---

用來與 OMNET++ IPv6Suite 模組 作對照的模擬工具是 NS2 上的 Mobiwan2 模組.
這是目前最多人使用的模擬模組.
除了基礎對照系統架設之外,
還將根據之前學長在 NS2.1b1 上使用 Mobiwan 的程式,
改寫成 for NS2.27 的 Mobiwan2 版本.
以順便了解其架構, 並利用其優點在 INET6 porting 上

剛開始照著NS2 (Network Simulator) 教學手冊 的[ 安裝篇](http://140.116.72.80/%7Esmallko/ns2/setup.htm) 裝,
成功後再裝 [Mobiwan2](http://www.ti-wmc.nl/mobiwan2/) 卻遇到問題.

解決方法是在執行NS2-AllinOne 安裝前先照著 Mobiwan2 網站上的指令 patch 好,
```
# cd <your>ns-allinone-2.27/ns-2.27
# zcat <patchfile.gz></patchfile.gz></your>patchfile.gz<your><patchfile.gz> |patch -p1</patchfile.gz></your>
```
然後再執行 NS2 安裝
# ./install

要是已經把 NS2 裝好了怎麼辦? 還能怎麼辦, 我只會一個笨方法......
先把之前裝的整個目錄砍掉後, 再裝一次吧...Orz.

在Cygwin上測試的方法: 命令列中輸入 startxwin.bat。會產生一個新的視窗，在此命令視窗中輸入

```
$ cd your path to ns-2.27
$ ./ns simple-mipv6.tcl
```

若要在Fedora Core 3 上安裝, 因為 gcc 版本太新(3.34)的關係, 笨笨的 NS2 不懂得支援,
去下載 [http://www.ececs.uc.edu/~cdmc/ucbt/src/ns227-gcc34.patch ](http://www.ececs.uc.edu/%7Ecdmc/ucbt/src/ns227-gcc34.patch)
這個好心人寫的修正檔,
丟到 ns-allinone-2.27 目錄下, 打入

#patch -p0 -p0 < ns227-gcc34.patch

修正後再來裝就可以了.
