import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, X, Clock, HelpCircle } from 'lucide-react';
import { POEMS_DATA } from '../data';
import { Poem } from '../types';

export default function Poetry() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  return (
    <>
      <section id="poetry" className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-brand-hotpink/[0.01] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Anthology
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            My <span className="text-glow text-brand-hotpink font-display">Poetry</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500 font-light font-mono uppercase tracking-wider">
            Whispers of Nairobi nights, variable declarations, and physical palette knife strokes
          </p>
        </div>

        {/* Poetry Card Layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {POEMS_DATA.map((poem: Poem, idx: number) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 20, 147, 0.4)' }}
              onClick={() => setSelectedPoem(poem)}
              className="group cursor-pointer rounded-xl p-8 glassmorphism transition-all duration-300 flex flex-col justify-between hover:pink-glow-sm"
            >
              <div>
                {/* Feathery Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-hotpink/10 border border-brand-hotpink/20 text-brand-hotpink group-hover:scale-110 transition-transform">
                  <Feather className="h-4 w-4" />
                </div>

                <span className="mt-6 block font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                  {poem.date}
                </span>

                <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-white uppercase group-hover:text-brand-hotpink transition-colors">
                  {poem.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-gray-400 font-light italic">
                  "{poem.description}"
                </p>
              </div>

              {/* Read Button */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-brand-softpink font-bold group-hover:underline">
                  OPEN MODAL // READ
                </span>
                <Clock className="h-3 w-3 text-gray-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Elegant Cinematic Full-Screen Modal */}
      <AnimatePresence>
        {selectedPoem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop with high blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoem(null)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
            />

            {/* Reading Container Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl rounded-2xl border border-brand-hotpink/30 bg-[#0c0c0c] p-8 md:p-12 shadow-[0_0_50px_rgba(255,20,147,0.15)] overflow-hidden"
            >
              {/* Corner abstract graphic for vintage letter feel */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-brand-hotpink/10 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-brand-hotpink/10 rounded-br-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedPoem(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-brand-hotpink hover:text-brand-hotpink"
                aria-label="Close Poem Reading"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="text-center">
                {/* Feathery Top Motif */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-hotpink/5 text-brand-hotpink">
                  <Feather className="h-5 w-5" />
                </div>

                <p className="mt-4 font-mono text-[10px] text-brand-softpink uppercase tracking-[0.3em]">
                  {selectedPoem.date}
                </p>

                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white uppercase sm:text-3xl md:text-4xl">
                  {selectedPoem.title}
                </h3>

                <div className="mt-4 mx-auto h-[1px] w-12 bg-brand-hotpink" />

                {/* Poem Lines with luxurious margins and tracking */}
                <div className="mt-10 mb-10 space-y-4 max-h-[50vh] overflow-y-auto no-scrollbar py-2">
                  {selectedPoem.content.map((line, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 + 0.2 }}
                      className="text-sm md:text-base leading-relaxed tracking-wider text-gray-300 font-light font-sans"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                {/* Footer theme badges */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {selectedPoem.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-brand-hotpink/5 border border-brand-hotpink/25 px-3.5 py-0.5 font-mono text-[9px] text-brand-softpink uppercase tracking-widest"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
