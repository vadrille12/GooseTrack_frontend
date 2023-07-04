import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from 'images/close.svg';
import { ReactComponent as LogoIcon } from 'images/logo.svg';

export const Overlay = styled.div`
  @media (max-width: 1439px) {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const Aside = styled.aside`
  min-height: 100vh;
  width: 290px;
  background-color: ${props => props.theme.bg_1};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 250ms ease-in-out;
  border-right: 1px solid ${props => props.theme.main_border};

  @media (max-width: 1440px) {
    position: absolute;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px;

    transition: 250ms ease-in-out;
    @media (min-width: 768px) {
      width: 290px;
    }
    @media (min-width: 1280px) {
      z-index: 1;
      position: relative;
    }
  }
`;

export const Logo = styled(LogoIcon)`
  height: 35px;
  width: 36px;
  margin-right: 6px;

  @media (min-width: 768px) {
    height: 58px;
    width: 60px;
  }

  @media (min-width: 1280px) {
    height: 68px;
    width: 71px;
    margin-right: 10px;
  }
`;

export const LogoText = styled.p`
  font-family: 'CoolveticaRegular';
  font-size: 16px;
  line-height: calc((22 / 16) * 100%);
  margin-bottom: 0;

  color: #3e85f3;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: calc((24 / 18) * 100%);
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: calc((24 / 24) * 100%);
  }
`;

export const PanelTitle = styled.p`
  font-family: 'InterSemiBold';
  font-size: 12px;
  line-height: calc((15 / 12) * 100%);
  color: ${props => props.theme.text_2};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc((17 / 14) * 100%);
  }
`;

export const Item = styled.li`
  border-radius: 8px;
  width: 241px;
  height: 50px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  margin-left: auto;
  cursor: pointer;
  padding: 0;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const IconClose = styled(Icon)`
  stroke: ${props => props.theme.text_3};
  box-shadow: none;
  height: 24px;
  width: 24px;
  transition: 250ms ease-in-out;
  @media (min-width: 768px) {
    height: 33px;
    width: 33px;
  }
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  line-height: calc((19 / 16) * 100%);
  font-family: 'InterSemiBold';
  width: 100%;
  height: 100%;
  display: block;
  padding: 16px 20px;
  border-radius: 8px;
  transition: 250ms ease-in-out;
  display: flex;
  align-items: center;
  color: ${props => props.theme.text_1};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.activeLink_bg};
  }

  &:hover span,
  &:focus span {
    color: ${props => props.theme.activeLink_text};
  }

  &:hover svg,
  &:focus svg {
    color: ${props => props.theme.activeLink_text};
  }

  &.active {
    background: ${props => props.theme.activeLink_bg};
    color: ${props => props.theme.activeLink_text};
    transition: 250ms ease-in-out;
  }

  &.active svg {
    stroke: ${props => props.theme.activeLink_text};
    transition: 250ms ease-in-out;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 46px;
  background: #3e85f3;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px;
  border: none;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  line-height: calc((24 / 18) * 100%);
  font-family: 'InterSemiBold';
  transition: 250ms ease-in-out;
  &:hover,
  &:focus {
    background: #2b78ef;
  }

  @media (min-width: 768px) {
    height: 56px;
    width: 141px;
  }
`;

export const ButtonText = styled.span`
  margin-right: 11px;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: calc((24 / 18) * 100%);
  }
`;
