import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movies from './Movies/Movies';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
