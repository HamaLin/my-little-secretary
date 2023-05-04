import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Avatar = () => {
  const [position, setPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(-0.7, -1.2, 3),
  );
  // const [position, setPosition] = useState<THREE.Vector3>([0,-1.2,3])
  const gltf = useLoader(GLTFLoader, '/models/rimuru.glb');
  // let mixer = new THREE.AnimationMixer(gltf.scene);
  // let action = mixer.clipAction(gltf.animations[2]);

  // action.play();
  // action.loop = THREE.LoopOnce;

  // window.addEventListener('keydown', (e) => {
  //   if (e.key === 'Enter') {
  //     action = mixer.clipAction(gltf.animations[1]);
  //     action.play();
  //     // action.loop = THREE.LoopOnce;

  //     action.paused = !action.paused;

  //     console.log(action);
  //   }
  // });

  // useFrame((state, delta) => {
  //   mixer?.update(delta);
  // });

  //============================================

  //   const test = () => {
  //     let x = 0;

  //     const time = setInterval(() => {
  //       const vec = new THREE.Vector3(x, -1.2, 3);
  //       setPosition(vec);
  //       x -= 0.1;

  //       if (x < -0.8) clearInterval(time);
  //     }, 1000);
  //   };

  //   useEffect(() => {
  //     test();
  //   }, []);

  return (
    <mesh
      castShadow
      receiveShadow
      position={position}
      // rotation={[0, 0.5, 0]}
    >
      <meshToonMaterial color="white" />
      <directionalLight color="white" position={[0, 0, 5]} />
      <primitive object={gltf.scene} scale={1} />
    </mesh>
  );
};

export default Avatar;
