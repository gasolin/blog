---
title: 自動偵測螢幕大小和解析度
tags:
  - Android
date: 2010-04-14 01:15:18
---

在 Android 機器上，螢幕的解析度可以用「螢幕大小」和「螢幕點距」兩個參數來表示。

**一般的方法**

在 Android 1.6 版以後，可以使用&nbsp;config.screenLayout&nbsp;語句來判斷螢幕大小

```
> Configuration config = getResources().getConfiguration();
> if((config.screenLayout&amp;Configuration.SCREENLAYOUT_SIZE_MASK) == Configuration.SCREENLAYOUT_SIZE_NORMAL){
> }
>
```
UPDATE 2010/4/14: sam 說 「config = new Configuration()」只會回傳預設的Configuration, 而非當前的Configuration. 找了一下最好是使用 getResources().getConfiguration()

支援的參數與代碼如下

*   Configuration.SCREENLAYOUT_SIZE_UNDEFINED 0
*   Configuration.SCREENLAYOUT_SIZE_SMALL 1
*   Configuration.SCREENLAYOUT_SIZE_NORMAL 2
*   Configuration.SCREENLAYOUT_SIZE_LARGE 3
要檢查點距，可以使用 DisplayMetrics 語句來判斷螢幕點距

```
> DisplayMetrics dm = new DisplayMetrics();&nbsp;
> getWindowManager().getDefaultDisplay().getMetrics(dm);
> if((dm.densityDpi == dm.DENSITY_HIGH)){
> }
> 支援的參數與代碼如下
```

*   DENSITY_HIGH 240 (dpi)
*   DENSITY_MEDIUM 160
*   DENSITY_LOW 120
*   DENSITY_DEFAULT 160
**相容 1.5 以下機型**

根據[Android 版本使用圖表](http://developer.android.com/resources/dashboard/platform-versions.html)，2010年1月時 Android 1.5 市佔率還是接近 1/3，但是這1/3的機器上並無法使用上面的API。

![](http://chart.apis.google.com/chart?cht=p&amp;chs=400x250&amp;chd=t:0.3,31.0,47.6,0.7,20.4&amp;chl=Android%201.1|Android%201.5|Android%201.6|Android%202.0|Android%202.0.1&amp;chco=c4df9b,6fad0c)

在 1.5 版上，其實仍然可以用 density 語句來判斷螢幕點距比率

```
> DisplayMetrics dm = new DisplayMetrics();&nbsp;
> getWindowManager().getDefaultDisplay().getMetrics(dm);
> if((dm.density &gt;= 1.5)){
> }
>
```

density 的值 1 代表一般點距，1.5 代表高點距，0.75代表低點距。要偵測市面上所有的機器是否是高解析度機型，只要運用以上方法，就可以自動偵測出螢幕大小和點距囉。
