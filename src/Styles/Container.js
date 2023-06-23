import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 20px;
  width: 100%;

  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 25px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 25px 32px;
  }
`;
