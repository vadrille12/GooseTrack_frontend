import styled from 'styled-components';
import { Field} from 'formik';
import { ReactComponent as Icon } from 'images/user/cross.svg';

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin: 151px 32 32 32;
  border-radius: 16px;
  max-width: 100%;
  padding: 18px;
  @media (max-width: 767px) {
    padding-top: 0px;
  }
  background-color: #ffffff;

  @media (min-width: 768px) {
    margin: 132px 32 32 32;
    padding: 40px 175px;
  }

  @media (min-width: 1440px) {
    max-width: 1087px;
    min-height: 752px;
    margin: 116px 32 32 32;
    padding: 60px 165px;
  }
`;

export const Img = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #3e85f3;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;
   
export const AvatarWrap = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 373px) {
    position:relative;
  }
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
  background-color: #dcebf7;
  @media (max-width: 767px) {
    width: 72px;
    height: 72px;
    margin-bottom: 0px;
    position: absolute;
    top: -33px;
  }
`;

export const AvatarSvg = styled.div`
  position: absolute;
  top: 100px;
  right: 24px;
  align-content: center;
  cursor:pointer;
  @media (max-width: 767px) {
    top: 58px;
    right: 7px;
  }
`;
export const AddIcon = styled(Icon)`
  width: 100%;
  height: 100%;
  @media (max-width: 767px) {
    width: 14px;
    height: 14px;
    top: 58px;
    right: 7px;
  }
  &:hover,
  &:focus {
    transform: scale(1.5);
    transition: all 0.5s;
  }
`;

export const UserWrapInfo = styled.div`
  margin-bottom: 44px;
  margin-top:60px;
  align-items: center;
`;

export const UserName = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 0;
  color: #343434;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const User = styled.p`
  color: #343434;
  font-weight: 600;
  font-size: 14px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const FormInputWrap = styled.div`
  margin-bottom: 40px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    margin-bottom: 88px;
  }
`;

export const FormInputBox = styled.div`
  width: 100%;
 
  &:hover,
  &:focus {
  }
`;

export const Label = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: calc((14 / 12) * 100%);
 
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }

  @media (min-width: 1440px) {
  }
`;
export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 18px;
  @media (min-width: 768px) {
      margin-bottom: 24px;
  }
`;

export const Input = styled(Field)`
  margin-top: 8px;
  width: 100%;
  height: 42px;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;
  padding: 14px 0 14px 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  cursor: pointer;
  
  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding: 14px 0 14px 18px;
    font-size: 16px;
    line-height: calc((18 / 16) * 100%);
  }

  @media (min-width: 1440px) {
    margin-bottom: 0px;
  }
  &:hover,
  &:focus {
    border-color: #343434;
    transform: scale(1.1);
    transition: all 0.5s;
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
  cursor: pointer;

  :disabled {
    background-color: #dcebf7;
  }
  &:hover,
  &:focus {
  }
`;



