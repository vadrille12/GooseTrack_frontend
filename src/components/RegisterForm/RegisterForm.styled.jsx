import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;

  background-color: FFFFFF;
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
  font-weight:  600;
  font-size: 18px;
  line-height: 1.33;

  color: #3E85F3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  font-family: Inter;
  font-weight:  600;
  font-size:12px;
  line-height: 1.25;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }

  &:nth-of-type(3) {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
    }
  }

  &.is-valid {
    color: #3CBC81;
  }

  &.is-invalid {
    color: #E74A3B;
  }

  & p {
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    color: 3CBC81;
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

  color: #111111;
  outline: none;
  border: 1px solid rgba(17, 17, 17, 0.15);
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
    border: 1px solid #111111;
  }

  &.is-valid {
    border: 1px solid 3CBC81;
  }

  &.is-invalid {
    border: 1px solid #E74A3B;
  }
`;

export const PasswordInput = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const Input = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const VisibilityBtn = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);

  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & svg.is-valid {
    stroke: #3CBC81;
    fill: #3CBC81;
  }

  & svg.is-invalid {
    stroke: #E74A3B;
    fill: #E74A3B;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding-top: 14px;
  padding-bottom: 14px;

  font-family: Inter;
  font-weight:600;
  font-size: 14px;
  line-height: 1.28px;
  letter-spacing: -0.02em;

  border: none;
  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  color: #FFFFFF;
  background-color: #3E85F3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &:hover,
  &:focus {
    background-color: #2B78EF;
  }
`;

export const Svg = styled.svg`
  stroke: #FFFFFF;
  height: 18px;
  width: 18px;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  margin-top: 8px;
  color: #DA1414;
`;
