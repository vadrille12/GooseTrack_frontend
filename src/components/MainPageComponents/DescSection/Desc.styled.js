import styled from 'styled-components';

export const ContainerMain = styled.div`
  background-color: #fff;
`;

export const WrapperDesc = styled.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
  padding-bottom: 64px;

  @media screen and (max-width: 345px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
    max-width: 1184px;
    padding-bottom: 100px;
  }
`;

export const DescSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1184px;
    max-width: 1184px;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;

export const DescSectionBox = styled.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 275px;
    max-width: 275px;
    margin-left: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 77px;
    margin-bottom: 0;
  }
`;

export const DescSectionBoxСontr = styled.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 275px;
    max-width: 275px;
    margin-right: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 77px;
    margin-bottom: 0;
  }
`;

export const Number = styled.h1`
  margin-top: 0;
  margin-bottom: 22px;
  font-family: Inter;
  font-weight: 700;
  font-size: 80px;
  line-height: 0.8;
  letter-spacing: -4px;
  color: #3e85f3;

  @media screen and (min-width: 768px) {
    font-size: 104px;
    line-height: 1.04;
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 8px;
  padding: 8px 18px;
  font-family: Inter;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-align: center;
  color: #3e85f3;
  background-color: #dcebf7;
  border-radius: 44px;

  @media screen and (min-width: 768px) {
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const TitleContr = styled.h1`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 14px;
  padding: 8px 18px;
  font-family: Inter;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-align: center;
  color: #3e85f3;
  background-color: #dcebf7;
  border-radius: 44px;

  @media screen and (min-width: 768px) {
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 28px;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 14px;
  font-family: Inter;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  color: #171820;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  max-width: 335px;
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #343434;

  @media screen and (min-width: 768px) {
    width: 275px;
    max-width: 275px;
  }
`;
