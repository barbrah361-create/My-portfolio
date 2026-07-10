import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data';
import { Code2, Terminal, Shield, Brain } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-brand-black py-24 lg:py-32 overflow-hidden">
      {/* Abstract Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,20,147,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,20,147,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Competencies
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            My <span className="text-glow text-brand-hotpink font-display">Skills</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
        </div>

        {/* Two-Column Bento Layout */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Conceptual Skill Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="rounded-xl p-6 glassmorphism">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-hotpink/10 border border-brand-hotpink/30 text-brand-hotpink">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold uppercase text-white">
                Frontend Architecture
              </h3>
              <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed">
                Expert-level React & TypeScript implementations focusing on high-precision layouts, responsive states, fluid page transitions, and strict type safety.
              </p>
            </div>

            <div className="rounded-xl p-6 glassmorphism">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-hotpink/10 border border-brand-hotpink/30 text-brand-hotpink">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold uppercase text-white">
                Backend & Systems
              </h3>
              <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed">
                Architecting robust RESTful servers via Node and Express, writing optimized relational SQL schemas, and designing scalable database layers.
              </p>
            </div>

            <div className="rounded-xl p-6 glassmorphism">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-hotpink/10 border border-brand-hotpink/30 text-brand-hotpink">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold uppercase text-white">
                Creative Integration
              </h3>
              <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed">
                Seamlessly synthesizing visual layouts, custom animations, and narrative copy to construct highly artistic, cinematic web experiences.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Animated Progress Bars */}
          <div className="lg:col-span-8 rounded-2xl p-8 lg:p-12 glassmorphism relative">
            {/* Design accents */}
            <div className="absolute top-4 right-4 font-mono text-[9px] text-gray-700">
              [ ENGINE_STATS_LOADED ]
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {SKILLS_DATA.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white uppercase tracking-wider">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-semibold text-brand-hotpink">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress track */}
                  <div className="relative h-2 w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
                    {/* Glowing active progress bar */}
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.05 }}
                      className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-brand-softpink to-brand-hotpink shadow-[0_0_10px_#FF1493]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
