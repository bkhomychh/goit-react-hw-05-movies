import PropTypes from 'prop-types';
import { StyledSearchForm } from './SearchForm.styled';

const SearchForm = ({ updateQueryString }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const searchQuery = evt.target.elements.title.value.trim();
    updateQueryString(searchQuery);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <label>
        <p>Movie title:</p>
        <input type="text" name="title" />
      </label>
      <button type="submit">Search</button>
    </StyledSearchForm>
  );
};

SearchForm.propTypes = {
  updateQueryString: PropTypes.func.isRequired,
};

export default SearchForm;
