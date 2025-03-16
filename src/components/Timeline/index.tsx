import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { timelineEvents } from './timelineData';
import styles from './Timeline.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Timeline: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const events = document.querySelectorAll(`.${styles.timelineEvent}`);
    events.forEach((event) => {
      gsap.fromTo(event,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: event,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className={styles.timelineContainer} ref={timelineRef}>
      <motion.div
        className={styles.timelineLine}
        style={{ scaleY: lineHeight }}
      />

      <div className={styles.eventsContainer}>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className={styles.timelineEvent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.yearBubble}>
              {event.year}
            </div>

            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDescription}>{event.description}</p>
              
              <div className={styles.imageContainer}>
                <div 
                  className={styles.imageWrapper}
                  onClick={() => setSelectedImage(event.image)}
                >
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    width={400}
                    height={300}
                    className={styles.eventImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}>
                    <span>Click to zoom</span>
                  </div>
                </div>
                {event.imageCredit && (
                  <p className={styles.imageCredit}>
                    Credit: {event.imageCredit}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modalContent}>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;