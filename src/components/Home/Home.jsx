import { useEffect, useState } from 'react';
import * as API from '../../services/api';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const findTrendingMovies = async () => {
      try {
        setIsLoading(true);
        API.getTrendingMovies().then(res => {
          setTrendingMovies(res);
          // console.log(trendingMovies);
          // console.log(res.total_pages);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findTrendingMovies();
    console.log(trendingMovies);
  }, []);
  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TrendingMoviesList trendingmovies={trendingMovies} />
      )}
    </main>
  );
};
export default Home;
