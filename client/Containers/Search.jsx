import React from 'react';
import '../app.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'



const SearchAlbum = () => {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);

    
    async function search(){
        console.log("Search is:" + searchInput)

        const searchParams = {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + accessToken

            }
        }

        const artistID = await axios.get('https://apit.spotify.com/vi/search?q=' + searchInput + '&type=artist', searchParams)
            .then(data => {return data.artists.items[0].id})
            console.log('Artist ID is:' + artistID);

        const foundAlbums = await axios.get('https://apit.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=30', searchParams)
            .then(data => {
                setAlbums(data.items);
            })
    }

    return (
        <div className="App">
        <Container className="searchbar">
          <InputGroup className="mb-3" size="lg"> 
            <FormControl
              placeholder="Search for Album"
              type="input"
              onKeyPress={event => {
                if (event.key == "Enter"){
                  search()
                }
              }}
              onChange= {event => setSearchInput(event.target.value)}
              />
              <Button onClick={search}>
                Search
              </Button>
          </InputGroup>
        </Container>
        <Container>
            <Row className="mx-2 row row-cols-4">
                {albums.map( (album, i) => {
                    return (
                        <Card>
                            <Card.Img src={album.images[0].url} />
                            <Card.Body>
                                <Card.title>{album.name}</Card.title>
                                <Button onClick= {() => console.log('card button')}>Review This Album</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
        <Container className="profile">
  
        </Container>
        <Container className="feed">
        <h1>Hello Wobbegang! Unite!</h1>
  
        </Container>
      </div>
    );
  };

  export default SearchAlbum;
