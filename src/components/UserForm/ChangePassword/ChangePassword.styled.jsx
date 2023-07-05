import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';
import { ReactComponent as IconClose } from 'images/close.svg';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;

  background-color: ${props => props.theme.page_bg};
  border-radius: 8px;

  @media screen and (max-width: 345px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 32px;

  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;

  color: ${props => props.theme.text_3};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  min-width: 276px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;

  color: ${props => props.theme.text_7};

  @media screen and (min-width: 768px) {
    min-width: 320px;
    font-size: 14px;
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
      min-width: 330px;
      margin-bottom: 30px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
    }
  }

  &.is-valid {
    color: #${variables.colors.greenValid};
  }

  &.is-invalid {
    color: #${variables.colors.redErrorLight};
  }

  & p {
    position: absolute;
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    color: ${variables.colors.greenValid};
  }

  & .error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Field = styled(FormikField)`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.29px;

  color: ${props => props.theme.title};
  background: ${props => props.theme.page_bg};
  outline: none;
  border: 1px solid ${props => props.theme.input_border_2};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }

  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.15);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.12;
    }
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.title};
    transition: ${variables.transitions.standart};
  }

  &.is-valid {
    border: 1px solid ${variables.colors.greenValid};
  }

  &.is-invalid {
    border: 1px solid ${variables.colors.redErrorLight};
  }
`;

export const PasswordInput = styled.div`
  position: relative;
  margin-top: 8px;
  transition: ${variables.transitions.standart};
`;

export const Input = styled.div`
  position: relative;
  margin-top: 8px;
  transition: ${variables.transitions.standart};
`;

export const Button = styled.button`
  @media (min-width: 374px) {
    width: 262px;
  }
  margin: 0 auto;
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

  transition: 250ms ease-in-out;

  :disabled {
    background-color: ${props => props.theme.disabled_btn};
    color: ${props => props.theme.text_3};

    &:hover,
    &:focus {
      box-shadow: none;
      transition: none;
      transform: none;
      cursor: none;
    }
  }
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.shadow};
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  position: absolute;
  margin-left: 18px;
  margin-top: 8px;

  color: ${variables.colors.redError};
`;

export const HidePassword = styled.span`
  position: absolute;
  right: 15px;
  top: 16px;
  color: ${props => props.theme.text_3};
  cursor: pointer;
  transition: color ${variables.transitions.standart};

  @media (min-width: 768px) {
    top: 20px;
  }

  &:hover,
  &:focus {
    color: ${variables.colors.primary};
  }
`;

export const ButtonCloseWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseIcon = styled(IconClose)`
  transition: stroke 250ms linear;
  stroke: ${props => props.theme.title};

  &:hover,
  &:focus {
    stroke: ${props => props.theme.close_btn};
  }
`;
