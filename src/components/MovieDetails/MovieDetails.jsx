import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import MovieMarkup from 'components/MovieMarkup/MovieMarkup';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailed, setmovieDetailed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findMovieDetailed = async () => {
      try {
        setIsLoading(true);
        const res = await API.getMovieById(movieId);
        setmovieDetailed(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovieDetailed();
  }, [movieId]);

  return (
    <main>
      <Link to="/">
        <button
          type="button"
          style={{
            marginTop: '0.5rem',
            backgroundColor: 'transparent',
            border: '0.02rem solid rgba(0, 0, 0, 0.3)',
            borderRadius: '0.2rem',
            fontSize: '0.7rem',
          }}
        >
          <BsArrowLeftShort
            style={{
              verticalAlign: 'middle',
              marginRight: '0.2rem',
            }}
          />
          Go back
        </button>
      </Link>
      {isLoading ? <p>Loading...</p> : <MovieMarkup movie={movieDetailed} />}
    </main>
  );
};
export default MovieDetails;