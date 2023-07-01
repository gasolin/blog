---
title: Python 3 超入門
tags:
  - python
date: 2023-06-27 11:30:31
---

上週在聚會中分享學習 [deeplearning.ai](https://www.deeplearning.ai/short-courses/) 推出的 ChatGPT 相關短課程的心得。（[簡報在此](https://gasolin.idv.tw/docs/events/presentation/#2023)），課程中為了介紹 ChatGPT API 的應用，使用了一些 Python 程式碼。由於預期聚會參與者對 Python 不熟悉，所以嘗試用 Google Colab 簡單的介紹 Python 3，希望能在幾分鐘內對 Python 程式的基本語法有個概念。

[Python 3 超入門](https://colab.research.google.com/drive/1WgODgZoY67w9Lmz6G2V-XBsqOKpY6YI_?usp=sharing) 互動式筆記在此。

<!-- truncate -->

- 現在大部分人用的是 Python 3.x 版本。Mac OS 有內建。
- Google Colab 是免費的線上工具，可以拿來互動執行 Python 語言（可以裝在自己電腦上的版本叫 [Jupyter](https://jupyter.org/))
- 更詳細的可以看小姐姐介紹 Python 語言為什麼適合程式入門 https://www.youtube.com/watch?v=2StGPegYHFM

## 第一個程式

```py
print("花蓮你好")
```

輸出結果：

`花蓮你好`

- print（列印）語句代表將括號中的內容印出到螢幕上。
- 有些關鍵字(keyword) 在 Python 語言中有特殊的意義，如 print, if, else, for, function, class... 此外其他都可以用中文（因為所有字元都使用 Unicode 編碼）

## 變數

```py
X = "花蓮"

print(X + "你好")
```

輸出結果：

`花蓮你好`

- 除了印出固定的字串，可以透過定義變數來改變印出的內容
- 和數學式一樣，左邊的是變數，= 符號右邊的是賦值
- Python 裡宣告變數只要依照直覺直接寫就行（許多程式語言要另外加各種關鍵字）
- 也可以用中文命名變數

```py
打招呼的對象 = "花蓮"

print(打招呼的對象 + "你好")
```

- 變數除了可以是文字之外、也可以是數字、True/False(是/否)、列表、和其他各種 Python 支援的格式。
- 等碰到再學

## 條件式執行


```py
if 條件成立:
  執行這邊的程式
else:
  執行條件不成立時的程式
```

- if..else (如果..否則) 是判斷執行條件的兩個關鍵字

範例：

```py
活動人數 = '10'
有下雨嗎 = True

print("參加本次活動的人數為 " + 活動人數 + " 人")

if (有下雨嗎):
  天氣 = "有雨 🌧️"
else:
  天氣 = "晴 ☀️"

print("今天天氣：" + 天氣)
```

輸出結果：

```
參加本次活動的人數為 10 人
今天天氣有雨 🌧️
```

## 函式

關鍵字 def

```py
def 哈囉(名字):
    print("你好" + 名字)

哈囉("花蓮溪 🚣‍♂️")
```

輸出結果：

`你好花蓮溪 🚣‍♂️`
