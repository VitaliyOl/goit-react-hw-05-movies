import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.nav`
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;
