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

<div class="ultra-glass-card p-12 mb-8 animate-border-glow">
  <h1 class="ultra-title animate-float mb-8">Improving Observability Efficiency</h1>
  <h2 class="text-3xl text-blue-600 animate-super-glow font-bold tracking-tight">in a Decentralized Cloud Environment</h2>
</div>

---
layout: section
zoom: 1
transition: fade
background: 'radial-gradient(circle at top right, #3b82f611, transparent), radial-gradient(circle at bottom left, #60a5fa11, transparent)'
---
<div class="ultra-glass-card animate-scale" style="margin: 2rem auto; max-width: 800px;">
  <h2 class="ultra-title text-center mb-8 animate-super-glow">
    {{ "Table of Contents" }}
  </h2>
  <div class="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 shadow-xl">
    <Toc maxDepth="2"/>
  </div>
</div>

---
layout: title
title: "Project Context"
zoom: 1.15
transition: slide-up
chapter: 'Project Context'
background: 'radial-gradient(circle at center, #3b82f611, transparent)'
---
---
layout: text-image
hideInToc: true
media: '/images/ic.jpeg'
caption: 'Impossible Cloud Gmbh'
class: 'content-center'
transition: fade
---

<div class="animate-fade-in h-full flex flex-col justify-center">
  <h1 class="ultra-title mb-3 animate-super-glow">Hosting Company</h1>

  <div class="ultra-glass-card animate-border-glow !py-2 flex-shrink-0">
    <h3 class="text-lg font-bold text-blue-600 mb-2">Revolutionizing cloud storage:</h3>
    <ul class="ultra-list !space-y-1.5">
      <div class="grid grid-cols-1 gap-1.5">
        <li class="animate-slide-right delay-100 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🚀</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Hot storage</div>
              <div class="text-xs text-gray-600 truncate">Advanced data storage solutions</div>
            </div>
          </div>
        </li>
        <li class="animate-slide-right delay-200 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🛡️</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">Durability</div>
              <div class="text-xs text-gray-600 truncate">99.999999999% data durability</div>
            </div>
          </div>
        </li>
        <li class="animate-slide-right delay-300 group !py-1.5 !px-3">
          <div class="flex items-center gap-2">
            <div class="text-xl text-blue-500 group-hover:scale-110 transition-transform">🔄</div>
            <div class="min-w-0">
              <div class="font-bold text-sm">S3 API compatibility</div>
              <div class="text-xs text-gray-600 truncate">Seamless integration with cloud</div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</div>

---
layout: text-image
hideInToc: true
reverse: true
media: '/images/infra.png'
class: 'content-center'
transition: slide-up
---

<div class="animate-fade-in">
  <h1 class="ultra-title mb-4 animate-super-glow">Team Integration</h1>

  <div class="ultra-glass-card !py-3">
    <div class="grid grid-cols-2 gap-3">
      <div class="ultra-stats !py-2 animate-slide-up delay-100 group">
        <div class="ultra-number !text-xl group-hover:scale-110 transition-transform">01</div>
        <div class="font-bold text-blue-600 text-sm">Platform</div>
        <div class="text-xs text-gray-600">Core infrastructure</div>
      </div>
      <div class="ultra-stats !py-2 animate-slide-up delay-200 group">
        <div class="ultra-number !text-xl group-hover:scale-110 transition-transform">02</div>
        <div class="font-bold text-blue-600 text-sm">Infrastructure</div>
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

* Soaring Costs
* Performance Bottlenecks
* Data Reliability

---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/project_objective.jpeg'
imgSmall: true
reverse: true
---
# Project Objective
Enhance observability efficiency and reliability in our decentralized cloud:

* Reduce Costs
* Improve Performance
* Ensure Reliability
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
    <div style="min-height: 3em;">Track 1: Tempo Cost Reduction</div>
  </div>
  <div v-click class="prose w-1/3 flex flex-col gap-3" style="align-items: center;">
    <img src="/images/track2/perf.jpg" alt="Track 2" class="h-25 object-contain" style="margin-bottom: 1rem;">
    <div style="min-height: 3em;">Track 2: Mimir Performance Optimization</div>
  </div>
  <div v-click class="prose w-1/3 flex flex-col gap-3" style="align-items: center;">
    <img src="/images/track3/pipeline-problem.webp" alt="Track 3" class="h-25 object-contain" style="margin-bottom: 1rem;">
    <div style="min-height: 3em;">Track 3: Telemetry Failover Management</div>
  </div>
