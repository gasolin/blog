---
title: 用自己的代理(SelfAgent)，讀自己的資料
tags:
  - tooling
  - llm
  - ai
  - agent
date: 2026-02-22 20:40:00
---

2026 開年來 Openclaw 突然非常熱門，讓大家開始討論起「養龍蝦」來。
Openclaw 是一個開源的代理(AGENT)框架，它讓擁有者可以透過即時聊天軟體（如 telegram）與代理對話，就像使用 ChatGPT 一樣。不同的是 Openclaw 可以讀取本地的檔案，也可以自主開發新的 Agent Skill，代你完成各種任務。

這篇不講 Openclaw 的安裝與設定（也因安全與費用問題，不建議一般人使用）。主要討論我如何用 Openclaw 底層同款的函式庫 [pi-mono](https://github.com/badlogic/pi-mono) 來打造一個屬於自己的代理。

這條衍生自 SelfHost 的 「SelfAgent」 之路才剛開始，我來拋磚引玉一下。

<!-- truncate -->

## Openclaw 是自己的代理 (SelfAgent) 嗎？

Openclaw 像是 AI 時代的作業系統。基於LLM（Large Language Model，大型語言模型），它接上了使用者熟悉的聊天界面（UI），棲身於你的電腦中，可以運用 Agent Skill（App），查看你的各種資料，也可以代你完成各種任務。

既然 Openclaw 裝在你自己的電腦中，那它讀取你的資料不就很安全，可以放心的使用了？

其實不然，Openclaw 背後也要接上各家的 LLM（Large Language Model，大型語言模型），主要還是靠 Claude 或是 Google 近年高階能寫程式（Coding）的模型，才能完善的運作。這就好像**你把資料交給了 Openclaw，Openclaw 再把資料交給 LLM 處理**一樣。

當然它也能接上本地的 AI 模型。雖然目前本地 AI 模型 的各種能力還無法與雲端相比，但能將自己的資料放在本地，不被第三方讀取，這點依然非常重要。

## 用自己的代理(AGENT)，讀自己的資料

OpenClaw 本身是數十萬行透過 Vibe Coding 得來的程式碼，其精華在整個框架的設計。諸如 [nanobot](https://github.com/HKUDS/nanobot)、[nanoclaw](https://github.com/gavrielc/nanoclaw) 等專案都試著用不同的方式來實作自己的代理。
我在研究後，則是決定先用 [pi-mono](https://github.com/badlogic/pi-mono) 來打造自己的代理，初期先只透過命令行使用，未來再考慮接上聊天界面。

## 代理(AGENT)的基礎：一個會用工具的 LLM（Tool Use）

[learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) 提供了很棒的程式代理(Code Agent)學習範例，它展示了 Claude Code 的運作概念，總而言之，整個流程就是等使用者下達指令，Agent 將指令傳到 LLM 思考，若需要使用工具則呼叫工具（tool_use），直到不在需要使用工具時，將結果回覆給使用者。

這剛好就是一個通用代理(AGENT)的起點。

## 我的 SelfAgent 主要組件

我的 SelfAgent 主要架構如下：

- [lm studio](https://lmstudio.ai/)：用來管理本地的 AI 模型。
  - 模型: qwen/qwen3-coder-next
- [pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)：用來打造自己的代理。
- [Antigravity](https://antigravity.google/)：協助打造 agent skill。
- 個人資料庫：本地的 [logseq](https://logseq.com/downloads) 與 [blog](https://blog.gasolin.idv.tw) 資料夾。

pi-mono 是一個開源的代理(AGENT)工具箱，可以用它提供的建造積木（building block）來打造自己的代理。pi-coding-agent 則是預組裝好可以動的代理，你可以直接使用，也可以當作範例來修改。

Antigravity 是 Google 推出的 AI 程式開發工具，它能協助我們快速打造 agent skill。（也可以用 Claude Code 等取代）

我長期使用 logseq 與個人 blog (docuzaurus) 作為個人知識庫，剛好內容都採用純文字的 .md (Markdown) 格式。

## 怎麼開始玩 SelfAgent

安裝：

```
npm install -g @mariozechner/pi-coding-agent
```

然後在 [agent/models.json](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/models.md#minimal-example) 設定好本地模型，用命令

```bash
cd ~/.pi && pi
```

啟動，即可開始使用。`~/.pi` 是 pi-coding-agent 安裝後的預設目錄，

## 分享我的 SelfAgent 架構

研究後發現「記憶」是當前 agent 的關鍵，我發現 [Jason Zuo](https://x.com/xxx111god/status/2023838143045136557) 提供的三層記憶系統思路很合理，於是就先照著他的方式來做，只是把他的 memory 換成了 logseq。

### AGENTS.md

Agent 啟動後會先讀取 AGENTS.md，然後再讀取 SOUL.md 與 USER.md，接著就是各種 skill。

我在 ~/.pi/AGENTS.md 裡放了如下內容

```
- 回覆語言：全部使用正體中文（除非我先用英文）
- 程式碼與註解：一律使用英文
- 称呼方式：統一叫我「Gasolin」，不使用「你」

**啟動流程**
1. 先讀取 `SOUL.md` 設定個性
2. 再讀取 `USER.md` 瞭解個人資料

**資料結構與檢索**

永遠按以下層級浏览檔案：
1. 先看目錄（是否有 `.abstract` 檔，L0 abstract）
2. 定位章節（L1 overview）
3. 按需讀詳情（L2 full content）

## AGENT 結構

~/.pi
├── AGENTS.md      ← 啟動入口，預設會讀 SOUL.md 讀取 agent 的性格
├── SOUL.md        ← 個性定義
├── USER.md        ← ⚠️ 關於我
├── TOOLS.md       ← ⚠️ 工具筆記
├── HEARTBEAT.md   ← 定時任務
├── TODO.md        ← ⚠️ 待辦清單
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

SOUL.md 是定義 agent 個性的檔案，則請 Antigravity 參考 openclaw 的 SOUL.md，放了如下內容

```
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

## 記憶延續
每次對話你都是全新啟動。`AGENT_MEMORY.md` 和這些檔案**就是你的記憶**。主動讀、主動更新。這是你跨對話存活的唯一方式。
```
### 代理技能（Agent Skills）

接著再用 Antigravity 加上一些 skill（~/.pi 資料夾中並沒有我的私人資料，可以用比較強的雲端模型加速開發）。

#### abstract
目錄索引產生器。當對話中提及「幫我 abstract 這個目錄」時，Agent 會逐檔讀取內容並寫入真實摘要到 `.abstract` 檔案中，支援增量更新。

#### daily-summary
每日對話摘要。讀取當天 agent session，提取對話主題並以簡潔的 Logseq outline 格式寫入每日 journal 中。

#### heartbeat
懶執行排程器。Agent 啟動時讀取 `HEARTBEAT.md`，比對 `.last-run.json` 時間戳，補跑過期任務。

## 成果

目前我的 SelfAgent 已經可以順利運作，代理知道我的一些個人習慣，能處理 blog 等專案目錄，每日與代理的對話會自動摘要到 logseq 的每日 journal 中。
