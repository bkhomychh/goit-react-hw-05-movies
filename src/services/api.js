import axios from 'axios';

import { BASE_URL, API_KEY, RESOURCE } from 'constants/api';

axios.defaults.baseURL = BASE_URL;
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

  return axios.get(RESOURCE.search, options).then(res => res.data.results);
};

export const getMovieDetails = id => {
  return axios.get(RESOURCE.movieDetails + id).then(res => res.data);
};

export const getMovieCredits = id => {
  return axios
    .get(RESOURCE.movieDetails + id + '/credits')
    .then(res => res.data.cast);
};

export const getMovieReviews = id => {
  return axios
    .get(RESOURCE.movieDetails + id + '/reviews')
    .then(res => res.data.results);
};
