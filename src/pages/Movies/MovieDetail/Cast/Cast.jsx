import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=4e109f7b4b6a0194008b1b4e8c435cc1`
      );

      setCast(data.cast.splice(0, 8));
    }

    fetch();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {cast.map(el => {
          return <li key={el.id}>{el.character}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cast;
