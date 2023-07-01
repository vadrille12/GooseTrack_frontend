import styled from 'styled-components';

export const Section = styled.div`
  background-color: #fff;
`;

export const Container = styled.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 1157px;
    margin-bottom: 118px;
  }
`;

export const SliderWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  color: #3e85f3;
  text-align: center;
  margin: 0 auto 40px auto;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin: 0 auto 50px auto;
  }
`;

export const ReviewSliderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid #e7e5e5;
  padding: 24px;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #616161;
  margin-right: 18px;
`;

export const AvatarImg = styled.img`
width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #13151a;
`;

export const Rate = styled.div`
  width: 110px;
  height: 14px;
  margin-top: 11px;
`;

export const ReviewText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  margin: 0 auto 36px auto;
  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;

export const ReviewContentBox = styled.div`
  display: flex;
`;

export const SwiperNavBox = styled.div`
  width: 125px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 147px;
    height: 61px;
  }
`;

export const SwiperNavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 50px;
  height: 46px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
  @media screen and (min-width: 768px) {
    width: 61px;
    height: 48px;
  }
`;
