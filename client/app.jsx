import React from 'react';
import './app.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SearchAlbum from './Containers/Search';
import axios from "axios"

const CLIENT_ID = "f8e5d3d4e353428c837bc038cc42f9a2";
const CLIENT_SECRET = "667adf1ee38e4e46934a1fc78a472d85" 

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const authParamters ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form/urlencoded'
      },
      body: 'grant_type=client_crednentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    axios.get('https://acounts.spotify.com/api/token', authParamters)
    .then((response) => {
      console.log('response:', response);
    });
  },[])
  return (
    <div className="App">
      <Container className="searchbar">
        <InputGroup className="mb-3" size="lg"> 
          <FormControl
            placeholder="Search for Album"
            type="input"
            onKeyPress={event => {
              if (event.key == "Enter"){
                console.log("Key Entered")
              }
            }}
            onChange= {event => setSearchInput(event.target.value)}
            />
            <Button onClick={() => {console.log("You clicked the button")}}>
              Search
            </Button>
        </InputGroup>
      </Container>
      <Container>
          <Row className="mx-2 row row-cols-4">
              <Card>
                  <Card.Img src="https://ih1.redbubble.net/image.595230051.9061/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"/>
                  <Card.Body>
                      <Card.Title>Insert Album Name Here Please</Card.Title>
                  </Card.Body>
              </Card>
          </Row>
      </Container>
      <Container className="profile">

      </Container>
      <Container className="feed">
      <h1>Hello Wobbegang!!!!!!!!!!!!!!</h1>

      </Container>
    </div>
  );
};

export default App;
