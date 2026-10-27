---
title: SelfAgent 2026：從 pi-mono 到 Hermes Agent + 本地 Qwen3.8
tags:
  - tooling
  - llm
  - ai
  - agent
  - self-agent
date: 2026-10-26 20:00:00
---

上一篇[《用自己的代理（SelfAgent），讀自己的資料》](life/self-agent.md)分享了我用 pi-mono 打造本地代理的歷程。那時候的工具鏈是 LM Studio + Qwen3-Coder + pi-coding-agent，主要透過命令列操作。

經過幾個月的使用與調整，整套架構已經大幅演進。這篇文章記錄從 pi-mono 遷移到 Hermes Agent + oMLX + Qwen3.8 + Telegram 的過程。

<!-- truncate -->

## 為什麼換掉 pi-mono？

pi-mono 是很好的學習框架，它能讓我理解 Agent 的運作原理。但實際日常使用下來，幾個痛點逐漸浮現：

- **沒有原生聊天介面**：只能在終端機操作，想在外頭用就要開 SSH
- **記憶系統要自己維護**：AGENT_MEMORY.md、SESSION-STATE.md、insights/ 這些檔案要手動整理
- **Skill 開發門檻高**：每個 Skill 都要自己寫、自己除錯
- **升級容易壞**：pi-mono 還在快速迭代中，版本之間常有 breaking change

我需要的是：**開機即用的 Agent，可以從手機操控，記憶自動維護，Skill 生態豐富。**

## 工具鏈換血：LM Studio → oMLX

