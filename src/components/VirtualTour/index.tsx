import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './VirtualTour.module.css';

const VirtualTour: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cellImages = [
    {
      src: "/images/mandela/cell-interior.jpg",
      alt: "Nelson Mandela's prison cell on Robben Island - Interior view",
      caption: "The sparse interior of Nelson Mandela's cell, measuring just 8 feet by 7 feet",
      credit: "South African Tourism Board"
    },
    {
      src: "/images/mandela/cell-block.jpg",
      alt: "Wider view of the prison cell block on Robben Island",
      caption: "The B-Section corridor where political prisoners were held",
      credit: "UNESCO World Heritage Site"
    },
    {
      src: "/images/mandela/cell-door.jpg",
      alt: "The door of Nelson Mandela's prison cell",
      caption: "The heavy metal door of cell number 466/64",
      credit: "Robben Island Museum"
    }
  ];

  return (
    <section className={styles.virtualTourSection}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Nelson Mandela's Cell
          </h2>
          
          <div className="prose prose-lg text-gray-200 max-w-3xl mx-auto mb-12">
            <p>
              Cell number 466/64 was Nelson Mandela's home for 18 of his 27 years in prison. 
              The tiny cell, measuring just 8 feet by 7 feet (2.4m x 2.1m), contained only a 
              bucket toilet, a small table, and a floor mat for sleeping.
            </p>
            
            <blockquote className="text-xl italic border-l-4 border-accent pl-4 my-8">
              "I could walk the length of my cell in three paces. When I lay down, I could feel 
              the wall with my feet and my head grazed the concrete at the other side."
              <footer className="text-sm mt-2">— Nelson Mandela</footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cellImages.map((image, index) => (
              <motion.div
                key={index}
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                     onClick={() => setSelectedImage(image.src)}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-300">{image.caption}</p>
                <p className="text-xs text-gray-400">Credit: {image.credit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              priority
            />
            <button
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VirtualTour;