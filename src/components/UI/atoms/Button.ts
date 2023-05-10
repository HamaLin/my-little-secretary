import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyleSize } from '../../../styledTheme';

export const Button = styled.button<{
  size?: StyleSize;
}>`
  background-color: ${(props) => props.theme.palette.primary.main};
  min-height: ${(props) => props.theme.frame.button.medium};
  min-width: 64px;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.37s;
  box-sizing: border-box;

  :hover {
    background-color: #90caf914;
    /* background-color: ${(props) => props.theme.palette.primary.light}; */
  }
`;

export const IconButton = styled(Button)<{
  size?: StyleSize;
}>`
  min-width: auto;
  width: auto;
  height: auto;
  min-height: auto;
  padding: ${(props) => {
    return props?.size
      ? props.theme.frame.iconButton[props.size]
      : props.theme.frame.iconButton.medium;
  }};
  border-radius: 50%;
`;

// export const IconButton = () => (
//   <Button style={{ width: 'auto', minWidth: 'auto' }}></Button>
// );

// export function Button({ children }: { children: any }): JSX.Element {
//   return <div></div>;
// };
