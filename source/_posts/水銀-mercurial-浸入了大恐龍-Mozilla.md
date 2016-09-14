---
title: 水銀 (mercurial) 浸入了大恐龍(Mozilla)
tags:
  - hg
  - python
date: 2007-09-21 03:09:51
---

最近 mozilla 宣佈要採用 水銀(mercurial, hg) 當作他們未來的版本控制系統.

我試了一下發現mercurial有用 twist 提供內建的 web server,
想用版本控制時再也不用先搞定 apache 設定了, Python 真是好呀

水銀分散式版本控制系統的使用概念如下:

0\. 開個檔案夾([origin]), 開始 coding.
1\. 告訴自己這個檔案夾裡放的是版本庫 (hg init).
2\. 將原始版本中的所有檔案放進版本庫(hg commit *).
3\. 怕接下來的修改把原始版本改糟了, 所以另外複製一份來改 (hg clone [origin] [dst]).
4\. 在複製檔案夾上改一改, 覺得弄完一小階段了, 先大致查看一下修改了些甚麼(hg status), 然後儲存修改 (hg commit).
5\. 重複修改的過程.
5.x 哇!遇到錯誤了怎麼辦? 沒關係, 用'快速鍵'將修改復原(hg revert [id]).
6\. 改得滿意了, 將修改的東西存回原始檔案夾 (hg push [origin]).
7\. 整理一下原始檔案夾(hg update), 確認修改沒衝突.

其他應用
* 開個 分享讓其他人也可以用(hg serve [-p port])
* 看看修改歷程(hg log)
* 看看修改的內容 (hg diff)
* 修改有衝突了, 進去檔案看看, 解決它 (hg merge)
* 接受其他人的修改 (hg pull)