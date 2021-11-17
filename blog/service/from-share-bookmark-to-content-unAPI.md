---
title: 從分享書籤到分享內容- unAPI
tags: []
date: 2006-03-13 16:52:26
---

現在不少 web 服務(amazon, del.icio.us, flickr)都提供有 API 或 RSS, 
共通之處是這些 web 服務都使用了 XML 標記語言, 解析起來類似.
但是問題來了, 這些種類 web service 的標籤格式雖然都遵照 XML 標記語言規範了, 
但各 web service 的格式還是都稍有不同, programmer 要使用這些 web 服務的時候, 每要支援一個服務就得重寫一個 Adapter.

[unAPI](http://unapi.info/specs/)是一個新提出來的抽象 API, 
希望透過統一介面操作這些 API, 
讓 programmer 得以更輕鬆用同一個介面做出能線上分享書籍介紹, 參照圖片, 剪貼網頁的平台.(拿 windows 軟體來比喻的話就像是 Microsoft OneNote 那樣的功能)
programmer 開發的速度加快了, 使用者也更容易得到更好的體驗(或是更奇怪的體驗?).

雖然之前已經有不少 web 2.0 網站打著可以將許多 web service 或是將 feed, blog post "燒"在一起來用來看, 
但是被"綁"在特定平台上的感覺總是不夠自在.
因此我感覺 [unAPI](http://unapi.info/specs/) 相當具有成功的機會.

unAPI 離我們有點遠,覺得太抽象? 還有[screencast](http://onebiglibrary.net/project/unapi/dawn-of-social-clipboards-screencast)可以參考喔.