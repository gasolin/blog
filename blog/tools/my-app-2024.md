---
title: 目前使用的電腦應用程式 (2024)
tags:
  - tool
date: 2024-08-28 13:15:31
---

![](https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlydHVhbCxlbXBsb3llZXx8fHx8fDE2NzgyMjg3Nzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=960)

使用 Macbook Air M2 已一年，除了使用系統內建功能外，還得安裝一些便捷程式以提高使用效率。在此順道紀錄目前使用的應用程式。
[延續去年的設定](tools/my-app-2023)，做了一些改動。

## 半自動安裝

```sh
# xcode 命令行工具
$ xcode-select --install
$ brew install android-studio balsamiq-wireframes brave-browser dropbox fava gnupg gnu-sed hiddenbar itsycal java logseq microsoft-edge nvm ollama raycast recordit slack starship steam surfshark the-unarchiver visual-studio-code yarn zsh
```

<!-- truncate -->


額外安裝 git 工具、nvm (nodejs 版本管理)、設定 openjdk 連結

```

$ brew tap microsoft/git
$ brew install git-credential-manager-core
$ nvm install 18
$ sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk \
     /Library/Java/JavaVirtualMachines/openjdk.jdk
```

### 設定腳本

```sh
% # nvm 設定
% mkdir ~/.nvm
% code ~/.zshrc

# 加入腳本
# Set PATH, MANPATH, etc., for Homebrew.
eval "$(/opt/homebrew/bin/brew shellenv)"
# Set PATH, MANPATH, etc., for Homebrew.
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
# starship
eval "$(starship init zsh)"

PATH="/opt/homebrew/opt/openjdk/bin:/opt/homebrew/opt/gnu-sed/libexec/gnubin:$PATH"
export CPPFLAGS="-I/opt/homebrew/opt/openjdk/include"
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk/25.1.8937393
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:/Applications/CMake.app/Contents/bin

# find local ip
ip(){
  ifconfig -a|grep inet|grep -v 127.0.0.1|grep -v inet6|awk '{print $2}'|tr -d "addr:"
}

# kill process by port
kp() {
  npx kill-port --port $1
}

# apply PR to codebase
pr() {
  git fetch upstream pull/$1/head:pr-$1
  git checkout pr-$1
}

# format chinese article spaces
pangu() {
  npx pangu "$1"
}

# list short changelog
changelog() {
  echo "changelog:"
  LANG=en_US git log --no-merges --pretty=format:"* %h - %s (%ar) <%an>" -n $1
}
```

## App Store

- Transporter：👨‍💻 App 上傳工具

### 其他應用

