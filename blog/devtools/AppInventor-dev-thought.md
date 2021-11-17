---
title: AppInventor+愛無赦?（台客舞App開發心得）
tags:
  - GTUG
  - Android
date: 2011-08-21 14:12:17
---

[AppInventor](http://appinventor.googlelabs.com/)&nbsp;是GoogleLab中一個有趣的工具，可以讓一般人簡單地透過像堆積木的方式寫出一個Android App。（剛好[Make雜誌也出了AppInventor報導](http://www.makezine.com.tw/2011/08/16/%E6%B7%BA%E8%AB%87%E6%96%87%E5%AD%97%E5%BC%8F%E8%88%87%E5%9C%96%E5%BD%A2%E5%8C%96%E7%A8%8B%E5%BC%8F%E9%96%8B%E7%99%BC%E4%BB%8B%E9%9D%A2%E4%B8%8A%E7%AF%87-%E4%BB%A5google-app-inventor%E7%82%BA/?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=%25e6%25b7%25ba%25e8%25ab%2587%25e6%2596%2587%25e5%25ad%2597%25e5%25bc%258f%25e8%2588%2587%25e5%259c%2596%25e5%25bd%25a2%25e5%258c%2596%25e7%25a8%258b%25e5%25bc%258f%25e9%2596%258b%25e7%2599%25bc%25e4%25bb%258b%25e9%259d%25a2%25e4%25b8%258a%25e7%25af%2587-%25e4%25bb%25a5google-app-inventor%25e7%2582%25ba)）  

這週三Taipei GTUG舉辦了[AppInventor&nbsp;Bootcamp](http://www.taipei-gtug.org/meetings/meeting2011/20110817)， 由我先簡單介紹如何安裝與使用AppInventor後， 再將時間交給大家，創作具備台灣特色，或能展現台灣特色與風格的App。  首先當然是拿大家熟悉的BMI，重現在AppInventor上  

[![](http://4.bp.blogspot.com/-bYTU-9XHLWw/TkzAIbMkfqI/AAAAAAAACEA/TgOdgqOtKYw/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25883.32.25.png)](http://4.bp.blogspot.com/-bYTU-9XHLWw/TkzAIbMkfqI/AAAAAAAACEA/TgOdgqOtKYw/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25883.32.25.png)

  接著則是介紹程式積木部分，程式積木部分做到了原BMI程式大部分的功能。 可以看到用拖拉積木的方式寫一個轉換數值程式，是蠻厚工的一件事。  （剛剛要截圖才發現這部份原始碼被覆蓋掉了Orz，等影片轉出來再把錄到的畫面嵌在這）  接著活動就進入Hacking模式。今天不少人都在問：用AppInventor寫好的App要怎麼轉換成程式碼？答案是目前沒有這樣的功能，也許年底[AppInventor&nbsp;Open Source](http://androidcommunity.com/google-app-inventor-discontinued-will-become-open-source-instead-20110809/)了之後，會有好心人寫出來吧...    昨晚Hack的成果，是「台客舞App」。  台客舞App簡介：  看過jolin的[愛無赦MV](http://www.youtube.com/watch?v=KMqfVNnDSD0)嗎？ 

<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/KMqfVNnDSD0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/T04fKsD56LU&hl=zh_TW&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>

裡面的電音舞曲和掌心燈是不是很搶眼而讓人一見難忘呢？  

[![](http://4.bp.blogspot.com/-BgbN_T0_EAQ/TkzCzakF4aI/AAAAAAAACEE/sGsWTkKf9KU/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25883.18.48.png)](http://4.bp.blogspot.com/-BgbN_T0_EAQ/TkzCzakF4aI/AAAAAAAACEE/sGsWTkKf9KU/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25883.18.48.png) 

這個AppInventor作品結合了電音舞曲播放和掌心燈的功能， 只要你擁有Android手機，就可以隨時跳一首台客舞曲～   夠台味吧XD  這個程式很簡單，主體是兩個按鈕和一個聲音檔案。  

[![](http://3.bp.blogspot.com/-ZI0dsxEj4d0/TkzEDzW9YDI/AAAAAAAACEI/n1uj_OvZDas/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25883.45.09.png)](http://3.bp.blogspot.com/-ZI0dsxEj4d0/TkzEDzW9YDI/AAAAAAAACEI/n1uj_OvZDas/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25883.45.09.png)

聲音檔案的部份，AppInventor目前只接受小於2MB的檔案，因此先用[Audacity](http://audacity.sourceforge.net/)工具裁減了一小段轉成MP3檔，然後加入這個專案中。  另外兩個按鈕，一個「播放」（Play）按鈕放在最上頭，按了之後即開始播放音樂。再按一次後就停止。  另一個按鈕則是佔用大部分的螢幕，並將底色改為和背景同樣的黑色， 在按下後會變換成白色，以模擬掌心燈的開、關狀態。 

[![](http://4.bp.blogspot.com/-yDXwCYRc2oQ/TkzLjE2hskI/AAAAAAAACEM/gZJ92vgs5EY/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25884.20.54.png)](http://4.bp.blogspot.com/-yDXwCYRc2oQ/TkzLjE2hskI/AAAAAAAACEM/gZJ92vgs5EY/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-08-18+%25E4%25B8%258B%25E5%258D%25884.20.54.png)

有興趣看現場DEMO的人，可以參加[(Coscup BoF) Appinventor Hack &amp;amp; Show](http://registrano.com/events/61c494)&nbsp;活動（希望有人願意拿著現場秀一段台客舞XD）。  程式可以到[http://showinventor.appspot.com/main/gallery](http://showinventor.appspot.com/main/gallery)下載，供大家娛樂一下。 （Android Market就算了吧）   
