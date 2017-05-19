---
title: 支援不同解析度的 Android Market
tags:
  - Android
date: 2009-11-18 01:34:36
---

本來市面上 Android 相關機種一律都是 480*320 解析度，
在 [Android 1.6](http://developer.android.com/intl/en/sdk/android-1.6.html) 發佈後，也正式發售支援了其他使用不同解析度的機種，例如 QVGA(320*240) 或 WVGA(800*480)。

當然在不同的解析度下，畫面顯示上多少有些不同。
為了避免使用者裝到不適合解析度的程式而引發使用上的混亂，Android 1.6 在 AndroidManifest 清單中引入了「supports-screens」宣告。

一般來說要支援各種解析度，可以在編譯前先將編譯 Target 選為 1.6（專案名>右鍵>Properties>Android>Android 1.6），並在 AndroidManifest 清單中加入如下設定：

```
 [supports-screens 
     android:largeScreens="true" 
     android:normalScreens="true" 
     android:smallScreens="true" 
     android:anyDensity="false"/]
```

「normalScreens」代表的是一般解析度（如 G1, Hero），「smallScreens」代表的是較低解析度（如 Tatoo）。

現在將程式發佈到 Android Market 時若沒做以上設定，你寫的程式將不會顯示在 QVGA/WVGA 機器的 Market 中。</supports-screens><div>
</div><div>那麼其他使用奇怪解析度的設備哩？（例如最近發表的某台 WQVGA 機器...）反正上面也沒有 Android Market, 就留給打算支援這些設備的開發者多傷一份腦筋啦.</div><div>
</div><div>
</div><div>PS: 將 Target 設為 1.6 跟在 AndroidManifest 清單中設定 minSdkVersion 最低相容版本並不衝突，只要 minSdkVersion 維持不變，低於 1.6 版的機器還是可以使用你的程式。</div>

update: 事實上「smallScreens」代表的是小螢幕，「normalScreens」是一般螢幕，「largeScreens」當然是大螢幕。一般三者的分界點大概在3吋跟4吋。所以 Tattoo (2.8") 被歸在「smallScreens」範疇。
