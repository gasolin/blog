---
title: 使用 nose 測試工具簡單做測試
tags:
  - aglie test
  - python
  - TurboGears
date: 2007-03-04 17:24:14
---

<span style="font-weight: bold;">楔子</span>

自從聽說了敏捷方法 (Agile programming)後, 一直很想試試這種"測試先行"的開發方式.
但是在 python 上前後試過 unitest, doctest, 都不夠"<span style="font-weight: bold;">簡單到會想常常拿來用</span>"的程度,

今天拿了一份原型寫得差不多的程式, 試著寫些測試例子 (test case) 後用 nose 測試工具來測試看看, 想不到 nose 還蠻容易使用的.

<span style="font-size:180%;">三步驟使用 nose 開始測試

</span><span style="font-size:130%;">1\. 安裝或更新 nose
</span><span style="font-weight: bold;">#</span> easy_install -U nose

沒用過 easy_install ? 你該開始試著用了!

<span style="font-size:130%;">2\. 撰寫測試例子 (test case)</span>
打開一個新的資料夾, 我們統一在這個新資料夾裡寫主程式與測試例子

將要測試的內容寫入 something.py 這個檔案[註1]:

```
> class Hello(object):
>       def  __init__(self):
>            self.template = "hello world"
> 
>       def render(self):
>           return self.template
```

nose 測試工具識別測試例子的條件, 是判斷找到的這個類別或方法的名稱是不是以"test" 或 "Test"開頭. 如果是的話就當成是測試例子. nose 會自動搜尋子目錄下所有符合的測試例子, 並自動開始測試.

因此我們第一個範例程式用的測試例子只要是函式名稱用 'test' 開頭來命名就可以囉, 我們命名一個檔案 testsomething.py (這個檔案名稱以 test 開頭與識別測試例子的條件並無關聯, 只是慣例上放測試的例子的檔名都會加上 test 字樣), 並在裡面寫下:

testsomething.py:

```
>
>     def test_Hello():
>         abc = Hello()
>         assert "hello" in abc.render()
> 
>     def test_foreign():
>         abc = Hello()
>         assert "bonjour" not in abc.render()
```

assert 是 nose 用來判斷測試結果的語法. 主要有這兩種:

*   assert 片段 in "結果"
*   assert 片段 not in "結果"
對照上面範例, 可以得知上面兩者的意思就是:

*   測試結果"hello"字串應該在 abc.render() 回應的結果裡
*   測試結果"bonjour"字串應該不會在 abc.render() 回應的結果裡如果上面任一種情況不符合 assert 敘述, 這個測試用例就會回報失敗.

<span style="font-size:130%;">3\. 開始測試
</span>切換到檔案在的檔案目錄下, 輸入
# nosetests

結果應該類似這個樣子:
> D:\path\pyfile>nosetests
> ......
> ----------------------------------------------------------------------
> Ran 1 tests in 0.020s
> 
> OK那麼如果我們改動了 something.py 中 self.template 變數的內容, 在內容裡加上了 "bonjour" 字樣, 會發生什麼事情呢?

有測試工具的好處就是我們只要單純地再次運行 nosetests 命令就好了, 不用花腦力去判斷或思考:) 我們查看訊息時會看到類似以下的訊息:

```
> 2, in runTest
> self.testFunc()
> File "D:\path\pyfile\testsomething.py", line 90, in test_Hello
> assert "bonjour" not in abc.render()
> AssertionError
> -----------------
> Ran 1 tests in 0.030s
> 
> FAILED (failures=1, errors=1)
>
```

上面的報告提醒我們有一件錯誤: "bonjour"字串原本不應該出現在 abc.render() 回應結果中的, 但結果中竟然出現了!

所以如果我們的測試用例寫的好, 就可以肯定我們剛剛改動 something.py 時出了些問題. 測試這件事確實有效!

<span style="font-weight:bold;">
較好的約定</span>
我們已經知道, 只要類別或方法的名稱是以"test" 或 "Test"開頭. 就會被 nose 當成是測試例子, 所以其實在一個小程式中, 我們大可把測試例子跟主程式放在同一個檔案裡. 

但是當你都還不很確定你在幹什麼的時候, 我建議還是將測試例子跟主程式分開. 這麼做除了程式不容易搞混之外, 在切換檔案時, 還可以順便切換撰寫程式與撰寫測試例子時的不同 MindSet.

<span style="font-weight:bold;">
測試驅動</span>
那麼如果我們想改寫 hello 函式, 好讓它可以用法語"bonjour"打招呼, 我們該怎麼辦? 
記得"測試先行", 考慮加上一個新的測試例子, 而不影響原本的功能吧!

加入的測試例子:

```
>
>     def test_bonjour():
>         abc = Hello('bonjour')
>         assert "bonjour" in abc.render()
```

接著要做的就是再跑一次 nosetests, 看到這個新的例子跟我們報告錯誤了. OK, 那就開始修改 hello 函式吧![註2]

<span style="font-weight:bold;">
其他的測試</span>
nose 支援的測試的方式琳瑯滿目, 可以使用 "nosetests -h" 命令來查看支援的項目.

例如另外一個常用的測試方式是使用 doctest:
`nosetests --with-doctest`

那麼 doctest 是什麼樣的測試方式? 
又該怎麼使用 doctest 呢? 嘿嘿, 4月 [OSDC.tw 07](http://osdc.tw/2007/02/post_7.html) 再開講囉:D

====

我知道這個工具已經快半年了, 到今天才有時間, 勇氣真的下去嘗試.
讓我白白錯過這樣好用的工具這麼久, 應該怪在 nose 太少文件可以參考的頭上吧?
乾脆自己來寫個"三步驟使用 nose 開始測試"的簡易文件好了.

註1: 這篇文章不講怎麼寫 python 程式, 這部份請自理:P
註2: 同註1, 建議妳逛逛 [www.python.org.tw](http://www.python.org.tw) 可以看到更多參考資料
