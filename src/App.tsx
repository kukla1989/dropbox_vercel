import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.scss';

const App: FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
