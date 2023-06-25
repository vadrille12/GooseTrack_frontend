import styled from 'styled-components';
// import { variables } from '../../Styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: flex-start;
  max-width: 100%;
  height: 32px;
  margin-bottom: 64px;
`;

export const HeaderBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const BurgerButton = styled.button`
  height: 40px;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
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

export const UserAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Sidebar = styled.div`
  position: fixed;
  z-index: 2;
  width: 225px;
  height: 100%;
  top: 0;
  left: 0;
  overflow: scroll;
  background-color: #fff;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity var(---transition), visibility var(---transition);
`;

export const SidebarOpen = styled.div`
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
`;
