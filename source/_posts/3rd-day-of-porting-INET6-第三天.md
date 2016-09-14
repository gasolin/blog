---
title: 3rd. day of porting INET6 第三天
tags:
  - OMNET++
date: 2005-03-27 00:29:39
---

5th Part:
閱讀論文: KAME IPv6 Impliment issue
文中指出 IPv6 遵照 IPv4 基礎來修改, 所以基本觀念不變.
文中也提出一些porting 中遇上的問題:
1\. Scope 位址處理
2\. 多重位址應綁介面(Interface)而非綁節點(Node)
3\. 延伸標頭處理
4\. IPSec

目前可能會遇到的問題還不只這些:
1\. 位址分析
2\. 明確的參考資料
...., etc

6th. Part
閱讀書籍: C++ 風格與藝術 第二版(Practical C++ Programming, 2e)
整本書說明都很清晰, 應該買一本手邊隨時參考

程式碼要像文章一樣分段落章節, 每段並加入主題說明,
變數避免用縮寫, 以降低程式複雜度

原型: 先寫規格中可以運作的部分,
當這一小部份運作正常之後,
再以它為基礎,
建立其他的功能.

程式檔中應包含:
Header 標題
Author 作者
Purpose 目的
Usage 用法
References 參考資料
File Formats 列出讀取/寫入的檔案與格式
Restrictions 限制 (Q by myself:是否可延伸成代辦事項? Revice: ToDo集中管理會比較有效率)
Revision History
Error Handling
Copyright and License
Notes 補充說明

* 編輯提供 .ned 架構檔在 NodePad++ 編輯關鍵字加亮的定義,
但還沒找到獨立提供這個設定檔的方法

3/11 update: 定義在 NodePad++ 資料夾下 userDefineLang.xml 檔中