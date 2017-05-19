---
title: 一分鐘 TurboGears - Hello TurboGears
tags:
  - TurboGears
date: 2006-10-24 05:59:49
---

讓我們嘗試用最少時間弄出一個可用的 TurboGears 版 "Hello World" 吧!

<span style="font-weight: bold;">第一步</span>
假設您已經安裝好 TurboGears. 首先, 要建立一個 TurboGears 專案.
打開命令行(Command Line or shell), 進入到要建立專案的主目錄. 在主目錄下輸入

$ tg-admin quickstart

輸入之後, 會有專案建立導引如下:

Enter project name:Proj Name
Enter package name [ProjName]: ProjName

ProjName 是我們自己指定的專案名稱, 專案名稱可以有空格, 第二行是 package name, 也就是實際建立的目錄(資料夾)名稱, 目錄名稱中則不能有空格.

把這些準備工作做完後, 我們可以發現這個 tg-admin 命令還會跑出一大串訊息, 告訴我們已經複製好專案框架, 可以開始寫我們自己的程式了.

<span style="font-weight: bold;">第二步</span>
現在我們進入開發的部分啦, 在 TurboGears 中, controllers.py 是實作我們的網頁應用程式邏輯的地方.

我們現在來進入剛剛建立的資料夾, 用你習慣的 python 文本(文件)編輯器來編輯 controllers.py 這個檔案 (檔案的路徑應該是ProjName/ProjName/controllers.py), 我們將檔案內看到的框架自動生成的內容都先清除或註解掉後, 輸入如下一段程式碼:

```
   0 from turbogears import controllers, expose
   1 class Root(controllers.RootController):
   2      @expose()
   3      def index(self):
   4          return "Hello World!"
```

<span style="font-weight: bold;">
第三步</span>

回到命令列, 在命令列上先進入剛剛建立的資料夾後, 輸入
$ ./start-ProjName.py 

在執行 ProjName/start-ProjName.py 後, 打開瀏覽器輸入 http://localhost:8000 這個網址,
就可以看到首頁上跑出 Hello World 字樣啦!

接著看[講解](http://inet6.blogspot.com/2006/02/turbogears-hello-turbogears_04.html)
