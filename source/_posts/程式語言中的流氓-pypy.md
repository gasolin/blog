---
title: '程式語言中的流氓: pypy'
tags:
  - python
  - pypy
date: 2007-03-31 04:46:05
---

[PyPy 1.0 剛發佈](http://codespeak.net/pypy/dist/pypy/doc/release-1.0.0.html%20)
PyPy 是:

1\. 使用 Python 語言編寫的 Python 語言 (稱作 rpython).
2\. 可以將 python 程式碼編譯成原生的 c, CLI (.net 2.0), javascript 或其他語言執行程式, 提高執行速度.
3\. 可以把 rpython 編譯成 javascript , 用來產生客戶端 javascript/編寫 ajax 應用.
4\. 可以將 rpython 程式碼流程展示成視圖.
5\. 可以透過 JIT 產生自訂版本的編譯器.

為什麼說 pypy 是流氓哩? 因為跟其他程式語言相比, 它根本就是在作弊嘛!

*   你說 c 語言寫的程式最快, pypy 可以將程式碼自動轉成 c 版程式. 用 gcc 編譯後僅慢原生 c 執行檔 10~20%.
*   你說 .Net 跨平台,  pypy 可以將程式碼自動轉成 .Net 版程式. 編譯後比  [ MS 官方提供的 .Net 平台 IronPython 快 100 倍](http://www.voidspace.org.uk/python/weblog/arch_d7_2007_03_24.shtml#e674).
*   寫好的程式可以透過 pypy 自動幫你畫流程圖.最恐怖的是 pypy 是使用 Python 語言編寫的 Python 語言, 可透過轉譯器編譯成各平台執行程式以取得超過 cpython  的效能.
各種語言轉譯器(translator) 也可以用 rpython 本身撰寫. 以後 rpython 語言開發者不用是 C 語言專家也可以參與改進 Python 語言, 與其他語言相比加入各種實驗性新特性的難度簡單了好幾個數量級.

用 pypy 目前已經可以產生 JavaScript 程式碼, 來支援 AJAX 開發.
以後想必也能產生 ActionScript 程式碼, 支援 Flash/Flex/Appolo 開發吧? 

我已經準備要屈服於 pypy 的惡勢力了 XD