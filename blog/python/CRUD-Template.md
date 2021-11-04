---
title: CRUD Template
tags:
  - python
  - TurboGears
date: 2007-01-26 08:58:33
---

好久前使用 Ultra Dev (Dreamweaver 4 網頁編輯器時代的東西) 寫ASP網頁時, 那時其中一個超方便的功能就是在與伺服器繫結後, 選擇一個"產生詳細頁面"的 Widget 元件, 稍稍做點設定 Dreamweaver 就幫我產生一個包含資料庫表單內容的頁面. 用同樣類似的方法就能完成製作新增, 刪除網頁等事情. 製作一套動態網頁也不用花太久時間.

上禮拜回頭去試試 Ruby On Rails 時覺得 ROR 有得分的一大優點是鷹架產生器 (scaffold).

scaffold 有什麼功能呢? scaffold 可以根據 RoR 的 ORM (Active Record)來產生對應的 Controller/Template 程式碼, 達到能基本的資料建立/修改/檢視/刪除 (Create/Read/Update/Delete, CRUD)的目的. 而且即使在產生出來 scaffold 後再變更資料庫欄位, 產生出來的程式仍然可以正確判斷內容. 使用感覺頗類似 Django 的 admin 介面或 TurboGears 的 Catwalk  / DataController, 但是就可修改性而言我覺得這種作法稍勝一籌.

只是要拿 ROR 的 scaffold 繼續修改也很容易碰上問題.
因為它為了要能自動對應資料庫的改變來反應到 scaffold 介面上, 所以產生出來的 code 除了基本大框架可見之外, 裡面的內容都被包在不可見的單一函式裡.
要做任何修改時還是得自己大量改寫 scaffold 產生的內容 (不過還是比全自己寫來的快)

要搭一個漂亮的鷹架要多久呢?
我使用 TurboGears 來重現 scaffold 的各種列表增刪修改介面, 為了取得最高的重用性, 再用 widgets 改寫一遍, 運用 TurboGears 現成的 Widget 已經能幫忙處理新增/修改表單的生成. 弄好這個 CRUD 介面已花了3小時, 而且還不像 Rails 一樣會自動去抓變動的欄位.

(3小時? 有人開始撇嘴了....)

寫這個介面當然是有目的的.
接下來在開發環境中, 我試著將這個 CRUD 介面做成了 TurboGears 的樣板. 並透過 tg-admin 加入一個 crud 命令. 使用
> tg-admin crud [model class name] [controller name]

這樣的語法來產生一個包含了 controller 和 template 的資料夾

例如 model 中已經定義了一個 BookMark class, 只要在專案資料夾中輸入
> $tg-admin crud BookMark admin

就會在專案資料夾中新增一個 admin 資料夾, 在 controller 中使用
> from admin import admin
就可以將處理 BookMark 資料的介面導入到網站中.

以後每次要做的只是簡單地修改表單欄位(Form field)定義和 list/show 樣板想要顯示的欄位就可以有完整的 CRUD 介面了. 整個過程只要幾分鐘(預設還會自動套用專案預設的 CSS, 啥都不改就蠻漂亮滴 XD).

目前 tg-admin crud 的做法和 ROR 的 Scaffold 最大的不同在於整份產生的介面不管是controller 或 template 的程式都是明確的, 沒有需要修改時就得重寫的黑盒子.

接下來應該是進一步降低要修改的地方, 透過 widget 來將重複設定(無論是controller/template)都減到最低程度. 達到足夠成熟度再公開.

目前的 crud 樣板在這, 已經可以運用了
[CRUD Template](http://docs.turbogears.org/1.0/CRUDTemplate)