import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { variables } from 'Styles/GlobalStyle';

export const ContainerHero = styled.header`
  height: 770px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.colors.primary};
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
    font-family: 'CoolveticaRegular';
    font-weight: 400;
    font-size: 44px;
    line-height: 1.09;
    text-align: center;
    color: ${variables.colors.white};
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
      margin-right: 5px;
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
  column-gap: 6px;
  width: 121px;
  height: 49px;
  padding: 14px;
  font-family: 'InterSemiBold';
  text-decoration: none;
  color: ${variables.colors.primary};
  background-color: ${variables.colors.white};
  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  opacity: 1;
  cursor: pointer;
  transition: ${variables.transitions.standart};

  &:hover,
  &:focus {
    opacity: 0.8;
    transition: ${variables.transitions.standart};
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.shadow};
  }
`;

export const LinkRegister = styled(Link)`
  font-family: 'InterSemiBold';
  height: 49px;
  padding: 14px;
  text-decoration: underline;
  color: ${variables.colors.white};
  cursor: pointer;
  transition: ${variables.transitions.standart};

  &:hover,
  &:focus {
    opacity: 0.8;
    transition: ${variables.transitions.standart};
  }
`;

export const Nav = styled.nav`
  align-items: center;
  flex-direction: column;
  gap: 100px;
  flex: 1.5 1 0%;
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
