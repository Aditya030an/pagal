import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function Blob() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.elapsedTime * 0.05;
    mesh.current.rotation.x = clock.elapsedTime * 0.03;
  });

  return (
    <mesh ref={mesh} scale={2.6}>
      <icosahedronGeometry args={[1, 20]} />
      <MeshDistortMaterial
        color="#e5e5e5"
        distort={0.35}
        speed={1.5}
        roughness={0.8}
      />
    </mesh>
  );
}

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <Blob />
    </Canvas>
  );
};

export default ThreeBackground;
