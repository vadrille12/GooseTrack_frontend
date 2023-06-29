import styled from 'styled-components';
import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

import { ReactComponent as Icon } from 'images/user/cross.svg';
import { ReactComponent as IconErrors } from 'images/user/error.svg';
import { ReactComponent as IconSuccess } from 'images/user/done.svg';
import { ReactComponent as IconArrow } from 'images/user/arrow-down.svg';

export const Wrap = styled.div`
  position: relative;
  /* display: flex; */
  margin: 151px 32 32 32;

  border-radius: 16px;

  padding: 18px;
  background-color: ${props => props.theme.page_bg};
  padding-top: 0px;
  @media (max-width: 374px) {
    /* width: 299px; */
  }
  @media (min-width: 375px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin: 132px 32 32 32;
    padding: 40px 175px;
  }

  @media (min-width: 1440px) {
    min-height: 752px;
    margin: 116px 32 32 32;
    padding: 60px 165px;
  }
`;

export const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 374px) {
    position: relative;
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

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 72px;
  height: 68px;
  align-items: center;
  @media (min-width: 768px) {
    width: 124px;
    height: 120px;
  }
`;

export const AvatarSvg = styled.div`
  position: absolute;
  top: -16px;
  right: -34px;
  align-content: center;
  cursor: pointer;
  @media (max-width: 767px) {
    top: -9px;
    right: -20px;
  }
`;
export const AddIcon = styled(Icon)`
  width: 24;
  height: 24;
  @media (max-width: 767px) {
    width: 14px;
    height: 14px;
  }
  &:hover,
  &:focus {
    transform: scale(1.5);
    transition: all 0.5s;
  }
`;

export const UserWrapInfo = styled.div`
  margin-bottom: 44px;
  margin-top: 60px;
  align-items: center;
`;

export const UserName = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 0;
  color: ${props => props.theme.text_3};
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const User = styled.p`
  color: ${props => props.theme.text_6};
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
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  &:not(:last-child) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
  @media (min-width: 768px) {
    max-width: 354px;
    row-gap: 24px;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }
`;
export const Label = styled.label`
  position: relative;
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;

  line-height: calc((14 / 12) * 100%);
  color: ${props => props.theme.text_7};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }

  &.is-valid {
    color: #3cbc81;
  }

  &.is-invalid {
    color: #e74a3b;
  }

  & p {
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    color: #3cbc81;
  }

  &.error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const IconDone = styled(IconSuccess)`
  width: 18px;
  height: 18px;
  position: absolute;
  align-content: center;
  top: 30%;
  right: 18px;
  @media (min-width: 768px) {
    top: 11px;
    width: 24px;
    height: 24px;
  }
`;
export const IconError = styled(IconErrors)`
  width: 18px;
  height: 18px;
  position: absolute;
  align-content: center;
  top: 12px;
  right: 18px;
  @media (min-width: 768px) {
    /* top: 33%;
    right: 18px; */
    top: 11px;
    width: 24px;
    height: 24px;
  }
`;

export const IconArrowDown = styled(IconArrow)`
  width: 14px;
  height: 14px;
  position: absolute;
  align-content: center;
  top: 35%;
  right: 40px;
  stroke: ${props => props.theme.title};
  @media (min-width: 768px) {
    top: 14px;
    width: 18px;
    height: 18px;
  }
`;

export const Field = styled(FormikField)`
  /* margin-top: 8px; */
  width: 100%;
  height: 42px;
  border: 1px solid ${props => props.theme.input_border_2};
  border-radius: 8px;
  padding: 14px;
  background: ${props => props.theme.page_bg};

  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: ${props => props.theme.title};
  outline: none;
  cursor: text;

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
  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    line-height: 1.29;

    color: rgba(17, 17, 17, 0.15);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: calc((18 / 16) * 100%);
    }
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.scroll_bar};
  }

  &.is-valid {
    border: 1px solid #3cbc81;
  }

  &.is-invalid {
    border: 1px solid #e74a3b;
  }
`;

export const Input = styled.div`
  width: 100%;
  position: relative;
  margin-top: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  margin-top: 8px;
  max-width: 100%;
  color: #da1414;
  max-width: 240px;
  @media (min-width: 768px) {
    max-width: 330px;
  }
`;

export const FormBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBtn = styled.button`
  width: 100%;
  @media (min-width: 374px) {
    width: 262px;
  }
  height: 48px;
  padding: 14px;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 16) * 100%);
  text-align: center;
  text-transform: none;
  border: none;
  border-radius: 16px;

  color: #ffffff;
  background-color: #3e85f3;

  cursor: pointer;
  :disabled {
    background-color: #dcebf7;
  }
  /* &:hover,
  &:focus {
    background-color: #2b78ef;
  } */
`;
