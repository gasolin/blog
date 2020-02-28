---
title: How react native works
tags:
  - web
  - mobile
---

UI Thread (Main Thread)
JS Thread (JavaScriptCore(Webkit))

* Getting Started with React Native on Ubuntu Linux
http://www.proreactnative.com/Getting-Started-with-React-Native-on-Ubuntu-Linux/

* react-native-elements
https://react-native-training.github.io/react-native-elements/


## Performance Audits

* extend from PureComponent instead of Component, when no child, if your component should update or not.

* 透過不 Render 還沒 navigate 到的元件來增進App的效能 https://medium.com/@jonnyburger/speed-up-your-react-native-app-using-this-react-navigation-hack-ae2d12bf3493

* remove console.log in bundle https://docs.expo.io/versions/latest/react-native/performance/#using-consolelog-statements

* RAM bundles https://docs.expo.io/versions/latest/react-native/performance/#ram-bundles--inline-requires

* Animated.timing with `useNativeDriver: true,`
https://www.simplytechnologies.net/blog/2017/6/6/6-tips-you-want-to-know-about-react-native-performance


* Run systrace on android device https://facebook.github.io/react-native/docs/performance#profiling-android-ui-performance-with-systrace

## References

- Developer tools https://github.com/crazycodeboy/RNStudyNotes/blob/master/React%20Native%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7%E4%B8%8E%E5%BF%83%E5%BE%97/React%20Native%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7%E4%B8%8E%E5%BF%83%E5%BE%97.md
- Remote Debugging in React Native https://medium.com/possible-cee/remote-debugging-in-react-native-8c2fd4a19d37
- [Building your first React Native app: Stopwatch tutorial in React native](https://codersera.com/blog/first-react-native-app-stopwatch/)
