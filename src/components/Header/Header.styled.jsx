import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/icon-menu-burger.svg';
import { variables } from 'Styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0, auto;
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  /* @media (min-width: 1280px) {
    display: none;
  } */
`;
export const BurgerIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  stroke: #343434;
  transition: 250ms ease-in-out;
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Title = styled.h2`
  @media (max-width: 1279px) {
    display: none;
  }

  margin-bottom: 8px;
  font-family: 'InterBold';
  font-size: 32px;
  line-height: calc((32 / 32) * 100%);
  color: ${variables.colors_mode.title};
`;

export const ButtonFeedback = styled.button`
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 16) * 100%);
  text-align: center;
  text-transform: none;
  color: #ffffff;
  background-color: #3e85f3;
  width: 97px;
  height: 32px;
  border: none;
  border-radius: 12px;
  padding: 8px, 20px, 8px, 20px;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;
