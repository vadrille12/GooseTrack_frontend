import styled from 'styled-components';
import { variables } from '../../../../Styles/GlobalStyle';

export const AddTaskBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0 16px 0;
  margin: 0 auto 10px auto;

  width: 297px;
  height: 48px;

  background: ${props => props.theme.addtask_btn};
  border: 1px dashed #3e85f3;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  cursor: pointer;

  color: ${props => props.theme.title};

  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    color: ${props => props.theme.title_2};
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.shadow};
  }

  @media screen and (min-width: 768px) {
    margin: 32px auto 28px auto;
    width: 304px;
  }

  @media screen and (min-width: 1440px) {
  }

  span {
    margin-right: 8px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 400;
  }
`;

export const AddTaskBtnContainer = styled.div`
  padding-left: 11px;
  padding-right: 6px;

  @media screen and (min-width: 1440px) {
    padding-left: 13px;
    padding-right: 6px;
  }
`;
