---
title: 簡單安裝 TurboGears
tags:
  - python
  - TurboGears
date: 2006-09-26 02:53:46
---

TurboGears 在進入1.0b版本後吸引了許多新的使用者,
為了讓安裝 Python 跟 TurboGears 再更簡易. TurboGears 開發者 Kevin 釋出了新的簡單安裝工具 tgsetup.py, 將 SetupTools 與 TurboGears 的安裝步驟合而為一, 讓安裝TurboGears 的過程更簡單.
只需兩個步驟就能安裝好 TurboGears:

<span style="font-size:180%;">1\. 安裝 Python</span>
Linux 使用者:
 一般說來, 你的 Linux 發行版本(Distribution)裡早已預裝了 Python, 並且偷偷用在了一些內附的程式中. 你可以輸入
> $whereis python
 來查看它的存在.
 如果你是 Ubuntu 的使用者, 你需要再安裝幾個必備的套件
> $ sudo apt-get install gcc libc6-dev python2.4-dev

Windows 使用者:
 到 www.python.org 下載 python 2.4 安裝檔, 接著只要按"下一步"按鈕就能安裝成功.
 安裝成功後需要設定環境變數. 進入"控制台"->"系統"->"進階"->"環境變數",並選擇"編輯" path 變數.
 在 path 變數前端加入
> C:\Python24\Scripts; (安裝路徑\Scripts) 敘述.

其他平台使用者:
 請參考 www.python.org 網站

<span style="font-size:180%;">2\. 安裝 TurboGears</span>
 各平台使用者都可以從 www.turbogears.org/download/ 下載 tgsetup.py 檔案. 在命令列輸入
> # python tgsetup.py

 Windows 使用者可以直接在命令列輸入
> >tgsetup.py

 tgsetup.py 會自動從網路上下載相關的檔案來安裝 TurboGears.