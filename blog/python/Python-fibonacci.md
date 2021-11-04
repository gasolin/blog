---
title: Python + fibonacci
tags:
  - python
date: 2006-09-07 11:17:42
---

網路上找到 [Algorithms](http://www.cse.ucsd.edu/users/dasgupta/mcgrawhill/) 一書, 由於書上都是虛擬碼, 試試看用 Python 來做點練習

下面是序章 [Prologue](http://www.cse.ucsd.edu/users/dasgupta/mcgrawhill/chap0.pdf) 的例子:

目標:
用Python 實現 fibonacci 數列
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 .....]

Python 程式碼:

```
def Fib1(n):
   """遞迴函式"""
   if n==0:
       return 0
   elif n==1:
       return 1
   else:
       return Fib1(n-1) + Fib1(n-2)

def Fib2(n):
    """用列表暫存結果"""
    f = [0]*(n+1)
    f[1] = 1
    if n<2:
        return f[n]
    else:
        for i in xrange(2,n+1):
            f[i]=f[i-1]+f[i-2]
        return f[n],f

if __name__=="__main__":
    """試算結果"""
    import time
    testtimes = 3

    for i in xrange(testtimes):
        begintime =  time.clock()
        print Fib1(30)
        endtime = time.clock()
        print endtime - begintime

    for i in xrange(testtimes):
        begintime =  time.clock()
        print Fib2(30)
        endtime = time.clock()
        print endtime - begintime
```

執行結果:
832040
4.24318425945 (Fib1)
832040
7.90603275007e-005 (Fib2)
