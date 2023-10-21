import React from 'react';
import FeedItem from '../Components/feedItem';

const FeedContainer = () => {
/*
this will render feed items. 
overflow: scroll
NOTE: THIS WILL EVENTUALLY POPULATE AN ARRAY WITH FEEDITEMS BASED ON POSTS FOUND IN THE DATABASE, THEN RENDER THAT ARRAY
*/
  return (
    <div id='feedcontainer'>
      <FeedItem/>
      <FeedItem/>
      <FeedItem/>
    </div>
  )
}

export default FeedContainer;