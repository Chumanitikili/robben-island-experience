'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

// Pre-define materials and geometries for reuse
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.5, metalness: 0.2 });

// Locations data
const locations = [
  {
    id: 1,
    name: "Prison Cell Block B",
    description: "Where Nelson Mandela spent 18 years of his imprisonment",
    position: [0, 0, 5],
    rotation: [0, 0, 0],
    color: '#A47551'
  },
  {
    id: 2,
    name: "Limestone Quarry",
    description: "Where prisoners were forced to work in harsh conditions",
    position: [5, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    color: '#C2B8A3'
  },
  {
    id: 3,
    name: "Maximum Security Prison",
    description: "The main prison building that housed political prisoners",
    position: [-5, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    color: '#8B7E74'
  }
];

// Optimized location model with memo to prevent unnecessary rerenders
function LocationModel({ position, rotation, color }) {
  const meshRef = useRef(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      geometry={boxGeometry}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} />
    </mesh>
  );
}

// Ground plane for better visual context
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#3C4142" roughness={0.8} />
    </mesh>
  );
}

// Main scene component with performance optimizations
function Scene({ currentLocation }) {
  const groupRef = useRef(null);
  const location = locations.find(loc => loc.id === currentLocation);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle rotation for visual interest
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-10, 10, 5]} intensity={1} castShadow />
      
      <Ground />
      
      {/* Render only the current location for performance */}
      <LocationModel 
        position={location.position} 
        rotation={location.rotation} 
        color={location.color} 
      />
      
      <Environment preset="sunset" />
      <OrbitControls 
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        enableDamping
        dampingFactor={0.05}
      />
    </group>
  );
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
      <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
    </div>
  );
}

export default function VirtualTour() {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLocationChange = (locationId) => {
    if (currentLocation === locationId) return;
    setIsLoading(true);
    setCurrentLocation(locationId);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* 3D Canvas with Suspense for code splitting */}
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas shadows className="w-full h-full" dpr={[1, 2]}>
          <Scene currentLocation={currentLocation} />
        </Canvas>
      </Suspense>
      
      {/* UI Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
        {/* Location Navigation */}
        <div className="flex flex-wrap gap-2 mb-4">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationChange(location.id)}
              className={`px-6 py-3 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50
                ${currentLocation === location.id
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {location.name}
            </button>
          ))}
        </div>
        
        {/* Location Info with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLocation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            <h2 className="text-2xl font-bold mb-2">
              {locations[currentLocation - 1].name}
            </h2>
            <p className="text-gray-300">
              {locations[currentLocation - 1].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center z-20"
          >
            <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-white animate-spin"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
