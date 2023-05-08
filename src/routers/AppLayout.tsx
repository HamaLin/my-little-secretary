import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import THREE, { PerspectiveCamera } from 'three';
import Avatar from '../containers/Avatar';

const Wraper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
`;

const CameraHelper = () => {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />;
    </group>
  );
};

const LazyContainer = ({ children }: { children: React.ReactElement }) => {
  return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
};

const AppLayout = ({
  children,
  lazy,
}: {
  children: React.ReactElement;
  lazy?: boolean;
}) => (
  <Wraper style={{ height: '100%' }}>
    <Overlay>
      <Suspense fallback={<img src="/mikuLoading.gif" />}>
        <Canvas
          style={{ pointerEvents: 'none' }}
          onClick={() => {
            console.log('click');
          }}
          camera={{
            position: [0, 0, 7],
            zoom: 5,
          }}
        >
          <ambientLight intensity={0.9} />

          <Avatar />
          <OrbitControls />
          {/* <CameraHelper /> */}
        </Canvas>
      </Suspense>
    </Overlay>
    {lazy ? <LazyContainer>{children}</LazyContainer> : children}
  </Wraper>
);

export default AppLayout;
