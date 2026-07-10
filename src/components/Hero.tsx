import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, MessageSquare, Instagram, ArrowDown } from 'lucide-react';

export default function Hero() {
  const [profilePic, setProfilePic] = useState<string>('/barbrah.jpg');

  useEffect(() => {
    const updatePic = () => {
      setProfilePic(localStorage.getItem('barbrah_profile_pic') || '/barbrah.jpg');
    };
    updatePic();
    window.addEventListener('profile-pic-updated', updatePic);
    return () => window.removeEventListener('profile-pic-updated', updatePic);
  }, []);

  const titles = [
    'Full Stack Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Poet',
    'Author',
    'Acrylic Artist',
    'Creative Technologist'
  ];

  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[titleIdx];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Elegant fallback prompt for CV download
    alert("Thank you for your interest! Generating Barbrah Angelique's CV. In a production environment, this will trigger a PDF download. Under development.");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={profilePic}
          alt="Barbrah Angelique - Fine Art Backdrop"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-40 scale-105 transition-transform duration-10000 hover:scale-100"
        />
        {/* Deep cinematic radial gradient to blend edges */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,#050505_95%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Accent Line */}
          <div className="mb-4 h-[2px] w-16 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />

          <p className="font-mono text-xs uppercase tracking-[0.4em] text-brand-softpink">
            Hello, I'm
          </p>

          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl uppercase select-none">
            BARBRAH
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-softpink to-brand-hotpink font-display">
              ANGELIQUE
            </span>
          </h1>

          {/* Typing Container */}
          <div className="mt-8 flex items-center justify-center h-10">
            <span className="font-mono text-sm tracking-widest text-gray-300 uppercase sm:text-lg md:text-xl">
              {currentText}
            </span>
            <span className="ml-1 inline-block h-5 w-[3px] bg-brand-hotpink animate-pulse" />
          </div>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base font-light">
            A software engineer blending computational logic with poetic literature,
            thought-provoking books, and textured physical canvas paintings under Nairobi’s skies.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={handleDownloadCV}
              className="group flex items-center gap-2 border border-brand-hotpink bg-brand-black px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all pink-glow-sm hover:bg-brand-hotpink hover:pink-glow"
            >
              Download CV
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all hover:border-brand-hotpink hover:bg-brand-hotpink/10"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-brand-hotpink bg-brand-hotpink px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all pink-glow hover:bg-transparent hover:text-brand-hotpink"
            >
              Hire Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <a
              href="https://github.com/Barbrah78720"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/barbrah-angelique-78720"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            {/* Brand X (Twitter) Logo */}
            <a
              href="https://x.com/Barbrah78720"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="X Profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://wa.me/254726625144"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="WhatsApp Contact"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.908.533 3.762 1.548 5.378l-1.643 6.002 6.136-1.611a9.943 9.943 0 0 0 4.963 1.316c5.524 0 10.004-4.48 10.004-10.004C23.008 6.48 18.528 2 12.004 2zm5.727 14.195c-.244.688-1.22 1.258-1.745 1.342-.475.076-1.09.137-3.19-.74-2.685-1.12-4.417-3.856-4.55-4.037-.134-.18-1.1-1.464-1.1-2.794 0-1.33.693-1.984.94-2.253.243-.268.535-.336.713-.336.178 0 .356.004.51.012.16.008.375-.06.586.448.217.523.743 1.812.808 1.946.064.133.107.29.017.47-.09.18-.135.29-.267.447-.134.156-.282.348-.403.468-.134.13-.274.272-.119.539.155.267.69 1.128 1.48 1.83 1.018.907 1.874 1.187 2.14 1.32.268.134.425.112.583-.067.158-.18.675-.783.854-1.05.178-.268.356-.223.594-.134.24.089 1.517.714 1.776.844.258.13.43.193.493.303.064.11.064.634-.18 1.322z" />
              </svg>
            </a>
            <a
              href="mailto:barbrah361@gmail.com"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="Email Address"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/barbrah_angelique"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-brand-hotpink hover:text-brand-hotpink hover:pink-glow-sm"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-brand-hotpink hover:text-brand-hotpink"
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}
