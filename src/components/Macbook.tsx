import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useGLTF, OrbitControls, softShadows } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { MacbookAir } from '../models';

softShadows();

export const Macbook: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[5, -5, -5]} intensity={1} />
      <OrbitControls />
      <MacbookAir />
    </Canvas>
  );
};
