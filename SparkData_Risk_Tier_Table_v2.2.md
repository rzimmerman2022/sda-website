**SparkData Analytics**

Risk Tiering & Required Controls

SOP Section 1.2 (Drop-in Ready)

+:---------------------------------------------------------------------:+
| Version: **2.2** \| Last Updated: **November 30, 2025**               |
|                                                                       |
| Compliance Alignment: **AICPA QM • EU AI Act • PCAOB • Agentic AI     |
| Best Practices**                                                      |
+-----------------------------------------------------------------------+

# Purpose

This tiering and control matrix implements SparkData\'s alignment with:

- **AICPA QM standards** (risk-based quality controls)

- **EU AI Act requirements** (logging and human oversight)

- **PCAOB guidance** (independent verification and professional
  skepticism)

- **Production agentic AI patterns** (multi-agent, multi-model
  verification)

# 1.2.1 Risk Tier Definitions

  ----------------------------------------------------------------------------
   **Tier**  **Name**   **Typical Examples**                     **Default?**
  ---------- ---------- --------------------------------------- --------------
    **T0**   Low /      Docs-only edits, comments, non-prod           No
             Trivial    scripts, cosmetic refactors, internal   
                        notes                                   

    **T1**   Medium     Non-core features, UI changes, minor        **YES
                        pipeline steps, small schema tweaks      (Default)**

    **T2**   High       Core business logic, key pipeline             No
                        stages, data model changes,             
                        auth-adjacent code                      

    **T3**   Critical   Security-sensitive logic,                     No
                        billing/financial flows, regulatory     
                        workflows, PII handling, MDRS/RAI core  
  ----------------------------------------------------------------------------

# 1.2.2 Required Controls Matrix

+-------------+--------------------------+---------------------+------------------------+
| **TIER**    | **AI AGENTS REQUIRED**   | **EVIDENCE          | **HUMAN OVERSIGHT**    |
|             |                          | REQUIRED**          |                        |
+:===========:+==========================+=====================+========================+
| **T0**      | • Builder Agent          | • None formal       | • None, or spot-check  |
|             | (optional)               |                     | at reviewer\'s         |
| LOW         |                          | • Quick lint if     | discretion             |
|             | • No formal review       | code touched        |                        |
|             | required                 |                     |                        |
+-------------+--------------------------+---------------------+------------------------+
| **T1**      | • Planner (optional for  | • test_evidence.txt | • Human merges PR      |
|             | small items)             |                     |                        |
| MEDIUM      |                          | • lint_evidence.txt | • Human reads review   |
|             | • Builder Agent          |                     | before approving       |
| **DEFAULT** |                          | •                   |                        |
|             | • Adversarial Reviewer   | types_evidence.txt  |                        |
|             | (blind, fresh chat)      |                     |                        |
+-------------+--------------------------+---------------------+------------------------+
| **T2**      | **• Planner Agent        | • All T1 evidence   | **• Human lead must    |
|             | REQUIRED**               |                     | approve**              |
| HIGH        |                          | • DECISION\_\*.json |                        |
|             | • Builder Agent          |                     | • Cannot auto-merge    |
|             |                          | •                   |                        |
|             | • Independent            | VERIFICATION\_\*.md | • Review documented in |
|             | Verification Agent       |                     | PR                     |
|             |                          |                     |                        |
|             | > *⚠️ MUST be separate   |                     |                        |
|             | > model invocation in    |                     |                        |
|             | > fresh chat with NO     |                     |                        |
|             | > access to Builder or   |                     |                        |
|             | > Reviewer               |                     |                        |
|             | > narratives/rationales* |                     |                        |
|             |                          |                     |                        |
|             | • At least 1 specialized |                     |                        |
|             | lens (Security OR        |                     |                        |
|             | Performance)             |                     |                        |
|             |                          |                     |                        |
|             | **• For pipelines:       |                     |                        |
|             | Data-Quality Lens        |                     |                        |
|             | required**               |                     |                        |
+-------------+--------------------------+---------------------+------------------------+
| **T3**      | **• Planner Agent        | • All T2 evidence   | **• Senior human owner |
|             | REQUIRED**               |                     | must approve**         |
| CRITICAL    |                          | • 4x                |                        |
|             | • Builder Agent          | PERSPECTIVE\_\*.md  | • For                  |
|             |                          | (or 5x for          | PII/billing/regulated: |
|             | **• Four-Lens Review     | pipelines)          | Compliance/Business    |
|             | (all 4 lenses)**         |                     | owner sign-off         |
|             |                          | • COMPARISON\_\*.md | REQUIRED before merge  |
|             | > *⚠️ Each lens SHOULD   |                     |                        |
|             | > use different model    | • CONSENSUS\_\*.md  | • Breaking changes     |
|             | > family                 |                     | require rollback       |
|             | > (Claude/GPT/Gemini)    | • AI_RUN\_\*.json   | plan + explicit        |
|             | > where available*       |                     | sign-off               |
|             | >                        |                     |                        |
|             | > \- Security-First      |                     |                        |
|             | >                        |                     |                        |
|             | > \- Performance-First   |                     |                        |
|             | >                        |                     |                        |
|             | > \-                     |                     |                        |
|             | > Maintainability-First  |                     |                        |
|             | >                        |                     |                        |
|             | > \- Resilience-First    |                     |                        |
|             | >                        |                     |                        |
|             | > **- Data-Quality-First |                     |                        |
|             | > (for pipelines)**      |                     |                        |
|             |                          |                     |                        |
|             | • Devil\'s Advocate      |                     |                        |
|             | Re-Audit (triggered if   |                     |                        |
|             | agreement \> 80%)        |                     |                        |
|             |                          |                     |                        |
|             | • Differential Model     |                     |                        |
|             | Comparison Gate (≥2      |                     |                        |
|             | different model          |                     |                        |
|             | families)                |                     |                        |
+-------------+--------------------------+---------------------+------------------------+

