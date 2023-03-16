import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';
import { Review, StyledReviews, Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => setReviews(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <Wrapper>
      {reviews.length < 1 ? (
        <p>We don't have any reviews for this movie :(</p>
      ) : (
        <StyledReviews>
          {reviews.map(({ id, author, content }) => (
            <Review key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </Review>
          ))}
        </StyledReviews>
      )}
    </Wrapper>
  );
};

export default Reviews;
