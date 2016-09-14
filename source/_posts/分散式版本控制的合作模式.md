---
title: 分散式版本控制的合作模式
tags:
  - hg
date: 2010-09-11 00:47:24
---

傳統的版本控制系統(Version Control System, VCS)只有一台單一的版本庫（repository），所有的版本控制都必須經由這台版本庫主機才能管理。新一代的分散式版本控制系統(Distributed Version Control System, DVCS)如 git, Mercurial 則每份抓下來的 code 都可起到等同於版本庫的作用，使得在離線時做版本控制，並能容易地合併回主版本庫的工作模式成為可能。

因為分散的特性，也衍生出各種可能的合作模式。
git 有 [A successful Git branching model](http://nvie.com/git-model)，Mercurial有 [Workflows: Branch As Needed](http://stevelosh.com/blog/2010/02/mercurial-workflows-branch-as-needed/), [Stable & Default](http://stevelosh.com/blog/2010/05/mercurial-workflows-stable-default/), [Translation Branches](http://stevelosh.com/blog/2010/06/mercurial-workflows-translation-branches/) 等方式。

實際上該採用哪種方式比較好？先看看其他人怎麼做，從中選擇，或是加點創意，找出適合自己團隊使用的方法吧。