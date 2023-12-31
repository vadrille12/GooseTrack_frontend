import styled from 'styled-components';

export const ColumnTasksListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  min-height: 5px;

  padding: 0 6px 0 18px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scroll_bar_track};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scroll_bar};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cac8c8;
  }

  @media screen and (min-width: 768px) {
    gap: 18px;
    max-height: 372px;

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;
