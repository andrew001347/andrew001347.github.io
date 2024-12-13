import { Float, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const Photoshop = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/photoshop_logo.glb');

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(cubeRef.current.rotation, {
      y: hovered ? '+=2' : `+=${Math.PI * 2}`,
      x: hovered ? '+=2' : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    return () => tl.kill(); // Cleanup on unmount
  }, [hovered]);

  return (
    <Float floatIntensity={1}>
      <group
        ref={cubeRef}
        position={[0.05, -0.02, 0]}
        rotation={[0, 0, 0]} // Ensure the logo faces the viewer
        scale={0.005}
        dispose={null}
        {...props}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          geometry={nodes.Large_Cube_Material001_0.geometry}
          material={materials['Material.001']}
          rotation={[0, 0, 0]} // Reset unnecessary mesh-level rotations
          scale={2.5}
        />
        <mesh
          geometry={nodes.Large_Cube2_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[0, 0, 0]} // Reset unnecessary mesh-level rotations
          scale={2.0}
        />
        <mesh
          geometry={nodes.Small_Cube_Material003_0.geometry}
          material={materials['Material.003']}
          rotation={[0, 0, 0]} // Reset unnecessary mesh-level rotations
          scale={[1.5, 1.5, 1.5]}
        />
        <mesh
          geometry={nodes.Small_Cube2_Material004_0.geometry}
          material={materials['Material.004']}
          rotation={[0, 0, 0]} // Reset unnecessary mesh-level rotations
          scale={1.3}
        />
        <mesh
          geometry={nodes.PS_SVGMat001_0.geometry}
          material={materials['SVGMat.001']}
          position={[0, 0.05, 0]}
          scale={15.0}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/photoshop_logo.glb');

export default Photoshop;
