---
title: Android 側邊滑動選單效果 (Side Menu Drawer)
tags:
  - Android
date: 2013-01-23 02:45:42
---

[![](http://1.bp.blogspot.com/-WKOpggVsikA/UP3c27pO4OI/AAAAAAAAC9A/ODUnR5JnCuw/s400/slide_menu.png)](http://1.bp.blogspot.com/-WKOpggVsikA/UP3c27pO4OI/AAAAAAAAC9A/ODUnR5JnCuw/s1600/slide_menu.png)

幾周前在GTUG Taipei活動，聽了David Wu分享的"A Deep Dive into Android Open Source Project"演講，回來後對Slide Menu效果很感興趣，也在[gPaper改版](http://blog.gasolin.idv.tw/2013/01/app-gpaper-20.html)時使用到這個技巧。

<iframe allowfullscreen="" frameborder="0" height="315" src="http://www.youtube.com/embed/gwB8xkTckKc" width="560"></iframe>

後來我選擇使用的是 Simple Side Drawer 這個Library
[https://github.com/adamrocker/simple-side-drawer](https://github.com/adamrocker/simple-side-drawer)

Simple Side Drawer 的好處是只要把它提供的 jar檔放到專案中，就可以搭配如[ActionBarSherlock](http://actionbarsherlock.com/)等函式庫一起使用。

### 使用Simple Side Drawer 

使用時首先是下載jar檔放進專案的lib目錄中並匯入。

接著需要在onCreate中初始化: 

```
> protected void onCreate (Bundle data) {
> &nbsp;&nbsp; ....
> 
>       mSlidingMenu = new SimpleSideDrawer(this);
>       mSlidingMenu.setBehindContentView(R.layout.behind_menu);`</pre><pre>`&nbsp;`</pre><pre>`}`</pre><pre>`之後在程式裡的任何地方，都可以透過呼叫:`</pre><pre>`&nbsp;`</pre>> <pre>`<code>mSlidingMenu.toggleDrawer();`&nbsp;</code></pre><pre>`
```

來控制側邊欄的開關。下面以常見的點選App圖示來控制側邊滑動選單做例子，來介紹側邊滑動選單可以如何整合到App中。

### `透過點選App圖示控制側邊滑動選單`
    
[![](http://4.bp.blogspot.com/-AChA2Yti7js/UP8y1DSBWeI/AAAAAAAAC9g/Y0hun9R4SSQ/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-01-23+%E4%B8%8A%E5%8D%888.45.22.png)](http://4.bp.blogspot.com/-AChA2Yti7js/UP8y1DSBWeI/AAAAAAAAC9g/Y0hun9R4SSQ/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-01-23+%E4%B8%8A%E5%8D%888.45.22.png)
    
將Side Menu Drawer設定好之後，並不會有按了App圖示就開啟側邊選單的效果，需要一些程式碼來控制。
    
在程式中的onCreate或onResume裡加入控制碼，強制顯示App圖示旁的小箭頭，作為側邊滑動選單的視覺參照，讓使用者注意到App圖示點選了還有功能：

> ActionBar actionBar = this.getSupportActionBar();
> actionBar.setDisplayHomeAsUpEnabled(true);

在onOptionsItemSelected的判斷裡，加入點選App圖示時的動作：

> case android.R.id.home:
> &nbsp; &nbsp; mSlidingMenu.toggleDrawer();
> &nbsp; &nbsp; return true;

這樣點選App圖示後，就會出現開關側邊滑動選單的效果。
