---
title: 360照片網頁產生器
date: 2016-11-17 20:35:14
tags:
  - aframe
  - 360photo
---

<iframe src="https://gasolin.github.io/2016-london-allhands/dubai_airport.html" height="400px" width="600px" align="center"></iframe>
From Dubai Airport

之前寫過一篇[使用手機上傳 360 圖片到 Facebook](2016/07/03/upload-360photo-to-facebook/)，但其實要分享360照片的話，我們也可以用[aframe](http://aframe.io)自己弄個網頁來分享。

將照片放在自己空間的缺點是所有工作得自己來。我用[yeoman](http://yeoman.io/)寫了個的360照片網頁產生器[generator-360-photo](https://www.npmjs.com/package/generator-360-photo)，可以用來產生如上的360照片網頁(照片與照片網頁都放在github page，透過iframe嵌入)，簡化了自己弄網頁來分享360照片的難度。

[generator-360-photo](https://www.npmjs.com/package/generator-360-photo)在產生展示360照片網頁的同時，也對照片做優化。由於嵌入到600x400空間的圖檔解析度不需要太大，原本圖檔大小5.6MB，解析度5660x2830，優化為解析度2048x1024的圖檔後，大小只剩下481KB。下載時間只需要原來的1/11。
