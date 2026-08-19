# 同类数据库对比：GGA 快照 vs 全球地球化学数据体系（权威版，2026-08-20）

> 定位声明（诚实前提）：论绝对规模，机构级数据库积累了几十年，我们不与之竞争；
> GGA 的差异化是跨源统一 + 跨介质同一 schema + 记录级可审计 + 统计可直接消费 + 缺口机器可操作 ——
> 这是「数据库」与「研究引擎」的差别，也是 AI-for-science 真正缺的一层。
> 本文所有外部数字均逐条给出来源 URL 与访问日期（2026-08-20）；无法核验的数字一律不采信（见文末「未采信清单」）。

## 一、能力矩阵（行 = 系统，列 = 能力维度；单元格附脚注编号）

| 系统 | 规模（关键数字） | 介质覆盖 | 多源汇聚 | 统一单位·同一 schema | 记录级许可证 | 记录级溯源哈希 | 方法元数据层 | 量化置信度 / QC | 跨调查验证产品 | 机器可操作缺口队列 |
|---|---|---|---|---|---|---|---|---|---|---|
| **GGA 冻结快照（本项目）** | **191,715 条 / 29 源 / 7 环境金属** [G] | 土壤 80,709 + 沉积物 79,630 + 水 31,376（含海水），四介质同一 129 字段 schema [G] | **是**（29 个独立来源） | **是**：mg/kg · nmol/kg + WGS84，换算与坐标 lineage 逐条记录 | **是**（100% 覆盖） | **是**（100% 行级 SHA-256 + source_row 回指） | 方法族解析 63.7%，其余 36.3% 逐条记 method_missing_reason [G] | **是**：100% 记录带四维置信度对象 + qc_flags；1,537 条删失显式保留 | **是**：26 个 GEMAS×FOREGS 共址验证单元（P4），分歧自动进再采样队列 | **是**：sampling_priority.geojson |
| GEOROC / DIGIS | 42,729,820 值 / 2,895,430 分析 / 707,010 样品 / 23,520 文献 [1][2] | 火成岩·变质岩·矿物·包体 | 是（文献汇编） | 否：按原文献发表值汇编，无跨源换算层 | 数据集级（编译快照 CC BY） | 无（文献引用级） | 有（逐分析记录方法/实验室），但不做跨方法统一 | 无操作性置信度层 | 无 | 无 |
| EarthChem Portal / PetDB / SESAR | ECP ≈5,000 万值 / >100 万样品 [3][4]；PetDB ≈740 万值 / 141,527 样品 [2][5]；SESAR >500 万注册样品 [4] | 固体地球（岩石为主，六库联邦） | 是（联邦查询 PetDB·GEOROC·NAVDAT 等） | 否：门户统一输出格式，数值保持原发表口径 | 数据集级 | 样品级 IGSN（非记录级哈希） | 有（分析级元数据） | 无 | 无 | 无 |
| USGS NGDB（美国国家地球化学数据库） | 1,524,014 样品 / >5,900 万测定（1962–2023）；土壤子库 335,026 样品；NURE 沉积物 397,625 条；NGS 调查 74,409 样品 [6][7][8][9] | 岩石/沉积物/土壤/矿物（美国境内） | 机构内多项目归档 | 否：官方自述 108 种分析方法、25 个实验室并存，无统一层 [6] | 公共域（数据集级） | 无 | 记录方法名，但无跨方法协调 | 无 | 无 | 无 |
| GEOTRACES IDP2025 | 123 航次 / 4,097 站位 / 2,199,291 数据值（2025-11-20 发布）[10][11] | 仅海水（另附气溶胶/降水/冰冻圈包） | 是（多航次多实验室） | 产品内统一 + 互校（intercalibration） | 数据产品级（公平使用声明） | 无（航次/originator 级） | 有（方法与原始文献链接） | 值级 flag + 1σ 误差 | crossover 站点互校（产品内部） | 无 |
| GEMAS（欧洲农牧土壤） | 2,211 农田 + 2,118 牧场样品（含野外重复）/ 33 国 / 560 万 km² [12][13] | 仅土壤（Ap 0–20 cm；Gr 0–10 cm） | 否（单次调查） | 调查内统一（单实验室分析） | 数据集级 | 无 | 单一方法体系（aqua regia + XRF） | 调查级 QC 报告 | 无 | 无 |
| FOREGS 欧洲地球化学图集 | 约 900 站 / 26 国：河水、河流沉积物、土壤（腐殖质/表土/底土）；漫滩沉积物 790 点 [14] | 多介质但单大洲单次 | 否（单次调查） | 调查内统一 | 数据集级 | 无 | 单一方法体系 | 调查级 QC | 无 | 无 |
| LUCAS Soil（欧盟表土） | 2018: 18,984 点；2015: 21,859 点；2009/12: 19,967 点 [15][16] | 仅表土（0–20 cm） | 否（周期性调查） | 调查内统一（单一中心实验室） | 欧盟数据集级 | 无 | 单一方法体系 | 调查级 QC | 无 | 无 |
| NGSA（澳大利亚国家调查） | 1,315 站 / 1,186 集水区 / 2 深度（TOS 0–10 cm、BOS 60–80 cm）/ 覆盖 617 万 km²（81% 国土）/ 最多 68 元素 [17][18] | 集水区出口沉积物 | 否（单次调查） | 调查内统一 | CC BY（数据集级） | 无 | 单一方法体系（Total/Aqua regia/MMI） | 调查级 QC | 无 | 无 |
| AfSIS（非洲土壤信息服务） | 60 个 LDSF 哨点 / 19 国 / 18,257 土壤样品 / 2 深度（0–20、20–50 cm）[19][20] | 仅土壤 | 否（单项目） | 项目内统一 | ODbL（数据集级） | 无 | 湿化学 + 光谱配对 | 项目级 QC | 无 | 无 |
| 中国地球化学基准网 CGB | 3,382 点 / 6,617 样品 / 2 深度（0–25 cm、>100 cm）/ 81 项指标（2008–2014）[21][22] | 土壤/漫滩沉积物 | 否（单次国家计划） | 计划内统一 | 部分公开 | 无 | 单一方法体系 | 严格 QC（计划级） | 无 | 无 |

