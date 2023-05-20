import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          params: {
            api_key: '4e109f7b4b6a0194008b1b4e8c435cc1',
            language: 'en-US',
          },
        }
      );

      setMovies(data.results);
    }

    fetch();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie, id) => {
          return (
            <li key={id}>
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
