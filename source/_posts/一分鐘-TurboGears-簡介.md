---
title: 一分鐘 TurboGears - 簡介
tags:
  - TurboGears
date: 2006-02-28 15:11:41
---

TurboGears (超速齒輪)是個 python 風格(pythonic) 的網頁應用程式設計開發集成框架. 透過巧妙集成了許多 python 語言下的網頁程式相關開發工具, 提供了網頁程式開發者強大的支援.

TurboGears 利用 CherryPy(網頁控制框架), Kid(樣板系統), Mochikit(Javascript 函式庫), SQLObject(資料庫物件模型)這幾個套件為主體, 朝著簡單易用又靈活的方向, 做到快速網頁應用程式開發的功能. 

組成 TurboGears 的齒輪們都是開發有年的成熟套件, 在主要功能的穩定性上可以信任, 而且 TurboGears 還可搭配其他的 ORM 系統如SQLAlchemy, 其他的模板系統如 cheetah, Paste, Stan等, 延伸性極高.

使用 TurboGears 可以順暢地利用 python 語言, 以簡單, 直覺, 易讀的方式來控制網站程式的運作(Business logic), 產生表單物件, 檢驗表單內容, 並使用視覺化的模板系統來編輯動態網站程式的外觀, 或運用AJAX來製作新一代的網頁應用程式.在多語言支援上, TurboGears 提供網頁介面的 il8n 翻譯協助工具, 讓網站多語言支援變得不再困難; 在牽涉到資料庫的進階設計中, TurboGears 提供 DataController 來達成自動生成對應資料庫欄位的網頁編輯介面 CRUD/scanfold 功能. 提供網頁介面的"資料表設計師(Database Designer)"工具, 可以視覺化地設計資料組織方式; 提供網頁介面的資料表管理工具"(CatWalk)", 管理後端的資料模型