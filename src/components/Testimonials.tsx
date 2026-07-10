import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const active = TESTIMONIALS_DATA[currentIdx];

  // Framer Motion Slider Variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative bg-brand-black py-24 lg:py-32 overflow-hidden">
      {/* Background radial art blur */}
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-hotpink/[0.01] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Endorsements
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            Testimonials
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
        </div>

        {/* Carousel Window Frame */}
        <div className="relative flex flex-col items-center justify-center min-h-[380px] md:min-h-[340px]">
          {/* Quote Mark Decoration */}
          <div className="absolute top-0 left-4 text-brand-hotpink/10 pointer-events-none scale-150">
            <Quote className="h-24 w-24" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIdx}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full rounded-2xl p-8 md:p-12 glassmorphism relative"
            >
              {/* Star Rating Panel */}
              <div className="flex items-center gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-hotpink text-brand-hotpink drop-shadow-[0_0_4px_rgba(255,20,147,0.4)]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="mt-6 text-sm md:text-base leading-relaxed text-gray-300 font-light italic">
                "{active.text}"
              </blockquote>

              {/* Reviewer bio details */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={active.avatarUrl}
                    alt={active.name}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full border border-brand-hotpink/20 object-cover"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-tight">{active.name}</h4>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                      {active.role} // <span className="text-brand-softpink">{active.company}</span>
                    </span>
                  </div>
                </div>

                {/* Direct slider indicators dots */}
                <div className="flex gap-2">
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > currentIdx ? 1 : -1);
                        setCurrentIdx(i);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIdx === i ? 'w-6 bg-brand-hotpink shadow-[0_0_6px_#FF1493]' : 'w-2 bg-white/10'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Absolute Navigation Handles */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={slidePrev}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={slideNext}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
