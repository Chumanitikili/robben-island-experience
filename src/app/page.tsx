import Image from 'next/image'
import Timeline from '@/components/Timeline'
import VirtualTour from '@/components/VirtualTour'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Robben Island"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Robben Island Experience
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Journey through history: Explore the symbolic heart of South Africa's path to freedom
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Virtual Tour Section */}
      <VirtualTour />
    </main>
  )
}