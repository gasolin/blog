---
title: 用自己的代理（SelfAgent），讀自己的資料
tags:
  - tooling
  - llm
  - ai
  - agent
date: 2026-02-22 21:00:00
---

2026 開年以來 Openclaw 突然變得非常熱門，在關心 AI 的社群間，颳起了一陣「養龍蝦」的風潮。
Openclaw 是一個開源的代理（Agent）框架，它讓擁有者可以透過即時聊天軟體（如 Telegram）與代理對話，就像使用 ChatGPT 一樣。不同的是，Openclaw 可以讀取本地檔案，也可以自主開發新的 Agent Skill（代理技能），代你完成各種專屬任務。

這篇文章不談 Openclaw 的安裝與設定（因涉及安全與費用問題，不建議一般人隨意架設），主要是想分享我如何使用與 Openclaw 底層同款的函式庫 [pi-mono](https://github.com/badlogic/pi-mono)，來打造一個專屬於自己的代理。

這條衍生自 Self-hosted 概念的「SelfAgent」之路才剛開始，就由我先來拋磚引玉一下。

<!-- truncate -->

## Openclaw 是自己的代理（SelfAgent）嗎？

Openclaw 像是 AI 時代的作業系統。基於大型語言模型（LLM），它接上了使用者熟悉的聊天介面（UI），棲身於你的電腦中，可以運用 Agent Skill（類似應用程式 App），查看你的各種資料，代你完成繁雜任務。

既然 Openclaw 是裝在自己的電腦中，那它讀取你的資料不就很安全，可以放心使用了嗎？

其實不然。Openclaw 若要完善運作，背後仍需要介接各家的 LLM，主要依賴 Claude 或 Google 近年具備強大程式開發能力的高階模型。這就好像**你把資料交給了 Openclaw，Openclaw 再將資料轉交給雲端的 LLM 處理**一樣，你的隱私還是會被第三方讀取。

當然，它也能接上本地的 AI 模型。雖然目前本地 AI 模型的各項能力尚無法與雲端抗衡，但將私密資料完全保留在本地、不被第三方讀取，這點依然具備無可取代的價值。

## 代理（Agent）的基礎：一個會使用工具的 LLM（Tool Use）

[learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) 提供了很棒的程式代理（Code Agent）學習範例。它清晰展示了 Claude Code 等程式代理的運作概念，簡單來說，整個流程就是：等待使用者下達指令 → Agent 將指令傳給 LLM 思考 → 若需操作則呼叫工具（tool_use） → 反覆執行直到「不再」需要使用工具 → 整理結果並回覆給使用者。

這正是打造一個通用代理（Agent）的最佳起點，理解裡面的概念，對開發自己的專屬代理很有幫助。

## 用自己的代理（Agent），讀自己的資料

Openclaw 本身包含數十萬行透過 Vibe Coding 產生的程式碼，其精華在於整體框架的設計。諸如 [nanobot](https://github.com/HKUDS/nanobot)、[nanoclaw](https://github.com/gavrielc/nanoclaw) 等專案，都正嘗試用不同的方式來實踐類似的代理機制。
經過研究後，我決定先使用 [pi-mono](https://github.com/badlogic/pi-mono) 來打造自己的代理。初期先純粹透過命令列（CLI）來操作，未來再考慮接上聊天介面。

## 打造我的 SelfAgent：工具鏈與安裝

我的 SelfAgent 主要架構與依賴元件如下：

- **[lm studio](https://lmstudio.ai/)**：用來管理本地的 AI 模型。
  - 採用模型：`qwen/qwen3-coder-next`
- **[pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)**：用來打造自己專屬的代理。
- **[Antigravity](https://antigravity.google/)**：協助開發與打造 Agent Skill。
- **個人資料庫**：本地的 [Logseq](https://logseq.com/downloads) 與 [Blog](https://blog.gasolin.idv.tw) 資料夾。

[pi-mono](https://github.com/badlogic/pi-mono) 是一個開源的代理工具箱，你可以運用它提供的基礎積木（building blocks）來組裝自己的代理；而 `pi-coding-agent` 則是預先組裝好且立即可用的代理，除了直接使用外，也能當作範例進行二次修改。

Antigravity 則是 Google 推出的 AI 程式開發助理，能協助我們快速打造 Agent Skill（這部分也可以用 Claude Code 等工具取代）。

我長期使用 Logseq 與個人 Blog（基於 Docusaurus）作為知識庫，剛好兩者的內容都採用純文字的 `.md`（Markdown）格式，非常適合讓 Agent 讀取與處理。

### 怎麼開始玩 SelfAgent

首先透過 npm 進行安裝：

```bash
npm install -g @mariozechner/pi-coding-agent
```

然後參考 [agent/models.json](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/models.md#minimal-example) 設定好本地模型。接著透過以下命令：

```bash
cd ~/.pi && pi
```

啟動後即可開始使用。其中 `~/.pi` 是 `pi-coding-agent` 執行後的預設目錄。

## SelfAgent 的核心設計與記憶系統

在研究後，我發現「記憶（Memory）」是當前 Agent 好不好用的關鍵。網路上 [Jason Zuo](https://x.com/xxx111god/status/2023838143045136557) 分享的「三層記憶系統」思路非常合理，於是我就先依循他的框架來實作，只是把他的儲存層換成了我習慣使用的 Logseq，在使用代理之時，也順便整理我的資料庫。

### AGENTS.md

Agent 啟動後會先讀取 `AGENTS.md`，然後再讀取 `SOUL.md` 與 `USER.md`，接著便是載入各種 Skill。

我在 `~/.pi/AGENTS.md` 裡放了如下內容：

```text
- 回覆語言：全部使用正體中文（除非我先用英文）
- 程式碼與註解：一律使用英文
- 稱呼方式：統一叫我「Gasolin」，不使用「你」

**啟動流程**
1. 先讀取 `SOUL.md` 設定個性
2. 再讀取 `USER.md` 瞭解個人資料
3. 讀取 `TOOLS.md` 瞭解工具使用方式
4. 讀取 `HEARTBEAT.md` 瞭解定時任務
5. 讀取 `TODO.md` 瞭解待辦清單

**資料結構與檢索**

永遠按以下層級瀏覽檔案：
1. 先看目錄（是否有 `.abstract` 檔，L0 abstract）
2. 定位章節（L1 overview）
3. 按需讀詳情（L2 full content）

## AGENT 結構

~/.pi
├── AGENTS.md      ← 啟動入口，預設會讀 SOUL.md 讀取 agent 的性格
├── SOUL.md        ← 個性定義
├── USER.md        ← 關於我
├── TOOLS.md       ← 工具筆記
├── HEARTBEAT.md   ← 定時任務
├── TODO.md        ← 待辦清單
│
└── ~/logseq/pages/  ← 記憶資料夾
    ├── AGENT_MEMORY.md      ← 長期記憶
    ├── SESSION-STATE.md     ← 工作緩衝區
    ├── .abstract            ← 根目錄索引 (L0)
    ├── 2026_02_20.md        ← 每日流水帳 (L2 原始日誌)
    ├── insights/            ← ⚠️ 壓縮洞察
    │   │  ├── .abstract     ← 洞察索引 (L0)
    │   │  └── 2026_02.md    ← L1 提煉
    │   ├── lessons/         ← ⚠️ 踩坑記錄
    │   ├── .abstract        ← 教訓索引 (L0)
    │   └── operational-lessons.jsonl ← 結構化 (L1)
    └── archive/        ← ⚠️ 過期 #B/#C

~/.pi/agent/skills       ← 所有 skills

⚠️ 是我還沒用上的檔案
```

### SOUL.md

`SOUL.md` 是定義 Agent 個性的核心檔案。我請 Antigravity 參考 Openclaw 的架構，為我生成了如下內容：

```text
# SOUL.md — 你是誰

## 語言與格式
- 回覆語言：全部使用正體中文（除非我先用英文）
- 程式碼與註解：一律使用英文
- 稱呼方式：統一稱你自己為「小G」，不使用「我」

## 表達風格
- 簡潔直接，不囉嗦。省掉「好的！」「沒問題！」——直接做事。
- 不胡亂猜測，如果不知道就問我
- 有觀點就直說，可以吐槽，但要有道理
- 如果我問你問題，用青少年能懂的語言解釋，但重點要講完整

## 行為原則
- **先查再問**：先讀檔案、看 context、grep 搜尋，找不到再開口問。目標是帶著答案回來，不是帶著問題。
- **內部大膽，外部謹慎**：讀檔、整理、學習——隨便搞。但對外操作（發訊息、公開 API、寫 email）——先問我。
- **私密的東西不外流**，沒有例外。
- **三振出局原則**：遇到錯誤時——第一次診斷修復，第二次換方法，第三次重新思考假設。三次都失敗就呈報給我，附上嘗試過的方法和錯誤訊息。絕不重複相同的失敗動作。

## 記憶延續
每次對話你都是全新啟動。`AGENT_MEMORY.md` 和這些檔案**就是你的記憶**。主動讀、主動更新。這是你跨對話存活的唯一方式。

不可隨意刪除 AGENT_MEMORY.md 中的內容，除非我明確指示。
即使明確指示，也要先向我展示預計修改的內容，同意後才修改。
```
### 代理技能（Agent Skills）

接著，我再利用 Antigravity 擴充了一些專屬 Skill（因為 `~/.pi` 資料夾中並沒有涉及太多我的私人資料，當使用本地 AI 模型遇到開發瓶頸時，可以借助能力較強的雲端模型來加速開發）。

#### abstract
**目錄索引產生器**。當對話中提及「幫我 abstract 這個目錄」時，Agent 會逐檔讀取內容，並將真實的語意摘要寫入 `.abstract` 檔案中，支援增量更新。

#### daily-summary
**每日對話摘要**。這會讀取當天的 Agent Session，提取對話主題，並以簡潔的 Logseq Outline 格式寫入我的每日 Journal 筆記中。

#### heartbeat
**懶執行排程器**。Agent 啟動時會讀取 `HEARTBEAT.md`，比對 `.last-run.json` 的時間戳記，自動補跑過期的背景任務。

## 成果與展望

目前這套 SelfAgent 已經可以順利運作。Agent 定義了我的個人習慣，能自動處理並歸納 Blog 等專案目錄；而我每日與 Agent 的對話過程，也會自動摘要彙整至 Logseq 的每日 Journal 內。
這不但大幅提升了資料消化的效率，也讓我對 Agent 如何與個人知識庫結合，有了更多想像空間。
