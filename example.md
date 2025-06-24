---
theme: ./
colorSchema: 'light'
layout: intro
# https://sli.dev/custom/highlighters.html
highlighter: shiki
zoom: 1.1
transition: fade-out
css: unocss
background: 'radial-gradient(circle at top left, #2563eb11, transparent), radial-gradient(circle at bottom right, #60a5fa11, transparent)'
---

<div class="p-12 mb-8 animate-border-glow">
  <h1 class="ultra-title animate-float mb-8">Improving Observability Efficiency</h1>
  <h2 class="text-3xl text-blue-600 animate-super-glow font-bold tracking-tight">in a Decentralized Cloud Environment</h2>
</div>

---
layout: section
zoom: 1
background: 'radial-gradient(circle at top right, #3b82f611, transparent), radial-gradient(circle at bottom left, #60a5fa11, transparent)'
---
<div style="margin: 2rem auto; max-width: 800px; font-size: 23px">
  <h2 class="ultra-title text-center mb-8 animate-super-glow" style="font-size: 50px">
    {{ "Table of Contents" }}
  </h2>
  <div class="p-6 rounded-2xl">
    <Toc maxDepth="2"/>
  </div>
</div>

---
layout: title
title: "Project Context"
zoom: 1.15
chapter: 'Project Context'
background: 'radial-gradient(circle at center, #3b82f611, transparent)'
---
---
layout: text-image
hideInToc: true
media: '/images/ic.png'
caption: 'Impossible Cloud Gmbh'
class: 'content-center'
---

# Hosting Company

### Revolutionizing cloud storage

<ul class="ultra-list !space-y-1.5">
      <div class="grid grid-cols-1 gap-1.5">
        <li class="animate-slide-right delay-100 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🚀</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Hot storage</div>
            </div>
          </div>
        </li>
        <li class="animate-slide-right delay-200 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🛡️</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Durability</div>
            </div>
          </div>
        </li>
        <li class="animate-slide-right delay-300 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🔄</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">S3 API compatibility</div>
            </div>
          </div>
        </li>
      </div>
    </ul>

---
layout: text-image
hideInToc: true
reverse: true
media: '/images/infra.png'
class: 'content-center'
---

<div class="animate-fade-in">
  <h1 class="ultra-title mb-4 animate-super-glow">Team Integration</h1>

  <div class="ultra-glass-card !py-3">
    <div class="grid grid-cols-2 gap-3">
      <div class="ultra-stats !py-2 animate-slide-up delay-100 group">
        <div class="ultra-number !text-xl group-hover:scale-110 transition-transform">01</div>
        <div class="font-bold text-sm">Platform</div>
        <div class="text-xs text-gray-600">Core infrastructure</div>
      </div>
      <div class="ultra-stats !py-2 animate-slide-up delay-200 group">
        <div class="ultra-number !text-xl group-hover:scale-110 transition-transform">02</div>
        <div class="font-bold text-sm">Infrastructure</div>
        <div class="text-xs text-gray-600">Cloud solutions</div>
      </div>
      <div class="ultra-stats !py-2 animate-slide-up delay-300 group">
        <div class="ultra-number !text-xl group-hover:scale-110 transition-transform">03</div>
        <div class="font-bold text-blue-600 text-sm">Site Reliability</div>
        <div class="text-xs text-gray-600">24/7 stability</div>
      </div>
      <div class="ultra-stats !py-2 animate-slide-up delay-400 group">
        <div class="ultra-number !text-xl group-hover:scale-110 transition-transform">04</div>
        <div class="font-bold text-blue-600 text-sm">Observability</div>
        <div class="text-xs text-gray-600">Real-time insights</div>
      </div>
    </div>
  </div>
</div>

---
layout: title
title: "Problem Analysis"
zoom: 1.15


chapter: 'Problem Analysis'
background: 'radial-gradient(circle at center, #3b82f611, transparent)'
---
---
layout: default
zoom: 1.15
hideInToc: true

