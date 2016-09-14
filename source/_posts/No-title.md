---
tags:
  - python
date: 2006-10-02 15:02:19
title:
---

繼 Ruby On Rails 後, 最新期的 o3 雜誌專刊介紹 TurboGears

[![](http://photos1.blogger.com/blogger/1345/565/320/o3cover.jpg)](http://www.o3magazine.com/pastissues/issue5/)) 中發表了[一篇文章](http://groups.google.com/group/turbogears/browse_thread/thread/20888f4a6f0f9f99/#) 推薦 [TurboEntity](http://turboentity.ematia.de/) 這個項目,看起來他蠻推崇這個大量借鑒他的 ActiveMapper 功能的專案的.

TurboEntity 最酷的能耐應該是 'self reference',
能參考同個物件的資料 (不知道Django的怎樣, SQLObject
不行直接參考, 要加一些特別的代碼)

網站上的範例裡拿了辛普森家庭 (The Simpsons) 做例子:

定義四個角色

    grampa = Person(name="Abe")
   homer = Person(name="Homer")
   bart = Person(name="Bart")
   lisa = Person(name="Lisa")

定義人物間的關係：

祖父- 河馬 - 霸子
                                   - 麗莎

    grampa.children.append(homer)
   homer.children.append(bart)
   lisa.father = homer

不講的話還真的看不出來這些是存取資料庫中資料的函式.

ManyToOne / ManyToMany 這些函式也是直接呼叫 sqlalchemy
的功能. 