</div>
---
layout: title
title: "Track 1: Tempo Cost Reduction"
zoom: 1.15


chapter: 'Track 1: Tempo Cost Reduction'
---
---
layout: text-image
zoom: 1.15
imgSmall: true
media: '/images/track1/tempo_costs.png'
hideInToc: true

---
# Introduction:

Significant operational costs of Tempo:
- ~60% of total costs

**Goal:** Achieve substantial financial savings without compromising diagnostic value
---
layout: image
zoom: 1.15
media: '/images/track1/old_arch.png'
caption: 'Tempo Architecture'
---
---
layout: text-image
zoom: 1.15
hideInToc: true
reverse: true
media: '/images/track1/cost_distribution.png'
---
# Problem Analysis:

* 97% of Tempo costs from AWS Get Object.

---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track1/received_bandwidth.png'

---
## 

* Compactor generated >90% of used bandwidth

=> **Cost driver:** Data retrieval (GET) operations by the compactor
---
zoom: 1.15
hideInToc: true
---
# Root Cause Determination

**AWS S3 Cost Structure:**
* Egress Outside AWS S3 Network is Charged heavily
* Egress within AWS S3 Network is Free

**Compactor Component Behavior:**

* Full scans of trace data in S3
* Rewrites optimized blocks back to S3

---
layout: new-section
zoom: 1.15
hideInToc: true
---
## Root Cause: 
### Massive data egress from S3 to external network locations driven by compaction operations
---
zoom: 1.15
hideInToc: true

---
# Proposed Architecture

### Core solution: 
Relocate Tempo compactor within AWS network.
### Objective: 
Leveraging free internal S3 data transfers within AWS network.

---
layout: image
zoom: 1.15
media: '/images/track1/new_arch.png'
caption: 'Tempo New Architecture'
---
---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track1/results.png'
---
# Results and Impact
* **Cost Reduction**: 96% reduction in monthly Tempo costs
---
zoom: 1.15
hideInToc: true
---
# Conclusion
**Key Achievements:**
* Significant Cost Savings
* Enhanced Efficiency

**Future Considerations**: Further optimizations across other observability components.
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

* Performance bottlenecks within Mimir
* **Goal:** Reduce query latency for Mimir

---
zoom: 1.15
hideInToc: true

---
# Problem Analysis

Significant Grafana dashboard loading times (>60s):
* Degraded user experience 
* Degraded monitoring efficiency

**Reason:** 
high cardinality queries

---
zoom: 1.15
hideInToc: true

---
# Experiment Setup

Structured test framework crucial for accurate measurement and validation

**Assessment Metrics:**
* Average Query Latency
* Dashboard Visual Consistency
---
zoom: 1.15
hideInToc: true

---
# Experiment Methodology

**Custom script:**
  * Periodic high-cardinality queries.
  * latency data saved for analysis.

**Grafana Dashboards Manual Test:**
  * Manually loaded a problematic dashboard
  * Recorded loading times & checked for visual inconsistencies
---
zoom: 1.15
hideInToc: true
layout: text-image
imgSmall: true
media: '/images/track2/initial_results.png'

---
# Fine tuning Mimir configuration

**Hypothesis:** Reduce data retrieval times by manipulating configuration

**Results:** Minimal improvement (\~5%)

=> Fine-tuning insufficient

---
layout: default
zoom: 1.15
hideInToc: true
---

# Investigation: Mimir Internals

**Production Tracing:** Collecting spans for slow queries

**Production Profiling:** 
  * Memory profiling
  * CPU profiling

**Codebase/Issue Review:** 
  * Issues Analysis
  * Codebase deep dive
---
layout: new-section
zoom: 1.15
hideInToc: true
---
## Root Cause:
### Not a specific bug or lack of optimization in Mimir, But Inherent computational cost for high-cardinality metrics over long time ranges with small `step`

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

