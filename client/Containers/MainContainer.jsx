import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavContainer from './NavContainer';
import FeedContainer from './Feedcontainer';
import PostCreator from '../Components/postCreator';
import Search from './Search';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 
import { Container } from 'react-bootstrap';

const spotifyApi = new SpotifyWebApi({
  clientId: 'f8e5d3d4e353428c837bc038cc42f9a2',
  clientSecret: '667adf1ee38e4e46934a1fc78a472d85',
});

const MainContainer = ({ code }) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:3000/login', { code })
      .then(response => {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
      })
      .catch(err => {
        console.log(err);
        // window.location = '/';
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post('/refresh', { refreshToken })
        .then(response => {
          setAccessToken(response.data.accessToken);
          setExpiresIn(response.data.expiresIn);
        })
        .catch(err => {
          window.location = '/';
        });
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    
  }, [accessToken]);


  return (
    <Container>
    <Router>
      <NavContainer/>
      <Routes>
        <Route path='/' element={<FeedContainer/>}/>
        <Route path='/search' element={<Search accessToken = {accessToken}/>}/>
        <Route path='/create-post' element={<PostCreator/>}/>
      </Routes>
    </Router>
    </Container>
  )
}
//<Button onClick={Search()}
//{() => {return (<Search/>)}}
export default MainContainer;