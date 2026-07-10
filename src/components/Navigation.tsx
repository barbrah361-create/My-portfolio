import React, { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Poetry', href: '#poetry', id: 'poetry' },
    { name: 'Author', href: '#author', id: 'author' },
    { name: 'Art Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/85 border-b border-brand-hotpink/10 py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-widest text-white uppercase group"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-brand-hotpink bg-brand-black text-brand-hotpink transition-all group-hover:bg-brand-hotpink group-hover:text-white group-hover:pink-glow">
            B
          </span>
          <span className="transition-all group-hover:text-brand-hotpink">Barbrah</span>
          <span className="text-brand-hotpink font-light group-hover:text-white">Angelique</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative px-4 py-2 transition-all duration-300 hover:text-brand-hotpink ${
                activeSection === link.id ? 'text-brand-hotpink font-bold' : 'text-gray-400'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-hotpink shadow-[0_0_8px_#FF1493]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden xl:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-block cursor-pointer border border-brand-hotpink bg-brand-black px-6 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white transition-all pink-glow-sm hover:bg-brand-hotpink hover:text-white hover:pink-glow"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-hotpink/20 bg-brand-black/50 text-white hover:border-brand-hotpink xl:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="h-5 w-5 text-brand-hotpink" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-brand-hotpink/20 bg-brand-black/95 py-6 backdrop-blur-xl xl:hidden"
          >
            <div className="flex flex-col gap-3 px-6 font-mono text-sm">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className={`flex items-center justify-between border-b border-white/5 py-2 transition-all hover:text-brand-hotpink ${
                    activeSection === link.id ? 'text-brand-hotpink font-bold pl-2' : 'text-gray-400'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-hotpink shadow-[0_0_6px_#FF1493]" />
                  )}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-brand-hotpink/10">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="block w-full text-center border border-brand-hotpink bg-brand-black py-3 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-hotpink hover:pink-glow"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
