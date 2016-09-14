---
title: 給我五分鐘，教你用中文腳本寫一個 RPG (使用 TextRPG)
tags:
  - game
  - python
date: 2008-07-22 14:02:37
---

[TextRPG](http://pypi.python.org/pypi/TextRPG/) 是我最近找到的一個好玩 python 模組，由德國人開發。
作用就是用來寫一個純文字的冒險遊戲。
目前的版本已包含了 RPG 中常見的對話、戰鬥等元素，整個遊戲可以完全由一個 python 腳本來構成。

因為實在太簡單了，所以來個五分鐘上手文好了:)

1\. 安裝軟體

安裝好 Python 與 easy_install 模組後，接著安裝周蟒與 TextRPG
> $ easy_install zhpy
> $ easy_install textrpg

如此安裝好後就可以開始寫 RPG 了。

2\. 準備環境

新建一個檔案夾，首先，用文字編輯器新增一個 rpg.ini 檔案，裡面內容如下：

> [charactor]
> 角色=Char
> 樣板=template
> 名字=name
> 姓名=name
> 說=say
> 詢問=ask
> 動作=act
> 行動=act
> 比較技能=compete_skill
> 取得經驗值=get_exp
> 生命力=bTP
> 生命值==TP
> 攻擊力=attack
> 武器=weapon
> 防具=armor
> 傷害=wounds
> 活著=active
> [story]
> 故事=story
> 儲存=save
> 給予經驗值=give_exp
> 戰鬥=battle
> 對話=diag將這個檔案儲存起來。接著開啟適當的 python 程式編輯器新建一個任意檔名的檔案 (範例裡將檔案取名為 HelloRPG.twpy)

在檔案開頭加入三行敘述：

> #!/usr/bin/env python
> # encoding: utf-8
> 
> from rpg_lib.textrpg import *
好了，我們環境已經準備好了。

3\. 撰寫故事

因為用 TextRPG 寫故事太容易了，這就編一個大雄大戰小叮噹的故事：
> > #!/usr/bin/env python
> # encoding: utf-8
> 
> from rpg_lib.textrpg import *
> 
> 大雄 = 角色()
> 大雄.名字="大雄"
> 
> 小叮噹 = 角色()
> 小叮噹.名字="小叮噹"
> 
> 故事("""大雄哭著跑進房間""")
> 
> 大雄.說("""嗚嗚~~小叮噹，技安跟阿福欺負我""")
> 小叮噹.說("""口胡，大雄我受夠你了，來戰吧！""")
> 
> 大雄.攻擊力 = 3
> 小叮噹.攻擊力 = 90
> 
> 大雄.動作("""大驚失色，狼狽逃竄""")
> 大雄.說("""小叮噹，你發什麼瘋！""")
> 
> 勝利 = 小叮噹.戰鬥(大雄)
> 如果 勝利:
> ____故事("""小叮噹打敗了大雄，從此過上清靜的日子""")
> 否則:
> ____大雄.動作("從如廢墟般的房間中爬起")
> ____大雄.說("""呼呼，我還是贏了""")
> ____故事("""大雄打敗了小叮噹，從此作者掰不下去封筆了。""")

註: 上面程式範例中的 "____" 代表4個空格。用空格來表示程式邏輯區塊是 python 的語法。

好了，我們寫好了故事，接著就是將這個檔案儲存起來。
檔案儲存好之後，我們打開 command line 程式，開始執行這個遊戲：

> $ zhpy HelloRPG.twpy
> 大雄哭著跑進房間
> 大雄: 嗚嗚~~小叮噹，技安跟阿福欺負我
> 小叮噹: 口胡，大雄我受夠你了，來戰吧！
> 大雄 大驚失色，狼狽逃竄
> 大雄: 小叮噹，你發什麼瘋！
> 
> ---battle-stats for 小叮噹---
> ....
> ---/battle-stats---
> 
> 大雄 comes closer.
> 小叮噹: Do you want to attack 大雄? (Yes, no)  Yes
> You attack 大雄.
> 小叮噹: How do you want to fight? (Usual, defensive, target head) Usual
> 
> You won this round.
> 大雄 took 80 points of damage and a critical wound.
> 
> 小叮噹打敗了大雄，從此過上清靜的日子