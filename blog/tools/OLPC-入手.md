---
title: OLPC 入手
tags:
  - olpc
date: 2008-02-01 16:45:58
---

托朋友從美國帶了台 OLPC 準備拿來當電子書閱讀器，
剛拿到的第 3 天來整理一下。

1\. 連上無線網路

OLPC 主要是設計給缺乏網路基礎設施的地方使用，
因此對一般無線網路的支援有限。

確定能用的設定如下:

  1\. 使用固定的 Channel： 選固定的 Channel (1,6,11)，不要用一般 AP 預設的自動選擇(auto)模式。

  2\. 最好剛開始是用 open mode (不加密模式) 連線。

http://wiki.laptop.org/go/Wifi_Connectivity

  3\. 開啟 olpc 後，進入 Group View，每台 AP 或 OLPC 都是一個圓點，在代表你的 AP 的圓點上按'X'鍵一下，olpc 就會開始試著與你的 AP 連線。

2\. 更新軔體

可以透過
> cat /etc/issue
命令來看目前的軔體版本。

我拿到的機器預載的版本是 650，要更新版本可至 http://wiki.laptop.org/go/Olpc-update 查看更新步驟。
指令如下：
> su -l
> olpc-update -rv 656

3\. 中文顯示

開啟 Terminal 程式, 照著以下命令輸入:
> su -l
> mkdir /usr/share/font/tw
> cd /usr/share/font/tw
> wget http://hep1.phys.ntu.edu.tw/~john/olpc/odosung_o.ttc.bz2
> bunzip2 odosung_o.ttc.bz2

這些命令會在 /usr/share/font 資料夾下開一個新的 tw 資料夾, 並從網路上下載 YChao 所修改適合 OLPC 的字型並解壓縮。

當以上命令執行完後，就可以透過 Browse 程式瀏覽中文網頁了。

4\. 看英文電子書

OLPC 可以透過 Browse 程式上網下載，或是插入 SD 卡 / USB 隨身碟來取得 PDF 電子書來源。
OLPC 的 Browse 程式還可以當作檔案瀏覽器使用。 在網址列輸入 > /media 就會進到放 SD 卡或隨身碟的檔案目錄中，可以透過網頁介面選擇電子書檔案。

選到檔案後按下連結就可以將電子書"下載"到 OLPC 上。
切換到 Journal 程式時可以看到下載的進度。
當下載完成後可以透過 Journal 程式呼叫 Reader 開啟 PDF。