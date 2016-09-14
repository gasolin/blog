---
title: 設定ICS模擬器顯示軟體鍵盤
tags:
  - Android
date: 2012-04-08 07:46:38
---

自從Android 3.x發佈後，Android 虛擬機器由於要完整模擬硬體指令，因此在電腦上跑得極慢，慢到去年Google舉辦的Taiwan Android Developer Lab會場上，講者拿「模擬器慢」這理由當作送平板的梗來用。

最近隨著Android SDK Tools r17的發佈，「Android SDK Manager」裡面多了一個Intel貢獻的「Intel Hardware Accelerated Execution Manager」套件，下載這個套件後，可以自動讓使用Intel CPU的機種用全速跑Android 4.x虛擬機器。安裝前後虛擬機器執行時的速度，確實有極大的差異（從不堪用變成可用）。

於是有人開始認真使用ICS（Android 4.x）虛擬機器了，一試才發現一些問題：怎麼跑BMI範例時，書上說會彈出軟體鍵盤，但我在ICS虛擬機器上跑，卻沒有彈出來？

原因是ICS虛擬機器的預設設定改變了。因為只有當系統不提供硬體鍵盤時，畫面上才會彈出軟體鍵盤。而目前版本的ICS虛擬機器的預設設定為「有硬體鍵盤」。由於系統認定你的虛擬機器已經配有硬體鍵盤可用，因此在按下對應欄位時，畫面上當然不會再彈出軟體鍵盤。

要在虛擬機器中顯示軟體鍵盤，只要在設定虛擬機器時，在「Hardware」欄位加入「Keyboard Support」，並將值設為「no」即可（代表建立的虛擬機器不含硬體鍵盤）。

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-0zcn3zX24PY/T3xIlPytIcI/AAAAAAAACU0/1lF0RJs0WbQ/s400/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-04-04+%E4%B8%8B%E5%8D%888.56.10.png)](http://4.bp.blogspot.com/-0zcn3zX24PY/T3xIlPytIcI/AAAAAAAACU0/1lF0RJs0WbQ/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-04-04+%E4%B8%8B%E5%8D%888.56.10.png)</div>
啟動後再開啟BMI範例程式，點選欄位時就會看到軟體鍵盤了。

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-qjJ3uApy2Fg/T3xIa18oGfI/AAAAAAAACUs/AR1AUMukNxY/s400/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-04-04+%E4%B8%8B%E5%8D%888.59.14.png)](http://2.bp.blogspot.com/-qjJ3uApy2Fg/T3xIa18oGfI/AAAAAAAACUs/AR1AUMukNxY/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-04-04+%E4%B8%8B%E5%8D%888.59.14.png)</div>