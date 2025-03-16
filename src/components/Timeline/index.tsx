'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { timelineEvents } from './timelineData';
import styles from './Timeline.module.css';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const events = document.querySelectorAll(`.${styles.timelineEvent}`);
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

  const handleImageLoad = (year: number) => {
    setImageLoaded(prev => ({ ...prev, [year]: true }));
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div ref={containerRef} className={styles.timelineContainer}>
        {/* Timeline line */}
        <div className={styles.timelineLine}>
          <motion.div 
            className={styles.timelineProgress}
            style={{ height: progressLine }}
          />
        </div>

        {/* Timeline events */}
        <div className="relative max-w-7xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`${styles.timelineEvent} ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={styles.timelineEventContent}>
                <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                  <span className={styles.timelineYear}>{event.year}</span>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p className={styles.timelineDescription}>{event.description}</p>
                  <div 
                    className={styles.timelineImageContainer}
                    onClick={() => handleImageClick(event.image)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: imageLoaded[event.year] ? 1 : 0,
                        scale: imageLoaded[event.year] ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={event.image}
                        alt={event.imageAlt}
                        fill
                        className={styles.timelineImage}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        quality={75}
                        onLoad={() => handleImageLoad(event.year)}
                      />
                      {!imageLoaded[event.year] && (
                        <div className={styles.imageSkeleton}>
                          <div className={styles.skeletonPulse} />
                        </div>
                      )}
                      {event.imageCredit && imageLoaded[event.year] && (
                        <div className={styles.timelineImageCredit}>
                          Credit: {event.imageCredit}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className={styles.timelineDot}>
                <div className={styles.timelineDotInner} />
                <div className={styles.timelineDotRing} />
              </div>

              <div className={styles.timelineEventContent} style={{ visibility: 'hidden' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className={styles.zoomModal}
          onClick={handleCloseZoom}
        >
          <div className={styles.zoomModalContent}>
            <button 
              className={styles.closeButton}
              onClick={handleCloseZoom}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Zoomed view"
              fill
              className={styles.zoomedImage}
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}