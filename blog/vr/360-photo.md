---
title: 360照片網頁產生器
date: 2016-11-17 20:35:14
tags:
  - aframe
  - 360photo
---

<iframe src="https://gasolin.github.io/2016-london-allhands/dubai_airport.html" height="400px" width="600px" align="center"></iframe>
From Dubai Airport (The image is dragable to change view 可以拖曳照片來改變視角喔)

之前寫過一篇[使用手機上傳 360 圖片到 Facebook](http://blog.gasolin.idv/upload-360photo-to-facebook)，但其實要分享360照片[^1]的話，我們也可以用[aframe](http://aframe.io)自己弄個網頁來分享。

將照片放在自己空間的缺點是所有工作得自己來。我用[yeoman](http://yeoman.io/)寫了個的360照片網頁產生器[generator-360-photo](https://www.npmjs.com/package/generator-360-photo)，可以用來產生如上的360照片網頁(照片與照片網頁都放在github page，透過iframe嵌入)，簡化了自己弄網頁來分享360照片的難度。

[generator-360-photo](https://www.npmjs.com/package/generator-360-photo)在產生展示360照片網頁的同時，也對照片做優化。由於嵌入到600x400空間的圖檔解析度不需要太大，原本圖檔大小5.6MB，解析度5660x2830，優化為解析度2048x1024的圖檔後，大小只剩下481KB。下載時間只需要原來的1/11。

使用前需要使用npm安裝yeoman和generator-360-photo

```sh
npm install -g yo
npm install -g generator-360-photo
```

generator-360-photo用到[sharp](https://www.npmjs.com/package/sharp)來最佳化照片，如果在Ubuntu linux或windows bash環境下，需要使用

```
apt install build-essential
```

命令安裝必要的編譯工具。

安裝後切換到放照片的資料夾，就可以使用

```
yo 360-photo
```

命令來建立360照片網頁啦。

如果使用上有遇到什麼問題或建議，可以前往[專案網頁](https://github.com/gasolin/generator-360-photo/issues)回報。

[^1]:  [環景圖](https://zh.wikipedia.org/wiki/%E5%85%A8%E6%99%AF%E5%9B%BE)
