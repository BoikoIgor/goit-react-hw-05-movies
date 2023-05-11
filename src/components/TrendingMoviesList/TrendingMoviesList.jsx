import { Link } from 'react-router-dom';

const TrendingMoviesList = ({ trendingmovies }) => {
  //   console.log(trendingmovies);
  if (trendingmovies.length === 0) {
    return;
  }
  const movies = trendingmovies.results ? trendingmovies.results : [];
  console.log(movies);
  // if (movies) {
  //   return;
  // }

  return (
    <section>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {/* <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="poster"
              width="100rem"
            ></img> */}
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingMoviesList;
