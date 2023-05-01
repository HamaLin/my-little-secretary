import React from 'react';
import styled from 'styled-components';

const AppLayout = ({ children }: { children: React.ReactElement }) => {
  return <div style={{ height: '100%' }}>{children}</div>;
};

export default AppLayout;
