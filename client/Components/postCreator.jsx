import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const postCreator = ({ albums, albumIndex }) => {

  const chosenAlbum = albums[albumIndex]
  const image = chosenAlbum.images[0].url
  const name = chosenAlbum.name
  const artistName = chosenAlbum.artists[0].name
  console.log(`image: ${image}, name: ${name}, artistName: ${artistName}`)
  
  console.log(`THE RIGHT ALBUM: ${JSON.stringify(chosenAlbum)}`)

  return (
    <>
      <div>
        <Container className="postCreator">
          <Card>
            <Card.Img src={image}/>
            <Card.Title className = "text-center">{`${name}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">{`${artistName}`}</Card.Subtitle>
        </Card>
        <textarea className="textarea" rows="10" cols="50" spellCheck="true" required='true' autoComplete='true' placeholder='Enter Your Review Here'></textarea>
        <p className="buttonRow"><Link to='/'><Button className="postReviewButton">Post Review</Button></Link></p>
        </Container>
      </div>

    
      </>
  )
}

export default postCreator;
