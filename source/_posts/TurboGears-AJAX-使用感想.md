---
title: TurboGears AJAX 使用感想
tags:
  - python
  - TurboGears
date: 2006-05-13 13:30:19
---

> 很難用簡短言語表述這種互動開發的經驗. 真的要稍微描述的話, 那是一種不管你想要怎麼進行下一個開發步驟時, TurboGears 都幫你準備好了各種基本工具的感覺.

在學習 TurboGears 之後, 我用 TurboGears 框架試做了一個網路模擬架構產生器, 發現使用 TurboGears 寫操作到表單的網頁應用程式實在超方便.

很難用簡短言語表述這種互動開發的經驗. 真的要稍微描述的話, 那是一種不管你想要怎麼進行下一個開發步驟時, TurboGears 都幫你準備好了各種基本工具的感覺.

(以下不包含程式碼).

<span style="font-weight:bold;">設計考量</span>
產生器程式裡使用到大量小塊的表單, 用上 AJAX 技術可以大幅縮短來來回回修改的時間, 增進使用者經驗.

採用'內容為中心'的開發方式, controller 中盡量只返回與內容有關的資料. 所有內容展示都在樣版跟 javascript 中產生.

開發之初就可以預見程式中將會出現相對大量的 Javascript 程式碼, 我盡量採用 AJAX in Action 中提到將程式碼跟網頁分離的方式實做, 將 Javascript 用 import 的方式包含進網頁. 

<span style="font-weight:bold;">原型階段</span>
在 protocontroller.py 中新增一個方法函式, 在其中手動建立一個列表 (預見將來將改成從資料庫中讀出), 返回列表到網頁, 作為剛開始要傳入網頁的資料.

建立一個剛剛的方法函式所用到的樣版 (template), 在樣版中建立一個表單, 來讓使用者選擇傳入的資料.並提供一個給使用者互動用的按鈕.

使用者按下互動用的按鈕後, 利用 mochikit (TurboGears 內建的javascript 函式庫) 提供的 DOM 處理參數, 由使用者選擇的選項來動態創建進一步的表單與第二個互動用的按鈕.

使用者填好相關資訊, 按下第二個互動用的按鈕. 傳回資料到另一個方法函式, 
取得下一個頁面.

exception: 使用者修改原來的選擇, 按下互動用的按鈕後, 利用 mochikit 提供的 DOM 處理函式更新原本動態產生的內容. 

<span style="font-weight:bold;">AJAX 網頁</span>
使用 mochikit 提供的非同步(Async)處理函式, 從伺服器取回資訊.   

<span style="font-weight:bold;">感想</span>
AJAX 非同步處理部分需要 server /client 一起配合才行, 因此對一個網頁框架而言, 不是單純加上一個 AJAX 函式庫, 這個框架就可以說是支援 AJAX. TurboGears 在這點上合格了!

開發時很妙的地方是 Turbogears 處理表單參數(POST)跟網頁參數(GET)的方式是一致的, 所以原本 controller 中寫好的程式根本不怎麼需要修改. 

Turbogears 返回的資料除了給樣版用之外, 要回傳 JSON 格式只要在 uri 後加上'?tg_format=json'即可, 也不必做額外處理. 

javascript 很多語法跟 c 和 python 相似, mochikit 函式庫更是借用了很多 python 的使用方式, 因此實際寫起來 client/server side 程式, 轉換間並不感到太過突兀.

到目前使用上還沒發現TurboGears 沒有 url mapping 有什麼壞處, 要用 url mapping 的話再裝 routes 不遲.