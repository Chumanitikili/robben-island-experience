'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image?: string; // Added image property
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1488,
    title: "First European Contact",
    description: "Portuguese explorer Bartolomeu Dias first recorded the existence of the island.",
    image: "/images/timeline/Robben Island 1488.jpg", // Placeholder, no matching image
  },
  {
    year: 1652,
    title: "Dutch Settlement",
    description: "The Dutch began using Robben Island as a refreshment station and for sheep farming.",
    image: "/images/timeline/Robben Island 1652.jpg", // Matches the painting with ships and cross
  },
  {
    year: 1846,
    title: "Hospital Establishment",
    description: "The island was converted into a hospital for people with leprosy, mental illness, and the chronically sick.",
    image: "/images/timeline/Robben Island 1846.jpg", // Matches the black and white church photo
  },
  {
    year: 1961,
    title: "Prison Era Begins",
    description: "The island was converted into a maximum security prison for political prisoners.",
    image: "/images/timeline/Robben Island 1961.jpg", // Placeholder, no matching image
  },
  {
    year: 1964,
    title: "Mandela's Imprisonment",
    description: "Nelson Mandela arrived on Robben Island, where he would spend 18 of his 27 years in prison.",
    image: "/images/timeline/Robben Island 1964.jpg", // Matches the mugshots and prisoners in line
  },
  {
    year: 1991,
    title: "Prison Closure",
    description: "All political prisoners were released from Robben Island as apartheid began to end.",
    image: "/images/timeline/Robben Island 1991.jpg", // Matches the photo of Mandela at the window (1990, adjusted to 1991)
  },
  {
    year: 1999,
    title: "UNESCO World Heritage Site",
    description: "Robben Island was declared a UNESCO World Heritage Site.",
    image: "/images/timeline/Robben Island 1999.jpg", // Matches the photo with the "Robben Island" sign
  },
  {
    year: 2024,
    title: "Modern Museum",
    description: "Today, the island stands as a powerful symbol of the triumph of democracy over oppression.",
    image: "/images/timelineRobben Island 2024.jpg", // Matches the modern ferry or aerial views
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
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
          toggleActions: "play none none reverse",
        },
      });

      // Animate the image separately for a zoom-in effect
      const image = event.querySelector('.timeline-image');
      if (image) {
        gsap.from(image, {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  const progressLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-20 bg-gray-900 text-white">
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
            {/* Text Section */}
            <div className="w-1/2 p-6">
              <div className={`text-right ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-accent text-5xl font-bold">{event.year}</span>
                <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
                <p className="mt-2 text-gray-300">{event.description}</p>
              </div>
            </div>

            {/* Timeline Marker */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full" />
              <div className="absolute w-12 h-12 border-2 border-accent rounded-full animate-ping opacity-20" />
            </div>

            {/* Image Section */}
            <div className="w-1/2 p-6 flex justify-center">
              {event.image ? (
                <motion.img
                  src={event.image}
                  alt={`${event.title} - ${event.year}`}
                  className="timeline-image w-64 h-64 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <div className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
