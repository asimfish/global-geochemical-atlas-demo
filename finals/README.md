# Global Geochemical Atlas · 决赛材料包

**决赛08_词元代理人队**（原 TEAM 0066） · AI4S Future ScienceSkills Hackathon 决赛

本目录把第一轮 Skill、在线交互图谱和项目说明重组为一套统一的决赛叙事：

> 从一个“元素 × 区域 × 介质”请求，生成一套可追溯、可验证、会诚实失败的地球化学研究产品。

## 交付物

- `demo-video.html`：10 幕、3 分钟录屏版 HTML 演示，两段式结构：前半段（0:00–1:12）讲计划与设计，后半段（1:12–3:00）为 Agent 真实运行记录（真实命令、逐行日志、commit、耗时）与实际使用（真实地图、证据追溯、候选解读、运行验收）。
- `Global-Geochemical-Atlas-Final-Demo-Silent-Preview.mp4`：严格 180 秒的 1080p 静音视觉预览，可直接替换为团队旁白。
- `speaker-script.md`：逐幕时间、口播和录屏动作。
- `recording-guide.md`：正式录制与导出参数。
- `poster.html`：A1 横版 Poster 可编辑源文件。
- `Global-Geochemical-Atlas-Poster.pdf`：A1 横版打印成品。
- `Global-Geochemical-Atlas-Poster.png`：Poster 快速预览图。
- `Global-Geochemical-Atlas-Final-Pitch.pptx`：可编辑决赛 PPTX（11 页主讲 + 3 页备份，每页含演讲者备注；叙事与 demo 一致：前半计划与设计，后半真实运行）。
- `Global-Geochemical-Atlas-Final-Pitch.pdf`：PPT 兼容/打印版本。
- `build_pptx.py`：PPTX 生成源文件。
- `build_video_preview.sh`：按 3 分钟时间轴生成静音视觉预览。
- `export_materials.sh`：本地批量导出脚本。
- `real-run/`：从 `main@ed8249e` 全新克隆运行得到的地图、摘要、校验结果与单条候选解读证据（确定性回归运行）。
- `live/`：第一轮交互演示页（3D 地球 / 全球总览 / 中国区异常），demo-video 第 6 幕可现场切换。
- `real-run-global/`：2026-08-15 全程自主在线生产运行（v12 冻结快照）的关键产物：74 MB 自包含全球图谱、循环报告、交付回执、来源与置信度、238 项修复队列。

## 一键预览 HTML

从上一级演示目录启动静态服务器：

```bash
cd Global-Geochemical-Atlas-Demo
python3 start_demo.py
```

然后打开：

- `http://127.0.0.1:<端口>/finals/demo-video.html`
- `http://127.0.0.1:<端口>/finals/poster.html`

HTML 演示快捷键：

- `← / →`：切换幕；
- `R`：从头启动 3 分钟自动计时；
- `N`：显示/隐藏演讲者备注；
- `I`：在第 6 幕切换真实运行截图与本地交互地图；
- `F`：全屏；
- `Esc`：停止自动计时。

## 证据口径

两次真实运行，数字不得混用：

**全球在线生产运行**（2026-08-15，v12 冻结快照，全程自主，源产物在 `retest-acquisition-coverage-v12-6c221cf/world/output/`，关键副本在 `real-run-global/`）：

- **63 个来源候选审计 → 31 正式路由 → 29 实际入库**（`sources_and_confidence.json` 的 source_portfolio）；
- **9 轮采集：72,346 → 111,771 → 172,995 → 193,655 → 195,505 → 195,505 → 193,764 → 191,715 → 191,715**，`stop_reason=no_progress`，发布第 9 轮（`loop_report.json`）；
- **191,715 条测定、42,244 个独立样品、3,351/3,353 个筛查候选、21/28 元素×介质视图、135/605 非极地陆地格**；
- 两个 GEOROC 端点持续 HTTP 500，逐轮失败关闭；**238 项修复队列**保留，`delivery_ready=false`（`research_delivery_receipt.json`）；
- 终态为 `needs_human_review` 检查点，不是完成交付；该广度不代表全球统计分布。

**确定性回归运行**（`main@ed8249e` 全新克隆，产物在 `real-run/`）：

- **996 条测定、996/996 地质匹配、12/72 背景组达标、6 个候选、0 错误/0 警告、0.714 秒**；
- 用于证明工程可执行性、科学门禁与字节级可复现，不代表美国或全球分布。

通用：15 项核心产物契约来自输出契约与校验器；`request_evidence/` 为额外执行证据；异常均表述为 screening candidate，不写成污染、矿床或成因结论；一切以 manifest、record-level locator 与 SHA-256 为准。

## 本次真实运行

- 源码：`global-geochemical-atlas-skill` 的 `main@ed8249e542f0e416608805226cc310fe21e2fc98`；
- 模式：`fixture:production-usgs`，生产分析阈值，仓库内 hash-bound 实源 fixture；
- 结果：`partial_success`，996 条测定、249 个物理样本、6 个筛查候选；
- 产物校验：`valid`，0 errors / 0 warnings；
- 墙钟时间：本机 0.714 秒，仅为本次运行记录，不作为官方基准；
- 科学边界：确定性回归切片不具区域代表性，不可据此作污染、矿化或因果判断。

## 公开入口

- 在线 Demo：<https://asimfish.github.io/global-geochemical-atlas-demo/>
- 独立交互地图：<https://asimfish.github.io/global-geochemical-atlas-demo/interactive_map.html>
- Skill 仓库：<https://github.com/asimfish/global-geochemical-atlas-skill>
