---
title: 非官方 SDK 與新的模擬器
tags:
  - Android
date: 2009-04-13 10:05:15
---

[![](http://2.bp.blogspot.com/_2xGPUuRo1sg/Sdydlt2xTqI/AAAAAAAAArY/9nCp-GiGx-4/s400/%E5%9C%96%E7%89%87+2.png)](http://2.bp.blogspot.com/_2xGPUuRo1sg/Sdydlt2xTqI/AAAAAAAAArY/9nCp-GiGx-4/s1600-h/%E5%9C%96%E7%89%87+2.png)

[AndAppStore](http://andappstore.com/AndroidPhoneApplications/sdk/) 4/7 日起提供非官方的 Android SDK BT 種子下載（需要註冊），有 Windows、Mac、Linux 版本。

在目前非官方 SDK 1.5 上可以看到繁簡體中文支援了，只是目前這個版本 Image 還有些問題，像是不支援網路等功能。

使用這版本的 emulator 前，需要建立一個 avd 模擬器 image 檔案。這表示不像目前模擬器只能換面板，骨子裡是同一台模擬器。SDK 1.5 發佈後，開發時可以自訂現在要模擬的機器是否支援諸如相機、GPS 等特性。也就是新版本在支援模擬多種不同的手機上跨進了一步。

建立方法是在 SDK 的 tools 目錄下執行以下命令：

> $ android create avd --target 1 --name cupcake-dev-vm

自訂完手機模擬器 image 檔案 avd 後，就可以啟動 emulator

> emulator -avd cupcake-dev-vm

PS: 還好[書裡面](http://www.books.com.tw/exep/assp.php/gasolin/exep/prod/booksfile.php?item=0010429598)有先見之明，全使用 Eclipse 來操作，而不是用 terminal 來控制模擬器或編譯 Android 應用程式，不然馬上就包很大了 XD