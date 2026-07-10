import { motion } from 'motion/react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-brand-black py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-hotpink/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center xl:text-left xl:flex xl:items-end xl:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
              Masterpieces
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
              Software <span className="text-glow text-brand-hotpink font-display">Projects</span>
            </h2>
            <div className="mt-4 mx-auto xl:mx-0 h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          </div>
          <p className="mt-4 xl:mt-0 max-w-md text-xs text-gray-500 font-mono leading-relaxed uppercase tracking-wider">
            Production-engineered applications built to solve complex real-world challenges
          </p>
        </div>

        {/* Projects Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS_DATA.map((project: Project, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glassmorphism flex flex-col h-full hover:border-brand-hotpink/40 transition-all duration-500"
            >
              {/* Image Container with Zoom & Tint */}
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
                />
                {/* Visual hot-pink mask gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-85" />

                {/* Left corner tech metadata */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded bg-black/80 px-2.5 py-1 border border-white/10 backdrop-blur-md">
                  <Code className="h-3 w-3 text-brand-hotpink" />
                  <span className="font-mono text-[9px] text-gray-300 uppercase tracking-widest">BUILD_0{idx + 1}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Tag badges */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-white uppercase group-hover:text-brand-hotpink transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-400 font-light">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-brand-hotpink/5 border border-brand-hotpink/10 px-2 py-0.5 font-mono text-[10px] text-brand-softpink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Links Buttons */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-white/10 bg-white/5 py-2.5 font-display text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:border-white/30"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-brand-hotpink bg-brand-black py-2.5 font-display text-[10px] font-bold uppercase tracking-widest text-white transition-all pink-glow-sm hover:bg-brand-hotpink hover:pink-glow"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
