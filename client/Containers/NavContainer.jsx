import React from 'react';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const NavContainer = () => {
/*
this will render navigation links
*/
  return (
    <div>
      <h1>profile</h1>
      <h1>discover</h1>
      <h1>settings</h1>
      <h1>log out</h1>
      <Link to='/'>My Feed</Link>
      <Link to='/Search'>Write A Review</Link>
    </div>
  )
}

export default NavContainer;