# 1.2.3 Evidence File Schemas

  ----------------------------------------------------------------------------
  **File Type**         **Description**       **Required Contents**
  --------------------- --------------------- --------------------------------
  test_evidence.txt     Test execution        Command(s) run, pass/fail count,
                        results               coverage %, failures detail

  lint_evidence.txt     Linter output         Tool name, command, pass/fail,
                                              issue count, issue details

  types_evidence.txt    Type checker output   Tool (mypy/pyright/etc),
                                              command, error count, errors
                                              detail

  DECISION\_\*.json     AI decision record    { tier, models\[\], risk_score,
                                              verdict, timestamp, issues\[\],
                                              human_override }

  VERIFICATION\_\*.md   Verification report   Gate criteria evaluation, risk
                                              score, verdict, evidence bullets

  PERSPECTIVE\_\*.md    Lens-specific review  Lens name, issues found,
                                              strengths, risk score,
                                              gate-stoppers

  COMPARISON\_\*.md     Differential analysis Candidates compared, differences
                                              by category, recommendation

  CONSENSUS\_\*.md      Multi-model consensus Agreement level, divergence
                                              areas, Devil\'s Advocate trigger
                                              status

  AI_RUN\_\*.json       Run metadata          Models used, timestamps, prompt
                                              hashes, input/output hashes
  ----------------------------------------------------------------------------

## Minimal DECISION\_\*.json Schema

