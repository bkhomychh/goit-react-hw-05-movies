import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services/api';
import { IMAGE_BASE_URL } from 'constants/api';
import { Item, StyledCast, Wrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err));
  }, [movieId]);

  if (!cast) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      {cast.length > 0 ? (
        <StyledCast>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <img src={IMAGE_BASE_URL + profile_path} alt={name} />
              <h2>{name}</h2>
              <p>
                <span>Character:</span> {character}
              </p>
            </Item>
          ))}
        </StyledCast>
      ) : (
        <b>We don't have any cast for this movie :(</b>
      )}
    </Wrapper>
  );
};

export default Cast;
