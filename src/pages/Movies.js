import Searchbar from 'components/Searchbar/Searchbar';
import GalleryList from 'components/GalleryList/GalleryList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchSearch(query);
        if (result.length === 0) {
          return toast.error('Search result not successful.');
        }
        setSearchMovie(result);
      } catch {
        toast.error('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [query]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  console.log(searchMovie);
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <div>LOADING...</div>}
      {error && <p>Search result not successful.</p>}
      <ToastContainer position="top-left" />
      {searchMovie.length > 0 && <GalleryList gallery={searchMovie} />}
    </>
  );
};
export default Movies;
