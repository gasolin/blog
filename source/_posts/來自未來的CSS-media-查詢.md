---
title: 來自未來的CSS - media 查詢
tags:
  - mobile
  - FirefoxOS
date: 2014-05-05 22:45:34
---

注意本篇提到的技巧僅適合用在特定平台的Webapp中，透過預處理器來針對特定使用平台做最佳化。但是在撰寫時仍然可以是完全跨平台的。

接續上一篇，我們繼續來重新發現一些對於有助於撰寫結構化CSS的一些CSS標準語法。
[
](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) 
[Media Query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) 是撰寫 Responsive design web 響應式網頁的重要元素之一。透過諸如

<pre><span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="o">:</span> <span class="nt">768px</span><span class="o">)</span> <span class="p">{</span>
  ...
<span class="p">}</span></pre>
這樣的語法， 瀏覽器可以根據條件，刪選並套用特定的規則來顯示。這邊需要注意的是桌面瀏覽器與移動設備瀏覽器/webapp的不同之處：在移動設備上看webapp時，除了基本Orientation之外，並不太需要調整螢幕大小。但是瀏覽器並不知道這之間的不同。瀏覽器看到@media 標簽時的運作模式，並不像一般條件式程式一般，若條件不符合時就不執行，而是一律讀進來並預先解析進 rendering tree。

在最近針對Gaia的一些load time performance measuring中，我們發現在Settings App中，每加入一行 @media 語句就會增加 100ms 左右的啟動延遲，很可能的原因就是每次瀏覽器看到@media標簽時就需要跑一次預先解析過程。因此在瀏覽器引擎本身有提供更好的方案之前，我們勢必得尋找中短期的解決方法來克服遇到的問題。

在 [provecss ](https://github.com/gasolin/provecss)中我們嘗試提供了幾種預處理 media query 的方法。一種是搭配「Import」語法提供 filter，根據檔案名稱在 Import inlining 時將不符合條件的檔案拿掉。

例如上一篇中使用到的範例

> @import url("app_mobile.css");
> @import url("app_tablet.css");

我們傳入 import_filter = ["mobile"] ，則 Import Inlining 結果將只傳回「app_mobile.css」檔案中的內容：

> <pre><span class="nt">headers</span> <span class="p">{</span>
>   <span class="k">background-color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> <span class="p">}</span></pre>
「app_tablet.css」檔案中的內容就被濾掉了。這種方式可以部分解決問題，但使用上的彈性並不是很好。 

另一個方式是使用標準CSS語法預處理器（Pre-processor）來查詢 CSS 檔案中的內容，只將符合條件的@media 查詢結果留下。

&nbsp;我們傳入 `{ width: '240px', height: '320px' }，則`
<pre><span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="o">:</span> <span class="nt">768px</span><span class="o">)</span>`並不符合查詢條件，所以輸出的結果也會是` </pre>
> <pre><span class="nt">headers</span> <span class="p">{</span>
>   <span class="k">background-color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> <span class="p">}</span></pre>這個方法能應對更複雜的情境。我們還能進一步 傳入`「media_extract」參數，`將輸出的 @media 標簽去除。

> <pre><span class="nt">headers</span> <span class="p">{</span>
>   <span class="k">background-color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> }
> // was-@media condition
> <span class="nt">headers</span> <span class="p">{</span>
>   <span class="k">background-color</span><span class="o">:</span> red<span class="p">;</span>
> <span class="p">}</span></pre>於是原本@media標簽中的樣式將覆寫過原來的樣式，在特定機型中達成一樣的顯示效果。（目前主要目標是拿來用在Gaia內建App的編譯上）

<pre>如何安裝[provecss](https://github.com/gasolin/provecss)</pre>> npm install -g provecss
使用命令行操作
> provecss imprt.css imprt.out.css --import
加入「--import」參數即可啟用 import inlining 功能。

此外 [provecss](https://github.com/gasolin/provecss) 還可以作為 node 函式庫或是 Grunt plugin 呼叫，更詳細的使用說明請參考  [provecss](https://github.com/gasolin/provecss) 的 README。