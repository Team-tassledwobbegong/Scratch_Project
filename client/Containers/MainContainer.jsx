import React from 'react';
import NavContainer from './NavContainer';
import FeedContainer from './Feedcontainer';
import { Button } from 'react-bootstrap';

const MainContainer = () => {
/*
this will render:
NavContainer
FeedContainer
ui/overlay that isn't a part of the feed/scrolling, like the 'write review' button
'write review' button will redirect to an 'album search' page
*/

  const writeReviewHandler = () => {
    fetch('/search') //im gonna come back to this one lol

  }
  return (
    <div>
      <NavContainer/>
      <FeedContainer/>
      <Button onClick={writeReviewHandler}>Write A Review</Button>
    </div>
  )
}


export default MainContainer;