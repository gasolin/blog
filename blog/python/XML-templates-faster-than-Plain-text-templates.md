---
title: XML templates 比 Plain-text templates 還快?
tags:
  - django
  - python
date: 2007-06-29 19:46:40
---

[genshi](http://genshi.edgewall.org/) 的開發者說 genshi 的 markup 核心用 C 重寫後測效能時比原來快 10%~20%,
測試工具所測出來的效能已超越了 Django templates .

> yesterday I merged the cspeedups branch into trunk, which adds a C
> implementation of the genshi.core.Markup class. This improves
> performance around 10-20% in the benchmarks (Genshi now outperforms
> Django templates in the bigtable.py benchmark).