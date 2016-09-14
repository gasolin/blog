---
title: (Firefox) WebApp自動偵測與安裝腳本
tags:
  - FirefoxOS
date: 2013-05-13 15:53:49
---

這陣子在了解如何開發webapp，其實基本流程很簡單。
要把網頁變成webapp，最基本的動作就是[照著說明](https://marketplace.firefox.com/developers/docs/quick_start)寫個 manifest.webapp 檔案，放到網站的根目錄，然後在web server的設定加入對應的MIME type即可。用Github Page放網站的話，最後的MIME設定他們都幫我們弄好了。

使用者在電腦上透過Firefox安裝webapp後，就會多出一個對應的應用程式圖示，開啓這個WebApp時不會出現瀏覽器框，感覺就像真的應用程式。在Android上透過Firefox for Android(測試版)安裝webapp後，在桌面上則會多出一個bookmark捷徑。

<div class="separator" style="clear: both; text-align: center;"></div><div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-zrO9d3BcB30/UVebse9rcaI/AAAAAAAADDU/MSImwCKUE5o/s400/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-03-31+%E4%B8%8A%E5%8D%8810.12.43.png)](http://4.bp.blogspot.com/-zrO9d3BcB30/UVebse9rcaI/AAAAAAAADDU/MSImwCKUE5o/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2013-03-31+%E4%B8%8A%E5%8D%8810.12.43.png)</div><div style="text-align: center;">圖：在Mac桌面上打開2個webapp，不特別講也分不出來是Web還是App吧</div>

我在測試的時候，發現寫好了webapp之後，使用者連到網頁時並不會自動詢問使用者是否要安裝webapp。於是寫了以下腳本。

在Body標簽中引用以下腳本，即可自動偵測使用者是否可安裝webapp (現在只有Firefox Aurora和Firefox OS支援webapp API)

> &lt;script type="text/javascript"&gt;
> //check if app is installed
> if( navigator.mozApps != undefined ){var app_stat = navigator.mozApps.getSelf();
> app_stat.onsuccess = function() {
> &nbsp; if (app_stat.result) {
> &nbsp; &nbsp; &nbsp; &nbsp; //instsalled
> &nbsp; } else {
> &nbsp; &nbsp; &nbsp; &nbsp; // not installed
> &nbsp; &nbsp; &nbsp; &nbsp; var manifestUrl = location.href.substring(0, location.href.lastIndexOf('/'))+'/manifest.webapp';
> &nbsp; &nbsp; &nbsp; &nbsp; var app_install = navigator.mozApps.install(manifestUrl);
> &nbsp; }};
> app_stat.onerror = function() {
> &nbsp; alert('Error checking installation status: '+ this.error.message);
> };
> }
> &lt;/script&gt;&nbsp;原始碼包含在[ webapplate](https://github.com/gasolin/webapplate/blob/master/public/js/app_installer.js) 專案中。

 透過

> location.href.substring(0, location.href.lastIndexOf('/'))+'/manifest.webapp';
可以自動取得目前的IP或網址。