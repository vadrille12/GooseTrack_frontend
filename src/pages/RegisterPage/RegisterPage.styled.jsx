import styled from 'styled-components';

import goose1x from 'images/signUpPage/desktop_signUp.png';
import goose2x from 'images/signUpPage/desktop_signUp@2x.png';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #dcebf7;
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
  width: 400px;
  height: 416px;
  left: 49px;
  bottom: 0;

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

export const Link = styled.a`
  display: block;
  margin-top: 8px;

  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;

  color: #3e85f3;
  text-decoration: underline;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
