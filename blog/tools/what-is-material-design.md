---
title: Material Design（物質設計）是什麼？
tags:
  - design
  - Android
  - webframework
date: 2015-01-13 15:08:13
---

[![](http://1.bp.blogspot.com/-UnhYl5RoUFE/U7bD2gwLQwI/AAAAAAAADrc/2JhNmgnaD2I/s1600/2014-06-29+22.20.19.jpg)](http://1.bp.blogspot.com/-UnhYl5RoUFE/U7bD2gwLQwI/AAAAAAAADrc/2JhNmgnaD2I/s1600/2014-06-29+22.20.19.jpg)

### 物質設計(Material Design)
「物質設計」有人翻作材質設計，但我很容易把「材質」聯想到3D遊戲的材質貼圖去，這跟 Material Design 所想要表達的意涵差了十萬八千里。而從相關的英文詞彙聯想，「Material Girl」或譯為拜金女孩或物質女孩，那種對於追求「摸的到的實際東西」有所迷戀的意涵，似乎與 「Material Design」的內在涵義更為貼近，所以我更願意稱之為「物質設計」。

註：官方後來定名為「實感設計」。 

### 物質設計（Material Design）是什麼？
簡而言之，[Material Design](http://www.google.com/design/spec/material-design/introduction.html)（物質設計）是 Google 公佈的一套同時適用於Android、iOS、Web 等各種平台，同時能適用於手機、平板、電視、電腦螢幕等不同裝置的跨平台/裝置的設計規則（仍需為各裝置設計，但鼓勵共用更多相同元素）。

讀者也可以透過觀看 Google I/O 2014 - Keynote（從14:18分開始，由 Matias Duarte 介紹 Material Design）[https://www.youtube.com/watch?v=wtLJPvx7-ys&nbsp; ](https://www.youtube.com/watch?v=wtLJPvx7-ys)可以得到對於 Material Design 最精巧的介紹。

我不是設計師，僅從開發者角度分享一些個人想法，如果還有興趣請繼續看下去。

### 從擬物化、扁平化、到物質化的 App 設計
自從 2007 年 iOS 重新發明手機之後，「擬物」化（Skeuomorphism）一直是 iOS App 的設計原則。「擬物」化的設計，讓新接觸「智慧手機」、「智慧平板」的使用者得以沿用過去實物的使用經驗，愉悅地使用新的數位化工具。

但是這幾年智慧手機/平板實在太成功，軟體App 漸漸吞噬了實體世界的各種工具，造成原本「擬物」所參照的物品已紛紛變成老古董，要年輕人畫出電話的形狀，可能畫的卻是手機的模樣...總而言之，許多擬物的參照物已經漸漸被時間淘汰了。

微軟的設計師們很早看出這個趨勢，在2010年推出的 Window Phone 中使用了極端「扁平」化（Flat）的設計風格。
經過幾年來的大膽嘗試，最後也由市占極高的 iOS/Android 定調了使用者界面「扁平」化的發展潮流。「扁平」化的設計，讓使用者得以減少在使用 App 過程中，辨識「擬物」化界面所產生的認知疲勞。

不管是「擬物」化或者「扁平」化，在每個平台的設計指南中，都明確指出設計的App要提供最佳的使用者經驗，必須要符合該平台的風格。iOS還分別為手機與平板提供不同的設計指南，並指出手機與平板是不同的設備，App設計必須要符合該設備的使用情境。

其實平台們的意思很簡單：現在開發者必需要對應每個平台，針對平台不同的風格提出相符的設計。對於同平台的不同裝置，也請分開處理。

於是現在開發者（或提出 Material Design 的 Google，別忘了他們得支援多少種平台與裝置）要面對的，是針對不同裝置、多重平台開發設計 App 時所需面對的各種問題。 

**「物質設計」（Material Design）就是 Google 整理出的新跨平台、跨裝置適用 (For every screen, and for all devices) 的設計指南**。並將首先套用到 Android 的最新版本「L」上。

### 物質化的 App 設計
「物質設計」是以「扁平」化的 App 設計為基礎，加上紙質分層的概念（即以「Google Now」為代表的卡片式設計），整理出字體、色彩、圖標等設計模式，並加入佈局（Layout）、圖像，與動畫效果（effect）等設計模式。紙質分層與「動畫效果」產生出的設計模式，就我所知，是在之前的各種介面設計中所未特別強調的。

想進一步了解Material Design上的動畫效果，可由 Google I/O 2014 - Keynote（從18.25分開始，由 Matias Duarte 介紹 Material Design Animation）[https://www.youtube.com/watch?v=wtLJPvx7-ys&nbsp; ](https://www.youtube.com/watch?v=wtLJPvx7-ys)查看。

### 物質設計（Material Design）工具
看完這些大片的色彩、轉場、動畫效果，不知道身為開發者的你臉綠不綠，反正我綠了。 這樣該如何應用於 app 開發哩? 整個開發成本還了得?

還好 Google 還提供了一些配套工具(但卻不是出現在 Android L)。(未完待續)

### 參考資料

*   官網 [http://www.google.com/design/spec/material-design/introduction.html](http://www.google.com/design/spec/material-design/introduction.html)
*   Google I/O 2014 - Keynote (14:18) Matias Duarte 介紹 Materia Design [https://www.youtube.com/watch?v=wtLJPvx7-ys ](https://www.youtube.com/watch?v=wtLJPvx7-ys)
*   中文翻譯 [http://www.ui.cn/Material/index.html](http://www.ui.cn/Material/index.html)
