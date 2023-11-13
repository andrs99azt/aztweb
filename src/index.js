import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/Router';
import './assets/styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);