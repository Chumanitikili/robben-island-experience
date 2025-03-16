'use client';

import Timeline from '@/components/Timeline';
import VirtualTour from '@/components/VirtualTour';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Robben_Island_and_Blouberg.jpg/1280px-Robben_Island_and_Blouberg.jpg")'
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Robben Island Experience
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Journey through history on the island that held Nelson Mandela and shaped South Africa's path to freedom.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Historical Timeline
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section id="virtual-tour">
        <VirtualTour />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Robben Island Experience. All images are licensed under Creative Commons.
          </p>
        </div>
      </footer>
    </main>
  );
}