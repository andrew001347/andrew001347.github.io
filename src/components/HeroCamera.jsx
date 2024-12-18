import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const group = useRef();

  useFrame((state, delta) => {
   
    easing.damp3(state.camera.position, [0, 0, 30], 0.1, delta);

    if (!isMobile) {
     
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 10, state.pointer.x / 15, 0], 
        0.1, 
        delta
      );
    }
  });

  return <group ref={group} scale={ isMobile? 1: 1.3}>{children}</group>;
};

export default HeroCamera;
