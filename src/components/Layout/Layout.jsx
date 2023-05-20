import { Outlet } from 'react-router-dom';
import { NavHeader, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <NavHeader>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavHeader>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
