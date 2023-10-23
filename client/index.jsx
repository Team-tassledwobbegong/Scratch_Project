import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import MainContainer from './Containers/MainContainer';
import Search from './Containers/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const search = ReactDOM.createRoot(document.getElementById('search'));
root.render(<App />);
// search.render(<Search/>);
