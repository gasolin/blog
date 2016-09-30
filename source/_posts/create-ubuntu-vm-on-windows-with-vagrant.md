---
title: 在Windows 10上透過vagrant, virtualbox安裝Ubuntu 16.04
date: 2016-09-30 16:51:23
tags:
  - desktop
  - work
---

幾周前透過Ubuntu升級筆電的Firmware後，Ubuntu竟然就再也無法正確抓到無線網卡了！

我想說那就趁這機會重灌OS吧！然而在嘗試灌各種Linux套件（Elementary OS Loki (Beta), Ubuntu 16.04, Ubuntu 14.04）都抓不到網卡驅動程式後，只好乖乖灌回Windows 10。

由於在筆電上依然需要一個Linux工作環境，我就[之前的經驗](http://blog.gasolin.idv.tw/2015/08/23/FoxBox-1-0-%E8%AE%93%E4%BD%A0%E5%9C%A8%E4%B8%80%E5%80%8B%E5%B0%8F%E6%99%82%E5%85%A7%E4%B8%8D%E7%97%9B%E5%AE%89%E8%A3%9D-Firefox-OS-%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83%E7%9A%84%E8%A8%AD%E5%AE%9A%E5%B7%A5%E5%85%B7/)繼續使用vagrant來建立工作環境VM。安裝好[VirtualBox](https://www.virtualbox.org/)和[Vagrant](https://www.vagrantup.com/)後，只需要2行命令即可安裝完成，而且之後隨時可以砍掉重新開一個全新的VM。

步驟：

1. 在Windows 10上按視窗鍵，搜尋cmd並開啟
2. 在命令行工具中輸入以下2行命令，以啟動一個Ubuntu VM

```sh
vagrant init boxcutter/ubuntu1604-desktop
vagrant up
```

第一次啟動後要開啟VirtualBox並選擇「顯示」，之後就不需再用到vagrant命令了。
vagrant box所使用的登入的密碼是"vagrant"。

由於Vagrant使用最小化地配置VM可使用的CPU和記憶體，對於桌面開發環境來說有些不夠用。我會到VirtualBox中修改「配置」，去適量增加可用的記憶體數值。
目前這方式在Windows上運作地相當順利。
