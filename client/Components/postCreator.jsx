import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

//this carries over properties needed t
const postCreator = ({ albums, albumIndex }) => {
  const chosenAlbum = albums[albumIndex];

  const image = chosenAlbum.images[0].url;
  const name = chosenAlbum.name;
  const albumID = chosenAlbum.id;
  const artistName = chosenAlbum.artists[0].name;

  const handlePostSubmission = async () => {
    const response = await axios.post(
      'http://localhost:3000/posts/create-post',
      {
        albumImage: image,
        albumID: albumID,
        albumTitle: name,
        postBody: document.getElementById('textID').value,
      },
    );
  };

  return (
    <>
      <div>
        <Container className='postCreator'>
          <Card>
            <Card.Img src={image} />
            <Card.Title className='text-center'>{`${name}`}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted text-center'>{`${artistName}`}</Card.Subtitle>
          </Card>
          <textarea
            id='textID'
            className='textarea'
            rows='10'
            cols='50'
            spellCheck='true'
            required='true'
            autoComplete='true'
            placeholder='Enter Your Review Here'></textarea>
          <p className='buttonRow'>
            <Link to='/'>
              <Button
                className='postReviewButton'
                onClick={() => handlePostSubmission()}>
                Post Review
              </Button>
            </Link>
          </p>
        </Container>
      </div>
    </>
  );
};

export default postCreator;
