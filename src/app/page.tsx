'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section parallax effect
    gsap.to(heroRef.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?robben-island')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-center"
          >
            Robben Island
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mt-6 text-center max-w-2xl"
          >
            A symbol of the triumph of the human spirit over adversity
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary text-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Historical Timeline</h2>
          {/* Timeline content will be added */}
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Virtual Tour</h2>
          {/* Virtual tour content will be added */}
        </div>
      </section>

      {/* Historical Significance Section */}
      <section className="py-20 bg-primary text-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Historical Significance</h2>
          {/* Historical significance content will be added */}
        </div>
      </section>
    </main>
  );
}