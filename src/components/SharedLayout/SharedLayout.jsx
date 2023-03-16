import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledHeader,
  StyledLink,
  StyledList,
  StyledMain,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>

      <StyledMain>
        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </StyledMain>

      <footer></footer>
    </>
  );
};

export default SharedLayout;
