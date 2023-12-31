import styled from 'styled-components';

export const CalendarToolBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 18px;

  width: 335px;
  height: 82px;

  margin: 0 auto 24px auto;

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
    margin-left: 0;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 1087px;
    height: 34px;
  }
`;