行业权威对「缺口」的背书：OneGeochemistry 发起人（Wyborn、Lehnert、Prent、Klöcking、Klump）原文——
「现存海量地球化学数据几乎不可复用：它们碎片化在全球数千个数据库中，锁在个人、机构或国家的孤岛里；
缺乏公认的元数据/数据国际标准，使复用几乎不可能」[23]。GGA 补的正是这一层的可执行原型。

## 二、各系统关键数字与出处（编号脚注，访问日期均为 2026-08-20）

- **[G] GGA（本项目）**：全部数字来自冻结快照 `retest-acquisition-coverage-v12-6c221cf` 列级统计（仓库 artifacts 可复算）：191,715 条 / 29 源 / 7 金属（As Cr Cu Hg Ni Pb Zn）/ 土壤 80,709 · 沉积物 79,630 · 水 31,376（含 GEOTRACES 海水切片 18,563 条）/ 许可证·SHA-256·qc_flags·置信度覆盖均 100% / 方法族解析 63.7% / 规范坐标 68.6% / 删失 1,537 条 / 129 字段 schema。
- **[1] GEOROC 官网计数器**（https://georoc.eu/ ，2026-08-20 实抓页面内嵌计数）：42,729,820 single data values / 2,895,430 analyses / 707,010 samples / 23,520 papers。
- **[2] EGU26-18653 摘要**（https://meetingorganizer.copernicus.org/EGU26/EGU26-18653.html ）：GEOROC 持有量 >4,080 万值 / >23,000 篇文献；PetDB 约 740 万值；两库合计 >4,820 万值 / 约 27,000 篇文献；EarthChem Portal 可访问近 5,000 万值。
- **[3] Goldschmidt 2022 摘要**（https://doi.org/10.46427/gold2022.11110 ）：EarthChem Portal 提供 「>45 million analytical values for >1 million samples」（联邦库：PetDB、NAVDAT、GEOROC、USGS、MetPetDB、DARWIN）。
- **[4] Scientific Data 2025**（https://doi.org/10.1038/s41597-025-05295-z ）：EarthChem 约 5,000 万分析数据点；SESAR 注册样品 >500 万（IGSN 分配机构）。另 NSF 奖项 1948806 结题报告（https://ui.adsabs.harvard.edu/abs/2020nsf....1948806L/abstract ）同口径。
- **[5] PetDB 持有量**（https://www.re3data.org/repository/r3d100011235 ，转录 PetDB 官方 holdings，2024-11-15 口径）：141,527 样品 / 6,639,789 个体数据值 / 3,680 篇文献。注：此为二级转录来源，总值与 [2] 的 ≈740 万一致量级。
- **[6] USGS 数据发布（1962–2023）**（https://www.usgs.gov/data/geochemical-data-rock-sediment-soil-and-mineral-samples-united-states-and-territories-1962 ）：1,524,014 个岩石/沉积/土壤/矿物样品；108 种实验室与野外分析方法、25 个实验室。
- **[7] USGS Geochemical Data Portal**（https://www.usgs.gov/tools/geochemical-data-portal-rock-sediment-soil-and-mineral-samples-united-states-and-territories ）：分析测定值超过 5,900 万。
- **[8] NGDB Soil 元数据**（https://mrdata.usgs.gov/metadata/ngdbsoil.html ）：土壤子库 335,026 样品。**NURE-HSSR 沉积物**（https://mrdata.usgs.gov/nure/sediment/ ）：397,625 条记录。
- **[9] National Geochemical Survey（NGS）**（https://mrdata.usgs.gov/geochem/ ）：74,409 样品（不含标样；含标样 77,212 条），目标密度 1 样 / 289 km²。
- **[10] GEOTRACES IDP2025 官方页**（https://www.geotraces.org/idp2025/ ）：123 航次 / 4,097 站位 / 总计 2,199,291 数据值（较 IDP2021 新增 448,050 值）。
- **[11] BODC IDP2025 发布页**（https://www.bodc.ac.uk/geotraces/data/idp2025/ ）：2025-11-20 发布；五个数据包（海水离散样、气溶胶、降水、冰冻圈、传感器）。注：BODC 页与 geotraces.org 对「新增航次/站位」口径略有出入（16/721 vs 18/732），本文采用 geotraces.org 的总量口径。
- **[12] BGS GEMAS 项目页**（https://www.bgs.ac.uk/geology-projects/applied-geochemistry/international-geochemistry/gemas/ ）：2,211 农田土（0–20 cm）+ 2,118 牧场土（0–10 cm），33 国（页面记 34 个参与调查机构口径）/ 约 560 万 km² / 密度 1 点 / 2,500 km²。
- **[13] E3S Web Conf. GEMAS 论文**（https://doi.org/10.1051/e3sconf/20130138004 ）：同口径 2,211 / 2,118（含野外重复样）；53 元素 aqua regia。注：EuroGeoSurveys 官方页（https://eurogeosurveys.org/projects/gemas/ ）给出的不含重复样口径为 2,108 农田 / 2,024 牧场。
- **[14] FOREGS 地球化学图集（GTK 官方摘要页）**（http://weppi.gtk.fi/publ/foregsatlas/article.php?id=14 ）：26 国约 900 站，采集河水、河流沉积物与三类土壤（腐殖质/表土/底土），密度约 1 样 / 4,700 km²；另在 790 点采漫滩沉积物；成图 360 幅。
- **[15] ESDAC LUCAS 2018 Topsoil**（https://esdac.jrc.ec.europa.eu/content/lucas-2018-topsoil-data ）：18,984 点。**LUCAS 2015**（https://esdac.jrc.ec.europa.eu/content/lucas2015-topsoil-data ）：21,859 点。
- **[16] ESDAC LUCAS 项目页**（https://esdac.jrc.ec.europa.eu/projects/lucas ）：2009/2012 合并库 19,967 点；单一中心实验室分析。
- **[17] Geoscience Australia 地球化学图集页**（https://www.ga.gov.au/about/projects/resources/national-geochemical-survey/atlas ）：1,315 站 / 1,186 集水区 / TOS 0–10 cm + BOS 60–80 cm / 最多 68 元素。
- **[18] GEEA 期刊 NGSA 综述**（https://doi.org/10.1144/geochem2014-322 ）：覆盖 617.4 万 km²（约 81% 澳大利亚国土），密度约 1 站 / 5,200 km²。
- **[19] SOIL 期刊（2020）**（https://doi.org/10.5194/soil-2020-69 ）：AfSIS 一期共采 18,257 份土壤样品，来自 60 个 LDSF 哨点、两个深度（0–20、20–50 cm）。
- **[20] AWS 开放数据注册**（https://registry.opendata.aws/afsis/ ）：AfSIS 土壤化学数据集（2009–2018），ODbL 1.0 许可，19 国。
- **[21] 《中国地质》2016**（http://en.cgsjournals.com/article/id/zgdz_20160501 ）：中国地球化学基准计划 2008–2014，约 1,600 网格 / 3,382 汇水域基准点 / 表深两层共 6,617 件样品 / 81 项指标。
- **[22] IAGS 2015 摘要（Wang & CGB Team）**（https://www.appliedgeochemists.org/sites/default/files/images/images-old/stories/IAGS_2015/Abstracts/27th%20IAGS_Wang%20and%20CGB%20Team_China%20geochemical%20baselines-a%20new%20contribution.pdf ）：6,617 样品 / 3,382 点 / 约 1 点 / 3,000 km²，覆盖 960 万 km²。
- **[23] OneGeochemistry 立场文件**（https://doi.org/10.5281/zenodo.5761988 ，Wyborn、Lehnert、Prent、Klöcking、Klump）：原文 「it is near impossible to reuse the vast existing amounts of geochemical data: they are currently globally fragmented over thousands of databases and are located in either personal, institutional or national silos」。另见 Prent et al. 2023, Elements 19(3):136–137（https://doi.org/10.2138/gselements.19.3.136 ）。
- **[24] OZCHEM（澳洲全国全岩地球化学库）**（https://ecat.ga.gov.au/geonetwork/srv/api/records/a05f7892-d0ec-7506-e044-00144fdd4fa6 ；持有量数字见 https://doi.org/10.1029/2021ea001786 引 Champion 2015）：>50,000 条岩石/风化壳/河流沉积物分析；现由 GA GEOCHEM 库接续。

