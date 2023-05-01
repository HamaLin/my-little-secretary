import React, { useRef, useState, Suspense, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn } from '../../components/UI/atoms/layout';
import Model from './Model';
import { Canvas, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import Header from './Header';

const Wraper = styled(FlexColumn)`
  height: 100%;
  /* background-color: gray; */
  background-image: url(/background4.png);
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center; */
  position: relative;

  > div {
    width: 100%;
    height: 3rem;
    background-color: #363636;
    opacity: 0.9;
  }

  > div + div {
    opacity: 1;
    background-color: transparent;
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  height: 86%;
  opacity: 0.87;
  top: 7%;
  position: absolute;
  transform: perspective(600px) rotateY(353deg);

  > div {
    width: 100%;
    background-color: white;
    height: 20%;
  }

  > div + div {
    margin-top: 5rem;
    flex-grow: 1;
  }
`;

const Body = styled(Flex)`
  width: 100%;
  position: relative;

  > div {
    position: relative;
    width: 40%;
  }

  > div + div {
    flex-grow: 1;
  }
`;

const CameraHelper = () => {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />;
    </group>
  );
};

const Home = () => {
  let camera = new THREE.PerspectiveCamera(40, 1.5, 0.1, 1000);
  const [cameraSetting, setCameraSetting] = useState({
    fov: 40,
    near: 0,
    far: 0,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  const onChangeCamera = (e: any) => {
    const name = e.target.name;
    const value = +e.target.value > 0 ? +e.target.value : 0;
    let tempObj = { ...cameraSetting };

    switch (name) {
      case 'fov':
        tempObj = { ...tempObj, fov: value };
        break;
      case 'positionX':
        tempObj = { ...tempObj, position: { ...tempObj.position, x: value } };

        break;
      case 'positionY':
        tempObj = { ...tempObj, fov: value };

        tempObj = { ...tempObj, position: { ...tempObj.position, y: value } };

        break;
      case 'positionZ':
        tempObj = { ...tempObj, fov: value };

        tempObj = { ...tempObj, position: { ...tempObj.position, z: value } };
        break;
    }

    camera.position.set(
      tempObj.position.x,
      tempObj.position.y,
      tempObj.position.z,
    );
  };

  useEffect(() => {
    console.log(cameraSetting);
  }, [cameraSetting]);

  return (
    <Wraper>
      <Header />
      <Body>
        <div>
          <Suspense fallback={<img src="/mikuLoading.gif" />}>
            <Canvas
              camera={{
                position: [0, 0, 7],
                zoom: 5,
              }}
            >
              {/* <OrbitControls /> */}
              <ambientLight intensity={0.9} />
              <Model />

              <CameraHelper />
            </Canvas>
          </Suspense>
        </div>
        <div>
          <Test>
            <div>날씨</div>
            <div>캘린더</div>
          </Test>
        </div>
      </Body>

      <div
        style={{
          position: 'absolute',
          width: '20%',
          height: '10%',
          backgroundColor: 'white',
          opacity: 0.8,
          bottom: 0,
          left: '40%',
        }}
      >
        메뉴
      </div>
    </Wraper>
  );
};

export default Home;
