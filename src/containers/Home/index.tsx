import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn } from '../../components/UI/atoms/layout';
import * as THREE from 'three';
import Header from './Header';
import Calendar from '../../components/Calendar';

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
  width: 95%;
  height: 90%;
  /* opacity: 0.87; */
  top: 4%;
  position: absolute;
  transform: perspective(600px) rotateY(357deg);
  overflow: visible;

  /* border-radius: 8px; */

  > div {
    width: 100%;
    background-color: white;
    height: 100%;
  }

  /* > div + div {
    background-color: transparent;
    margin-top: 3rem;
    flex-grow: 1;
  } */
`;

const Body = styled(Flex)`
  width: 100%;
  position: relative;

  > div {
    position: relative;
    width: 30%;
  }

  > div + div {
    flex-grow: 1;
  }
`;

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
        <div></div>
        <div>
          <Test>
            {/* <div>날씨</div> */}
            <Calendar />
          </Test>
        </div>
      </Body>

      <div
        style={{
          position: 'absolute',
          width: '20%',
          height: '8%',
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
