import styled from 'styled-components';
// import { variables } from '../../../Styles/GlobalStyle';

export const ColumnTasksListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  padding: 0 6px 0 18px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    max-height: 372px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    margin-left: -6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scroll_bar};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scroll_bar};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cac8c8;
  }
`;
