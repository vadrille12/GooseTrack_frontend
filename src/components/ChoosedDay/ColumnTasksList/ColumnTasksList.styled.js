import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';
import { ReactComponent as Move } from '../../../images/tasksSvg/move-right.svg';
import { ReactComponent as Edit } from '../../../images/tasksSvg/edit.svg';
import { ReactComponent as Delete } from '../../../images/tasksSvg/del.svg';

export const ColumnTasksListStyled = styled.div`
  display: block;
  /* flex-wrap: wrap; */
  justify-content: center;
  width: 299px;
  height: 108px;

  padding: 14px 14px 18px 14px;

  background: #f7f6f9;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    height: 112px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const TaskText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 28px;
  color: #111111;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  /* background: url(.jpg); */
  border: 2px solid #3e85f3;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Status = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;

  color: #f7f6f9;

  height: 20px;

  background: #72c2f8;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AvatarGroupContainer = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

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
