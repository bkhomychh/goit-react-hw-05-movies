import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;

  color: rgb(50, 50, 50);
  font-weight: 500;
  font-size: 20px;

  list-style: disc;

  a:hover {
    color: crimson;
  }
`;
