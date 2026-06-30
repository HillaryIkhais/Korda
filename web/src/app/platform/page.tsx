import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrambleText } from '@/components/ScrambleText';
import { SpatialCard } from '@/components/SpatialCard';

export default function Platform() {
  return (
    <main className="min-h-screen bg-[var(--bg-mint)] relative selection:bg-[var(--fluid-3)] selection:text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 lg:px-16 min-h-[50vh] flex flex-col justify-center max-w-7xl mx-auto">
        <span className="text-sm font-bold tracking-widest uppercase text-[var(--fluid-3)] mb-4 block">
          <ScrambleText text="The Platform" delay={0.1} />
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[var(--text-primary)] mb-8">
          Beyond <span className="text-fluid-mask">Observability.</span>
        </h1>
        <p className="text-2xl text-[var(--text-secondary)] max-w-3xl font-medium leading-relaxed">
          Korda is not just a dashboard. It is an active intervention protocol built on top of Cognee's deterministic graph memory to cure "AI Amnesia".
        </p>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <SpatialCard>
            <div className="card-premium p-10 h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--fluid-1)] mb-4 block">Primary Target</span>
              <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Enterprise AI & DevOps</h3>
              <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
                As companies deploy autonomous swarms, agents become a black box. Their reasoning can drift off-mission, leading to catastrophic logic breaks in production. Korda provides the <strong className="text-[var(--text-primary)]">Reasoning Coordination Plane</strong>—halting execution the millisecond an agent contradicts the shared Enterprise ontology.
              </p>
            </div>
          </SpatialCard>

          <SpatialCard>
            <div className="card-premium p-10 h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--fluid-4)] mb-4 block">Hackathon Impact</span>
              <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Infrastructure Showcase</h3>
              <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
                Built for the "Hangover Part AI" hackathon, Korda proves that Cognee's hybrid graph-vector memory isn't just for data storage—it's a real-time enforcement engine. We cure AI amnesia by ensuring context is carried flawlessly across infinite sessions without hallucination.
              </p>
            </div>
          </SpatialCard>

          <SpatialCard>
            <div className="card-premium p-10 h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--fluid-2)] mb-4 block">Human Teams</span>
              <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Distributed Alignment</h3>
              <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
                Humans drift, too. By ingesting Slack, Notion, and Drive data into Cognee, Korda monitors "context drift" across massive distributed teams. Executives finally have a dashboard to see exactly when Sales and Engineering start developing conflicting interpretations of the company mission.
              </p>
            </div>
          </SpatialCard>

          <SpatialCard>
            <div className="card-premium p-10 h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--fluid-3)] mb-4 block">Consumer (The Japa Vision)</span>
              <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Relationship Mapping</h3>
              <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
                At its most human level, Korda maps evolving relationships. For long-distance couples or estranged families, it visualizes how conversations, emotional contexts, and shared goals evolve over months and years, making the subtle shifts in human connection visible.
              </p>
            </div>
          </SpatialCard>

        </div>
      </section>

      <Footer />
    </main>
  );
}
