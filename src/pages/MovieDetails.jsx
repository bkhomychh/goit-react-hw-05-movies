import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

import { NavLink, Outlet } from 'react-router-dom';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const {
    title,
    overview,
    genres = [],
    poster_path: imgUrl,
    vote_average: score,
  } = movie;
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img src={IMAGE_BASE_URL + imgUrl} alt={title} />
        <div>
          <h1>{title}</h1>
          <p>User score: {score}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
