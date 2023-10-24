import React from 'react';
import { Container } from 'react-bootstrap';

// const AUTH_URL = Insert your Spotfy AUTH URL here. If unsure, check the Spotify API Documentation ~insert phil laugh;

export default function Login() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}>
      <a className='btn btn-success btn-lg' href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
