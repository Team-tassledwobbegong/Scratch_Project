import React from 'react';
import './app.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SearchAlbum from './Containers/Search';
import axios from "axios"
import MainContainer from './Containers/MainContainer';

const App = () => {

  return (
    <MainContainer/>
  );
};

export default App;
