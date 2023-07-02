import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { variables } from 'Styles/GlobalStyle';
import { ReactComponent as Goose404 } from 'images/404-goose.svg';

export const Text = styled.p`
  color: ${variables.colors.primary};
  line-height: 150px;
  font-size: 100px;
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    line-height: 250px;
    font-size: 200px;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Goose = styled(Goose404)`
  width: 266px;
  height: 203px;
  margin: -80px;

  @media screen and (min-width: 768px) {
    width: 369px;
    height: 346px;
    margin: -100px;
  }
`;
export const Info = styled.p`
  width: 281px;
  margin-bottom: 30px;
  color: ${props => props.theme.nfp_message};
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 387px;
  }
`;

export const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
  padding: 10px 40px;

  color: ${variables.colors.white};
  background-color: ${variables.colors.primary};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;

  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${variables.colors.lightBlue};
    color: ${variables.colors.primary};
  }
`;
