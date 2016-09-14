---
title: Turbogears widgets 介紹 -- 表單篇
tags:
  - widgets
  - python
  - TurboGears
date: 2007-05-22 08:34:43
---

相信在做網頁開發時不少人被表單處理困擾著,
cherrypy 的網頁表單處理已經很簡單了,
而 TurboGears 更為我們帶來了 widget (網頁元件)這個概念.
透過 widget 能簡單地完成產生表單, 欄位驗證, 重用表單等等仔細思考起來相當複雜的動作.

TurboGears 開發者們宣稱 widget 多麼好用, 但是 widget 的說明文件卻相當缺乏.

那麼 widget 到底是什麼東西哩?

<span style="font-weight: bold;">widget 是什麼</span>
==============

widget 用中文表達簡而言之就是"網頁元件",
TurboGears widget 的功能就是讓使用者重用所有網頁元件.

那麼網頁元件是什麼? 網頁元件就是網頁的構成元素.

古代希臘先哲柏拉圖認為風, 火, 水, 土是構成世界的四大元素. 所有的物質最終都可以拆解成這四個元素.

而在網頁的世界裡, HTML, 表單(Form), CSS, Javascript 則是網頁的四大構成元素.(註)
多數的網頁都可以由這四個元素組合產生.

Widget 表單元件
-----------------

Widget 表單屬於 Widget 的一個重要分支. 由以下的基本網頁元件組成:

    * 表單欄位元件 (Field) — 等同於 HTML 表單欄位的基本元素, 如文字欄位 [input type="text"] 文字區塊欄位 (textarea) 等等. 用來產生基本的表單欄位.
    * 表單欄位列表元件 (WidgetList) - 用來有機地組合表單欄位元件, 產生欄位列表, 提供表單元件使用.
    * 表單元件(Form) — 表單欄位, 驗證資訊, 處理方式(post 或 get), 處理函式 (URI) 的集合. 可使用現有的驗證功能 validators.Schema 來做表單驗證.

除了基本的表單欄位元件, TurboGears 也透過 widget 提供了一些進階的表單欄位元件例如跳頁選單(表單+Javascript), 語法高亮(HTML+CSS+Javascript), 標籤頁(HTML+Javascript)等元件, 這些高級元件(Rich Element) 也都是由這些網頁中最常見的基本元素所組成.

透過 widget 你可以自己建造自己的網頁元件, 也可以透過 python 的擴充機制, 很容易使用 easy_install 命令取得其他人共享出來的各種元件.

在使用高級元件之前, 我們回到基本面上,  先來看看如何用 widget 處理表單.

<span style="font-weight: bold;">用 widget 產生表單欄位</span>
======================

你可以在互動式直譯器(interactive interpreter)裡試驗 TurboGears widget.

產生 TextField
<pre>
>>> # TextField
>>> from turbogears.widgets import *
>>> Field = TextField(label='Main Menu')
>>> Field.render()
'<input id="widget" class="textfield" name="widget" type="text">'
</pre>

產生 TextArea
<pre>
>>> # TextArea
>>> Field2 = TextArea(label="Description", attrs=dict(rows=3, cols=60))
>>> Field2 = TextArea(label="Description",
...     attrs=dict(rows=3, cols=60))
...
>>> Field2.render()
'<textarea rows="3" cols="60" class="textarea" name="widget" id="widget"></textarea>'
>>>
</pre>

在 Python 互動式直譯器裡你可以看到用 TurboGears widget 產生一個表單欄位並不困難.

<span style="font-weight: bold;">用 widget 產生跳頁選單</span>
======================

我們再來看如何用 widget 產生跳頁選單

跳頁選單適用於諸如"選擇使用的語言"等等情況,
可以在使用者選擇後自動跳至對應的網頁.

首先, 我們先看看如何產生一般的網頁選單
<pre>
>>> # SingleSelect Field
>>> Field3 = SingleSelectField(label="Author",
...       options=[(1, "fred"), (2, "Joe")])
...
>>> Field3.render()
'<select class="singleselectfield" name="widget" id="widget">    <option value="1">fred</option><option value="2">Joe</option></select>'
>>>
</pre>

到現在為止, 我們可以確認產生一般網頁選單的方式與前面生成簡單文字欄位的方式完全一致.

我們接著來看看如何產生跳頁選單.
<pre>
>>> # JumpMenu
>>> from turbogears.widgets import *
>>> Form = JumpMenu('Main Menu',options = [
...        ('/createNewBatch', 'Create New Batch'),])
...
>>> Form.render()
'<select class="jumpmenu" onchange="TG_jumpMenu(\'parent\',this,0)" id="Main Menu" name="Main Menu">    <option value="/createNewBatch">Create New Batch</option></select>'
>>>
</pre>

恩, 產生跳頁選單跟產生一般網頁選單的使用方式並無二致.  也同樣是這麼容易.

跳頁選單無法在 Python 互動式直譯器中完全表現,
因為在實際使用時, 跳頁選單元件除了會產生這段 HTML 表單外,
嵌入 turbogears 網頁樣板時網頁元件還會自動嵌入相應的 javascript.

等你熟悉了 Turbogears 之後,
透過 widget, 即使是很複雜的 javascript 元件(如所見即所得網頁介面編輯器),
你也不必擔心要導入哪些 Javascript library 等瑣事, 透過網頁元件的分享, 你可以直接透過 easy_install 命令即裝即用別人寫好的網頁元件. 然後把時間用在自己網站內容的開發上.

<span style="font-weight: bold;">用 widget 產生表單</span>
===================

