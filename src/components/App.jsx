import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';

import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { Suspense } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetail = lazy(() =>
  import('../pages/Movies/MovieDetail/MovieDetail')
);
const Cast = lazy(() => import('../pages/Movies/MovieDetail/Cast/Cast'));
const Reviews = lazy(() =>
  import('../pages/Movies/MovieDetail/Reviews/Reviews')
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};
