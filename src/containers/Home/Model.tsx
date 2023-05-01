import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/rimuru.glb');
  // let mixer = new THREE.AnimationMixer(gltf.scene);
  // const action = mixer.clipAction(gltf.animations[2]);
  // action.play();

  // console.log(gltf.animations);

  // useFrame((state, delta) => {
  //   mixer?.update(delta);
  // });

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -1.2, 3]}
      // rotation={[0, 0.5, 0]}
    >
      <meshToonMaterial color="white" />
      <directionalLight color="white" position={[0, 0, 5]} />
      <primitive object={gltf.scene} scale={1} />
    </mesh>
  );
  // return (
  //   <mesh>
  //     <boxGeometry args={[1, 1, 1]} />
  //   </mesh>
  // );
};

export default Model;
