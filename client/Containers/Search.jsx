import React from 'react';
import '../app.css';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react';

const spotifyApi = new SpotifyWebApi({
  clientId: '638fa075b2e7492490a8ab9eb0a6750e',
  clientSecret: 'c596188e4c994b29a8a30d195108153d',
});

const SearchAlbum = ({ accessToken }) => {
  const [searchInput, setSearchInput] = useState('');
  const [albums, setAlbums] = useState([]);
  const [albumArt, setAlbumArt] = useState('');
  const [albumCards, setAlbumCards] = useState([]);

  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, []);
  useEffect(() => {
    const albumCards = albums.map(element => {
      return (
        <Card>
          <Card.Img src={element.images[0].url} />
        </Card>
      );
    });
    setAlbumCards(albumCards);
    console.log(albums);
  }, [albums]);

  //   async function search() {
  //     console.log('Search is:' + searchInput);
  //     console.log(accessToken);

  //     const searchParams = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     };

  //     const artistID = await axios
  //       .get(
  //         'https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',
  //         searchParams,
  //       )
  //       .then(data => {
  //         console.log('data:', data);
  //         return data.data.artists.items[0].id;
  //       });
  //     console.log('Artist ID is:' + artistID);

<<<<<<< HEAD
        const foundAlbums = await axios.get('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=30', searchParams)
            .then(data => {
                const albumz = data.data.items
                // setAlbums(albumz);
                console.log('albums are:', data)
                console.log('what should be albums data:', data.data.items)
                console.log('foundAlbums:', albums)
                return albumz
            })
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
=======
  //     const foundAlbums = await axios
  //       .get(
  //         'https://api.spotify.com/v1/artists/' +
  //           artistID +
  //           '/albums' +
  //           '?include_groups=album&market=US&limit=30',
  //         searchParams,
  //       )
  //       .then(data => {
  //         const albumz = data.data.items;
  //         // setAlbums(albumz);
  //         console.log('albums are:', data);
  //         console.log('what should be albums data:', data.data.items);
  //         console.log('foundAlbums:', albums);
  //         return albumz;
  //       });
  //     setAlbums(foundAlbums);
  //   }
  const searchArtists = async e => {
    e.preventDefault();
    spotifyApi
      .searchArtists(searchInput)
      .then(data => {
        return data.body.artists.items[0].id;
      })
      .then(artistID => {
        return spotifyApi.getArtistAlbums(artistID);
      })
      .then(data => {
        setAlbums(data.body.items);
      });
>>>>>>> dev

    // const { data } = await axios.get('https://api.spotify.com/v1/search', {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   params: {
    //     q: searchInput,
    //     type: 'artist',
    //   },
    // });
  };

  return (
    <div className='App'>
      <Container className='searchbar'>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
            placeholder='Search for Album'
            type='input'
            onKeyPress={e => {
              if (e.key == 'Enter') {
                searchArtists(e);
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button className='searchButton' onClick={e => searchArtists(e)}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        {/* <Row className='mx-2 row row-cols-4'>
          {albums.map((album, i) => {
            setAlbumArt(album.images[0].url);
            return (
              <Card>
                <Card.Img src={albumArt} />
                <Card.Body>
                  <Card.title>{album.name}</Card.title>
                  <Button onClick={() => console.log('card button')}>
                    Review This Album
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row> */}
        {albumCards}
      </Container>
      <Container className='profile'></Container>
      <Container className='feed'>
        <h1>Hello Wobbejammers</h1>
      </Container>
    </div>
  );
};

export default SearchAlbum;
