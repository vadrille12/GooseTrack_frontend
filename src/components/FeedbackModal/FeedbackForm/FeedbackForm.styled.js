import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';

import { Field, ErrorMessage as FormikErrorMessage} from 'formik';

export const Wrap = styled.div`
  position: relative;
  text-align: left;
  padding: 28px 20px;
  border-radius: 16px;
  width: 335px;
  background: ${variables.colors.background};

  @media (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;

export const Label = styled.label`
    color: #343434CC;
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: calc((14 / 12) * 100%);
`;

export const WrapForReview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const WrapForEdit = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => { return props.isActive ? '#3E85F3' : '#E3F3FF'}} ;
  background-color:  #E3F3FF;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  stroke:  ${props => { return props.isActive ? '#FFFFFF' : '#3E85F3'}} ;
  stroke:  #3e85f3;
  cursor: pointer;
  transition: stroke ${variables.transitions.standart}, background-color ${variables.transitions.standart};

  &:hover, 
  &:focus {
    stroke: #FFFFFF;
    background-color: #3E85F3;
  }
`

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  background-color: #EA3D6533;
  stroke: #EA3D65;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: stroke ${variables.transitions.standart}, background-color ${variables.transitions.standart};

  &:hover, 
  &:focus {
    stroke: #ffffff;
    background-color: #EA3D65;
  }
`;

export const Input = styled(Field)`
    resize:  none;
    margin-bottom: 14px;
    padding: 12px 0 12px 14px;
    width: 295px;
    box-sizing: border-box;
    height: 127px;
    font-weight: 600;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
    color: #343434;

    background-color: #F6F6F6;
    border-radius: 8px;
    border: 1px solid transparent;

    transition: border ${variables.transitions.standart};
    /* cursor: ${props=>{return props.isActive ? "text" : "not-allowed"}}; */
    
    @media (min-width: 768px) {
        width: 404px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 18px;
    }

    &:hover,
    &:focus {
      border: 1px solid #111111;
    }

    ::placeholder {
      opacity: 1;
      color: #343434;
      font-weight: 600;
      font-size: 14px;
}
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-bottom: 14px;
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  max-width: 240px;
  font-size: 12px;
  font-weight: 500;
  @media (min-width: 768px) {
    max-width: 330px;
  }
`;

export const FormBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FormBtn = styled.button`
  color: #ffffff;
  background-color: ${variables.colors.primary};
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color ${variables.transitions.standart};
  &:hover, 
  &:focus {
    background-color: ${variables.colors.secondary};
  }
`;

export const FormBtnCancel = styled.button`
  color: #343434;
  background-color: #E5EDFA;
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: color ${variables.transitions.standart};
  &:hover, 
  &:focus {
    color: ${variables.colors.secondary};
  }
`;

export const BtnCloseWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  stroke: ${variables.colors.closeButton};

  transition: stroke ${variables.transitions.standart};
  &:hover, 
  &:focus {
    stroke: ${variables.colors.secondary};
  }
`;