import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchReviews(movieId);
        setReviews(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [movieId]);
  return (
    <div>
      {isLoading && <div>LOADING...</div>}
      {error && <p>Something went wrong. Try again.</p>}
      <ul>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Reviews;
