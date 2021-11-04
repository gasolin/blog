---
title: pypy 架構分析 1
tags:
  - python
  - pypy
date: 2007-04-02 02:55:18
---

以前已經有些人研究過 Python 原始碼.

[python源码剖析](http://tag.csdn.net/tag/python%E6%BA%90%E7%A0%81%E5%89%96%E6%9E%90/1.html)

[python 源码分析](http://tag.csdn.net/tag/python%E6%BA%90%E7%A0%81%E7%A0%94%E7%A9%B6/1.html)

[python 源码分析](http://tag.csdn.net/tag/python%E6%BA%90%E7%A0%81%E7%A0%94%E7%A9%B6/1.html) 中有列出 Python 語法分析的機制。回顧一下 cPython 的整個處理流程：

1\.     PyTokenizer進行詞法分析，把源程序分解為 Token

2\.     PyParser 根據 Token 創建 CST

3\.     CST 被轉換為 AST

4\.     AST 被編譯為字節碼 ByteCode

5\.     執行字節碼

這個流程是直譯器 Interpreter 的流程.
大體也可以套用在 pypy 的 Python 直譯器上.

[PyPy - Goals and Architecture Overview](http://codespeak.net/pypy/dist/pypy/doc/architecture.html) (pypy 架構) 一文中講到 pypy 有兩大構成部份, 
其一就是 Python Interpreter(直譯器), 
其二則是 Translation Framework(轉譯器).

....寫好的被 Ctrl+Z 吃掉了....待補...  Orz