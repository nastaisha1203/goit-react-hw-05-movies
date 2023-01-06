import GalleryList from 'components/GalleryList/GalleryList';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: red;
`;

const Home = () => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchTrending();
        setGallery(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <div>LOADING...</div>}
      {error && <Text>Something went wrong. Try again.</Text>}
      {gallery.length > 0 && <GalleryList gallery={gallery} />}
    </>
  );
};
export default Home;
