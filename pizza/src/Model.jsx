import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { ExtrudeGeometry, Shape, ShapeGeometry, MeshStandardMaterial } from 'three';

const Model = () => {
  const baseRef = useRef();

  const [geometry] = useState(() => {
    // Create a circle shape
    const circleShape = new Shape();
    circleShape.absarc(0, 0, 1, 0, Math.PI * 2, false);

    // Extrude the circle to create the base
    const extrudeSettings = {
      depth: 0.1, // thickness of the base
      bevelEnabled: false,
    };
    return new ExtrudeGeometry(circleShape, extrudeSettings);
  });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={baseRef} geometry={geometry}>
        <MeshStandardMaterial color="brown" />
      </mesh>
    </Canvas>
  );
};

export default Model;
