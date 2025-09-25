import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export const Model = React.memo((props) => {
  const { nodes } = useGLTF('/logo1.gltf');

  // Fallbacks in case mesh names differ (for robustness)
  const mesh0 = nodes?.mesh_0;
  const mesh1 = nodes?.mesh_1;

  // Memoized scale
  const scale = useMemo(() => [15, 15, 15], []);

  // Only add meshes that exist
  const meshes = useMemo(() => {
    const result = [];
    if (mesh0) result.push({ geometry: mesh0.geometry, material: mesh0.material });
    if (mesh1) result.push({ geometry: mesh1.geometry, material: mesh1.material });
    return result;
  }, [mesh0, mesh1]);

  return (
    <group scale={scale} castShadow receiveShadow {...props} dispose={null}>
      {meshes.map((mesh, i) => (
        <mesh
          key={i}
          geometry={mesh.geometry}
          material={mesh.material}
        />
      ))}
    </group>
  );
});

useGLTF.preload('/logo1.gltf');
