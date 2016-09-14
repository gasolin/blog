---
title: 'Mercurial, 分支與合併很簡單'
tags:
  - hg
date: 2010-09-11 00:27:20
---

[Mercurial(Hg)](http://mercurial.selenic.com/) 一直是我很愛用的版本控制工具。以前自己最常用的用途是拿來取代 [svn](http://subversion.tigris.org/)，單純享受單機/離線使用版本控制系統開發的樂趣。

要單機使用版本控制系統開發，照著[水銀分散式版本控制系統的使用概念](http://inet6.blogspot.com/2007/04/mercurial-mozilla.html)做就行了。

最近看了[Hg init](http://hginit.com/top/)和[ProGit](http://progit.org/book/zh/)兩份分別講Hg和Git分散式版本控制的書，裡面都相當推崇「分支(Branch)開發」的概念。
所謂「分支開發」，就是將主幹(trunk)保持在穩定可運作的版本（雖然本來就該這麼做），在開發任何新功能時都另建新分支(branch)，開發到一段落之後再合併回主幹。能支援這樣的開發模式，是因為Hg或Git這些分散式版本控制系統做開分支、合併等動作的額外開銷都很低。

那麼要實際使用時該怎麼做呢？

**開分支**

我有一個名為「ZAKU」（薩克）的目錄，主幹版本代號為3, 現在要實作一個將綠色變成紅色的功能，這時我們可以建立一個新分支來繼續開發這個新功能。分支命令的格式為：
> $ hg branch [branch name]
因此要建立一個名為「red」的分支，可以使用以下命令：
> <pre>$ hg branch red
> marked working directory as branch red</pre>
這麼一來，之後 commit 的 code 都會進入「red」這個分支了。

**查看狀態**

在 commit 進一些 code 之後（版本代號到13），輸入「hg branchs」命令可以列出所有版本

> <pre>$ hg branches
> default                       3:e2287f9031a1 (inactive)
> red                           13:e590de4b0dc9</pre>
**切換分支**

在開發新功能的同時，也可能會碰上整個專案共通的bug，以前老派的作法是再 check out 一份主幹的程式碼，然後兩邊修正，現在有了hg, 只要先暫時切換回主幹，把bug修正了再合併回分支（或到時一次把分支合併回主幹）。

要切換回主幹，輸入「hg update default」即可。

> <pre>$ hg up default
> 4 files 已更新, 0 files 已合併, 3 files 已移除, 0 files unresolved</pre>
**合併**

當我們把「red」分支中的新功能做好後，可以很容易地將這些修改合併回主幹。

首先，用上面的方法切換回主幹，然後輸入「hg merge red」，即可將「red」分支中的修改加進主幹。

> <pre>$ hg merge red
> 5 files 已更新, 0 files 已合併, 0 files 已移除, 0 files unresolved
> (branch merge, don't forget to commit)</pre>
合併命令的格式為

> hg merge [branch name]
合併完後確認沒問題，就將程式碼再 commit 進版本庫吧！

如果只想 push 某 branch 的修改到版本庫，可以使用
> hg push --rev [version]
命令，這樣只會將與指定版本相關的修改上傳到版本庫。

**One more thing**

同樣的方法，我們可以再建立一個分支「horn」來開發長角的功能，然後再將「horn」分支合併回主幹。

別忘了hg還有提供一個離線網頁瀏覽功能，輸入「hg serve -p 5000」，在瀏覽器上輸入「http://localhost:5000」就能看到類似 gitweb 的版本控制訊息網頁。點選左側的「graph」標籤，可以用視覺化的方式看到之前所有分支合併的圖形記錄囉！

學會分支與合併後，你的開發效率會不會也變成三倍速哩？

參考資料: 
* http://stevelosh.com/blog/2009/08/a-guide-to-branching-in-mercurial/