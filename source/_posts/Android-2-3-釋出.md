---
title: Android 2.3 釋出
tags:
  - Android
date: 2010-12-13 01:39:19
---

<object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/Jx3pdWBlZ34?fs=1&amp;hl=zh_TW"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/Jx3pdWBlZ34?fs=1&amp;hl=zh_TW" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object>

上週 Google 釋出了 Android 2.3 版 SDK 與開發工具，2.3版新增了SIP協定以支援網路語音通訊;支援更多種感測器(sensor)，並支援了"xlarge"(7吋+)大小的螢幕，讓 Android 系統適用於更多種類的設備。

開發工具的部分也做了許多更新，在 AVD Manager 的畫面裡，各種函式庫又區分地更細了，而且第一次加入除了 Google 之外的 Third Party API (Samsung Galaxy)。對用的到的開發者來說這是一個進步，也顯示了Android OS確實不只是Google一家在玩而已，而是背後有[OHA](http://www.openhandsetalliance.com/)聯盟廠商的支援。從工程師的角度來看這個安裝工具也越來越正規化（與版本不直接相關的功能都可以拆成不同安裝包）了。但對新手來說卻是越來越不清楚第一次安裝時應該選些什麼來裝。
相信如果 ADT 的開發哲學沒有改變的話，這個安裝開發工具過程變得越來越複雜的趨勢會一直持續下去。

大部分開發工具的修改對使用Eclipse+ADT的開發者來講沒什麼明顯差別，影響比較大的卻是使用命令行來編譯程式的開發者。原本在 tools 資料夾下的命令都轉到 platform-tools 資料夾下，而且編譯 release 版本時預設會使用 [proguard](http://proguard.sourceforge.net/) 來預做程式碼混淆的動作，省下開發者不少功夫。對原本就在使用命令行工具來編譯程式的開發者來說，需要一些修改才能順利編譯。