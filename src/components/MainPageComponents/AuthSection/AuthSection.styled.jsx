import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ContainerHero = styled.header`
  height: 770px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e85f3;
`;

export const ContentWrapper = styled.div`
  nav {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      margin-top: 40px;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }

    @media screen and (max-height: 425px) {
      margin-top: 32px;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }

    ${({ height }) => css`
      row-gap: calc(${height}px * 25.61 / 100);
    `}
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Coolvetica';
    font-weight: 400;
    font-size: 44px;
    line-height: 1.09;
    text-align: center;
    color: #fff;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
      font-size: 120px;
      line-height: 1.25;
    }

    @media screen and (max-height: 425px) {
      font-size: 100px;
    }

    @media screen and (max-width: 767px) {
      font-size: 44px;
    }

    @media screen and (max-height: 375px) {
      font-size: 44px;
    }

    span {
      font-style: italic;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 142px;
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const LinkLogin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8.25px;
  width: 131px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  text-decoration: none;
  color: #3e85f3;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  opacity: 1;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const LinkRegister = styled(Link)`
  font-family: Inter;
  font-size: 12px;
  line-height: 1.16;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const ScrollDownWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  height: 40px;
  width: 40px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    bottom: 20px;
    right: 10px;
    height: 70px;
    width: 70px;
  }
`;
