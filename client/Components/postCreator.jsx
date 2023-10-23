import React from 'react';
import { Button, Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const postCreator = () => {

  return (
    <>
      <div>
        <Container className="postCreator">
        <img src='https://cdn1.iconfinder.com/data/icons/music-and-media-player-ui-glyph-s94/96/Music_Icon_Pack_-_Glyph_vinyl-512.png'/>
        <textarea className="textarea" rows="10" cols="50" spellCheck="true" required='true' autoComplete='true' placeholder='Enter Your Review Here'></textarea>
        <p className="buttonRow"><Link to='/'><Button className="postReviewButton">Post Review</Button></Link></p>
        </Container>
      </div>

      <div>
        <Card className="text-center">
            <Card.Img src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/216/original/white-background.png"/>
            <Card.Body>
                <Card.Title>Testing Album Name Caption</Card.Title>
                <Card.Subtitle classNmae="mb-2 text-muted">Testing Artist Name</Card.Subtitle>
                <Link to='/create-post'><Button className="postReviewButton" varient="primary">Leave Review</Button></Link>
            </Card.Body>
        </Card>

      </div>
      </>
  )
}

export default postCreator;