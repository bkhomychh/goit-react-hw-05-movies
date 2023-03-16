import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const StyledReviews = styled.ul`
  list-style: disc;
`;

export const Review = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  p:first-child {
    margin-bottom: 10px;

    font-size: 18px;
    font-weight: 500;
  }
`;
