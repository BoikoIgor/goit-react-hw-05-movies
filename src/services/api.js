import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c454af6a020661d12a6dad4eda62cbe8';

axios.defaults.baseURL = BASE_URL;
export const getTrendingMovies = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};