- [pCloud](https://www.pcloud.com/)：備用的快速備份資料夾，一次付清後有 2TB 空間，目前拿來備份 Dropbox 資料夾。

## 我到底裝了什麼

這麼多的程式，可以概略再分為系統增強、工作、生活相關幾類：

### 系統增強

- homebrew：所有可以透過 [homebrew](https://brew.sh/) 安裝的程式，都應透過 homebrew 安裝。
- brave-browser：🌐 主要使用的瀏覽器
  - 重新整理目前的網頁：`command + r` (+ shift 完整重新整理)
  - 關閉目前分頁：`command + w`
  - 開新分頁：`command + t`
  - 回到上一頁：`command + 左方向鍵`
- microsoft-edge: 🌐 💬 用來開 chatgpt / new bing 搜尋
- ollama: 本地 LLM 工具
- dropbox：快速備份資料夾（空間 15.x GB）
- [hiddenbar](https://github.com/dwarvesf/hidden)：隱藏多餘的狀態列圖示
  - `在狀態列圖示上按著 cmd 鍵可以拖曳改變順序`
- itsycal：📅 狀態列日曆
- the-unarchiver：解壓縮工具
- raycast：透過鍵盤快速啟動工具
  -（[取代 spotlight](https://manual.raycast.com/hotkey)）用 `Command + 空白鍵` 啟動。
  - 取代系統內建的 [emoji keyboard](https://www.raycast.com/changelog/1-29-0)，在 Extentions > Search Emoji 綁定 `Control + Command` 快捷鍵。
  - 取代 rectangle 安排視窗位置，在 `Extentions > Window Management` 綁定 `Option + Command + 方向鍵` 快捷鍵。
  - snippets 綁定 `Option + /` 快捷鍵，儲存預先定義的 gpt prompts 外派幫手。
- recordit：螢幕錄製工具

### 工作

- android-studio：Android 開發環境
- balsamiq-wireframes：👨‍💻 mockup 工具
- git-credential-manager-core：👨‍💻 [搭配 github 使用](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git#git-credential-manager)
- gnupg：👨‍💻 [加密工具](https://tourcoder.com/gpg-on-macos/)(Pretty Good Privacy)，我用來簽署 git commit
- gnu-sed：👨‍💻 命令行字串取代工具
- java：👨‍💻 跑一些程式用
- nvm：👨‍💻 Node 版本管理工具
  - 透過 `nvm install 16` 可以安裝最新版的 Nodejs 16.x，透過 `nvm ls-remote` 可以查看已安裝的版本
- slack：👨‍💻 溝通工具
- starship：👨‍💻 命令行高亮提示
- visual-studio-code：👨‍💻 程式編輯工具
  - 用 `CMD + J` 命令可以在編輯模式與內建的 Terminal 工具之間切換。
  - 用 `CMD + B` 命令可以開關側邊欄。
- yarn：👨‍💻 node 套件管理工具
- surfshark: VPN 工具

### 生活

- fava: beancount 文字記帳視覺化
- logseq：每日記事工具，記事是用 markdown 格式儲存，放在 Dropbox 資料夾中
- steam: 遊戲管理工具

----

除了應用程式之外，電腦上還會裝瀏覽器插件、Raycast 插件、與編輯器插件。

## 瀏覽器插件

- Bitwarden：密碼管理工具
- ~~Browserflow：半自動網頁爬蟲~~
- Pocket：📰 稍後閱讀
- Youtube 雙字幕：可同時顯示兩種語言
- 電子錢包：👛 Metamask、Tally Ho

分頁使用瀏覽器內建的分頁群組功能

## Raycast 插件

- Google Translate
- Visual Studio Recent Projects

## Visual Studio Code 插件

- Background Terminal Notifier：命令執行後跳系統通知
- Beancount：Beancount 格式補完
- Blank Line at the End：檔尾自動加入空白行
- Color Info：行內 CSS 顏色顯示/選擇器
- EditorConfig for VSCode
- ESLint：程式碼樣式檢查
- Indent-rainbow: 快速辨識不同層的括號
- Path Intellisense：改進檔案路徑搜尋
- Trailing Spaces：去除行尾的空白。
- Version Lens: 快速檢查 package.json 檔案中套件是否有更新的版本
- WakaTime：紀錄使用編輯器的時間

----

## Web 應用

- ✉️ 信箱：gmail
- 🗺️ 地圖：Google 地圖
- 👥 社群：[Twitter](https://twitter.com/gasolin)、[Facebook](https://www.facebook.com/)、Telegram、Discord、Keet
- 📝 記事：Keet、[Google keep](http://keep.google.com/), Google Doc
- 待辦事項：[habitica](https://habitica.com/)
- 🔐 密碼管理：Bitwarden，Yubi Authenticator（2 步驟認證）
- 相簿：Google Photo、Dropbox
- 📺 線上影片： Youtube、Netflix
- 🎥 觀影記錄：
- 線上學習：PressPlay

## Web 服務

- 🗂️ 個人網站：[個人網站](http://www.gasolin.idv.tw/)、[Github](https://github.com/gasolin/blog/)、[Linkedin](https://www.linkedin.com/in/fredglin/)

### 系統內建快速鍵和手勢

- 切換輸入法：`Control + 空白鍵`
- 切換程式：`command + tab`
- 切換虛擬桌面： 用三指在觸控板上同時向左或右撥動，或 `Control + 方向鍵`
