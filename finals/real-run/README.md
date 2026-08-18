# 决赛 Demo · 真实运行证据

本目录保存 2026-08-15 在全新临时克隆中执行的确定性生产阈值回归证据。源码为 `global-geochemical-atlas-skill` 的 `main@ed8249e542f0e416608805226cc310fe21e2fc98`。

## 执行命令

```bash
python3 skills/global-geochemical-atlas/scripts/run_atlas_request.py \
  --request skills/global-geochemical-atlas/fixtures/production-usgs/request.json \
  --demo production-usgs \
  --analysis-profile production \
  --generated-at 2026-08-07T00:00:00Z \
  --output-dir real-run-output
```

运行时清除了继承环境，仅保留 `PATH` 与 `LANG`。该路径读取仓库内已固定哈希的 USGS 实源 fixture，不访问在线数据源。结果为：

- `status: partial_success`
- 输入与过滤后均为 996 条测定，覆盖 249 个物理样本
- 元素 `As / Cu / Ni / Zn`，介质 `soil`
- 996/996 条记录完成 GLiM 匹配
- 72 个异常背景组中 12 个达到生产阈值，60 个按显式失败状态停止
- 产生 6 个记录级筛查候选
- 自包含地图 843,655 bytes，外部资源数为 0
- 当前机器墙钟时间 0.714 秒；这不是官方性能基准

## 校验命令

```bash
python3 skills/global-geochemical-atlas/scripts/validate_outputs.py \
  --output-dir real-run-output
```

校验结果为 `valid`、0 errors、0 warnings，完整摘要见 `validation.json`。

当前公共契约定义 **15 项核心产物**；`request_evidence/` 为核心产物之外的执行证据。本目录保留与决赛叙事直接相关的精简副本，而不是替代完整运行目录。

## 科学边界

该 fixture 使用真实来源、真实记录和可复验哈希，但为了确定性回归而抽样，**不代表美国或全球统计分布，不可直接用于科学解释**。候选仅表示其相对于声明的可比背景组达到筛查阈值；不证明污染、矿化、来源或因果关系。

