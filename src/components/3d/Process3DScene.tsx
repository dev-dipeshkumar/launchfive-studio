"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Line } from "@react-three/drei";
import * as THREE from "three";
import { workProcess } from "@/data/process";

// A single orbiting node representing one workflow step
function WorkflowNode({
  index,
  total,
  color,
  radius = 2.6,
}: {
  index: number;
  total: number;
  color: string;
  radius?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // Orbit around the center
      groupRef.current.rotation.y = t * 0.25;
    }
    if (meshRef.current) {
      // Gentle self-rotation + pulse
      meshRef.current.rotation.x = t * 0.4 + index;
      meshRef.current.rotation.z = t * 0.3;
      const s = 0.32 + Math.sin(t * 1.5 + index) * 0.04;
      meshRef.current.scale.setScalar(s);
    }
  });

  const position: [number, number, number] = [
    Math.cos(angle) * radius,
    Math.sin(angle * 2) * 0.35,
    Math.sin(angle) * radius,
  ];

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef} position={position}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.45}
            roughness={0.25}
            metalness={0.85}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Central morphing core
function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} scale={0.9}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.2}
          roughness={0.35}
          metalness={0.9}
          distort={0.35}
          speed={2.5}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

// Connecting ring line between nodes
function OrbitRing({ radius = 2.6 }: { radius?: number }) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius]);
    }
    return pts;
  }, [radius]);

  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.x = Math.PI / 2.4;
  });

  return (
    <group ref={ref}>
      <Line points={points} color="#7C3AED" lineWidth={1} transparent opacity={0.25} />
    </group>
  );
}

function Particles() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#06B6D4"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#7C3AED" />
      <directionalLight position={[-5, -5, -5]} intensity={0.35} color="#06B6D4" />
      <pointLight position={[0, 0, 4]} intensity={0.6} color="#EC4899" />

      <Core />
      <OrbitRing />
      {workProcess.map((step, i) => (
        <WorkflowNode
          key={step.step}
          index={i}
          total={workProcess.length}
          color={step.color}
        />
      ))}
      <Particles />
    </>
  );
}

export default function Process3DScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
