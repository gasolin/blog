---
title: 為 Elementary OS 設定中文環境
tags:
  - linux
date: 2017-11-04 19:19:48
---

在前一篇文章中我已經設定好了雙系統（Elementary OS/Windows 10）開機。在這篇中將繼續把系統的基礎中文環境（中文界面 + 輸入法）設定起來。感謝前路上的貢獻者讓整個過程變得相當容易。

設定好的中文環境如下
![Imgur](https://i.imgur.com/WjBUcl6m.png)

## 為什麼要用Elementary OS? 

其實Ubuntu等發行版的中文環境已經做得很好，如果使用Ubuntu等更成熟的發行版，基礎的中文環境都是預設好開箱即用的。

但我就是任性想用基於Ubuntu，但是界面看起來更養眼的[Elementary OS](https://elementary.io/zh_TW/)。

## 調整語系

![Imgur](https://i.imgur.com/TZRXNzGm.png)

首先，打開`Settings`中的`Language & Region`，在左側`Installed Languages`選單中將界面切換到中文。並選擇完全安裝（Complete Installation）。

等待安裝好後重新登入，就可以看到全中文界面了。

![Imgur](https://i.imgur.com/jVv0rNEm.png)

## 安裝新酷音輸入法

在安裝好 Elementary OS 0.4.1 後，預設並沒有輸入法選項，但其實內部已安裝了ibus輸入法框架。

因為沒有內建輸入法，所以若要使用輸入法，需要自行安裝。

在命令列中輸入以下命令以安裝新酷音輸入法

```sh
$ sudo apt update
$ sudo apt install ibus-chewing
```

安裝好後再輸入`ibus-setup`，可開啟輸入法設定畫面

```sh
$ ibus-setup
```

在 「輸入法」 分頁底下的 「漢語」 子選單當中可以加入剛安裝的新酷音輸入法。

![Imgur](https://i.imgur.com/5EBSmC6.png)

按「確定」，在設定畫面中可以看到的新酷音輸入法。

![Imgur](https://i.imgur.com/vhkdfvKm.png)

最後重要的步驟，就是將切換方式改成個人較習慣的`Ctrl+Space`。

![Imgur](https://i.imgur.com/S4TZ1iRm.png)

如此一來，就可以在Elementary OS上輸入中文啦！這篇文章就是從截圖到文章編輯/上傳，全程在已照上述方式安裝好Elmentary OS基礎中文環境的筆電上完成的。

### fcitx 版

我也試了安裝fcitx版本的新酷音

```sh
$ sudo apt install fcitx fcitx-chewing
```

安裝好後使用`im-config`命令將預設輸入法框架切換成`fcitx`，重新開機後就可以看到輸入法圖示了。

## 參考資料

* Ubuntu fcitx + chewing 新酷音輸入法 https://gist.github.com/tanyuan/c0d4ee15cf0c9c93da28cc1cf0ff87b3 
