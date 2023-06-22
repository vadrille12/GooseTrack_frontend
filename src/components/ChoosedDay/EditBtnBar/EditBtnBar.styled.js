import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';
import { ReactComponent as Move } from '../../../images/tasksSvg/move-right.svg';
import { ReactComponent as Edit } from '../../../images/tasksSvg/edit.svg';
import { ReactComponent as Delete } from '../../../images/tasksSvg/del.svg';

export const EditBntContainer = styled.div`
  display: flex;
  gap: 13px;

  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }

  button {
    width: 14px;
    height: 14px;

    justify-content: center;
    align-items: center;
  }
`;

export const MoveBtn = styled(Move)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${variables.colors.black};
  transition: ${variables.transitions.standart};

  &:hover {
    stroke: ${variables.colors.secondary};
  }
`;

export const EditBtn = styled(Edit)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${variables.colors.black};
  transition: ${variables.transitions.standart};
  &:hover {
    stroke: ${variables.colors.secondary};
  }
`;

export const DeleteBtn = styled(Delete)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${variables.colors.black};
  transition: stroke 250ms linear;
  &:hover {
    stroke: ${variables.colors.secondary};
  }
`;
