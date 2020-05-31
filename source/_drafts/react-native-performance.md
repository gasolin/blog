---
title: React Native App 效能調校心得
tags:
  - ReactNative
date: 2020-05-30 18:35:46
---

開發 React Native App 的上手流程

measure, avoid re-render, memoize


eval the result:
perf-monitor

lazyload
eslint airbnb + rn


avoid re-render


換芯

- Remote Debugging in React Native https://medium.com/possible-cee/remote-debugging-in-react-native-8c2fd4a19d37

- 透過不 Render 還沒 navigate 到的元件來增進App的效能 https://medium.com/@jonnyburger/speed-up-your-react-native-app-using-this-react-navigation-hack-ae2d12bf3493

- remove console.log in bundle https://docs.expo.io/versions/latest/react-native/performance/#using-consolelog-statements
