---
title: 在Windows 10上透過vagrant, virtualbox安裝與設定Elementary OS 0.4 (Loki)
date: 2016-09-30 17:22:16
tags:
  - desktop
  - work
---

![Imgur](http://i.imgur.com/hlzcMQm.png)

承上一篇，我工作用的桌機通常灌的是Ubuntu（Linux）系統。筆電則是在Windows 10上灌Ubuntu VM解決。

但上個月我的桌機從16.04LTS升級到16.04.1時，竟然升級失敗無法開機，這讓我很火。
於是利用這個機會，我嘗試安裝了 [Mint](https://www.linuxmint.com/) 和 [Elementary OS](http://elementary.io/)。
Mint和Elementary OS都是Ubuntu的衍生版本，所以在套件和命令行使用上與Ubuntu一致，在重新設定開發環境時比較不會遇到困難。

兩者嘗試後，最終是Elementary OS的高顏值與類似Mac OS的使用經驗，讓我決定繼續用下去。
當時安裝的版本是基於Ubuntu 14.04LTS的Elementary OS 0.3版(Freya)。至目前使用上相當滿意，終於可以擺脫不甚順手的Unity桌面了。

就在前幾周，基於Ubuntu 16.04LTS的Elementary OS 0.4版(Loki)[終於釋出了](http://blog.elementary.io/post/147637979911/loki-04-stable-release)。
但是新版本竟然不支援直接從舊版升級，於是我依然錯過在第一時間試用新版本的機會。

今天心血來潮再次搜尋了一下vagrant上是否有提供Elementary OS的Box，很幸運[找到了](https://atlas.hashicorp.com/TimWSpence/boxes/elementaryos)！

步驟：

1. 在Windows 10上按視窗鍵，搜尋cmd並開啟
2. 在命令行工具中輸入以下2行命令，以啟動一個Elementary OS VM

```sh
vagrant init TimWSpence/elementaryos
vagrant up
```

第一次啟動後要開啟VirtualBox並選擇「顯示」，之後就不需再用到vagrant命令了。
vagrant box所使用的登入的密碼是"vagrant"。

啟動後我照著[11 things to do after install Elementary OS Loki](https://itsfoss.com/things-to-do-after-installing-elementary-os-loki/) 文章的建議，安裝了一些工具。
同時因為我的Dell XPS 13(9495)筆電解析度較高，預設的解析度之下每個字都超級小，我透過gsettings命令多設定了text scaling:

```sh
gsettings get org.gnome.desktop.interface scaling-factor
gsettings set org.gnome.desktop.interface scaling-factor 2
```

在做了這個修改之後，才得到對眼睛比較友善的使用界面。（如題圖）
