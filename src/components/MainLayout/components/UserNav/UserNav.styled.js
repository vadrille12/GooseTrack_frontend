import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const StyledLink = styled(NavLink)`
  width: 185px;
  
  font-weight: 600;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;


  @media (min-width: 765px) {
    font-size: 16px;
    padding: 16px 20px;
    width: 225px;
  }

  @media (min-width: 1087px) {
    width: 241px;
  }
`;

export const NavIcon = styled.svg`
  fill: transparent;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (min-width: 765px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;