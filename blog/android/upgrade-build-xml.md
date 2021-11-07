---
title: 升級build.xml
tags:
  - Android
date: 2012-02-10 07:39:24
---

用ant來編譯Android專案的開發者，在2011/10月中升到r14之後版本的開發工具之後，ant檔案的格式又被修改了。

要升級到新版的 build.xml，記得先把原來的build.xml檔案備份，

$ mv build.xml oldbuild.xml

再跑一下命令行

$ android update project --path .

以更新相關檔案。

若有參考到相關的library project的話，在各library project中執行

$ android update lib-project --path .

開啟新的build.xml並加入自用的相關設定後，最後再執行

$ ant clean release

看看有沒有問題。如果沒有問題的話，就恭喜你順利升級囉。
