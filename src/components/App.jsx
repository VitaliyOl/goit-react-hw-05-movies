import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import MovieDetail from 'pages/Movies/MovieDetail/MovieDetail';
import Cast from 'pages/Movies/MovieDetail/Cast/Cast';
import Reviews from 'pages/Movies/MovieDetail/Reviews/Reviews';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:moviesId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
