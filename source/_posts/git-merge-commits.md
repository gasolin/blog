---
title: 如何修改 git commits
tags:
  - git
  - work
date: 2017-03-13 18:16:20
---


## 同時修改一個commit

與其他人合作使用git版本控制系統時，為了讓最後合併（Merge）的commit好看，常常會需要調整自己的commit。
剛開始工作時一次只修改一個commit，最常用到的命令是：

修改commit訊息(message)
```
git commit --amend
```

將後續修改合併成一個commit

```
git rebase -i HEAD~2
```

將要合併的commit從**pick**改成**s**(squish)後儲存，修改commit訊息後，可以得到剩下的一個commit。

## 同時修改多個commit

到後來為了讓審查(Review)更容易,漸漸開始嘗試在遇到某些較複雜的問題時，在同一個Branch堆疊多個commit的開發方式。

假設手上有3個疊在一起的commit(1,2,3, 3是最新的commit), 這時在修改的過程中會遇到的主要問題，
就是現在的修改與最新的commit 3無關, 但與commit 1相關。想要將現在的修改與之前的commit 1合併。

這時`git rebase`就不是那麼好用了。可以使用命令

```
git commit --fixup <commit>
```

`<commmit>`代表 commit 1的hash。最新的commit中會出現`fixup <commit 1>`的註記。

當一系列修改完成後，只要使用命令

```
git rebase -i --autosquash
```

儲存後可以得到干淨的commit 1,2,3🤘

如果只想修改之前的commit訊息，可以用命令

```
git rebase -i HEAD~3
```

將**pick**改成**reword**，儲存後就可以修改訊息。


## 參考資料

* [GIT tip : Keep your branch clean with fixup and autosquash](http://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html)
* [Ammend/Change Previous Git Commit Message](https://inteist.com/ammend-or-change-previous-git-commit-message/)
