# 全球地球化学元素分布图谱 Skill：演示包

**TEAM 0066** · 在线演示：<https://asimfish.github.io/global-geochemical-atlas-demo/>

## 文档与直达链接

- [项目介绍 PDF](Global-Geochemical-Atlas-Introduction.pdf)：赛题方案、五项交付、Skill 设计、创新点与应用场景（6 页）。
- [作品简介（文字版）](作品简介.md)：核心计划、创新点、应用场景。
- [可交互元素分布地图（直达）](https://asimfish.github.io/global-geochemical-atlas-demo/interactive_map.html)：Skill 真实运行产物，单文件自包含。
- [三维地球仪](https://asimfish.github.io/global-geochemical-atlas-demo/live/globe-3d.html) · [区域异常视图](https://asimfish.github.io/global-geochemical-atlas-demo/live/china-anomaly.html)
- Skill 仓库：<https://github.com/asimfish/global-geochemical-atlas-skill>

这是完整的可搬运演示包。它逐项对应赛题要求；演示重点是叩题拆解、五项交付逐项演示（每页配对应界面实况）、公共 Agent Skills 结构、确定性科研脚本、记录级证据链和可审计 iteration loop。

本次黑客松最终提交物仍然只有一个完整、可复用的 Skill 文档；本目录中的地图、数据库界面与 PPTX 是 Skill 执行能力的演示证据，不改变提交格式。

请保留整个目录，不要只复制 `index.html`，否则截图、交互地图和 PPTX 下载链接会失效。

## 十二页最终演示主线

1. 封面：品牌 logo + 赛题题目，不是一张固定地图而是一套可执行科研工作流（含开源仓库链接）；
2. 赛题拆解：采集 → 标准化 → 研究输出逐条落地，展示 15 个公开数据源（六大洲）；
3. 交付 1 · 可交互元素分布地图：三步用法、五个内置研究视图、3D 地球仪小窗；
4. 交付 2 · 标准化地球化学数据库：40+ 字段专业长表、检索 / 读行 / 导出；
5. 交付 3 · 数据来源与置信度说明：五维加权真实指标条与全库分级；
6. 交付 4 · 异常区域识别结果：地图红蓝环标记 + 候选列表与判据卡片；
7. 交付 5 · 可复用 Skill 文档：`SKILL.md + references/ + scripts/ + fixtures/tests` 四层设计；
8. Skill 内核：九阶段状态机前向执行 × 可审计 iteration loop 反向修复；
9. 质量控制：十五项产物契约 + 114,807 项真实迭代清单（零静默删除）；
10. 最终效果：全球图谱与区域研究视图并列展示；
11. 运行实况：Qwen3.8-Max 挂载 Skill 干活的动画执行轨迹与产出效果；
12. 收尾：Global Geochemical Atlas，统一生成赛题五项输出。

## 演示证明的核心能力

- 每个可视化点都可回溯到标准化记录、来源原始记录、定位器与文件/运行哈希；
- 单位换算、坐标 QC、删失值、地质匹配与异常筛查均保留方法、参数和置信度；
- 不可上图或不满足科学条件的记录不被静默删除，而是保留在数据库、QC 与 iteration backlog 中；
- 同一套 profile 同时驱动全球概览和区域研究视图，输出可复现且不覆盖历史运行；
- 异常结果始终标注为 screening candidate，显式区分数据问题、待人工复核项与科学解释边界。

## 推荐启动方式

Windows：双击 `start_demo.bat`。

macOS / Linux：在本目录运行：

```bash
./start_demo.sh
```

也可以直接运行：

```bash
python3 start_demo.py
```

脚本会在本机选择一个可用端口、启动静态服务器并打开浏览器。按 `Ctrl+C` 停止服务器。

## 备用方式

- 用 Chrome/Edge 直接打开 `index.html`；第 3–6 页默认显示本地完整截图，点击“启用交互”后加载对应的自包含交互视图；第 10 页提供两个最终产品入口。
- 无法运行 HTML 时，直接打开 `Global-Geochemical-Atlas-Demo.pptx`。
- `speaker-script.md` 是三分钟逐页讲稿。

## 目录说明

```text
Global-Geochemical-Atlas-Demo/
├── index.html
├── assets/                     # 界面截图（全球 / 区域 / 数据库 / 来源 / 异常视图）
├── live/                       # 自包含交互页面：两个地图（内置五视图）+ 3D 地球仪
├── Global-Geochemical-Atlas-Demo.pptx
├── speaker-script.md
├── start_demo.py
├── start_demo.bat
└── start_demo.sh
```

HTML 演示无需 CDN。页面中的 DOI 链接只有在主动点击来源时才需要网络。
