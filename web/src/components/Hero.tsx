'use client';
import { motion, useTransform, useSpring } from 'framer-motion';
import { useMousePosition } from '@/lib/hooks';
import { ScrambleText } from './ScrambleText';
import { MagneticButton } from './MagneticButton';

const SensorOrb = () => {
  const { x, y } = useMousePosition();
  const mouseX = useSpring(x, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 20 });
  const orbX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [18, -18]);
  const orbY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [12, -12]);

  return (
    <motion.div
      style={{ x: orbX, y: orbY }}
      className="relative mx-auto aspect-square w-[min(78vw,520px)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-[var(--steel)]/15 polar-grid opacity-70" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[10%] rounded-full border border-[var(--amber)]/20"
      />
      <div className="absolute inset-[16%] rounded-full overflow-hidden border border-[var(--border)] bg-[radial-gradient(circle_at_45%_40%,rgba(212,168,71,0.75),rgba(13,18,32,0.86)_38%,rgba(5,8,16,0.98)_70%)] shadow-[0_0_110px_rgba(212,168,71,0.22)]">
        <div className="absolute inset-0 opacity-45" style={{ backgroundImage: 'repeating-radial-gradient(circle, rgba(234,240,246,0.18) 0 1px, transparent 1px 24px)' }} />
        <div className="scanline absolute left-1/2 top-1/2 h-[1px] w-1/2 origin-left" />
        <motion.div
          animate={{ scale: [0.82, 1.04, 0.82], opacity: [0.25, 0.62, 0.25] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[28%] rounded-full border border-[var(--amber)]/55"
        />
        <div className="absolute left-[22%] top-[31%] h-2 w-2 rounded-full bg-[var(--amber)] shadow-[0_0_18px_var(--amber)]" />
        <div className="absolute right-[26%] top-[58%] h-1.5 w-1.5 rounded-full bg-[var(--steel)] shadow-[0_0_16px_var(--steel)]" />
      </div>
      <motion.div
        animate={{ scale: [1, 1.65], opacity: [0.55, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        className="absolute right-[22%] top-[24%] h-5 w-5 rounded-full border border-[var(--amber)]"
      />
      <div className="absolute right-[22%] top-[24%] h-2 w-2 rounded-full bg-[var(--amber)]" />
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="creative-gradient relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 instrument-grid opacity-40" />
      <div className="noise-overlay absolute inset-0 opacity-40" />
      <div className="absolute inset-0 polar-grid opacity-35" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-[0.96fr_1.04fr] lg:px-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]/72 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--amber)] shadow-[0_0_18px_var(--amber)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              <ScrambleText text="Reality Intelligence System" delay={0.2} />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-[clamp(3.8rem,8vw,8.8rem)] font-extrabold leading-[0.9] tracking-normal text-[var(--text-primary)]"
          >
            Korda keeps agents <span className="font-display font-normal italic text-[var(--amber)]">honest</span> in motion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[var(--text-secondary)] md:text-xl"
          >
            Reality intelligence for multi-agent systems. Korda reads memory, policy, retrieval, and action traces as one moving signal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton>
              <a href="#demo" className="btn-geo">
                Watch the monitor
              </a>
            </MagneticButton>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] px-8 py-4 font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--amber)]/60">
              Read the signal map
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <SensorOrb />
          <div className="absolute bottom-6 left-4 right-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]/78 p-4 backdrop-blur-md md:left-16 md:right-16">
            <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
              <span>Current reading</span>
              <span>drift 0.02</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {['Memory', 'Policy', 'Action'].map((item, index) => (
                <div key={item} className="rounded-md border border-[var(--border)] bg-[#050810]/70 p-3">
                  <div className="text-[var(--text-muted)]">{item}</div>
                  <div className="mt-1 font-mono text-[var(--amber)]">{index === 1 ? 'locked' : 'stable'}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 border-y border-[var(--border)] bg-[#050810]/50 py-4 backdrop-blur">
        <div className="marquee flex w-[200%] gap-10 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
          {Array.from({ length: 2 }).map((_, repeat) => (
            <div key={repeat} className="flex w-1/2 items-center justify-around gap-10">
              <span>Memory trace captured</span>
              <span>Policy conflict resolved</span>
              <span>Retrieval drift intercepted</span>
              <span>Agent belief reconciled</span>
              <span>Reality score stable</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