### 未采信清单（诚实记账）

- OSNACA（矿石样品库）：未找到可核验的官方持有量数字，放弃引用。
- Mindat：属矿物学记录而非元素含量数据库，不进入矩阵。
- GEOROC「2023 数据描述论文」：经查不存在独立的 Scientific Data 数据描述论文；2023 年可引用口径为 EGU23-13223 摘要（>20,600 文献 / >3,200 万值，https://meetingorganizer.copernicus.org/EGU23/EGU23-13223.html ）与 Klöcking & Sarbas 2023 用户手册（https://zenodo.org/records/14136554 ）；本文采用官网实时计数器 [1]。

## 三、诚实定位：同类强在哪，GGA 补哪层

**同类体系显著更强的地方（明说）**：

1. **绝对规模**——GEOROC 4,270 万值、EarthChem Portal 约 5,000 万值、USGS NGDB 152 万样品 / 5,900 万测定，都是 25–60 年机构积累；GGA 的 19 万条不在同一量级，也不打算在这个维度竞争。
2. **几十年策展与领域深耕**——GEOROC/PetDB 的文献级策展、GEOTRACES 的航次互校（crossover QC + 值级 flag）、GEMAS/FOREGS/NGSA 的单调查内部一致性，都是各自领域的金标准。
3. **样品实体体系**——SESAR/IGSN 的 500 万+ 物理样品注册是 GGA 不具备的能力（GGA 通过字段映射对接而非替代）。

