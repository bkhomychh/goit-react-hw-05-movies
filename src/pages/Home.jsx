import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovies } from 'services/api';

import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
