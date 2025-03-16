'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const locations = [
  {
    id: 1,
    name: "Prison Cell Block B",
    description: "Where Nelson Mandela spent 18 years of his imprisonment",
    position: [0, 0, 5],
    rotation: [0, 0, 0]
  },
  {
    id: 2,
    name: "Limestone Quarry",
    description: "Where prisoners were forced to work in harsh conditions",
    position: [5, 0, 0],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    id: 3,
    name: "Maximum Security Prison",
    description: "The main prison building that housed political prisoners",
    position: [-5, 0, 0],
    rotation: [0, -Math.PI / 2, 0]
  }
];

function Scene({ currentLocation }: { currentLocation: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={locations[currentLocation - 1].position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#CA0000" />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
}

export default function VirtualTour() {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLocationChange = (locationId: number) => {
    setIsLoading(true);
    setCurrentLocation(locationId);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="relative h-[80vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 2, 10]} />
          <OrbitControls enableZoom={false} />
          <Scene currentLocation={currentLocation} />
        </Canvas>
      </motion.div>

      {/* Location Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => handleLocationChange(location.id)}
            className={`px-6 py-3 rounded-full transition-all cursor-hover
              ${currentLocation === location.id 
                ? 'bg-accent text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* Location Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 left-8 max-w-md bg-black/50 backdrop-blur-md p-6 rounded-lg"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          {locations[currentLocation - 1].name}
        </h3>
        <p className="text-gray-200">
          {locations[currentLocation - 1].description}
        </p>
      </motion.div>

      {/* Loading Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        className={`absolute inset-0 bg-primary flex items-center justify-center
          ${isLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </motion.div>
    </div>
  );
}