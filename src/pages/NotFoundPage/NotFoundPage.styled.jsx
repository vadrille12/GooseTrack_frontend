import styled from 'styled-components';

import { variables } from 'Styles/GlobalStyle';
import { ReactComponent as Goose404 } from 'images/404-goose.svg';
import { style } from 'styled-system';

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
