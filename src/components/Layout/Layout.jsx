import { Outlet } from 'react-router-dom';
import { NavHeader, StyledLink, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <NavHeader>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavHeader>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
