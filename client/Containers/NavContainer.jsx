import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavContainer = () => {
  /*
this will render navigation links
*/
  return (
    <div id='navbox'>
      <Link to='/'>
        <Button className='navButton'>Profile</Button>
      </Link>
      <Link to='/'>
        <Button className='navButton'>Discover</Button>
      </Link>
      <Link to='/'>
        <Button className='navButton'>Settings</Button>
      </Link>
      <Link to='/'>
        <Button className='navButton'>Log Out</Button>
      </Link>
      <Link to='/'>
        <Button className='navButton'>Home</Button>
      </Link>
      <Link to='/create-post'>
        <Button className='navButton'>Post A Review</Button>
      </Link>
      <Link to='/search'>
        <Button className='navButton'>Search</Button>
      </Link>
    </div>
  );
};

export default NavContainer;
