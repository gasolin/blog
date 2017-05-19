---
title: 一分鐘 TurboGears - 多頁面 (Multiple Pages)
tags:
  - TurboGears
date: 2006-02-07 14:45:10
---

在上一篇裡, 我們學到的是如何快速在 TurboGears 弄出一個網站的首頁來.
在這一分鐘裡我們要學的則是如何在 TurboGears 製作多個頁面的網站, 並讓網頁相互連結.

**第一步**
假設您已經安裝好 TurboGears. 首先, 要建立一個 TurboGears 專案.
打開命令行(Command Line or shell), 進入到要建立專案的主目錄. 在主目錄下輸入

$ tg-admin quickstart

輸入之後, 會有專案建立導引如下:

Enter project name:ProjName
Enter package name [ProjName]: ProjName 

ProjName 是我們自己指定的專案名稱, 專案名稱可以有空格, 第二行是 package name, 也就是實際建立的目錄(資料夾)名稱, 目錄名稱中則不能有空格.

把準備工作做完後, 我們可以發現這個 tg-admin 命令還會跑出一大串訊息, 告訴我們已經複製好專案框架, 可以開始寫我們自己的程式了.

**第二步**
編輯 controllers.py 這個檔案 (檔案的路徑應該是ProjName/ProjName/controllers.py), 
我們將檔案內看到的框架自動生成的內容都先清除或註解掉後, 輸入如下一段程式碼:

```
    0 from turbogears import <span style="font-weight:bold;">controllers,expose,url</span>
    1 class Root(controllers.RootController):
    2         @expose()
    3         def index(self):
    4                 return """Hello , &lt;a href="tg"&gt;World!&lt;/a&gt;"""
    5 
    6         @expose()
    7         def tg(self):
    8                 return "TurboGears World!&lt;br/&gt; &lt;a href=%s&gt;Home&lt;/a&gt;"""%<span style="font-weight:bold;">url</span>("/home")
```

恩, 看的出來這一分鐘的例子跟前一篇有很多一樣的地方了嗎? 
這個例子跟上一個例子一樣由"import", "class"(Root), 跟 "def"三個部分構成.
僅僅多加了一個tg()方法來作出另一個頁面.

**第三步**
回到命令列, 在命令列上先進入剛剛建立的資料夾後, 輸入
$ ./start-ProjName.py

在執行 ProjName/start-ProjName.py 後, 打開瀏覽器輸入 http://localhost:8000 這個網址,
就可以看到首頁上跑出 "Hello World!" 字樣, 而且"World!"為一個連結, 按下連結後會跳到"http://localhost:8000/tg"網頁, 並顯示"TurboGears World!"
