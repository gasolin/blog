---
title: 深入 TurboGears - 從模板生成網頁 (Templating)
tags:
  - TurboGears
date: 2006-02-28 13:58:26
---

TurboGears 中可以使用從模板生成網頁 (Templating) 的方式,可以更好地將控制邏輯與操作介面分開,來達到程式碼與網頁分離的需求.讓程式與網頁更易於維護. 

使用 TurboGears 中的預設模板, 可以用所見即所得(WYSIWYG)網頁編輯器來編輯網頁外觀.
並在回傳時用字典(dict)形式傳回變數, 降低程式碼與網頁之間的直接關聯性.

讓我們用模板功能取代將網頁用字串存在 controllers 中的方式:

<span style="font-weight:bold;">1.建立控制邏輯(Add Logic)</span>
```
0 from turbogears import controllers
1 from turbogears import expose
2 class Root(controllers.RootController):
3    @expose(template=".templates.<span style="font-style:italic;">filename</span>")
4    def <span style="font-style:italic;">webpage</span>(self):
5        return dict()
```

透過在 @expose()方法中加入 template=".templates.<span style="font-style:italic;">filename</span>"宣告來指定要使用的模板名稱.

return 型態必須是字典型態. 裡面傳回的內容則可以動態被填入模板中

<span style="font-weight:bold;">2.建立模板
</span>我們建立"<span style="font-style:italic;">filename</span>.kid"的模板.
模板名稱要跟controllers中@expose(template=".templates.<span style="font-style:italic;">filename</span>")的filename相符

3.模板宣告

模板要使用XHTML格式來撰寫. 

從 HTML 轉換到 XHTML 的主要差別在於 XHTML 對網頁語法有較嚴格規定
- 在 html 標籤內加上 &lt;html xmlns:py="http://purl.org/kid/ns#"/&gt; 宣告, 表示這是一個TurboGears 的模板, 在執行的時候 TurboGears 才能正確地將自行設定的變數替換成適當的值

- 所有的標籤要對稱, 單一的標籤要以/作結尾. 例如 &lt;br&gt; 變成 &lt;br/&gt;, &lt;input&gt; 變成 &lt;input/&gt;

<span style="font-weight:bold;">結論</span>
前幾分鐘裡的範例都是在 Controller 中將網頁用一個"template"字串來表示, 直接將網頁內容存在 python 程式裡.然後用傳回值(return) 的方式將"template"字串轉換成網頁顯示出來.
用這種方法寫網頁程式, 好處是我們只需要將網頁程式當作一般程式來處理就行了, 不需要了解太多複雜的動態網頁技巧, 利用這樣的方法, 我們需要仔細處理插入變數的類別, 並在回傳時注意變數的安排順序, 好正確地將字串中的變數替換成我們期望的樣子. 
我們很快地就發現這樣將網頁內容嵌在程式碼裡的寫作方式, 隨著漸漸增加的功能方法, 與要求更複雜的內容呈現時, 程式碼就變得越來越難以維護.

我們應該要擁有方便的工具, 可以用任意順序傳回我們想要顯示的內容, 並在實際的網頁上重複運用這些資訊. 最好還可以用一般的所見即所得(WYSIWYG)網頁編輯器來編輯網頁外觀,
