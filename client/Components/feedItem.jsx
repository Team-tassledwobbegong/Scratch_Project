import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const feedItem = () => {
  const [feedData, setFeedData] = useState([]);
  const [feedCards, setFeedCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts/get-feed').then(response => {
      setFeedData(response.data);
    });
  }, []);
  useEffect(() => {
    const feedCards = feedData.map(element => {
      return (
        <Card className='text-center'>
          <Card.Img src={element.albumImage} />
          <Card.Body>
            <Card.Title>{`${element.albumTitle}`}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{`${element.postBody}`}</Card.Subtitle>
          </Card.Body>
        </Card>
      );
    });
    setFeedCards(feedCards);
  }, [feedData]);

  return <div>{feedCards}</div>;
};

export default feedItem;
