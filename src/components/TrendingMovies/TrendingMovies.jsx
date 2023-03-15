import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledList } from './TrendingMovies.styled';

const TrendigMovies = ({ movies }) => {
  return (
    <StyledList>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </StyledList>
  );
};

TrendigMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrendigMovies;
