---
title: 在 Android 程式中切換介面語系
tags:
  - Android
date: 2009-02-05 02:24:19
---

在 Android 1.5 版發佈之後，我們就可以用[官方文件中教的方法](http://code.google.com/android/devel/resources-i18n.html)來定義不同語系的資源文件，並根據語言設定，在使用者螢幕上顯示出對應的語言。在此之前，我們可以在 onCreate 中加入下面的程式片段，來測試不同語系的介面：

> Resources res = getResources();
>    Configuration conf = res.getConfiguration();
>    conf.locale = <span style="font-weight: bold;">Locale.TRADITIONAL_CHINESE</span>;
>    DisplayMetrics dm = res.getDisplayMetrics();
>    res.updateConfiguration(conf, dm);              
這段程式碼還可以搭配 Preference 設定，讓使用者在程式中自己選擇想要的語系。

update: 要針對不同語系做處理時，可以直接判斷

> if (conf.locale == Locale.TRADITIONAL_CHINESE)