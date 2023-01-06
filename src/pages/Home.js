import GalleryList from 'components/GalleryList/GalleryList';
import { Text } from 'components/Layout/Layout.styled';
import { Title } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

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
      {isLoading && <Loader />}
      {error && <Text>Something went wrong. Try again.</Text>}
      {gallery.length > 0 && <GalleryList gallery={gallery} />}
    </>
  );
};
export default Home;
