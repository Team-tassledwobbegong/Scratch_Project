import React from 'react';
import './app.css';
import Login from './Login';
import MainContainer from './Containers/MainContainer';

const App = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  return code ? <MainContainer code={code} /> : <Login />;
};

export default App;
