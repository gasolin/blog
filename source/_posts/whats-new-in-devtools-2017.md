---
title: Devtools的近期進展和新功能(2017)
tags:
  - web
  - devtools
date: 2018-01-29 17:25:46
---

2017/9/22我和Ricky Chien在台灣第一次舉辦的[Mozilla Developer Conference](https://twitter.com/hashtag/mozilladevtw2017?src=hash)中，一起為大家介紹Firefox開發者工具, 也就是Devtools的近期進展和新功能。

Devtools架構的大幅改進，是過去一年中所有Devtools貢獻者共同努力的成果。在這講題中，我們可以看到Devtools如何持續改進，並提供各種新的工具，讓開發網頁的過程變得更有效率。

![](http://g.recordit.co/RN5AVhnpGX.gif)

透過在Firefox 57新版的統一選單介面上開啟Web Developer Tool，我們可以開啟Devtools的各種工具分頁分頁(Panel)。

Devtools簡單來說，就是各式各樣網頁開發者工具的集合。這些工具以一個個分頁（Panel）的形式組織在開發者工具區域中，我們稱這個區域為`Toolbox`，也就是`工具箱`。

## Devtools 的過去

Devtools 的前身叫做 Firebug[^1]。在2006年時，Firefox 的創始者之一Joe Hewitt 寫出了Firebug這個Firefox 的網頁開發工具addon[^2]。
使用者可以利用它除錯、編輯、刪改任何網站的CSS、HTML、DOM與JavaScript。也可以透過addon再次擴展它的功能。現在各家瀏覽器的網頁開發者工具都參考了Firebug功能。

過去的Web相關技術遠遠沒有今天成熟，Mozilla發明了一些特有的技術(XUL, XBL)來製作瀏覽器的介面與呼叫特殊的API(Addon API)來和作業系統互動。因為原有的addon架構無法支援FIrefox新的多執行緒(multiple process)架構，因此2016年Firebug開發團隊決定**將Firebug直接整合進Devtools中**[^3]，原有的Firebug開發團隊也大多加入了Firefox Devtools團隊繼續貢獻，也因此我和Ricky有了和原Firebug維護者Honza直接共事的機會，在過去半年中我們合作開發Network Monitor，透過Daily Meeting同步進度，也在合作的過程中得到許多難得的經驗。

## Devtools 的現在

Devtools繼承Firebug的開發目標，也就是協助網頁開發者更有效率的製作網站。同時作為網頁開發者工具，我們希望開發者工具工具本身，也能用和網頁開發者使用的排版與框架來撰寫。

於是在Mozilla Web Summit，大家可以看到我們的成果。我們已經在使用HTML和Web Standard API來製作Devtools開發者工具！

使用HTML與Web Standard API只是第一步。我們進一步評估，選用了React和Redux作為前端UI介面與狀態管理框架。經過react改寫後，我們有了可在不同工具間中重用的元件庫。透過redux，每個工具也都有了清晰的App狀態管理機制。

我們將許多Devtools核心的專案放到Github上以方便開發者，並且將可以重用的元件，放到 [Devtools-Core](https://github.com/devtools-html/devtools-core) 專案中，將可以獨立運作的[Debugger.html](https://github.com/devtools-html/debugger.html)，[Perf.html](https://github.com/devtools-html/perf.html)專案也放到Github上，讓參與專案變得更容易。

如果想開發自己所需的的開發者工具。現在也可以使用Web Extension API來製作新的開發者工具面板。面板中也可以重用`Devtools-Core`專案提供的React介面元件，更快地打造自己的開發者工具。


## 使用者介面的改進

Firefox 57上的 Devtools 分頁變得更美觀了。當然這些都已包成React component，喜歡還可以拿去用。

對於新配色的選擇，我們的UX團隊有做過可用性(Assessibility)測試[^5]。即使是辨色有障礙的人，也可以容易地分辨不同色塊的差異。

## Inspector 工具的改進

Inspector 工具是最常被使用的開發者工具。透過Inspector，可以查看或修改HTML。選到任一個Element時，可以查看並修改這個Element目前所有套用的Style。

透過重構Inspector，我們把原本使用的XUL與addon SDK替換為HTML和web API。並使用React + Redux來組織程式的內部架構。

在整理所有devtools新增功能的時候，我最先注意到的就是"Find Useless Rules"這個超實用的功能。

過去在Inspector裡只會在不合法的樣式旁顯示警告標誌，現在我們也會在「合法，但無用」的樣式旁也顯示警告標誌。
比如在grid或flex layout中使用float屬性的話沒有作用，Inspector就會在float屬性旁顯示警告標誌。

此外，Inspector的Box Model會列出所有影響的這個元件位置，大小，或形狀的屬性。透過新的box model介面，可以更容易地查看並調整上下左右position參數，快速地將版面調整到理想狀態。

Firefox Devtools 也是最先支援 Grid Layout [^4]的開發者工具。我們可以看到，在Rules side panel中的任何修改，都會直接反映到頁面上。

在Layout Side panel上會列出了頁面上所有的Grid Layout。右側則可以選擇要顯示輔助線號碼，區塊名稱，或是要不要延長Grid格線以便排版。

<iframe width="560" height="315" src="https://www.youtube.com/embed/EinJPX86XCE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

不僅如此，在畫面上也可以見到，開發者也可以在 Layout Side panel中快速的查看對應的網格。我們可以透過這些選項更好地查看頁面上的Grid Layout。

## Ｗeb Console

Web Console應該是Javascript開發者最常用的網頁工具吧。除了查看頁面上的Javascript錯誤，印log外，Web Console可以即時執行javascript，或是存取頁面上的 Ｇlobal Object。

去年Web Console也經過改寫。使用React + Redux來組織程式的內部架構。

我們在console中可以即時執行javascript並取得執行結果。不管是哪種類型的變數，無論是boolean, array, object 都會用Object logs來顯示。

在rewrite web console的過程中，我們也將Object logs包裝起來變成一個可以重用的React Component。

這個元件被大量地運用在Debugger, Network等其他panel上。

如果你想要開發自己的開發者工具或剛好需要類似的元件，reps可以在github上找到。或是透過`npm install devtools-reps`命令來安裝到你的專案中。

https://github.com/devtools-html/devtools-core/tree/master/packages/devtools-reps#readme

Web console 近期也透過tree和reps元件，支援了console group功能 https://developer.mozilla.org/en-US/docs/Web/API/Console/group

![](http://g.recordit.co/NuO10hu9Ug.gif)

現在透過web console實驗XMLHTTPRequest 或 fetch 時，也可以透過HTTP inspector來即時查看http request的內容。整套HTTP inspector元件是來自Network Monitor，只經過一點點修改就能完整套用。因此在 web console 中可以直接看到與在network panel中一樣的資訊，非常方便。

![](http://g.recordit.co/ebfs76lmG1.gif)

## Perf.html 網頁效能監測工具

最後我想介紹的是 Perf.html 這套工具。

要提升網頁的效能是相當考驗技術的。
透過profiling，也就是量測的結果，我們可以更直觀地找出網頁效能的瓶頸並做出針對性地改善。perf.html就是這樣的量測工具。

去年perf.html也經過改寫。使用React + Redux來組織程式的內部架構。有自己的網頁，可以脫離devtools獨立運作。程式碼host在github上。

perf.html使用前需先到網站上安裝addon，在要量測前後按下start/stop，就可以得到量測的profile。

perf.html最棒的點是，量測好的profile可以透過addon直接上傳到網站上，我們是在一般網站的介面上查看量測的結果。可以直接分享這個網址，或是標註出關注的時間區間後分享。和其他人一起trace效能瓶頸。

經過photon更新後，perf.html介面風格將變得更加簡潔，配色變得更大膽，用起來更舒服。

以上是我分享的部分。若您對Devtools感興趣，可以到[firefox-dev.tools](http://firefox-dev.tools/)網站查看所有與 Firefox Devtools 相關的資訊。

## 參考資料

* [1] Firebug http://www.drdobbs.com/tools/ajax-debugging-with-firebug/196802787
* [2] https://medium.com/mozilla-tech/a-quick-history-of-firefox-devtools-620d3074b510
* [3] Firebug lives on Firefox Devtools https://hacks.mozilla.org/2016/12/firebug-lives-on-in-firefox-devtools/
* [4] Grid Layout https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/
* [5] colors with accessible contrast in concern https://blog.nightly.mozilla.org/2017/09/11/developer-tools-visual-refresh-coming-to-nightly/
* [6] Devtools Photon UI https://hacks.mozilla.org/2017/09/developer-edition-devtools-update-now-with-photon-ui/
