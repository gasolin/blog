---
title: 從 gitbook 遷移到 docusaurus
tags:
  - docusaurus
  - gitbook
  - ethereum
date: 2020-09-20 14:30:30
---

## 為何要從 gitbook 遷移

以前曾在 gitbooks [發表一些電子書](https://gasolin.gitbooks.io/learn-ethereum-dapp/
)。 在 gitbook 發表電子書除了可以用 Markdown 語法外，也支援一些外掛如 Mermaid 圖表等。隨著 gitbook 業務調整，已經不再維護原來的平台，因此興起了遷移的想法。

## 選擇 Docusaurus

在一番比較後決定使用 Facebook 的 [Docusaurus](https://v2.docusaurus.io/)。Docusaurus 裝好後同時提供`首頁，部落格，文件`。支援 Markdown 並支援在文件中嵌入 React 元件。

<!-- truncate -->

Docusaurus 還有一個非常適合技術文件的[Versioning](https://v2.docusaurus.io/docs/versioning)功能，如 React 函式庫需要同時提供舊版本文件供參考時，相當有用。

經過設定後，Docusaurus 可以[只使用文件或部落格](https://v2.docusaurus.io/docs/blog#blog-only-mode)的部分，在加入支援 [Mermaid](https://github.com/gasolin/learndapp/blob/master/src/theme/Mermaid.js)圖表後，可以滿足我的需求。

## 遷移的成果

遷移的成果可參考 http://gasolin.idv.tw/learndapp/

![Imgur](https://i.imgur.com/vUDslvW.png)

原始碼在 https://github.com/gasolin/learndapp

## 後續行動

現在我的部落格用的 Hexo 要升級模板有點複雜。以後考慮把部落格也改成Docusaurus。
