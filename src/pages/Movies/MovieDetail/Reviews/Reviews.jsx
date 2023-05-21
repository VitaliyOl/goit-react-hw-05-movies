import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=4e109f7b4b6a0194008b1b4e8c435cc1`
      );

      setReview(data.results);
    }

    fetch();
  }, [moviesId]);

  return (
    <div style={{ marginTop: '15px' }}>
      {!review ? (
        <h4>We don't have any reviews for this movie</h4>
      ) : (
        <ul>
          {review.map(el => {
            return (
              <li key={el.id}>
                <h4 style={{ marginBottom: '15px' }}>Author: {el.author}</h4>
                <p style={{ marginBottom: '15px' }}>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
