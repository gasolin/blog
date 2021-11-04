---
title: TurboGears vs Rails
tags:
  - python
  - TurboGears
date: 2006-11-12 17:56:22
---

明天公司補放國父誕辰紀念日, 所以有空到 Google 翻翻最近有沒什麼有趣的文章. 我找到了一篇 [TurboGears vs Rails](http://wildmanshore.blogspot.com/2006/01/turbogears-vs-rails.html). 文章名稱夠聳動, 雖然這篇文章有點舊了 (用的是 0.9 的預覽版 TurboGears, 或稱為未進化型態版本 XD), 不過裡面對 TurboGears 和 Rails 的特性確實抓得頗準:

> The Pythonic way is "explicit over implicit". Everything is out for show: you know what modules are imported, you know what methods are exposed, you know what columns are defined and so on. It may take more keystrokes but the extra code let's you know what is happening when things go wrong.
> python 語言的風格是 '[直率的比含糊的好](http://inet6.blogspot.com/2006/10/python.html)'. 所以所有的過程都可以被檢視: 妳曉得如何導入使用的模組, 函式怎麼對應到網址上, 妳也曉得資料物件如何定義等等. 妳可能需要多打一些字(註: 事實上不多), 但是這些額外的程式碼能讓妳在發生錯誤時更容易地知道自己的程式到底發生了什麼事.

> The the Rails way is the opposite: take the burden off the developer, don't bother them with the petty details that get in the way and add to the line noise.
> Rails 的寫作方式則相反: 把讓開發者困擾的因子都去除掉, 不要在開發中用細節來干擾程式碼.

事實上去年 5 月底時, 我在看過 OnLamp 網站上的 Ruby On Rails 教學後, 相當驚訝現在網頁開發的進步 (之前有一年沒寫動態網頁了). 所以我也趁等待完成論文前的時間歔空寫了篇 Ruby On Rails 教學. 不過在 7 , 8月 Django, TurboGears 這些 Python 框架相繼出現後, 我發現除了可以使用熟悉的 Python 語言風格來寫程式之外, 以後也可以透過網頁介面來使用大量的 Python 模組實在非常吸引我. 而當 TurboGears 框架出現 ToolBox 這神奇的工具箱後, 我開始漸漸投入了 TurboGears 開發的行列.

> 能展現自我特點的是創意而不是程式碼
在我的觀念裡, 能展現自我特點的是創意而不是程式碼 (也許因為我不是個天才程式設計師吧XD). Rails 也是個相當吸引人的框架 (差不多靠一己之力拉拔 Ruby 語言 XD). 但是 python 的 "[應該會有一個--最適當的一個的方式來實現](http://inet6.blogspot.com/2006/10/python.html)" 哲學比較接近我的想法. 在閱讀其他人的 TurboGears 專案時只要不用到太進階的 Python 語言功能, 基本上都非常易於閱讀與修改. (例如目前 TurboGears 最進階的教學文件: SQLalchemy 版的 SimpleBlog, 花一些時間就可以改寫成 TurboEntity 版 SimpleBlog [之一](http://inet6.blogspot.com/2006/10/turboentity-simpleblog.html), [之二](http://inet6.blogspot.com/2006/11/turboentity-simpleblog.html))