前面已經講完用 widget 產生表單"欄位"了. 然而一個表單除了基本的各個欄位之外,
還包含了一些其他元素. 例如如何組織欄位, 指定上傳方式 (GET/POST), 指定處理動作 (action)等等.

TurboGears 裡已包含了數種預設表單欄位的格式. 而其中最常見的就是 TableForm 了.

<span style="font-weight: bold;">用 widget 組織表單欄位</span>
======================
<pre>可以透過 WidgetsList 來組織表單欄位.

>>> class BookFields(WidgetsList):
...  title = TextField(label="Title")
...  description = TextArea(label="Description")
...
>>> BookFields()
[TextField(name='title', convert=True, field_class='textfield', attrs={}, css_classes=[]), TextArea(name='description', convert=True, rows=7, cols=50, attrs={}, css_classes=[], field_class='textarea')]
</pre>
我們已經組織起了兩個文字欄位, 通過最後一行可以發現 <pre>WidgetsList <span style="font-family:Georgia,serif;">其實</span>只是協助我們產生了一個表單欄位元件的列表.
接下來我們就要把這個欄位列表放進表單裡.
</pre><pre>
>>> class BookForm(TableForm):
...     #name="Book"
...  fields = BookFields()
...     #validator = BookSchema()
...     #method="post"
...  submit_text = "Create"
...
>>> BookForm()
BookForm(name='form', submit_text='Create', convert=True, table_attrs={}, form_attrs={}, action=None, disabled_fields=set([]), method='post')
>>> BookForm().render()
'.form method="post" class="tableform" name="form".
......略......
./form.
</pre>
基本上這產生的就是相當完整的表單了....

等等!~~想必你要大聲質疑: 我的 "action" 呢??? 換句話說, 我怎麼指定處理這個表單的 url 呢?

<span style="font-weight: bold;">widget 與樣板合作</span>
==============

恩, 好問題. 你可以直接在宣告時就將 action 的值傳給 widget,
也可以在樣板 render 時再傳入. 一般我習慣習慣在表單最終產生時(樣板 render時)再指明.

例如這樣

在 controllers.py 中加入
<pre>
model_form = BookForm() # 事先宣告好在重用時不用多次呼叫

# 產生實際表單頁面

@expose("template.new")
def new(self, **kw):
return dict(form = model_form)
</pre>
在 "new.kid" 樣板中加入這一行

${form(action='save')}

當然有了處理這個表單的 url  , 也需要在 controllers.py 中加入一個處理 "save" 這個處理表單資料的 method

<pre>
@expose()
def save(self, id=None, **kw):
....
</pre>
前面講起來好像花了不少篇幅, 但其實看完程式後你會發現使用 widget
程式邏輯變得出乎意料之外的清晰.
http://docs.turbogears.org/1.0/CRUDTemplate

<span style="font-weight: bold;">用 widget 驗證表單欄位</span>
======================

驗證表單欄位其實只要在 TableForm 中傳入 validator 參數即可
<pre>
>>> class BookForm(TableForm):
...  fields = BookFields()
...  validator = BookSchema()
...  submit_text = "Create"
...
>>> BookForm().render()
.....略....
</pre>
你可以使用 formencode 模組所提供的 "Schema" 完成任何複雜的表單驗證程序.
從比較基本的輸入字數長短/類型驗證, 到多欄位密碼確認等都可以簡單地達成.
(Turbogears 將 formencode 的 Schema 包裝成 validators.Schema)

<pre>
>>> from turbogears import validators
>>> class BookSchema(validators.Schema):
...  title = validators.String(not_empty=True, max=30)
...  description = validators.String()
...
>>> BookSchema()
<bookschema object="" 114="" chained_validators="[]" fields="{'description':" title="" pre_validators="[]">
>>>
</bookschema></pre>
上一節中我們在 controllers.py 裡定義了

model_form = BookForm()

現在我們在做表單驗證時也可以用的上.

用法是簡單地在 "save" 這個 method 上加上 @validate(model_form) 裝飾. 表示要使用 model_form 表單元件所附的表單驗證元件.

而要順便將輸入錯誤的訊息產生在表單上的話, 只要再加入 @error_handler(new) 裝飾,
表示如果有錯誤就跳轉到 new 這個 method (我們的表單頁)處理.

<pre>@validate(model_form)
@error_handler(new)
@expose()
def save(self, id=None, **kw):
....
</pre>

<span style="font-weight: bold;">widget 還可以幹什麼</span>
=====================

widget 可以讓你用最 Pythonic 的方式表現網頁表單, 也可以簡化提供不同 AJAX 函式庫的支援.

你覺得網頁元件能幹什麼, Turbogears widget 就可以幫助你幹什麼.

<span style="font-weight: bold;">怎麼知道有哪些 widget</span>
=====================

Turbogears 的網頁工具箱 toolbox 中有網頁元件瀏覽器 (widget browser).
使用 $tg-admin toolbox 命令啟動網頁工具箱就會看到網頁元件瀏覽器.
在網頁元件瀏覽器中你可以找到所有內建與外掛的網頁元件.

外掛的網頁元件(widget plugin)可以在 cogbin (http://www.turbogears.org/cogbin/) 找到.

註: 嚴格說來, "表單"其實是屬於 HTML 的一部分.
所以也可以說網頁的三大基本組成元素是 HTML, CSS, Javascript.

TurboGears widget 實現表單的方式也是組合這三大基本組成元素.

然而因為表單的使用與其他 HTML 元素的使用有較大差別.
在說明時獨立出來更易於理解.