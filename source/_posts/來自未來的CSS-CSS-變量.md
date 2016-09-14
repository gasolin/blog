---
title: 來自未來的CSS - CSS 變量
tags:
  - mobile
  - FirefoxOS
date: 2014-05-05 14:55:47
---

[&nbsp;CSS變量(CSS Variable)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)是我最近才注意到的新玩意。它要解決的問題其實跟已經行之有年的LESS或SASS相似，即讓 CSS 能用上變量（變數）。

語法像是這樣
> :root {
> &nbsp;<span class="o"> --</span><span class="n">main</span><span class="o">-</span><span class="k">color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> }
> 
> <pre><span class="nt">body</span> <span class="p">{</span>
>   <span class="k">color</span><span class="o">:</span> <span class="n">var</span><span class="p">(</span><span class="o">--</span><span class="n">main</span><span class="o">-</span><span class="k">color</span><span class="p">);</span>
> <span class="p">}</span></pre><pre><span class="p">&nbsp;</span></pre>在一個 CSS 根元素中以「--」開頭定義CSS變量，在一般的CSS 樣式中使用「var(--)」來使用變量。

就如範例所示，只要改變一個變量的值，就可以改變整份CSS的參數。例如將「<span class="o">--</span><span class="n">main</span><span class="o">-</span><span class="k">color</span><span class="o"></span>」變量的值改為「red」，則整個Body的color就會變成紅色。

這參考標準草案有多新？在目前所有的瀏覽器中，只有剛發佈的[Firefox 29](http://moztw.org/firefox/)才有正式支援。

...對於暫時只有在特定瀏覽器上能運作的新功能，一般網頁開發者都是抱著敬謝不敏的態度。就算不提瀏覽器跨平台的支援不足，「CSS變量」一聽起來，跟原本的靜態CSS比起來，感覺就會有效能上的疑慮。

但是前陣子發現了 [myth](https://github.com/segmentio/myth) 和 [rework-vars](https://github.com/visionmedia/rework-vars)工具，這些工具的作用是對使用標準/新 CSS 語法的 CSS 檔案預處理（pre-processing），將新的CSS變量語法轉換成向前相容的靜態語法。透過這樣的方式，開發者在開發時可以使用最新的CSS語法來撰寫更加結構化的CSS，而不需要使用額外的函式庫。同時在部署時可以透過標準CSS語法預處理器（Pre-processor）來將有瀏覽器相容/效能疑慮的 CSS 轉換成「現實版」的 CSS 語法，好讓現在的所有瀏覽器能識別來自未來的 CSS。

經過預處理後，CSS樣式表變成如下
> <pre><span class="nt">body</span> <span class="p">{</span>
>   <span class="k">color</span><span class="o">:</span> <span class="nb">orange</span><span class="p">;</span>
> <span class="p">}</span></pre><pre><span class="p">可以看見變量宣告與賦值的部分都直接被整合成靜態CSS了。</span></pre><pre><span class="p">
</span></pre>在開發 Gaia/webapp 的過程中，我們正遇到了類似的狀況：對於在 FIrefoxOS 平台上執行的 webapp 而言，1.4 版（對應Firefox 28）和以前的 FirefoxOS 版本也無法使用 CSS 變量，但是在未來的版本上卻肯定應該試試這些新網頁技術。對於一般的webapp開發者而言亦然。

於是我建立了 [provecss](https://github.com/gasolin/provecss) 專案，[provecss](https://github.com/gasolin/provecss) 專案吸收了  [myth](https://github.com/segmentio/myth) 的特性，但為 gaia 和 webapp 做了更多的調整。就 CSS 變量這特性而言，與  [myth](https://github.com/segmentio/myth) 不同的地方是 [provecss](https://github.com/gasolin/provecss) 預設並不處理 CSS 變量。[provecss](https://github.com/gasolin/provecss) 其他的功能，將在接下來的文章中進一步做說明。

如何安裝provecss

> npm install -g provecss
使用命令行操作

> provecss vars.css vars.out.css --vars
加入「--vars」參數即可啟用 CSS 變量取代功能。

此外 [provecss](https://github.com/gasolin/provecss) 還可以作為 node 函式庫或是 Grunt plugin 呼叫，更詳細的使用說明請參考  [provecss](https://github.com/gasolin/provecss) 的 README。