---

# Subject Analysis


<div class="text-2xl flex justify-center items-center text-center " style="flex-wrap: wrap">
    <div> Improving the</div>
    <div class="underline font-bold" style="padding-left:7px; padding-right: 7px"> Efficiency </div>
    <div> of the</div>
    <div class="underline font-bold" style="padding-left:7px; padding-right: 7px"> Observability </div>
    <div> platform in a</div>
    <div class="underline font-bold" style="padding-left:7px; padding-right: 7px"> Decentralized Cloud Environment </div>
</div>


<div class="text-left mt-6 space-y-4 text-md">

  <div v-click class="flex">
    <span class="underline decoration-dashed decoration-blue-500 font-bold">Efficiency : </span>
    <span class="w-2"></span>
    <span> System Reliability</span>
  </div>

  <div v-click class="flex">
    <span class="underline decoration-dashed decoration-green-500 font-bold">Observability : </span>
    <span class="w-2"></span>
    <span> Distributed Logging, Metrics and tracing</span>
  </div>


  <div v-click class="flex">
    <span class="underline decoration-dashed decoration-purple-500 font-bold">Decentralized Cloud Environment :</span>
    <span class="w-2"></span>
    <span> Multiple geographically distributed data centers</span>
  </div>
</div>
---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/problem_statment.png'
imgSmall: true

---
# Problem Statement
Scaling our observability stack introduces:


<ul v-click class="ultra-list !space-y-1.5">
      <div class="grid grid-cols-1 gap-1.5">
        <li class="animate-slide-right delay-100 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">💸</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Soaring Costs</div>
            </div>
          </div>
        </li>
        <li class="animate-slide-right delay-200 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🐢</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Performance Bottlenecks</div>
            </div>
          </div>
        </li>
        <li class="animate-slide-right delay-300 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">📉</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Data Reliability</div>
            </div>
          </div>
        </li>
      </div>
    </ul>

---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/project_objective.jpeg'
imgSmall: true
reverse: true
---
# Project Objective
Enhance observability efficiency and reliability:

* **Reduce Costs**
* **Improve Performance**
* **Ensure Reliability**
---
layout: default
zoom: 1.15
hideInToc: true
media: '/images/project_objective.jpeg'
imgSmall: true
reverse: true

---
# Project Tracks
Three key tracks:


<div class="flex gap-20 justify-center text-center" style="margin-top: 2rem; align-items: flex-start;">
  <div v-click class="prose w-1/3 flex flex-col gap-3" style="align-items: center;">
    <img src="/images/track1/costs.png" alt="Track 1" class="h-25 object-contain" style="margin-bottom: 1rem;">
    <div style="min-height: 3em;">

**Track 1:** Tempo Cost Reduction

</div>
  </div>
  <div v-click class="prose w-1/3 flex flex-col gap-3" style="align-items: center;">
    <img src="/images/track2/perf.jpg" alt="Track 2" class="h-25 object-contain" style="margin-bottom: 1rem;">
    <div style="min-height: 3em;">

**Track 2:** Mimir Performance Optimization

</div>
  </div>
  <div v-click class="prose w-1/3 flex flex-col gap-3" style="align-items: center;">
    <img src="/images/track3/pipeline-problem.webp" alt="Track 3" class="h-25 object-contain" style="margin-bottom: 1rem;">
    <div style="min-height: 3em;">

**Track 3:** Telemetry Failover Management

</div>
  </div>
</div>
---
layout: title
title: "Track 1: Tempo Cost Reduction"
zoom: 1.15


chapter: 'Track 1: Tempo Cost Reduction'
---
---
layout: image
zoom: 1.15
media: '/images/track1/old_arch.png'
caption: 'Tempo Integration'
---
---
layout: text-image
zoom: 1.15
imgLater: true
media: '/images/track1/tempo_costs.png'
hideInToc: true
---
# Introduction:

