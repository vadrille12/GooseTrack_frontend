import styled from 'styled-components';

export const DateBarStyled = styled.div`
  display: block;
  width: 335px;
  height: 30px;
  gap: 2px;

  @media screen and (min-width: 480px) {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

export const DateContainer = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CurrentDate = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;

  background: #3e85f3;

  width: 109px;
  height: 30px;
  border-radius: 8px;
`;
