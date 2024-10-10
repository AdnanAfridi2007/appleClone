import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

function Loader(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/loading_animate.glb'); // Update to use GLB file
  const { actions } = useAnimations(animations, group);
  
  // Optional: Play the first animation on mount
  React.useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, -0.012, -0.012]} rotation={[-0.003, 0, 0]}>
          <group name="Root">
            <group name="Text" position={[-1.415, 0, 0]}>
              <mesh
                name="Text_0"
                castShadow
                receiveShadow
                geometry={nodes.Text_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Plane" position={[0, -0.414, 0]} scale={[1.907, 0.024, 1]}>
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Plane001" position={[0, -0.349, 0]} scale={[1.907, 0.024, 1]}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Plane002" position={[0, -0.277, 0]} scale={[1.907, 0.024, 1]}>
              <mesh
                name="Plane002_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane002_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Plane003" position={[0, -0.198, 0]} scale={[1.907, 0.024, 1]}>
              <mesh
                name="Plane003_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane003_0.geometry}
                material={materials['Material.001']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Loader;

useGLTF.preload('/models/loading_animate.glb'); // Preload GLB file
