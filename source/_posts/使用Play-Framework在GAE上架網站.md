---
title: 使用Play! Framework在GAE上架網站
tags:
  - GAE
  - webframework
date: 2011-07-25 02:38:29
---

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-jhvha3uwV_U/ThfaiWRMlZI/AAAAAAAAB7Q/EyIiGiHvdt0/s320/ae_gwt_java-499x386.png)](http://2.bp.blogspot.com/-jhvha3uwV_U/ThfaiWRMlZI/AAAAAAAAB7Q/EyIiGiHvdt0/s1600/ae_gwt_java-499x386.png)</div>
今年自己在網站開發方面做了很多改變。

第一件是Domain name續約並全面採用&nbsp;[gasolin.idv.tw](http://www.gasolin.idv.tw/)&nbsp;系列網址。

本如部落格網址可由&nbsp;[blog.gasolin.idv.tw](http://blog.gasolin.idv.tw/)&nbsp;連結，
Android書籍/應用相關訊息可由 [android.gasolin.idv.tw](http://android.gasolin.idv.tw/) 連結。

第二件是使用的網頁框架改變。

個人的首頁 [www.gasolin.idv.tw](http://www.gasolin.idv.tw/)&nbsp;仍然架在[Google App Engine](http://code.google.com/appengine/)上頭，
但背後使用的技術，也從Python based的&nbsp;[GAEO](http://gaeo.org/)&nbsp;，改為使用Java based的&nbsp;[Play! Framework](http://www.playframework.org/)。

使用&nbsp;[Play! Framework](http://www.playframework.org/)&nbsp;的好處是它並不像[GAEO](http://gaeo.org/)一樣完全捆綁在[Google App Engine](http://code.google.com/appengine/)上，而是隨時可以搬離GAE獨立運作。

再者[Play!](http://www.playframework.org/)的專案架構和使用方法很接近[TurboGears](http://www.turbogears.org/)、[Django](http://www.rubyonrails.org/)等現代的網頁框架，因此熟悉現代網頁框架的開發者應該能很快地上手。開發的時候可以在本地端開發，而且修改後的結果也能即時自動編譯並顯示，用起來非常接近使用動態語言開發的使用經驗。（[Play!](http://www.playframework.org/)的命令行工具是用Python寫的:)）

[Play!](http://www.playframework.org/)&nbsp;的另一個好處是有很好的模組（Module）架構。要將網站發佈在[Google App Engine](http://code.google.com/appengine/)上時，透過[GAE](http://www.playframework.org/modules/gae)模組和搭配[Siena](http://www.playframework.org/modules/siena)（提供ORM層）、[crudsiena](http://www.playframework.org/modules/crudsiena)（提供自動Admin管理頁面）模組，可以不被[Google App Engine](http://code.google.com/appengine/)的一堆限制所制約，從而得到完整的開發經驗。

[Play!](http://www.playframework.org/)&nbsp;的官方網站上有很齊全的[文件](http://www.playframework.org/documentation/)可供參考。所謂的「齊全」到了什麼地步呢？
除了簡介、教學、模組介紹之外，甚至還有[cheatsheet](http://www.playframework.org/documentation/1.2.2/cheatsheet/commandLine)&nbsp;!

要從頭開始建立一個Play網頁程式到發佈在GAE，要做以下6幾點

<span class="Apple-style-span" style="font-size: large;">1\. 建立專案</span>

$ play new &nbsp;[project name]

<span class="Apple-style-span" style="font-size: large;">2.&nbsp;安裝相關模組</span>

執行

$ play install gae-版本
$ play install siena-版本
$ play install crudsiena-版本

<span class="Apple-style-span" style="font-size: large;">3\. 修改模組依存關係</span>

進入專案目錄, 修改 conf/dependencies.yml 檔案

<div class="p1"># Application dependencies</div><div class="p2">
</div>> require<span class="s1">:</span><span class="s1">&nbsp; &nbsp; </span>- play -&gt; play [1.2.1,)
> &nbsp; &nbsp; - play -&gt; secure
> &nbsp; &nbsp; - play -&gt; siena [2.0.0,)
> &nbsp; &nbsp; - play -&gt; crudsiena [2.0.0,)
> &nbsp; &nbsp; - play -&gt; gae 1.4<div class="p4"><span class="Apple-style-span" style="font-size: large;">4\. 自動檢查模組依存關係</span></div><div class="p4">
</div><div class="p4">執行</div><div class="p4">
</div><div class="p4">$ play deps</div><div class="p4">
</div><div class="p4"><span class="Apple-style-span" style="font-size: large;">5\. 修改GAE相關設定</span></div><div class="p4">
</div><div class="p4">根據[GAE](http://www.playframework.org/modules/gae)模組提供的文件做相應的GAE發佈設定（指定要deploy的GAE代號）</div><div class="p4">
</div><div class="p4"><span class="Apple-style-span" style="font-size: large;">6\. 發佈</span></div><div class="p4">
</div><div class="p4"></div><div class="p4">執行</div><div>
</div><div>$ play gae:deploy --gae=[app engine java sdk path]</div><div>
</div><div>如此即完成整套使用[Play!](http://www.playframework.org/)&nbsp; +&nbsp;[Google App Engine](http://code.google.com/appengine/)&nbsp;的配置流程。</div><div>
</div>
Update 2011/7/20: 在Taipei GTUG活動中和大家分享了Play! on GAE的相關經驗，並公開投影片

<div id="__ss_8642014" style="width: 425px;">**[Play Framework on Google App Engine](http://www.slideshare.net/gasolin/play-framework-on-google-app-engine "Play Framework on Google App Engine")** <iframe frameborder="0" height="355" marginheight="0" marginwidth="0" scrolling="no" src="http://www.slideshare.net/slideshow/embed_code/8642014" width="425"></iframe> 
<div style="padding: 5px 0 12px;">View more [presentations](http://www.slideshare.net/) from [gasolin](http://www.slideshare.net/gasolin) </div></div>