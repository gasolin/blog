---
title: 從 Hexo 遷移到 docusaurus
tags:
  - docusaurus
  - hexo
date: 2021-11-07 17:30:30
---

import Mindmap from '@theme/Mindmap'

<Mindmap markdown={`
# Blog
## 基於 [Docusaurus](https://docusaurus.io/)
### 只使用[Blog](https://docusaurus.io/docs/blog) 部分
## 優點
  - 改版容易
  - 基於 React
  - 文章中可自訂或內嵌 Component
  - 支援 [Emoji](https://github.com/rhysd/remark-emoji), [Mermaid](https://github.com/sjwall/mdx-mermaid), MarkMap 圖
## 缺點
- 文章網址改變
- RSS 連結改變
`}/>

更新 blog post 時發現自動 deploy 不運作，原來 Travis CI org 已經不服務了 Orz。

原來用的 hexo 版本也舊了，要更新也得費一番工夫，不如來試試之前考慮過的 Docusaurus 吧。

花了一天做基本的 Docusaurus 設定與文章修正 ✍️，另一天加上[自動部署](https://github.com/gasolin/blog/blob/master/.github/workflows/deploy-docusaurus.yml)，並加上 [Mermaid](https://github.com/sjwall/mdx-mermaid), [Markmap](https://github.com/gasolin/blog/blob/master/src/theme/Mindmap.js) 圖支援後，就倉促上線了⚡️。

改版後一樣是透過 Github hosting + 使用 Markdown 保存文章。

## 改版的主要差異:

### 文章網址改變

雖然這次改版不再相容舊版 Blogger 的設定，網址改變了，但舊文依然保留。
可以透過[Tags](http://localhost:3000/tags) 查看各標籤分類下的文章。

### RSS 連結改變

從 http://blog.gasolin.idv.tw/feeds/posts/default
改到 https://blog.gasolin.idv.tw/rss.xml

### 待修正

- 修正文章內連結
- 加回 Disqus 留言評論功能
