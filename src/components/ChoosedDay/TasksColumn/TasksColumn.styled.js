import styled from 'styled-components';

export const TaskItem = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  padding: 25px 18px 20px 18px;
  margin-top: 14px;

  min-width: 335px;
  min-height: 155px;
  flex: 1;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 340px;
    min-height: 165px;

    margin-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 344px;
  }
`;

export const TasksColumnStyled = styled.li`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 22px;
  padding-bottom: 20px;

  ::-webkit-scrollbar {
    height: 12px;
    background: #f2f2f2;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #cac8c8;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cac8c8;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 22px;
  }

  @media screen and (min-width: 1280px) {
    gap: 27px;
  }

  ${TaskItem} {
    flex-grow: 1;
  }
`;
