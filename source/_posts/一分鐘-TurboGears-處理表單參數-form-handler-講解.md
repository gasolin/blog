---
title: 一分鐘 TurboGears - 處理表單參數 (form handler) 講解
tags:
  - TurboGears
date: 2006-02-28 14:27:18
---

<span style="font-weight:bold;">1.傳送表單
</span>    5         &lt;form name=&quot;add&quot; method=&quot;post&quot; action=&quot;/calcit&quot;&gt;

表示名稱為"add"的表單, 使用"post"的方式, 傳送到"/calcit"連結做處理.

<span style="font-weight:bold;">2\. 使用樣板</span>
    4         template = """
    5         &lt;form &gt;
...
    8         &lt;/form&gt;
    9         """

在 TurboGears 中, 除了可以直接在程式中傳回網頁連結外, 同樣地也可以直接在程式中傳回整個頁面的樣板, 

<span style="font-weight:bold;">3\. 樣版中嵌入傳回值
</span>
3 @expose(inputform ="<span style="font-weight:bold;">add</span>")
...
    6         &lt;input name=&quot;A&quot; type=&quot;text&quot; value=&quot;%s&quot;/&gt; + &lt;input name=&quot;B&quot; type=&quot;text&quot; value=&quot;%s&quot;/&gt;
    7         &lt;input type=&quot;submit&quot; value=&quot;=&quot; /&gt; &lt;input name=&quot;SUM&quot; type=&quot;text&quot; value=&quot;%d&quot;/&gt;
    8         &lt;/form&gt;
    9         """
...
   11         return template%(A,B,SUM)

在 TurboGears 中, 寫出並"@expose()"的方法/函數就對應到同名的網頁, 因此在頁面的樣版(即一串字串)中當然可以嵌入傳回值. 那麼若是在同一網頁中有一個以上表單時該如何處理這些傳回的參數呢? 在"@expose()"方法中可以用 inputform 參數來指定要處理的傳入表單
傳回的值需要注意型態問題(%d對應到數字, %s對應到字串,...etc).

<span style="font-weight:bold;">3\. 表單處理</span>
    3     def calcit(self,A=0,B=0, SUM=0):
...
   11         return template%(A,B,SUM)

在 TurboGears 中以一致的方式處理使用"post"和"get"方法傳送到 TurboGears Server 的表單.
我們可以從方法/函式(Method)的參數中取得這些表單傳回的值.
本例子中因為使用同一個函數來顯示網頁與處理網頁傳回的參數 (A欄位, B欄位, 加總結果欄位), 第3行方法/函式取得的參數就是網頁傳回的參數, 第11行回傳的值則是用來在網頁上顯示結果. 你可以試試看如果將回傳的值去掉, 再看到表單欄位上值是不是永遠都是 0 呢 :-)

<span style="font-weight:bold;">4\. 回傳值處理</span>
    3     def calcit(self,A=0,B=0, SUM=0):
...
   10         SUM = (int(A)+int(B))

從表單接收所有預設回傳的值都會是字串格式(之後介紹到 validators() 方法可以在此改變回傳格式並確認格式正確性).