# Korda

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-blue?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Cognee](https://img.shields.io/badge/Powered_by-Cognee-FF4B4B?style=for-the-badge)](https://cognee.ai)

> Korda is a Reasoning Coordination Plane for Enterprise AI. It actively monitors autonomous swarms against Cognee's deterministic graph memory, halting logic breaks and semantic drift before they execute in production.

---

## Overview

Autonomous agents operate in a black box, making the critical feedback loop of self-improvement difficult to debug at scale. When an agent hallucinates or diverges from the shared enterprise ontology, identifying the exact moment of failure traditionally requires parsing extensive text logs.

Korda solves this by visualizing the exact moment semantic drift occurs. It provides Enterprise DevOps teams with an active observability layer—the Graph Memory Plane—where the self-improvement feedback loop becomes visual, instantaneous, and actionable. 

## Core Capabilities

- **Graph Memory Plane:** Every interaction is stored in Cognee's deterministic graph memory, creating a living reality rather than a flat JSON log.
- **Black Box Observability:** Real-time coherence scoring checks RAG outputs and autonomous agent beliefs against a shared Enterprise ontology.
- **Swarm Coordination:** When logic drift is detected within an agent swarm, pipelines automatically pause, allowing agents to resolve conflicts using the Mutual Agentic Reasoning (MAR) protocol.
- **Enterprise Safety Net:** Runs as a shadow observer via OpenServ, actively monitoring Enterprise RAG pipelines without introducing computational overhead.

## Architecture & Interface

Korda features an asymmetric, dark-mode command center designed for high-density information tracking:

- **Active Log Viewport:** A real-time data stream of execution logs, coherence metrics, and agent thought processes.
- **Interactive Playground Canvas:** An edge-to-edge visualization of the Cognee graph memory and autonomous agents as interactive nodes. 
- **Contextual Micro-panels:** Node inspection via slide-out panels that reveal raw JSON payloads and internal belief states.

## Getting Started

To run the Korda frontend interface locally:

```bash
# Navigate to the web directory
cd web

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the dashboard.
