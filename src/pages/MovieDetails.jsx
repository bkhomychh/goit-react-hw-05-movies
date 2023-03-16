import { useEffect, useState } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';

import { getMovieDetails } from 'services/api';

import MovieInfo from 'components/MovieInfo';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieInfo movie={movie}>
        <Outlet />
      </MovieInfo>
    </>
  );
};

export default MovieDetails;