**High Tempo costs ( 60% of total observability costs) :**
- 🏋 Increased operational overhead
- 🤔 Questionable cost-effectiveness

<div v-click>

**Goal:** Achieve substantial financial savings without compromising diagnostic value

</div>
---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track1/cost_distribution.png'
---
# Problem Analysis:

* 97% of Tempo costs from AWS Get Object.

---
layout: text-image
zoom: 1.15
hideInToc: true
reverse: true
media: '/images/track1/received_bandwidth.png'

---
## 

* Compactor generated >90% of used bandwidth

<div v-click style="padding-top: 10px">

 **Hypothesis:** Main cost source is Data retrieval operations by the compactor

</div>
---
zoom: 1.15
hideInToc: true
---
# Root Cause Determination
<div v-click>

**AWS S3 Cost Structure:**
* Egress Outside AWS S3 Network is Charged heavily
* Egress within AWS S3 Network is Free

</div>
<div v-click>

**Compactor Component Behavior:**

* Full scans of trace data in S3
* Rewrites optimized blocks back to S3

</div>
---
layout: new-section
zoom: 1.15
hideInToc: true
---
## Root Cause: 
<div v-click>

### Massive data egress from S3 to external network locations driven by compaction operations

</div>
---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track1/new_arch.png'
caption: 'Tempo Proposed Architecture'
---
# Proposed Architecture
<div v-click>

### Core solution: 
Relocate Tempo compactor within AWS network.

**Objective:** Leveraging free internal S3 data transfers within AWS network.

</div>
---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track1/results.png'
---
# Results and Impact
**Cost Reduction:** 96% reduction in monthly Tempo costs
---
layout: title
title: "Track 2: Mimir Performance Optimization"
zoom: 1.15

chapter: 'Track 2: Mimir Performance Optimization'
---
---
layout: text-image
zoom: 1.15
imgSmall: false
hideInToc: true
media: '/images/track2/mimir_grafana.png'
---
# Introduction
<div v-click>

**Significant Grafana dashboard loading times (>60s):**
* 😕 Degraded user experience
* 📊 Degraded monitoring efficiency

</div>
<div v-click style="padding-top: 10px">

**Goal:** Reduce query latency for metrics

</div>
---
zoom: 1.15
hideInToc: true

---
# Problem Analysis
- High query latency in mimir from problematic dashboards
- Queries in question show multiple aggregations of high-cardinality metrics

<div v-click style="padding-top: 10px">

**Hypothesis:** Complex queries within Mimir

</div>

---
zoom: 1.15
hideInToc: true

---
# Experiment Setup
<div v-click>
Structured test framework crucial for accurate measurement and validation

**Assessment Metrics:**
* Average Query Latency
* Dashboard Visual Consistency
</div>
---
zoom: 1.15
hideInToc: true

---
# Experiment Methodology

**Custom script:**
  * Periodic high-cardinality queries.
  * latency data saved for analysis.

<div v-click>

**Grafana Dashboards Manual Test:**
  * Manually loaded a problematic dashboard
  * Recorded loading times & checked for visual inconsistencies

</div>
---
zoom: 1.15
hideInToc: true
layout: text-image
media: '/images/track2/initial_results.png'

---
# Fine tuning Mimir configuration

**Hypothesis:** Reduce data retrieval times by manipulating configuration

<div v-click>

**Results:** Minimal improvement (\~5%)

=> Fine-tuning insufficient

</div>

---
layout: default
zoom: 1.15
hideInToc: true
---

# Investigation: Mimir Internals
<div v-click>

**Production Tracing:** Collecting spans for slow queries

</div>
<div v-click>

**Production Profiling:** 
  * Memory profiling
  * CPU profiling

</div>

<div v-click>

**Codebase/Issue Review:** 
  * Issues Analysis
  * Codebase deep dive

</div>
---
layout: new-section
zoom: 1.15
hideInToc: true
---
## Root Cause:
<div v-click>

