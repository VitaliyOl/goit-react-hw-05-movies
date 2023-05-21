import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect } from 'react';

import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Item } from './Movies.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetch() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e109f7b4b6a0194008b1b4e8c435cc1&query=${query}`
      );

      setSearchMovies(data.results);
    }

    fetch();
  }, [query]);

  const handleChange = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchBox onSubmit={handleChange} />
      <ul>
        {searchMovies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
