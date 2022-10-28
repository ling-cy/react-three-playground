import { Canvas, GroupProps, useFrame, useThree } from '@react-three/fiber';
import React from 'react';
import {
  useGLTF,
  OrbitControls,
  softShadows,
  ScrollControls,
  useScroll,
} from '@react-three/drei';
import { MacbookAir } from '../models';
import useRefs from 'react-use-refs';
import { Mesh } from 'three';

softShadows();

export const Macbook: React.FC = () => {
  return (
    <Canvas>
      <ScrollControls pages={5}>
        <Composition />
      </ScrollControls>
    </Canvas>
  );
};

const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

const Composition: React.FC<GroupProps> = (props) => {
  const scroll = useScroll();
  const [mba] = useRefs<Mesh>();
  const { width, height } = useThree((state) => state.viewport);

  useFrame(() => {
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(1 / 4, 1 / 4);
    const r3 = scroll.visible(4 / 5, 1 / 5);
    if (mba.current) {
      mba.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33;
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[5, -5, -5]} intensity={1} />
      <orthographicCamera
        attachObject={['shadow', 'camera']}
        args={[-10, 10, 10, -10, 0.5, 30]}
      />
      <MacbookAir ref={mba} />
    </>
  );
};
