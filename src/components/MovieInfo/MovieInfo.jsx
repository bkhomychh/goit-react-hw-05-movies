import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { IMAGE_BASE_URL } from 'constants/api';
import {
  AdditionalInfo,
  MainInfo,
  StyledImg,
  Wrapper,
} from './MovieInfo.styled';

const MovieInfo = ({ movie, children }) => {
  const { title, overview, genres = [], poster_path, vote_average } = movie;
  const location = useLocation();

  const imgUrl = IMAGE_BASE_URL + poster_path;
  const score = Math.floor(vote_average * 10);

  return (
    <>
      <MainInfo>
        <StyledImg src={imgUrl} alt={title} />
        <Wrapper>
          <h1>{title}</h1>
          <p>User score: {score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </Wrapper>
      </MainInfo>
      <AdditionalInfo>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: location }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: location }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<p>Loading ...</p>}>{children}</Suspense>
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
