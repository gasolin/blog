---
title: 深入 TurboGears - 驗證並轉換表單參數 (Validators) 講解草稿
tags:
  - TurboGears
date: 2006-03-01 08:29:23
---

在 TurboGears 中可以用 "@validate()" 裝飾方法來處理輸入表單參數的轉值與驗證. 使用的好處是除了會自動確認型態的正確性之外, 還會將字串轉換成目標型態.

例如拿前一個網頁加法器作例子, 原來例子中加總結果必須先將字串轉換成目標型態 , 因此計算式如下
SUM = (int(A)+int(B))
我們可以使用"@validate()"來預先先確認輸入資料, 並將資料轉換成預期的資料型態.
範例如下:

```py
from turbogears.validators import *
        @expose(inputform ="add")
        @validate(validators=dict(A=validators.Int(),B=validators.Int()))
        def calcit(self,A=0,B=0, SUM=0):
            template = """
            &lt;form name="add" method="post" action="/calcit"&gt;
              &lt;input name="A" type="text" value="%d"/&gt; + &lt;input name="B" type="text" value="%d"/&gt;
              &lt;input type="submit" value="=" /> &lt;input name="SUM" type="text" value="%d"/&gt;
            &lt;/form&gt;
            """
            SUM = A + B
            return template%(A,B,SUM)
```

@validate(validators=dict(A=Int(),B=Int()))
@validate(validators={"A":Int()}, "B":Int())

現在例子中由於已經預先將字串轉換成目標型態, 因此可以直接加總
SUM = A + B

這讓程式碼可讀性更進一步增加了.

## 總結

validate()" 方法除了可以幫忙我們判斷回傳值型態外,同時也會將回傳值從傳回的字串型態轉換成指定型態供我們處理

除了這些簡單值的字串轉換外,在 TurboGears 中做 email 地址確認時, 甚至還能選擇確認 email 主機是否真正存在喔;)
