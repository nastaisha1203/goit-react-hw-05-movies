import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchCredits(movieId);
        setCast(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <div>LOADING...</div>}
      {error && <p>Something went wrong. Try again.</p>}
      <ul>
        {cast &&
          cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={100}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Cast;
