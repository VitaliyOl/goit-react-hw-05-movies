import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <h1
        style={{
          marginBottom: '15px',
        }}
      >
        Trending today
      </h1>
      <ul>
        {movies.map((movie, id) => {
          return (
            <li key={id}>
              <Link
                to={`movies/${movie.id}`}
                style={{
                  paddingBottom: '5px',
                  display: 'inline-block',
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
