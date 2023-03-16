import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 30px 50px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.1)
  );
`;

export const StyledMain = styled.main`
  padding: 30px 50px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 50px;

  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 500;
  color: black;
  text-decoration: none;

  transition: all 250ms ease-in-out;

  &:hover,
  &.active {
    color: crimson;
  }
`;
