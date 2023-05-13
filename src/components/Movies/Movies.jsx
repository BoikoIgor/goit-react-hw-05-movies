import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as API from '../../services/api';
import MovieQuery from 'components/MovieQuery/MovieQuery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = '';

  useEffect(() => {
    const query = searchParams.get('query');
    const findMovie = async () => {
      try {
        if (!query) {
          setMovies([]);
          return;
        }
        // setIsLoading(true);
        const { results } = await API.getMovieByName(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    findMovie();
  }, [searchParams]);
  console.log(movies);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    e.target[0].value = '';
  };

  return (
    <main>
      <h3>Find your movie:</h3>
      <MovieQuery onSubmit={onSubmit} />
      {movies.length > 0 || query ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
};
export default Movies;
