import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #6fadc7;
  min-height: 35px;
  min-width: 85px;
  border-radius: 6px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition-duration: 0.37s;

  :hover {
    background-color: #72c9ed;
  }
`;

// export function Button({ children }: { children: any }): JSX.Element {
//   return <div></div>;
// };
