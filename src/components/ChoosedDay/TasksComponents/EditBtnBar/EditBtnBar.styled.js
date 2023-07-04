import styled from 'styled-components';
import { variables } from '../../../../Styles/GlobalStyle';
import { ReactComponent as Move } from '../../../../images/tasksSvg/move-right.svg';
import { ReactComponent as Edit } from '../../../../images/tasksSvg/edit.svg';
import { ReactComponent as Delete } from '../../../../images/tasksSvg/del.svg';
import Popover from '@mui/material/Popover';

export const PopoverStyled = styled(Popover)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const EditBtnContainer = styled.div`
  display: flex;
  gap: 13px;
  position: relative;

  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
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
  stroke: ${props => props.theme.title};
  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    stroke: ${variables.colors.secondary};
    scale: 1.2;
  }
`;

export const EditBtn = styled(Edit)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.title};
  transition: ${variables.transitions.standart};
  &:hover,
  :focus {
    stroke: ${variables.colors.secondary};
    scale: 1.2;
    ${MoveBtn} {
      stroke: ${variables.colors.secondary};
    }
  }
`;

export const DeleteBtn = styled(Delete)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.title};
  transition: stroke 250ms linear;
  &:hover,
  :focus {
    stroke: ${variables.colors.secondary};
    scale: 1.2;
  }
`;

export const ChangeCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 115px;
  height: 70px;
  border-radius: 8px;
  background-color: ${variables.colors.background};

  gap: 2px;

  color: #343434;
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;

  align-items: center;
  justify-content: center;
  text-align: center;

  box-shadow: ${variables.shadow.shadow};

  padding: 8px 10px;

  overflow: visible;

  @media screen and (min-width: 768px) {
    width: 147px;
    height: 90px;

    color: #343434;
    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
    line-height: 18px;

    gap: 7px;

    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MoveToInProgress = styled.div`
  button {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;

    cursor: pointer;

    display: flex;
    width: 120px;
    height: 26px;

    background: none;
    border: none;

    cursor: pointer;

    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition: ${variables.transitions.standart};

    @media screen and (max-width: 768px) {
      padding: 0 12px;
    }

    &:hover,
    :focus {
      color: ${variables.colors.secondary};

      ${MoveBtn} {
        stroke: ${variables.colors.secondary};
      }
    }

    ${MoveBtn} {
      width: 16px;
      height: 16px;
      stroke: ${variables.colors.black};
      transition: ${variables.transitions.standart};
    }
  }
`;

export const MoveToDone = styled.div`
  button {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;

    cursor: pointer;

    display: flex;
    width: 120px;
    height: 26px;

    background: none;
    border: none;

    cursor: pointer;

    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition: ${variables.transitions.standart};

    @media screen and (max-width: 768px) {
      padding: 0 12px;
    }

    &:hover,
    :focus {
      color: ${variables.colors.secondary};

      ${MoveBtn} {
        stroke: ${variables.colors.secondary};
      }
    }

    ${MoveBtn} {
      width: 16px;
      height: 16px;
      stroke: ${variables.colors.black};
      transition: ${variables.transitions.standart};
    }
  }
`;
