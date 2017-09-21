---
title: Devtools的近期進展和新功能
tags:
  - web
  - devtools
---

p1
大家好我是gasolin, 我和Ricky是Mozilla的前端工程師。今天我們一起為大家介紹Firefox開發者工具, 也就是Devtools的近期進展和新功能。

p2
我們在這張gif上可以看到在Firefox 57新版的介面上如何開啟Firefox Developer Tool，可以看到開啟後的各種工具分頁Panel(分頁)。

Ｄevtools簡單來說，就是各式各樣網頁開發者工具的集合。這些工具以一個個分頁（Panel）的形式組織在開發者工具區域中，我們稱這個區域為`Toolbox`，也就是`工具箱`。

今天的講題中，我們可以看到Devtools如何持續改進，並提供各種新的工具，讓開發網頁的過程，變得更有效率。

今天的演講大致分為四個部分，
第一部分將介紹devtools架構的大幅改進。
那我們在第二部分，會介紹visual refresh, 和 web 開發者較熟悉的inspector, web console, perfiler等工具的新功能. 
第三部分Ricky會接著介紹 debugger, network monitor, 還有其他的工具，並會demo很酷的launchpad 
最後呢，我們會介紹devtools未來的規劃。

p3
首先，我先和大家介紹Devtools架構的大幅改進。
這是過去一年中所有Devtools開發者共同努力的成果。

p4

