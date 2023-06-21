import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 20px;
  text-align: center;
  margin: 0 auto;
  width: 375px;

  justify-content: center;
  display: flex;
  flex-direction: column;

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
