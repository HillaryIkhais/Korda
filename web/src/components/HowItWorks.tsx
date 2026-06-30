'use client';
import { motion } from 'framer-motion';
import { ScrambleText } from './ScrambleText';

const stages = [
  {
    label: '01',
    title: 'Observe',
    copy: 'Every completion, retrieval, memory write, and tool action becomes a trace.',
  },
  {
    label: '02',
    title: 'Compare',
    copy: 'Korda measures the distance between agent belief, policy, and known reality.',
  },
  {
    label: '03',
    title: 'Intervene',
    copy: 'When the signal breaks, execution pauses before drift becomes behaviour.',
  },
  {
    label: '04',
    title: 'Remember',
    copy: 'The resolution becomes system memory, so the same failure has less room to return.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] px-6 py-28 lg:px-16">
      <div className="absolute inset-0 instrument-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--amber)]">
              <ScrambleText text="Signal Map" delay={0.1} />
            </span>
            <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-normal md:text-7xl">
              Four moments between thought and action.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-[var(--text-secondary)]">
            Korda is not another dashboard. It is a runtime observer for the narrow moment where an agent decides what reality means.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative min-h-[300px] overflow-hidden bg-[var(--bg-card)] p-7"
            >
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full border border-[var(--amber)]/15 transition-transform duration-700 group-hover:scale-150" />
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">{stage.label}</div>
              <h3 className="mt-20 text-4xl font-bold text-[var(--text-primary)]">{stage.title}</h3>
              <p className="mt-5 text-base font-medium leading-relaxed text-[var(--text-secondary)]">{stage.copy}</p>
              <motion.div
                animate={{ x: ['-30%', '120%'] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-8 left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--amber)] to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
