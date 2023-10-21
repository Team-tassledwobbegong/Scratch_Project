import React from 'react';
import { Container } from 'react-bootstrap';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=07550a4dafc0463485755de21f1e51f8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private';

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
