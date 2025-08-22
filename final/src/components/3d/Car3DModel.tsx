import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { CarConfiguration } from './CarViewer';

interface Car3DModelProps {
  config: CarConfiguration;
}

export const Car3DModel = ({ config }: Car3DModelProps) => {
  const carBodyRef = useRef<Mesh>(null!);
  const wheelRef1 = useRef<Mesh>(null!);
  const wheelRef2 = useRef<Mesh>(null!);
  const wheelRef3 = useRef<Mesh>(null!);
  const wheelRef4 = useRef<Mesh>(null!);

  // Subtle rotation animation when not being interacted with
  useFrame((state) => {
    if (carBodyRef.current) {
      carBodyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  // Material configuration based on selection
  const getCarMaterial = () => {
    const baseColor = config.color;
    
    switch (config.material) {
      case 'metallic':
        return {
          color: baseColor,
          metalness: 0.9,
          roughness: 0.1,
          envMapIntensity: 1.5
        };
      case 'matte':
        return {
          color: baseColor,
          metalness: 0.0,
          roughness: 0.8,
          envMapIntensity: 0.3
        };
      default: // solid
        return {
          color: baseColor,
          metalness: 0.3,
          roughness: 0.4,
          envMapIntensity: 0.8
        };
    }
  };

  const carMaterial = getCarMaterial();

  return (
    <group position={[0, -0.5, 0]} scale={1.2}>
      {/* Car Body */}
      <mesh ref={carBodyRef} castShadow receiveShadow>
        <boxGeometry args={[3, 0.8, 1.2]} />
        <meshStandardMaterial {...carMaterial} />
      </mesh>

      {/* Car Roof */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[2, 0.4, 1]} />
        <meshStandardMaterial {...carMaterial} />
      </mesh>

      {/* Hood */}
      <mesh position={[1.2, 0.1, 0]} castShadow>
        <boxGeometry args={[0.6, 0.2, 1]} />
        <meshStandardMaterial {...carMaterial} />
      </mesh>

      {/* Wheels */}
      <group>
        <group position={[1, -0.4, 0.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh ref={wheelRef1} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
        <group position={[1, -0.4, -0.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh ref={wheelRef2} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
        <group position={[-1, -0.4, 0.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh ref={wheelRef3} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
        <group position={[-1, -0.4, -0.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh ref={wheelRef4} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* Windows */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.8, 0.2, 0.9]} />
        <meshStandardMaterial 
          color="#87ceeb" 
          transparent 
          opacity={0.3} 
          metalness={0.1} 
          roughness={0.0}
        />
      </mesh>

      {/* Headlights */}
      <mesh position={[1.6, 0.1, 0.4]} castShadow>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[1.6, 0.1, -0.4]} castShadow>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Taillights */}
      <mesh position={[-1.6, 0.1, 0.4]} castShadow>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial 
          color="#ff0000" 
          emissive="#ff0000" 
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[-1.6, 0.1, -0.4]} castShadow>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial 
          color="#ff0000" 
          emissive="#ff0000" 
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Ground Shadow Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </group>
  );
};