import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Detailed,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

import { Sphere } from "@react-three/drei";

function Bule({ index, z, speed }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  // calculează dimensiunea viewportului.
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const [data] = useState({
    // Distribuirea aleatorie a obiectelor
    y: THREE.MathUtils.randFloatSpread(height * 2),
    // valoare aleatorie între -1 și 1 pe care o vom înmulți cu lățimea viewportului.
    x: THREE.MathUtils.randFloatSpread(2),
    // Obiectele se rotesc cu o viteza cuprinsa intre 8 si 12
    spin: THREE.MathUtils.randFloat(8, 12),
    // Rotatii random
    rX: Math.random() * Math.PI, // Math.Pi = 360 grade
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    // delta timpul dintre acest cadru și cel anterior
    // Sfera se mișcă în sus și în jos pe axa Y și se învârte în jurul axelor X și Z
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      );
    // Rotirea obiectului
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );
    // Daca sunt prea sus, trimitem sferele inapoi jos
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });

  // Creare element tridimensional compus din mai multe sfere
  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
      <mesh>
        <Sphere>
          <meshStandardMaterial color="#E0B59A" />
        </Sphere>
      </mesh>

      <mesh>
        <Sphere>
          <meshStandardMaterial color="#E0B59A" />
        </Sphere>
      </mesh>

      <mesh>
        <Sphere>
          <meshStandardMaterial color="#E0B59A" />
        </Sphere>
      </mesh>

      <mesh>
        <Sphere>
          <meshStandardMaterial color="#E0B59A" />
        </Sphere>
      </mesh>
    </Detailed>
  );
}

export default function Bulele({
  speed = 1,
  count = 80,
  depth = 80,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}
    >
      <color attach="background" args={["#E0B59A"]} />
      <spotLight
        position={[10, 20, 10]}
        penumbra={1}
        intensity={1}
        color="orange"
      />
      {/* Raspandim neuniform obiectele, avand un singur obiect mare in fata */}
      {Array.from(
        { length: count },
        (_, i) => <Bule key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */
      )}
      <Environment preset="sunset" />
      <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} height={700} />
      </EffectComposer>
    </Canvas>
  );
}