import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppRouter from './routers/AppRouter';
import Home from './containers/Home';
import { theme } from './styledTheme';
const Todo = React.lazy(() => import('./containers/Todo'));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/todo" element={<AppRouter component={<Todo />} />} />
          <Route path="/*" element={<AppRouter component={<Home />} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
