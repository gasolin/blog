---
title: 深入觀察 TurboGears
tags:
  - python
  - TurboGears
date: 2006-12-16 13:57:03
---

許多人以為 [TurboGears](http://www.turbogears.org/) 能跟 [Django](http://www.djangoproject.com/) 或 [Ruby on Rails](http://www.rubyonrails.org) 比較的地方只是因為一個分散組件, 一個集中開發.

但 TurboGears 好用的地方並不是在它堆砌了許多開源的 python web 專案(如不曾成功過的 subway),而是真正提出了一個整合這些 python web 開發資源的方法. 並提供相當具有 python 風格(pythonic) 的使用方式.

<span style="font-weight:bold;">
1\. Decorator 形式的 Dispatcher</span>

TurboGears 的多數的秘密存在於 Decorator (用"＠"符號開頭的敘述) 中. Decorator 是 python 2.4 後才引入的特性,
適度使用可以讓程式碼更清晰.

TurboGears 基本的網頁型態是這樣:
> <pre>
>     @expose()
>     def index():
>         return </pre>

基本的 pyhton method 加上 [@expose()](http://docs.turbogears.org/1.0/ExposeDecorator) 這個 decorator 敘述, 
讓 server 知道這個函式是 public to web 的.

需要登入認證功能, 就再加一個 [@identity](http://docs.turbogears.org/1.0/IdentityDecorator) 敘述
> #auth_admin_required = identity.in_group("admin")
>     @identity.require(auth_admin)
>     @expose()
>     def index():
>         return

如此被裝飾到的網頁就有了認證功能.

同樣形式的還有 
> [@paginate](http://docs.turbogears.org/1.0/PaginateDecorator) # 分頁功能
>     [@validate](http://docs.turbogears.org/1.0/ValidateDecorator) # 表單驗證功能
>     [@error_handler](http://docs.turbogears.org/1.0/ErrorHandling) #錯誤處理功能
>     [@exception_handeler](http://docs.turbogears.org/1.0/ErrorHandling) #例外處理功能

等特殊功能.

@validate 表單驗證的功能除了驗證表單參數, 
還負責將參數從字串轉換成 python native 格式, 可以對網頁傳過來的參數直接用 python 做處理.

@error_handler 和 @exception_handeler 被用來對應表單驗證功能
讓我們可在同一個函式裡處理錯誤, 或另外定義函式做錯誤處理
> <pre>
>     @error_handler("index")
>     def ex_report():
>         return "exception"</pre>

<span style="font-weight:bold;">
2\. 一個函式, 多重輸出</span>

很多人知道 TurboGears 在樣板選擇上的多樣性, 
但是卻沒有挖掘到在 TurboGears 的神奇之處.
在 TurboGears 中使用同一個函式,就可以針對不同需求, 輸出多種期望的格式.
> <pre>
>     # 使用網頁樣板產生網頁介面 
>     @expose(template = "hello.welcome") 
>     # 產生 JSON 格式介面供 AJAX 程式調用
>     @expose("json") 
>     #使用不同的樣板引擎, 產生RSS格式介面
>     @expose(template = "genshitext:hello.hoho", as_format="RSS/XML") 
>     def show(self, **kw):
>         return dict(name = 'foo', url = 'boo')</pre>

這是因為 TurboGears 回傳使用 python 特殊的 "字典 (dict)" 形式, 
而不是一般常見的字串形式(當然 TurboGears 同樣也可以直接輸出字串).

當使用者要求網頁的時候, web server 決定好對應的 method 運行後,
method 輸出字典型式的返回值到 decorator. 再根據 @expose decorator 的判斷條件, 
取用適當的樣板配合字典來生成適當的介面. 

原本需要自行將樣板與內容 "串連 (serialize)" 的工作, TurboGears 都幫忙我們完成, 
讓我們只要專注在程式邏輯上即可.

要從別的 method 調用這個函式不同的輸出也很容易, 
只要在返回值裡加上一個 "tg_format" 參數即可手動指定輸出格式.
> <pre>
>     @expose()
>     def rss():
>         return rss(tg_format = "RSS/XML")</pre>
    <span style="font-weight:bold;">
3\. 簡單設定 </span>

通常在 TurboGears 中要讓一個資料庫程式運作, 
只要在 dev.cfg 裡指定好對應的資料庫路徑(dburi), 就可以開始資料庫網站的開發. 
TurboGears 自會幫忙處理初始化的動作, 並且提供相應工具.

要改換整個網站的預設樣板引擎, 同樣也是一行設定搞定.
> tg.defaultview = "genshi"

程式裡往往會有些可以讓使用者修改預設運行設定的地方, 
如在程式裡要取得預設的模板引擎, 可以使用
    > config.get("tg.defaultview")

來取得預設的模板引擎. 取得其他設定值也是使用同樣的方法.

TurboGears 開發的應用程式在發佈/安裝上相當容易. 
使用易用的 setuptools python 套件發佈功能, 
安裝時能自動抓取使用到的 python  modules. 
<span style="font-weight:bold;">
4\. 高擴展性</span>

TurboGears 框架是個組合框架 (meta framework), 
因此設計之初就把高擴展性視為重要目標. 
只要在 console 中使用 tg-admin info 命令就可以一窺 TurboGears 擴展的面目.你會驚訝地發現其實 TurboGears 大多數的功能都是透過擴展實現.

TurboGears 使用的擴展方式是透過 python setuptools 的 entrypoint, 
撰寫自己的擴展並不需要改動 TurboGears 的原始碼.
安裝擴展也可以透過 easy_install 命令自動從 python cheese shop 下載組件. 

<span style="font-weight:bold;">
5\. 與 Python 社群互利</span>

TurboGears 並不是一個只取不予的開發框架, 
一方面 TurboGears 降低了試用各 python web modules 的難度, 
使得各專案能吸引更多使用者, 也加快了各專案的成熟度;

另外一方面, 除了多數 python modules 都可配合 TurboGears 使用之外, 
TurboGears 框架中所開發出來的工具也都盡量朝能獨立於框架外使用的方向邁進.

近期的成果是 ToscaWidgets, 將 TurboGears 中方便重用的 widgets 獨立出來, 
可在 pylons, web.py 等框架和工具上使用.

TurboGears 在組合框架上, 不只是達到功能上的滿足, 還達到與 python 語言使用上的一致性.
充分使用各種 python 語言的特性與工具, 沒有過多的 Magic. 這是許多追趕的組合框架應該思考的.

PS: 對 Open Source Project 來說, 一個[好的文件網站](http://docs.turbogears.org/1.0)也很重要