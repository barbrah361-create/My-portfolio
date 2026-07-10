import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Booting Engine...');
  const [isVisible, setIsVisible] = useState(true);

  const statuses = [
    'Booting Systems...',
    'Compiling Full Stack Logic...',
    'Binding TS Types...',
    'Blending Acrylic Paint Palette...',
    'Composing Poetic Rhythms...',
    'Configuring Fine Art Lightboxes...',
    'Deploying Cinematic Portfolio...'
  ];

  useEffect(() => {
    // Progress increment timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Dynamic status text update based on progress
    const statusIdx = Math.min(
      Math.floor((progress / 100) * statuses.length),
      statuses.length - 1
    );
    setStatusText(statuses[statusIdx]);

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onFinished();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black text-white"
        >
          {/* Main Visual Logo Holder */}
          <div className="relative flex flex-col items-center">
            {/* Glowing outer backdrop */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute h-24 w-24 rounded-full bg-brand-hotpink/10 blur-xl"
            />

            {/* Logo initials container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-hotpink bg-brand-black font-display text-2xl font-black tracking-widest text-brand-hotpink pink-glow"
            >
              BA
            </motion.div>

            {/* Typing-style Status log */}
            <div className="mt-8 h-4 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400">
              {statusText}
            </div>

            {/* Numerical percentage load */}
            <div className="mt-2 font-mono text-xs font-semibold text-brand-hotpink">
              {progress}%
            </div>

            {/* Clean Progress Tracker bar */}
            <div className="mt-4 h-[2px] w-48 rounded-full bg-white/5 overflow-hidden border border-white/5">
              <div
                className="h-full bg-brand-hotpink shadow-[0_0_8px_#FF1493] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Creative Credit Subheader */}
            <div className="mt-12 font-mono text-[7px] tracking-[0.4em] text-gray-600 uppercase select-none">
              BARBRAH ANGELIQUE // DEVELOPER & ARTIST
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
