import React from 'react';
import NavContainer from './NavContainer';
import FeedContainer from './Feedcontainer';
import PostCreator from '../Components/postCreator';
import Search from './Search';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 
import { Container } from 'react-bootstrap';

const MainContainer = () => {


  return (
    <Container>
    <Router>
      <NavContainer/>
      <Routes>
        <Route path='/' element={<FeedContainer/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/create-post' element={<PostCreator/>}/>
      </Routes>
    </Router>
    </Container>
  )
}
//<Button onClick={Search()}
//{() => {return (<Search/>)}}
export default MainContainer;