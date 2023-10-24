import React from 'react';
import FeedItem from '../Components/feedItem';
import { Container } from 'react-bootstrap';

const FeedContainer = () => {
  /*
this will render feed items. 
overflow: scroll
NOTE: THIS WILL EVENTUALLY POPULATE AN ARRAY WITH FEEDITEMS BASED ON POSTS FOUND IN THE DATABASE, THEN RENDER THAT ARRAY
*/
  return (
    <div id='feedcontainer'>
      <Container>
        <FeedItem />
      </Container>
    </div>
  );
};

export default FeedContainer;
