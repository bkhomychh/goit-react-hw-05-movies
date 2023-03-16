import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { StyledList } from './MovieList.styled.';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 && (
        <StyledList>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
