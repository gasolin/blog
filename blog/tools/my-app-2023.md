---
title: 目前使用的電腦應用程式 (2023)
tags:
  - tool
date: 2023-02-03 09:15:31
---

剛換新電腦 (Macbook Air M2)，順道紀錄使用的應用程式

## 半自動安裝

```sh
$ brew install airpip balsamiq-wireframes brave-browser dropbox gnupg hiddenbar itsycal logseq nvm raycast recordit slack starship visual-studio-code yarn
$ brew tap microsoft/git
$ brew install git-credential-manager-core
```

<!-- truncate -->

- homebrew：所有可以透過 [homebrew](https://brew.sh/) 安裝的程式，都應透過 homebrew 安裝。
- airpip：每日自動將桌布換成另一幅畫或照片
- balsamiq-wireframes：👨‍💻 mockup 工具
- brave-browser：🌐 主要使用的瀏覽器
- dropbox：快速備份資料夾（空間 15.x GB）
- git-credential-manager-core：👨‍💻 [搭配 github 使用](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git#git-credential-manager)
- gnupg：👨‍💻 [加密工具](https://tourcoder.com/gpg-on-macos/)(Pretty Good Privacy)，我用來簽署 git commit
- [hiddenbar](https://github.com/dwarvesf/hidden)：隱藏多餘的狀態列圖示
- itsycal：📅 狀態列日曆
- logseq：每日記事工具，記事是用 markdown 格式儲存，放在 Dropbox 資料夾中
- nvm：👨‍💻 Node 版本管理工具
- raycast：透過鍵盤快速啟動工具，（[取代 spotlight](https://manual.raycast.com/hotkey)）
- recordit：螢幕錄製工具
- slack：👨‍💻 溝通工具
- starship：👨‍💻 命令行高亮提示
- visual-studio-code：👨‍💻 程式編輯工具
- yarn：👨‍💻 node 套件管理工具

### 設定腳本

```sh
% # nvm 設定
% mkdir ~/.nvm
% code ~/.zprofile

# 加入腳本
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

% source ~/.zprofile
% nvm install 16

% #xcode 命令行工具
% xcode-select --install
```

### App Store

- Transporter：👨‍💻 App 上傳工具

### 其他應用

- [pCloud](https://www.pcloud.com/)：備用的快速備份資料夾，一次付清後有 2TB 空間，目前拿來備份 Dropbox 資料夾。

----

## 瀏覽器插件
- Bitwarden：密碼管理工具
- Browserflow：半自動網頁爬蟲
- Pocket：📰 稍後閱讀
- Youtube雙字幕：可同時顯示
- 電子錢包：👛 Metamask、Tally Ho

----

## Web 應用

- ✉️ 信箱：gmail
- 🗺️ 地圖：Google 地圖
- 👥 社群：[Twitter](https://twitter.com/gasolin)、[Facebook](https://www.facebook.com/)、Telegram、Discord
- 📝 記事：[Google keep](http://keep.google.com/), Google Doc
- 待辦事項：[habitica](https://habitica.com/)
- 🔐 密碼管理：Bitwarden，Yubi Authenticator（2 步驟認證）
- 相簿：Google Photo、Dropbox
- 📺 線上影片： Youtube、Netflix
- 🎥 觀影記錄：
- 線上學習：PressPlay

## Web 服務

- 🗂️ 個人網站：[個人網站](http://www.gasolin.idv.tw/)、[Github](https://github.com/gasolin/blog/)、[Linkedin](https://www.linkedin.com/in/fredglin/)
