---
title: 一分鐘 TurboGears - 產生表格 (DataGrid)
tags:
  - TurboGears
date: 2006-02-22 05:50:48
---

表格是最常用來呈現多筆資料的方式, TurboGears 中提供 DataGrid 方法來自動產生表格.
本例以從資料表中產生簡單的足球聯賽積分(勝差)表作為範例.

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
```
0  from turbogears import controllers
0  from turbogears import expose
1  from turbogears.widgets import DataGrid
2
3  global teams 
4  teams =[TeamStatus('Arsenal', 30,5,3),TeamStatus('chelsea', 35,2,1)]
5 
6   class TeamStatus:
7      def <span style="font-weight:bold;">__init__</span>(self, name, win, draw, lose):
8         self.team_name = name
9         self.total = win + draw + lose
10        self.win = win
11        self.draw = draw
12        self.lose = lose
13
14  class Root(controllers.RootController):
15     @expose()
16     def status(self):
17         status_form = <span style="font-weight:bold;">DataGrid</span>(<span style="font-weight:bold;">fields</span> = [
18              ('Team','team_name'),
19              ('Play','total'),
20              ('Win','win'),
21              ('Draw','draw'),
22              ('Lose','lose')<span style="font-weight:bold;">,</span>
23        ])
24        return status_form.<span style="font-weight:bold;">render</span>(teams)
```

<span style="font-weight:bold;">第三步</span>
回到命令列, 在命令列上先進入剛剛建立的資料夾後, 輸入
$ ./start-ProjName.py

在執行 ProjName/start-ProjName.py 後, 打開瀏覽器輸入 http://localhost:8000/status 這個網址,可以看到如下表結果.

```
 Team   Play   Win   Draw   Lose     
Arsenal  38    30     5      3
chelsea  38    35     2      1
```
