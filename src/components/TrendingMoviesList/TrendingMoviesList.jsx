import { Link } from 'react-router-dom';

const TrendingMoviesList = ({ trendingmovies }) => {
  if (trendingmovies.length === 0) {
    return;
  }
  const movies = trendingmovies.results ? trendingmovies.results : [];

  return (
    <section>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {/* <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster"
                width="100rem"
              /> */}
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingMoviesList;
