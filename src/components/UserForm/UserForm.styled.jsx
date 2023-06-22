import styled from 'styled-components';
import { Field} from 'formik';

export const Wrap = styled.div`
  margin: 151px 32 32 32;
  border-radius: 16px;
  max-width: 100%;
  min-height: 752px;

  background-color: #ffffff;

  @media (min-width: 768px) {
    margin: 132px 32 32 32;
    padding: 60px 165px;
  }

  @media (min-width: 1440px) {
    max-width: 1087px;
    min-height: 752px;
    margin: 116px 32 32 32;
  }
`;
   
export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const AvatarBox = styled.div`
  position: relative;
  width: 124px;
  height: 124px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #3e85f3;
  background-color: #f8f8f8;
  margin-bottom: 20px;
`;

export const AvatarSvg = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 100px;
  right: 24px;
  border-radius: 50%;
  background-color: #3e85f3;
  font-size: 20px;
  color: #ffffff;
  align-content: center;
`;

export const UserWrapInfo = styled.div`
  margin-bottom: 44px;
  align-items: center;
`;

export const UserName = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 0;
  color: #343434;
`;

export const User = styled.p`
  color: #343434;
  font-weight: 600;
  font-size: 14px;
`;

export const FormInputWrap = styled.div`
  padding-left: auto;
  padding-left: auto;
  margin-bottom: 88px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }
`;

export const Label = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
`;

export const Input = styled(Field)`
  margin-top: 8px;
  margin-bottom: 24px;
  width: 100%;
  height: 46px;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;
  padding: 14px 0 14px 18px;
  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
  }

  @media (min-width: 1440px) {
  }
  &:hover,
  &:focus {
  }
`;

export const FormBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBtn = styled.button`
  color: #ffffff;
  background-color: #3e85f3;
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
`;