* Significant latency reduction for high-cardinality queries
* Problematic dashboard latency reduced \~17-19%
* No visual inconsistencies observed

---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/track2/pr.png'
imgSmall: true
---

# Outcome: Upstream Integration Attempt
We decided to implement the solution as a middleware in Mimir query frontend

**Reasons for Non-Integration:**
* Prometheus API incompatibility
* Out of Mimir's core scope
---
zoom: 1.15
hideInToc: true
---
# Conclusion
**Key Achievements:**
* Understanding Mimir system internals
* Solution Logic for dynamic step handling

**Future work:** Explore other ways of implementing dynamic step logic

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
---
# Introduction

* Inherent reality in distributed environments: unavailability scenarios
* Critical problem of data loss during unavailabilities
* **Goal:** Enhance reliability of telemetry data delivery

---
zoom: 1.15
hideInToc: true

---
# Root Causes Analysis

Collectors Inefficiencies not made for extended outages:
* Heavy Memory Dependency
* Incomplete Disk Persistence

---
zoom: 1.15
hideInToc: true
---
# Critical Impact of the Problem

* Slower Troubleshooting
* Customer Support Degredation
* Regulatory Compliance Risks

---
layout: text-image
zoom: 1.15
media: '/images/track3/solution_arch.png'
hideInToc: true

---
# Solution Logic

conditional routing layer based on Observability health status

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

Dynamic routing by Hot Reloading the collector configuration
---
zoom: 1.15
hideInToc: true
layout: text-image
media: '/images/track3/fluentbit_workflow.png'

---
# FluentBit Implementation

Conditional logic via _Lua_ filter plugin + lightweight sidecar script
---
zoom: 1.15
hideInToc: true

---
# Results

**Successful Implementation**: Failover management system deployed across both Grafana Alloy and Fluent Bit collectors

**Operational Impact**:
* Enhanced Reliability
* Improved Operational Resilience
* Increased Confidence
---
zoom: 1.15
hideInToc: true
---
# Conclusion
**Key Achievements:**
* Reliable Telemetry Data Delivery
* Enhanced Operational Resilience

**Future Considerations**: Improving health check mechanisms and failover strategies

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
* **Track 1:** 96% cost reduction in Tempo
* **Track 2:** 20% dashboard latency reduction ( Not Integrated )
* **Track 3:** Reliable telemetry delivery during outages
---
zoom: 1.15
hideInToc: true
---
# Future Directions
* **Track 1:** Further optimizations across other observability components
* **Track 2:** Alternative implementations of dynamic step logic for Mimir
* **Track 3:** Enhancing telemetry failover strategies and health check mechanisms
---
zoom: 1.15
hideInToc: true
---
# Sources
* [Grafana Tempo Documentation](https://grafana.com/docs/tempo/latest/)

---
zoom: 1.15
layout: full-image
media: '/images/thank_you.png'
background: 'radial-gradient(circle at center, #2563eb11, transparent), radial-gradient(circle at top right, #60a5fa11, transparent), radial-gradient(circle at bottom left, #3b82f611, transparent)'
---

<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
  <div class="ultra-glass-card !p-12 relative overflow-hidden animate-border-glow max-w-4xl">
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent"></div>
    
    <h1 class="ultra-title !text-6xl mb-6 animate-float text-center">Thank You!</h1>
    
    <div class="grid grid-cols-1 gap-6 relative z-10">
      <div class="animate-fade-in delay-200">
        <p class="text-2xl text-blue-600 font-semibold animate-super-glow mb-4 text-center">Questions & Discussion</p>
        <div class="flex justify-center gap-6 mt-4">
          <div class="ultra-stats !py-3 !px-6 group">
            <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">📧</div>
            <div class="font-bold text-blue-600">Contact</div>
            <div class="text-sm text-gray-600">your.email@example.com</div>
          </div>
          <div class="ultra-stats !py-3 !px-6 group">
            <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">🌐</div>
            <div class="font-bold text-blue-600">Website</div>
            <div class="text-sm text-gray-600">www.yourwebsite.com</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute -bottom-8 -right-8 text-9xl opacity-10 transform rotate-12">
      🎉
    </div>
  </div>
</div>
