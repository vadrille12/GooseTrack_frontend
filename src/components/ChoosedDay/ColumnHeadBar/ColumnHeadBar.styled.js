import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';
import { ReactComponent as Plus } from '../../../images/tasksSvg/plus.svg';

export const ColumnHeadBarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const TaskTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  text-align: center;

  color: #111111;
`;

export const TaskHeaderBtn = styled(Plus)`
  width: 22px;
  height: 22px;

  cursor: pointer;

  stroke: ${variables.colors.black};
  transition: ${variables.transitions.standart};

  &:hover {
    stroke: ${variables.colors.primary};
  }
`;
