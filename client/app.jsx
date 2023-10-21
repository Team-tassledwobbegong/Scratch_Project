import React from 'react';
import { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import axios from 'axios';

const App = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  return code ? <Dashboard code={code} /> : <Login />;
};

export default App;
