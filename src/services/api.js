import axios from 'axios';
const API_KEY = '8443d03a0ecd905c6120abf16379f6a7';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchTrending = async () => {
  const { data } = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  const result = data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path,
  }));
  return result;
};

export const fetchMoviesId = async id => {
  const { data } = await axios.get(
    `/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchSearch = async query => {
  const { data } = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const result = data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path,
  }));
  return result;
};

export const fetchCredits = async id => {
  const { data } = await axios.get(
    `/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const result = data.cast.map(({ id, name, profile_path, character }) => ({
    id,
    name,
    profile_path,
    character,
  }));
  return result;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(
    `/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const result = data.results.map(({ id, content, author }) => ({
    id,
    content,
    author,
  }));
  return result;
};
