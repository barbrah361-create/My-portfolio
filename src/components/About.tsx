import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Award, BookOpen, PenTool, Sparkles, Camera } from 'lucide-react';
import ProfilePicModal from './ProfilePicModal';

export default function About() {
  const [profilePic, setProfilePic] = useState<string>('/barbrah.jpg');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updatePic = () => {
      setProfilePic(localStorage.getItem('barbrah_profile_pic') || '/barbrah.jpg');
    };
    updatePic();
    window.addEventListener('profile-pic-updated', updatePic);
    return () => window.removeEventListener('profile-pic-updated', updatePic);
  }, []);

  const infoItems = [
    { label: 'Name', value: 'Barbrah Angelique', icon: <Sparkles className="h-4 w-4 text-brand-hotpink" /> },
    { label: 'Country', value: 'Kenya', icon: <MapPin className="h-4 w-4 text-brand-hotpink" /> },
    { label: 'Profession', value: 'Full Stack Software Developer', icon: <Award className="h-4 w-4 text-brand-hotpink" /> },
    { label: 'Email', value: 'barbrah361@gmail.com', icon: <Mail className="h-4 w-4 text-brand-hotpink" /> },
    { label: 'Phone', value: '0726625144', icon: <Phone className="h-4 w-4 text-brand-hotpink" /> },
    { label: 'Languages', value: 'English, Swahili', icon: <BookOpen className="h-4 w-4 text-brand-hotpink" /> },
  ];

  const handleDownloadCV = () => {
    alert("Thank you! Generating Barbrah Angelique's CV document. Under development.");
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative bg-brand-black py-24 lg:py-32 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-brand-hotpink/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-brand-softpink/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-16 text-center xl:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Discovery
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            About <span className="text-glow text-brand-hotpink font-display">Me</span>
          </h2>
          <div className="mt-4 mx-auto xl:mx-0 h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
        </div>

        {/* Grid Layout */}
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-20 items-center">
          {/* Left Column: Image with Luxury Framing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[420px]">
              {/* Outer pink glow backdrop */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-hotpink to-brand-softpink opacity-30 blur-xl transition duration-1000 group-hover:opacity-60" />

              {/* Glass frame */}
              <div className="relative rounded-2xl p-3 glassmorphism overflow-hidden">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] group/photo">
                  <img
                    src={profilePic}
                    alt="Barbrah Angelique Portrait"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle color mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Interactive Camera Hover Overlay */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/75 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 cursor-pointer"
                    title="Change Profile Picture"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-hotpink text-white shadow-[0_0_15px_rgba(255,20,147,0.6)] scale-90 group-hover/photo:scale-100 transition-transform duration-300">
                      <Camera className="h-5 w-5" />
                    </div>
                    <span className="mt-2.5 font-mono text-[9px] text-white uppercase tracking-[0.2em] font-semibold">
                      Edit Profile Pic
                    </span>
                  </button>
                </div>

                {/* Overlaid badges */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-3">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/80 px-4 py-1.5 border border-brand-hotpink/20 backdrop-blur-md">
                    <PenTool className="h-3.5 w-3.5 text-brand-hotpink" />
                    <span className="font-mono text-[10px] text-white uppercase tracking-wider">Poet & Artist</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-black/80 px-4 py-1.5 border border-brand-hotpink/20 backdrop-blur-md">
                    <span className="font-mono text-[10px] text-white uppercase tracking-wider">Dev From Kenya</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography & Vital Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-7"
          >
            <p className="font-mono text-[10px] text-brand-hotpink uppercase tracking-widest mb-2 font-bold">
              Who I am
            </p>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
              Code meets Canvas, Logic meets Poem.
            </h3>

            {/* Biography */}
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-400 font-light">
              <p>
                Hello! I'm <strong className="text-white font-medium">Barbrah Angelique</strong>, a passionate Full Stack Software Developer from Kenya with a strong love for creating modern digital experiences that solve real-world problems.
              </p>
              <p>
                Beyond software development, I am a poet, an author, and an acrylic painter. I believe creativity and technology belong together, and I enjoy building solutions that are both functional and inspiring.
              </p>
              <p>
                I am constantly learning, creating, and challenging myself to become a better software engineer while using my artistic talents to tell meaningful stories.
              </p>
            </div>

            {/* Information Grid */}
            <div className="mt-8 grid gap-4 border-t border-b border-white/5 py-8 sm:grid-cols-2">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-500">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-white">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* About Action CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleDownloadCV}
                className="cursor-pointer border border-brand-hotpink bg-brand-black px-8 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all pink-glow-sm hover:bg-brand-hotpink hover:pink-glow"
              >
                Download CV
              </button>
              <button
                onClick={scrollToContact}
                className="cursor-pointer border border-white/10 bg-white/5 hover:border-brand-hotpink hover:bg-brand-hotpink/10 px-8 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <ProfilePicModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
