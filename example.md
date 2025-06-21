---
theme: ./
colorSchema: 'light'
layout: intro
# https://sli.dev/custom/highlighters.html
highlighter: shiki
zoom: 1.1
---

---
layout: section
zoom: 1
---
<div class="text-center mt-2 p-2" style="margin: 1rem 0 3rem 0">
  <h2 class="text-lg font-bold text-primary-600 dark:text-primary-300">
    {{ "Table of Contents" }}
  </h2>
</div>
<div style="font-size: 1.3rem; color: #0d3326; padding: 1rem 2rem">
    <Toc maxDepth="2"/>
</div>

---
layout: title
title: "Project Context"
zoom: 1.15

chapter: 'Project Context'
---
---
layout: text-image
hideInToc: true
media: '/images/ic.jpeg'
caption : 'Impossible Cloud Gmbh'
zoom: 1.15
imgSmall: true
---
# Hosting Company

**Revolutionizing cloud storage:**
- Unlimited hot storage 
- Optimized for highest durability
- S3 API compatibility

---
layout: text-image
hideInToc: true
reverse: true
imgSmall: true
media: '/images/infra.png'
zoom: 1.15
---
# Team Integration

Infrastructure team Responsible for:
- Platform architecture and scaling
- Infrastructure provisioning and automation
- Site reliability engineering (SRE) practices
- Observability systems management

---
layout: title
title: "Problem Analysis"
zoom: 1.15


chapter: 'Problem Analysis'
---
---
layout: text-image
zoom: 1.15
hideInToc: true
media: '/images/observability.jpg'
imgSmall: true

---
# Abstract
* Modern Cloud Systems: Distributed & Complex
* => Observability as a Requirement
* Distributed Systems Scale
* => Observability Stack Must also Scale

==> **Performance, Cost, Reliability Challenges**
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
    <span> Distributed Logging, Metrics and logging</span>
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
* Operational Burden

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
* Streamline Operations
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
media: '/images/track1/costs.png'
hideInToc: true

---
# Introduction:

* Significant operational costs of Tempo
* **Goal:** Achieve substantial financial savings without compromising diagnostic value
---
layout: text-image
zoom: 1.15
hideInToc: true
reverse: true
media: '/images/track1/cost_distribution.png'

---
# Problem Analysis:

The most expensive observability component (~60% of total costs).
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
* Egress Outside AWS S3 Network: $0.085/GB.
* Egress Within AWS S3 Network: $0.000/GB.

**Compactor Component Behavior:**

Each compaction cycle:
* Full scans of trace data in S3
* Rewrites optimized blocks back to S3

---
layout: image
zoom: 1.15
media: '/images/track1/old_arch.png'
caption: 'Tempo Old Architecture'
---
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
* **Smooth Migration**: Zero downtime; full monitoring preservation
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
media: '/images/track2/perf.jpg'
---
# Introduction

* Performance bottlenecks within Mimir
* **Goal:** Reduce query latency for Mimir

---
zoom: 1.15
hideInToc: true

---
# Problem Analysis: High Query Latency

Significant Grafana dashboard loading times (>60s):
* Degraded user experience 
* Operational efficiency for monitoring

Reason: 
high cardinality queries

---
zoom: 1.15
hideInToc: true

---
# Experiment Setup

Structured test framework crucial for accurate measurement and validation

**Assessment Metrics:**
* Average Query Latency
* Dashboard Visual Consistency & Overall Behavior
---
zoom: 1.15
hideInToc: true

---
# Experiment Methodology

**Custom script:**
  * Periodic high-cardinality PromQL queries.
  * latency data saved in `.csv` for analysis.

**Grafana Dashboards Manual Test:**
  * Manually loaded a dashboard with problematic queries
  * Recorded loading times & checked for vizual inconsistencies
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

=> Fine-tuning insufficient; deemed inadequate.

---
layout: default
zoom: 1.15
hideInToc: true
---

# Investigation: Mimir Internals

