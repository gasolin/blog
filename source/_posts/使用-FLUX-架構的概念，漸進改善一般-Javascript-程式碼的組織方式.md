---
title: 使用 FLUX 架構的概念，漸進改善一般 Javascript 程式碼的組織方式
tags:
  - webapp
  - FirefoxOS
date: 2014-12-03 23:43:59
---

前陣子 Facebook 推出一套名為 [FLUX](http://fluxxor.com/what-is-flux.html) 的前端程式架構，期望能幫過去沒有條理，程式多了結構就亂得像一團麵條的 Javascript 程式寫法找到一個理想的組織方法。

### FLUX 簡介
> 視圖（View）-&gt; 操作（Action）-&gt; 分配器（Dispatcher）-&gt; 資料處理器（Store）-&gt; 繪圖者（Renderer）-&gt; 視圖（View）
FLUX 的基本原理有別於常用的 MVC（Model/View/Controller）或 MVVM（Model/View/ViewModel）是在M，Ｖ，C（VM）三者之間互相傳遞或修改資料，

<div class="separator" style="clear: both; text-align: center;"></div><div class="separator" style="clear: both; text-align: center;">[![](http://fluxxor.com/images/mvc-simple.png)&nbsp;](http://fluxxor.com/images/mvc-simple.png)</div><div class="separator" style="clear: both; text-align: center;">MVC (image from [fluxxer](http://fluxxor.com/what-is-flux.html))</div>
FLUX 重新定義整個組織架構為**單向**的視圖（View）-&gt; 操作（Action）-&gt; 分配器（Dispatcher）-&gt; 資料處理器（Store）-&gt; 繪圖者（Renderer）-&gt;&nbsp; 視圖（View）的運作流程。

<div class="separator" style="clear: both; text-align: center;">[![](http://fluxxor.com/images/flux-simple.png)](http://fluxxor.com/images/flux-simple.png)</div><div style="text-align: center;">FLUX (image from [fluxxer](http://fluxxor.com/what-is-flux.html))</div>
就我的理解，FLUX 的架構可以拆分為三個重點流程：

*   跟視圖（View）有關的操作（Action），都透過事件註冊到分配器（Dispatcher）去。
*   分配器 （Dispatcher）負責將操作（Action）傳遞給需要的資料處理器（Store）。
*   資料處理器（Store）負責跟資料直接相關的操作。若資料處理器（Store）修改的結果需要反映到視圖（View）上，可以透過發送訊息通知給繪圖者（Renderer）處理。這邊講到了原本 FLUX 概念圖中沒有提到的繪圖者（Renderer）這個角色，在 Facebook 中他們是用 [ReactJS](http://facebook.github.io/react/) 處理。

瞭解其基本架構之後，我發現其實就算不用他們提供的函式庫，用 Javascript 內建的 addEventListener, handleEvent, customEvent 等方法，也可以利用前面所提的三個重點，漸進寫出符合 FLUX 精神的程式。

### 目前的 JS 組織方式

一個常見的JS檔案，一般的架構是

> var App = {&nbsp; &nbsp; init: function app_init() {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // get view
> &nbsp; &nbsp; &nbsp; this.view1 = document.getElementById('xxx1');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2 = document.getElementById('xxx2');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do stuff
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view1.addEventListener('click', function() {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do something
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; });
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2.addEventListener('keyup', function() {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do something
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; });
> &nbsp;&nbsp;&nbsp; } 
> };若我們想要將視圖（View）的操作從 init 分離開來，大部分的人會這樣做

> &nbsp;var App = {
> &nbsp; &nbsp; init: function app_init() {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // get view
> &nbsp; &nbsp; &nbsp; this.view1 = document.getElementById('xxx1');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2 = document.getElementById('xxx2');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do stuff
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view1.addEventListener('click', **this.clickView1**);
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2.addEventListener('keyup', **this.keyupView2**);
> &nbsp;&nbsp;&nbsp; },
> 
> &nbsp; &nbsp; **clickView1**: function app_clickView1() {
> &nbsp; &nbsp; &nbsp;&nbsp; // do something
> &nbsp;&nbsp;&nbsp; },
> 
> &nbsp; &nbsp; **keyupView2**: function app_keyupView2() {
> &nbsp; &nbsp; &nbsp;&nbsp; // do something
> &nbsp;&nbsp;&nbsp; }
> 
> };
如果在 clickView1 或 keyupView2 中要呼叫到 App 裡的參數或方法，那麼我們需要在addEventListener 時使用 bind(this)

> &nbsp;var App = {
> &nbsp; &nbsp; init: function app_init() {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // get view
> &nbsp; &nbsp; &nbsp; this.view1 = document.getElementById('xxx1');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2 = document.getElementById('xxx2');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do stuff
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view1.addEventListener('click', this.clickView1**.bind(this)**);
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2.addEventListener('keyup', this.keyupView2**.bind(this)**);
> &nbsp;&nbsp;&nbsp; },
> 
> &nbsp; &nbsp; clickView1: function app_clickView1() {
> &nbsp; &nbsp; &nbsp;&nbsp; // do something
> &nbsp;&nbsp;&nbsp; },
> 
> &nbsp; &nbsp; keyupView2: function app_keyupView2() {
> &nbsp; &nbsp; &nbsp;&nbsp; // do something
> &nbsp; &nbsp; &nbsp;&nbsp; this.clickView1();
> &nbsp;&nbsp;&nbsp; }
> 
> };
大多數書籍的範例大概就停在這裡，沒有再進一步探討程式的組織架構了。即使是龐大的 Javascript 專案如 [Gaia](https://github.com/mozilla-b2g/gaia)，不少部分的程式碼組織方式也是如此。在這種組織方式裡，若有很多的視圖（View）需要操作或修改，我們的程式碼就會開始亂起來。

下面來試著將以上程式漸進改為 FLUX 架構。

### 改進建議一：將 handleEvent 當作 Dispatcher 來使用
> 跟視圖（View）有關的操作（Action），都透過事件註冊到分配器（Dispatcher）去。&nbsp;（溫馨提示：IE 9以上版本才有支援 handleEvent 方法，在之前版本上使用要加 polyfill）

我們先來想想看視圖（View）跟操作（Action）在前端 Javascript 程式中分別代表著什麼。
視圖（View）很明顯，就是透過 getElementById 等方法，從 HTML 中取得代表對應節點（Node）的元素（element）。

若想要套用FLUX架構，我們可以將附加在各個元素（element）上的事件行為分離，將事件註冊到一個統一的地方（分配器），在這個地方對不同的事件進行操作。

&nbsp;Javascript 內建的分配器叫做 [handleEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)，它可以拿來處理任何事件Event，寫法如下。
> &nbsp;var App = {
> &nbsp; &nbsp; init: function app_init() {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // get view
> &nbsp; &nbsp; &nbsp; this.view1 = document.getElementById('xxx1');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2 = document.getElementById('xxx2');
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do stuff
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view1.addEventListener('click', **this**);
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.view2.addEventListener('keyup', **this**);
> &nbsp;&nbsp;&nbsp; },
> 
> &nbsp; &nbsp; **handleEvent**: app_handleEvent(evt) {
> &nbsp; &nbsp; &nbsp;&nbsp; switch (evt.type) {
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; case 'click':
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; switch (evt.target) {
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case this.view1:
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; this.clickView1();
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; break; 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; break;
> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; case 'keyup':
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; switch (evt.target) {
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case this.view2:
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; this.keyupView2();
> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; break; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
> &nbsp;&nbsp;&nbsp; }, 
> 
> &nbsp; &nbsp; clickView1: function app_clickView1() {
> &nbsp; &nbsp; &nbsp;&nbsp; // do something
> &nbsp;&nbsp;&nbsp; },
> 
> &nbsp; &nbsp; keyupView2: function app_keyupView2() {
> &nbsp; &nbsp; &nbsp;&nbsp; // do something
> &nbsp; &nbsp; &nbsp;&nbsp; this.clickView1();
> &nbsp;&nbsp;&nbsp; }
> 
> };這麼做帶來的明顯好處是所有的呼叫都統一在 handleEvent 中，可以更容易地追查到。

這麼寫也可以在 addEventListener/removeEventListener 時不用使用 bind(this)，而 bind(this) 經常有些 side effect 需要特別留意。

例如假使我們想要反註冊 view1 上的 click 方法，使用以下寫法

> &nbsp;this.view1.removeEventListener('click', this.clickView1.bind(this));其實並沒有將第一個 event 移除。因為使用了 **.bind(this) **後，回傳的其實是一個新的 instance...。
正確的寫法是
> **this.bindClickView1** = this.clickView1.bind(this)
> this.view1.addEventListener('click', this.bindClickView1);
> ... 
> this.view1.removeEventListener('click', this.bindClickView1);用 handleEvent 可以省點事，要反註冊時也傳入 this 即可。 
> this.view1.removeEventListener('click', this);

### 改進建議二：將資料處理的部分分離，使用自訂事件來改變 Store 狀態
> 分配器 （Dispatcher）負責將操作（Action）傳遞給需要的資料處理器（Store）
資料處理器（Store）負責跟資料直接相關的操作。在稍大的 Web App 中，我們可以另外定一個 Object 來處理資料相關的事宜。一般我們的寫法會是

> // Store.js
> function Store() {
> &nbsp; this._data: 0;
> };
> 
> Store.prototype = { 
> &nbsp; getSomething: function s_getSomething() {
> &nbsp; &nbsp; return this._data; 
> &nbsp; },
> 
> &nbsp; doSomething: function s_doSomething() {
> &nbsp; &nbsp; this._data&nbsp;+= 1; 
> &nbsp; },
> 
> &nbsp; setSomething: function s_setSomething(val) {
> &nbsp; &nbsp; this._data = val; 
> &nbsp; }
> };
> 
> // App.js
> var App = {
> &nbsp; this.store = new Store();
> &nbsp; this.store.init();
> &nbsp; this.store.getSomething();
> &nbsp; this.store.doSomething();
> &nbsp; this.store.setSomething(2); 
> };若想要套用FLUX架構，首先我們要避免從資料處理器（Store）外部直接改變資料處理器（Store）。我們可以透過在呼叫端使用 [window.DispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/Window.dispatchEvent) 發送自訂事件（[CustomEvent）](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)，並在資料處理器（Store）中接收自訂事件來做到。

如此一來，資料處理器（Store）將只留下 get 方法來讓外部取得 Store 想提供的資料。

另外如果程式碼改善進入到下一個重點，在操作（Action）時應該不需要再呼叫 Store.getSomething 了，我們將資料處理器（Store）的 getSomething 方法留著給繪圖者（Renderer）使用 。

> // Store.js
> function Store() {
> &nbsp; this._data: 0;
> };
> 
> Store.prototype = {
> &nbsp; init: function s_init() {
> &nbsp; &nbsp;&nbsp; **window.addEventListener('store_do', this);**
> **&nbsp;&nbsp;&nbsp;&nbsp; window.addEventListener('store_set', this);**
> &nbsp; },
> 
> &nbsp; handleEvent: s_handleEvent(evt) {
> &nbsp;&nbsp;&nbsp; switch(evt.type) {
> &nbsp; &nbsp; &nbsp; case 'store_do':
> &nbsp; &nbsp; &nbsp; &nbsp; this.doSomething();
> &nbsp; &nbsp; &nbsp; &nbsp; break; 
> &nbsp; &nbsp; &nbsp; case 'store_set':
> &nbsp; &nbsp; &nbsp; &nbsp; this.setSomething(**evt.detail.val**);
> &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; break;
> &nbsp;&nbsp;&nbsp; }
> &nbsp; },
> 
> &nbsp; getSomething: function s_getSomething() {
> &nbsp; &nbsp; return this._data; 
> &nbsp; },
> 
> &nbsp; _doSomething: function s_doSomething() {
> &nbsp; &nbsp; this._data&nbsp;+= 1; 
> &nbsp; },
> 
> &nbsp; _setSomething: function s_setSomething(val) {
> &nbsp; &nbsp; this._data = val; 
> &nbsp; }
> };
> 
> // App.js
> var App = {
> &nbsp; this.store = new Store();
> &nbsp; this.store.init();
> &nbsp; //this.store.getSomething();
> &nbsp; **window..dispatchEvent(new CustomEvent('store_do'));
> &nbsp; ****window..dispatchEvent(new CustomEvent('store_set',**
> **&nbsp;&nbsp;&nbsp; {'detail':{'val':2}}
> &nbsp; )); **
> };這麼做帶來的明顯好處是**測試**時可以簡單地將 Store 與 App 分開來測試，這對大型App是很重要的。 

### 改進建議三：讓 Renderer 來處理視圖
> 若資料處理器（Store）修改的結果需要反映到視圖（View）上，可以透過發送訊息通知給繪圖者（Renderer）處理> //&nbsp; Renderer.js
> var ClickRenderer = {
> &nbsp; init: function s_init(element, Store) {
> &nbsp; &nbsp;&nbsp; this.element = element;
> &nbsp; &nbsp;&nbsp; this.store = Store; 
> &nbsp; &nbsp;&nbsp; **window.addEventListener('render_view1', this);**
> &nbsp; },
> 
> &nbsp; handleEvent: s_handleEvent(evt) {
> &nbsp;&nbsp;&nbsp; switch(evt.type) {
> &nbsp; &nbsp; &nbsp; case 'render_view1':
> &nbsp; &nbsp; &nbsp; &nbsp; this.element.textConent = this.store.getSomething(); 
> &nbsp; &nbsp; &nbsp; &nbsp; break;
> &nbsp;&nbsp;&nbsp; }
> &nbsp; }};
> 
> // Store.js
> function Store() {
> &nbsp; this._data: 0;
> };
> 
> Store.prototype = {
> &nbsp; init: function s_init() {
> &nbsp;&nbsp;&nbsp;&nbsp; window.addEventListener('store_do', this);
> &nbsp;&nbsp;&nbsp;&nbsp; window.addEventListener('store_set', this);
> &nbsp; },
> 
> &nbsp; handleEvent: s_handleEvent(evt) {
> &nbsp;&nbsp;&nbsp; switch(evt.type) {
> &nbsp; &nbsp; &nbsp; case 'store_do':
> &nbsp; &nbsp; &nbsp; &nbsp; this.doSomething();
> &nbsp; &nbsp; &nbsp; &nbsp; break; 
> &nbsp; &nbsp; &nbsp; case 'store_set':
> &nbsp; &nbsp; &nbsp; &nbsp; this.setSomething(evt.detail.val);
> &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; break;
> &nbsp;&nbsp;&nbsp; }
> &nbsp; },
> 
> &nbsp; getSomething: function s_getSomething() {
> &nbsp; &nbsp; return this._data; 
> &nbsp; },
> 
> &nbsp; _doSomething: function s_doSomething() {
> &nbsp; &nbsp; this._data&nbsp;+= 1;
> &nbsp; &nbsp; **window..dispatchEvent(new CustomEvent('render_view1'));** 
> &nbsp; },
> 
> &nbsp; _setSomething: function s_setSomething(val) {
> &nbsp; &nbsp; this._data = val; 
> &nbsp; }
> };
> 
> // App.js
> var App = {
> &nbsp; init: function a_init() {
> &nbsp; &nbsp; // get view
> &nbsp; &nbsp; this.view1 = document.getElementById('xxx1');
> &nbsp;&nbsp;&nbsp; this.view2 = document.getElementById('xxx2'); 
> &nbsp; &nbsp; this.store = new Store();
> &nbsp;&nbsp;&nbsp; this.store.init();
> &nbsp; &nbsp; **ClickRenderer.init(this.view1, ****this.store);**
> &nbsp; },
> 
> &nbsp; 
> &nbsp; handleEvent: a_handleEvent(evt) {
> &nbsp;&nbsp;&nbsp; window..dispatchEvent(new CustomEvent('store_do'));
> &nbsp;&nbsp;&nbsp; //Store.setSomething(2)
> &nbsp; &nbsp; window..dispatchEvent(new CustomEvent('store_set',
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'detail':{'val':2}}
> &nbsp;&nbsp;&nbsp; )); 
> };
上段程式在 App 中註冊了 ClickRenderer，並傳入 Store 與 所需的 View 元件。所有的介面更新全交由 ClickRenderer 處理。

（另一個方法是讓繪圖者（Renderer）監看資料處理器（Store）的狀態，然後去改變視圖（View）） 
&nbsp;http://fluxxor.com/documentation/store-watch-mixin.html

### 

### 總結
<div class="separator" style="clear: both; text-align: center;"></div><div class="separator" style="clear: both; text-align: center;"></div><div class="separator" style="clear: both; text-align: left;">整理完後，一般 javascript 套用 flux 架構的運作流程如下：</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: center;">![](http://i.imgur.com/hpHcPRu.png)</div>
簡而言之，上面的各種建議是鼓勵大家多使用 Javascript 內建的 addEventListener, handleEvent, customEvent 等方法。透過大量使用 event，我們可以改善 Javascript 程式邏輯，資料，與介面元件之間的關聯程度。

將 FLUX 架構拆分為三個重點流程來理解或實踐的好處，是我們能漸進地遵循其中一些方法來改善我們現有的程式架構。

以上是我關於如何使用 FLUX 架構在一般 Javascript 組織方式的第三個版本，可能有些錯謬之處，還迎大家討論或給予建議。