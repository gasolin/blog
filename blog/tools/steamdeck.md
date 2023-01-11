---
title: Steam Deck 設定
tags:
  - steam
date: 2023-01-11 16:30:00
---

作為一台有觸控螢幕、震動手把、麥克風、陀螺儀感測、可外接螢幕，可外接SD卡、且整合的 CPU/GPU 可以跑大多數 2022 年的作品。2萬內台幣可入手的 Steam Deck 應該是目前最兼具效能與價格的掌上電腦設備。

這台機器畢竟主要為遊戲服務，如果要使用他的桌面模式、或整合第三方到遊戲模式還是需要一些處理。

## 在遊戲模式中打開應用程式

Steam Deck 使用訂製的 Arch Linux，同時也能容易地切換到桌面模式。透過 Discover / flatpak 程式，可以無痛的安裝各種應用程式（如瀏覽器）。在桌面模式下打開 `Steam 選單 > 遊戲 > 新增一個非 Steam 遊戲到我的收藏庫`，就可以將各種應用程式加入Steam 收藏庫，以後不需要切換到桌面模式，在遊戲模式中就可以直接打開。

## 調整瀏覽器顯示

所有 Chrome 相容瀏覽器（Edge、Brave）都可以用這招安裝

https://support.microsoft.com/en-gb/topic/xbox-cloud-gaming-in-microsoft-edge-with-steam-deck-43dd011b-0ce8-4810-8302-965be6d53296

 (after @@u @@):

--window-size=1024,640 --force-device-scale-factor=1.25 --device-scale-factor=1.25

若要預設開啟特定頁面可以加 --kiosk "https://www.xbox.com/play"

瀏覽器預設用 R2(RT) 按鈕代表滑鼠左鍵、L2 代表右鍵、右觸控代表板滑鼠移動、左觸控板代表捲動。

## 用陀螺儀（gyro）取代滑鼠操作

在每個遊戲/應用程式啟動畫面上點選 🎮 遊戲手把按鈕，開啟控制器設定，將`陀螺儀行為`選成`等同滑鼠`。這樣在程式中碰著右蘑菇頭時轉動機器，滑鼠游標/視角也會隨之轉動。
