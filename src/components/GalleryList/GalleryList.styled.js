import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.main`
  padding: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
export const Link = styled(NavLink)`
  width: 200px;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding: 5px;
`;
