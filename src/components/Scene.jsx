"use client";
import React, { useRef, useMemo, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Model } from "./Model";

// Camera movement segments based on scroll progress
const CAMERA_SEGMENTS = [
  { start: 0, end: 0.33, from: 0, to: 1 },
  { start: 0.33, end: 0.66, from: 1, to: 2 },
  { start: 0.66, end: 1, from: 2, to: 3 },
];

const Scene = ({ progress = 0, modelRef }) => {
  const cameraRef = useRef();

  // Precomputed camera path
  const cameraPositions = useMemo(() => [
    [-4.6, 0.6, 8.8],
    [7.6, -4.6, 4.3],
    [-5.6, 2.6, 7.6],
    [3.1, -2.7, 8.8],
  ], []);

  // Calculate interpolated camera position based on scroll progress
  const getCameraPosition = useCallback((progressValue) => {
    const segment = CAMERA_SEGMENTS.find(
      (s) => progressValue >= s.start && progressValue <= s.end
    );

    if (!segment) return cameraPositions[0];

    const t = (progressValue - segment.start) / (segment.end - segment.start);
    const [x1, y1, z1] = cameraPositions[segment.from];
    const [x2, y2, z2] = cameraPositions[segment.to];

    return [
      x1 + (x2 - x1) * t,
      y1 + (y2 - y1) * t,
      z1 + (z2 - z1) * t,
    ];
  }, [cameraPositions]);

  // Update camera position on every frame
  useFrame(() => {
    if (!cameraRef.current) return;

    // Don't update if user hasn't scrolled yet
    if (progress <= 0.01) return;

    const [x, y, z] = getCameraPosition(progress);
    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={cameraPositions[0]}
      />
      <Environment preset="city" />
      <Model
        ref={modelRef}
        rotation={[0, 0, 0]}
        // scale={[15, 15, 15]} // optional size scaling
      />
    </>
  );
};

export default React.memo(Scene);
