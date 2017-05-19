---
title: 「Yahoo!奇摩字典」Ubiquity Script
tags:
  - Ubiquity
date: 2008-09-10 03:43:48
---

把下面的 script copy 到 [Ubiquity](http://labs.mozilla.com/2008/08/introducing-ubiquity/) 的 command-editor 中。
每當看到不熟的生字，打開 [Ubiquity](http://labs.mozilla.com/2008/08/introducing-ubiquity/)，輸入「fy」，按下「Enter」鍵，即可連結到「[Yahoo!奇摩字典](http://tw.dictionary.yahoo.com/)」看解釋。

```
> CmdUtils.CreateCommand({
> name: "fy",
> homepage: "zhpy.googlecode.com",
> author: { name: "Fred Lin", email: "gasolin+ubiquity@gmail.com"},
> license: "MIT",
> description: "yahoo dict",
> help: "fy [keyword]",
> 
> takes: {"keyword": noun_arb_text},
> 
> preview: function( pblock, directObject ) {
> searchText = jQuery.trim(directObject.text)
> var previewTemplate = "輸入要搜尋的單字 ${query}";
> var previewData     = {query: searchText};
> pblock.innerHTML    = CmdUtils.renderTemplate(previewTemplate, previewData);
> },
> 
> execute: function( directObject ) {
> var url = "http://tw.dictionary.yahoo.com/dictionary?s={QUERY}"
> var urlString = url.replace("{QUERY}", directObject.text);
> Utils.openUrlInBrowser(urlString);
> }
> })
```
