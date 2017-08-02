---
title: 如何使用ES6+
tags:
  - web
  - node
date: 2017-07-31 16:30:31
---

## ES6+是什麼？

近幾年有關注Javascript或Web領域的話，應該會聽過”ES6“這個頗熱門的詞彙。

ES6代表的是ECMAscript[^1]第六版規則。ECMA是一個國際標準組織，各家相關廠商在ECMA-262標準中，定義了 ECMAscript 這個 Javascript 語言的參考標準。

從2011年起，Javascript語言已停滯在5.1版多年，直到在2015年時釋出了ES6，補足了諸多語言本身的許多特性，讓Javascript更便於使用。

從ES6開始，ECMAScript將每年將固定釋出新版本。因此 ES6 也可稱為 ES2015。目前已有ES2015，ES2016，ES2017多個新版本，這批新特性被統稱為ES6+或ES2015+。

之所以到了2017年還有許多人依然在講ES6，是因為ES6為Javascript帶來了20多項較大的語法改動，與之前開發者所認識的Javascript有了很大的不同。

## 怎麼使用 ES6+

最新版的主流瀏覽器Chrome、Firefox，或是Node.js 8.0.0以上版本都已實作ES2015~ES2017的所有功能。

如果想要使用最新的功能，同時又希望能相容其他瀏覽器或舊版的Node，可以使用Babel[^2]來達成。Babel是當前最通用的javascript語言轉譯器(Transpiler)，它可以接受使用新語法撰寫的Javascript程式，並將這份程式轉換成與舊版語法相容的Javascript程式。

實際使用babel時，不需要手動設定ES2015~各年份的preset，只要安裝Env preset[^8]並在`package.json`中做以下設定：

```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      },
      "node": "current"
    }]
  ]
}
```

babel 就會根據近期的瀏覽器支援與你所使用的Node版本，自動引入所有需要的plugin，相當方便。

## ES6+有什麼新功能?

想要大致了解各種語法上的改動，可以查看babel的 es2015[^3], es2016[^4], es2017[^5] preset。每個preset中包含了各種相關語法的plugin。

例如今年的preset(es2017) ，帶來了 trailing-function-commas[^6] 和 async[^7] 語法的支援。

## 參考資料

[1]: https://en.wikipedia.org/wiki/ECMAScript
[2]: https://babeljs.io/
[3]: https://babeljs.io/docs/plugins/preset-es2015/
[4]: https://babeljs.io/docs/plugins/preset-es2016/
[5]: https://babeljs.io/docs/plugins/preset-es2017/
[6]: https://babeljs.io/docs/plugins/syntax-trailing-function-commas/
[7]: https://babeljs.io/docs/plugins/transform-async-to-generator/
[8]: https://babeljs.io/docs/plugins/preset-env/
