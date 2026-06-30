'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MOCK_LOGS = [
  { id: 1, type: 'info', text: 'INIT_OBSERVER: Attaching to OpenServ orchestrator...' },
  { id: 2, type: 'system', text: 'GRAPH_SYNC: Synchronizing Cognee deterministic memory.' },
  { id: 3, type: 'stream', text: 'AGENT [0x4A]: "Searching CRM for client history."' },
  { id: 4, type: 'stream', text: 'AGENT [0x4A]: "RAG context loaded. Belief state formed."' },
  { id: 5, type: 'alert', text: 'DRIFT_DETECTED: Semantic divergence score 0.89' },
  { id: 6, type: 'action', text: 'MAR_PROTOCOL: Halting execution. Firing resolution agent.' },
];

export const ActiveLogViewport = ({ activeNodeId }: { activeNodeId: string | null }) => {
  const [logs, setLogs] = useState<typeof MOCK_LOGS>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate streaming logs safely using state length
    const interval = setInterval(() => {
      setLogs(prev => {
        if (prev.length < MOCK_LOGS.length) {
          return [...prev, MOCK_LOGS[prev.length]];
        }
        clearInterval(interval);
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <aside className="w-[30vw] h-screen glass-panel flex flex-col z-20 shrink-0 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="h-16 border-b border-[var(--border-glass)] flex items-center px-6 justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-widest text-white">KORDA_OBSERVER</span>
        </div>
        <span className="font-mono text-[10px] text-[var(--text-secondary)]">PORT: 5000</span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 border-b border-[var(--border-glass)] shrink-0 bg-white/[0.01]">
        <div className="p-4 border-r border-[var(--border-glass)]">
          <span className="block font-mono text-[10px] text-[var(--text-secondary)] mb-1">COHERENCE</span>
          <span className="block font-mono text-xl text-white">98.2%</span>
        </div>
        <div className="p-4">
          <span className="block font-mono text-[10px] text-[var(--text-secondary)] mb-1">ACTIVE NODES</span>
          <span className="block font-mono text-xl text-[var(--accent-cyan)] text-glow-cyan">{activeNodeId ? '1' : '0'}</span>
        </div>
      </div>

      {/* Log Stream */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 font-mono text-[11px] leading-relaxed">
        {logs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`
              pl-3 border-l-2 
              ${log.type === 'alert' ? 'border-[var(--accent-purple)] text-[var(--accent-purple)] text-glow-purple' : ''}
              ${log.type === 'action' ? 'border-[var(--accent-cyan)] text-[var(--accent-cyan)] text-glow-cyan' : ''}
              ${log.type === 'info' || log.type === 'system' ? 'border-[var(--text-muted)] text-[var(--text-secondary)]' : ''}
              ${log.type === 'stream' ? 'border-[var(--border-hover)] text-white' : ''}
            `}
          >
            <span className="opacity-40 mr-2">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            {log.text}
          </motion.div>
        ))}
        {logs.length === MOCK_LOGS.length && (
          <div className="pl-3 mt-2 flex items-center gap-2 text-[var(--text-muted)]">
            <div className="w-1.5 h-3 bg-[var(--text-muted)] animate-pulse" />
            <span>Awaiting input...</span>
          </div>
        )}
      </div>
    </aside>
  );
};
