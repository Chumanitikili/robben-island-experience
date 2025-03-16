'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { timelineEvents } from './timelineData';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const events = document.querySelectorAll('.timeline-event');
      events.forEach((event, index) => {
        gsap.from(event, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 1,
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }
  }, []);

  const progressLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30">
        <motion.div 
          className="absolute top-0 w-full bg-accent"
          style={{ height: progressLine }}
        />
      </div>

      {/* Timeline events */}
      <div className="relative max-w-7xl mx-auto">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className={`timeline-event flex items-center gap-8 mb-20 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-1/2 p-6">
              <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-accent text-5xl font-bold">{event.year}</span>
                <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
                <p className="mt-2 text-gray-300">{event.description}</p>
                <div className="mt-6 relative aspect-video w-full overflow-hidden rounded-lg">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {event.imageCredit && (
                      <div className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1">
                        Credit: {event.imageCredit}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full" />
              <div className="absolute w-12 h-12 border-2 border-accent rounded-full animate-ping opacity-20" />
            </div>

            <div className="w-1/2 p-6" />
          </div>
        ))}
      </div>
    </div>
  );
}