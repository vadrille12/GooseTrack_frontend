import styled from 'styled-components';

export const CalendarToolbarStyled = styled.div`
  display: inline-flex;
  flex-direction: column;

  /* align-items: center;
  justify-content: center;
  text-align: center; */

  gap: 18px;

  width: 335px;
  height: 82px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 1087px;
    height: 34px;
  }
`;
