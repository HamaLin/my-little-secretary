import React from 'react';
import { Flex, FlexAlignCenter } from '../../components/UI/atoms/layout';
import styled from 'styled-components';
import { Button } from '../../components/UI/atoms/Button';

const Warper = styled(FlexAlignCenter)`
  width: 100%;
  padding: 0 1rem;
  color: white;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Warper>
      <div>닉네임</div>
      <div>
        <a href="https://naver.com">123</a>
      </div>
      <div>
        <Button>123</Button>
      </div>
    </Warper>
  );
};

export default Header;
