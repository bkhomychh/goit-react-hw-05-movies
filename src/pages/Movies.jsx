import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesBySearchQuery } from 'services/api';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    getMoviesBySearchQuery(searchQuery)
      .then(res => setMovies(res))
      .catch(err => console.log(err.message));
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm updateQueryString={updateQueryString} />
      {movies &&
        (movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <b>There is no such movie</b>
        ))}
    </>
  );
};

export default Movies;
