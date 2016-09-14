---
title: TurboGears AJAX 使用感想- 2
tags:
  - python
  - TurboGears
date: 2006-06-09 06:17:23
---

補充一點心得:

如果你的網頁應用服務主要關注在 AJAX 應用, 大部分動作都用 javascript 在客戶端完成,

只有 data 部分需要後端提供. 那麼 TurboGears 是非常適用的選擇.

1\. 可以先用一般 serverside 開發方式寫函式和建立網頁應用服務原型 (prototype), 

來測試你的網頁應用服務該有的功能.

> @expose(format = ".template.pages") #資料以樣版格式顯示
> def method(self):
> ....
> return dict{data=data}因為 TurboGears 中從傳入 serverside 的表單資料處理一致, 

所以在 serverside 寫的 code 完全可以繼續使用, 

不必為了支持 AJAX 重寫, 很好的達到不重複自己(DRY)的效果.

2.import javascript library , 將資料改以 JSON 格式傳到網頁

from turbogears import mochikit
...
@expose(format = ".template.pages") #資料以樣版格式顯示
@expose(format = "JSON") #資料以JSON格式顯示
def method(self):
....
return dict{data=data, scripty = mochikit} #在網頁上

TurboGears 預先包好 mochikit, scriptaculous, plotkit 等 javascript 庫, 

使用時可以用程式呼叫, 預設可用 JSON 格式傳輸, 

預設 mochikit 庫提供相應資料處理支援.

3\. 在 client 端用 javascript 處理 DOM 物件.

因為在開發的第一步時已經能將所需的資料, 傳輸內容等都處理好了, 

能確信資料傳輸的正確性. 所以開發 javascript 時, 可以專注在網頁內資料處理的部分. 

在這時遇到 bug 的話也可以很放心地將可能的問題點縮小到單純網頁內資料處理的範圍, 

因而 AJAX 開發時最麻煩的交叉 debug 也變得更容易.

因此如果你的網頁應用服務主要關注在 AJAX 應用, 那麼 TurboGears 是非常適合的選擇.