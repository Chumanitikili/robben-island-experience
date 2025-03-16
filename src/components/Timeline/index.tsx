import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 1964,
    title: "Mandela's Imprisonment",
    description: "Nelson Mandela begins his 18-year imprisonment on Robben Island.",
    image: "/images/placeholder.svg",
    imageAlt: "Placeholder image for testing",
  }
];

const Timeline: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Historical Timeline
        </h2>
        
        <div className="space-y-8">
          {timelineEvents.map((event) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-500">
                    {event.year}: {event.title}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
                
                <div className="md:w-1/2">
                  <div 
                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(event.image)}
                  >
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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

export default Timeline;