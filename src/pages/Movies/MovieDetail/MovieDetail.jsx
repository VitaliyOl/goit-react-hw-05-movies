import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetch() {
      const BASE_URL = 'https://api.themoviedb.org/3/movie/';
      const KEY = '4e109f7b4b6a0194008b1b4e8c435cc1';
      const { data } = await axios.get(`${BASE_URL}${moviesId}?api_key=${KEY}`);

      setMovieInfo(data);
    }

    fetch();
  }, [moviesId]);

  return (
    <div>
      <h1>{movieInfo.original_title}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetail;
