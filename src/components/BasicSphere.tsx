import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const BasicSphere: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[2, 36, 18]} />
        <meshPhongMaterial color="#346655" />
      </mesh>
      <ambientLight color="gray" intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} intensity={0.5} />
      <directionalLight color="blue" position={[0, 5, 5]} intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </Canvas>
  );
};
