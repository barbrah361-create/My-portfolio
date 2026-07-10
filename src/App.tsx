import { useState } from 'react';
import Loader from './components/Loader';
import BackgroundEffects from './components/BackgroundEffects';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Poetry from './components/Poetry';
import Author from './components/Author';
import ArtGallery from './components/ArtGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-brand-black text-white antialiased selection:bg-brand-hotpink selection:text-white">
      {/* 1. Introductory Full Screen Loader */}
      <Loader onFinished={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          {/* 2. Floating stardust particles, cursor-glow, back-to-top handler */}
          <BackgroundEffects />

          {/* 3. Transparent Sticky Header Menu */}
          <Navigation />

          {/* 4. Core Body Viewports */}
          <main className="relative z-10 w-full overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Timeline />
            <Projects />
            <Poetry />
            <Author />
            <ArtGallery />
            <Testimonials />
            <Contact />
          </main>

          {/* 5. Minimalist Brand Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

