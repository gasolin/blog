---
title: '[Mercurial]多來源更新'
tags:
  - hg
date: 2010-09-08 03:00:29
---

在做完「hg clone」（就如同從 Server 端 Check Out 程式碼）後，除了可以對原 Server 做「hg pull」以更新程式碼之外，也可以多加別台 Server 進列表。

如原來從 Alice 處「hg clone」下來原始碼，而現在也想要從 Bob 處直接取得他的更新，可以使用
> $ hg pull [bob server]命令。

另一個好方法是可以在 .hg/hgrc 中定義額外的 Server 別名(alias)。

例如原來的 .hg/hgrc 長這樣:
> [paths]
> default = [Alice Server]/[project]
我們在其後加入 Bob Server 的別名如下:
> [paths]
> default = [Alice Server]/[project]
> bob = [Bob server]/[project]
儲存後，要再從 Bob 處直接取得他的更新，可以使用
> $ hg pull bob
命令來直接取得 bob 的原始碼。分散式版本控制是不是很方便呢 :)