---
title: 3 分鐘學會用 firebug 除錯
tags:
  - javascript
  - firebug
date: 2012-08-10 10:00:32
---

firebug 是 firefox 的一個插件.
可以說是當前用來 debug javascript 程式的最佳選擇.
firebug 還提供了一些好用的函式可以讓您的測試更順暢.

[這段影片](http://www.digitalmediaminute.com/screencast/firebug-js/) 展示了 firebug 提供的一些好用的函式.

廢話不多說, 馬上來看看吧:

<span style="font-weight: bold;">1\. 印出一般訊息 : console.log</span>

就像許多程式語言中的 'print' 語句, firebug 提供的 console.log 語句可以直接印出變數值.
例如
> console.log(變數);

或者印出包含變數的敘述
> console.log("敘述: %d"%變數);

<span style="font-weight: bold;">2\. 印出具有提示圖示的訊息 console.info/console.warn/console.error</span>

與印出一般訊息(console.log)使用的方式完全相同, console.info/console.warn/console.error 只是會在訊息前加上相應圖示

> console.info(a) 提示圖示
> console.warn(b) 警示圖示
> console.error(c) 錯誤圖示

<span style="font-weight: bold;">3\. 使用除錯介面 debugger</span>

只要在想要除錯的地方前加上一行加上 debugger 語句

> debugger;
> .....

執行時就會彈出一個互動式的除錯介面.
除錯介面提供了單步執行等功能, 並即時取得當前各相關變數的狀態.
也可以看到迴圈每次執行後改變的值

<span style="font-weight: bold;">4\. 計算花費時間 console.time/console.timeEnd</span>

對於 AJAX 程式來說有些動作會花費較多的時間, 使用

> console.time("跑")
> .....
> console.timeEnd("跑")

將要測試的程式段包起來, 執行時就會印出該段程式所花費的執行時間