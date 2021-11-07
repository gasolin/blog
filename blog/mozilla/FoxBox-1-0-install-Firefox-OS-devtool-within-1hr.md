---
title: 'FoxBox 1.0, 讓你在一個小時內不痛安裝 Firefox OS 開發環境的設定工具'
tags:
  - FirefoxOS
date: 2015-08-24 07:36:58
---

[![Here she is!!](https://farm8.staticflickr.com/7323/10351341274_ded5f4d043.jpg)](https://www.flickr.com/photos/28289659@N02/10351341274/in/photolist-gLHk8h-6APwhj-4YvKGJ-ihTTs-qZVwX-fuUaX-4ASwRM-9oMyXk-dSR5cF-48JtWV-4vdwk-jjtzT-gGH6oD-6bKC3Y-3Q3qEf-ca5nA-oX9UA-5Ru4vz-5QspRU-oX9UD-WjG4s-4XyTBp-cvqpf-6zQq15-yyNQz-neBzbT-JUMsA-xXPgM-64z6MY-7iQZE6-8qAQD-evarx-5pnwJx-b8G1-8FXLE7-9g9Cz-5AdgA8-9pWBQW-9emKCP-8xYpgz-6dfyXp-9zmfZR-PsAt-tDXdo-HLxuZ-8xYpdZ-8y2qLq-6BmmRm-5aKDea-2cxh9L "Here she is!!")<script async="" charset="utf-8" src="//embedr.flickr.com/assets/client-code.js"></script>

要開始開發 Firefox OS 的 Web 端（Gaia），並不像開發一般網站一樣那麼容易。在開始改網頁之前，通常要把相關的[開發文件](https://developer.mozilla.org/en-US/Firefox_OS/Building_and_installing_Firefox_OS)讀一遍/試一遍，才能順利把開發環境設定好。
而把環境設定好可能已經花了半天時間，這時原本想要改程式的精力也所剩不多了。

去年有感於此，花了些時間整合了一套快速設定 Firefox OS 開發環境的工具「[FoxBox」](https://github.com/gasolin/foxbox)，透過 [Virtualbox](https://www.virtualbox.org/) 虛擬機與  [vagrant](https://www.vagrantup.com/) 自動化工具來達成自動部署 Gaia 的開發環境。最近把 [FoxBox](https://github.com/gasolin/foxbox) 基礎作業系統版本升級了一下（使用 Ubuntu 14.04LTS），在 Macbook 或 Ubuntu 桌面電腦上，只需用一個小時左右的時間，就可以自動安裝好整套開發環境。

### Vagrant&nbsp;+ VM 的優點 
使用Vagrant搭配虛擬機（VMWare或免費的Virtualbox）的好處多多，其一是簡化了開發環境的需求，由於主流的作業系統（Windows，Mac，Ubuntu/RedHat）都支援虛擬機，透過在虛擬機上使用單一的作業系統，可以大幅簡化安裝指令。
其二則是自動化安裝，透過 Vagrantfile 指定要執行的指令 （放在scripts資料夾下），最後跑出來的結果只有安裝成功一種。如果失敗了表示自動安裝的指令沒寫好，初級開發者不用在環境安裝時就強迫得學太多細節。
其三是開發環境隔離，命令都跑在VM中，在之後開發或升級的過程中出現任何問題，隨時都可以重新建立一個乾淨的開發環境。

使用 [FoxBox](https://github.com/gasolin/foxbox) 這套開發環境設定工具，當其他人碰到問題時，也可以更容易地重現問題。

透過 Vagrant 設定，[FoxBox](https://github.com/gasolin/foxbox) 提供實體機與虛擬機共享檔案夾，並支援USB實機偵錯。

雖然開發環境隔離，但是[ FoxBox](https://github.com/gasolin/foxbox) 預設的設定即提供實體機與虛擬機共享檔案夾。裝好開發環境後，你依然可以使用目前作業系統上自己習慣的編輯器來修改程式碼，然後在VM中執行命令。

[FoxBox](https://github.com/gasolin/foxbox) 預設也將 USB port 串接到 VM 中，所以在 VM 中也可以直接接收到實機的偵錯訊息 。

### 設定的流程

連上網路，在主機上執行以下命令

> $ git clone https://github.com/gasolin/foxbox.git
>     $ cd foxbox
>     $ ./configure.sh
除了開始時需要指定網路介面卡，並輸入主機的密碼（用來和虛擬機共享檔案夾）外，其中大部分的流程都是自動化的。

當VM跑起來後，登入VM（帳號/密碼為 vagrant/vagrant）並執行以下命令：

```
> $ gaia_init.sh
> $ cd gaia
> $ make`
```
即可順利編譯好Firefox OS 的 Web 端（Gaia）程式碼囉！
