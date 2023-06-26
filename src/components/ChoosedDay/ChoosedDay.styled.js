import styled from 'styled-components';

export const ChoosedDayStyled = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0 20px;
  width: 100%;

  margin: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
