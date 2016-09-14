---
title: 移民效應，是自幹一套還是拿別人的 Open Source 來用？
tags:
  - Mozilla
date: 2014-12-15 02:21:12
---

從 [Marissa Mayer 與起死回生的雅虎](http://mmdays.com/2014/12/12/yahoo_comeback/) 一文中，可以看到雅虎工程師對自家 CEO 的讚美。其中一點提到雅虎內部有很多系統設計是與外界完全不一樣的，直到新 CEO 上任才放下使用多年的YUI而擁抱其他Open Source團隊維護的專案。

從樂觀的角度看：因為當初Yahoo工程師夠強（Douglas Crockford），覺得自己做的東西比別家的好，所以乾脆自己做。有這種「愛自幹」的精神，所以才會做出很多跟其他地方不一樣的東西，這是feature。從反面看則是因為長期跟人家用的工具不一樣，所以沒辦法直接使用別人做的Open source工具，這也是bug。

以前的Yahoo「不擁抱其他Open Source團隊維護的專案」嗎？Yahoo當然某種程度是支持Open Source的公司。就我所知，Yahoo是間很早開始支援 [Hadoop](http://hadoop.apache.org/) 開源專案的公司。Yahoo使用 Hadoop，也延攬 Hadoop 開發者進公司，所以「不擁抱其他Open Source團隊維護的專案」這個論點也許是存在的。

我們來看看 Google。類似於 YUI，Google 自己也有一套 [Closure Library](https://developers.google.com/closure/library/)，多數 Google 的產品都建構於其上，雖然開源，但外面專案會使用它的也少之又少。
而 Android 呢，[AOSP](https://source.android.com/)專案裡也有不少只能在 Android 工具鏈中使用的工具，但從以前基於 Eclipse 的 Android 開發工具到最近釋出的Android Studio 1.0是基於 IntelliJ 的開發工具，部分的Google似乎較接受擁抱其他Open Source團隊維護的專案。

在寫下這兩段話的同時，我比較這兩家公司擁抱其他Open Source團隊維護的專案的原因，竟發現兩者改變的相同點在於「併購」。當Google併購Android，就接受了Android團隊與他們提出的開發工具。當Yahoo開始大採購，許多新創團隊進入Yahoo大家庭的同時，也帶進各團隊使用的「其他Open Source團隊維護的專案」。也就是說，當新移民團隊進入這個團體時，帶來了改變。

比起大公司而言，新移民團隊在被併購前的資源有限，使用其他Open Source團隊維護的專案是很自然的事。團隊被併購後若需使用併購方的技術重新打造產品，將是相當痛苦的事情。因此在Yahoo大採購後許多原有規矩被改寫，恐怕背後也有這些新團隊帶來的影響。

用社會學可能可以解釋為什麼是團隊而不是個人？因為改變一直是困難的事。原有的團隊在過去磨合/開發的過程中已經凝聚出了一些共識。移民到新團體的過程中，新移民團隊需要參與和適應團體的一些運作方式，而團體則需接納和適應新移民團隊的一些習俗。

回來想想 Mozilla 也做了很多 Open Source 專案，但整套工具常常僅供自己相關的專案使用。
從自身找原因，自家工具的開源專案原本就是為了滿足自己的需求。當外部出現對這套工具的需求時，由於公司人力資源調配，優先要滿足的還是自身專案時程的需求。
當用到的Open Source專案在公司裡就有人可以諮詢，當然比去找其他Open Source團隊維護的專案來地可靠（？）。許多專案在這樣的思維下就使用自己寫的工具，當意識到的那天，已經回不去了。

若想避免現在的feature變成未來的bug，在決定自幹專案工具前，先想一想（或search一下），也許結果會不一樣。