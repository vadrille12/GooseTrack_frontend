import styled from 'styled-components';

export const DayCalendarHeadStyledMobile = styled.ul`
  min-width: 335px;
  height: 74px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 14px 22px;
  margin: auto;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  @media screen and (max-width: 480px) {
    gap: 2px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DayBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const DayNameMobile = styled.span`
  width: 16px;
  height: 18px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  text-transform: uppercase;

  color: #343434;
`;

export const DateMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  text-transform: uppercase;

  width: 27px;
  height: 26px;

  border-radius: 8px;
  background: none;

  justify-content: center;
  align-items: center;
  border: none;

  &.active {
    background: #3e85f3;
    color: #ffffff;
  }
`;

export const DayCalendarHeadStyledDesktop = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 56px;

    padding: 10px 35px;
    margin: 0 auto;

    width: 704px;
    height: 68px;

    background: #ffffff;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 1087px;
    height: 68px;

    padding: 10px 46px;

    gap: 114px;
  }
`;

export const DayName = styled.span`
  width: 22px;
  height: 18px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  text-transform: uppercase;

  color: #343434;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;
  margin: 2px auto;

  width: 27px;
  height: 26px;

  background: #3e85f3;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  text-transform: uppercase;

  color: #343434;

  justify-content: center;
  align-items: center;
  border: none;
  background: none;

  &.active {
    background: #3e85f3;
    color: #ffffff;
  }
`;
