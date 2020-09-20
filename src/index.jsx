import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';

const root = document.getElementbyId('root');
if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}
