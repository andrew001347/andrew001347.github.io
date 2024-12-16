import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';

const HtmlLogo = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/html5_logo.glb');
  const logoRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Continuous bounce effect
    gsap.to(logoRef.current.position, {
      y: '+=0.5',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  const handleHover = () => {
    setHovered(true);
    gsap.to(logoRef.current.rotation, {
      y: '+=12.5664', // 4 * Math.PI radians for two fast rotations
      duration: 0.8, // Fast spin
      ease: 'power1.inOut',
    });
  };

  const handleHoverOut = () => {
    setHovered(false);
    gsap.to(logoRef.current.rotation, {
      y: 0, // Reset to original rotation
      duration: 0.8,
      ease: 'power1.inOut',
    });
  };

  return (
    <group
      {...props}
      ref={logoRef}
      onPointerOver={handleHover}
      onPointerOut={handleHoverOut}
      dispose={null}
    >
      <group position={[-0.014, 0.001, 0]} rotation={[-Math.PI / 2, 0.006, 0]}>
        <group rotation={[Math.PI / 2, 5, 0]} scale={0.01}>
          <group
            position={[11.813, 52.914, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={82.789}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_orange_0.geometry}
              material={materials.orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Plane001_orange-lite_0'].geometry}
              material={materials['orange-lite']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane_escudo-2_0'].geometry}
            material={materials['escudo-2']}
            position={[0, 0, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_five_0.geometry}
            material={materials.five}
            position={[61.853, 307.492, 35.171]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/html5_logo.glb');

export default HtmlLogo;