**Production Tracing:** Collecting spans for slow queries

**Production Profiling (CPU & Memory):** 
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

* significant latency reduction for high-cardinality queries
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

Pull Request (PR) submitted to Mimir upstream, but not merged

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

**Lessons Learned:** Importance of aligning solutions with open-source project philosophy

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
media: '/images/track3/pipeline-problem.webp'
---
# Introduction

* Critical problem of data loss during unavailabilities
* **Goal:** Enhance reliability of telemetry data delivery

---
zoom: 1.15
hideInToc: true

---
# Comprehensive Problem Analysis

* Inherent reality in distributed environments: unavailability scenarios
* Collectors consistently fail to deliver all data during outages
* Central LGTM stack often acts as a **single point of failure**

---
zoom: 1.15
hideInToc: true

---
# Root Causes Analysis

Intrinsic deficiencies within collectors' native buffering and retry mechanisms:
* Heavy Memory Dependency
* Incomplete Disk Persistence
* Limited Reliability for Prolonged Outages

---
layout: image
zoom: 1.15
media: '/images/track3/initial_arch.png'
hideInToc: true
caption: 'Current Telemetry Flow'
---

---
zoom: 1.15
hideInToc: true
---
# Critical Impact of the Problem

* Severe threat to operational capabilities and service reliability
* Operational Blind Spots, Slower Troubleshooting
* Customer Support Impact
* Regulatory Compliance Risks

---
layout: text-image
zoom: 1.15
media: '/images/track3/solution_arch.png'
hideInToc: true

---
# Solution Logic

* conditional routing layer based on LGTM health status

* Data in Failover Queue buffered to LGTM once services restore

---
zoom: 1.15
hideInToc: true

---
# Implementation Strategy

Includes Implementing for:
* **Grafana Alloy**: Hot Reload capability for dynamic routing
* **Fluent Bit**: Internal conditional logic via injected script

---
zoom: 1.15
hideInToc: true

---
# Grafana Alloy Implementation

#### Hot reload-based dynamic routing

**Mechanism:**
  * External script performs health checks on LGTM
  * External script update collector config via hot reload
  * Collector reload config and routes data conditionally based on current config

---
zoom: 1.15
hideInToc: true

---
# FluentBit Implementation

#### conditional logic via _Lua_ filter plugin + lightweight sidecar script

**Mechanism**:
  * Sidecar performs health checks, writes status to local file
  * Fluent Bit read status file 
  * Fluent Bit Conditional _Lua_ filter routes data based on status
---
zoom: 1.15
hideInToc: true
layout: image
media: '/images/track3/f_solution_arch.png'
caption: 'Telemetry Failover Solution Architecture'
---

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
# Summary of Achievements
* **Track 1:** Achieved 96% cost reduction in Tempo
* **Track 2:** Reduced Mimir query latency by 17-19% ( not integrated )
* **Track 3:** Ensuring reliable data delivery during outages

---
zoom: 1.15
hideInToc: true
---
# Key Takeaways
* **Cost Efficiency:** Strategic infrastructure changes can yield significant cost savings
* **Performance Optimization:** Tailored solutions can enhance system performance without compromising functionality
* **Collaboration:** Working closely with open-source communities is essential for successful integration and adoption of solutions

