import { motion } from 'motion/react';
import { BookOpen, Bookmark, Calendar, ArrowUpRight } from 'lucide-react';
import { BOOKS_DATA } from '../data';
import { Book } from '../types';

export default function Author() {
  return (
    <section id="author" className="relative bg-brand-black py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-brand-hotpink/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center xl:text-left xl:flex xl:items-center xl:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
              Publications
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
              The <span className="text-glow text-brand-hotpink font-display">Author</span>
            </h2>
            <div className="mt-4 mx-auto xl:mx-0 h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          </div>
          <p className="mt-4 xl:mt-0 max-w-sm text-xs text-gray-500 font-mono leading-relaxed uppercase tracking-wider">
            Drafting conceptual books on technology and African poetic anthologies
          </p>
        </div>

        {/* Layout split: Intro Biography Left, Books Cards Right */}
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Author Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-hotpink/10 border border-brand-hotpink/20 text-brand-hotpink mb-6">
              <BookOpen className="h-5 w-5" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
              Scribing stories between physical pages and compilation buffers.
            </h3>

            <p className="mt-4 text-xs leading-relaxed text-gray-400 font-light">
              As an author, Barbrah explores deep philosophical themes concerning how humanity expresses itself through computer networks, the tactile strokes of brush paint, and standard spoken poetry.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-gray-500 font-light italic">
              "We write books for the same reason we write code—to build worlds that live beyond our physical constraints, and to share a message across timelines."
            </p>

            {/* Micro details */}
            <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
              <div>
                <span className="block font-mono text-[10px] text-gray-600 uppercase">UPCOMING BOOKS</span>
                <span className="text-lg font-bold text-white font-display">02</span>
              </div>
              <div className="h-8 w-[1px] bg-white/5" />
              <div>
                <span className="block font-mono text-[10px] text-gray-600 uppercase">GENRES</span>
                <span className="text-xs font-semibold text-brand-softpink font-mono uppercase">Poetry, Essays, Philosophy</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Book Layout cards */}
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2">
            {BOOKS_DATA.map((book: Book, idx: number) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative rounded-2xl p-8 glassmorphism flex flex-col justify-between hover:border-brand-hotpink/30 transition-all duration-300 hover:pink-glow-sm"
              >
                {/* Status indicator ribbon */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 rounded bg-brand-hotpink/10 border border-brand-hotpink/30 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-hotpink animate-pulse" />
                  <span className="font-mono text-[9px] text-brand-softpink uppercase tracking-widest font-semibold">{book.status}</span>
                </div>

                <div>
                  {/* Book 3D-Like spine binding deco */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-r from-brand-hotpink/40 to-transparent" />

                  <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                    0{idx + 1} // BOOK COV
                  </span>

                  <h4 className="font-display text-lg font-bold text-white uppercase tracking-tight group-hover:text-brand-hotpink transition-colors pr-16 leading-snug">
                    {book.title}
                  </h4>

                  <p className="mt-4 text-xs leading-relaxed text-gray-400 font-light">
                    {book.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-gray-500 font-mono text-[10px] uppercase">
                    <Calendar className="h-3.5 w-3.5 text-brand-hotpink" />
                    <span>Est. {book.releaseYear}</span>
                  </div>

                  <div className="flex gap-1">
                    {book.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded bg-white/5 border border-white/5 px-2 py-0.5 font-mono text-[9px] text-gray-400 uppercase tracking-wider"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
