---
title: 來自未來的CSS - 匯入（Import）
tags:
  - mobile
  - FirefoxOS
date: 2014-05-05 21:40:44
---

接續上一篇，我們繼續來重新發現一些對於有助於撰寫結構化CSS的一些CSS標準語法。

對於比較複雜的CSS樣式，其實在CSS標準語法中，早已提供使用「[import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)」語法來結構化地組織 CSS 樣式表。

語法如下：
> @import url("app_mobile.css");
> @import url("app_tablet.css");
瀏覽器在載入時會自動去「app_mobile.css」和「app_tablet.css」檔案中載入相應的CSS樣式。

有經驗的使用者在此會提出質疑：在CSS檔案中使用 import 語法將會拖慢載入速度，千萬別用！

是的，由於瀏覽器須先完全載入這個包含「import」語句的CSS檔案，然後才能再載入「import」語句中的檔案，整個載入流程會被阻塞住，需等待所有CSS檔案載入完成後才能繼續渲染（Render）過程，所以將比直接在檔案中平鋪CSS樣式的載入時間更長。

解決方法一樣是使用標準CSS語法預處理器（Pre-processor）來將使用到「import」語法的CSS檔案「扁平化」。即將「import」語法中讀到的檔案直接嵌入到原檔案中，以達到平鋪的目的。

如果 app_mobile.css 檔案的內容為

> <pre><span class="nt">headers</span> <span class="p">{</span>
>   <span class="k">background-color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> <span class="p">}</span></pre><pre><span class="p">&nbsp;</span></pre><pre><span class="p">app_tablet.css </span>檔案的內容為</pre><pre>&nbsp;</pre>> <pre><span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="o">:</span> <span class="nt">768px</span><span class="o">)</span> <span class="p">{</span>
>   <span class="nt">headers</span> <span class="p">{</span>
>     <span class="k">background-color</span><span class="o">:</span> <span class="nb">black</span><span class="p">;</span>
>   <span class="p">}</span>
> <span class="p">}</span> </pre><pre>經過「Import Inlining」處理的檔案將變成如下</pre><pre></pre>> <pre></pre><pre><span class="nt">headers</span> <span class="p">{</span>
>   <span class="k">background-color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> <span class="p">}</span>
> 
> <span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="o">:</span> <span class="nt">768px</span><span class="o">)</span> <span class="p">{</span>
>   <span class="nt">headers</span> <span class="p">{</span>
>     <span class="k">background-color</span><span class="o">:</span> <span class="nb">black</span><span class="p">;</span>
>   <span class="p">}</span>
> <span class="p">}</span></pre><pre></pre><pre></pre><pre></pre><pre><span class="p"></span>&nbsp;</pre><pre>處理後原來共三個檔案會縮減為一個檔案，達成一樣使用效果的同時，還避免了效能上的疑慮。</pre><pre>&nbsp;</pre><pre>[在 provecss](https://github.com/gasolin/provecss) 專案，「Import Inlining」是其中一個主要與 [myth](https://github.com/segmentio/myth) 不同的特性。</pre><pre></pre><pre>如何安裝provecss</pre>> npm install -g provecss
使用命令行操作
> provecss imprt.css imprt.out.css --import
加入「--import」參數即可啟用 import inlining 功能。

此外 [provecss](https://github.com/gasolin/provecss) 還可以作為 node 函式庫或是 Grunt plugin 呼叫，更詳細的使用說明請參考  [provecss](https://github.com/gasolin/provecss) 的 README。
<pre></pre>