# 全球地球化学元素分布图谱：面向 AI Agent 的可复用科研 Skill

**决赛08_词元代理人队**（原 TEAM 0066） · AI4S Future ScienceSkills Hackathon · 气候与地球科学赛道

在线演示：<https://asimfish.github.io/global-geochemical-atlas-demo/> · Skill 仓库：<https://github.com/asimfish/global-geochemical-atlas-skill>

一张元素分布图只能告诉我们哪里高、哪里低，真正困难的是解释这些高值。GGA 先把多源公开地球化学数据变成可比较、可追溯的统一底座，再联合方法分层、地质背景、剖面对照与多期观测，把稳定的地质高背景和随工业活动变化的人为富集信号分开检验；值得继续追问的信号可直接进入 discovery_mode，完成选题、统计、文献核验、写作与排版。证据不足就如实报告缺口。

## 赛题与交付

赛题要求：自动采集岩石、土壤、沉积物、水体四类介质的元素含量、采样坐标、地质背景与分析方法信息，完成单位统一、空间匹配、质量控制与来源追溯，按元素 / 区域 / 地质单元 / 样品类型成图并识别异常富集与亏损区域。Skill 输出为可交互元素分布地图、标准化地球化学数据库、数据来源与置信度说明、异常区域识别结果及可复用 Skill 文档；**黑客松最终交付物仅为一份完整、可复用的 Skill 文档**。本仓库中的地图、数据库界面与幻灯片均为 Skill 执行能力的演示证据，不改变提交格式。

## 最新生产运行（2026-08-19，全球在线生产运行 · 全程自主）

- **199,730** 条确定性入库记录（无重复计数），覆盖 **45,753** 个独立物理样本（岩石 / 土壤 / 沉积物 / 水体）
- **35** 个已接入公开来源（另有 31 个候选审计后拒绝入库）
- **100%** 记录级来源定位链（199,730 条全部可回溯到原始来源）
- **3,721** 个异常筛查候选（robust-z 门禁 · 19 个候选区域）
- **393** 条未过标准化门禁：如实保留，不静默丢弃

论文与数据库对比区统一采用冻结快照口径（191,715 条 / 29 源），与生产运行口径独立、不混算，脚注中均有说明。

## 站点结构

- `index.html`：门户首页——赛题拆解（含 Skill 输出清单）、Skill 运行产物与可复用文档、三重真实运行验证、五篇论文科研流程、同类数据库对比（速览表 + 能力矩阵 + 六问对照）、3 分钟演示视频、材料下载。
- `slides.html`：14 页决赛主讲幻灯片（滚轮 / 方向键 / 触摸翻页），现场即用此 HTML 版主讲。
- `interactive_map.html`：Skill 真实运行产物，15 MB 单文件自包含交互图谱。
- `live/`：自包含交互页面——全球总览（内置五个研究视图）、中国区异常视图、3D 地球仪。
- `research/`：科学发现层产物——五篇论文 PDF、五篇论文路线图、同类数据库对比（含全部数字出处）、GGA 语料库。
- `finals/`：决赛材料——录屏版演示 `demo-video.html`、演示视频 MP4、主讲幻灯片 PDF/PPTX、Poster（HTML/PDF/PNG）、确定性回归产物 `real-run/`、对抗审计证据 `audit-run/`。
- 改版前的旧版首页存档在分支 `backup-20260818-pre-redesign`。

## 三重真实运行验证

| 运行 | 日期 | 验证内容 | 关键结果 |
| --- | --- | --- | --- |
| RUN A · 全球在线生产运行 | 2026-08-15 | 真实网络条件下自主采集、失败处置与缺口报告 | 33 分钟全自主完成：63 个来源候选审计 → 31 正式接入 → 29 实际入库；两个 GEOROC 端点持续 HTTP 500 如实记录；238 项待修复项全部登记进修复队列 |
| RUN B · 确定性回归 | `main@ed8249e` | 全新克隆环境中的产物逐字节复现 | 0.714 秒回归：996/996 条地质匹配、6 个异常候选逐字节一致，hash-bound 快照防跨环境漂移 |
| RUN C · 对抗审计 | 2026-08-20 | 红队植入 10 类缺陷（数值篡改、单位翻转、伪造声明等），校准审计层检出能力 | 10/10 全部捕获；幻觉数字「25000」被判 answer_unbound——没有证据绑定的数字不允许出场 |

