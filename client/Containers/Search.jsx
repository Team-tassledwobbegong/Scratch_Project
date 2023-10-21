import React from 'react';
import '../app.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const SearchAlbum = () => {
    const [searchInput, setSearchInput] = useState("");
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
                    <Card.Img src="#"/>
                    <Card.Body>
                        <Card.Title>Insert Album Name Here Please</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        <Container className="profile">
  
        </Container>
        <Container className="feed">
        <h1>Hello World!!!!!!!!!!!!!!</h1>
  
        </Container>
      </div>
    );
  };

  export default SearchAlbum;
