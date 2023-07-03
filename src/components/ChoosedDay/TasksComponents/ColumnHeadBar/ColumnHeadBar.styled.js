import styled from 'styled-components';
import { variables } from '../../../../Styles/GlobalStyle';
import { ReactComponent as Plus } from '../../../../images/tasksSvg/plus.svg';

export const ColumnHeadBarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 25px 18px 0 18px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TaskTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  text-align: center;

  color: ${props => props.theme.title};
`;

export const TaskHeaderBtn = styled(Plus)`
  width: 22px;
  height: 22px;

  cursor: pointer;

  stroke: ${props => props.theme.title};
  transition: ${variables.transitions.standart};

  &:hover {
    stroke: ${variables.colors.primary};
    scale: 1.2;
  }
`;
