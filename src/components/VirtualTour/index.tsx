import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VirtualTour: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nelson Mandela's Cell
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Cell number 466/64 was Nelson Mandela's home for 18 of his 27 years in prison.
              The tiny cell, measuring just 8 feet by 7 feet (2.4m x 2.1m), contained only a
              bucket toilet, a small table, and a floor mat for sleeping.
            </p>

            <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 text-gray-400 italic">
              "I could walk the length of my cell in three paces. When I lay down, I could feel
              the wall with my feet and my head grazed the concrete at the other side."
              <footer className="mt-2 text-sm">— Nelson Mandela</footer>
            </blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage("/images/placeholder.svg")}
            >
              <Image
                src="/images/placeholder.svg"
                alt="Nelson Mandela's prison cell"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
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