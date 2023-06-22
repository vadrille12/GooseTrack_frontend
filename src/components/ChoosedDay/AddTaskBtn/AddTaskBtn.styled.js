import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';

export const AddTaskBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0 16px 0;
  margin-top: 14px;

  width: 299px;
  height: 48px;

  background: #e3f3ff;
  border: 1px dashed #3e85f3;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  cursor: pointer;

  color: #111111;

  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    color: ${variables.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.shadow};
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 1280px) {
  }

  span {
    margin-right: 8px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 400;
  }
`;
