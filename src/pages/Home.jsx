import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovies } from 'services/api';

import TrendingMovies from 'components/TrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error.message));
    console.log('http');
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <TrendingMovies movies={movies} />}
    </>
  );
};

export default Home;
