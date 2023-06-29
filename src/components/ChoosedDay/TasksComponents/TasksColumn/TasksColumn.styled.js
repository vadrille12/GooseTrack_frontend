import styled from 'styled-components';
import { variables } from '../../../../Styles/GlobalStyle';

export const TaskItem = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  padding: 0 7px 0 0;
  margin-top: 14px;

  min-width: 335px;
  min-height: 155px;
  flex: 1;

  background: ${props => props.theme.page_bg};
  border: 1px solid ${props => props.theme.tabl_border};
  border-radius: 8px;

  position: relative;

  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    box-shadow: ${variables.shadow.shadow};
  }

  @media screen and (min-width: 768px) {
    min-width: 340px;
    min-height: 165px;

    margin-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 344px;
  }
`;

export const TasksColumnStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 22px;
  padding-bottom: 20px;
  width: 335px;

  ::-webkit-scrollbar {
    height: 12px;
    background: ${props => props.theme.scroll_bar_track};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scroll_bar};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cac8c8;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scroll_bar_track};
    border-radius: 12px;
  }

  @media screen and (max-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    gap: 22px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
    margin-left: 0;
    width: 1086px;
  }

  ${TaskItem} {
    flex-grow: 1;
  }
`;
