# GGA 数据驱动的五篇论文路线图（决赛版，2026-08-18 晚更新）

数据基座：冻结快照 `retest-acquisition-coverage-v12-6c221cf`（191,715 条 / 29 源 / 7 元素 / 四介质），
选题来源：`build_discovery_candidates.py` 自动产出的 31 个候选（`research-products/world-20260815/discovery_candidates.md`）。

## 前沿对比方法论（每篇统一执行的四步）

1. **锚定引用**：Discussion 直接回应 1-2 篇 2024-2026 顶刊论文或政策文件明文写出的
   open problem / data limitation（逐条对应，不是泛泛引用）。
2. **数值对比**：同 setting 下我方估计 vs 文献发表值；一致=验证性价值，
   偏离=先查方法学差异能否解释，能解释即方法学发现，不能解释即新问题。
3. **缺口对接**：前沿明说"缺 X 数据"，我们要么提供 X，要么把缺失量化成
   机器可操作的采集优先级（sampling_priority.geojson）。
4. **时效窗口**：对准政策时间表（Minamata COP 效果评估、EU SML 实施细则）。

## P1 — 欧洲土壤剖面 Hg/Pb 遗留富集的可比性感知筛查 【完稿；a-g 审计通过；图已升级 v4】

- 核心数字：Hg T/S 1.364 (CI 1.303-1.444, n=392)；Pb 1.239；humus Hg 5.256x；
  Ni/Cr 对照约 1；Cr 方法伪影 3x；LUCAS 外部一致（43.9 vs 38.3 ug/kg）。
- 前沿锚点：UNEP OESG 2025 四条土壤 Hg 数据限制逐条对应；
  Guo et al. 2024 ES&T；EU Soil Monitoring Law。
- 状态：10 页 LaTeX + 4 图 1 表 + 17 引文；Figure 1 已重绘为化学顶刊式
  三面板科学示意图（(a) 机制场景 (b) 数据流 (c) 统计+结果预览，v4，2026-08-18）。
- 目标期刊：Science of the Total Environment / Applied Geochemistry；
  会议：Goldschmidt、EGU。

## P2 — 遗留金属指纹的半球不对称性 【完整初稿已编译（7 页，2026-08-18）；选题出自 dc-001~004】

- 核心数字（NGSA 流域出口沉积物 TOS 0-10 cm / BOS ~60-80 cm，ICP-MS，0.01 度配对）：
  Pb 0.982 (CI 0.973-0.993, n=1,064) —— 欧洲式 Pb 表层富集不存在；
  As 0.886（表层亏损，p~1e-45）；Cu 0.955；Zn 1.005（类对照）；
  Hg 仅 17 对（DMA）与 Cr/Ni 无澳洲配对 —— 均作为缺口输出。
  敏感性：0.1 度取整下 Pb 0.982 不变（n=1,049）。
- 交付：`paper2/main.pdf` 7 页 + EU vs AU forest 对比图 + 澳洲 Pb 比值地图 +
  8 条核实引文（de Caritat & Cooper 2011/2016、Marx et al. 2016 等）。
- 科学叙事：北半球工业遗留 vs 南半球深度风化地盾的双大陆对照；
  同一管线同一统计设计跑两大洲，边际成本一个晚上。
- 目标期刊：Environmental Pollution / Applied Geochemistry。

## P3 — 同样品跨方法偏移的量化与传输模型 【试点完成（2026-08-18）+ 扩展摘要；dc-012~016】

- 核心数字（同样品配对，GEMAS XRF/ICP-MS n=2,224/元素）：
  Cr 2.94（IQR 2.37-3.66）、Zn 1.34、Pb 1.29、Ni 1.27、As 1.23、Cu 0.86（方向反转）；
  log-log 斜率 0.74-1.00（偏移浓度依赖，单一系数不够，需幂律传输函数）；
  FOREGS 独立复现：Cr 2.54（表土）/ 2.50（底土）。
- 交付：`p3_extended_abstract.md`；全文需扩展协变量分析 + 最小元数据标准提案。
- 前沿锚点：OESG "cannot be compared across surveys"；EU SML 跨境可比性条款。
- 目标期刊：Environmental Science & Technology / Geostandards and Geoanalytical Research。

## P4 — 全球砷健康筛查的独立交叉验证点集 【试点完成（2026-08-18）+ 扩展摘要】

- 核心数字：GEMAS x FOREGS 共址 0.1 度单元 26 个，Spearman rho=0.681（p=1.3e-4），
  中位比 0.982 —— 独立调查同址一致到 2%；联合超标 2 单元(>20)/1 单元(>45 mg/kg)；
  全库土壤 As 8,979 条中 688 条 >20（7.7%）、162 条 >45（1.8%）；
  最大分歧单元 47.6N 2.3W（布列塔尼，208.5 vs 59.5）进入再采样队列。
- 交付：`p4_extended_abstract.md`；对接 Podgorski & Berg (2020, Science) 的
  ground-truth 需求（他们明说缺独立校验数据）。
- 目标期刊：Environment International / Water Research / Applied Geochemistry。

## P5 — GEOTRACES 海水微量金属剖面的自动提取与可比性审计 【试点完成（2026-08-18）+ 扩展摘要；dc-009~011】

- 核心数字（18,563 条，深度字段覆盖 100%）：营养盐型剖面自动复现 ——
  Zn 深/表 5.57x（0.96 -> 5.33 nmol/kg，n=1,768/1,754，p<1e-282）、
  Cu 1.91x、Ni 1.85x（生物泵指纹，无海洋学调参）；
  碎片化审计：34 个方法族（Zn 23 / Ni 25 / Cu 13），最大族仅占 37.7%，
  7,007 条（37.7%）无可解析方法 —— 多族可池化队列为 0（诚实声明）。
- 交付：`p5_extended_abstract.md`；剖面分型 + originator 元数据修复队列。
- 目标期刊：Marine Chemistry / Earth System Science Data（数据论文轨）。

## 同类数据库对比（PPT 核心）

见 `ppt_comparison.md`：GEOROC 42.7M 值（火成岩文献汇编）、USGS NGDB 152 万样品
（108 方法 25 实验室并存无统一层）、GEOTRACES（单介质）、单一调查（单大洲）——
跨源、跨介质、记录级可审计的统一层此前不存在；我方 100% 许可证/SHA-256/置信度/QC 覆盖。

## PPT 讲法

1 篇完稿（P1，现场翻 PDF）+ 1 篇完整初稿（P2，当日第二大洲复制 n>1000）+
3 篇试点全部出数（P3-P5，扩展摘要各带核心数字与 dc 编号）——
全部选题出自 skill 自动候选生成器，闭环 = 数据 -> 选题 -> 统计 -> 论文 -> 新采集优先级。
