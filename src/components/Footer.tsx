import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, Instagram } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-brand-black py-16 text-center overflow-hidden">
      {/* Background radial art blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-hotpink/[0.01] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Brand logo & literal descriptor */}
        <div className="flex flex-col items-center justify-center">
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
          <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-500 font-light font-sans">
            Full Stack Software Developer, Poet, Author, and Acrylic Painter based in Kenya.
          </p>
        </div>

        {/* Quick scroll links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-wider text-gray-400">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-brand-hotpink transition-colors">About</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-hotpink transition-colors">Services</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="hover:text-brand-hotpink transition-colors">Skills</a>
          <a href="#timeline" onClick={(e) => handleLinkClick(e, '#timeline')} className="hover:text-brand-hotpink transition-colors">Timeline</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-brand-hotpink transition-colors">Projects</a>
          <a href="#poetry" onClick={(e) => handleLinkClick(e, '#poetry')} className="hover:text-brand-hotpink transition-colors">Poetry</a>
          <a href="#author" onClick={(e) => handleLinkClick(e, '#author')} className="hover:text-brand-hotpink transition-colors">Author</a>
          <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-brand-hotpink transition-colors">Art Gallery</a>
        </div>

        {/* Micro social bar */}
        <div className="mt-10 flex items-center justify-center gap-5 text-gray-500">
          <a
            href="https://github.com/Barbrah78720"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-hotpink"
            aria-label="GitHub Profile"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/barbrah-angelique-78720"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-hotpink"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4.5 w-4.5" />
          </a>
          {/* Brand X logo */}
          <a
            href="https://x.com/Barbrah78720"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-hotpink"
            aria-label="X Profile"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://wa.me/254726625144"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-hotpink flex items-center justify-center"
            aria-label="WhatsApp Contact"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.908.533 3.762 1.548 5.378l-1.643 6.002 6.136-1.611a9.943 9.943 0 0 0 4.963 1.316c5.524 0 10.004-4.48 10.004-10.004C23.008 6.48 18.528 2 12.004 2zm5.727 14.195c-.244.688-1.22 1.258-1.745 1.342-.475.076-1.09.137-3.19-.74-2.685-1.12-4.417-3.856-4.55-4.037-.134-.18-1.1-1.464-1.1-2.794 0-1.33.693-1.984.94-2.253.243-.268.535-.336.713-.336.178 0 .356.004.51.012.16.008.375-.06.586.448.217.523.743 1.812.808 1.946.064.133.107.29.017.47-.09.18-.135.29-.267.447-.134.156-.282.348-.403.468-.134.13-.274.272-.119.539.155.267.69 1.128 1.48 1.83 1.018.907 1.874 1.187 2.14 1.32.268.134.425.112.583-.067.158-.18.675-.783.854-1.05.178-.268.356-.223.594-.134.24.089 1.517.714 1.776.844.258.13.43.193.493.303.064.11.064.634-.18 1.322z" />
            </svg>
          </a>
          <a
            href="mailto:barbrah361@gmail.com"
            className="transition-colors hover:text-brand-hotpink"
            aria-label="Email Address"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://instagram.com/barbrah_angelique"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-hotpink"
            aria-label="Instagram Profile"
          >
            <Instagram className="h-4.5 w-4.5" />
          </a>
        </div>

        {/* Legal copyrights */}
        <div className="mt-10 border-t border-white/5 pt-8 text-[10px] font-mono tracking-wider text-gray-600 uppercase">
          <span>&copy; {new Date().getFullYear()} BARBRAH ANGELIQUE. All rights reserved.</span>
          <span className="block mt-1">Nairobi, Kenya // Engineered for Fine Artistry</span>
        </div>
      </div>
    </footer>
  );
}
