// import styled, { css } from 'styled-components';
// // import { variables } from '../../Styles/GlobalStyle';

// export const Container = styled.div`
//   /* display: flex; */
// `;

// export const Header = styled.header`
//   display: flex;
//   justify-content: space-between;

//   align-items: flex-start;
//   max-width: 100%;
//   height: 32px;
//   margin-bottom: 64px;
// `;

// export const HeaderBox = styled.div`
//   display: flex;
//   gap: 16px;
// `;

// export const BurgerButton = styled.button`
//   height: 40px;
//   padding: 0;
//   margin: 0;
//   border: 0;
//   background-color: transparent;
//   cursor: pointer;
// `;

// export const ButtonFeedback = styled.button`
//   font-family: Inter;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: calc((18 / 16) * 100%);
//   text-align: center;
//   text-transform: none;
//   color: #ffffff;
//   background-color: #3e85f3;
//   width: 97px;
//   height: 32px;
//   border: none;
//   border-radius: 12px;
//   padding: 8px, 20px, 8px, 20px;

//   &:hover,
//   &:focus {
//     background-color: #2b78ef;
//   }
// `;

// export const ContentWrapper = styled.div`
//   nav {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     @media screen and (min-width: 768px) {
//       flex-direction: row-reverse;
//       justify-content: center;
//       align-items: center;
//       column-gap: 24px;
//     }

//     @media screen and (max-height: 425px) {
//       flex-direction: row-reverse;
//       justify-content: center;
//       align-items: center;
//       column-gap: 24px;
//     }

//     ${({ height }) => css`
//       row-gap: calc(${height}px * 25.61 / 100);
//     `}
//   }`

// export const ImageWrapper = styled.div`
//   width: 32px;
//   margin-left: auto;
//   margin-right: auto;

//   img {
//     display: block;
//     max-width: 100%;
//     height: auto;
//   }

//   @media screen and (min-width: 768px) {
//     width: 150px;
//   }
// `;

// export const UserAccount = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
// `;

// export const Sidebar = styled.div`
//   position: fixed;
//   z-index: 2;
//   width: 225px;
//   height: 100%;
//   top: 0;
//   left: 0;
//   overflow: scroll;
//   background-color: #fff;
//   opacity: 1;
//   visibility: visible;
//   pointer-events: auto;
// `;

// export const ContainerSidebar = styled.div`
// padding: 32px 24px;
// `;

// // export const HeaderSidebar = styled.h3`
// // font-family: Coolvetica
// // ;
// // font-size: 24px;
// // font-style: italic;
// // font-weight: 400;
// // line-height: 24px;
// // letter-spacing: 0em;
// // text-align: left;
// // `;

// // export const SidebarNavBox = styled.div`
// // display:flex;
// // flex:colume;
// // `;

// // export const LabelSidebar = styled.div`
// //   opacity: 1;
// //   visibility: visible;
// //   pointer-events: auto;
// // `;

// // export const ListSidebar = styled.div`
// //   opacity: 1;
// //   visibility: visible;
// //   pointer-events: auto;
// // `;

// // export const ItemSidebar = styled.div`
// //   opacity: 1;
// //   visibility: visible;
// //   pointer-events: auto;
// // `;

// // export const ButtonLogoutSidebar = styled.div`
// //   opacity: 1;
// //   visibility: visible;
// //   pointer-events: auto;
// // `;

// // export const IconSidebar = styled.div`
// //   opacity: 1;
// //   visibility: visible;
// //   pointer-events: auto;
// // `;

// export const LogoTitle = styled.h2`

// `;

// export const SidebarWrapper = styled.div`
// position: fixed;
// z-index: 2;
// width: 225px;
// height: 100%;
// top: 0;
// left: 0;
// overflow: scroll;
// background-color: #fff;
// opacity: 1;
// visibility: visible;
// pointer-events: auto;
// `;

// export const SidebarHeader = styled.div`

// `;

// export const GooseImg = styled.img`

// `;

// export const CloseIcon = styled.svg`
// `;

// export const SidebarSubTitle = styled.h3`

// `;

// export const SidebarOpen = styled.div`
//   opacity: 1;
//   visibility: visible;
//   pointer-events: auto;
// `;

import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100vh;
  padding: 24px 20px 20px;

  transition: 250ms ease-in-out;
  background-color: ${props => props.theme.main_bg}; //

  @media screen and (min-width: 768px) {
    padding: 40px 32px 32px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1680px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 1150px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex-grow: 1;
  padding-top: 32px;
`;
