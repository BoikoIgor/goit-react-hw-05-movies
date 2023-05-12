import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as API from '../../services/api';
import MovieQuery from 'components/MovieQuery/MovieQuery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  // useEffect(() => {
  //   const findMovie = async () => {
  //     try {
  //       // if (!query) {
  //       //   setMovie([]);
  //       //   return;
  //       // }
  //       // setIsLoading(true);
  //       const { results } = await API.getMovieByName(movies);
  //       // if (results.length === 0) {
  //       //   alert('No movie to show? try something else ');
  //       // }
  //       setMovies(results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   };
  //   findMovie();
  // }, []);
  // console.log(movie);

  const findMovie = async query => {
    try {
      const { results } = await API.getMovieByName(query);
      setMovies(results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    findMovie(query);
    e.target[0].value = '';
  };
  const onChange = e => {
    setSearchParams({ query: e.target.value });
  };
  return (
    <main>
      <h3>Find your movie:</h3>
      <MovieQuery movie={query} onChange={onChange} onSubmit={onSubmit} />
      {movies && query !== null ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : query !== null ? (
        <p>Nothing to show you ...</p>
      ) : null}
    </main>
  );
};
export default Movies;
