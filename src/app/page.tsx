'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Timeline from '@/components/Timeline';
import VirtualTour from '@/components/VirtualTour';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <>
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-white cursor-hover"
            whileHover={{ scale: 1.05 }}
          >
            Robben Island
          </motion.a>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white cursor-hover"
          >
            <span className="sr-only">Menu</span>
            <div className="w-8 h-6 flex flex-col justify-between">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block"
              />
            </div>
          </button>
        </div>

        {/* Full-screen menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
          className="fixed inset-0 bg-primary"
        >
          <div className="container mx-auto px-4 py-20">
            <ul className="space-y-8">
              {['Home', 'Timeline', 'Virtual Tour', 'History', 'Visit'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 20 }}
                  className="text-4xl md:text-6xl font-bold"
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-accent transition-colors cursor-hover"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </nav>

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
        <section id="timeline" className="py-20 bg-primary text-off-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Historical Timeline</h2>
            <Timeline />
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section id="virtual-tour" className="py-20 bg-off-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Virtual Tour</h2>
            <VirtualTour />
          </div>
        </section>

        {/* Historical Significance Section */}
        <section id="history" className="py-20 bg-primary text-off-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Historical Significance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">Symbol of Resistance</h3>
                <p className="text-lg text-gray-300">
                  Robben Island became an international symbol of resistance against apartheid, 
                  where leaders like Nelson Mandela spent years imprisoned but unbroken in spirit.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">UNESCO Heritage Site</h3>
                <p className="text-lg text-gray-300">
                  Today, as a UNESCO World Heritage site, it stands as a testament to the 
                  triumph of democracy and freedom over oppression.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section id="visit" className="py-20 bg-off-white text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Plan Your Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Tours</h3>
                <p className="text-gray-600">
                  Join our guided tours led by former political prisoners.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Ferry Schedule</h3>
                <p className="text-gray-600">
                  Regular ferries depart from Cape Town's V&A Waterfront.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Booking</h3>
                <p className="text-gray-600">
                  Book your visit in advance to secure your preferred date.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>info@robbenisland.org.za</p>
              <p>+27 21 413 4200</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>Robben Island</p>
              <p>Cape Town, South Africa</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-colors cursor-hover">Twitter</a>
                <a href="#" className="hover:text-accent transition-colors cursor-hover">Facebook</a>
                <a href="#" className="hover:text-accent transition-colors cursor-hover">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; {new Date().getFullYear()} Robben Island Museum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}