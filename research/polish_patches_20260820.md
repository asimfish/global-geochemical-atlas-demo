# GGA polish patches -- 2026-08-20

Language/professionalism review of the five GGA manuscripts against
`corpus/gga-language-library.md` (records cited as A1..F4; protocols P-T,
P-A; checklist P-X). Scope: titles, abstracts, wording register, coined-term
discipline. No numbers, statistics, or claims of fact are changed; patches
only tighten, standardize, or professionalize. Every OLD string was verified
to occur exactly once in its file.

Title verdicts:
- paper1: revision proposed (PATCH 1) -- "Comparability-aware" is a
  computer-science compound, not geochemistry register.
- paper2: revision proposed (PATCH 8) -- "is absent" overstates a
  screening-level null in which Hg is untestable (17 pairs).
- paper3: title is good as written -- declarative, design-revealing, names
  media and design ("same-sample", "aqua-regia", "transfer models"); no
  change proposed.
- paper4: title is good as written -- long but declarative; the coined term
  "disagreement queue" is the paper's named product and is defined in the
  abstract, which protocol P-T item 8 permits; no change proposed.
- paper5: title is good as written -- design-revealing, names archive,
  medium, and both deliverables; no change proposed.

---

## paper1 -- paper/main.tex (7 patches)

### PATCH 1 -- paper1 -- title
Justification: P-T item 5 -- "X-aware" is CS register absent from STOTEN /
Applied Geochemistry titles; "method-stratified" is the accepted field term
for the paper's actual design (used throughout its text and figures).
OLD:
```
\title{Comparability-aware screening of legacy mercury and lead enrichment
in European soil profiles from harmonized open geochemical data}
```
NEW:
```
\title{Method-stratified screening of legacy mercury and lead enrichment
in European soil profiles from harmonized open geochemical data}
```

### PATCH 2 -- paper1 -- abstract
Justification: P-X item 6 -- "unsafe" reads as a safety-hazard statement in
an environmental-chemistry abstract; record F1 supplies the precise failure
(pooling across incompatible methods).
OLD:
```
effort, and naive pooling across surveys is unsafe: we show that a single
```
NEW:
```
effort, and naive pooling across surveys conflates incompatible analytical methods: we show that a single
```

### PATCH 3 -- paper1 -- terminology
Justification: Records A1/A2 -- ICP is an excitation/ion source, not a
determination basis; an analytical-chemistry reviewer will require the
technique family (ICP-OES/ICP-MS, both underlying the factor-3 Cr contrast
in the body) to be named.
OLD:
```
$\sim$3 between acid-digestion inductively coupled plasma (ICP) and total
```
NEW:
```
$\sim$3 between acid-digestion inductively coupled plasma (ICP-OES/ICP-MS) and total
```

### PATCH 4 -- paper1 -- terminology
Justification: P-X item 8 -- "negative knowledge" is a knowledge-management
coinage; the standard scientific term for what contribution (iii) delivers
is negative results.
OLD:
```
\textbf{(iii) Negative knowledge.} We
```
NEW:
```
\textbf{(iii) Negative results.} We
```

### PATCH 5 -- paper1 -- terminology
Justification: Record A5 / P-X item 8 -- "lacking positive values" is
non-standard; exclusion criteria conventionally name the two cases
(non-positive, missing) directly.
OLD:
```
lacking positive values or canonical coordinates were excluded. Sites were
```
NEW:
```
with non-positive or missing values, or without canonical coordinates, were excluded. Sites were
```

### PATCH 6 -- paper1 -- terminology
Justification: P-X item 6 -- "first-class" is a programming-language idiom
(first-class citizen); the section's meaning is that gaps are explicit,
citable outputs.
OLD:
```
\subsection{Coverage gaps as first-class outputs}
```
NEW:
```
\subsection{Coverage gaps as explicit research outputs}
```

### PATCH 7 -- paper1 -- terminology
Justification: P-X item 9 -- "dwarfs" is informal register for a
quantitative comparison already carried by the two numbers in parentheses.
OLD:
```
The humus Hg enrichment (5.3$\times$) dwarfs the mineral topsoil signal
```
NEW:
```
The humus Hg enrichment (5.3$\times$) far exceeds the mineral topsoil signal
```

