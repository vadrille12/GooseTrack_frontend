import styled from 'styled-components';

import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  width: 396px;
  height: 360px;
  padding: 40px 28px;
  background-color: #fff;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;
`;

export const InputTitle = styled(Field)`
  width: 340px;
  height: 46px;
  padding: 14px 18px;
  border-radius: 8px;
  background: #f6f6f6;
  border: none;

  color: #343434;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  &::placeholder {
    color: #343434;
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 18px;
`;

export const InputTime = styled(Field)`
  width: 163px;
  height: 46px;
  padding: 14px 18px;
  border-radius: 8px;
  background: #f6f6f6;
  border: none;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  color: #343434;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioField = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  position: relative;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-top: 28px;

  color: #343434;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  transition: transform 250ms linear;
`;

export const RadioSpan = styled.span`
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return 'black';
    }
  }};

  ${RadioLabel}:nth-child(1) ${RadioField}:checked + & {
    outline: 1.2px solid #72c2f8;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(2) ${RadioField}:checked + & {
    outline: 1.2px solid #f3b249;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(3) ${RadioField}:checked + & {
    outline: 1.2px solid #ea3d65;
    outline-offset: 1px;
  }

  /* ${RadioLabel}:nth-child(1) &:hover,&:focus {
    outline: 1.2px solid #72c2f8;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(2) &:hover,&:focus {
    outline: 1.2px solid #f3b249;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(3) &:hover,&:focus {
    outline: 1.2px solid #ea3d65;
    outline-offset: 1px;
  } */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 32px;
`;

export const ButtonAddorEdit = styled.button`
  display: flex;
  width: 182px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;

  border-radius: 8px;
  border: none;
  background-color: #3e85f3;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
`;

export const ButtonCancel = styled.button`
  width: 144px;
  height: 48px;
  padding: 15px;

  border-radius: 8px;
  border: none;
  background: #efefef;

  color: #111;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
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
