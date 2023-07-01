---
title: 人生苦短，我用 conda
tags:
  - python
date: 2023-06-28 11:40:31
---

以前要嘗試 Python 的各種函式庫時，會用 virtualenv 或 docker 來產生專用的獨立環境。
但 Python 版本更新也算快，若想用特定 Python 版本執行，還需再搭配 `pyenv` 來確認運行環境，這些套疊讓環境設定變得更複雜。

現在已有 [miniconda](https://docs.conda.io/en/latest/miniconda.html) 工具，只要用 brew 就可以安裝

`brew install --cask miniconda`

使用體驗相當好，節省了許多學習與設定的時間，也可以安心的去嘗試各種函式庫。

<!-- truncate -->

## 建立環境

可使用 `conda create` 命令建立獨立的虛擬環境

```
$ conda create python=3 --n TEST
```

這樣會自動下載最新 Python 3 版本，並將環境名稱設定為 `TEST`。

可使用命令 `conda env list` 查看現有的虛擬環境。

## 切換環境

可使用 `conda create` 命令切換到對應的環境

`conda activate TEST`

`TEST` 為環境名稱。切換後還是可以用 `pip3 install` 等工具來安裝函式庫。

可使用 `conda deactivate` 命令離開環境。
