import styled from 'styled-components';
import { variables } from '../../Styles/GlobalStyle';
import goose1x from 'images/loginPage/desktop_login.png';
import goose2x from 'images/loginPage/desktop_login@2x.png';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${variables.colors.bgBlue};
`;

export const FormBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 335px;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    margin-bottom: 24px;
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  width: 368px;
  height: 521px;
  right: 60px;
  bottom: 19px;

  background-image: url(${goose1x});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${goose2x});
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
