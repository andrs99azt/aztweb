import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Router from './pages/Router';
import './assets/styles/base.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);