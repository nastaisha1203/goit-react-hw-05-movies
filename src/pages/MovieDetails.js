import Card from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesId } from 'services/api';
import styled from 'styled-components';

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: red;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchMoviesId(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <div>LOADING...</div>}
      {error && <Text>Something went wrong. Try again.</Text>}
      {movie && <Card movie={movie} />}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
