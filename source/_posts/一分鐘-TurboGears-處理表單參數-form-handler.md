---
title: 一分鐘 TurboGears - 處理表單參數 (form handler)
tags:
  - TurboGears
date: 2006-02-28 14:06:49
---

在這一分鐘要介紹的是 TurboGears 表單處理的特性, 使用簡單的網頁加法器作例子 (嘿嘿...)
試作的結果如下圖:
[![](http://photos1.blogger.com/blogger/1345/565/320/form_result.jpg)](http://photos1.blogger.com/blogger/1345/565/1600/form_result.gif)

<span style="font-weight:bold;">第一步</span>
假設您已經安裝好 TurboGears. 首先, 要建立一個 TurboGears 專案.
打開命令行(Command Line or shell), 進入到要建立專案的主目錄. 在主目錄下輸入

$ tg-admin quickstart

輸入之後, 會有專案建立導引如下:

Enter project name:ProjName
Enter package name [ProjName]: ProjName

ProjName 是我們自己指定的專案名稱, 專案名稱可以有空格, 第二行是 package name, 也就是實際建立的目錄(資料夾)名稱, 目錄名稱中則不能有空格.

把準備工作做完後, 我們可以發現這個 tg-admin 命令還會跑出一大串訊息, 告訴我們已經複製好專案框架, 可以開始寫我們自己的程式了.

<span style="font-weight:bold;">第二步</span>
編輯 controllers.py 這個檔案 (檔案的路徑應該是ProjName/ProjName/controllers.py),
我們將檔案內看到的框架自動生成的內容都先清除或註解掉後, 輸入如下一段程式碼:

<pre>
    0 from turbogears import controllers,expose
    1 class Root(controllers.RootController):
    2     @expose(<span style="font-weight:bold;">inputform ="add"</span>)
    3     def calcit(self,A=0,B=0, SUM=0):
    4         template = """
    5         &lt;form name=&quot;<span style="font-weight:bold;">add</span>&quot; method=&quot;post&quot; action=&quot;<span style="font-weight:bold;">/calcit</span>&quot;&gt;
    6         &lt;input name=&quot;A&quot; type=&quot;text&quot; value=&quot;%s&quot;/&gt; + &lt;input name=&quot;B&quot; type=&quot;text&quot; value=&quot;%s&quot;/&gt;
    7         &lt;input type=&quot;submit&quot; value=&quot;=&quot; /&gt; &lt;input name=&quot;SUM&quot; type=&quot;text&quot; value=&quot;%d&quot;/&gt;
    8         &lt;/form&gt;
    9         """
   10         SUM = (int(A)+int(B))
   11         return template%(A,B,SUM)
</pre>

第三步
回到命令列, 在命令列上先進入剛剛建立的資料夾後, 輸入
$ ./start-ProjName.py

在執行 ProjName/start-ProjName.py 後, 打開瀏覽器輸入 http://localhost:8000/calcit 這個網址,可以看到三個欄位, 在前兩個欄位輸入數字, 按下"="按鈕, 則第三欄位上會顯示出計算結果.