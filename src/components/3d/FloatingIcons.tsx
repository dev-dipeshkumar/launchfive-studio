"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function ServiceIcon({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={0.2}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.65}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#7C3AED" />
      <pointLight position={[2, 2, 2]} intensity={0.3} color="#06B6D4" />

      <ServiceIcon position={[-2, 1, 0]} color="#7C3AED" />
      <ServiceIcon position={[2, -0.5, 0]} color="#06B6D4" />
      <ServiceIcon position={[0, -1.5, 0]} color="#F97316" />
      <ServiceIcon position={[-1.5, -1, 0]} color="#10B981" />
    </>
  );
}

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
