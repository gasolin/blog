---
title: 使用手機上傳 360 圖片到 Facebook
tags:
  - 360image
date: 2016-07-04 05:56:24
---

前幾天 Facebook 開放上傳 360 影片，經過幾番嘗試後，終於找出直接在手機上直接上傳 360 照片的方法。

剛嘗試的人建議使用 [Google Street View](https://github.com/gasolin/webvrdemo/blob/gh-pages/Lab360Image.md) 或 [Cardboard Camera](https://github.com/gasolin/webvrdemo/blob/gh-pages/LabPanorama.md) 試試效果，這兩個 App 可以在 Android 或 iOS 應用商店中找到。

透過這兩個 App 拍攝的 360影片，直接上傳到 Facebook 應該是沒問題的。

但現在有更方便的 360 影片拍攝工具如 Ricoh Theta S 或是 LG 360 CAM，這類設備搭載兩個鏡頭，拍攝時只要按一下拍攝鈕，就輕鬆完成全景照片。

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-UaagH6k-OzM/V18XxoSk_vI/AAAAAAAAEMg/sgslPBDmGwoeNVIzplFoKpunRa-sWDrTwCLcB/s640/2016-06-13%2B10.59.07.jpg) ](https://1.bp.blogspot.com/-UaagH6k-OzM/V18XxoSk_vI/AAAAAAAAEMg/sgslPBDmGwoeNVIzplFoKpunRa-sWDrTwCLcB/s1600/2016-06-13%2B10.59.07.jpg)</div><div class="separator" style="clear: both; text-align: center;">使用全景相機拍攝 360 照片或影片</div>
有的設備如 LG 360 CAM，目前 Facebook 還無法辨認（更新：現直接上傳 360 照片已經可以正確辨認），所以只能用一些繞過的方法。朋友傳來[這篇教學文章](http://360rumors.blogspot.co.uk/2016/06/facebook-posts-detailed-instructions.html)。根據這篇文章的說明，我做了些嘗試與改進，並最終成功透過手機上傳360照片。

1\. 首先準備一張 360 照片 （我用的是 LG 360 CAM）

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-vYbbKwCqZHU/V15VyI-P9ZI/AAAAAAAAELs/De5JfreicgM4iprWmEeRD74eIiqLdAzxwCLcB/s640/2016-06-12%2B06.42.34.png)](https://3.bp.blogspot.com/-vYbbKwCqZHU/V15VyI-P9ZI/AAAAAAAAELs/De5JfreicgM4iprWmEeRD74eIiqLdAzxwCLcB/s1600/2016-06-12%2B06.42.34.png)</div>

2\. 接著從應用商店取得可以編輯照片 Exif 資訊的應用。我選的是免費的 Photo Exif editor。
3\. 從照片 (Gallery, Photo) App 預覽到想要修改的 360 照片，選擇分享（Share）到 Photo Exif editor。
&nbsp;4\. 照著修改 以下欄位的值：

Camera maker: **Ricoh **（首字母大寫）**
**
Camera model: **RICOH THETA S**** **（全大寫）

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-Oj_TnMi4gOo/V15V-GIQGqI/AAAAAAAAEL8/Y8mpHvEJ6ekCWxQpQoTaMo13_mO0uiyhwCLcB/s640/2016-06-12%2B06.42.55.png)](https://1.bp.blogspot.com/-Oj_TnMi4gOo/V15V-GIQGqI/AAAAAAAAEL8/Y8mpHvEJ6ekCWxQpQoTaMo13_mO0uiyhwCLcB/s1600/2016-06-12%2B06.42.55.png)</div>
5\. 最後再透過相片軟體選擇分享到 Facebook 即可。如果成功，可以看到相片下角出現球狀 360 影片圖示。

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-QlivFrXBAH8/V15cHOpDbjI/AAAAAAAAEMQ/ArxXPl95BKUXm1koRXcVd9u8TJkoGr09gCLcB/s640/2016-06-13%2B07.08.05.png)](https://3.bp.blogspot.com/-QlivFrXBAH8/V15cHOpDbjI/AAAAAAAAEMQ/ArxXPl95BKUXm1koRXcVd9u8TJkoGr09gCLcB/s1600/2016-06-13%2B07.08.05.png)</div>

我的觀察啦，360 相機使用上相當方便，按一下拍攝鈕啟動相機，再按一下就拍張照。長按就開始拍攝影片。

拍照時只要把相機往上平舉，就整個環境都拍到了（一個小技巧：拍攝時將相機舉在頭上就不會拍到自己），不需要什麼特別的攝影技巧。這對只是想分享當下體驗的我相當適合。這種特性也很適合團體拍照。這樣方便的新品，加上 Facebook 這樣容易分享相片的環境，相信很快 360 相機就會流行起來。
&nbsp; 
目前拍 360 相片時，附近的人其實並沒有意識到我在幹什麼，但其實附近的人也是全部入鏡的。使用 360 相機時要如何兼顧隱私的保護也會是一個議題。