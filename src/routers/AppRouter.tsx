import React from 'react';
import AppLayout from './AppLayout';

const AppRouter = ({
  component: Component,
  authProtected,
  lazy,
}: {
  component: React.ReactElement;
  authProtected?: boolean | undefined;
  lazy?: boolean;
}): React.ReactElement => {
  return <AppLayout lazy={lazy}>{Component}</AppLayout>;
};

export default AppRouter;
