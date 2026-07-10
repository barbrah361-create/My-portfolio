import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Track Mouse Position for Glow Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Track scroll position for Back-to-Top Button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate subtle random floating particles once
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    }));
    setParticles(initialParticles);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Cinematic Mouse Radial Glow Overlay */}
      {!isMobile && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
          style={{
            background: `radial-gradient(450px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 20, 147, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Floating Sparkles Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-brand-hotpink/35"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 0.7, 0.7, 0],
              x: ['0vw', `${(Math.random() - 0.5) * 10}vw`],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            className="fixed right-6 bottom-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-brand-hotpink bg-brand-black/80 text-brand-hotpink backdrop-blur-md transition-all pink-glow hover:bg-brand-hotpink hover:text-white"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
