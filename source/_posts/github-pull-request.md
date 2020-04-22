---
title: 如何抓別人的 Pull Request
tags:
  - git
  - devhack
date: 2020-04-14 22:10:46
---

Github 提供了「Pull Request」這種方便所有人先行審閱程式碼，在整併(merge)回各分支的方式。
有時候也會想先將程式碼下載回來執行看看效果。
目前我會使用的有兩種方式：

## 使用 diff

想要下載別人提交的程式，可以在 Pull Request 頁面網址後直接加上`.diff`，就會出現文字版的 diff 檔。

執行 `git apply 1234.diff` 即可使用；
測試完可執行`git apply -R 1234.diff`回復原狀。

## 使用 bash

在 `~/.bash_profile` 建立以下命令

```sh
pr() {
  git fetch upstream pull/$1/head:pr-$1
  git checkout pr-$1
}
```

初次使用時需執行 `source ~/.bash_profile` 或重開命令行。

之後只要執行 `pr 1234` (1234 是 Pull Request 的編號)，就會自動抓取對應的Pull Request並切換到相應的`pr-1234`分支。

這邊有[範例程式](https://gist.github.com/gasolin/4f2555f5a241630365896bb26a8f1f5b) 供參考。
