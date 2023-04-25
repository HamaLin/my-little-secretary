import React from 'react';
import AppLayout from './AppLayout';

const AppRouter = ({
  component: Component,
  authProtected,
}: {
  component: React.ReactElement;
  authProtected?: boolean | undefined;
}): React.ReactElement => {
  return <AppLayout>{Component}</AppLayout>;
};

export default AppRouter;
