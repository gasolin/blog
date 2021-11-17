---
title: Functional Programming 函數式編程(程式設計)
tags:
  - functional
  - python
date: 2007-03-16 18:59:08
---

Functional Programming 中文一般被翻作"函數式編程(程式設計)". 看到這個名詞, 我腦袋裡很自然就浮出 "def ..." 這樣的語句.
因此"函數式編程"一詞所想表達的程式設計概念一直讓我完全摸不著頭腦.

直到看了[跨越边界: 用 Haskell 研究函数性编程](http://www.ibm.com/developerworks/cn/java/j-cb07186.html)這篇文章, 我才理解"函數式編程"其實就是 "以撰寫數學方程式的方式來編程(程式設計)"的程式設計方式.

看了內容很自然地發現其實 Python 語言裡可以找到 map, filter, lambda 等這些用起來比較怪異的函數都是在 Python 中可以拿來作函數式編程的基礎工具.

Python 程式裡有些時候會有用上這些語句的地方, 雖然省了空間,
但是命令式/OO編程的習慣卻讓這些段程式較難理解.

為了更易於學習與理解, python3000 中會將其中一些函數式編程相關函數(lambda)從核心中去掉, 但卻提供了更完整的函數式編程模組 [functional ](http://oakwinter.com/code/functional/index.html)的支援. 也許這是個更兩全其美的方式吧.

最近在準備 OSDC.tw 2007 要用的投影片, 在整理的過程中也產生了不少想法.
今天看了"跨越邊界"系列之後.
更加感受到要好好理解並運用一種開發方法(不管是函數式編程還是測試驅動編程), 果然還是應該從心法(本質)上著手呀.

參考資料:

*   [跨越边界: 用 Haskell 研究函数性编程 (這篇寫的極好, 推薦閱讀)
](http://www.ibm.com/developerworks/cn/java/j-cb07186.html)
*   [functional 模組](http://oakwinter.com/code/functional/index.html), 提供findr, findl 等常見函數式編程支援.
*   [Functional Python Tutorial](http://www.amk.ca/python/writing/functional)
*   [可爱的 Python: Python 中的函数编程 (共三篇, 不建議看)
](http://www.ibm.com/developerworks/cn/linux/sdk/python/charm-17/index.html)