---

## paper2 -- paper2/main.tex (7 patches)

### PATCH 8 -- paper2 -- title
Justification: P-T item 3 / P-X item 10 -- the paper itself states the
design "tests for a preserved surface excess, not for the absence of
deposition" (Section 2.3) and that Hg is untestable at 17 pairs; "is not
detected" matches the screening-level evidence tier, "is absent" exceeds it.
OLD:
```
\title{The European surface legacy-metal fingerprint is absent from Australian
catchment outlet sediments: a site-paired hemispheric contrast from
harmonized open geochemical data}
```
NEW:
```
\title{The European surface legacy-metal fingerprint is not detected in
Australian catchment outlet sediments: a site-paired hemispheric contrast
from harmonized open geochemical data}
```

### PATCH 9 -- paper2 -- abstract
Justification: P-X items 8/9 -- "supports reading ... as" is conversational;
"supports interpreting ... as" is journal register. Also fixes inconsistent
triple hyphenation ("Northern-Hemisphere-industrial" here versus
"Northern-Hemisphere industrial" in the Discussion) to the Discussion form.
OLD:
```
contrast supports reading the European fingerprint as a
Northern-Hemisphere-industrial signature rather than a global default, and
```
NEW:
```
contrast supports interpreting the European fingerprint as a
Northern-Hemisphere industrial signature rather than a global default, and
```

### PATCH 10 -- paper2 -- terminology
Justification: P-X item 8 -- "shifted bodily" is a literary/colloquial
intensifier; "shifted as a whole" states the same distributional fact in
standard register.
OLD:
```
European curve is shifted bodily toward enrichment, not merely stretched
```
NEW:
```
European curve is shifted as a whole toward enrichment, not merely stretched
```

### PATCH 11 -- paper2 -- overclaim
Justification: P-X item 2 -- a p-value must not be described with a size
adjective; "enormous" conflates significance with effect size (the effect
size, ratio 0.886, is stated elsewhere).
OLD:
```
inputs are strong; the As depletion signal is directional and enormous
```
NEW:
```
inputs are strong; the As depletion signal is directional and highly significant
```

### PATCH 12 -- paper2 -- terminology
Justification: P-X item 6 -- "was one evening" is workshop-diary register;
the preceding clause already documents the actual effort (a ~40-line pilot
plus a figure script), so the tail can state the point professionally.
OLD:
```
methodology --- the marginal cost of extending a continental screening
result to a second continent was one evening.
```
NEW:
```
methodology; the marginal analysis cost of extending a continental screening
result to a second continent was minimal.
```

### PATCH 13 -- paper2 -- terminology
Justification: P-X item 6 -- "first-class" is a programming idiom (same
issue as PATCH 6); "documented gaps" says what the section shows and names
the controls precisely (record B5).
OLD:
```
\subsection{Mercury and controls as first-class gaps}
```
NEW:
```
\subsection{Mercury and geogenic controls as documented gaps}
```

### PATCH 14 -- paper2 -- terminology
Justification: Consistency dependency -- apply only together with PATCH 1;
this bibliography entry quotes paper1's title verbatim and must track it.
OLD:
```
Global Geochemical Atlas Skill (2026). Comparability-aware screening of
legacy mercury and lead enrichment in European soil profiles from harmonized
```
NEW:
```
Global Geochemical Atlas Skill (2026). Method-stratified screening of
legacy mercury and lead enrichment in European soil profiles from harmonized
```

---

## paper3 -- paper3/main.tex (8 patches; title good as written)

### PATCH 15 -- paper3 -- abstract
Justification: P-X item 7 -- "honest" applied to a database state is an
anthropomorphic tic recurring across the manuscripts; "certified" is the
pipeline's own operation (the text says the pipeline "certifies" this
state).
OLD:
```
transfer-model table that converts the database's honest ``zero multi-source
```
NEW:
```
transfer-model table that converts the database's certified ``zero multi-source
```

