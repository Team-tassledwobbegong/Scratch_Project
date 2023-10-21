import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard({ code }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  useEffect(() => {
    axios
      .post('/login', { code })
      .then(response => {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
      })
      .catch(err => console.log(err));
  }, [code]);
  return <div> {code} </div>;
}
