---
title: Android 4.0發佈
tags:
  - Android
date: 2011-10-19 09:38:33
---

<div class="separator" style="clear: both; text-align: center;">[![](http://developer.android.com/sdk/images/4.0/face-unlock.png)](http://developer.android.com/sdk/images/4.0/face-unlock.png)</div>
Android 4.0 (IceCream Sandwich)如期推出了  這次的改進比較多是在軟體層面，套用Apple的OSX Lion廣告詞：
> <pre>ICS擁有超過250種全新功能，
> 包括臉部解鎖、連續語音辨識、全景照片與影像特效、5倍瀏覽器速度、流量監測...
> ICS把Android推向下一個紀元</pre>Android 4.0比較重要的新功能已列在 [http://developer.android.com/sdk/android-4.0-highlights.html](http://developer.android.com/sdk/android-4.0-highlights.html)

<iframe allowfullscreen="" frameborder="0" height="360" src="http://www.youtube.com/embed/-F_ke3rxopc" width="640"></iframe>

對一般App開發者來說，OS部分的改進如Holo Theme系統佈景主題、Fragment API等都是3.x已經有的，現在套用到手機上。新的連續語音辨識、影像處理API等軟體功能，和Android Beam、Wi-Fi Direct等通訊技術可以玩出一些新花樣。

開發工具部分則是開始支援WebCam（Windows/Linux only）、新的初次使用設定精靈（Welcome Wizard）、比較好用的Layout編輯器、還有整合了[Android Asset Studio](http://android-ui-utils.googlecode.com/hg/asset-studio/dist/index.html)製作圖示（Icon）的功能。

整體來看這次推出的功能雖然很多，但在系統整體架構上並沒有多做改變，開發工具也做了些改進，讓開發者更容易使用。比較糟糕的一點是模擬器延續了Android 3.x版的不良傳統，為了完全模擬ARM的指令，而使得模擬器執行相當龜速。要測試Android 3.x版以上的系統時，還是得買實機來跑才比較準。

順便公告一下: 因為基本的東西都沒有改變，大家可以放心使用「[Google! Android 手機應用程式設計入門](http://www.books.com.tw/exep/assp.php/gasolin/exep/prod/booksfile.php?item=0010513881)」來學習開發相容各種Android版本的應用程式，本書不會因Android 4.0再改版。