---
zoom: 1.15
hideInToc: true
---
# Future Directions
* **Track 1:** Explore further optimizations across other observability components
* **Track 2:** Investigate alternative implementations of dynamic step logic for Mimir
* **Track 3:** Continue enhancing telemetry failover strategies and health check mechanisms

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
---
[//]: # ()
[//]: # (# This is a reverse peguin)

[//]: # ()
[//]: # (Arepa ipsum dolor amet jalabola! aenean sit tequeños se prendio esta mierdaa menool ladilla chamito;? Nisl nojoda eu amet in? Nisl cuál es la guachafita ni lava ni presta la batea háblame cloro gravida sifrino macundal panita; Sed háblame cloro nunc empanada ac coroto Na webona vladimil parchita? Cacique ladilla sit Se prendio el peo labia gravida Praesent tequeño. Qué paso mi pana?! elit parchita molleja aguacate vergación, háblame mollejúo chamito est burda mauris morbi;)

[//]: # (---)

[//]: # ()
[//]: # (# What is Slidev?)

[//]: # ()
[//]: # (Slidev is a slides maker and presenter designed for developers `devs`, consist of the following features)

[//]: # ()
[//]: # (- 📝 **Text-based** - focus on the content with Markdown, and then style them later)

[//]: # (- 🎨 **Themable** - theme can be shared and used with npm packages)

[//]: # (- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion)

[//]: # (- 🤹 **Interactive** - embedding Vue components to enhance your expressions)

[//]: # (- 🎥 **Recording** - built-in recording and camera view)

[//]: # (- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA)

[//]: # (- 🛠 **Hackable** - anything possible on a webpage)

[//]: # ()
[//]: # (<br>)

[//]: # (<br>)

[//]: # ()
[//]: # (Read more about [Why Slidev?]&#40;https://sli.dev/guide/why&#41;)

[//]: # ()
[//]: # (---)
[//]: # ()
[//]: # (# Navigation)

[//]: # ()
[//]: # (Hover on the bottom-left corner to see the navigation's controls panel)

[//]: # ()
[//]: # (### Keyboard Shortcuts)

[//]: # ()
[//]: # (|                                                      |                             |)

[//]: # (| -------------------------------- | ----------------- |)

[//]: # (| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |)

[//]: # (| <kbd>left</kbd>                                      | previous animation or slide |)

[//]: # (| <kbd>up</kbd>                                        | previous slide              |)

[//]: # (| <kbd>down</kbd>                                      | next slide                  |)

[//]: # ()
[//]: # (---)

[//]: # (layout: new-section)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (# New wild section appeared)

[//]: # ()
[//]: # (![penguin-work]&#40;https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif&#41;)

[//]: # ()
[//]: # (---)

[//]: # (eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png')

[//]: # (eventUrl: 'https://vuejs.amsterdam/')

[//]: # (twitter: '@alvarosabu')

[//]: # (twitterUrl: 'https://twitter.com/alvarosabu')

[//]: # ()
[//]: # (---)
[//]: # ()
[//]: # (# Code)

[//]: # ()
[//]: # (Use code snippets and get the highlighting directly!)

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { TresCanvas } from '@tresjs/core')

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <TresCanvas)

[//]: # (    clear-color="”#82DBC5”")

[//]: # (    window-size)

[//]: # (  >)

[//]: # (    <TresPerspectiveCamera />)

[//]: # (    <TresMesh)

[//]: # (      @click="onClick")

[//]: # (    >)

[//]: # (      <TresBoxGeometry :args="[1, 1, 1]" />)

[//]: # (      <TresMeshNormalMaterial />)

[//]: # (    </TresMesh>)

[//]: # (  </TresCanvas>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (---)

[//]: # (layout: two-cols)

[//]: # (---)

[//]: # (Awiwiiw)

[//]: # ()
[//]: # (```vue)

[//]: # (// Model.vue)

[//]: # (<script setup lang="ts">)

[//]: # (import { useAnimations, useGLTF } from '@tresjs/cientos')

[//]: # ()
[//]: # (const { scene: model, animations } = await useGLTF&#40;)

[//]: # (  'models/ugly-bunny.gltf',)

[//]: # (&#41;)

[//]: # ()
[//]: # (const { actions, mixer } = useAnimations&#40;animations, model&#41;)

[//]: # (const currentAction = ref&#40;actions.Greeting&#41;)

[//]: # (currentAction.value.play&#40;&#41;)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <primitive :object="model" />)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (::right::)

[//]: # ()
[//]: # (```vue)

[//]: # (<template>)

[//]: # (  <TresCanvas)

[//]: # (    clear-color="”#82DBC5”")

[//]: # (    window-size)

[//]: # (  >)

[//]: # (    <TresPerspectiveCamera />)

[//]: # (    <Suspense>)

[//]: # (      <Model />)

[//]: # (    </Suspense>)

[//]: # (  </TresCanvas>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (---)
[//]: # (layout: two-thirds)

[//]: # (---)

[//]: # (Awiwiiw)

[//]: # ()
[//]: # (```vue)

[//]: # (// Model.vue)

[//]: # (<script setup lang="ts">)

[//]: # (import { useAnimations, useGLTF } from '@tresjs/cientos')

[//]: # ()
[//]: # (const { scene: model, animations } = await useGLTF&#40;)

[//]: # (  'models/ugly-bunny.gltf',)

[//]: # (&#41;)

[//]: # ()
[//]: # (const { actions, mixer } = useAnimations&#40;animations, model&#41;)

[//]: # (const currentAction = ref&#40;actions.Greeting&#41;)

[//]: # (currentAction.value.play&#40;&#41;)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <primitive :object="model" />)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (::right::)

[//]: # ()
[//]: # (```vue)

[//]: # (<template>)

[//]: # (  <TresCanvas)

[//]: # (    clear-color="”#82DBC5”")

[//]: # (    window-size)

[//]: # (  >)

[//]: # (    <TresPerspectiveCamera />)

[//]: # (    <Suspense>)

[//]: # (      <Model />)

[//]: # (    </Suspense>)

[//]: # (  </TresCanvas>)

[//]: # (</template>)

[//]: # (```)

[//]: # (---)

[//]: # (layout: text-window)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (# Consoles)

[//]: # ()
[//]: # (Use code snippets and get the highlighting directly into a nice looking window!)

[//]: # ()
[//]: # (::window::)

[//]: # ()
[//]: # (```ts)

[//]: # (// main.ts)

[//]: # ()
[//]: # (import { createDynamicForms } from '@asigloo/vue-dynamic-forms')

[//]: # (import { createApp } from 'vue')

[//]: # ()
[//]: # (const VueDynamicForms = createDynamicForms&#40;{)

[//]: # (  // Global Options go here)

[//]: # (}&#41;)

[//]: # ()
[//]: # (export const app = createApp&#40;App&#41;)

[//]: # ()
[//]: # (app.use&#40;VueDynamicForms&#41;)

[//]: # (```)

[//]: # (---)

[//]: # (layout: text-window)

[//]: # (reverse: true)

[//]: # (logoHeader: '/logo.svg')

[//]: # (eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png')

[//]: # (eventUrl: 'https://vuejs.amsterdam/')

[//]: # (twitter: '@alvarosabu')

[//]: # (twitterUrl: 'https://twitter.com/alvarosabu')

[//]: # (---)

[//]: # ()
[//]: # (# Embedded stuff)

[//]: # ()
[//]: # (Use window to show a live demo of any page, or even a sub component!)

[//]: # ()
[//]: # (::window::)

[//]: # ()
[//]: # (<div class="overflow-hidden relative w-full aspect-16-9">)

[//]: # (<iframe height="300" style="width: 100%;" scrolling="no" title="Text Clock" src="https://codepen.io/searleb/embed/pvQaJB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">)

[//]: # (  See the Pen <a href="https://codepen.io/searleb/pen/pvQaJB">)

[//]: # (  Text Clock</a> by Bill Searle &#40;<a href="https://codepen.io/searleb">@searleb</a>&#41;)

[//]: # (  on <a href="https://codepen.io">CodePen</a>.)

[//]: # (</iframe>)

[//]: # (</div>)

[//]: # (---)

[//]: # (class: 'grid text-center align-self-center justify-self-center')

[//]: # (---)

[//]: # (# Gracias totales)

[//]: # ()
[//]: # ([Documentations]&#40;https://sli.dev&#41; / [GitHub Repo]&#40;https://github.com/slidevjs/slidev&#41;)