### PATCH 16 -- paper3 -- terminology
Justification: P-X item 7 / record F1 -- "honestly pool" is the same
anthropomorphic tic; defensibility of pooling is the technical point.
OLD:
```
database needs before it can honestly pool records from different
```
NEW:
```
database needs before it can defensibly pool records from different
```

### PATCH 17 -- paper3 -- terminology
Justification: P-X item 6 -- "guardrail" is software register; the
subsection delimits what the offsets do and do not mean, i.e. the scope of
interpretation.
OLD:
```
\subsection{Interpretation guardrail}
```
NEW:
```
\subsection{Scope of interpretation}
```

### PATCH 18 -- paper3 -- terminology
Justification: P-X item 7 / record C4 -- Bland-Altman LOA are a defined
statistical quantity; "honest" adds nothing and repeats the tic.
OLD:
```
95\% limits of agreement (LOA). The LOA widths are the honest per-sample
```
NEW:
```
95\% limits of agreement (LOA). The LOA widths give the per-sample
```

### PATCH 19 -- paper3 -- terminology
Justification: P-X item 6 -- "shipped" is product-release register; tables
in a journal article are published or accompany the paper.
OLD:
```
the extra parameter fits noise. The practical rule shipped with the
```
NEW:
```
the extra parameter fits noise. The practical rule accompanying the
```

### PATCH 20 -- paper3 -- terminology
Justification: P-X item 6 -- second occurrence of "shipped" (same issue as
PATCH 19).
OLD:
```
$b$ and its SE are part of the shipped table, a pipeline can make this
```
NEW:
```
$b$ and its SE are part of the published table, a pipeline can make this
```

### PATCH 21 -- paper3 -- terminology
Justification: P-X item 7 -- errors do not "absorb honestly"; the OOS scores
reflect the detection-limit dispersion, which is the factual content.
OLD:
```
concentrations for As and Cu; the OOS errors absorb this honestly but do
```
NEW:
```
concentrations for As and Cu; the OOS errors reflect this dispersion but do
```

### PATCH 22 -- paper3 -- terminology
Justification: P-X item 7 -- parallel to PATCH 15, in the conclusions;
"certified" matches the pipeline's stated operation.
OLD:
```
harmonized open geochemistry from an honest ``zero poolable cohorts'' state
```
NEW:
```
harmonized open geochemistry from a certified ``zero poolable cohorts'' state
```

---

## paper4 -- paper4/main.tex (7 patches; title good as written)

### PATCH 23 -- paper4 -- abstract
Justification: P-X item 8 -- "is no grid artifact" is a literary inversion;
plain negation is the abstract register of the target venues (the matching
section heading already reads "not an artifact of the grid choice").
OLD:
```
is no grid artifact: the median ratio stays within 7\% of unity from
```
NEW:
```
is not a grid artifact: the median ratio stays within 7\% of unity from
```

### PATCH 24 -- paper4 -- terminology
Justification: P-X item 8 -- "hiding in" is informal; "latent in" is the
paper's own better phrase (used in the Conclusions), promoting internal
consistency.
OLD:
```
There is, however, an under-used property hiding in the open data: where
```
NEW:
```
There is, however, an under-used property latent in the open data: where
```

### PATCH 25 -- paper4 -- terminology
Justification: Record F3 / P-X item 5 -- coined term "validation desert" is
used in a section heading and the Conclusions but never defined; the corpus
requires an explicit, italicized, operational first-use definition.
OLD:
```
pair lies in Europe --- the only region where two independent continental
surveys overlap. The USGS (U.S. Geological Survey) CONUS survey
```
NEW:
```
pair lies in Europe --- the only region where two independent continental
surveys overlap. We term the complement --- regions where no independent
survey pair overlaps, so no validation cell can be formed --- a
\emph{validation desert}. The USGS (U.S. Geological Survey) CONUS survey
```

