import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Car3DModel } from './Car3DModel';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export interface CarConfiguration {
  color: string;
  material: 'solid' | 'metallic' | 'matte';
  environment: 'showroom' | 'sunset' | 'studio';
}

interface CarViewerProps {
  config: CarConfiguration;
  onConfigChange: (config: CarConfiguration) => void;
}

export const CarViewer = ({ config, onConfigChange }: CarViewerProps) => {
  const controlsRef = useRef<any>();
  
  const cameraPresets = {
    front: { position: [0, 1, 5], target: [0, 0, 0] },
    side: { position: [5, 1, 0], target: [0, 0, 0] },
    rear: { position: [0, 1, -5], target: [0, 0, 0] },
    top: { position: [0, 8, 0], target: [0, 0, 0] }
  };

  const setCameraView = (preset: keyof typeof cameraPresets) => {
    if (controlsRef.current) {
      const { position, target } = cameraPresets[preset];
      controlsRef.current.object.position.set(...position);
      controlsRef.current.target.set(...target);
      controlsRef.current.update();
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-showroom rounded-xl overflow-hidden glass-morphism">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 50 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[3, 2, 5]} />
          
          {/* Lighting Setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <spotLight
            position={[0, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            color={config.environment === 'showroom' ? '#3b82f6' : '#ffffff'}
          />

          {/* Environment */}
          <Environment
            preset={
              config.environment === 'showroom' ? 'studio' :
              config.environment === 'sunset' ? 'sunset' : 'city'
            }
          />

          {/* Car Model */}
          <Car3DModel config={config} />

          {/* Controls */}
          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Loading Overlay */}
      <Suspense fallback={<LoadingSpinner />}>
        <div />
      </Suspense>

      {/* Camera Controls */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        {Object.keys(cameraPresets).map((preset) => (
          <button
            key={preset}
            onClick={() => setCameraView(preset as keyof typeof cameraPresets)}
            className="px-3 py-2 bg-gradient-glass border border-border rounded-md text-sm font-medium text-foreground hover:bg-accent/20 transition-automotive capitalize"
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Environment Info */}
      <div className="absolute top-4 right-4 glass-morphism px-4 py-2 rounded-md">
        <span className="text-sm font-medium text-muted-foreground">
          Environment: <span className="text-foreground capitalize">{config.environment}</span>
        </span>
      </div>
    </div>
  );
};