---
title: Redux Saga
tags:
  - react
  - redux
  - saga
date: 2018-10-02 15:49:00
---

最近相當常使用[Redux Saga](https://redux-saga.js.org/)，簡單紀錄一下。

比較常見用來處理Redux非同步操作的Middleware有`redux-thunk`, `redux-saga`, `redux-observable`等。之前參與開發的[Firefox Devtools](https://github.com/devtools-html)使用的是修改版的`redux-thunk`。我在其中一個[個人專案](https://github.com/gasolin/transmonitor)中也有試過`redux-observable`。使用Rxjs的感覺，是整個過去的開發觀念又被扭成另一個形狀:sweat_smile:。因為整套開發的觀念不同，當後續想要修改時常常遇到一些問題。目前則多使用`redux-saga`來處理非同步相關問題。

## 基本Redux State運作

先簡單回顧一下基本的Redux State運作。Redux統一儲存所有網頁前端的狀態(`State`)。只能透過發送`Action`來通知狀態的改變，並透過`Reducer`修改當前的狀態。

{% mermaid %}
graph LR
Reducer{Reducer} -.-> State(State)
Disptch>Dispatch] -.-> |Action| Reducer
{% endmermaid %}

基本的Redux僅支援同步的操作。若想支援非同步操作（promise, async, API等）需要透過加裝`Middleware`來處理。Middleware的功用，是改變收到`Action`後的處理流程。`Redux Saga`即是其中一種功能強大的Middleware。

## Redux Saga運作

Redux Saga的運作模型，起始自收到Action。Saga透過`takeLatest`或`take`監聽想處理的Action，並呼叫對應的generator function。在generator function中，可以用`yield`語句來完成各種非同步操作。

例如使用`select`語句來從目前的`State`中取得資料，使用`call`語句來呼叫API，用`put`語句來將新的Action傳回Redux處理。

{% mermaid %}
graph LR
TakeLatest>TakeLatest] -.-> |Action| Saga
Saga -->|call| API
State -->|select| Saga
Put>Put] -.-> |Action| Reducer
Saga --> Put
{% endmermaid %}

一段簡單的範例：

```js
function* handleAction(action) {
  // get state
  const auth = yield select((state) => state.auth)
  // async get data
  const { result } = yield call((auth) => fetchData(auth))
  // dispatch action
  yield put(actions.saveData(result))
}

export default function* rootSaga() {
  yield takeLatest('ACTION', handleAction)
}
```

當然`Redux-saga`還有提供一些其他的功能，但其實`Redux-saga`就是這麼簡單。使用`Redux-saga`可以很好地運用原有的非同步處理觀念，要將React Component中相應的非同步函式搬出來也不像`Redux-observable`那樣需要全部改寫。

## 參考資料

- https://redux-saga.js.org/ 或 https://redux-saga-in-chinese.js.org (中文)
- [Polling with redux](https://bigbitecreative.com/polling-with-redux/) 比較使用Redux-saga和Redux-observable寫polling的差異
