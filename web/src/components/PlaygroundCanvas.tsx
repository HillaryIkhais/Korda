'use client';
import { motion, AnimatePresence } from 'framer-motion';

const NODES = [
  { id: 'n1', x: 20, y: 30, type: 'memory', label: 'User Context' },
  { id: 'n2', x: 50, y: 20, type: 'rag', label: 'Vector Store DB' },
  { id: 'n3', x: 80, y: 40, type: 'agent', label: 'Sales Agent [0x4A]' },
  { id: 'n4', x: 40, y: 70, type: 'action', label: 'Send Email' },
];

export const PlaygroundCanvas = ({ 
  activeNodeId, 
  setActiveNodeId 
}: { 
  activeNodeId: string | null, 
  setActiveNodeId: (id: string | null) => void 
}) => {
  const activeNode = NODES.find(n => n.id === activeNodeId);

  return (
    <main className="flex-1 h-screen relative bg-[var(--bg-dark)] overflow-hidden">
      
      {/* Background Grid Map */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Connection Lines (Static for Demo) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
        <path d="M 20% 30% L 50% 20% L 80% 40% L 40% 70% Z" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Nodes */}
      {NODES.map(node => {
        const isActive = activeNodeId === node.id;
        const isAgent = node.type === 'agent';
        
        return (
          <motion.div
            key={node.id}
            onClick={() => setActiveNodeId(isActive ? null : node.id)}
            className={`absolute cursor-pointer flex flex-col items-center gap-2 group z-10`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? isAgent ? 'bg-[var(--accent-purple)] shadow-[0_0_30px_rgba(138,43,226,0.6)]' : 'bg-[var(--accent-cyan)] shadow-[0_0_30px_rgba(0,242,254,0.6)]' 
                  : 'glass-panel group-hover:border-white/30'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-white' : 'bg-[var(--text-secondary)] group-hover:bg-white transition-colors'}`} />
            </motion.div>
            <span className={`font-mono text-xs tracking-wider ${isActive ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Collapsible Contextual Micro-Panel */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-8 right-8 w-80 glass-panel rounded-2xl p-6 z-30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] tracking-widest text-[var(--text-secondary)]">NODE CONTEXT</span>
              <button onClick={() => setActiveNodeId(null)} className="w-6 h-6 rounded-full glass-panel hover:bg-white/10 flex items-center justify-center text-xs text-white">×</button>
            </div>
            
            <h3 className={`text-xl font-bold mb-2 ${activeNode.type === 'agent' ? 'text-[var(--accent-purple)] text-glow-purple' : 'text-[var(--accent-cyan)] text-glow-cyan'}`}>
              {activeNode.label}
            </h3>
            
            <div className="space-y-4 mt-6">
              <div>
                <span className="block font-mono text-[10px] text-[var(--text-secondary)] mb-1">TYPE</span>
                <span className="block font-mono text-xs text-white uppercase">{activeNode.type}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[var(--text-secondary)] mb-1">BELIEF STATE / PAYLOAD</span>
                <div className="bg-black/30 p-3 rounded-lg border border-[var(--border-glass)] font-mono text-[10px] text-[var(--text-secondary)] leading-relaxed">
                  {`{
  "status": "active",
  "confidence": 0.98,
  "memory_ref": "0x${Math.random().toString(16).slice(2, 8).toUpperCase()}",
  "drift_delta": "0.00"
}`}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};