+-----------------------------------------------------------------------+
| {                                                                     |
|                                                                       |
| \"decision_id\": \"DECISION_2025-11-30T10-30-00Z_abc123\",            |
|                                                                       |
| \"tier\": \"T2\",                                                     |
|                                                                       |
| \"timestamp\": \"2025-11-30T10:30:00Z\",                              |
|                                                                       |
| \"models\": \[                                                        |
|                                                                       |
| {\"name\": \"claude-opus-4\", \"role\": \"builder\"},                 |
|                                                                       |
| {\"name\": \"gpt-5-codex\", \"role\": \"verification\"}               |
|                                                                       |
| \],                                                                   |
|                                                                       |
| \"risk_score\": 3,                                                    |
|                                                                       |
| \"verdict\": \"APPROVE_WITH_CONDITIONS\",                             |
|                                                                       |
| \"issues\": \[                                                        |
|                                                                       |
| {\"severity\": \"medium\", \"category\": \"performance\",             |
| \"description\": \"N+1 query in loop\"}                               |
|                                                                       |
| \],                                                                   |
|                                                                       |
| \"conditions\": \[\"Add caching for user lookup\"\],                  |
|                                                                       |
| \"human_override\": {\"status\": \"none\", \"approver\": null,        |
| \"notes\": null}                                                      |
|                                                                       |
| }                                                                     |
+-----------------------------------------------------------------------+

# 1.2.4 Agreement Measurement (Devil\'s Advocate Trigger)

Devil\'s Advocate Re-Audit is triggered when reviewer agreement is
**suspiciously high**.

### Measurement Methods (choose one):

+---------------------------------------+-------------------+----------------------------------+
| **Method**                            | **Trigger         | **How to Calculate**             |
|                                       | Threshold**       |                                  |
+=======================================+:=================:+==================================+
| **Issue Overlap**                     | \> 80%            | (issues in common) / (total      |
|                                       |                   | unique issues)                   |
+---------------------------------------+-------------------+----------------------------------+
| **Risk Score Spread**                 | \< 1.0            | max(scores) - min(scores)        |
+---------------------------------------+-------------------+----------------------------------+
| **Jaccard Similarity**                | \> 0.8            | On (severity, category,          |
|                                       |                   | location) tuples                 |
+---------------------------------------+-------------------+----------------------------------+
| **Embedding Cosine**                  | \> 0.9            | Cosine similarity of issue text  |
|                                       |                   | embeddings                       |
+---------------------------------------+-------------------+----------------------------------+
| **Simple Rule:** If \>80% of issues overlap AND risk scores differ by \<1, trigger Devil\'s  |
| Advocate.                                                                                    |
+----------------------------------------------------------------------------------------------+

### Operational Definition of \"Agreement \> 80%\"

In practice, trigger Devil\'s Advocate when:

- All reviewers raise essentially the **same 2--3 issues** and nothing
  else

- No reviewer identifies a **unique concern** the others missed

- Risk scores are within **1 point** of each other across all reviewers

- Review outputs read like **slight paraphrases** of each other
  (indicates possible cross-contamination)

*This suspiciously high agreement often indicates reviewers are
summarizing each other rather than performing independent analysis.
Devil\'s Advocate forces a genuinely adversarial perspective.*

### 🔮 Future Automation Note

The agreement measurement is currently manual. Future roadmap includes:

1.  Automated PERSPECTIVE\_\*.md parsing to extract issues and risk
    scores

2.  Similarity computation script (Jaccard on issue tuples, cosine on
    embeddings)

3.  CI hook that auto-triggers Devil\'s Advocate prompt when threshold
    met

*For now, manually compare reviewer outputs and invoke Devil\'s Advocate
when agreement seems suspiciously high.*

# 1.2.5 Tier Assignment Rules

1.  **Default to T1** unless you have a clear reason to go lower or
    higher

2.  **Elevate to T2** whenever a change touches: core logic, data
    models, auth, or key pipelines

3.  **Elevate to T3** whenever a change touches: security, PII, billing,
    regulatory logic, or SparkData core analytics

4.  **Lowering a tier** (e.g., T2 → T1) **must be justified** in the
    decision log with explicit rationale

5.  **When in doubt, go higher** - the extra review is cheap insurance

6.  **⚠️ ESCALATION RULE:** If time pressure conflicts with required
    tier controls, the tier **cannot be lowered**. Escalation to
    Engineering Lead / CTO is required. Compliance cannot be traded for
    speed.

### 🔴 TIER DISPUTE RESOLUTION

**If model or developer and reviewer disagree on tier assignment:**

1.  The **human lead** makes the final call

2.  Decision MUST be logged in DECISION\_\*.json with
    human_override.notes explaining rationale

3.  If no human lead available, **default to higher tier** until
    resolution

# 1.2.6 Quick Reference: When to Elevate Tier

  ------------------------------------------------------------------------
  **If the change touches\...**    **Minimum   **Rationale**
                                    Tier**     
  ------------------------------ ------------- ---------------------------
  Documentation only                **T0**     No code risk

  Non-production code (scripts,     **T0**     Limited blast radius
  tools)                                       

  UI/cosmetic changes               **T1**     User-facing but low logic
                                               risk

  Non-core business logic           **T1**     Standard development

  **Core business logic**           **T2**     High correctness
                                               requirements

  **Data models / schemas**         **T2**     Data integrity risk

  **Key pipeline stages**           **T2**     Data flow risk

  **Auth-adjacent code**            **T2**     Security-adjacent

  **Security-sensitive logic**      **T3**     Direct security impact

  **Billing / financial flows**     **T3**     Financial/legal risk

  **Regulatory / compliance         **T3**     Compliance risk
  code**                                       

  **PII handling**                  **T3**     Privacy/legal risk

  **MDRS / RAI core logic**         **T3**     SparkData core IP
  ------------------------------------------------------------------------

# 1.2.7 Data Pipeline Special Rules

**SparkData-Specific:** Data pipelines (dbt, Airflow, Spark, etc.) have
elevated requirements.

  ------------------------------------------------------------------------
  **Pipeline Change Type**  **Minimum   **Additional Requirements**
                              Tier**    
  ------------------------ ------------ ----------------------------------
  Schema changes              **T2**    Data-Quality Lens required

  New pipeline creation       **T2**    Full test plan required

  Core transformation         **T2**    Resilience Lens required
  logic                                 

  Pipeline affecting          **T3**    **All 5 lenses + Compliance
  billing/compliance data               sign-off**
  ------------------------------------------------------------------------

### Evidence Requirements for Pipelines:

- Log Great Expectations / dbt test summaries into test_evidence.txt

- Include row count assertions in metrics_snapshot

- Document schema contracts in DECISION\_\*.json

# 1.2.8 Tier Declaration Template

**Required:** Add this to the top of every AI session AND PR
description.

+-----------------------------------------------------------------------+
| \## Risk Tier Declaration                                             |
|                                                                       |
| \*\*Assigned Tier:\*\* \[T0 \| T1 \| T2 \| T3\]                       |
|                                                                       |
| \*\*Justification:\*\* \[Why this tier was selected - reference       |
| §1.2.6\]                                                              |
|                                                                       |
| \*\*Elevating factors:\*\* \[List any factors that pushed tier up, or |
| \"None\"\]                                                            |
|                                                                       |
| \*\*Required controls per §1.2.2:\*\*                                 |
|                                                                       |
| \- \[ \] \[List each required control\]                               |
|                                                                       |
| \- \[ \] \[Check off as completed\]                                   |
|                                                                       |
| \*\*Escalation (if applicable):\*\* \[If tier was contested, document |
| decision\]                                                            |
+-----------------------------------------------------------------------+

# 1.2.9 Inline AI (Autocomplete) Policy

**For T2/T3 work:** Any AI-generated code---including inline suggestions
from Copilot, Cursor autocomplete, tab-completion, etc.---**must still
be put through:**

- A **Builder Mode** pass over the final diff, AND

- The appropriate **Reviewer / Verification / Lens prompts** before
  merge

  -----------------------------------------------------------------------
  Inline assistance is allowed, but it **never bypasses** the multi-agent
   quality gate. The tier controls apply to the final code regardless of
                           how it was generated.

  -----------------------------------------------------------------------

# 1.2.10 Compliance Alignment Summary

  --------------------------------------------------------------------------------
   **Tier**   **AICPA QM**    **EU AI Act**        **PCAOB**       **Agentic AI**
  ---------- --------------- --------------- --------------------- ---------------
    **T0**       Minimal           N/A                N/A                N/A
                controls                                           

    **T1**     Standard QC    Basic logging    Basic skepticism     Single-agent

    **T2**    Enhanced QC +  Full logging +       Independent        Multi-agent
               monitoring     documentation      verification      

    **T3**   Full QM system  Human oversight  Multi-perspective +    Multi-model
                                mandatory         skepticism          ensemble
  --------------------------------------------------------------------------------

# 1.2.11 CI Enforcement Hooks (Recommended)

For T2/T3 PRs, CI pipeline should verify:

+-----------------------------------------------------------------------+
| \# .github/workflows/tier-compliance.yml                              |
|                                                                       |
| \- name: Check T2/T3 Compliance                                       |
|                                                                       |
| if: contains(github.event.pull_request.labels.\*.name, \'T2\') \|\|   |
| contains(github.event.pull_request.labels.\*.name, \'T3\')            |
|                                                                       |
| run: \|                                                               |
|                                                                       |
| \# Verify DECISION\_\*.json exists                                    |
|                                                                       |
| if \[ ! -f logs/ai-decisions/DECISION\_\*.json \]; then               |
|                                                                       |
| echo \"ERROR: T2/T3 requires DECISION\_\*.json\"                      |
|                                                                       |
| exit 1                                                                |
|                                                                       |
| fi                                                                    |
|                                                                       |
| \# Verify VERIFICATION\_\*.md exists for T2+                          |
|                                                                       |
| if \[ ! -f reports/VERIFICATION\_\*.md \]; then                       |
|                                                                       |
| echo \"ERROR: T2/T3 requires VERIFICATION\_\*.md\"                    |
|                                                                       |
| exit 1                                                                |
|                                                                       |
| fi                                                                    |
|                                                                       |
| \# For T3, verify PERSPECTIVE\_\*.md files exist (at least 4)         |
|                                                                       |
| if \[\[ \"\${{ contains(github.event.pull_request.labels.\*.name,     |
| \'T3\') }}\" == \"true\" \]\]; then                                   |
|                                                                       |
| PERSPECTIVE_COUNT=\$(ls reports/PERSPECTIVE\_\*.md 2\>/dev/null \| wc |
| -l)                                                                   |
|                                                                       |
| if \[ \"\$PERSPECTIVE_COUNT\" -lt 4 \]; then                          |
|                                                                       |
| echo \"ERROR: T3 requires 4 PERSPECTIVE\_\*.md files (found           |
| \$PERSPECTIVE_COUNT)\"                                                |
|                                                                       |
| exit 1                                                                |
|                                                                       |
| fi                                                                    |
|                                                                       |
| fi                                                                    |
|                                                                       |
| \# Verify tier in decision log matches PR label                       |
|                                                                       |
| DECISION_TIER=\$(jq -r \'.tier\' logs/ai-decisions/DECISION\_\*.json  |
| \| head -1)                                                           |
|                                                                       |
| if \[\[ ! \"\${{ github.event.pull_request.labels.\*.name }}\" ==     |
| \*\"\$DECISION_TIER\"\* \]\]; then                                    |
|                                                                       |
| echo \"ERROR: Decision log tier (\$DECISION_TIER) doesn\'t match PR   |
| label\"                                                               |
|                                                                       |
| exit 1                                                                |
|                                                                       |
| fi                                                                    |
+-----------------------------------------------------------------------+

*This moves from \"SOP says we should\" to \"the pipeline refuses to
merge unless we did.\"*

# 1.2.12 Approved Model Families for T3

For T3 (Critical) work, use **at least 2 distinct model families**
across your agents:

+---------------------------------------+----------------------------+---------------------------+
| **Family**                            | **Models**                 | **Recommended For**       |
+=======================================+============================+===========================+
| **Anthropic**                         | Claude Opus 4, Claude      | Planning, Code Review,    |
|                                       | Sonnet 4, Claude Haiku 4   | Security Review           |
+---------------------------------------+----------------------------+---------------------------+
| **OpenAI**                            | GPT-5 Codex, GPT-4o,       | Implementation,           |
|                                       | o1-pro                     | Performance Review        |
+---------------------------------------+----------------------------+---------------------------+
| **Google**                            | Gemini 2.0 Pro, Gemini 2.0 | Alternative perspective,  |
|                                       | Ultra                      | Resilience Review         |
+---------------------------------------+----------------------------+---------------------------+
| **Meta**                              | Llama 3.1 405B (if         | Secondary verification    |
|                                       | self-hosted)               |                           |
+---------------------------------------+----------------------------+---------------------------+
| **T3 Minimum Requirement:** Builder and at least one Verification/Lens agent MUST use          |
| different model families.                                                                      |
+------------------------------------------------------------------------------------------------+

# 1.2.13 Pipeline & Workflow Examples by Tier

Concrete examples to help engineers assign the correct tier for common
SparkData scenarios:

+---------------------------------------+------------------------------+--------------------------------+
| **Tier**                              | **Pipeline / Workflow        | **Code Example**               |
|                                       | Example**                    |                                |
+:=====================================:+==============================+===============================:+
| **T0**                                | • Add comments to dbt model  | • Rename internal variable     |
|                                       |                              |                                |
|                                       | • Update Airflow DAG         | • Add logging statement        |
|                                       | description                  |                                |
|                                       |                              | • Update docstrings            |
|                                       | • Fix typo in pipeline       |                                |
|                                       | README                       |                                |
+---------------------------------------+------------------------------+--------------------------------+
| **T1**                                | • Add new non-critical dbt   | • New utility function         |
|                                       | model                        |                                |
|                                       |                              | • UI component styling         |
|                                       | • Minor Airflow task         |                                |
|                                       | optimization                 | • Non-core API endpoint        |
|                                       |                              |                                |
|                                       | • New dashboard data source  |                                |
+---------------------------------------+------------------------------+--------------------------------+
| **T2**                                | **• New customer matching    | **• Core business logic        |
|                                       | pipeline**                   | changes**                      |
|                                       |                              |                                |
|                                       | **• Schema changes to        | **• Database model             |
|                                       | staging tables**             | modifications**                |
|                                       |                              |                                |
|                                       | **• Core transformation      | **• Auth-adjacent code         |
|                                       | logic update**               | changes**                      |
+---------------------------------------+------------------------------+--------------------------------+
| **T3**                                | **• Changes to MDRS scoring  | **• RAI core algorithm         |
|                                       | rules**                      | changes**                      |
|                                       |                              |                                |
|                                       | **• Billing data pipeline    | **•                            |
|                                       | changes**                    | Authentication/authorization** |
|                                       |                              |                                |
|                                       | **• PII handling in data     | **• Financial calculation      |
|                                       | flows**                      | logic**                        |
+---------------------------------------+------------------------------+--------------------------------+
| **⚠️ WHEN IN DOUBT, CHOOSE THE HIGHER TIER**                                                          |
|                                                                                                       |
| The extra review is cheap insurance. It\'s always safer to over-review than under-review.             |
+-------------------------------------------------------------------------------------------------------+

# 1.2.14 Implementation Checklist

Use this checklist to operationalize the Risk Tier controls across your
development infrastructure:

### Infrastructure Setup

  ---- ------------------------------------------------------------------
   ☐   **Pre-commit hook** to block merges without required evidence
       files for the declared tier

   ☐   **CI job** to verify DECISION\_\*.json exists for all AI-assisted
       PRs (see §1.2.11)

   ☐   **IDE snippets/macros** for each Quick Prompt shortcut (VS Code,
       Cursor, JetBrains)

   ☐   **Weekly scorecard script** that generates model performance
       metrics from decision logs

   ☐   **Evidence directory structure** created: logs/ai-decisions/ and
       reports/
  ---- ------------------------------------------------------------------

### Team Enablement

  ---- ------------------------------------------------------------------
   ☐   **All engineers trained** on Risk Tier definitions and when to
       escalate

   ☐   **IDE Quick Prompts document** distributed and bookmarked by team

   ☐   **PR template updated** with Risk Tier Declaration block (§1.2.8)

   ☐   **Human leads identified** for T2/T3 approval authority
  ---- ------------------------------------------------------------------

### Compliance & Audit Readiness

  ---- ------------------------------------------------------------------
   ☐   **Decision log retention policy** defined (recommend 3+ years for
       regulated work)

   ☐   **Model scorecard baseline** established for quarterly performance
       reviews

   ☐   **Audit trail verification** tested: can reconstruct any
       AI-assisted decision from logs
  ---- ------------------------------------------------------------------

  -----------------------------------------------------------------------
                **END OF RISK TIER TABLE v2.1 (Enhanced)**

  -----------------------------------------------------------------------
