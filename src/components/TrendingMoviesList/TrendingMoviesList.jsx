import { Link } from 'react-router-dom';
import {
  ImgPoster,
  TitleTrending,
  TrendingList,
} from './TrendingMoviesList.styled';
import PropTypes from 'prop-types';

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

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};

export default TrendingMoviesList;