四月時把本地的 LLM 服務從 LM Studio 換成了 [oMLX](https://github.com/MLX-OmniLM/oMLX)，一週下來最明顯的差異：

- **Token 速度更快**：同樣的 Qwen 模型，oMLX 的 MLX 編譯在 Mac 上跑得更順
- **內建 Web Chat UI**：不用再另外架 UI，開機就能用
- **更輕量**：資源佔用比 LM Studio 小

搭配 Tailscale 把 Mac Studio 的 port 暴露到筆電，就能在外頭連回家裡的 AI 服務。之前用 holesail 做 port forward，現在擁抱 UI，直接裝 Tailscale 更省心。

## 換模型：Qwen3.8-27B

十月時測了兩個 Qwen3.8-27B 的量化版本：

| 模型 | 結果 |
|---|---|
| Solstice-AI Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NM-DAU-mlx-oQ8e-1M | one shot 很快，但 agent follow work 基本沒有，不太適合 |
| **Jundot/Qwen3.8-27B-oQ8e-mtp** | 效果明顯好很多，agent 任務跟得起來 |

換成 `Jundot/Qwen3.8-27B-oQ8e-mtp` 之後，透過 Telegram 跑命令變得相當順，達到可用的水準——發訊息後去做別的事，等 5-10 分鐘就會反應。

已經拿來整理 Obsidian 檔案、修改 Blog post、接好 todomd 等。另外加入了一些快速翻譯的 shortcut：`en:`、`es:`、`解釋: [url]`。

## 從 pi-mono 到 Hermes Agent

九月底把 Hermes Agent 裝到 Mac Studio 上。初期遇到幾個問題：

- **升級搞壞了**：Hermes 更新後某些功能掛掉，教訓是 staging 環境別亂升
- **Thinking 太慢**：開「思考」模式每個動作要等幾分鐘，先關掉看看效果
- **Buzz 不穩定**：拉了 Buzz 進來但有抽風的時候

穩定下來之後，主要做了這些設定：

1. **Telegram 連線**：設定 Mac Studio 上的 Hermes + Telegram，在外頭也能操控
2. **安裝實用 Skill**：
   - `defuddle`：web 內容轉 Markdown，讀文章超方便
   - `caveman`：壓縮回應長度，省 token
   - `humanizer`：把 AI 味去掉，文字更自然
3. **Mnemosyne 記憶層**：裝上本地 SQLite 記憶（mnemosyne-oss/mnemosyne），踩了個坑——0.7.4 有 bug（構造必掛、0 工具），降到 0.7.3 + core 4.0.0b3 才正常。嵌入模型改用 `BAAI/bge-small-zh-v1.5`，中文語意召回顯著改善。
4. **知識庫搬遷：Logseq → Obsidian**：九月開始測試 Obsidian，裝了 calendar、kanban、operon 三個外掛。十月配合手機端（Pixel 10）裝了 Syncthing 做雙向同步——Mac 端用 `syncthing-app`，手機端用 [syncthing-android](https://github.com/researchxxl/syncthing-android)。Obsidian 的純 Markdown 格式讓 Hermes Agent 讀寫更直接，也讓我習慣了 Obsidian 的區塊連結，目前主要知識庫已經遷移過去。

## 目前的工作方式

```
手機 Telegram
    ↓
Hermes Agent (Mac Studio)
    ├── oMLX + Qwen3.8-27B (本地推理)
    ├── Mnemosyne (SQLite 記憶)
    ├── Obsidian (個人知識庫)
    ├── Blog (Docusaurus)
    └── Skills (defuddle, caveman, humanizer, todomd, ...)
```

實際使用場景：

- **在外頭**：Telegram 發訊息 → Hermes 讀檔、改 Blog、查 TODO → 等幾分鐘收到回覆
- **ComfyUI 生圖**：直接在 Telegram 講 prompt，Hermes 自己呼叫 ComfyUI 生圖，再透過 Telegram 傳回來
- **日常筆記**：Obsidian 的 Journal 和 Page 都能直接讓 Agent 讀寫

### ComfyUI 生圖：Telegram 下達，本機渲染

在 Mac Studio 上跑 ComfyUI（Qwen-Image-2.1 int8 模型），Hermes 可以直接透過 HTTP API 呼叫它生圖。流程：

1. Telegram 發 prompt（例如「一張賽博朋克風格的城市夜景，1152x1728」）
2. Hermes 組裝 workflow JSON，POST 到 `localhost:8188/prompt`
3. 等渲染完成（1152x1728 約 22 分鐘，500x750 測試圖約 5 分鐘）
4. 讀取 `~/Documents/ComfyUI/output/` 的最新 PNG，透過 Telegram 傳回

```
Telegram: 「生一張 500x750 測試圖，武僧拿禪杖」
    ↓
Hermes → ComfyUI API → Qwen-2.1 渲染 ~5min
    ↓
Telegram: [圖片]
```

大圖要等 20 多分鐘，所以日常先跑小尺寸確認構圖和 prompt 方向，滿意了再跑全尺寸。本地 128GB RAM + MPS 加速，不用花 API 錢，也不用擔心 prompt 內容。

### 翻譯快捷鍵：把前綴變成反射動作

最順手的日常功能之一是**前綴翻譯**。在 Hermes 裡定義了一個 `quick-translate` skill，約定訊息開頭的前綴代表目標語言：

| 前綴 | 目標 |
|---|---|
| `en:` | 英文 |
| `es:` | 西班牙文 |
| `tw:` | 正體中文 |

用法就是在 Telegram 輸入：

```
en: 今天去划船了
```

Hermes 會直接回傳英文翻譯，沒有多餘的「好的，翻譯如下」。因為本地 Qwen3.8 處理速度夠快，翻譯體驗接近即時。

這比開網頁翻譯方便的地方在於：**上下文是連續的**。我可以把一整段文章貼進去，它會保留段落結構、語氣、標點。翻譯完接著問問題，它記得原文是什麼。

最棒的是：**這個 skill 是我不用自己寫的**。Hermes 觀察到我反覆用前綴要求翻譯，自動把它提取成一個 skill 存下來。之後只要前綴一出現，它就自動套用規則。同樣的方式，「解釋」skill 也是自動提取的——我幾次貼 URL 請它解釋，它就把我的偏好（先結論、術語類比、長度控制）學成了固定行為。

### 客製化「解釋」skill：貼 URL 就懂

另一個常用的是 `解釋:` 快捷鍵。貼一個 URL 過去：

```
解釋: https://arxiv.org/abs/2501.12345
```

Hermes 會用 defuddle 抓頁面內容，然後用繁體中文解釋重點。這個 skill 也是自動提取的，不是通用摘要，而是根據我之前的互動學出來的：

- **先講結論**，再講方法
- **技術術語**要解釋，用我懂的類比
- **保留原文的結構**，不要打成一段濃縮
- **長度控制在** 3-5 段，不要超過一屏

這套工作方式的好處是：**思考的門檻變低了**。看到不懂的東西，不用切換到瀏覽器開新分頁，直接在對話裡問。Agent 的記憶層會記住我之前問過什麼，所以可以累積理解。

### CodeGraph：把程式碼變成可查詢的知識圖譜

十月開始實驗 [CodeGraph](https://github.com/colbymchenry/codegraph)——一個輕量的本地程式碼分析工具，用 SQLite + FTS 把程式碼的符號（function、class、variable）和引用關係建成交叉索引。

跟 grep 的差別在於：grep 找的是**文字**，CodeGraph 找的是**語意**。問「誰呼叫了 `parseOrder`？」不用猜 pattern，直接查呼叫圖。

實際用途：

- **改 POStand 時**：改一個 function 之前，先查它的 caller graph，避免改完才發現三個地方都依賴
- **跨 repo 追蹤**：Blog 和 POStand 之間有共用的 theme token 邏輯，CodeGraph 一次掃描就能畫出依賴
- **AI 輔助重構**：把 caller graph 餵給本地 Qwen3.8，讓它建議哪些地方可以合併、哪些變數可以內联

安裝很簡單：

```bash
# 初始化（掃描 repo，建 SQLite 索引）
codegraph init /path/to/repo

# 查符號
codegraph query "parseOrder"

# 查呼叫者
codegraph callers parseOrder

# 查被呼叫者
codegraph callees parseOrder
```

索引是增量更新的，改完檔案跑一次 `codegraph sync` 就行。100 萬行以下的 repo 掃描都在幾秒內完成，對本地開發機來說幾乎零成本。

這個工具最大的價值不是替代 IDE——而是讓**本地 LLM 能拿到結構化的程式碼理解**，而不是每次重新讀整個檔案。配合 Hermes Agent 的 read_file + terminal，CodeGraph 變成了一層「程式碼語意快取」。

## 與 pi-mono 的比較

| | pi-mono | Hermes Agent |
|---|---|---|
| 介面 | 終端機 CLI | Telegram / CLI / Desktop |
| 記憶 | 手動維護 Markdown | Mnemosyne (SQLite) + 內建 memory |
| Skill | 自己寫 | 內建 + 社群生態 |
| 本地模型 | 支援 | 支援 (oMLX) |
| 穩定性 | 快速迭代，常壞 | 相對穩定 |
| 學習價值 | 高（理解原理） | 中（即戰力優先） |

pi-mono 教會我 Agent 的運作原理，Hermes 則是實戰工具。兩者不衝突——理解原理之後，才能挑到適合自己的框架。

## 下一步

- **隱私**：本地 Qwen3.8 處理私密資料（Obsidian、個人筆記），雲端模型處理程式開發
- **Skill 擴充**：把更多日常工作流包裝成 Skill
- **多設備**：目前 Mac Studio 是主力，未來考慮接手機（Pixel 10）做備援

這套 SelfAgent 從 pi-mono 的實驗性專案，到 Hermes + Telegram 的日常工具，花了我幾個月慢慢調整。核心哲學不變：**用自己的代理，讀自己的資料。**
