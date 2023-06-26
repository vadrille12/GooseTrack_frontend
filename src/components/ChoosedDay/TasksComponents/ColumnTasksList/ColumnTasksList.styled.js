import styled from 'styled-components';
// import { variables } from '../../../Styles/GlobalStyle';

export const ColumnTasksListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;
