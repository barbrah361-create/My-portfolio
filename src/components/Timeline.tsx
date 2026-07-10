import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Compass } from 'lucide-react';
import { TIMELINE_DATA } from '../data';
import { TimelineItem } from '../types';

function TimelineIcon({ type }: { type: 'education' | 'experience' | 'achievement' | 'goal' }) {
  const iconProps = { className: 'h-4 w-4 text-brand-hotpink' };
  switch (type) {
    case 'experience': return <Briefcase {...iconProps} />;
    case 'education': return <GraduationCap {...iconProps} />;
    case 'achievement': return <Award {...iconProps} />;
    case 'goal': return <Compass {...iconProps} />;
  }
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-brand-hotpink/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Chronology
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            My <span className="text-glow text-brand-hotpink font-display">Timeline</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500 font-light font-mono uppercase tracking-wider">
            A roadmap of milestones, achievements, academic pursuits, and future ambitions
          </p>
        </div>

        {/* Timeline Core Layout */}
        <div className="relative mx-auto max-w-4xl">
          {/* Central Vertical Neon Tracker Core */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-hotpink via-brand-softpink/30 to-transparent shadow-[0_0_8px_rgba(255,20,147,0.3)]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item: TimelineItem, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Left Side Content (Desktop-only, shown only for even items on md and up) */}
                  <div className={`hidden md:flex md:w-1/2 md:justify-end md:pr-12 ${isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6 }}
                      className="w-full max-w-md p-6 rounded-xl glassmorphism text-right"
                    >
                      <span className="inline-block font-mono text-[10px] text-brand-hotpink uppercase tracking-widest font-semibold px-2 py-0.5 rounded border border-brand-hotpink/20 bg-brand-hotpink/5">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-white uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-gray-400">
                        {item.institution}
                      </p>
                      <p className="mt-3 text-xs text-gray-500 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Core Icon Node Center (Always visible, left-aligned on mobile, center-aligned on desktop) */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-auto z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-brand-hotpink bg-brand-black shadow-[0_0_12px_#FF1493]">
                    <TimelineIcon type={item.type} />
                  </div>

                  {/* Right Side Content (Shown on mobile for all items, and on desktop only for odd items) */}
                  <div className={`w-full pl-12 md:pl-12 md:w-1/2 flex ${!isEven ? 'opacity-100' : 'md:hidden'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6 }}
                      className="w-full max-w-md p-6 rounded-xl glassmorphism text-left"
                    >
                      <span className="inline-block font-mono text-[10px] text-brand-hotpink uppercase tracking-widest font-semibold px-2 py-0.5 rounded border border-brand-hotpink/20 bg-brand-hotpink/5">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-white uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-gray-400">
                        {item.institution}
                      </p>
                      <p className="mt-3 text-xs text-gray-500 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