### PATCH 26 -- paper4 -- terminology
Justification: P-X item 6 -- "mints" is finance/software register; "creates"
carries the same meaning at journal register.
OLD:
```
existing one immediately mints validation cells at zero laboratory cost.
```
NEW:
```
existing one immediately creates validation cells at zero laboratory cost.
```

### PATCH 27 -- paper4 -- terminology
Justification: P-X item 6 -- second occurrence of "mint" (same issue as
PATCH 26).
OLD:
```
(\S\ref{sec:desert}) shows that some published data can never mint
```
NEW:
```
(\S\ref{sec:desert}) shows that some published data can never yield
```

### PATCH 28 -- paper4 -- terminology
Justification: P-X item 8 -- "nudged" is behavioral-economics colloquial;
"adjusted, at the margin," preserves the hedge in standard register.
OLD:
```
their sampling plans be nudged (at the margin) toward existing survey
```
NEW:
```
their sampling plans be adjusted, at the margin, toward existing survey
```

### PATCH 29 -- paper4 -- terminology
Justification: P-X item 8 -- "waiting to be harmonized out" is
anthropomorphic and syntactically odd ("harmonized out" suggests removal);
the intended meaning is recovery through harmonization.
OLD:
```
some of it is already latent in open data, waiting to be harmonized out.
```
NEW:
```
some of it is already latent in open data, recoverable through harmonization.
```

---

## paper5 -- paper5/main.tex (7 patches; title good as written)

### PATCH 30 -- paper5 -- abstract
Justification: P-X item 6 -- "hand-builds" is workshop register;
"re-implements" states the duplication-of-effort point precisely and matches
"re-derives" used later in the Introduction.
OLD:
```
and every downstream study currently hand-builds its own intake quality
```
NEW:
```
and every downstream study currently re-implements its own intake quality
```

### PATCH 31 -- paper5 -- abstract
Justification: P-X item 8 -- "depth populated on 100\%" is database-field
phrasing carried into prose; the abstract should state the completeness fact
in plain scientific English (the body's field-level statement can stay).
OLD:
```
depth populated on 100\%) into the same harmonized schema used for
```
NEW:
```
sampling depth recorded for every record) into the same harmonized schema used for
```

### PATCH 32 -- paper5 -- abstract
Justification: P-X item 7 -- "honest" tic (see PATCHES 15-22); "quantified
statement" already carries the intended meaning.
OLD:
```
Automatic recovery of known oceanography, plus an honest quantified
```
NEW:
```
Automatic recovery of known oceanography, plus a quantified
```

### PATCH 33 -- paper5 -- terminology
Justification: P-X item 8 -- "crude" invites the reviewer to agree; "coarse"
is the standard term for a low-resolution statistic and matches "coarse by
design" used for the basin rule two sentences later.
OLD:
```
Mann--Whitney U test. The statistic is deliberately crude --- it knows
```
NEW:
```
Mann--Whitney U test. The statistic is deliberately coarse --- it knows
```

### PATCH 34 -- paper5 -- terminology
Justification: P-X item 7 -- labels are not "honest"; the caveat is that the
screening label acknowledges the marginal-sea simplifications.
OLD:
```
marginal-sea subtleties are absorbed into the honest label ``screening.''
```
NEW:
```
marginal-sea subtleties are acknowledged by the label ``screening.''
```

### PATCH 35 -- paper5 -- terminology
Justification: P-X item 8 -- "which is the point" is conversational; the
sentence makes a design-intent claim and should say so.
OLD:
```
was targeted; all emerge from one statistic, which is the point: a
```
NEW:
```
was targeted; all emerge from one statistic, which is the intended property: a
```

### PATCH 36 -- paper5 -- terminology
Justification: P-X item 7 -- "complaint" anthropomorphizes the audit output;
the intended contrast is structured task list versus open-ended criticism.
OLD:
```
a concrete, bounded task list for data stewards rather than a complaint.
```
NEW:
```
a concrete, bounded task list for data stewards rather than an open-ended criticism.
```

---

Patch counts: paper1 7, paper2 7, paper3 8, paper4 7, paper5 7 -- total 36.
Dependency: PATCH 14 must be applied together with PATCH 1 (or both
skipped).
