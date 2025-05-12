---
title: 使用 Ollama 與 Holesail 遠端運行本地模型
tags:
  - tools, ollama, holepunch
date: 2025-05-12 11:41:46
---

### Ollama 介紹

Ollama 是一款相當方便使用的本地大模型命令行工具，使用者可以透過 Ollama，使用一些簡單的命令，就能在本地下載與執行語言模型。

可以到 https://ollama.com/ 下載來安裝

> 在 Mac 上用 `brew install ollama` 命令來安裝的話，預設開機不會自動執行，需用命令 `ollama serve` 執行。用瀏覽器開啟 http://127.0.0.1:11434 可以看到 `ollama is running` 字樣。`11434` 是 Ollama 預設的 port，等下會用到。

Ollama 網站裡 https://ollama.com/search 可以找到各種可以在本地運行的模型，
如要安裝近期較佳的本地模型如 gemma3 或 qwen3，可運行命令如 `ollama run gemma3`，若本地沒有此模型，就會先自動下載 Google 的 gemma3 模型，下載完後自動在本機執行。

![Imgur](https://imgur.com/nVxipOu.png)

(選擇想要使用的模型後，在右上角可以直接複製對應的命令)

用命令 `ollama list` 即可查看已安裝的模型：

```
NAME                       ID              SIZE      MODIFIED     
qwen2.5-coder:7b           2b0496514337    4.7 GB    2 months ago    
nomic-embed-text:latest    0a109f422b47    274 MB    4 months ago    
```

前面 `NAME` 表示下載的模型名稱，`SIZE` 表示模型佔用的空間。

用命令 `ollama --help` 可以查看其他支援的命令。

### 如何挑適合的大模型

> 1. 同一代的本地模型數字越大，能力越強
> 2. 剩餘多大的 RAM -> 跑多少 B 的模型

一般而言，在同一架構或系列的本地模型中，參數規模（通常以 B 為單位表示）較大的模型往往擁有更強的理解和生成能力。**在執行順暢的前提下盡量跑大一點的模型**，最終得到的效果會更出色。

在選擇模型時，**機器剩餘的 RAM 容量**是很重要的限制。模型的運行需要佔用大量的系統記憶體（RAM）。模型的參數規模越大，所需的 RAM 也越高。因此機器剩餘的 RAM 大小，直接影響可以跑得動的本地模型。

簡單的選擇方法是看你的系統在跑作業系統和開啟各種服務後，還剩餘多大的 RAM，就可以跑多少 B 的模型。
一種特別狀況是特別標注使用 4 bit 採樣的本地模型，可以跑 RAM x2 倍大小的模型。

就自己的使用經驗，使用 Mac M2 + 16GB RAM 的機型，標示小於 8B 的模型大都可以跑的順，再大的話執行時就比較容易出現系統卡頓等問題，影響使用體驗。

### 用 Holesail 遠端跑本地模型

要順暢的使用本地模型，除了在本機上使用小一點的本地模型跑之外，還有一種選擇，就是將較大的本地模型跑在更強勁的桌機上，遠端連線回去使用，但是傳統的遠端連線設定較麻煩，需要處理各種網路設定後才能使用。

我使用 holesail 這個點對點的新工具，它可以**將遠端機器的 port 對應到本地機器的某個 port**，從而得到類似在本地執行的效果（底層也是使用 [holepunch](https://holepunch.to/) 的技術）。

可以透過命令 `npm install -g holesail` 安裝 holesail。

在桌機上：

執行 Ollama 服務後，使用命令

```
$ holesail --live 11434 --host localhost
```

`11434` 是 Ollama 預設的 port，這命令的作用是通知 holesail 將 port `11434` 映射出去。
這時 holesail 會回報一個雜湊碼（hashcode），將這個雜湊碼透過備忘錄等工具記下來，將在另一台機器上使用。


在想使用 Ollama 服務的本地機器上，輸入以下命令

```
holesail [hashcode]
```

會回報另一個 port (ex: 8989)，這時 holesail 已經將遠端主機的 port `11434` 上的服務，映射到本地 port `8989` 上，若用瀏覽器開啟網址 http://127.0.0.1:8989 ，可以看到 `ollama is running` 字樣，表示跑在桌機上的 Ollama 已經透過 port 8989 得以模擬在本機執行。

![Imgur](https://imgur.com/zuiATTB.png)

### 透過 Cherry Studio 使用本地模型

Ollama 提供了命令行介面，但是一般使用時還是用**類似 ChatGPT 的介面**更方便。
目前我比較常用的是 `Cherry Studio` 這套工具（透過 `brew cherry-studio` 安裝），可以方便的在各家線上大模型與本地模型間切換，也提供許多預設的助手類型可供選擇(或再進一步修改)。

到`設定 > 模型提供者 > Ollama`，將 `API 主機地址` 改為 `http://127.0.0.1:8989/v1/`，再選擇想使用的模型，如此一來就可以在本機上正常使用桌機上的本地模型了。

![Imgur](https://imgur.com/UGfMK4i.png)
