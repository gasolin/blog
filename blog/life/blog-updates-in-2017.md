---
title: 2017年，我的部落格改進了什麼?
tags:
  - life
  - blog
date: 2017-3-4 16:08:00
---

![Imgur](http://i.imgur.com/emcfRPZ.png)

在去年改用Hexo[^1]架部落格後，由於用Markdown寫起來更方便了，又有Mermaid[^2]語法支援可以快速畫出一些流程圖，因此多寫了幾篇。

在此期間，也陸續為這個部落格加了一些小功能。主要有
* 將Hexo預設的Markdown引擎換成markdown-it，以支援顏文字(emoji)[^9] :tada: 
* 加入類似Medium的文章預計閱讀時間 (每篇文章標題下方顯示 x min. read) :hourglass_flowing_sand:
* 支援腳注(footnote):link:，如下方的參考資料

為了折騰這些功能花了些時間，不知道這樣的投資能不能攤平到下個十年 :p

:small_orange_diamond:以下是在改進部落格的過程中發現的一些小知識:

## 將Hexo預設的Markdown引擎換成markdown-it :tada:
為了要支援 emoji，在網上找到的做法是改用`hexo-renderer-markdown-it`[^3]引擎並同時安裝`markdown-it-emoji`[^4]
最後必要的是在`_config.yml` 裡加入相應的`markdown`設定[^5]

## 加入類似Medium的文章預計閱讀時間 :hourglass_flowing_sand:

原本我裝的是 `hexo-reading-time`[^6]，整合好後一看，所有中文文章的閱讀時長都短得可以，讓我懷疑它根本沒有支援中文字數計算。後來找一找，才拿可支援中文字數計算的`hexo-wordcount`[^7]來替換掉。隨後又丟了個PR[^8]過去來調整預設的閱讀時長，最終才接近想要的效果。

## 參考資料 :notebook:

* [^1] [Hello Hexo](make/hello-world.md)
* [^2] [Mermaid, Generation of diagrams and flowcharts from text](https://knsv.github.io/mermaid/)
* [^3] [hexo-renderer-markdown-it](https://github.com/celsomiranda/hexo-renderer-markdown-it)
* [^4] [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)
* [^5] [本Blog的_config.yml](https://github.com/gasolin/blog/blob/master/_config.yml#L100)
* [^6] [hexo-reading-time](https://github.com/ierhyna/hexo-reading-time/)
* [^7] [hexo-wordcount](https://github.com/willin/hexo-wordcount)
* [^8] [Patch for hexo-wordcount](https://github.com/willin/hexo-wordcount/issues/3)
* [^9] [Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)