### Inherent computational cost for high-cardinality metrics over long time ranges with small `step`

</div>

---
layout: image
zoom: 1.15
hideInToc: true
media: '/images/track2/query_logic.png'
caption: 'Query Handling Logic'
---

---
layout: image
zoom: 1.15
hideInToc: true
media: '/images/track2/solution.png'
caption: 'Proposed Solution: Dynamic Step Middleware'
---

---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track2/final_results.png'
---

# Results

Integrated dynamic step logic into Mimir query frontend
<div v-click>

* Significant latency reduction for high-cardinality queries

</div>
<div v-click>

* Problematic dashboard latency reduced **\~19-21%**
* No visual inconsistencies observed

</div>

---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track2/pr.png'
imgSmall: true
---

# Outcome: Upstream Integration Attempt
We decided to implement the solution as a middleware in Mimir query frontend

<div v-click>

**Reasons for Non-Integration:**
* Prometheus API incompatibility
* Out of Mimir's core scope

</div>

---
layout: title
title: "Track 3: Telemetry Failover Management"
zoom: 1.15

chapter: 'Track 3: Telemetry Failover Management'
---
---
zoom: 1.15
hideInToc: true
layout: text-image
media: '/images/track3/arch.png'
imgSmall: true
---
# Introduction

**Telemetry data loss caused by unavailability scenarios:**
* 🔍 Slower Troubleshooting
* 🙍‍♂️ Customer Support Degredation
* ⚖️ Regulatory Compliance Risks

<div v-click style="padding-top: 10px">

**Goal:** Enhance reliability of telemetry data delivery

</div>

---
zoom: 1.15
hideInToc: true

---
# Root Causes Analysis

Collectors Inefficiencies not made for extended outages:
* Heavy Memory Dependency
* Incomplete Disk Persistence

---
layout: text-image
zoom: 1.15
media: '/images/track3/solution_arch.png'
hideInToc: true

---
# Solution Logic

### conditional routing layer based on observability health status

---
zoom: 1.15
hideInToc: true
layout: text-image
media: '/images/track3/alloy.png'
additionalImg: '/images/track3/fluentbit.png'
imgSmall: true

---
# Implementation Strategy

For all used collectors:
* **Grafana Alloy**
* **Fluent Bit**

---
zoom: 1.15
hideInToc: true
layout: text-image
media: '/images/track3/alloy_workflow.png'


---
# Grafana Alloy Implementation

### Hot Reloading Grafana Alloy configuration
---
zoom: 1.15
hideInToc: true
layout: text-image
media: '/images/track3/fluentbit_workflow.png'

---
# FluentBit Implementation

### Custom Lua Script in the Fluent Bit pipeline
---
zoom: 1.15
hideInToc: true

---
# Results

**Successful Implementation**: 

Failover management system deployed across both Grafana Alloy and Fluent Bit collectors

**Operational Impact**:
* Improved Operational Resilience
* Increased Confidence
---
layout: title
title: "Conclusion"
zoom: 1.15

chapter: 'Conclusion'
---

---
zoom: 1.15
hideInToc: true
---
# Achievements
<div style="padding: 20px">

* 💰 **96%** cost reduction in Tempo

</div>
<div v-click style="padding: 20px">

* ⚡ **~ 20%** dashboard latency reduction ( Not Integrated )

</div>

<div v-click style="padding: 20px">

* 📦 **Reliable** telemetry delivery during outages

</div>
---
zoom: 1.15
hideInToc: true
---
# Future Directions
<div style="padding: 20px">

* 🌐 Trying presented solutions across other observability components

</div>
<div v-click style="padding: 20px">

* 🧠 Alternative implementations of dynamic step logic for Mimir

</div>
<div v-click style="padding: 20px">

* 🛡️ Enhancing telemetry failover strategies and health check mechanisms

</div>
---
zoom: 1.15
layout: full-image
media: '/images/thank_you.png'
---
---