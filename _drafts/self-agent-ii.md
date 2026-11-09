---
title: 用自己的代理（SelfAgent），讀自己的資料 II
tags:
  - tooling
  - llm
  - ai
  - agent
date: 2026-11-09 17:00:00
---

去年就開始試著使用本地 AI，並組合運用[ Ollama + Cherry Studio, Pi Agent 跑本地對話、MCP、Skill](life/self-agent) 等。今年中已從 LM studio 遷移到 olmx，並透過 Telegram + Hermes Agent 可以較順暢的使用一些本地 LLM 做事。

olmx 0.7 在模型 > Apply Optimal Settings 中可以選其他人分享的設定，通常比預設的通用設定好非常多。同樣跑 Qwen3.8-Flash-Next-oQ4e-mtp 4k，用別人調校的跑到 PP 700.2 · TG 50.1 tok/s。自己原來調的 PP 288.8 · TG 13.7 tok/s，已達到完全堪用的速度。
