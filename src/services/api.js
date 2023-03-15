import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9e68854d69dbd1100bcb425bc2f51530';
const RESOURCE = {
  trending: '/trending/movie/week',
  search: '/search/movie',
  movieDetails: '/movie/',
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = () => {
  return axios.get(RESOURCE.trending).then(res => res.data.results);
};

export const getMoviesBySearchQuery = searchQuery => {
  const options = {
    params: {
      query: searchQuery,
    },
  };

  return axios.get(RESOURCE.search, options).then(res => res.results);
};

export const getMovieDetails = id => {
  return axios.get(RESOURCE.movieDetails + id).then(res => res.data);
};

export const getMovieCredits = id => {
  return axios.get(RESOURCE.movieCredits + id + '/credits');
};

export const getMovieReviews = id => {
  return axios.get(RESOURCE.movieDetails + id + '/reviews');
};
