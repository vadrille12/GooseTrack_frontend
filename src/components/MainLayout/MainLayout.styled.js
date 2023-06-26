import styled from 'styled-components';
// import { variables } from '../../Styles/GlobalStyle';

export const Container = styled.div`
  /* display: flex; */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  height: 32px;
  margin-bottom: 64px;
`;

export const HeaderBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonFeedback = styled.button`
  margin-right: 0;
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
  visibility: hidden;
  pointer-events: none;
  transition: opacity var(---transition), visibility var(---transition);
`;

export const SidebarOpen = styled.div`
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
`;
