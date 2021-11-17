---
title: 如何把蛋砸到起司商店?
tags:
  - python
date: 2006-09-23 12:19:42
---

白話翻譯是: 怎麼在 Linux 或 Windows 平台上將 python 的安裝蛋(.egg)上傳到 Python 檔案集散地 CheeseShop 上.(取了個白目的標題 XD)

一般來說, 要上傳安裝檔到 CheeseShop, 只要輸入

> setup.py bdist_egg upload

即可.
"bdist_egg" 是通知 setup.py 將我的程式封裝成安裝蛋(.egg), 
"upload" 是通知 setup.py 將我剛封裝好的程式上傳至 CheeseShop.
(另外一個常用的命令是 "register", 可以直接更新 CheeseShop 上的程式發佈資訊)

但是在 Windows 上使用 setup.py upload 命令一般會得到下面這樣非常無用的錯誤報告:
> Submitting dist/your.egg to http://www.python.org/pypi
> Upload failed (401): Authorization Required

仔細查過文件才發現, 原來是在上傳之前, 需先建立一個 .pypirc 文件, 內容是儲存欲登入 cheeseshop 的帳號密碼. 如下:

> [server-login]
>     username:james
>     password:password

在 Linux 上, 可以在 home 目錄下建立.pypirc 文件;

在 Windows 上則是放在 Documents and Settings 目錄. 例如 C:\Documents and Settings\Gasolin

在 Windows 下一般無法編輯 .xxx 開頭的檔案, 這時可以在命令列下輸入
> >edit .pypirc

來編輯 .pypirc 檔案.

編輯完儲存後, 需在命令列下設置 HOME 環境變數. 
> > SET HOME=C:\Documents and Settings\James

當設定完成後, 就可以輕鬆使用 CheeseShop 提供的所有功能囉!