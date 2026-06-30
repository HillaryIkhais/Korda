'use client';
import { useState } from 'react';
import { ActiveLogViewport } from '@/components/ActiveLogViewport';
import { PlaygroundCanvas } from '@/components/PlaygroundCanvas';

export default function Home() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-[var(--bg-dark)]">
      
      {/* 30% Left Panel: Active Log Viewport */}
      <ActiveLogViewport activeNodeId={activeNodeId} />
      
      {/* 70% Right Panel: Immersive Interactive Playground */}
      <PlaygroundCanvas activeNodeId={activeNodeId} setActiveNodeId={setActiveNodeId} />

    </div>
  );
}
