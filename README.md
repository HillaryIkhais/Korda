# Korda : The Reasoning Coordination Plane

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-blue?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Cognee](https://img.shields.io/badge/Powered_by-Cognee-FF4B4B?style=for-the-badge)](https://cognee.ai)
[![Hackathon](https://img.shields.io/badge/Hackathon-The_Hangover_Part_AI-8A2BE2?style=for-the-badge)](#)


**Agents are a black box.**
Korda is the Reasoning Coordination Plane for Enterprise AI. It cures "AI Amnesia" by actively monitoring your autonomous swarms against a deterministic graph memory, halting logic breaks and semantic drift before they execute in production.

**Built for the WeMakeDevs "The Hangover Part AI" Hackathon.**

## The Problem: The Black Box of Autonomous Swarms

In complex multi-agent systems, the hardest operational challenge is identifying exactly *why* and *where* an agent failed during a baseline run. Autonomous agents operate in a black box, making the critical feedback loop of self-improvement nearly impossible to debug at scale.

Existing observability tools tell you *what* happened. Korda tells you *why* reality fragmented.

The problem Korda solves isn't a niche edge case—it's the most expensive failure mode in any collaborative system. US businesses lose an estimated $2 trillion annually to miscommunication, and that figure only accounts for human-to-human interaction. When you introduce autonomous agents operating at machine speed, undetected context drift becomes catastrophic.

We identify two distinct failure modes:

1. **Reality Loss:** Losing context during a workflow (a retrieval problem).
2. **Reality Fragmentation:** Two agents forming conflicting interpretations of the exact same context (a graph traversal problem).

## The Korda Solution

Korda visualizes the exact moment semantic drift occurs. With Korda, DevOps teams no longer have to dig through thousands of flat text logs to find a failure; they watch it happen live on the Graph Memory Plane.

When logic drift is detected within an agent swarm, pipelines automatically pause. This active monitoring allows the system to resolve semantic conflicts before corrupted data or rogue actions hit production.

**OpenServ Integration:** Korda runs as a shadow observer via OpenServ. When semantic drift is detected, Korda leverages OpenServ's native requestHumanAssistance API to instantly halt the swarm pipeline before corrupted actions hit production.

## Powered by the Cognee Memory Lifecycle

Korda acts as an active orchestration layer sitting directly over Cognee's hybrid graph-vector infrastructure. We leverage the core memory lifecycle to give agent swarms a deterministic, shared reality:

* **`/ingest` (remember):** Ingest enterprise architecture, documentation, and decisions, permanently structuring them into the knowledge graph.


* **`/coherence` (recall):** Query the memory. Korda automatically routes the search between semantic similarity and deep graph traversals to evaluate whether an agent's internal belief has drifted from the canonical truth.


* **`/improve` (memify):** Run post-ingestion enrichment, prune stale nodes, and adapt node weights based on user feedback so the system gets smarter over time.


* **`/forget`:** Surgically prune or delete datasets when they are no longer needed, ensuring the swarm acts only on the current operational reality.



## Architecture & Interface

Korda replaces the "fluid" aesthetic of standard AI chat apps with a hardcore, asymmetric command-center layout built for engineers:

* **Active Log Viewport:** A sharp, terminal-style panel streaming real-time execution logs, coherence metrics, and agent thought processes.
* **Interactive Playground Canvas:** An edge-to-edge dark grid where the Cognee graph memory and autonomous agents are visualized as interactive topological nodes.
* **Contextual Micro-panels:** Node inspection via slide-out panels that reveal raw JSON payloads, origin tracing, and internal belief states.

## Getting Started

Korda requires three services running in parallel:

**1. The Graph Memory Plane (Backend)**
\`\`\`bash
cd backend
source venv/bin/activate
python3 app.py
\`\`\`

**2. The OpenServ Orchestrator**
\`\`\`bash
cd orchestrator
npm install
npm run dev
\`\`\`

**3. The Command Center Interface**
\`\`\`bash
cd web
npm install
npm run dev
\`\`\`