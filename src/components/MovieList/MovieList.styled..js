import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 20px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  color: rgb(50, 50, 50);
  font-weight: 500;
  font-size: 20px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  list-style: disc;

  a:hover {
    color: crimson;
  }
`;
