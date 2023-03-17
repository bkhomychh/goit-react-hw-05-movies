import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const StyledCast = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Item = styled.li`
  padding: 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  img {
    margin-bottom: 10px;
    max-width: 150px;
  }

  h2 {
    margin-bottom: 5px;
  }

  span {
    font-weight: 500;
  }
`;
