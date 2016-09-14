---
title: 一分鐘 TurboGears - 產生表格 (DataGrid) 講解
tags:
  - TurboGears
date: 2006-02-22 15:45:48
---

表格是非常通用的網頁元素, 可以將資料用有條理的方式來表示.

<span style="font-weight:bold;">1.定義模型物件 (define Model Object)</span>

6   class TeamStatus:
7      def __init__(self, name, win, draw, lose):
8         self.team_name = name
9         self.total = win + draw + lose
10        self.win = win
...

一個有條理的表格, 通常都具有一定的資料內容格式, 在 python 程式語言中, 我們可以使用一個類別(class)的 "__init__"方法來定義資料內容格式, 以 self.fieldname 來表示欄位內容.
以方法參數來傳回預設值或是處理參數. 如果您是 c 語言使用者, 也可以將這種資料內容格式設定理解成 struct 宣告, 只是使用類別來定義資料內容格式能作更多事情.
如本例中定義一個 TeamStatus類別來儲存球隊名稱, 已比賽場數(total)
, 勝(win), 平(fair), 負(lose)場數, 已比賽場數(total)可以在類別內直接由其他三個參數加總而得.

<span style="font-weight:bold;">
2\. 填入資料內容</span>
teams =[TeamStatus('Arsenal', 30,5,3),TeamStatus('chelsea', 35,2,1)]

 新增兩筆資料 " Arsenal","chelsea"

<span style="font-weight:bold;">3\. 產生表單
from turbogears.widgets import DataGrid
</span>status_form = DataGrid(fields = [
...
])
return status_form.render(teams)

呼叫 DataGrid 方法產生表單

<span style="font-weight:bold;">4\. 加入表單標題</span>
17         status_form = DataGrid(fields = [
18              ('Team','team_name'),
19              ('Play','total'),
20              ('Win','win'),
21              ('Draw','draw'),
22              ('Lose','lose'),
23        ])

可以在 DataGrid 方法中定義 fields 參數來自訂表單標題, fields 參數內容是一個列表, 包含了表單各欄位的名稱和標題.
格式是在列表(list) 中使用 tuple (欄位的標題,欄位的名稱) 形式來表示, 
前面是自訂名稱, 後面是資料欄位名稱,