import { Float, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const HtmlLogo = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/html5_logo.glb');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (cubeRef.current) {
      const tl = gsap.timeline();

      if (hovered) {
        tl.to(cubeRef.current.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.5 }); // Scale up when hovered
        tl.to(cubeRef.current.rotation, { y: '+=3', duration: 2, repeat: -1, yoyo: true }); // Spin around the Y-axis like a top
      } else {
        tl.to(cubeRef.current.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 0.5 }); // Return to default scale
        tl.to(cubeRef.current.rotation, { y: 0, duration: 0.5 }); // Stop spinning when not hovered
      }

      return () => tl.kill(); // Cleanup animation timeline
    }
  }, [hovered]);

  return (
    <group {...props} dispose={null}>
      <group position={[-0.014, 0.001, 0]} rotation={[-Math.PI / 2, 0.006, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[11.813, 52.914, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={82.789}>
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
  )
};

useGLTF.preload('/models/html5_logo.glb');

export default HtmlLogo;
