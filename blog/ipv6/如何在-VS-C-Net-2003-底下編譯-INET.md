---
title: 如何在 VS C++ .Net 2003 底下編譯 INET
tags:
  - OMNET++
date: 2005-04-28 21:03:36
---

針對我所要用的編譯器 還有 執行檔 定義一些所需要的set path

在命令提示字元底下一定要找得到以下幾個可執行的程式:
nmake
cl
vcvars32.bat

我的電腦按右鍵->內容->進階->環境變數->系統變數->編輯 path, 加入
C:\Program Files\Microsoft Visual Studio .NET 2003\Vc7\bin;

切換到目錄, 執行 vcvars32.bat 以設定vc71環境. 
若 path 變數未設好, 則會出現找不到這檔案的訊息.
接著執行 m.bat 編譯即可.

若發生問題, 可以試著鍵入
makemake
重新產生 makefiles. 
再打入
nmake -f makefile.vc depend
確認相依性.
之後再執行 m.bat 重新編譯一次即可

參考網址
http://java.csie.nctu.edu.tw/~deryann/paper/HowToSTL.htm