Devtools 的前身叫做 Firebug。在2006年時Firefox 的創始者之一Joe Hewitt寫了Firebug這個Firefox 的網頁開發工具addon。
使用者可以利用它除錯、編輯、刪改任何網站的CSS、HTML、DOM與JavaScript。也可以透過addon再次擴展它的功能。可以說，現在各家瀏覽器的網頁開發者工具都有參考Firebug功能。
(http://www.drdobbs.com/tools/ajax-debugging-with-firebug/196802787)

因為原有的addon架構無法支援FIrefox新的e10s，也就是multiple process架構，因此在去年，Firebug開發團隊決定將Firebug直接整合進Devtools中。

(Modern web sites are a product of several distinct technologies, and web developers must be proficient in all of them—HTML, CSS, JavaScript, and the DOM, among others)

[Firebug](https://hacks.mozilla.org/2016/12/firebug-lives-on-in-firefox-devtools/)

(The reason for this huge change is Electrolysis multiple process architecture)

p5
（過去的Web相關技術遠遠沒有今天成熟，Mozilla發明了一些特有的技術來製作瀏覽器的介面與呼叫特殊的API來和作業系統互動。）

Devtools繼承Firebug的開發目標，也就是協助網頁開發者更有效率的製作網站。

同時作為網頁開發者工具，我們希望開發者工具工具本身，也能用和網頁開發者使用的排版與框架來撰寫。

於是今天，大家可以看到我們的成果。我們已經在使用HTML和Web Standard API來製作Devtools開發者工具！

(a lot easier for the community to understand and contribute, https://mzl.la/2lZO3Nt
https://addons.mozilla.org/en-US/firefox/collections/mozilla/framework-devtools)

p6

使用HTML與Web Standard API只是第一步。我們進一步評估，選用了React和Redux作為前端UI介面與狀態管理框架。經過react改寫後，我們有了可在不同工具間中重用的元件庫。透過redux，每個工具也都有了清晰的App狀態管理機制。

(We have no plans to switch from React")

p7

我們將許多Devtools核心的專案放到Github上以方便開發者。

我們將可以重用的元件，放到 Devtools-Core 專案中，將可以獨立運作的Debugger，Profiler專案也放到Github上。

p8

如果想開發自己所需的的開發者工具。現在也可以使用Web Extension API來製作新的開發者工具面板。
panel中也可以重用`Devtools-Core`中提供的介面元件，更快地打造自己的開發者工具。

p9

以上是Devtools架構改進的部分。
接下來，將先和大家介紹使用者介面的改進。

p10

我們可以看到 Firefox 57上的 Devtools 分頁變得更美觀了。當然這些都已包成React component，喜歡還可以拿去用。

p11

我們更新了light theme，可以感覺到配色看起來變得更舒服

p12

我們更新了dark theme，也可以發現配色的對比更加強烈

p13

對於新配色的選擇，我們的UX團隊有做過可用性Assessibility測試。即使是辨色有障礙的人，也可以更容易地分辨不同色塊的差異。

(colors with accessible contrast in concern https://blog.nightly.mozilla.org/2017/09/11/developer-tools-visual-refresh-coming-to-nightly/)

p14

介紹完使用者介面的改進，接下來我將介紹Inspector 工具的改進。

p15

Inspector 工具是最常被使用的開發者工具。透過Inspector，可以查看或修改HTML。選到任一個Element時，可以查看並修改這個Element目前所有套用的Style。

p16

Inspector 透過refactor，把原本使用的XUL與addon SDK替換為HTML和web API。並使用React + Redux來組織程式的內部架構。

p17

在整理所有devtools新增功能的時候，我最先注意到的就是"Find Useless Rules"這個超實用的功能。

過去在Inspector裡只會在不合法的樣式旁顯示警告標誌，現在我們也會在「合法，但無用」的樣式旁也顯示警告標誌。
比如在grid或flex layout中使用float屬性的話沒有作用，Inspector就會在float屬性旁顯示警告標誌。

(we show invalid style before. Now we also show when they are valid but actually have no effect on the element, like setting a width on an inline element for instance. There are many such cases, like float on a flex item, or left on a static element have no effect.)

p18

Inspector的Box Model會列出所有影響的這個元件位置，大小，或形狀的屬性。透過新的box model介面，可以更容易地查看並調整上下左右position參數，快速地將版面調整到理想狀態。

(added a Box Model Properties component that lists properties that affect the position, size and geometry of the selected element. In addition, you’ll be able to see and edit the top/left/bottom/right position and height/width properties
you’ll also be able to see the offset parent for any positioned element, which is useful for quickly finding nested elements.)

p19

Firefox Devtools 也是最先支援 Grid Layout 的開發者工具。我們可以看到，在Rules side panel中的任何修改，都會直接反映到頁面上。

p20

在這頁中，我們看到Layout Side panel列出了頁面上所有的Grid Layout。右側則可以選擇要顯示輔助線號碼，區塊名稱，或是要不要延長Grid格線以便排版。
(https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/
https://www.youtube.com/watch?v=EinJPX86XCE
Can customize the information displayed on the overlay)

p21

不僅如此，在畫面上也可以見到，開發者也可以在 Layout Side panel中快速的查看對應的網格。

我們可以透過這些選項更好地查看頁面上的Grid Layout。

p22

那麼Inspector的新功能介紹到這邊。接下來繼續介紹Ｗeb Console。

p23

Web Console應該是Javascript開發者最常用的網頁工具吧。除了查看頁面上的Javascript錯誤，印log外，Web Console可以即時執行javascript，或是存取頁面上的 Ｇlobal Object。

p24

去年Web Console也經過改寫。使用React + Redux來組織程式的內部架構。

p25

我們在console中即時執行javascript結果，不管是哪種類型的變數，無論是boolean, array, object 都會用Object logs來顯示。

p26

在rewrite web console的過程中，我們也將Object logs包裝起來變成一個可以重用的React Component。

這個元件被大量地運用在Debugger, Network等其他panel上。

如果你想要開發自己的開發者工具或剛好需要類似的元件，reps可以在github上找到。或是透過`npm install devtools-reps`命令來安裝到你的專案中。

https://github.com/devtools-html/devtools-core/tree/master/packages/devtools-reps#readme 

p27

近期也透過tree和reps元件，支援了console group功能。
https://developer.mozilla.org/en-US/docs/Web/API/Console/group

p28

現在透過web console實驗XMLHTTPRequest 或 fetch 時，也可以透過HTTP inspector來即時查看http request的內容。整套HTTP inspector元件是來自Network Monitor，只經過一點點修改就能完整套用。因此在 web console 中可以直接看到與在network panel中一樣的資訊，非常方便。

p29

最後我想介紹的是 Perf.html 這套工具

p30

要提升網頁的效能是相當考驗技術的。
透過profiling，也就是量測的結果，我們可以更直觀地找出網頁效能的瓶頸並做出針對性地改善。

perf.html就是這樣的量測工具

p31

去年perf.html也經過改寫。使用React + Redux來組織程式的內部架構。有自己的網頁，可以脫離devtools獨立運作。程式碼host在github上。

p32

perf.html使用前需先到網站上安裝addon，在要量測前後按下start/stop，就可以得到量測的profile。

p33

perf.html最棒的點是，量測好的profile可以透過addon直接上傳到網站上，我們是在一般網站的介面上查看量測的結果。可以直接分享這個網址，或是標註出關注的時間區間後分享。和其他人一起trace效能瓶頸。

p34

未來經過photon更新後，perf.html介面風格將變得更加簡潔，配色變得更大膽，用起來更舒服

p35

以上我分享的部分告一段落。若您對Devtools感興趣，可以拍下以上網址或QRCode，到firefox-dev.tools網站查看所有 Firefox Devtools 的資訊。

接下來請Ricky繼續介紹Debugger，Network，與其他Devtools新特性。

(If you’d like to become a contributor to Firefox Dev Tools hit us up on GitHub or Slack or #devtools on irc.mozilla.com. Here you will find all the resources you need to get started. https://github.com/devtools-html/devtools-html.github.com)
