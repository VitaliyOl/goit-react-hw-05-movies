import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';
import { Suspense } from 'react';

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
