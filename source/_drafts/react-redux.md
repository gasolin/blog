---
title: react redux
tags:
  - web
---

{% mermaid %}
graph LR
Model --> App
View --> App
{% endmermaid %}

最近在開發Firefox Devtools - Network Monitor的過程中有使用到React與Redux相關技術。

React 負責建立介面，並處理介面相關更新與操作(透過VDOM)，Redux 提供 React 所需的 state 與 event handler (action)。

{% mermaid %}
graph LR
Immutable --> Reselect
Reselect --> Redux
Redux -->React
{% endmermaid %}


Performance

必看 https://somebody32.github.io/high-performance-redux/


## React

[Performance Engineering with React](
https://benchling.engineering/performance-engineering-with-react-e03013e53285)

It’s very easy to end up shooting in the dark if you’re not disciplined
Focus on building things and only invest time on fixing the key performance bottlenecks

[Highlighting Component Updates](https://blog.logrocket.com/make-react-fast-again-part-3-highlighting-component-updates-6119e45e6833)

* react-addons-perf
Perf.start() / Perf.stop()
* https://github.com/crysislinux/chrome-react-perf

do `Perf.printWasted()` tells you how much time was wasted doing render tree construction and virtual DOM comparisons that did not result in a DOM modification.

During component investigate, add following code in component

https://blog.logrocket.com/make-react-fast-again-part-2-why-did-you-update-dd1faf79399f

```js
const {whyDidYouUpdate} = require("why-did-you-update")
whyDidYouUpdate(React);
```

Measure -> improve

1. get comfortable with profiling
2. shouldComponentUpdate will get you a long way

React Component 會在 shouldComponentUpdate 比較是否有修改。

[A Deep Dive into React Perf Debugging](https://benchling.engineering/a-deep-dive-into-react-perf-debugging-fd2063f5a667)

## Redux

https://reactrocket.com/post/react-redux-optimization/

We use the connect higher order component that wraps your component  subscribes to changes in the Redux store and renders itself whenever an update occurs.

透過React-Redux，Store中是否有修改造成變更的點變成在`mapStateToProps`。

"`mapStateToProps` is the new render. Called on every store update"

instead of return object, return function.

[Why using nested connect(react-redux) components is good?](https://hackernoon.com/why-using-nested-connect-react-redux-components-is-good-bd17997b53d2)

`it’s perfectly fine to use connected components inside an already connected component. Also it actually boosts the performance of your app.`

https://medium.com/@arikmaor/react-redux-performance-tuning-tips-cef1a6c50759