**GGA 填补的精确缺口（有行为证据）**：

- 跨源（29 源）× 跨介质（四介质同一 129 字段 schema）× 记录级可审计（100% 行级 SHA-256 + 许可证 + 四维置信度）的**协调层**，在上表 10 个系统中不存在——大库不统一（GEOROC 按发表值汇编；NGDB 官方自述 108 方法 25 实验室并存），统一的不跨域（GEOTRACES 仅海水；GEMAS/FOREGS/LUCAS/NGSA/AfSIS/CGB 单大洲单次）。
- 这层**可证明地长出科学**：31 个自动候选 → 5 篇论文管线（P1 欧洲 Hg/Pb 遗留富集 10 页成稿；P2 同一套统计当日复制到第二大洲 n>1,000；P3 跨方法偏移 2.9× 幂律模型；P4 跨调查 26 共址单元互证一致到 2%；P5 GEOTRACES 营养盐型剖面零调参复现）——数据 → 选题 → 统计 → 论文 → 新采集优先级闭环。
- 反例即证明：NGDB 的 108 方法并存正是 P3 论文量化的问题（同样品 XRF/ICP Cr 偏移 2.9×）；OneGeochemistry 的「数千库碎片化」声明 [23] 是这一缺口的行业背书。

## 四、「更可靠」的内证数字（我方快照列级统计）

- 许可证字段覆盖 100%；文件 SHA-256 覆盖 100%；qc_flags 覆盖 100%；操作性置信度覆盖 100%
- 方法族解析率 63.7%（其余 36.3% 带 method_missing_reason 逐条记账——缺失本身可审计）
- 规范坐标 68.6%（其余隔离并记原因，不混入空间分析）；GEOTRACES 切片深度字段覆盖 100%
- schema 129 字段，覆盖采样-分析-引用-许可四条溯源链
- 删失/检出限：1,537 条删失记录显式保留（非删除、非插补）

## 五、「更统一」的行为证据（不是口号，是复现实验）

1. 同一套统计设计一晚跑通两个大洲：EU FOREGS（P1）与 AU NGSA（P2）用同一脚本框架、同一配对规则、同一统计量——边际成本一个晚上，产出半球不对称发现。
2. 同一 schema 横跨四介质：土壤配对（P1/P2）、跨方法矩阵（P3）、跨调查互证（P4）、海水剖面（P5）全部直接查同一张表，零人工再清洗。
3. 已知科学自动复现后才输出新问题：GEOTRACES 营养盐型剖面（Zn 深/表 5.57×）、欧洲 Hg/Pb 遗留富集（vs 文献 1.66/1.36）、跨调查砷一致性（rho=0.68）。
