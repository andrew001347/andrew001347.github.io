/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/photoshop-logo-08ae5552e71645beb538d0f081538927
Title: Photoshop Logo
*/

import { Float, useGLTF } from '@react-three/drei'

const Photoshop = (props) => {
  const { nodes, materials } = useGLTF('/models/photoshop_logo.glb')
  return (
    <Float floatIntensity={1}>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Cube_Material001_0.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Cube2_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Small_Cube_Material003_0.geometry}
        material={materials['Material.003']}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        scale={[0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Small_Cube2_Material004_0.geometry}
        material={materials['Material.004']}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PS_SVGMat001_0.geometry}
        material={materials['SVGMat.001']}
        position={[0, 9.18, 0]}
        scale={0.5}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/photoshop_logo.glb');

export default Photoshop;