import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Item, List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=4e109f7b4b6a0194008b1b4e8c435cc1`
      );

      setCast(data.cast.splice(0, 10));
    }

    fetch();
  }, [moviesId]);

  return (
    <div style={{ paddingTop: '20px' }}>
      <List>
        {cast.map(el => {
          return (
            <Item key={el.id}>
              <img
                src={
                  !el.profile_path
                    ? 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                    : `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                }
                alt={el.name}
              ></img>
              <p
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                {el.name}
              </p>
              <em>{el.character}</em>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default Cast;
