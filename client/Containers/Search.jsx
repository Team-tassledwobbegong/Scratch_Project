import React from 'react';
import '../app.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'



const SearchAlbum = ({ accessToken }) => {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);
    const [albumArt, setAlbumArt] = useState('')

    
    async function search(){
        console.log("Search is:" + searchInput)
        console.log(accessToken)

        const searchParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`

            }
        }

        const artistID = await axios.get('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParams)
            .then(data => {
                console.log('data:', data)
                return data.data.artists.items[0].id})
            console.log('Artist ID is:' + artistID);

        const foundAlbums = await axios.get('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=30', searchParams)
            .then(data => {
                const albumz = data.data.items
                // setAlbums(albumz);
                console.log('albums are:', data)
                console.log('what should be albums data:', data.data.items)
                console.log('foundAlbums:', albums)
                return albumz
            })
            setAlbums(foundAlbums)
    }
    // const searchArtists = async e => {
    //   e.preventDefault();
    //   const { data } = await axios.get('https://api.spotify.com/v1/search', {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //     params: {
    //       q: searchInput,
    //       type: 'artist',
    //     },
    //   });
    //   console.log(data)
    // };

    return (
        <div className="App">
        <Container className="searchbar">
          <InputGroup className="mb-3" size="lg"> 
            <FormControl
              placeholder="Search for Album"
              type="input"
              onKeyPress={event => {
                if (event.key == "Enter"){
                  search(event)
                }
              }}
              onChange= {event => setSearchInput(event.target.value)}
              />
              <Button className="searchButton" onClick={search}>
                Search
              </Button>
          </InputGroup>
        </Container>
        <Container>
            <Row className="mx-2 row row-cols-4">
                {albums.map( (album, i) => {
                    setAlbumArt(album.images[0].url)
                    return (
                        <Card>
                            <Card.Img src={ albumArt } />
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
        <h1>Hello Wobbejammers</h1>
  
        </Container>
      </div>
    );
  };

  export default SearchAlbum;
