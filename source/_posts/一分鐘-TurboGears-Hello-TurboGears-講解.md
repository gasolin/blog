---
title: 一分鐘 TurboGears - Hello TurboGears 講解
tags:
  - TurboGears
date: 2006-02-05 06:25:56
---

<span style="font-weight:bold;">1\. 載入模組 (Import Modules)</span>

    0 from turbogears import *

這一行會載入所有 turbogears 下的模組, 我們可以透過只載入我們現在會用到的模組來節省記憶體
    from turbogears import controllers
    from turbogears import expose

<span style="font-weight:bold;">
2\. 定義主類別(Define Main Class)</span>
    1 class Root(controllers.RootController):

在剛開始我們只要知道我們創建了一個能處理網頁要求的類別, 利用這個主要類別我們可以透過網頁來執行我們寫的程式

<span style="font-weight:bold;">3\. 定義主要方法/處理函式(Define Main Method)</span>
    3      def index(self):
    4          return "Hello World!"

index() 是個特殊的方法, 它的作用就像網頁上的 index.html 一樣, 它是在網站被訪問時, 若不指定特定頁面時預設會存取的頁面.

<span style="font-weight:bold;">4.允許透過網頁處理 (Access your function from Browser)</span>
    2      @expose()

我們使用"expose"來指定哪些方法/函式可以透過網頁操作. 你可以把"@expose()"當作一個確認符號, 在controllers這個程式方法列表中, 只有在方法/函式前用"@expose()"指令指定過的方法/函式才能從網頁存取到.

實際上測試就是將 def index(self) 方法前的 @expose() 註解掉, 再次訪問我們卻會發現原先可以正常運作的"Hello World"頁面不見了! 再將 @expose() 加回來, 再次訪問我們發現"Hello World"頁面又可以正常訪問了.