import { motion } from 'motion/react';
import { Layers, Cpu, Server, Palette, Smartphone, GitBranch, Database, Zap, Settings } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

// Dynamic Icon Resolver
function ServiceIcon({ name }: { name: string }) {
  const iconProps = { className: 'h-6 w-6 text-brand-hotpink' };
  switch (name) {
    case 'Layers': return <Layers {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Server': return <Server {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Settings': return <Settings {...iconProps} />;
    default: return <Layers {...iconProps} />;
  }
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden">
      {/* Visual background textures */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-hotpink/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Specializations
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            My <span className="text-glow text-brand-hotpink font-display">Services</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500 font-light font-mono uppercase tracking-wider">
            Premium engineering solutions tailored with absolute artistic precision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service: Service, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative group rounded-xl p-8 glassmorphism hover:border-brand-hotpink/45 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Corner Deco */}
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-brand-hotpink/0 group-hover:border-brand-hotpink/40 rounded-tr-lg transition-all duration-300" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-brand-hotpink/0 group-hover:border-brand-hotpink/40 rounded-bl-lg transition-all duration-300" />

              <div>
                {/* Icon Container */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-lg border border-brand-hotpink/20 bg-brand-black/80 transition-all duration-300 group-hover:bg-brand-hotpink/10 group-hover:border-brand-hotpink/50 group-hover:pink-glow-sm">
                  <ServiceIcon name={service.iconName} />
                </div>

                <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-white uppercase group-hover:text-brand-hotpink transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-gray-400 font-light">
                  {service.description}
                </p>
              </div>

              {/* Step indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-gray-600">
                  0{idx + 1} // SERVICE
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-hotpink/40 group-hover:bg-brand-hotpink group-hover:pink-glow-sm transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
