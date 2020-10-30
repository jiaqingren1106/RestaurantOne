import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

ReactDOM.render(
  <React.StrictMode>
    <SecondPage />
  </React.StrictMode>,
  document.getElementById('root')
);

