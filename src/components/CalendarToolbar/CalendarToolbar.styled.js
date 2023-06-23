import styled from 'styled-components';

export const CalendarToolBarStyled = styled.div`
  display: inline-flex;
  flex-direction: column;

  gap: 18px;

  width: 335px;
  height: 82px;

  margin-bottom: 24px;

  @media screen and (max-width: 370px) {
    height: 100px;
    gap: 30px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 34px;
    width: 704px;

    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 1087px;
    height: 34px;
    margin: auto;
    margin-bottom: 32px;
  }
`;
