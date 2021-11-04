---
title: 深入 TurboGears - 多頁面的階層式網頁 (Multiple pages - Hierarchy)
tags:
  - TurboGears
date: 2006-02-08 10:32:50
---

TurboGears 網頁階層的有兩類, 第一類是用"參數"來對應網頁階層, 第二類是用物件樹結構(即類別實體)來對應網頁階層. 

1. 參數對應結構

例如 http://localhost:8080/calcit/4/8
"4", "8"會被分別當成 calcit 方法的第一,第二個參數傳入, 作用等同於
http://localhost:8080/calcit?A=4&B=5

如果calcit 方法不存在, 即連結資料夾名稱沒有對應到方法的話, 就會被當成參數傳到最近物件的 default()中當作參數 (在本例為 TurboGears 預設建立的 Root 物件).

2. 物件樹結構

另外三種情形都是用物件樹結構的"類別實體"(instance) 來對應網頁階層. 可以實現超過一層的網頁. TurboGears 中會自動建立 Root 類別的實體, 我們可以建立其他的類別, 然後在 Root 類別中建立其他相關類別的實體.(恩...要把這個概念寫成文字真不容易) 範例如下:

CASE1: controllers.py 內

在 controllers.py 內編寫多個類別(class)

```py
0  from turbogears import controllers,expose
1
2  class Subfolder(controllers.RootController):
3     @expose()
4     def index(self):
5         return "I am B"
6     @expose()
7     def C(self):
8         return "I am C"
9
10 class Root(controllers.RootController):
11    @expose()
12    def index(self):
13        return "I am Root"
14    @expose()
15    def A(self):
16        return "I am A"
17    B = Subfolder()
```

我們在 2~8 行編寫了一個類別, 在 Root 類別內第 17 行建立該類別的實體, 最後我們會得到像下面的網頁階層樹
```
   Root
   /    A    B
                 C
```
網頁 localhost/ 跟網頁 localhost/B 的文字是由各自類別的 index() 方法來處理.

CASE2: controllers.py 外 (同目錄):

將 Subfolder 類別存成 subfolder.py , 保存在與 controllers.py 同目錄下. subfolder.py 內容如下:

```
0  from turbogears import controllers,expose
1
2  class Subfolder(controllers.RootController):
3     @expose()
4     def index(self):
5         return "I am B"
6     @expose()
7     def C(self):
8         return "I am C"
```

TurboGears 可以從 controllers.py 內調用同目錄下的其他類別

```
from subfolder import Subfolder
from turbogears import controllers,expose
class Root(controllers.RootController):
    @expose()
    def index(self):
        return "Root"
    @expose()
    def A(self):
        return "I am A"

    B = Subfolder()
```

"from subfolder import Subfolder" 前面小寫的"subfolder"是檔名 (subfolder.py), 後面的 Subfolder 是類別名

CASE3: 子目錄下 (子系統)

TurboGears 也可以從 controllers.py 內調用子目錄下的其他類別
(待補)