三组结果使用各自独立口径，不作混合统计。证据文件：`finals/real-run/run_summary.json`、`finals/audit-run/audit_receipt.json`、`finals/audit-run/claim_ledger.json`。

## 从图谱、发现到论文：五篇成稿

discovery_mode 从同一冻结快照自动选题、跑统计、核验文献、写作与排版，五篇全部成稿（P1 10 页，P2–P5 各 9 页，合计 46 页 · 24 图 9 表），均通过 a–g 七项质量审计与语料库措辞打磨，每个数字可由冻结快照 + 种子脚本确定性重放：

1. [P1 · 欧洲土壤剖面 Hg/Pb 遗留富集的方法分层筛查](research/P1-comparability-aware-screening-europe.pdf)（目标刊物：STOTEN / Applied Geochemistry）
2. [P2 · 表层遗留富集并非全球常态：澳大利亚土壤的检验](research/P2-hemispheric-contrast-australia.pdf)（Environmental Pollution）
3. [P3 · 同一份土样、两种方法可差三倍：跨方法偏移的量化与换算](research/P3-method-transfer-models.pdf)（ES&T / Geostandards and Geoanalytical Research）
4. [P4 · 两个独立调查是否一致：全球砷图的地面验证](research/P4-arsenic-validation.pdf)（Environment International / Water Research）
5. [P5 · 零调参能否恢复已知海洋学结构：GEOTRACES 剖面提取与方法审计](research/P5-geotraces-audit.pdf)（Marine Chemistry / ESSD）

科学边界：五篇均为筛查级结论（screening-level），富集 ≠ 污染定论、剖面形态 ≠ 机制证明，正式投稿前需领域专家复核。路线图见 [`research/five-paper-roadmap.md`](research/five-paper-roadmap.md)。

## 同类数据库对比

GGA 的定位不是替代 GEOROC / EarthChem / USGS NGDB / GEOTRACES 等库——汇编库强在体量与存档，调查库强在库内一致性；GGA 补的是它们之间缺失的统一层：开箱可用的统一单位与坐标、跨介质一表联查、方法元数据与跨方法换算、记录级来源追溯与可标注、记录级置信度评分、缺口作为产品输出。全部对比数字带来源 URL 与访问日期，见 [`research/database-comparison.md`](research/database-comparison.md)。

## 材料下载

- [主讲幻灯片（HTML）](slides.html)：决赛现场主讲版本
- [主讲幻灯片 PDF 版](finals/Global-Geochemical-Atlas-Final-Pitch.pdf)：14 页（11 页主讲 + 3 页备份，含演讲者备注）
- [决赛 Poster PDF（A1 横版）](finals/Global-Geochemical-Atlas-Poster.pdf) · [网页版](finals/poster.html)
- [演示视频 MP4（1080p · 180 秒）](finals/Global-Geochemical-Atlas-Final-Demo-Silent-Preview.mp4)：前半方案讲解，后半 Agent 真实运行录屏
- [项目介绍 PDF（6 页）](Global-Geochemical-Atlas-Introduction.pdf)：方案、产物、创新点与应用场景
- [作品简介（文字版）](作品简介.md)
- [Skill 架构讲解 PPT（7 页 · 技术附件）](Global-Geochemical-Atlas-Demo.pptx)：面向技术评审的架构、证据链、四类运行结果与可复用文档详解

## 本地运行

Windows 双击 `start_demo.bat`；macOS / Linux 在本目录运行：

```bash
./start_demo.sh
```

或直接 `python3 start_demo.py`。脚本会选择可用端口、启动静态服务器并打开浏览器，`Ctrl+C` 停止。也可以用 Chrome/Edge 直接打开 `index.html`（无需 CDN，DOI 链接仅在主动点击来源时需要网络）。请保留整个目录，不要只复制 `index.html`，否则截图、交互地图与下载链接会失效。

## 演示证明的核心能力

- 每个可视化点都可回溯到标准化记录、来源原始记录、定位器与文件 / 运行哈希；
- 单位换算、坐标 QC、删失值、地质匹配与异常筛查均保留方法、参数和置信度；
- 不可上图或不满足科学门禁的记录不被静默删除，而是保留在数据库、QC 报告与修复队列中；
- 同一套 profile 同时驱动全球概览和区域研究视图，输出可复现且不覆盖历史运行；
- 异常结果始终标注为 screening candidate，显式区分数据问题、待人工复核项与科学解释边界。
