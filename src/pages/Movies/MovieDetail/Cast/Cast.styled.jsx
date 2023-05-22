import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  margin-top: auto;
  flex-basis: calc((100% - 60px) / 5);
`;
