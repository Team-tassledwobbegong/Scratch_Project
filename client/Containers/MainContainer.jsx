import React from 'react';
import NavContainer from './NavContainer';
import FeedContainer from './Feedcontainer';
import Search from './Search';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 

const MainContainer = () => {


  return (
    <Router>
      <NavContainer/>
      <Routes>
        <Route path='/' element={<FeedContainer/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Router>
  )
}
//<Button onClick={Search()}
//{() => {return (<Search/>)}}
export default MainContainer;