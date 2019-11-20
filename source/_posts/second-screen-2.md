---
title: 我的第二螢幕(II)
tags:
  - raspberrypi
  - magicmirror
date: 2019-11-20 09:50:30
---

## 我的第二螢幕(II)

[上一篇](https://blog.gasolin.idv.tw/2019/11/13/second-screen/) 中我安裝了 `omxiv` 讓我可以從手機控制第二螢幕，在上面播放 Youtube 影片，做到類似 Chromecast 的功能。

既然有一台開著的螢幕，在不當 Chromecast 播放影片的時候，還可以拿來做什麼哩？
不如就像 Chromecast 那樣，在不播影片時就輪播照片。最好也可以顯示時間，或是其他有用的資訊。

找了一下，發現 Magic Mirror[^1] 也許可以滿足我的需求。Magic Mirror 的原本用途是拿來做智慧鏡子，可以在鏡子的各個角落顯示一些有用的資訊。Magic Mirror 是採用 Electron 封裝的桌面應用，可使用 Web 技術編寫擴充套件，也可以透過 CSS 修改顯示樣式。

在嘗試安裝並加入Google Photos擴充套件[^3]在背景輪播，使用了一段時間後，覺得還不錯可以推薦。

以下是實機畫面：

![Imgur](https://i.imgur.com/WxSrtjJl.jpg)

想要自己建立類似的第二螢幕的人，可以照著這系列 Youtube 影片[^2] 做設定，說明的相當清楚。


以下是我的 Google Photos 設定
```js
{
		  module: "MMM-GooglePhotos",
		  position: "fullscreen_below",
		  config: {
		    albumId: [], // your album id(s) from result of `auth_and_test.js`
		    refreshInterval: 1000*60,
		    scanInterval: 1000*60*10, // too many scans might cause API quota limit also.
		    sort: "random", //'time', 'reverse', 'random'
		    showWidth: "100%", // how large the photo will be shown as. (e.g;'100%' for fullscreen)
		    showHeight: "100%",
		    originalWidthPx: 1920, // original size of loaded image. (related with image quality)
		    originalHeightPx: 1024, // Bigger size gives you better quality, but can give you network burden.
		    opacity: 1, // target "opacity" property (https://www.w3schools.com/cssref/css3_pr_opacity.asp)
		    mode: "hybrid", // "cover" or "contain" (https://www.w3schools.com/cssref/css3_pr_background-size.asp)
		  }
		},
```

## 參考資料

- [^1] Magic Mirror builder https://magicmirror.builders/
- [^2] https://www.youtube.com/watch?v=OXpJylI3rGI&list=PL2vlFWOHEKMjkMZOSzIiIzN6qGb2pz2WJ
- [^3] MMM-GooglePhotos https://github.com/eouia/MMM-GooglePhotos
