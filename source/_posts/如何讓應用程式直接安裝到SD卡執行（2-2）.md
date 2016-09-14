---
title: 如何讓應用程式直接安裝到SD卡執行（2.2）
tags:
  - Android
date: 2010-05-21 15:28:37
---

Android 2.2 中新增了應用程式直接安裝到SD卡執行 (不少人稱這個功能作 App2SD)，
要使用這個功能只要在目前程式中做幾個設定：

1\. 專案的 Project Build Target 版本設定為 2.2 (API 8)
2\. 修改 AndroidManifest 清單

**設定 Project Build Target 版本**

在 Eclipse 專案列表中按右鍵，選取 properties 選項，會彈出設定視窗。
在上面選擇左側的 Android 標籤，在右側 Build 欄位勾選「Android 2.2」選項（沒有這選項的請參考 [管理SDK](http://code.google.com/p/androidbmi/wiki/ManageSDK) 來升級SDK），如此一來編譯時才能認得我們接下來在 AndroidManifest 清單中所做的設定。

**修改 AndroidManifest 清單**

在 manifest 標籤中加入一個「android:installLocation」屬性，實際程式碼如下

> &lt;manifest xmlns:android="http://schemas.android.com/apk/res/android"&gt;
> package="com.demo.org"
> android:versionName="1.0" android:versionCode="1"
> **android:installLocation="preferExternal"**
> &gt;
> ....
**說明**

> android:installLocation="preferExternal"
清單中加入以上宣告後，編譯好的程式仍然可以適用於較低版本的機器，只有在程式安裝到 Android 2.2 版之後的系統上，系統才會自動將這個程式安裝到 SD 卡中。

安裝到SD卡中時程式會預作一次加密，讓只有安裝本程式的機器能存取這個程式，避免了程式可能會輕易被盜拷的疑慮。

沒有用到 Service、桌面小工具（Widget）、或動態桌布（Live Wallpaper）功能的程式比較適合儲存到SD卡，例如遊戲或 BMI 等小程式。

因為當機器使用 USB 和電腦連線，將SD卡掛載成磁碟機時，這些儲存在SD卡中執行的程式將會被中斷。

其他提示請參考 Android&nbsp;[官方文件](http://developer.android.com/guide/appendix/install-location.html)。