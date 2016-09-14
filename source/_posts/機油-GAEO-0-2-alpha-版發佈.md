---
title: 機油 (GAEO) 0.2 alpha 版發佈
tags:
  - GAEO
  - GAE
  - python
date: 2008-10-10 01:10:57
---

[![](http://doc.gaeo.org/_/rsrc/1220443094048/config/app/images/customLogo/customLogo.gif?revision=1)](http://doc.gaeo.org/_/rsrc/1220443094048/config/app/images/customLogo/customLogo.gif?revision=1)

開發過 Google App Engine 網頁應用程式的 Python 開發者，可能都有種被縛手縛腳的感覺。因為現成 Python 的網頁框架在 Google App Engine 上，有些地方因為 Google App Engine  的限制而無法作用，因此用起來不是很順手。

[GAEO (Google App Engine Oil)](http://code.google.com/p/google-app-engine-oil/) 是個專門作用在 Google App Engine 上的框架，免去 Google App Engine 一切得自己手動建造的麻煩。

<span style="font-size:180%;">安裝</span>

使用
> easy_install gaeo
命令就可以安裝好。

安裝完提供 gaeo 跟 gaeogen 兩個命令。

<span style="font-size:180%;">建立新專案</span>

使用
> gaeo <專案名稱>
來建立一個新專案，新專案中除了基本 Google App Engine 的設定檔案外，還複製了一個 gaeo 檔案夾，提供  gaeo 相關的函式庫。

建立後進入專案，啟動 Google App Engine 開發工具的 server 就可以看到運行的網站。

還可以改使用
> gaeo --eclipse <專案名稱>
來順便建立 pydev+eclipse 開發環境用的專案資訊。

<span style="font-size:180%;">程式碼組織方式
</span>
GAEO 組織程式碼的方式一樣是網頁框架常見的 Controller/Model/Templates 組織方式。剛建立的資料夾主要內容如下：

> main.py
> application/controllers/welcome.py
> application/template/welcome/index.html

main.py 中可以透過 initRoutes() 函式來修改 url 對應的類別(class)。
template 中的 welcome 資料夾則是直接對應到  controllers 中的 welcome.py。
<span style="font-size:180%;">
新增函式</span>

要新增一個 url 處理函式，可以用
> gaeogen controller blog view post
命令，會在 application/controllers 中建立 blog.py 檔案，裡面有一個 'blog' class，class 中包含 'view'和 'post' 兩個 method。另外 application/template 中也會建立一個 blog 資料夾，裡面包含 view.html 和 post.html 兩個 Django template 檔案。

<span style="font-size:180%;">技術</span>

技術上 gaeo 樣板使用 django template，而整個 routing 是採用「一頁樣板(template) 對應一個方法 (method) 」的組織方式，可以用類似 route 的方式添加新方法。0.2 版除了提供 scaffold (鷹架)之外，也提供 plugin 系統，整個很有 Ruby on Rail 的感覺。

照著[官方文件](http://doc.gaeo.org/)說明做一遍，一個多小時內就可以上手開發 Google App Engine 上的網頁應用程式啦。