import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  
  padding: 5px 15px;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  border: 2px solid currentColor;
  border-radius: 10px;
  background-color: transparent;

  &:hover {
    color: crimson;
  }
`;
