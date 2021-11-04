---
title: NS2 模組編譯心得
tags:
  - NS2
date: 2005-03-28 08:58:51
---

(討論區整理得)

如果是已經Compiler過的ns2, 則改Makefile
然後在ns2的目錄下
例如: ns2.2x則是在
      ns-2.2x 目錄下執行

#make depand
#make

這樣就可以從新compiler ns2並且加入自己的模組

如果想要加入自己寫的程式, 則可以修改 ns2 的 Makefile
如果是還未 Compiler 過的 ns2, 則修改 Makefile.in
然後依照 ns2 的安裝說明來安裝
