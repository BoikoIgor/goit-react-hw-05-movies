import { Link } from 'react-router-dom';
import {
  ImgPoster,
  TitleTrending,
  TrendingList,
} from './TrendingMoviesList.styled';

const TrendingMoviesList = ({ trendingmovies }) => {
  if (trendingmovies.length === 0) {
    return;
  }
  const movies = trendingmovies.results ? trendingmovies.results : [];
  return (
    <section>
      <h1>Trending today</h1>
      <TrendingList>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <ImgPoster
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster"
              />
              <TitleTrending>{movie.title}</TitleTrending>
            </Link>
          </li>
        ))}
      </TrendingList>
    </section>
  );
};

export default TrendingMoviesList;
