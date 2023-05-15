import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as API from '../../services/api';
import MovieQuery from 'components/MovieQuery/MovieQuery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const findMovie = async () => {
      try {
        // setIsLoading(true);
        const { results } = await API.getMovieByName(query);
        if (results.length === 0) alert('Movie not found');
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    findMovie();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert('No value - no movie');
    }
    setSearchParams({ query: e.target[0].value });
  };
  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <main>
      <MovieQuery onSubmit={onSubmit} onChange={onChange} value={value} />
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
