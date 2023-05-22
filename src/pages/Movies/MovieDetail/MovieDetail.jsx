import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';
import { Suspense } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, Wrapper, Text } from './MovieDetail.styled';
import { List } from 'components/Layout/Layout.styled';

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      async function fetch() {
        const BASE_URL = 'https://api.themoviedb.org/3/movie/';
        const KEY = '4e109f7b4b6a0194008b1b4e8c435cc1';
        const { data } = await axios.get(`${BASE_URL}${moviesId}?api_key=${KEY}`);
  
        setMovieInfo(data);
      }
  
      fetch();
    } catch (error) {
      console.log(error);
    }
   
  }, [moviesId]);

  return (
    <>
      <Link
        to={backLinkLocationRef.current}
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <FaArrowLeft style={{ marginRight: '5px' }} />
        Go back
      </Link>
      <Container>
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : 'https://static.npmjs.com/2f55441126e3c8d643c4c2d4e852cb4c.png'
          }
          alt={movieInfo.title || movieInfo.original_title}
          width="300px"
        ></img>

        <Wrapper>
          <h2>
            {movieInfo.title}{' '}
            {movieInfo.release_date && parseInt(movieInfo.release_date)}{' '}
          </h2>
          <Text>
            User score: {Math.round(movieInfo.vote_average * 10) + '%'}
          </Text>
          <h4>Overview</h4>
          <Text>{movieInfo.overview}</Text>
          <h4>Genres</h4>
          <Text>
            {movieInfo.genres
              ? movieInfo.genres.map(genre => genre.name).join(' ')
              : 'No genres'}
          </Text>
        </Wrapper>
      </Container>
      <h2>Additional information</h2>
      <List>
        <li>
          <Link
            to="cast"
            style={{ paddingBottom: '15px', display: 'inline-block' }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetail;
