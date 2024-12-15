import { Float, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const HtmlLogo = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/html5_logo.glb');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [hoverDirection, setHoverDirection] = useState(null); // Left or Right direction

  useEffect(() => {
    if (cubeRef.current) {
      const tl = gsap.timeline();

      if (hovered) {
        const rotationDirection = hoverDirection === 'left' ? '-=0.5' : '+=0.5';
        tl.to(cubeRef.current.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.5 }); // Increased size when hovered
        tl.to(cubeRef.current.rotation, { x: '+=0.5', y: rotationDirection, duration: 0.5 }, '<');
      } else {
        tl.to(cubeRef.current.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 0.5 }); // Slightly bigger when not hovered
      }

      return () => tl.kill(); // Cleanup animation timeline
    }
  }, [hovered, hoverDirection]);

  const handlePointerMove = (event) => {
    // Determine if the hover is on the left or right of the logo
    const { clientX } = event;
    const { left, right } = event.target.getBoundingClientRect();
    const isLeft = clientX < (left + right) / 2;
    setHoverDirection(isLeft ? 'left' : 'right');
  };

  return (
    <group
      ref={cubeRef}
      position={[0, 0, 0]} // Centered position
      rotation={[0, 0, 0]} // Ensure the logo faces the viewer
      scale={0.2} // Increased base scale for better visibility
      dispose={null}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={handlePointerMove} // Detect hover direction
    >
      <group {...props} dispose={null}>
        <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane_escudo-2_0'].geometry}
            material={materials['escudo-2']}
            position={[0, 0, -0.1]} // Slight offset to prevent overlap
            scale={1} // Base scale
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_five_0.geometry}
            material={materials.five}
            position={[0, 0, 0.1]} // Slight offset
            scale={1}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/html5_logo.glb');

export default HtmlLogo;
