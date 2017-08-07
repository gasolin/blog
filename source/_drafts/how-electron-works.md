---
title: how electron works
tags:
  - web
  - desktop
---

Electron是一套結合了瀏覽器與Node.js功能，能使用網頁相關技術撰寫桌面應用的框架。


* 原生支援
原生支援檔案系統，標題列（Task bar），桌面圖示（Dock icons），系統通知（Notification），選單，快捷鍵等。
* 離線應用 Offline by default
* Run as an app
* node & node native modules
* no cross-browser concerns
* another distribution channel
* write with web tech HTML, CSS, JS

## 安裝

```sh
$ electron-prebuilt
```

run on terminal

```sh
electron .
```

## 基本架構

## process

Main, Render

communicate with ipc (electron.ipcMain)


multiple window!


{% mermaid %}
graph LR
Node --> Electron
Webkit --> Blink
Blink --> Electron
{% endmermaid %}
