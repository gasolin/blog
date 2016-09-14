---
title: Virtualenv 簡單入門
tags:
  - python
date: 2011-03-26 12:57:12
---

**功用**

使用 [Virtualenv](http://pypi.python.org/pypi/virtualenv) 可以讓你預先建立一個虛擬環境，在虛擬環境中開發 Python 程式，可以保持 Python path 乾淨，並減少因為機器上需要同時支援不同版本函式庫，造成各函式庫彼此之間相依性的困擾。

而且使用虛擬環境後，到時要將環境轉移到別台機器上，也減少很多設定上的問題。

**安裝**

> $ easy_install virtualenv
**設定環境**

> $ virtualenv --no-site-packages [dev_place]
即建立一個名為 [dev_place] 的資料夾（中括號裡的名稱自行填寫取代）。

**切換到虛擬環境**

進入 [dev_place] 目錄，輸入命令：

> $ source bin/activate
若看到路徑提示前多了個（[dev_place]）符號，即表示已經進入了虛擬環境。

這時我們可以使用預設提供的 easy_install 工具安裝要使用的函式庫、或是安裝各種 Python 程式。

安裝的函式庫會被放到 [dev_place]/lib/Python[版本]/site-packages/ 目錄中，跟一般的 Python 函式庫配置方式相似。

**離開虛擬環境**

要離開虛擬環境，只需輸入命令：

> $ deactivate
即可回到預設的命令行狀態。

**其他操作**

如果你的電腦上有裝多個 Python 版本，在下 virtualenv 命令時加上「--python=python[版本] 」當作參數，例如建立2.6版的虛擬環境命令為

> $ virtualenv --no-site-packages [dev_place] --python=python2.6
也可以建立出不同版本的 Python 虛擬環境，讓你可以更容易地在多個 Python 版本間做測試。

其他使用方法可以輸入「virtualenv --help」參考印出的說明。

**Python3**

目前 virtualenv 官方還不支援 Python 3.x, 但是有開發中版本可用，可使用Mercural下載來安裝

> # hg clone https://bitbucket.org/brandon/virtualenv3
> # cd virtualenv3
> # python3 setup.py install