import {
  ColumnHeadBarStyled,
  TaskTitle,
  TaskHeaderBtn,
} from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ taskName, onOpen }) => {
  return (
    <ColumnHeadBarStyled>
      <TaskTitle>{taskName}</TaskTitle>
      <TaskHeaderBtn onClick={onOpen}></TaskHeaderBtn>
    </ColumnHeadBarStyled>
  );
};
