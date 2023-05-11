import { Link } from 'react-router-dom';

const TrendingMoviesList = ({ trendingmovies }) => {
  console.log(trendingmovies.results);
  const movies = trendingmovies.results ? trendingmovies.results : [];
  return (
    <section>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingMoviesList;
