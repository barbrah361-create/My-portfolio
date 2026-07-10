import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Maximize2, Tag, Calendar, Ruler } from 'lucide-react';
import { PAINTINGS_DATA } from '../data';
import { Painting } from '../types';

export default function ArtGallery() {
  const [activePainting, setActivePainting] = useState<Painting | null>(null);

  return (
    <>
      <section id="gallery" className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden">
      {/* Background radial art blur */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-brand-hotpink/[0.01] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Fine Art Exhibition
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            Acrylic <span className="text-glow text-brand-hotpink font-display">Gallery</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500 font-light font-mono uppercase tracking-wider">
            Original acrylic works created on raw canvases with palette knives and mixed media
          </p>
        </div>

        {/* Masonry-Style Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PAINTINGS_DATA.map((painting: Painting, idx: number) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActivePainting(painting)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden glassmorphism flex flex-col h-full border border-white/5 hover:border-brand-hotpink/30 transition-all duration-300"
            >
              {/* Image box with dark overlay on hover */}
              <div className="relative overflow-hidden aspect-square bg-brand-black">
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Glassy hover panel with details & button */}
                <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-hotpink bg-brand-black/90 text-brand-hotpink pink-glow-sm transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                  <span className="mt-4 font-mono text-[9px] text-brand-softpink uppercase tracking-widest font-semibold">VIEW FINE DETAILS</span>
                  <h4 className="mt-2 font-display text-base font-bold text-white uppercase tracking-tight">{painting.title}</h4>
                </div>
              </div>

              {/* Artwork Summary Footer */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-white uppercase group-hover:text-brand-hotpink transition-colors">
                    {painting.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400 font-light line-clamp-2 italic">
                    "{painting.description}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-gray-500">
                  <span>{painting.medium.split('&')[0].split('with')[0]}</span>
                  <span className="text-brand-hotpink">{painting.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Lightbox Viewer Modal */}
      <AnimatePresence>
        {activePainting && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePainting(null)}
              className="absolute inset-0 bg-brand-black/95 backdrop-blur-2xl"
            />

            {/* Lightbox content layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#090909] p-6 md:p-8 shadow-[0_0_50px_rgba(255,20,147,0.15)] overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePainting(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-brand-hotpink hover:text-brand-hotpink z-20"
                aria-label="Close Art Lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-8 md:grid-cols-12 items-center">
                {/* Left Block: Full Image Framing */}
                <div className="md:col-span-7 flex justify-center bg-black/45 rounded-2xl p-4 border border-white/5 relative group">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full flex items-center justify-center">
                    <img
                      src={activePainting.imageUrl}
                      alt={activePainting.title}
                      referrerPolicy="no-referrer"
                      className="max-h-[60vh] object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Right Block: Museum Card Metadata */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-[9px] text-brand-hotpink uppercase tracking-[0.3em] font-semibold">
                      Exhibition Piece No. {activePainting.id.replace('art', '0')}
                    </span>

                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white uppercase sm:text-3xl">
                      {activePainting.title}
                    </h3>

                    <div className="mt-4 h-[1px] w-12 bg-brand-hotpink" />

                    <p className="mt-6 text-sm leading-relaxed text-gray-300 font-light italic">
                      "{activePainting.description}"
                    </p>
                  </div>

                  {/* Scientific Specifications */}
                  <div className="mt-8 space-y-4 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-3">
                      <Tag className="h-4 w-4 text-brand-hotpink" />
                      <div>
                        <span className="block font-mono text-[9px] text-gray-600 uppercase">Medium</span>
                        <span className="text-xs font-semibold text-white">{activePainting.medium}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Ruler className="h-4 w-4 text-brand-hotpink" />
                      <div>
                        <span className="block font-mono text-[9px] text-gray-600 uppercase">Dimensions</span>
                        <span className="text-xs font-semibold text-white">{activePainting.size}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-brand-hotpink" />
                      <div>
                        <span className="block font-mono text-[9px] text-gray-600 uppercase">Year of Creation</span>
                        <span className="text-xs font-semibold text-white">{activePainting.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
